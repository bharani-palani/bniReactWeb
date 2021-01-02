import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Radio = props => {
  const { index, primaryKey, onChange, element } = props;
  const { i, j } = index;
  const [radioList] = useState(element.radio.radioList);
  const preCheck = props.value || radioList.filter(r => r.checked)[0].value;
  const [radioSelected, setRadioSelected] = useState(preCheck);

  useEffect(() => {
    onChange(index, radioSelected, primaryKey);
  }, [radioSelected]);

  return (
    <div className={`grid-${radioList.length} pl-5`}>
      {radioList.length &&
        radioList.map((radio, k) => (
          <div key={k}>
            <input
              type="radio"
              onChange={e => {
                setRadioSelected(e.target.value);
                onChange(index, radio.value, primaryKey);
              }}
              value={radio.value}
              checked={radio.value === radioSelected}
              name={`${j}-${i}`}
              id={`${j}-${k}-${i}`}
            />{" "}
            <label htmlFor={`${j}-${k}-${i}`}>{radio.label}</label>
          </div>
        ))}
    </div>
  );
};

Radio.propTypes = {
  property: PropTypes.string
};
Radio.defaultProps = {
  property: "String name"
};

export default Radio;
