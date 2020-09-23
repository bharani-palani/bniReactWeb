import React from "react";
import PropTypes from "prop-types";

const TypeExpenditureTable = props => {
  const { id, name } = props;
  return (
    <div className="b-0">
      <h5 className="text-center">Type expenditures for current month</h5>
      <div className="tableFixHead">
        <table className="table table-condensed">
          <thead>
            <tr>
              <th className="text-center">
                <i className="fa fa-cog" />
              </th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(10)
              .map(u => {
                return (
                  <tr>
                    <td>
                      <>
                        <i
                          onClick={() => false}
                          className="fa fa-minus-circle danger"
                        />
                        <div className="pull-right">
                          <i
                            onClick={() => false}
                            className="fa fa-plus-circle success"
                          />
                        </div>
                      </>
                    </td>
                    <td>Test</td>
                    <td>120</td>
                  </tr>
                );
              })}
            <tr>
              <td>
                <>
                  <i
                    onClick={() => false}
                    className="fa fa-minus-circle danger"
                  />
                  <div className="pull-right">
                    <i
                      onClick={() => false}
                      className="fa fa-plus-circle success"
                    />
                  </div>
                </>
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="number" className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

TypeExpenditureTable.propTypes = {
  property: PropTypes.string
};
TypeExpenditureTable.defaultProps = {
  property: "String name"
};

export default TypeExpenditureTable;
