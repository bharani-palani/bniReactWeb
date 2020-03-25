import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function FormElement(props) {
  const [checked, setChecked] = useState(true);
  useEffect(() => {}, []);

  const renderElement = (index, element, value) => {
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
            {/* {JSON.stringify(value)} */}
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip>Delete!</Tooltip>}
            >
              <i
                onClick={() => props.onDelete(index)}
                className="fa fa-minus-circle danger"
              />
            </OverlayTrigger>
            <div className="pull-right">
              {props.showIncrementer && (
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip>Add new row</Tooltip>}
                >
                  <i
                    onClick={() => props.onAddRow(true)}
                    className="fa fa-plus-circle success"
                  />
                </OverlayTrigger>
              )}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return <div>{renderElement(props.index, props.element, props.value)}</div>;
}

export default FormElement;
