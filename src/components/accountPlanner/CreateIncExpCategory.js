import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import apiInstance from "../../services/apiServices";
import BackendCore from "../configuration/backend/BackendCore";
import { ToastContainer, toast } from "react-toastify";

const CreateIncExpCategory = props => {
  const [catName, setCatName] = useState("");
  const [catVendor, setVendor] = useState("");
  const [loading, setLoading] = useState(false);
  const [vendorList, setVendorList] = useState([]);
  const autoClose = 3000;
  const [configArray] = useState([
    {
      id: 1,
      Table: "income_expense_category",
      TableRows: ["inc_exp_cat_id", "inc_exp_cat_name", "inc_exp_cat_vendor"],
      rowElements: [
        "checkbox",
        "textbox",
        {
          dropDownFetch: {
            apiUrl: "/account_planner/vendor_list",
            table: "vendors",
            fetch: ["vendor_id", "vendor_name"]
          }
        }
      ]
    }
  ]);

  useEffect(() => {
    apiInstance.get("/account_planner/vendor_list").then(resp => {
      setVendorList(resp.data.response);
    });
  }, []);

  const onCatSubmit = async () => {
    setLoading(true);
    var formdata = new FormData();
    formdata.append("catName", catName);
    formdata.append("catVendor", catVendor);
    return await apiInstance
      .post("/account_planner/post_inc_exp_category", formdata)
      .then(res => {
        if (res.data.response.status === "success") {
          success();
          setCatName("");
          setVendor("");
          document.getElementById("catForm").reset();
          setLoading(false);
        } else {
          fail();
        }
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const sMessage = () => ({
    __html: `<span><i class="fa fa-thumbs-up"></i> Category saved successfully</span>`
  });
  const fMessage = () => ({
    __html: `<span><i class="fa fa-thumbs-down"></i> Oops.. No changes or some error !!</span>`
  });

  const success = () =>
    toast.success(
      <div className="capitalize" dangerouslySetInnerHTML={sMessage()} />
    );
  const fail = () =>
    toast.error(
      <div className="capitalize" dangerouslySetInnerHTML={fMessage()} />
    );

  return (
    <form className="settings" id="catForm" onSubmit={e => e.preventDefault()}>
      <ToastContainer autoClose={autoClose} className="bniToaster" />
      <div className="form-group mt-15">
        <input
          type="text"
          onChange={e => setCatName(e.target.value)}
          value={catName}
          className="form-control"
          placeholder="Category name"
        />
      </div>
      <div className="form-group">
        <select onChange={e => setVendor(e.target.value)} className="form-control">
          <option value="">Pointed vendor</option>
          {vendorList.map(vendor => (
            <option value={vendor.id}>{vendor.value}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <button
          onClick={() => onCatSubmit()}
          className="btn btn-bni"
          disabled={!(catName && catVendor)}
        >
          Submit
        </button>
      </div>
      {!loading &&
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

CreateIncExpCategory.propTypes = {
  property: PropTypes.string
};
CreateIncExpCategory.defaultProps = {
  property: "String name"
};

export default CreateIncExpCategory;
