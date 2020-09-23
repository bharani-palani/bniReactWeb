import React from "react";
import PropTypes from "prop-types";
// import Loader from "react-loader-spinner";
// import helpers from "../../helpers";
import Chart from "./Chart";
import MonthExpenditureTable from "./MonthExpenditureTable";
import SetConfig from "./SetConfig";
import TypeExpenditureTable from "./TypeExpenditureTable";
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
            <p>
              Plan my Salary credits to expenses with analytical or
              visualization status
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="accountPlanner">
            <div className="heading flex">
              <div className="title">Compare with last months</div>
              <div className="icon">
                <i className={`fa fa-circle-o-notch fa-2x fa-fw`} />
              </div>
            </div>
            <div className="flex bigWidth">
              <Chart />
            </div>
            <div className="row">
              <div className="col-md-4 b-0 mb-10">
                <MonthExpenditureTable />
              </div>
              <div className="col-md-6 mb-10">
                <TypeExpenditureTable />
              </div>
              <div className="col-md-2">
                <SetConfig />
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
