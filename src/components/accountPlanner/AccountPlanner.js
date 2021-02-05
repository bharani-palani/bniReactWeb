import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import helpers from "../../helpers";
import IncExpChart from "./IncExpChart";
import CreditCardChart from "./CreditCardChart";
import MonthExpenditureTable from "./MonthExpenditureTable";
import SetBank from "./SetBank";
import SetYear from "./SetYear";
import SetCcYear from "./SetCcYear";
import SetCcBank from "./SetCcBank";
import CreateModule from "./CreateModule";
import TypeCreditCardExpenditure from "./TypeCreditCardExpenditure";
import AnalysisChart from "./AnalysisChart";
import "./AccountPlanner.scss";
import AppContext from "../../contexts/AppContext";
import apiInstance from "../../services/apiServices";
import CheckCardCycleDate from "./CheckCardCycleDate";

const AccountPlanner = props => {
  const [appData] = useContext(AppContext);
  document.title = `${appData.display_name} | Account planner`;

  const [yearList, setYearList] = useState([]);
  const [ccYearList, setCcYearList] = useState([]);
  const [bankList, setBankList] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [ccChartData, setCcChartData] = useState([]);

  const [ccYearSelected, setCcYearSelected] = useState("");
  const [ccBankList, setCcBankList] = useState([]);
  const [ccBankSelected, setCcBankSelected] = useState("");

  const [yearSelected, setYearSelected] = useState("");
  const [bankSelected, setBankSelected] = useState("");
  const [monthYearSelected, setMonthYearSelected] = useState("");
  const [ccMonthYearSelected, setCcMonthYearSelected] = useState("");

  const [ccDetails, setCcDetails] = useState({});

  const [chartLoader, setChartLoader] = useState(false);
  const [ccChartLoader, setCcChartLoader] = useState(false);
  const [toggleCoreSettings, setToggleCoreSettings] = useState(false);

  const [openModal, setOpenModal] = useState(false); // change to false

  const getCreditCardDetails = bank => {
    const formdata = new FormData();
    formdata.append("bank", bank);
    return apiInstance
      .post("/account_planner/credit_card_details", formdata)
      .then(res => res.data)
      .catch(error => {
        console.log(error);
      });
  };

  const getIncExpChartData = (sDate, eDate, bank) => {
    const formdata = new FormData();
    formdata.append("startDate", sDate);
    formdata.append("endDate", eDate);
    formdata.append("bank", bank);
    return apiInstance
      .post("/account_planner/getIncExpChartData", formdata)
      .then(res => res.data)
      .catch(error => {
        console.log(error);
      });
  };

  const getCreditCardChartData = (sDate, eDate, bank) => {
    const formdata = new FormData();
    formdata.append("startDate", sDate);
    formdata.append("endDate", eDate);
    formdata.append("bank", bank);
    return apiInstance
      .post("/account_planner/getCreditCardChartData", formdata)
      .then(res => res.data)
      .catch(error => {
        console.log(error);
      });
  };
  const getYearList = () => {
    return apiInstance
      .get("/account_planner/year_list")
      .then(res => res.data.response)
      .catch(error => {
        console.log(error);
      });
  };

  const getCcYearList = () => {
    return apiInstance
      .get("/account_planner/cc_year_list")
      .then(res => res.data.response)
      .catch(error => {
        console.log(error);
      });
  };

  const getBankList = () => {
    return apiInstance
      .get("/account_planner/bank_list")
      .then(res => res.data.response)
      .catch(error => {
        console.log(error);
      });
  };
  const getCcBankList = () => {
    return apiInstance
      .get("/account_planner/credit_card_list")
      .then(res => res.data.response)
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    const a = getYearList();
    const b = getBankList();
    const c = getCcYearList();
    const d = getCcBankList();
    Promise.all([a, b, c, d]).then(r => {
      setYearList(r[0]);
      setYearSelected(r[0][0].id);
      setBankList(r[1]);
      setBankSelected(r[1][0].id); // bank
      setCcYearList(r[2]);
      setCcYearSelected(r[2][0].id);
      setCcBankList(r[3]);
      setCcBankSelected(r[3][0].id);
    });
  }, []);

  // useEffect(() => {
  //   generateExpenses();
  // }, [yearSelected, bankSelected]);

  const onChangeYear = year => {
    setChartData([]);
    setYearSelected(year);
  };

  const onChangeBank = bank => {
    setChartData([]);
    setBankSelected(bank);
  };

  const generateExpenses = () => {
    setChartLoader(true);
    const sDate = `${yearSelected}-01-01`;
    const eDate = `${yearSelected}-12-31`;
    const a = getIncExpChartData(sDate, eDate, bankSelected);
    Promise.all([a]).then(r => {
      setChartData(r[0].response);
      setChartLoader(false);
    });
  };

  const onMonthYearSelected = monthYear => {
    setMonthYearSelected(monthYear);
  };

  const onChangeCcYear = year => {
    setCcChartData([]);
    setCcYearSelected(year);
  };

  const onChangeCcBank = bank => {
    setCcChartData([]);
    setCcBankSelected(bank);
  };

  const onCcMonthYearSelected = monthYear => {
    setCcMonthYearSelected(monthYear);
  };

  const generateCreditCards = () => {
    setCcChartLoader(true);
    const a = getCreditCardDetails(ccBankSelected);
    Promise.all([a]).then(r => {
      const data = r[0].response[0];
      setCcDetails(data);

      const sDate = `${ccYearSelected - 1}-12-${data.credit_card_start_date}`;
      const eDate = `${ccYearSelected}-12-${data.credit_card_end_date}`;
      const b = getCreditCardChartData(sDate, eDate, ccBankSelected);
      Promise.all([b]).then(rr => {
        let data = rr[0].response;
        data = data.sort(
          (a, b) => new Date(b.month).getTime() - new Date(a.month).getTime()
        );
        setCcChartData(data);
        setCcMonthYearSelected(helpers.dateToMonthYear(data[0].month));
        setCcChartLoader(false);
      });
    });
  };

  const loaderComp = () => {
    return (
      <div className="relativeSpinner">
        <Loader
          type={helpers.LoadRandomSpinnerIcon()}
          color={helpers.fluorescentColor}
          height={100}
          width={100}
        />
      </div>
    );
  };
  return (
    <section className="section lb" style={{ minHeight: window.screen.height }}>
      {openModal && (
        <CheckCardCycleDate
          className="backendUpdate"
          show={openModal}
          onHide={() => setOpenModal(false)}
          size="sm"
          animation={false}
        />
      )}
      <div className="section-title">
        <div className="process-box">
          <div className="process-front text-center">
            <h2 className="grey-color">Account planner</h2>
            <hr />
            <i className="fi-ecommerce-dollar-symbol-4"></i>
            <p>Plan my credits to expenses with analysis & visualization</p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="accountPlanner">
            {bankList.length > 0 &&
            yearList.length &&
            ccYearList.length > 0 &&
            ccBankList.length > 0 > 0 ? (
              <>
                <div className="row">
                  <div className="col-md-3 m-reduce-padding">
                    <buttton
                      className="btn btn-bni sm btn-block"
                      onClick={() => setToggleCoreSettings(!toggleCoreSettings)}
                    >
                      Toogle Core Settings
                      <i
                        className={`fa fa-level-${
                          toggleCoreSettings ? "up" : "down"
                        } pull-right`}
                      />
                    </buttton>
                  </div>
                  {toggleCoreSettings && (
                    <div className="col-md-12 m-reduce-padding">
                      <CreateModule />
                    </div>
                  )}
                </div>
                <div className="headLine">Bank Transactions</div>
                <div className="row mt-10">
                  <div className="col-md-3 m-reduce-padding">
                    <SetBank
                      bankList={bankList}
                      onSelectBank={bank => onChangeBank(bank)}
                    />
                  </div>
                  <div className="col-md-3 m-reduce-padding">
                    <SetYear
                      yearList={yearList}
                      onSelectYear={year => onChangeYear(year)}
                    />
                  </div>
                  <div className="col-md-3 m-reduce-padding">
                    <span>&nbsp;</span>
                    <button
                      onClick={() => generateExpenses()}
                      className="btn btn-bni btn-block sm"
                    >
                      Generate
                      <i
                        style={{ transform: "rotate(90deg)" }}
                        className="fa fa-level-down pull-right"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex bigWidth">
                  {chartLoader ? (
                    loaderComp()
                  ) : (
                    <IncExpChart
                      chartData={chartData}
                      onMonthYearSelected={onMonthYearSelected}
                    />
                  )}
                </div>
                <div className="row">
                  <div className="col-md-12 b-0 mb-10">
                    {chartData.length > 0 &&
                      !isNaN(bankSelected) &&
                      new Date(monthYearSelected) instanceof Date &&
                      !isNaN(new Date(monthYearSelected)) && (
                        <MonthExpenditureTable
                          bankSelected={bankSelected}
                          monthYearSelected={monthYearSelected}
                        />
                      )}
                  </div>
                </div>
                <div className="headLine">Credit Card Transactions</div>
                <div className="row mt-10">
                  <div className="col-md-3 m-reduce-padding">
                    <SetCcBank
                      ccBankList={ccBankList}
                      onSelectCcBank={bank => onChangeCcBank(bank)}
                    />
                  </div>
                  <div className="col-md-3 m-reduce-padding">
                    <SetCcYear
                      ccYearList={ccYearList}
                      onSelectCcYear={year => onChangeCcYear(year)}
                    />
                  </div>
                  <div className="col-md-3 m-reduce-padding">
                    <span>&nbsp;</span>
                    <button
                      onClick={() => generateCreditCards()}
                      className="btn btn-bni btn-block sm"
                    >
                      Generate
                      <i
                        style={{ transform: "rotate(90deg)" }}
                        className="fa fa-level-down pull-right"
                      />
                    </button>
                  </div>
                  <div className="col-md-3 m-reduce-padding">
                    <span>&nbsp;</span>
                      <i onClick={() => setOpenModal(true)} className="fa fa-calendar-o roundedButton mt-20" />
                  </div>
                </div>
                <div className="flex bigWidth">
                  {ccChartLoader ? (
                    loaderComp()
                  ) : ccChartData && ccChartData.length > 0 ? (
                    <CreditCardChart
                      ccChartData={ccChartData}
                      onCcMonthYearSelected={onCcMonthYearSelected}
                      ccDetails={ccDetails}
                      ccYearSelected={ccYearSelected}
                      ccMonthYearSelected={ccMonthYearSelected}
                    />
                  ) : (
                    <div className="noRecords block mt-10">
                      No Records Generated
                    </div>
                  )}
                </div>

                <div className="row">
                  <div className="col-md-12 m-reduce-padding">
                    {ccChartData.length > 0 &&
                      !isNaN(ccBankSelected) &&
                      new Date(ccMonthYearSelected) instanceof Date &&
                      !isNaN(new Date(ccMonthYearSelected)) && (
                        <TypeCreditCardExpenditure
                          ccMonthYearSelected={ccMonthYearSelected}
                          ccBankSelected={ccBankSelected}
                          ccDetails={ccDetails}
                        />
                      )}
                  </div>
                </div>
              </>
            ) : (
              loaderComp()
            )}
            <div className="row">
              <div className="col-md-12">{/* <AnalysisChart /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AccountPlanner.propTypes = {
  property: PropTypes.string
};
AccountPlanner.defaultProps = {
  property: "String name"
};

export default AccountPlanner;
