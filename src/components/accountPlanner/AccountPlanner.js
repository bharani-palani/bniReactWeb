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
