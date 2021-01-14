import React, {useState, useEffect, useContext} from "react";
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
  const [yearList, setYearList] = useState([]);
  let yearString = new Date();
  yearString = yearString.getFullYear();
  yearString = `"${yearString}-01-01" and "${yearString}-12-31"`;
  const [year, setYear] = useState();

  const getIncExpChartData = row => {
    return apiInstance
      .get("/account_planner/getIncExpChartData",{year: yearString})
      .then(res => console.log(res))
      .catch(error => {
        console.log(error);
      });
  };

  const getYearList = row => {
    return apiInstance
      .get("/account_planner/year_list")
      .then(res => console.log(res))
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = `${appData.display_name} | Account planner`;
    // apiInstance
    //   .get("/account_planner/year_list")
    //   .then(res => setYearList(res.data.response))

     Promise.all([getIncExpChartData(), getYearList()]).then(r => {
      const [chartData, y] = r;
      console.log(chartData, y);
    });

  },[])

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
                <SetBank />
              </div>
              <div className="col-sm-3 m-reduce-padding">
                <SetYear yearList={yearList} onSelectYear={(year) => alert(year)}  />
              </div>
            </div>
            <div className="flex bigWidth">
              <Chart key={1} />
            </div>
            <div className="row">
              <div className="col-md-12 m-reduce-padding">
                <CreateModule />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 b-0 mb-10 m-reduce-padding">
                <MonthExpenditureTable />
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
