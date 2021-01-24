import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";

const SetBank = props => {
  const {bankList, onSelectBank} = props;
  const [bankSelected, setBankSelected] = useState("");
  
  useEffect(() => {
    if(bankList.length > 0) {
      setBankSelected(bankList[0].value);
    }
  },[])
  return (
    <>
      <span>Select Bank</span>
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
                  onSelectBank(d.id);
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

SetBank.propTypes = {
  property: PropTypes.string
};
SetBank.defaultProps = {
  property: "String name"
};

export default SetBank;
