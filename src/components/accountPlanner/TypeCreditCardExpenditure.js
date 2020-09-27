import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";

const TypeCreditCardExpenditure = props => {
  const { id, name } = props;
  const [dropDownList, setDropDownList] = useState([
    { id: 0, value: "Dr" },
    { id: 1, value: "Cr" }
  ]);
  const [dropDownSelected, setDropDownSelected] = useState("Dr");

  const onDropDownSelect = id => {
    setDropDownSelected(dropDownList.filter(d => d.id === id)[0].value);
  };

  return (
    <div className="b-0">
      <h5 className="text-center"><span className="colorGreen">Type expenditures for credit card</span></h5>
      <div className="tableFixHead">
        <table className="table table-condensed" style={{ width: "700px" }}>
          <thead>
            <tr>
              <th>
                <i className="fa fa-cog" />
              </th>
              <th>Transaction</th>
              <th>Due</th>
              <th>Paid</th>
              <th>Int + Taxes</th>
              <th>Purchases</th>
              <th>Balance</th>
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
                      </>
                    </td>
                    <td>Test</td>
                    <td>120</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
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
              <td>
                <input type="number" className="form-control" />
              </td>
              <td>
                <input type="number" className="form-control" />
              </td>
              <td>
                <input type="number" className="form-control" />
              </td>
              <td>
                <input type="number" className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="form-group">
          <button className="btn btn-bni btn-block">Save</button>
        </div>
      </div>
    </div>
  );
};

TypeCreditCardExpenditure.propTypes = {
  property: PropTypes.string
};
TypeCreditCardExpenditure.defaultProps = {
  property: "String name"
};

export default TypeCreditCardExpenditure;
