import React from 'react';
import DateTimePicker from 'react-datetime-picker';

class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.hh = React.createRef();
        this.mm = React.createRef();
        this.selectedDate = React.createRef();
        this.state = {
            date: new Date(),
            dateResult: null,
            isInc: true,
            newDate: ""
        }
    }
    onDateConvert = () => {
        let selectedDate = document.getElementsByName("selectedDate")[0].value;
        selectedDate = new Date(selectedDate);
        const selectedDateformat = `${selectedDate.getFullYear()}/${selectedDate.getMonth()+1}/${selectedDate.getDate()} ${selectedDate.getHours()}:${selectedDate.getMinutes() < 10 ? "0"+selectedDate.getMinutes() : selectedDate.getMinutes()}`

        const hh = Number(this.hh.current.value);
        const mm = Number(this.mm.current.value);
        let newDate = this.state.isInc ? selectedDate.setMinutes( selectedDate.getMinutes() + mm ) : selectedDate.setMinutes( selectedDate.getMinutes() - mm);
        const nd = this.state.isInc ? selectedDate.setHours( selectedDate.getHours() + hh ) : selectedDate.setHours( selectedDate.getHours() - hh );

        newDate = `${new Date(nd)}\r`;
        newDate += `Selected Time = ${selectedDateformat}\r`
        newDate += `${this.state.isInc ? "Increment" : "Decrement"} (hrs) = ${hh < 10 ? "0"+hh : hh}:${mm < 10 ? "0"+mm : mm}\r`
        const resultDateformat = `${selectedDate.getFullYear()}/${selectedDate.getMonth()+1}/${selectedDate.getDate()} ${selectedDate.getHours() < 10 ? "0"+selectedDate.getHours() : selectedDate.getHours()}:${selectedDate.getMinutes() < 10 ? "0"+selectedDate.getMinutes() : selectedDate.getMinutes()}`
        newDate += `${this.state.isInc ? "Increment" : "Decrement"} Time = ${resultDateformat} `
        this.setState({ newDate})
    }
    onChange = date => this.setState({ date })
    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className="mt-10 mb-10">
                        <div className="row">
                            <div className="col-lg-6 mb-10 p-0">
                                <DateTimePicker
                                onChange={this.onChange}
                                value={this.state.date}
                                clearIcon={null}
                                name="selectedDate"
                                />
                            </div>
                            <div className="col-lg-6 p-0">
                                <div className="input-group mb-10">
                                    <div className="input-group-addon ">
                                        <div className="input-group-text">
                                            <input type="checkbox" onChange={() => this.setState({ isInc: !this.state.isInc })} value="inc" defaultChecked id="nType" />
                                            &nbsp;<label style={{ fontWeight: 100, cursor: "pointer" }} htmlFor="nType">{this.state.isInc ? "Increment" : "Decrement"}</label>
                                        </div>
                                    </div>
                                    <select ref={this.hh} className="form-control b-1 z-0">
                                        <option value="0">HH</option>
                                        {
                                            Array.from({length: 12}, (v, k) => k+1).map((hh,i) => <option key={i} value={hh}>{hh}</option>)
                                        }
                                    </select>
                                    <select ref={this.mm} className="form-control br-0 b-1 z-0">
                                        <option value="0">MM</option>
                                        {
                                            Array.from({length: 59}, (v, k) => k+1).map((mm,i) => <option key={i} value={mm}>{mm}</option>)
                                        }
                                    </select>
                                </div>
                                
                            </div>
                    </div>
                        <button onClick={this.onDateConvert} className="btn btn-bni mt-10 p-10 btn-block br-4">Calculate</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mt-10 mb-10">
                        <textarea placeholder="Select HH:MM and click calculate" value={this.state.newDate} readOnly style={{ resize: "none" }} rows="6" className="form-control" />
                    </div>
                </div>

            </div>
        );
    }
}

export default DateTime;
