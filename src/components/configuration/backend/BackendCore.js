import React, { useState, useEffect } from "react";
import apiInstance from "../../../services/apiServices";
import FormElement from "./FormElement";
import { ToastContainer, toast } from "react-toastify";
import Loader from "react-loader-spinner";
import helpers from "../../../helpers";
import PropTypes from "prop-types";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function BackendCore(props) {
  const Table = props.Table;
  const TableRows = props.TableRows;
  const WhereClause = props.WhereClause;
  const getApiUrl = props.getApiUrl;
  const postApiUrl = props.postApiUrl;
  const showTotal = props.showTotal;
  const rowKeyUp = props.rowKeyUp;
  const insertCloneData = props.insertCloneData;
  const showTooltipFor = props.showTooltipFor;
  const onTableUpdate = props.onTableUpdate;
  const loaderState = props.loaderState;
  const [rowElements, setRowElements] = useState([]);
  const [dbData, setDbData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const autoClose = 3000;
  const [loader, setLoader] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  const [updatedIds, setUpdatedIds] = useState([]);
  const [sortType, setSortType] = useState(false);

  const getElementAjax = row => {
    return apiInstance
      .get(row.fetch.apiUrl)
      .then(r => ({
        fetch: {
          dropDownList: [{ id: null, value: "Select" }, ...r.data.response]
        }
      }))
      .catch(error => {
        console.log(error);
      });
  };

  const getBackendAjax = () => {
    const formdata = new FormData();
    formdata.append("TableRows", TableRows);
    formdata.append("Table", Table);
    if (WhereClause) {
      formdata.append("WhereClause", WhereClause);
    }

    return apiInstance
      .post(getApiUrl, formdata)
      .then(r => r.data.response)
      .catch(error => {
        console.log(error);
      });
  };

  const createRowElementArray = () => {
    const rows = props.rowElements.map(row => {
      if (row && row.fetch && row.fetch.apiUrl) {
        return getElementAjax(row);
      }
      return new Promise((resolve, reject) => {
        resolve(row);
      });
    });
    return rows;
  };

  const runAllApis = callBack => {
    setLoader(true);
    loaderState && loaderState(true);
    const a = createRowElementArray();
    const b = getBackendAjax();

    Promise.all([a, b]).then(async array => {
      setDbData(array[1]);
      await Promise.all(array[0]).then(a => {
        setRowElements(a);
        setLoader(false);
        loaderState && loaderState(false);
      });
      typeof callBack === "function" && callBack();
    });
  };

  useEffect(() => {
    runAllApis();
  }, [TableRows, Table, props.rowElements]);

  useEffect(() => {
    runAllApis();
    // console.log(WhereClause);
  }, [WhereClause]);

  useEffect(() => {
    if (insertCloneData && insertCloneData.length > 0) {
      setLoader(true);
      loaderState && loaderState(true);
      const newDbData = [...insertCloneData, ...dbData];
      setDbData(newDbData);
      setTimeout(() => {
        setLoader(false);
        loaderState && loaderState(false);
      }, 500);
    }
  }, [insertCloneData]);

  const updateDbData = (index, data, primaryKey) => {
    // update DB data
    const { i, j } = index;
    dbData[i][j] = data;
    setDbData(dbData);
    onTableUpdate && onTableUpdate(dbData);
    // update changes rows
    const id = dbData.filter((db, ind) => ind === i && db)[0][primaryKey];
    let array = [...updatedIds, id];
    array = [...new Set(array)];
    setUpdatedIds(array);
    // update row if value changed
    if (rowKeyUp) {
      let [declare, operands] = rowKeyUp.split("=");
      const newDbData = dbData.map(row => {
        row[declare] = eval(operands);
        return row;
      });
      setDbData(newDbData);
      onTableUpdate && onTableUpdate(newDbData);
    }
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
    onTableUpdate && onTableUpdate(backup);
  };

  const onAddRow = bool => {
    if (bool) {
      const obj = {};
      for (var i = 0; i < TableRows.length; ++i) {
        obj[TableRows[i]] = "";
      }
      let backup =
        dbData != null && typeof dbData[Symbol.iterator] === "function"
          ? [...dbData]
          : [];
      backup.push(obj);
      setDbData(backup);
    }
  };

  const submitData = () => {
    setBtnLoader(true);
    const insertData = dbData.filter(d => d[TableRows[0]] === "");
    const updateData = dbData
      .filter(d => updatedIds.includes(d[TableRows[0]]))
      .filter(d => Number(d[TableRows[0]]) > 0 && d);
    let postData = {
      ...((insertData.length > 0 ||
        deleteData.length > 0 ||
        updateData.length > 0) && { Table }),
      ...(insertData.length > 0 && { insertData }),
      ...(deleteData.length > 0 && { deleteData }),
      ...(updateData.length > 0 && { updateData })
    };

    const formdata = new FormData();
    formdata.append("postData", JSON.stringify(postData));
    apiInstance
      .post(postApiUrl, formdata)
      .then(response => {
        response.data.response ? success() : fail();
        if (insertData.length > 0) {
          setLoader(true);
          loaderState && loaderState(true);
          setTimeout(() => {
            runAllApis(() => {
              setLoader(false);
              loaderState && loaderState(false);
            });
          }, 2000);
        }
        setDeleteData([]);
        setUpdatedIds([]);
        setBtnLoader(false);
      })
      .catch(error => {
        console.error(error);
        setBtnLoader(false);
      });
  };

  const sMessage = () => ({
    __html: `<span><i class="fa fa-thumbs-up"></i> ${helpers.stringToCapitalize(
      Table
    )} saved successfully</span>`
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

  const getColumnTotal = key => {
    let total = "";
    if (showTotal) {
      showTotal.forEach(show => {
        if (typeof show === "string" && String(show) === String(key)) {
          total = dbData.reduce((a, b) => Number(a) + Number(b[key]), 0);
          total = helpers.indianLacSeperator(total);
        } else if (typeof show === "object" && show.whichKey === String(key)) {
          let totArrays = [];
          total = [show]
            .map(f => {
              return f.forValue.map((v, i) => {
                const number = dbData
                  .filter(db => db[f.forKey] === v)
                  .reduce((a, b) => Number(a) + Number(b[key]), 0);
                totArrays.push(number);
                // return helpers.indianLacSeperator(number);
                return (
                  <div key={i}>
                    {helpers.indianLacSeperator(number)}
                    {` (${v})`}
                  </div>
                );
              });
            })
            .concat(
              <div
                key={`totRow`}
                className={checkSettlement(
                  Number(totArrays[0]).toFixed(2) -
                    Number(totArrays[1]).toFixed(2)
                )}
              >
                {helpers.indianLacSeperator(
                  Number(totArrays[0]).toFixed(2) -
                    Number(totArrays[1]).toFixed(2)
                )}
                &nbsp;
                {checkSettlementString(
                  Number(totArrays[0]).toFixed(2) -
                    Number(totArrays[1]).toFixed(2)
                )}
              </div>
            );
        }
      });
    }
    return total;
  };
  const checkSettlement = number => {
    return number === 0 ? "text-success" : "text-danger";
  };
  const checkSettlementString = number => {
    if (number === 0) {
      return <span>(Settled)</span>;
    } else if (number < 0) {
      return <span>(Ahead)</span>;
    } else if (number > 0) {
      return <span>(YetTo)</span>;
    }
  };
  const onSort = (key, type) => {
    const filteredDbData = dbData.sort((a, b) => {
      if (type) {
        return isNaN(Number(b[key]))
          ? a[key] < b[key]
          : a[key] < Number(b[key]);
      } else {
        return isNaN(Number(b[key]))
          ? a[key] > b[key]
          : a[key] > Number(b[key]);
      }
    });
    setDbData(filteredDbData);
    setSortType(!type);
  };
  const renderCloneTooltip = (props, value, elm, key) =>
    showTooltipFor.includes(elm) && value ? (
      <Tooltip id={key} className="in show" {...props}>
        {value}
      </Tooltip>
    ) : (
      <Tooltip />
    );

  return loader === false ? (
    <div className="backendConfigureSection">
      <ToastContainer autoClose={autoClose} className="bniToaster" />
      <h5 className="heading">
        Table: {helpers.stringToCapitalize(Table)} ({dbData ? dbData.length : 0}{" "}
        record
        {dbData.length > 1 ? "s" : ""})
      </h5>
      <div className="table-responsive">
        <div className={`mt-10 form-group grid-${TableRows.length}`}>
          {TableRows.map((heading, i) => (
            <div
              key={`key-${i}`}
              onClick={() => onSort(heading, sortType)}
              className="header"
            >
              {i !== 0 ? (
                <span title={helpers.stringToCapitalize(heading)}>
                  {helpers.stringToCapitalize(heading)}
                </span>
              ) : (
                <i className="fa fa-cog" />
              )}
            </div>
          ))}
          {dbData.length > 0 ? (
            <>
              {dbData.map((d, i) =>
                TableRows.map((r, j) => (
                  <OverlayTrigger
                    key={`${d[r]}-${j}`}
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderCloneTooltip(
                      props,
                      dbData[i][TableRows[j]],
                      rowElements[j],
                      `${d[r]}-${j}`
                    )}
                    triggerType="hover"
                  >
                    <div>
                      <FormElement
                        onDelete={index => onDelete(index)}
                        onChange={(index, data, primaryKey) =>
                          updateDbData(index, data, primaryKey)
                        }
                        index={{ i, j: r }}
                        placeholder={[helpers.stringToCapitalize(r)]}
                        value={d[r]}
                        element={rowElements[j]}
                        showIncrementer={dbData.length - 1 === i}
                        showDecrement={true} // i !== 0
                        onAddRow={bool => onAddRow(bool)}
                        primaryKey={TableRows[0]}
                        onDoubleClick={() => console.log(rowElements[j])}
                      />
                    </div>
                  </OverlayTrigger>
                ))
              )}
              {showTotal && showTotal.length > 0 && (
                <>
                  <div className="text-center">Total</div>
                  {TableRows.slice(1).map((r, i) => {
                    const isTotalColumn =
                      showTotal.includes(r) ||
                      (showTotal.length > 0 && showTotal[0].whichKey) === r;
                    return (
                      <div
                        className={isTotalColumn ? "totalColumn" : ""}
                        key={i}
                      >
                        {isTotalColumn ? (
                          <>
                            <div className="visible-xs">
                              {helpers.stringToCapitalize(r)}
                            </div>
                            {getColumnTotal(r)}
                            {/* <div>{getTotal(r)}</div> */}
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </>
              )}
            </>
          ) : (
            <>
              <FormElement
                key={-1}
                index={{ i: 0, j: 0 }}
                element={rowElements[0]}
                showIncrementer={true}
                showDecrement={false}
                onAddRow={bool => onAddRow(bool)}
              />
              <div
                className="noRecords"
                style={{ gridColumn: `2 / span ${TableRows.length - 1}` }}
              >
                No Records
              </div>
            </>
          )}
        </div>
      </div>
      <div className="form-group pt-10 text-right">
        <button onClick={() => submitData()} className="btn btn-bni">
          {btnLoader ? (
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          ) : (
            "Update"
          )}
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

BackendCore.propTypes = {
  Table: PropTypes.string,
  label: PropTypes.string,
  TableRows: PropTypes.array,
  WhereClause: PropTypes.string,
  showTotal: PropTypes.array,
  rowKeyUp: PropTypes.string,
  rowElements: PropTypes.array,
  insertCloneData: PropTypes.array,
  showTooltipFor: PropTypes.array,
  onTableUpdate: PropTypes.func,
  loaderState: PropTypes.func
};
BackendCore.defaultProps = {
  rowKeyUp: "",
  showTotal: [],
  WhereClause: "",
  showTooltipFor: []
};

export default BackendCore;
