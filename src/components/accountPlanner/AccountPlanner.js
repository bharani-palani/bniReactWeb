import React from "react";
import PropTypes from "prop-types";
// import Loader from "react-loader-spinner";
// import helpers from "../../helpers";
import Chart from "./Chart";
import MonthExpenditureTable from "./MonthExpenditureTable";
import SetBank from "./SetBank";
import SetYear from "./SetYear";
import TypeExpenditureTable from "./TypeExpenditureTable";
import CreateModule from "./CreateModule";
import TypeCreditCardExpenditure from "./TypeCreditCardExpenditure";
import "./AccountPlanner.scss";

const AccountPlanner = props => {
  // const {id, name} = props;

  return (
    <section className="section lb" style={{ minHeight: window.screen.height }}>
      <div className="section-title">
        <div className="process-box">
          <div className="process-front text-center">
            <h2 style={{ color: "#aaa" }}>Account planner</h2>
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
                <SetYear />
              </div>
            </div>
            <div className="flex bigWidth">
              <Chart />
            </div>
            <div className="row">
              <div className="col-md-6 b-0 mb-10 m-reduce-padding">
                <MonthExpenditureTable />
              </div>
              <div className="col-md-6 mb-10 m-reduce-padding">
                <TypeExpenditureTable />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 m-reduce-padding">
                <CreateModule />
              </div>
              <div className="col-md-6 m-reduce-padding">
                <TypeCreditCardExpenditure />
              </div>
            </div>
            <div className="grid-1">
              <ol>
                <li>
                  Detailled Tabular Report with search feature, export as csv,
                  share
                </li>
                <li>Cron alert on email</li>
              </ol>
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
