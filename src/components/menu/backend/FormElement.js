import React, { useEffect } from "react";

function FormElement(props) {
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
      default:
        return null;
    }
  };

  return <div>{renderElement(props.index, props.element, props.value)}</div>;
}

export default FormElement;
