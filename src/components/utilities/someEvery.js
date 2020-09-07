import React, { useState } from "react";
import PrettyCode from "./prettyCode";
import Switch from "react-switch";
import { someEveryCode, someEveryAdvanced } from "./stringFunction";
import helpers from "../../helpers";

function SomeEvery() {
  const [choice, setChoice] = useState("some");
  const [output, setOutput] = useState("");
  let [string, setString] = useState("");
  let [array, setArray] = useState("");
  const onFilter = () => {
    if (typeof array === "string") {
      array = array.split(",").map(a => String(a));
      const op = array[choice](a => a === string);
      setOutput(op);
    }
  };
  return (
    <div className="row mt-10 mb-10">
      <div className="col-lg-6">
        <div className="row">
          <div className="col-lg-6 pl-0 pr-2">
            <div className="grid-pretty fourColumn">
              <div>
                <label onClick={() => setChoice("some")} htmlFor="some">
                  SOME
                </label>
              </div>
              <div>
                <Switch
                  onColor={helpers.fluorescentColor}
                  offColor="#333"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={17}
                  width={35}
                  onChange={() => setChoice("some")}
                  checked={choice === "some"}
                />
              </div>
              <div>
                <label onClick={() => setChoice("every")} htmlFor="every">
                  EVERY
                </label>
              </div>
              <div>
                <Switch
                  onColor={helpers.fluorescentColor}
                  offColor="#333"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={17}
                  width={35}
                  onChange={() => setChoice("every")}
                  checked={choice === "every"}
                />
              </div>
            </div>
            <textarea
              rows="3"
              cols="3"
              style={{ resize: "none" }}
              onChange={e => setString(e.target.value)}
              placeholder="Enter string"
              className="form-control"
            />
          </div>
          <div className="col-lg-6 pl-2 pr-0">
            <label>Main array</label>
            <textarea
              rows="3"
              cols="3"
              style={{ resize: "none" }}
              onChange={e => setArray(e.target.value)}
              placeholder="Enter comma seperated array"
              className="form-control"
            />
          </div>
        </div>
        <button
          onClick={() => onFilter()}
          className="btn btn-bni mt-10 p-10 btn-block br-4"
        >
          Validate
        </button>
      </div>
      <div className="col-lg-6">
        <label>Output</label>
        <textarea
          id="some"
          className="form-control"
          rows="5"
          cols="5"
          readOnly={true}
          style={{ resize: "none" }}
          value={output}
        />
      </div>
      <div className="col-lg-12 section-title">
        <PrettyCode code={someEveryCode} />
        <label>Conditional Every (sample code):</label>
        <PrettyCode code={someEveryAdvanced} />
      </div>
    </div>
  );
}

export default SomeEvery;
