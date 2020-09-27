import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";

const SetDefault = props => {
  const [yearList, setYearList] = useState([
    { id: 1, value: 2020 },
    { id: 2, value: 2021 }
  ]);
  const [yearSelected, setYearSelected] = useState(new Date().getFullYear());

  const onYearSelect = id => {
    setYearSelected(yearList.filter(d => d.id === id)[0].value);
  };
  return (
    <>
      <span>Select year</span>
      <SelectableContext.Provider value={false}>
        <Dropdown>
          <Dropdown.Toggle>
            {yearSelected} <i className="fa fa-chevron-down" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {yearList.map((d, i) => (
              <Dropdown.Item
                key={i}
                onClick={e => {
                  onYearSelect(d.id);
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
