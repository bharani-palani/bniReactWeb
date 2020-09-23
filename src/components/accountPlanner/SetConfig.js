import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";

const SetConfig = props => {
  const [dropDownList, setDropDownList] = useState([
    { id: 1, value: "HDFC" },
    { id: 2, value: "INDIAN BANK" }
  ]);
  const [dropDownSelected, setDropDownSelected] = useState("HDFC");

  const onDropDownSelect = id => {
    setDropDownSelected(dropDownList.filter(d => d.id === id)[0].value);
  };
  return (
    <>
      <span>Default Bank</span>
      <SelectableContext.Provider value={false}>
        <Dropdown>
          <Dropdown.Toggle>
            {dropDownSelected} <i className="fa fa-chevron-down" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {dropDownList.map((d, i) => (
              <Dropdown.Item
                key={i}
                onClick={e => {
                  onDropDownSelect(d.id);
                }}
              >
                {d.value}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </SelectableContext.Provider>
    </>
  );
};

SetConfig.propTypes = {
  property: PropTypes.string
};
SetConfig.defaultProps = {
  property: "String name"
};

export default SetConfig;
