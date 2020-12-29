import React, { useState } from "react";
import PropTypes from "prop-types";
import apiInstance from "../../services/apiServices";
import BackendCore from "../configuration/backend/BackendCore";

const CreateBank = props => {
  const [accNo, setAccNo] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [loading, setLoading] = useState(true);
  const [configArray] = useState([
    {
      id: 1,
      Table: "banks",
      TableRows: [
        "bank_id",
        "bank_name",
        "bank_account_number",
        "bank_ifsc_code"
      ],
      rowElements: ["checkbox", "textbox", "textbox", "textbox"]
    }
  ]);

  const onBankSubmit = async () => {
    setLoading(false);
    var formdata = new FormData();
    formdata.append("accNo", accNo);
    formdata.append("ifsc", ifsc);
    formdata.append("bankName", bankName);
    return await apiInstance
      .post("/account_planner/post_bank", formdata)
      .then(res => {
        if (res) {
          setAccNo("");
          setBankName("");
          setIfsc("");
          document.getElementById("accountForm").reset();
          setLoading(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <form
      className="settings"
      id="accountForm"
      onSubmit={e => e.preventDefault()}
    >
      <div className="form-group mt-15">
        <input
          type="text"
          onChange={e => setBankName(e.target.value)}
          value={bankName}
          className="form-control"
          placeholder="Bank name"
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Account number"
          onChange={e => setAccNo(e.target.value)}
          value={accNo}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          onChange={e => setIfsc(e.target.value)}
          value={ifsc}
          className="form-control"
          placeholder="IFSC code"
        />
      </div>
      <div className="form-group">
        <button
          onClick={() => onBankSubmit()}
          className="btn btn-bni"
          disabled={!(accNo && ifsc && bankName)}
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

CreateBank.propTypes = {
  property: PropTypes.string
};
CreateBank.defaultProps = {
  property: "String name"
};

export default CreateBank;
