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
  const renderCloneTooltip = props => (
    <Tooltip id="button-tooltip-1" className="in show" {...props}>
      Clone from template
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

  return (
    <div className="settings">
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
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderCloneTooltip}
                triggerType="hover"
              >
                <i
                  onClick={() => cloneFromTemplate()}
                  className="fa fa-copy roundedButton pull-right"
                />
              </OverlayTrigger>
            </div>
            <div>
              <i
                onClick={() => alert(123)}
                className="fa fa-upload roundedButton pull-right"
              />
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
              />
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
