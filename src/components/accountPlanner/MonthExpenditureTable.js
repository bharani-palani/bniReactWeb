import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { monthExpenditureConfig } from "../configuration/backendTableConfig";
import BackendCore from "../../components/configuration/backend/BackendCore";
import helpers from "../../helpers";
import apiInstance from "../../services/apiServices";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";
import PlanInfoModal from "./PlanInfoModal";

const MonthExpenditureTable = props => {
  const { monthYearSelected, bankSelected } = props;
  const [WhereClause, setWhereClause] = useState("");
  const [insertData, setInsertData] = useState([]);
  const [planCards, setPlanCards] = useState([]);
  const [dbData, setDbData] = useState([]);
  const [planLoader, setPlanLoader] = useState(false);
  const [totals, setTotals] = useState([]);
  const [openPlanModal, setOpenPlanModal] = useState(false); // change to false
  const [selectedPlan, setSelectedPlan] = useState({});

  useEffect(() => {
    if (monthYearSelected && bankSelected) {
      let [smonth, year] = monthYearSelected.split("-");
      const month = helpers.strToNumMonth[smonth];
      const calDays = new Date(year, month, 0).getDate();
      const wClause = `inc_exp_date between "${year}-${month}-01" and "${year}-${month}-${calDays}" and inc_exp_bank = ${bankSelected}`;
      setWhereClause(wClause);
    }
  }, [monthYearSelected, bankSelected]);

  useEffect(() => {
    calculatePlanning(dbData);
  }, [JSON.stringify(dbData)]);

  const getTemplate = () => {
    return apiInstance
      .get("/account_planner/getIncExpTemplate")
      .then(res => res.data.response)
      .catch(error => {
        console.log(error);
      });
  };
  const renderCloneTooltip = (props, content) => (
    <Tooltip id="button-tooltip-1" className="in show" {...props}>
      {content}
    </Tooltip>
  );

  const cloneFromTemplate = () => {
    const a = getTemplate();
    Promise.all([a]).then(r => {
      const data = r[0];
      const insertData = data.map(
        ({ temp_inc_exp_name, temp_amount, temp_inc_exp_type }) => {
          return {
            inc_exp_id: "",
            inc_exp_name: temp_inc_exp_name,
            inc_exp_amount: temp_amount,
            inc_exp_plan_amount: temp_amount,
            inc_exp_type: temp_inc_exp_type,
            inc_exp_date: helpers.getNextMonthFirst(),
            inc_exp_category: "",
            inc_exp_bank: "",
            inc_exp_comments: ""
          };
        }
      );
      setInsertData(insertData);
    });
  };

  const calculatePlanning = dbData => {
    const plan = dbData
      .map(data => {
        data.inc_exp_plan_amount = Number(data.inc_exp_plan_amount);
        data.inc_exp_amount = Number(data.inc_exp_amount);
        return data;
      })
      .reduce(
        (a, b) => {
          a.planTotal += b.inc_exp_plan_amount;
          if (b.inc_exp_type === "Dr") {
            a.expenseTotal += b.inc_exp_amount;
          }
          if (b.inc_exp_type === "Cr") {
            a.incomeTotal += b.inc_exp_amount;
          }
          let diff = b.inc_exp_plan_amount / b.inc_exp_amount;
          diff = Number(
            ((diff === Infinity || isNaN(diff) ? 0 : diff) * 100).toFixed(2)
          );
          a.totalPlans.push(diff);
          const rest = {
            percent: diff,
            ...b
          };
          if (diff === 0) {
            a.noPlans.push(rest);
          }
          if (diff === 100) {
            a.achievedPlans.push(rest);
          }
          if (diff > 100) {
            a.goodPlans.push(rest);
          }
          if (diff < 100 && diff > 0) {
            a.badPlans.push(rest);
          }
          return a;
        },
        {
          planTotal: 0,
          expenseTotal: 0,
          incomeTotal: 0,
          totalPlans: [],
          goodPlans: [],
          badPlans: [],
          noPlans: [],
          achievedPlans: []
        }
      );
    const totals = [
      { amount: plan.incomeTotal, label: "Income", flagString: "success" },
      { amount: plan.expenseTotal, label: "Expense", flagString: "info" },
      {
        amount: plan.incomeTotal - plan.expenseTotal,
        label: "Balance",
        flagString: "danger"
      },
      { amount: plan.planTotal, label: "Planning", flagString: "warning" }
    ];
    setTotals(totals);
    const cards = [
      {
        key: "goodPlans",
        flagString: "success",
        planString: "Good plans",
        planArray: plan.goodPlans
      },
      {
        key: "achievedPlans",
        flagString: "info",
        planString: "Achieved plans",
        planArray: plan.achievedPlans
      },
      {
        key: "badPlans",
        flagString: "danger",
        planString: "Bad plans",
        planArray: plan.badPlans
      },
      {
        key: "noPlans",
        flagString: "warning",
        planString: "No plans",
        planArray: plan.noPlans
      }
    ];
    setPlanCards(cards);
  };
  const getPlanAmount = planArray =>
    planArray.reduce((x, y) => x + y.inc_exp_plan_amount, 0);
  const exportToPdf = () => {
    const body = dbData.map(
      (
        {
          inc_exp_name,
          inc_exp_amount,
          inc_exp_plan_amount,
          inc_exp_type,
          inc_exp_date,
          inc_exp_comments
        },
        i
      ) => {
        return [
          i + 1,
          inc_exp_name,
          inc_exp_amount,
          inc_exp_plan_amount,
          inc_exp_type,
          inc_exp_date,
          inc_exp_comments
        ];
      }
    );
    const now = helpers.getNow();
    const head = [
      "#",
      "Name",
      "Amount",
      "Plan amount",
      "Type",
      "Date",
      "Comments"
    ];
    const doc = new jsPDF();
    doc.text(
      `${helpers.stringToCapitalize(
        monthExpenditureConfig[0].Table
      )} (${monthYearSelected})`,
      15,
      10
    );
    doc.autoTable({
      styles: { overflow: "linebreak" },
      theme: "grid",
      head: [head],
      body: [...body]
    });

    const mTotal = totals.map(total => helpers.lacSeperator(total.amount));
    doc.autoTable({
      styles: { overflow: "linebreak", halign: "center" },
      theme: "striped",
      head: [["Income", "Expense", "Balance", "Planning"]],
      body: [mTotal]
    });

    const pTotal = planCards.map(plan =>
      helpers.lacSeperator(getPlanAmount(plan.planArray))
    );
    doc.autoTable({
      styles: { overflow: "linebreak", halign: "center" },
      theme: "striped",
      head: [["Good Plans", "Achieved Plans", "Bad Plans", "No Plans"]],
      body: [pTotal]
    });

    doc.save(`${monthExpenditureConfig[0].Table}-${now}`);
  };

  const onPlanClick = key => {
    let [smonth, year] = monthYearSelected.split("-");
    const month = helpers.strToNumMonth[smonth];
    const calDays = new Date(year, month, 0).getDate();
    let clause = {
      startDate: `${year}-${month}-01`,
      endDate: `${year}-${month}-${calDays}`,
      bankSelected
    };
    switch (key) {
      case "goodPlans":
        clause = { ...clause, label: "Good plans", criteria: `G100` };
        break;
      case "achievedPlans":
        clause = { ...clause, label: "Achieved plans", criteria: `E100` };
        break;
      case "badPlans":
        clause = { ...clause, label: "Bad plans", criteria: `0TO100` };
        break;
      case "noPlans":
        clause = { ...clause, label: "No plans", criteria: `E0` };
        break;
      default:
    }
    setOpenPlanModal(true);
    setSelectedPlan(clause);
  };
  return (
    <div className="settings">
      {openPlanModal && (
        <PlanInfoModal
          className="backendUpdate"
          show={openPlanModal}
          onHide={() => setOpenPlanModal(false)}
          size="lg"
          animation={false}
          monthYearSelected={monthYearSelected}
          bankSelected={bankSelected}
          selectedPlan={selectedPlan}
        />
      )}
      <div className="backendConfigureSection">
        {!planLoader && (
          <div className="equal-grid-2 mt-10">
            <div>
              <button className="btn btn-capsule btn-sm active disabled">
                {monthYearSelected}
              </button>
            </div>
            <div>
              <div>
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderCloneTooltip(props, "Clone template")}
                  triggerType="hover"
                >
                  <i
                    onClick={() => cloneFromTemplate()}
                    className="fa fa-copy roundedButton pull-right"
                  />
                </OverlayTrigger>
              </div>
              <div>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderCloneTooltip(props, "Fast shopping")}
                  triggerType="hover"
                >
                  <i
                    onClick={() => alert("Add Expense")}
                    className="fa fa-cart-plus roundedButton pull-right"
                  />
                </OverlayTrigger>
              </div>
              <div>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderCloneTooltip(props, "Export PDF")}
                  triggerType="hover"
                >
                  <i
                    onClick={() => exportToPdf()}
                    className="fa fa-file-pdf-o roundedButton pull-right"
                  />
                </OverlayTrigger>
              </div>
            </div>
          </div>
        )}
        {monthYearSelected &&
          bankSelected &&
          WhereClause &&
          monthExpenditureConfig
            .sort((a, b) => a.id > b.id)
            .map((t, i) => (
              <BackendCore
                key={i}
                Table={t.Table}
                TableRows={t.TableRows}
                WhereClause={WhereClause}
                rowElements={t.rowElements}
                showTotal={t.showTotal}
                rowKeyUp={t.rowKeyUp}
                getApiUrl="/account_planner/getAccountPlanner"
                postApiUrl="/account_planner/postAccountPlanner"
                insertCloneData={insertData}
                showTooltipFor={t.showTooltipFor}
                onTableUpdate={data => setDbData(() => [...data])}
                loaderState={lState => setPlanLoader(lState)}
              />
            ))}
      </div>
      {!planLoader && (
        <div>
          <div className="row">
            {totals.map(total => (
              <div key={total.label} className="col-md-3 mt-10 pr-0 pl-0">
                <div className="blog-box">
                  <div className="post-media">
                    <div className={`title text-center`}>
                      <h4 className="posRelative">{total.label}</h4>
                    </div>
                  </div>
                  <div className={`blog-desc black`}>
                    <div className={`text-center text-${total.flagString}`}>
                      {helpers.indianLacSeperator(total.amount)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {planCards.map(plan => (
              <div key={plan.key} className="col-md-3 mt-10 pr-0 pl-0">
                <div className="blog-box">
                  <div className="post-media">
                    <div className={`title text-center`}>
                      <h4 className="posRelative">
                        {plan.planString}
                        <sup className="superScript">
                          {plan.planArray.length}
                        </sup>
                      </h4>
                    </div>
                  </div>
                  <div className={`blog-desc black`}>
                    <div className={`text-center text-${plan.flagString}`}>
                      <div
                        onClick={() => onPlanClick(plan.key)}
                        className="cursorPointer"
                      >
                        {helpers.indianLacSeperator(
                          getPlanAmount(plan.planArray)
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

MonthExpenditureTable.propTypes = {
  property: PropTypes.string
};
MonthExpenditureTable.defaultProps = {
  property: "String name"
};

export default MonthExpenditureTable;
