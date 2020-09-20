import React from "react";
import PropTypes from "prop-types";
// import Loader from "react-loader-spinner";
// import helpers from "../../helpers";

const AccountPlanner = props => {
  // const {id, name} = props;
  const style = {border: "solid 1px"};
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
            <div className="grid-1" style={style}>
              horizontal scroll graph content for last 12 months,
              consisting category based chart with expenditure amount with credit and debit
            </div>
            <div className="equal-grid-3" style={style}>
              <div style={style}>Clicked month Expenditures</div>
              <div style={style}>Type this month expenditure (clone feature), with this month history in the top (Inline edit, multi checkbox with delete).</div>
              <div style={style}>Category Table</div>
            </div>
            <div className="grid-1" style={style}>
              <ol>
                <li>Detailled Tabular Report with search feature, export as csv, share</li>
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
