import React from "react";
import PropTypes from "prop-types";
import { monthExpenditureConfig } from "../configuration/backendTableConfig";
import BackendCore from "../../components/configuration/backend/BackendCore";

const MonthExpenditureTable = props => {
    const { startDate, endtDate, bankSelected } = props;
    const WhereClause = 'inc_exp_date between "'+startDate+'" and "'+endtDate+'" and inc_exp_bank = "'+bankSelected+'"';
  return (
    <div className="settings">
      {monthExpenditureConfig
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
  );
};

MonthExpenditureTable.propTypes = {
  property: PropTypes.string
};
MonthExpenditureTable.defaultProps = {
  property: "String name"
};

export default MonthExpenditureTable;
