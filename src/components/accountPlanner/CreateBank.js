import React, { useState } from "react";
import PropTypes from "prop-types";
import apiInstance from "../../services/apiServices";

const CreateBank = props => {
  const [bankArray] = useState([]);
  const [accNo, setAccNo] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const onBankSubmit = () => {
    var formdata = new FormData();
    formdata.append("accNo", accNo);
    formdata.append("ifsc", ifsc);
    formdata.append("bankName", bankName);
    apiInstance
    .post("/write", formdata)
    .then(response => {
      console.log(response);
      bankArray.push({ accNo, ifsc, bankName });
      setAccNo("");
      setBankName("");
      setIfsc("");
      document.getElementById("accountForm").reset();
    })
    .catch(error => {
      console.log(error);
    });

  }
  const genId = i => `bank-${i}`
  return (
    <form className="settings" id="accountForm" onSubmit={e => e.preventDefault()}>
      <div className="form-group mt-15">
        <input
          type="text"
          onChange={e => setBankName(e.target.value)}
          defaultValue={bankName}
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
          defaultValue={accNo}
          value={accNo}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          onChange={e => setIfsc(e.target.value)}
          defaultValue={ifsc}
          value={ifsc}
          className="form-control"
          placeholder="IFSC code"
        />
      </div>
      <div className="form-group">
        <button
          onClick={onBankSubmit}
          className="btn btn-bni"
          disabled={!(accNo && ifsc && bankName)}
        >
          Submit
        </button>
      </div>
      <h5 className="heading">List of banks</h5>
      <div className="grid-4 form-group backendConfigureSection">
        <div className="header">
          <i className="fa fa-cog" />
        </div>
        <div className="header">Bank name</div>
        <div className="header">Account number</div>
        <div className="header">IFSC code</div>
        {bankArray.map((cat, i) => {
          return (
            <React.Fragment key={genId(i)}>
              <div>
                <i class="fa fa-minus-circle danger"></i>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Bank name"
                  class="form-control"
                  defaultValue={cat.bankName}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Account number"
                  class="form-control"
                  defaultValue={cat.accNo}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="IFSC code"
                  class="form-control"
                  defaultValue={cat.ifsc}
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="form-group">
        <button className="btn btn-bni">Update</button>
      </div>
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
