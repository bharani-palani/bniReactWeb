import React from "react";
import PropTypes from "prop-types";
// import Loader from "react-loader-spinner";
// import helpers from "../../helpers";

const AccountPlanner = props => {
  // const {id, name} = props;
  return (
    <section className="section lb" style={{ minHeight: window.screen.height }}>
      <div className="section-title mt-100">
        <h1 style={{ color: "#fff" }} className="text-center">Account Planner Content</h1>
        <p>
          <b>Points to remember before starting development</b>
        </p>
        <ul>
          <li>Responsiveness</li>
          <li>Context available for userdata and appData</li>
          <li>D3 JS as react component (Will be at the header)</li>
          <li>Textbox hit enter save data with progress bar like google sheet</li>
          <li>Year by year responsive horizantal scroll for month (clickable) to year expenses</li>
          <li>Create Schema, table structure and logical diagram</li>
          <li>Gather data from monthly planning from google drive and upload to your DB</li>
        </ul>
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
