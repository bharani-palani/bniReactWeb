import React, { useState } from "react";
import PropTypes from "prop-types";
import DateTimePicker from "react-datetime-picker";

const TypeCreditCardExpenditure = props => {
  let [date, setDate] = useState(new Date());
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
      <h5 className="text-center">
      <div className="colorGreen inlineFlex">
          <span className="margin-auto">
            Type payments for credit card
          </span>
          <i className={`icon fa fa-circle-o-notch fa-spin fa-2x fa-fw`} />
        </div>

      </h5>
      <div className="tableFixHead">
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>
                <i className="fa fa-cog" />
              </th>
              <th>Transaction</th>
              <th>Date</th>
              <th>Due</th>
              <th>Paid</th>
              <th>Int+Taxes</th>
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
                    <td>2020-09-01</td>
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
                      className="fa fa-plus-circle success pull-right"
                    />
                  </div>
                </>
              </td>
              <td className="col-md-3">
                <input type="text" className="form-control" />
              </td>
              <td className="col-md-3">
                <DateTimePicker
                    onChange={value => {
                      setDate(value);
                    }}
                    value={date}
                    format={`y-MM-dd`}
                    required
                    clearIcon={null}
                  />
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
          <button className="btn btn-bni">Save</button>
        </div>
      </div>
    </div>
  );
};

TypeCreditCardExpenditure.propTypes = {
  property: PropTypes.string
};
TypeCreditCardExpenditure.defaultProps = {};

export default TypeCreditCardExpenditure;
