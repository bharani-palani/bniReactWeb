import React from "react";
import PropTypes from "prop-types";

const AccountPlanner = props => {
    // const {id, name} = props;
    return (<div>Hello AccountPlanner</div>);
}

AccountPlanner.propTypes = {
  property: PropTypes.string,
};
AccountPlanner.defaultProps = {
  property: "String name",
};

export default AccountPlanner;