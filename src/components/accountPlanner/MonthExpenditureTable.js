import React from "react";
import PropTypes from "prop-types";
import { monthExpenditureConfig } from "../configuration/backendTableConfig";
import BackendCore from "../../components/configuration/backend/BackendCore";

const MonthExpenditureTable = props => {
  //   const { id, name } = props;
  return (
    <div className="settings">
      <h5 className="text-center">
        <span className="colorGreen">Expenditures for the selected month</span>
      </h5>
      {monthExpenditureConfig
        .sort((a, b) => a.id > b.id)
        .map((t, i) => (
          <BackendCore
            key={i}
            Table={t.Table}
            TableRows={t.TableRows}
            rowElements={t.rowElements}
            showTotal={t.showTotal}
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
