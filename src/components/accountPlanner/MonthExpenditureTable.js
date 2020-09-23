import React from "react";
import PropTypes from "prop-types";

const MonthExpenditureTable = props => {
  //   const { id, name } = props;
  return (
    <div className="b-0">
      <h5 className="text-center">Expenditures for the selected month</h5>
      <div className="tableFixHead">
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(10)
              .map((u, i) => {
                return (
                  <tr>
                    <td>{(i += 1)}</td>
                    <td>Test</td>
                    <td>120</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
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
