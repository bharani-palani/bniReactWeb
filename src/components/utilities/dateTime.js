import React from 'react';
import DateTimePicker from 'react-datetime-picker';

class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.dateRef = React.createRef();
        this.state = {
            date: new Date()
        }
    }
    onDateConvert = () => {

    }
    onChange = date => this.setState({ date })
    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className="mt-10 mb-10">
                        <div className="row">
                            <div className="col-lg-6">
                                <DateTimePicker
                                onChange={this.onChange}
                                value={this.state.date}
                                />
                            </div>
                            <div className="col-lg-6">
                                <div className="input-group mb-10">
                                    <div className="input-group-addon ">
                                        <div className="input-group-text">
                                            <input type="radio" value="inc" defaultChecked name="nType" />
                                        </div>
                                    </div>
                                    <input type="number" className="form-control" placeholder="Increment Hrs" />
                                </div>
                                <div className="input-group mb-10">
                                    <div className="input-group-addon">
                                        <div className="input-group-text">
                                            <input type="radio" value="dec" name="nType" />
                                        </div>
                                    </div>
                                    <input type="number" className="form-control" placeholder="Decrement Hrs" />
                                </div>
                            </div>
                    </div>
                        <button onClick={this.onDateConvert} className="btn btn-primary mt-10 p-10 btn-block br-4">Calculate</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mt-10 mb-10">
                        <textarea readOnly style={{ resize: "none" }} rows="10" className="form-control" />
                    </div>
                </div>

            </div>
        );
    }
}

export default DateTime;
