import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { monthExpenditureConfig } from "../configuration/backendTableConfig";
import BackendCore from "../../components/configuration/backend/BackendCore";
import helpers from "../../helpers";
import apiInstance from "../../services/apiServices";

const MonthExpenditureTable = props => {
  const { monthYearSelected, bankSelected } = props;
  const [WhereClause, setWhereClause] = useState("");
  useEffect(() => {
    if(monthYearSelected && bankSelected){
      let [smonth, year] = monthYearSelected.split("-");
      const month = helpers.strToNumMonth[smonth];
      const calDays = new Date(year, month, 0).getDate();
      const wClause = `inc_exp_date between "${year}-${month}-01" and "${year}-${month}-${calDays}" and inc_exp_bank = ${bankSelected}`;
      setWhereClause(wClause);
    }
  }, [monthYearSelected, bankSelected]);

  const getTemplate = () => {
    return apiInstance
      .get("/account_planner/credit_card_list")
      .then(res => res.data.response)
      .catch(error => {
        console.log(error);
      });
  };

  const cloneFromTemplate = () => {
    const a = getTemplate();
    Promise.all([a]).then(r => {
      console.log(r[0])
    });
  }
  return (
    <div className="settings">
      <div className="backendConfigureSection">
        <div className="equal-grid-2 mt-10">
          <button className="btn btn-capsule btn-sm active disabled">{monthYearSelected}</button>
          <div>
            <i onClick={() => cloneFromTemplate()} className="fa fa-copy roundedButton pull-right" />
          </div>
        </div>
        {monthYearSelected && bankSelected &&
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
