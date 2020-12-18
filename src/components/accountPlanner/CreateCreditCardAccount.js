import React, { useState } from "react";
import PropTypes from "prop-types";
import DateTimePicker from "react-datetime-picker";

const CreateCreditCardAccount = props => {
  const { id, name } = props;
  let [date, setDate] = useState(new Date());
  const ccArray = Array(10).fill(10);

  return (
    <div className="settings">
      <div className="form-group mt-15">
        <input type="text" className="form-control" placeholder="Bank name" />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Credit card number"
        />
      </div>
      <div className="form-group">
        <div>Statement date</div>
        <div>
          <DateTimePicker
            onChange={value => {
              setDate(value);
            }}
            value={date}
            format={`y-MM-dd`}
            required
            clearIcon={null}
          />
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-bni">Submit</button>
      </div>
      <h5 className="heading">List of credit cards</h5>
      <div className="grid-4 form-group backendConfigureSection">
        <div className="header">
          <i className="fa fa-cog" />
        </div>
        <div className="header">Credit card name</div>
        <div className="header">Credit card number</div>
        <div className="header">Statement date</div>
        {ccArray.map((cat, i) => {
          return (
            <>
              <div>
                <i class="fa fa-minus-circle danger"></i>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Credit card name"
                  class="form-control"
                  defaultValue={`CC - ${i}`}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Credit card number"
                  class="form-control"
                  defaultValue={`7851${i}`}
                />
              </div>
              <div>
                <DateTimePicker
                  onChange={value => false}
                  value={date}
                  format={`y-MM-dd`}
                  required
                  clearIcon={null}
                />
              </div>
            </>
          );
        })}
      </div>
      <div className="form-group">
        <button className="btn btn-bni">Update</button>
      </div>
    </div>
  );
};

CreateCreditCardAccount.propTypes = {
  property: PropTypes.string
};
CreateCreditCardAccount.defaultProps = {
  property: "String name"
};

export default CreateCreditCardAccount;