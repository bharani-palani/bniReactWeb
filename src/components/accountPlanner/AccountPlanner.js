import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
// import Loader from "react-loader-spinner";
// import helpers from "../../helpers";
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

  const startDate = `${yearSelected}-01-01`;
  const endtDate = `${yearSelected}-12-31`;

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
      setBankSelected(r[1][0].id)
    });
  },[]);

  useEffect(() => {
      const a = getIncExpChartData(startDate, endtDate, bankSelected);
      Promise.all([a]).then(r => {
        setChartData(r[0].response);
      });
  }, [startDate, endtDate, bankSelected]);

  const onChangeYear = year => {
    setChartData([]);
    setYearSelected(year);
    const sDate = `${year}-01-01`;
    const eDate = `${year}-12-31`;
    const a = getIncExpChartData(sDate, eDate, bankSelected);
    Promise.all([a]).then(r => {
      setChartData(r[0].response);
    });
  };

  const onChangeBank = (bank) => {
    setChartData([]);
    setBankSelected(bank);
    const sDate = `${yearSelected}-01-01`;
    const eDate = `${yearSelected}-12-31`;
    const a = getIncExpChartData(sDate, eDate, bank);
    Promise.all([a]).then(r => {
      setChartData(r[0].response);
    });
  }

  const onMonthYearSelected = (monthYear) => {
    setMonthYearSelected(monthYear);
  }
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
              <div className="col-sm-3 m-reduce-padding">
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
              <Chart chartData={chartData} onMonthYearSelected={onMonthYearSelected} />
            </div>
            <div className="row">
              <div className="col-md-12 m-reduce-padding">
                <CreateModule />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 b-0 mb-10 m-reduce-padding">
                <MonthExpenditureTable bankSelected={bankSelected} startDate={startDate} endtDate={endtDate} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 m-reduce-padding">
                <TypeCreditCardExpenditure />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 m-reduce-padding">
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
