import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";

const DropDownFetch = props => {
  const { index, primaryKey, element, onChange, value } = props;
  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownSelected, setDropDownSelected] = useState(props.value);

  useEffect(() => {
    if (element && element.fetch && element.fetch.dropDownList) {
      // fetch dropdown
      const dropDownList = element.fetch.dropDownList;
      setDropDownList(dropDownList);
      const dropDownSelected =dropDownList.filter(d => Number(d.id) === Number(value))[0].value || null;
      setDropDownSelected(dropDownSelected);
    }
  }, [props.element]);

  const onDropDownSelect = (index, id, primaryKey) => {
    const dropDownSelected = dropDownList.filter(d => Number(d.id) === Number(id))[0].value;
    setDropDownSelected(dropDownSelected);
    onChange(index, id, primaryKey);
  };

  return (
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
                onDropDownSelect(index, d.id, primaryKey);
              }}
            >
              {d.value}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </SelectableContext.Provider>
  );
};

DropDownFetch.propTypes = {
  property: PropTypes.string
};
DropDownFetch.defaultProps = {
  property: "String name"
};

export default DropDownFetch;
