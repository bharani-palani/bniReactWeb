import React from "react";
import PropTypes from "prop-types";

const MonthExpenditureTable = props => {
  //   const { id, name } = props;
  return (
    <div className="b-0">
      <h5 className="text-center"><span className="colorGreen">Expenditures for the selected month</span></h5>
      <div className="tableFixHead">
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(10)
              .map((u, i) => {
                return (
                  <tr key={i}>
                    <td>{(i += 1)}</td>
                    <td>Test</td>
                    <td>120</td>
                    <td>Cr</td>
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
