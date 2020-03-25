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
  //     "number"
  // ];

  const Table = "awards";
  const TableRows = ["award_id", "award_label", "award_value", "award_sort"];
  const rowElements = ["checkbox", "textbox", "textarea", "number"];

  const [dbData, setDbData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
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

  const updateDbData = (index, data) => {
    const { i, j } = index;
    dbData[i][j] = data;
    setDbData(dbData);
  };

  const onDelete = index => {
    const { i } = index;
    let backup = [...dbData];
    backup = backup.filter((d, di) => di !== i);

    const isDataExist = dbData[i] && dbData[i][TableRows[0]];
    if(isDataExist && isDataExist !== undefined && isDataExist > 0) {
      deleteData.push(Number(isDataExist))
      setDeleteData(deleteData);
    }
    setDbData(backup);
  };

  const onAddRow = bool => {
    if(bool) {
      const obj = {};
      for (var i = 0; i < TableRows.length; ++i) {
        obj[TableRows[i]] = "";
      }
      let backup = [...dbData];
      backup.push(obj);
      setDbData(backup);
    }
  }
  const submitData = () => {
    const insertData = dbData.filter(d => d[TableRows[0]] === "");
    const updatedData = dbData.filter(d => d[TableRows[0]] !== "");
    const postData = {
      Table,
      insertData,
      deleteData,
      updatedData
    };
    console.log(postData);
  }
  return (
    <div className="container-fluid backendConfigureSection">
      <h5 className="heading">Table: {Table}</h5>
      <div className="">
        <div className={`mt-10 form-group grid-${TableRows.length}`}>
          {dbData.length > 0 ? (
            TableRows.map((heading, i) => (
              <div key={`key-${i}`} className="header">
                {i !== 0 ? heading : "Action" }
              </div>
            ))
          ) : (
            <div>No records</div>
          )}
          {dbData.map((d, i) =>
            TableRows.map((r, j) => (
              <FormElement
                key={`${d[r]}-${j}`}
                onDelete={index => onDelete(index)}
                onChange={(index, data) => updateDbData(index, data)}
                index={{ i, j: r }}
                placeholder={[r]}
                value={d[r]}
                element={rowElements[j]}
                showIncrementer={(dbData.length-1) === i}
                onAddRow={bool => onAddRow(bool)}
              />
            ))
          )}
        </div>
        <div className="form-group text-right">
          <button onClick={() => submitData()} className="btn btn-bni">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default BackendCore;
