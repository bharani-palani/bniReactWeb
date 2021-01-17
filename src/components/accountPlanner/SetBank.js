import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";

const SetDefault = props => {
  const {bankList, onSelectYear} = props;
  const [bankSelected, setBankSelected] = useState("");
  
  useEffect(() => {
    if(bankList.length > 0) {
      setBankSelected(bankList[0].value);
    }
  },[bankList])
  return (
    <>
      <span>Select bank</span>
      <SelectableContext.Provider value={false}>
        <Dropdown>
          <Dropdown.Toggle>
            {bankSelected} <i className="fa fa-chevron-down" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {bankList.map((d, i) => (
              <Dropdown.Item
                key={i}
                onClick={e => {
                  setBankSelected(d.value);
                  onSelectYear(d.id);
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

SetDefault.propTypes = {
  property: PropTypes.string
};
SetDefault.defaultProps = {
  property: "String name"
};

export default SetDefault;
