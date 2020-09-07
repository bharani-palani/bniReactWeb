import React, { useState, useEffect } from "react";
import apiInstance from "../../../apiServices";
import FormElement from "./FormElement";
import { ToastContainer, toast } from "react-toastify";
import Loader from "react-loader-spinner";
import helpers from "../../../helpers";

function BackendCore(props) {
  const Table = props.Table;
  const TableRows = props.TableRows;
  const [rowElements, setRowElements] = useState([]);
  const [dbData, setDbData] = useState([]);
  const dbBackup = JSON.parse(JSON.stringify(dbData));
  const [deleteData, setDeleteData] = useState([]);
  const autoClose = 3000;

  const getElementAjax = (row) => {
    return apiInstance
      .get(row.dropDownFetch.apiUrl)
      .then(r => ({dropDownFetch: {dropDownList: [{id:null, value:"Select"},...r.data.response]}}))
      .catch(error => {
        console.log(error);
      });
  };

  const createRowElementArray = () => {
    const rows = props.rowElements.map(row => {
      if(typeof row === "object") {
        return getElementAjax(row);
      }
      return new Promise((resolve, reject) => {
        resolve(row);
      });
    });
    return rows;
  }


  const getBackendAjax = () => {
    const formdata = new FormData();
    formdata.append("TableRows", TableRows);
    formdata.append("Table", Table);
    return apiInstance
      .post("/getBackend", formdata)
      .then(r => r.data.response)
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    const a = createRowElementArray();
    const b = getBackendAjax();

    Promise.all([[...a],b]).then(async array => {
      const temp = [];
      await Promise.all(array[0]).then((a) => {
        temp.push(a);
      })
      setDbData(array[1]);
      setRowElements(temp[0]);
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
    const updateAllData = dbData.filter(d => d[TableRows[0]] !== "");

    const updateData = updateAllData.filter((u,i) => {
      return TableRows.map(t => (u[t] !== dbBackup[i][t])).some(u => u === true) && u
    });

    const postData = {
      ...((insertData.length > 0 || deleteData.length > 0 || updateData.length > 0) && {Table}),
      ...(insertData.length > 0 && {insertData}),
      ...(deleteData.length > 0 && {deleteData}),
      ...(updateData.length > 0 && {updateData}),
    };

    const formdata = new FormData();
    formdata.append("postData", JSON.stringify(postData));
    apiInstance
      .post("/postBackend", formdata)
      .then(response => {
        response.data.response ? success() : fail();
        setTimeout(() => {
          props.onSubmit(true);          
        }, autoClose);
      })
      .catch(error => console.error(error));
  };

  const sMessage = () => ({ __html: `<span><i class="fa fa-thumbs-up"></i> ${Table} saved successfully</span>` });
  const fMessage = () => ({ __html: `<span><i class="fa fa-thumbs-down"></i> Oops.. No changes. Some error !!</span>` });

  const success = () =>
    toast.success(
      <div className="capitalize" dangerouslySetInnerHTML={sMessage()} />
    );
  const fail = () =>
    toast.error(
      <div className="capitalize" dangerouslySetInnerHTML={fMessage()} />
    );


  return dbData.length > 0 && setRowElements.length > 0 ? (
    <div className="container-fluid backendConfigureSection">
      <ToastContainer autoClose={autoClose} className="bniToaster" />
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
    <div className="relativeSpinner">
      <Loader
        type={helpers.LoadRandomSpinnerIcon()}
        color={helpers.fluorescentColor}
        height={100}
        width={100}
      />
    </div>
  );
}

export default BackendCore;
