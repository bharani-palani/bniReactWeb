import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";
import Radio from "./FormElements/Radio";

function FormElement(props) {
  let [date, setDate] = useState(new Date(props.value));

  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownSelected, setDropDownSelected] = useState(props.value);

  const objectToDate = date => {
    const [YYYY, MM, DD] = [
      date.getFullYear(),
      date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
      date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    ];
    const dateString = `${YYYY}-${MM}-${DD}`;
    return dateString;
  };

  const objectToDateTime = dt => {
    let [YYYY, MM, DD, hh, mm, ss] = [
      dt.getFullYear(),
      dt.getMonth() + 1 > 9 ? dt.getMonth() + 1 : `0${dt.getMonth() + 1}`,
      dt.getDate() > 9 ? dt.getDate() : `0${dt.getDate()}`,
      dt.getHours(),
      dt.getMinutes(),
      dt.getSeconds()
    ];
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    const dateString = `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
    return dateString;
  };

  let [dateTime, setDatetime] = useState(new Date(props.value));

  if (props.element === "date") {
    if (isNaN(Date.parse(date))) {
      let today = new Date();
      today = objectToDate(today);
      date = new Date(today);
      setDate(date);
      setTimeout(() => {
        props.onChange(props.index, today);
      }, 100);
    }
  }

  if (props.element === "dateTime") {
    if (isNaN(Date.parse(dateTime))) {
      let today = new Date();
      today = objectToDateTime(today);
      dateTime = new Date(today);
      setDatetime(dateTime);
      setTimeout(() => {
        props.onChange(props.index, today);
      }, 100);
    }
  }

  useEffect(() => {
    if (
      props.element &&
      props.element.fetch &&
      props.element.fetch.dropDownList
    ) {
      // fetch dropdown
      const dropDownList = props.element.fetch.dropDownList;
      setDropDownList(dropDownList);
      const dropDownSelected =
        dropDownList.filter(d => Number(d.id) === Number(props.value))[0]
          .value || null;
      setDropDownSelected(dropDownSelected);
    }
  }, [props.element]);

  const onDropDownSelect = (index, id, primaryKey) => {
    const dropDownSelected = dropDownList.filter(
      d => Number(d.id) === Number(id)
    )[0].value;
    setDropDownSelected(dropDownSelected);
    props.onChange(index, id, primaryKey);
  };

  const renderElement = (index, element, value, primaryKey) => {
    if (typeof element === "string") {
      switch (element) {
        case "textbox":
          return (
            <input
              type="text"
              placeholder={props.placeholder}
              onBlur={e => props.onChange(index, e.target.value, primaryKey)}
              className="form-control"
              defaultValue={value}
            />
          );
        case "number":
          return (
            <input
              type="number"
              placeholder={props.placeholder}
              onBlur={e => props.onChange(index, e.target.value, primaryKey)}
              className="form-control"
              defaultValue={value}
            />
          );
        case "textarea":
          return (
            <textarea
              placeholder={props.placeholder}
              onBlur={e => props.onChange(index, e.target.value, primaryKey)}
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
                <div
                  className={
                    props.showDecrement === false ? "pull-left" : "pull-right"
                  }
                >
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
                props.onChange(index, objectToDate(value), primaryKey);
              }}
              value={date}
              format={`y-MM-dd`}
              required
              clearIcon={null}
            />
          );
        case "dateTime":
          return (
            <DateTimePicker
              onChange={value => {
                setDatetime(value);
                props.onChange(index, objectToDateTime(value), primaryKey);
              }}
              value={dateTime}
              format={`y-MM-dd h:mm:ss a`}
              required
              clearIcon={null}
              calendarIcon={null}
            />
            // null
          );
        default:
          return <div>Unknown Element</div>;
      }
    } else if (typeof element === "object") {
      const firstKey = Object.keys(element)[0];
      switch (firstKey) {
        case "fetch":
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
        case "radio":
          return (
            <Radio
              index={index}
              primaryKey={primaryKey}
              onChange={(ind, val, pKey) => props.onChange(ind, val, pKey)}
              element={props.element}
              value={props.value}
            />
          );
        default:
          return <div>Unknown Element</div>;
      }
    }
  };

  return (
    <div>
      {renderElement(props.index, props.element, props.value, props.primaryKey)}
    </div>
  );
}

export default FormElement;
