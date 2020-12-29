import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import apiInstance from "../../services/apiServices";
import BackendCore from "../configuration/backend/BackendCore";

const CreateCreditCardAccount = props => {
  const [ccName, setCcname] = useState("");
  const [ccNumber, setCcNumber] = useState("");
  const [ccStartDate, setCcStartDate] = useState("");
  const [ccEndDate, setCcEndDate] = useState("");
  const [ccPayDate, setPayDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [configArray] = useState([
    {
      id: 1,
      Table: "credit_cards",
      TableRows: [
        "credit_card_id",
        "credit_card_name",
        "credit_card_number",
        "credit_card_start_date",
        "credit_card_end_date",
        "credit_card_payment_date"
      ],
      rowElements: [
        "checkbox",
        "textbox",
        "textbox",
        "textbox",
        "textbox",
        "textbox"
      ]
    }
  ]);

  const onCCSubmit = async () => {
    setLoading(false);
    var formdata = new FormData();
    formdata.append("ccName", ccName);
    formdata.append("ccNumber", ccNumber);
    formdata.append("ccStartDate", ccStartDate);
    formdata.append("ccEndDate", ccEndDate);
    formdata.append("ccPayDate", ccPayDate);
    return await apiInstance
      .post("/account_planner/post_credit_card", formdata)
      .then(res => {
        if (res) {
          setCcname("");
          setCcNumber("");
          setCcStartDate("");
          setCcEndDate("");
          setPayDate("");
          document.getElementById("cCForm").reset();
          setLoading(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  const createfromToArray = (a, b) =>
    Array(a)
      .fill()
      .map((_, idx) => b + idx);

  return (
    <form className="settings" id="cCForm" onSubmit={e => e.preventDefault()}>
      <div className="form-group mt-15">
        <input
          type="text"
          onChange={e => setCcname(e.target.value)}
          value={ccName}
          className="form-control"
          placeholder="Credit card bank name"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Card number"
          onChange={e => 
            setCcNumber(e.target.value.replace(/[^0-9]/g, "").replace(/\W/gi, '').replace(/(.{4})/g, '$1 '))
          }
          maxLength="19"
          value={ccNumber}
        />
      </div>
      <div className="form-group">
        <select
          onChange={e => setCcStartDate(e.target.value)}
          value={ccStartDate}
          className="form-control"
        >
          <option value="">Statement start date</option>
          {createfromToArray(31, 1).map((d, i) => (
            <option key={i} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <select
          onChange={e => setCcEndDate(e.target.value)}
          value={ccEndDate}
          className="form-control"
        >
          <option value="">Statement end date</option>
          {createfromToArray(31, 1).map((d, i) => (
            <option key={i} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <select
          onChange={e => setPayDate(e.target.value)}
          value={ccPayDate}
          className="form-control"
        >
          <option value="">Statement pay date</option>
          {createfromToArray(31, 1).map((d, i) => (
            <option key={i} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <button
          onClick={() => onCCSubmit()}
          className="btn btn-bni"
          disabled={
            !(ccName && ccNumber && ccStartDate && ccEndDate && ccPayDate)
          }
        >
          Submit
        </button>
      </div>
      {loading &&
        configArray.map((t, i) => (
          <BackendCore
            key={i}
            Table={t.Table}
            TableRows={t.TableRows}
            rowElements={t.rowElements}
            getApiUrl="/account_planner/getAccountPlanner"
            postApiUrl="/account_planner/postAccountPlanner"
          />
        ))}
    </form>
  );
};

CreateCreditCardAccount.propTypes = {
  property: PropTypes.string
};
CreateCreditCardAccount.defaultProps = {
  property: "String name"
};

export default CreateCreditCardAccount;
