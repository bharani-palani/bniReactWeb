import React from "react";
import PropTypes from "prop-types";
import { monthExpenditureConfig } from "../configuration/backendTableConfig";

const MonthExpenditureTable = props => {
  //   const { id, name } = props;
  return (
    <div className="settings">
      <h5 className="text-center"><span className="colorGreen">Expenditures for the selected month</span></h5>
      Yet to do
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
