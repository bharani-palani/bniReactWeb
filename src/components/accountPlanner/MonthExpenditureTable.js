import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { monthExpenditureConfig } from "../configuration/backendTableConfig";
import BackendCore from "../../components/configuration/backend/BackendCore";
import helpers from "../../helpers";

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

  return (
    <div className="settings">
      <div className="backendConfigureSection">
        <div className="btn btn-capsule btn-sm active mt-10">{monthYearSelected}</div>
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
