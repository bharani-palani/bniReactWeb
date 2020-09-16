import React from "react";
import PrettyCode from "./prettyCode";
import { getRandomNumber, getUUID } from "./stringFunction";
import Switch from "react-switch";
import helpers from "../../helpers";

class RandomNumber extends React.Component {
  constructor(props) {
    super(props);
    this.start = React.createRef();
    this.end = React.createRef();
    this.state = {
      choice: "range"
    };
  }
  getRandomNumber = () => {
    const [start, end] = [
      Number(this.start.current.value),
      Number(this.end.current.value)
    ];
    const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
    this.setState({ randomNumber });
  };
  getUUID = () => {
    const uuidv1 = require("uuid/v1");
    this.setState({ randomNumber: uuidv1() });
  };
  getRandom = () => {
    this.state.choice === "range" ? this.getRandomNumber() : this.getUUID();
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 pt-10">
          <div className="grid-pretty fourColumn">
            <div>
              <label onClick={() => this.setState({ choice: "range" })} htmlFor="range">RANGE</label>
            </div>
            <div>
              <Switch
                onColor={helpers.fluorescentColor}
                offColor="#333"
                checkedIcon={false}
                uncheckedIcon={false}
                height={17}
                width={35}
                onChange={() => this.setState({ choice: "range" })}
                checked={this.state.choice === "range"}
              />
            </div>
            <div>
              <label onClick={() => this.setState({ choice: "uuid" })} htmlFor="uuid">UUID</label>
            </div>
            <div>
              <Switch
                onColor={helpers.fluorescentColor}
                offColor="#333"
                checkedIcon={false}
                uncheckedIcon={false}
                height={17}
                width={35}
                onChange={() => this.setState({ choice: "uuid" })}
                checked={this.state.choice === "uuid"}
              />
            </div>
          </div>
          {this.state.choice === "range" && (
            <>
              <div className="col-lg-6 mb-10 pl-0 pr-1">
                <input
                  ref={this.start}
                  type="number"
                  placeholder="Start range"
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 mb-10 pl-1 pr-0">
                <input
                  ref={this.end}
                  type="number"
                  placeholder="End range"
                  className="form-control"
                />
              </div>
            </>
          )}
          <button
            onClick={this.getRandom}
            className="btn btn-bni mt-10 p-10 btn-block br-4"
          >
            Show
          </button>
        </div>
        <div className="col-lg-6 pt-15">
          <textarea
            placeholder="Random number"
            value={this.state.randomNumber}
            readOnly
            style={{ resize: "none" }}
            rows="6"
            className="form-control"
          />
        </div>
        <div className="col-lg-12">
          {this.state.choice === "range" && (
            <PrettyCode code={getRandomNumber} />
          )}
          {this.state.choice === "uuid" && <PrettyCode code={getUUID} />}
        </div>
      </div>
    );
  }
}

export default RandomNumber;
