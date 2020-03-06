import React from "react";
import PrettyCode from "./prettyCode";
import { onArrayDiff } from "./stringFunction";

class ArrayDiff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      arr1: "",
      arr2: ""
    };
  }
  convert = () => {
    let { arr1, arr2 } = this.state;
    arr1 = arr1.split(",").map(a => String(a));
    arr2 = arr2.split(",").map(a => String(a));

    const a1 = arr1.filter(a => !arr2.includes(a));
    const a2 = arr2.filter(a => !arr1.includes(a));
    const output = [...a1, ...a2];
    this.setState({ output });
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="arr1" className="mt-10">
                Array 1:
              </label>
              <textarea
                id="arr1"
                rows="3"
                className="form-control"
                onChange={e => this.setState({ arr1: e.target.value })}
                style={{ resize: "none", fontWeight: 200 }}
                placeholder="Comma seperated"
              ></textarea>
            </div>
            <div className="col-lg-6">
              <label htmlFor="arr2" className="mt-10">
                Array 2:
              </label>
              <textarea
                id="arr2"
                rows="3"
                className="form-control"
                onChange={e => this.setState({ arr2: e.target.value })}
                style={{ resize: "none", fontWeight: 200 }}
                placeholder="Comma seperated"
              ></textarea>
            </div>
          </div>
          <button
            onClick={() => this.convert()}
            className="btn btn-bni mt-10 p-10 btn-block br-4"
          >
            Show
          </button>
        </div>
        <div className="col-lg-6 pt-15">
          <textarea
            placeholder="Output Array"
            value={this.state.output}
            readOnly
            style={{ resize: "none" }}
            rows="7"
            className="form-control"
          />
        </div>
        <div className="col-lg-12 section-title">
          <PrettyCode code={onArrayDiff} />
        </div>
      </div>
    );
  }
}

export default ArrayDiff;
