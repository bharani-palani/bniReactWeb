import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import apiInstance from "../../services/apiServices";
import BackendCore from "../configuration/backend/BackendCore";

const CreateVendor = props => {
  const [vendorName, setVendorName] = useState("");
  const [vendorLimit, setVendorLimit] = useState("");
  const [loading, setLoading] = useState(true);
  const [configArray] = useState([
    {
      id: 1,
      Table: "vendors",
      TableRows: [
        "vendor_id",
        "vendor_name",
        "vendor_limit",
      ],
      rowElements: ["checkbox", "textbox", "textbox"]
    }
  ]);

  const onVendorSubmit = async () => {
    setLoading(false);
    var formdata = new FormData();
    formdata.append("accNo", vendorName);
    formdata.append("ifsc", vendorLimit);
    return await apiInstance
      .post("/account_planner/post_vendor", formdata)
      .then(res => {
        if (res) {
          setVendorName("");
          setVendorLimit("");
          document.getElementById("vendorForm").reset();
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
      id="vendorForm"
      onSubmit={e => e.preventDefault()}
    >
      <div className="form-group mt-15">
        <input
          type="text"
          onChange={e => setVendorName(e.target.value)}
          value={vendorName}
          className="form-control"
          placeholder="Vendor name"
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Vendor limit"
          onChange={e => setVendorLimit(e.target.value)}
          value={vendorLimit}
        />
      </div>
      <div className="form-group">
        <button
          onClick={() => onVendorSubmit()}
          className="btn btn-bni"
          disabled={!(vendorName && vendorLimit)}
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

CreateVendor.propTypes = {
  property: PropTypes.string
};
CreateVendor.defaultProps = {
  property: "String name"
};

export default CreateVendor;
