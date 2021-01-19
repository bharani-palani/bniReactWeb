import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import helpers from "../../helpers";
import Chart from "./Chart";
import MonthExpenditureTable from "./MonthExpenditureTable";
import SetBank from "./SetBank";
import SetYear from "./SetYear";
import CreateModule from "./CreateModule";
import TypeCreditCardExpenditure from "./TypeCreditCardExpenditure";
import AnalysisChart from "./AnalysisChart";
import "./AccountPlanner.scss";
import AppContext from "../../contexts/AppContext";
import apiInstance from "../../services/apiServices";

const AccountPlanner = props => {
  const [appData] = useContext(AppContext);
  document.title = `${appData.display_name} | Account planner`;

  const [yearList, setYearList] = useState([]);
  const [bankList, setBankList] = useState([]);
  const [chartData, setChartData] = useState([]);

  const [yearSelected, setYearSelected] = useState("");
  const [bankSelected, setBankSelected] = useState("");
  const [monthYearSelected, setMonthYearSelected] = useState("");

  const [chartLoader, setChartLoader] = useState(false);
  const [toggleCoreSettings, setToggleCoreSettings] = useState(false);

  const startDate = `${yearSelected}-01-01`;
  const endDate = `${yearSelected}-12-31`;

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

  const getYearList = () => {
    return apiInstance
      .get("/account_planner/year_list")
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
  useEffect(() => {
    const a = getYearList();
    const b = getBankList();
    Promise.all([a, b]).then(r => {
      setYearList(r[0]);
      setYearSelected(r[0][0].id);
      setBankList(r[1]);
      setBankSelected(r[1][0].id);
    });
  }, []);

  useEffect(() => {
    setChartLoader(true);
    const a = getIncExpChartData(startDate, endDate, bankSelected);
    Promise.all([a]).then(r => {
      setChartData(r[0].response);
      setChartLoader(false);
    });
  }, [startDate, endDate, bankSelected]);

  const onChangeYear = year => {
    setChartData([]);
    setYearSelected(year);
    setChartLoader(true);
    const sDate = `${year}-01-01`;
    const eDate = `${year}-12-31`;
    const a = getIncExpChartData(sDate, eDate, bankSelected);
    Promise.all([a]).then(r => {
      setChartData(r[0].response);
      setChartLoader(false);
    });
  };

  const onChangeBank = bank => {
    setChartData([]);
    setBankSelected(bank);
    setChartLoader(true);
    const sDate = `${yearSelected}-01-01`;
    const eDate = `${yearSelected}-12-31`;
    const a = getIncExpChartData(sDate, eDate, bank);
    Promise.all([a]).then(r => {
      setChartData(r[0].response);
      setChartLoader(false);
    });
  };

  const onMonthYearSelected = monthYear => {
    setMonthYearSelected(monthYear);
  };
  return (
    <section className="section lb" style={{ minHeight: window.screen.height }}>
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
            <div className="row">
              <div className="col-md-3 pl-0 pr-0">
                <buttton
                  className="btn btn-bni sm btn-block"
                  onClick={() => setToggleCoreSettings(!toggleCoreSettings)}
                >
                  Toogle Core Settings
                  <i className={`fa fa-level-${toggleCoreSettings ? "up" : "down"} pull-right`} />
                </buttton>
              </div>
              {toggleCoreSettings && (
                <div className="col-md-12 pr-0 pl-0">
                  <CreateModule />
                </div>
              )}
            </div>
            <div className="row mt-10">
              <div className="col-sm-3 pr-0 pl-0">
                {bankList.length > 0 && (
                  <SetBank
                    bankList={bankList}
                    onSelectYear={bank => onChangeBank(bank)}
                  />
                )}
              </div>
              <div className="col-sm-3 m-reduce-padding">
                {yearList.length > 0 && (
                  <SetYear
                    yearList={yearList}
                    onSelectYear={year => onChangeYear(year)}
                  />
                )}
              </div>
            </div>
            <div className="flex bigWidth">
              {chartLoader ? (
                <div className="relativeSpinner">
                  <Loader
                    type={helpers.LoadRandomSpinnerIcon()}
                    color={helpers.fluorescentColor}
                    height={100}
                    width={100}
                  />
                </div>
              ) : (
                <Chart
                  chartData={chartData}
                  onMonthYearSelected={onMonthYearSelected}
                />
              )}
            </div>
            <div className="row">
              <div className="col-md-12 b-0 mb-10 pr-0 pl-0">
                {bankSelected && monthYearSelected && (
                  <MonthExpenditureTable
                    bankSelected={bankSelected}
                    monthYearSelected={monthYearSelected}
                  />
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pr-0 pl-0">
                <TypeCreditCardExpenditure />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pr-0 pl-0">
                <AnalysisChart />
              </div>
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
