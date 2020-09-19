import React from "react";
import PropTypes from "prop-types";

const Settings = props => {
    const {id, name} = props;
    return (<div>Hello Settings</div>);
}

Settings.propTypes = {
  property: PropTypes.string,
};
Settings.defaultProps = {
  property: "String name",
};

export default Settings;