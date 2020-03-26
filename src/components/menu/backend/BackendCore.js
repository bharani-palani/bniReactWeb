import React, { useState, useEffect } from "react";
import apiInstance from "../../../apiServices";
import FormElement from "./FormElement";
import { ToastContainer, toast } from "react-toastify";
import Loader from "react-loader-spinner";
import helpers from "../../../helpers";

function BackendCore(props) {
  const Table = props.Table;
  const TableRows = props.TableRows;
  const rowElements = props.rowElements;

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
    if (isDataExist && isDataExist !== undefined && isDataExist > 0) {
      deleteData.push(Number(isDataExist));
      setDeleteData(deleteData);
    }
    setDbData(backup);
  };

  const onAddRow = bool => {
    if (bool) {
      const obj = {};
      for (var i = 0; i < TableRows.length; ++i) {
        obj[TableRows[i]] = "";
      }
      let backup = [...dbData];
      backup.push(obj);
      setDbData(backup);
    }
  };

  const submitData = () => {
    const insertData = dbData.filter(d => d[TableRows[0]] === "");
    const updateData = dbData.filter(d => d[TableRows[0]] !== "");
    const postData = {
      Table,
      insertData,
      deleteData,
      updateData
    };
    const formdata = new FormData();
    formdata.append("postData", JSON.stringify(postData));
    apiInstance
      .post("/postBackend", formdata)
      .then(response => {
        response.data.response ? success() : fail();
      })
      .catch(error => console.error(error));
  };

  const sMessage = () => ({ __html: `&#128512;${Table} saved successfully` });
  const fMessage = () => ({ __html: `&#128546;Oops.. Some error..` });

  const success = () =>
    toast.success(
      <div className="capitalize" dangerouslySetInnerHTML={sMessage()} />
    );
  const fail = () =>
    toast.error(
      <div className="capitalize" dangerouslySetInnerHTML={fMessage()} />
    );

  return dbData.length > 0 ? (
    <div className="container-fluid backendConfigureSection">
      <ToastContainer className="bniToaster" />
      <h5 className="heading">
        Table: {Table} ({dbData.length} record{dbData.length > 1 ? "s" : ""})
      </h5>
      <div className={`mt-10 form-group grid-${TableRows.length}`}>
        {TableRows.map((heading, i) => (
          <div key={`key-${i}`} className="header">
            {i !== 0 ? heading : "Action"}
          </div>
        ))}
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
              showIncrementer={dbData.length - 1 === i}
              showDecrement={i !== 0}
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
  ) : (
    <div className="spinner">
      <Loader
        type={helpers.LoadRandomSpinnerIcon()}
        color="#c2d82e"
        height={100}
        width={100}
      />
    </div>
  );
}

export default BackendCore;
