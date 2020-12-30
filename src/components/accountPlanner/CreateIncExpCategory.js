import React, { useState } from "react";
import PropTypes from "prop-types";
import apiInstance from "../../services/apiServices";
import BackendCore from "../configuration/backend/BackendCore";

const CreateIncExpCategory = props => {
  const [catName, setCatName] = useState("");
  const [catVendor, setVendor] = useState("");
  const [loading, setLoading] = useState(false);
  const [configArray] = useState([
    {
      id: 1,
      Table: "income_expense_category",
      TableRows: [
        "inc_exp_cat_id",
        "inc_exp_cat_name",
        "inc_exp_cat_vendor",
      ],
      rowElements: ["checkbox", "textbox", "textbox"]
    }
  ]);

  const onCatSubmit = async () => {
    setLoading(true);
    var formdata = new FormData();
    formdata.append("catName", catName);
    formdata.append("catVendor", catVendor);
    return await apiInstance
      .post("/account_planner/post_inc_exp_category", formdata)
      .then(res => {
        if (res.data.response.status === "success") {
          setCatName("");
          setVendor("");
          document.getElementById("catForm").reset();
          setLoading(false);
        }
      })
      .catch(error => {
        setLoading(false);
      });
  };
  return (
    <form
      className="settings"
      id="catForm"
      onSubmit={e => e.preventDefault()}
    >
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
        <input
          type="number"
          className="form-control"
          placeholder="Pointed vendor"
          onChange={e => setVendor(e.target.value)}
          value={catVendor}
        />
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
