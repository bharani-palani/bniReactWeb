import React, { useState } from "react";
import PrettyCode from "./prettyCode";
import { onDestruct } from "./stringFunction";

function Destructure() {
  let arrayOfObjects = [
    { name: "Bharani", age: 40, gender: "Male" },
    { name: "Palani", age: 65, gender: "Male" },
    { name: "Suganthi", age: 60, gender: "Female" }
  ];
  const [propertyName, setProperty] = useState("firstName");
  const [output, setOutput] = useState("");

  const onDestructure = () => {
    arrayOfObjects = arrayOfObjects.map(
      ({ name, ...balance }) => ({[propertyName]: name, ...balance})
    );
    setOutput(JSON.stringify(arrayOfObjects));
  };

  return (
    <>
      <div className="row mt-10">
        <div className="col-lg-6">
          <label>Alias for property "name"</label>
          <input
            type="text"
            placeholder="Enter property name"
            className="form-control"
            onChange={e => setProperty(e.target.value)}
            defaultValue={propertyName}
          />
          <label>Array of Objects</label>
          <textarea
            rows="3"
            cols="3"
            style={{ resize: "none" }}
            value={JSON.stringify(arrayOfObjects)}
            readOnly={true}
            className="form-control"
          />
          <button
            onClick={() => onDestructure()}
            className="btn btn-bni mt-10 p-10 btn-block br-4"
          >
            Submit
          </button>
        </div>
        <div className="col-lg-6">
          <label>Output</label>
          <textarea
            id="some"
            className="form-control"
            rows="8"
            cols="5"
            readOnly={true}
            style={{ resize: "none" }}
            value={output}
          />
        </div>
        <div className="col-lg-12 section-title">
          <PrettyCode code={onDestruct} />
        </div>
      </div>
    </>
  );
}

export default Destructure;
