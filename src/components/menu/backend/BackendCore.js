import React, { useState, useEffect } from "react";
import apiInstance from "../../../apiServices";
import FormElement from "./FormElement";

function BackendCore(props) {
  // const Table = "login";
  // const TableRows = [
  //   "user_id",
  //   "display_name",
  //   "profile_name",
  //   "user_mail",
  //   "user_mobile"
  // ];
  // const rowElements = [
  //     "checkbox",
  //     "textbox",
  //     "textbox",
  //     "textbox",
  //     "textbox"
  // ];

  const Table = "awards";
  const TableRows = [
    "award_id",
    "award_label",
    "award_value",
    "award_sort",
  ];
  const rowElements = [
      "checkbox",
      "textbox",
      "textarea",
      "textbox",
  ];

  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    const formdata = new FormData();
    formdata.append("TableRows", TableRows);
    formdata.append("Table", Table);
    apiInstance
      .post("/getBackend", formdata)
      .then(response => {
        setDbData(response.data.response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid backendConfigureSection">
      <h5 className="heading">Table: {Table}</h5>
      <div className="">
        <div className={`mt-10 form-group grid-${TableRows.length}`}>
          {TableRows.map((heading, i) => (
            <div className="header" key={i}>
              {heading}
            </div>
          ))}
          {dbData.map((d, j) => TableRows.map((r, i) => 
            <div><FormElement key={i+j} placeholder={[r]} value={d[r]} element={rowElements[i]} /></div>
          ))}
        </div>
        <div className="form-group text-right">
          <button className="btn btn-bni">Update</button>      
        </div>
      </div>
    </div>
  );
}

export default BackendCore;
