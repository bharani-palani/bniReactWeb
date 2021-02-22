import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { monthExpenditureConfig } from "../configuration/backendTableConfig";
import BackendCore from "../../components/configuration/backend/BackendCore";
import helpers from "../../helpers";
import apiInstance from "../../services/apiServices";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const MonthExpenditureTable = props => {
  const { monthYearSelected, bankSelected } = props;
  const [WhereClause, setWhereClause] = useState("");
  const [insertData, setInsertData] = useState([]);
  const [planCards, setPlanCards] = useState([]);
  useEffect(() => {
    if (monthYearSelected && bankSelected) {
      let [smonth, year] = monthYearSelected.split("-");
      const month = helpers.strToNumMonth[smonth];
      const calDays = new Date(year, month, 0).getDate();
      const wClause = `inc_exp_date between "${year}-${month}-01" and "${year}-${month}-${calDays}" and inc_exp_bank = ${bankSelected}`;
      setWhereClause(wClause);
    }
  }, [monthYearSelected, bankSelected]);

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

  const renderPlanTooltip = (props, planArray) => {
    const values = planArray.map(p => p.inc_exp_name).join(" | ");
    return values ? (
      <Tooltip id="button-tooltip-2" className="in show" {...props}>
        {values}
      </Tooltip>
    ) : (
      <Tooltip />
    );
  };

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
            inc_exp_type: temp_inc_exp_type,
            inc_exp_date: "",
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
    const cards = [
      { key: "goodPlans", planString: "Good plans", planArray: plan.goodPlans },
      {
        key: "achievedPlans",
        planString: "Achieved plans",
        planArray: plan.achievedPlans
      },
      { key: "badPlans", planString: "Bad plans", planArray: plan.badPlans },
      { key: "noPlans", planString: "No plans", planArray: plan.noPlans }
    ];
    setPlanCards(cards);
  };
  const getFontColor = key => {
    switch (key) {
      case "goodPlans":
        return "text-success";
      case "achievedPlans":
        return "text-primary";
      case "badPlans":
        return "text-danger";
      case "noPlans":
        return "text-warning";
      default:
        return "";
    }
  };
  const getPlanAmount = planArray =>
    helpers.indianLacSeperator(
      planArray.reduce((x, y) => x + y.inc_exp_plan_amount, 0)
    );
  return (
    <div className="settings">
          {/* <div>
        {JSON.stringify([Boolean(monthYearSelected &&
          bankSelected &&
          WhereClause)])}
      </div> */}
      <div className="backendConfigureSection">
        <div className="equal-grid-2 mt-10">
          <div>
            <button className="btn btn-capsule btn-sm active disabled">
              {monthYearSelected}
            </button>
          </div>
          <div>
            <div>
              <OverlayTrigger
                placement="top"
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
                overlay={renderCloneTooltip(props, "Add Expense")}
                triggerType="hover"
              >
                <i
                  onClick={() => alert("Add Expense")}
                  className="fa fa-upload roundedButton pull-right"
                />
              </OverlayTrigger>
            </div>
            <div>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderCloneTooltip(props, "Export XLS")}
                triggerType="hover"
              >
                <i
                  onClick={() => alert("Export XLS")}
                  className="fa fa-file-excel-o roundedButton pull-right"
                />
              </OverlayTrigger>
            </div>
          </div>
        </div>
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
                onTableUpdate={dbData => calculatePlanning(dbData)}
              />
            ))}
      </div>
      <div className="row">
        {planCards.map(plan => (
          <div key={plan.key} className="col-md-3 mt-10 pr-1 pl-0">
            <div className="blog-box">
              <div className="post-media">
                <div className="title text-center">
                  <h4 className="posRelative">
                    {plan.planString}
                    <sup className="superScript">{plan.planArray.length}</sup>
                  </h4>
                </div>
              </div>
              <div className="blog-desc">
                <div className={`text-center ${getFontColor(plan.key)}`}>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderPlanTooltip(props, plan.planArray)}
                    triggerType="hover"
                  >
                    <div className="cursorHelp">
                      {getPlanAmount(plan.planArray)}
                    </div>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
