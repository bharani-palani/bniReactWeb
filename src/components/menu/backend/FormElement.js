import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { DropdownButton, Dropdown, MenuItem } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";

function FormElement(props) {
  const [date, setDate] = useState(new Date(props.value));
  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownSelected, setDropDownSelected] = useState(props.value);

  useEffect(() => {
    if (typeof props.element === "object") {
      const dropDownList = props.element.dropDownFetch.dropDownList;
      setDropDownList(dropDownList);
      const dropDownSelected = dropDownList.filter(
        d => Number(d.id) === Number(props.value)
      )[0].value || null;
      setDropDownSelected(dropDownSelected);
    }
  }, [props.element]);

  const onDropDownSelect = (index, id) => {
    const dropDownSelected = dropDownList.filter(
      d => Number(d.id) === Number(id)
    )[0].value;
    setDropDownSelected(dropDownSelected);
    props.onChange(index, id);
  };

  const renderElement = (index, element, value) => {
    if (typeof element === "string") {
      switch (element) {
        case "textbox":
          return (
            <input
              type="text"
              placeholder={props.placeholder}
              onChange={e => props.onChange(index, e.target.value)}
              className="form-control"
              defaultValue={value}
            />
          );
        case "number":
          return (
            <input
              type="number"
              placeholder={props.placeholder}
              onChange={e => props.onChange(index, e.target.value)}
              className="form-control"
              defaultValue={value}
            />
          );
        case "textarea":
          return (
            <textarea
              placeholder={props.placeholder}
              onChange={e => props.onChange(index, e.target.value)}
              rows="3"
              className="form-control"
              defaultValue={value}
            />
          );
        case "label":
          return (
            <div className="text-danger">
              <b>{value}</b>
            </div>
          );
        case "checkbox":
          return (
            <>
              {props.showDecrement && (
                <i
                  onClick={() => props.onDelete(index)}
                  className="fa fa-minus-circle danger"
                />
              )}
              {props.showIncrementer && (
                <div className="pull-right">
                  <i
                    onClick={() => props.onAddRow(true)}
                    className="fa fa-plus-circle success"
                  />
                </div>
              )}
            </>
          );
        case "date":
          return (
            <DateTimePicker
              onChange={value => {
                setDate(value);
                props.onChange(index, value);
              }}
              value={date}
              format={`y-MM-dd`}
              clearIcon={null}
            />
          );
        default:
          return null;
      }
    } else if (typeof element === "object") {
      const firstKey = Object.keys(element)[0];
      switch (firstKey) {
        case "dropDownFetch":
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
                        onDropDownSelect(index, d.id);
                      }}
                    >
                      {d.value}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </SelectableContext.Provider>
          );
        default:
          return null;
      }
    }
  };

  return <div>{renderElement(props.index, props.element, props.value)}</div>;
}

export default FormElement;
