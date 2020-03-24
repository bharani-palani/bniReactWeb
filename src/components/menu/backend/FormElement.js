import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function FormElement(props) {
  const [element, setElement] = useState(props.element);
  const [eleVal, setEleVal] = useState(props.value);
  const [placeholder, setPlaceHolder] = useState(props.placeholder);
  const [checked, setChecked] = useState(false);
  useEffect(() => {}, []);

  const renderTooltip = props => {
    return (
      <Tooltip>
        Simple tooltip
      </Tooltip>
    );
  };

  const renderElement = (element, value) => {
    switch (element) {
      case "textbox":
        return (
          <input
            type="text"
            placeholder={placeholder}
            onChange={e => false}
            className="form-control"
            defaultValue={value}
          />
        );
      case "textarea":
        return (
          <textarea
            placeholder={placeholder}
            onChange={e => false}
            rows="3"
            className="form-control"
            defaultValue={value}
          />
        );
      case "checkbox":
        return (
          <>
            <Switch
              onColor="#c2d82e"
              offColor="#333"
              checkedIcon={false}
              uncheckedIcon={false}
              height={21}
              width={42}
              value={value}
              onChange={e => setChecked(!checked)}
              checked={checked}
            />
            <div className="pull-right">
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={(<Tooltip>Delete!</Tooltip>)}
              >
                <i className="fa fa-minus-circle danger" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={(<Tooltip>Add new row</Tooltip>)}
              >
                  <i className="fa fa-plus-circle success" />
              </OverlayTrigger>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return renderElement(element, eleVal);
}

export default FormElement;
