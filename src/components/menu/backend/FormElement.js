import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { DropdownButton, Dropdown, MenuItem } from "react-bootstrap";
import apiInstance from "../../../apiServices";

function FormElement(props) {
  const [date, setDate] = useState(new Date(props.value));
  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownOption, setDropDownOption] = useState(props.value);
  useEffect(() => {
    if (typeof props.element === "object") {
      if (props.element.dropDownFetch && props.element.dropDownFetch.apiUrl) {
        apiInstance
          .get(props.element.dropDownFetch.apiUrl)
          .then(response => {
            setDropDownList(response.data.response);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }, [props.element]);

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
      // console.log(element)
      switch (firstKey) {
        case "dropDownFetch":
          return (
            <select 
              onChange={e => {
                props.onChange(index, e.target.value);
                setDropDownOption(e.target.value)}
              } 
              className="dropdown" 
              value={dropDownOption}
            >
              <option value={null}>Select</option>
              {dropDownList.map((d,i) => (
                <option key={i} value={d.id}>{d.value}</option>
              ))}
            </select>
          );
        default:
          return null;
      }
    }
  };

  return <div>{renderElement(props.index, props.element, props.value)}</div>;
}

export default FormElement;
