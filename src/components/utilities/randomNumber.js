import React from 'react';
import PrettyCode from "./prettyCode";
import { getRandomNumber, getUUID } from "./stringFunction";

class RandomNumber extends React.Component {
    constructor(props) {
        super(props);
        this.start = React.createRef();
        this.end = React.createRef();
        this.choice = React.createRef();
        this.state = {
            choice: "range"
        }
    }
    getRandomNumber = () => {
        const [start, end] = [Number(this.start.current.value), Number(this.end.current.value)]
        const randomNumber = Math.floor(Math.random() * (end-start+1)) + start;
        this.setState({randomNumber});
    }
    getUUID = () => {
        const uuidv1 = require('uuid/v1');
        this.setState({randomNumber: uuidv1()});
    }
    getRandom = () => {
        this.state.choice === "range" ? this.getRandomNumber() : this.getUUID();
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div>
                        <label htmlFor="range">
                            <input type="radio" onChange={() => this.setState({ choice: "range" })} defaultChecked id="range" name="choice" ref={this.choice} /> Range
                        </label>
                    </div>
                    <div className="col-lg-6 mb-10">
                        <input ref={this.start} type="number" placeholder="Start range" className="form-control" />
                    </div>
                    <div className="col-lg-6 mb-10">
                        <input ref={this.end} type="number" placeholder="End range" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="uuid">
                            <input type="radio" onChange={() => this.setState({ choice: "uuid" })} id="uuid" name="choice" ref={this.choice} /> UUID
                        </label>
                    </div>
                    <button onClick={this.getRandom} className="btn btn-bni mt-10 p-10 btn-block br-4">Show</button>
                </div>
                <div className="col-lg-6 pt-15">
                    <textarea placeholder="Random number" value={this.state.randomNumber} readOnly style={{ resize: "none" }} rows="6" className="form-control" />
                </div>
                <div className="col-lg-12 section-title">
                    <PrettyCode code={getRandomNumber} />
                    <PrettyCode code={getUUID} />
                </div>
            </div>
        );
    }
}

export default RandomNumber;
