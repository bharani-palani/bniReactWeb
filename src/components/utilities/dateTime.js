import React from "react";
import DateTimePicker from "react-datetime-picker";
import "code-prettify/styles/sunburst.css";

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
    };
  }
  onDateConvert = () => {
    let selectedDate = document.getElementsByName("selectedDate")[0].value;
    selectedDate = new Date(selectedDate);
    const selectedDateformat = `${selectedDate.getFullYear()}/${selectedDate.getMonth() +
      1}/${selectedDate.getDate()} ${selectedDate.getHours()}:${
      selectedDate.getMinutes() < 10
        ? "0" + selectedDate.getMinutes()
        : selectedDate.getMinutes()
    }`;

    const hh = Number(this.hh.current.value);
    const mm = Number(this.mm.current.value);
    let newDate = this.state.isInc
      ? selectedDate.setMinutes(selectedDate.getMinutes() + mm)
      : selectedDate.setMinutes(selectedDate.getMinutes() - mm);
    const nd = this.state.isInc
      ? selectedDate.setHours(selectedDate.getHours() + hh)
      : selectedDate.setHours(selectedDate.getHours() - hh);

    newDate = `${new Date(nd)}\r`;
    newDate = `Selected Time = ${selectedDateformat}\r`;
    newDate += `${this.state.isInc ? "Increment" : "Decrement"} (hrs) = ${
      hh < 10 ? "0" + hh : hh
    }:${mm < 10 ? "0" + mm : mm}\r`;
    const resultDateformat = `${selectedDate.getFullYear()}/${selectedDate.getMonth() +
      1}/${selectedDate.getDate()} ${
      selectedDate.getHours() < 10
        ? "0" + selectedDate.getHours()
        : selectedDate.getHours()
    }:${
      selectedDate.getMinutes() < 10
        ? "0" + selectedDate.getMinutes()
        : selectedDate.getMinutes()
    }`;
    newDate += `${
      this.state.isInc ? "Increment" : "Decrement"
    } Time = ${resultDateformat} `;
    this.setState({ newDate });
  };
  onChange = date => this.setState({ date });
  clearResult = () => {
    this.setState({ newDate: "" });
  };
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
                      <input
                        type="checkbox"
                        onChange={() =>
                          this.setState({ isInc: !this.state.isInc })
                        }
                        value="inc"
                        defaultChecked
                        id="nType"
                      />
                      &nbsp;
                      <label
                        style={{ fontWeight: 100, cursor: "pointer" }}
                        htmlFor="nType"
                      >
                        {this.state.isInc ? "Increment" : "Decrement"}
                      </label>
                    </div>
                  </div>
                  <select
                    ref={this.hh}
                    className="form-control contact-ip b-1 z-0"
                  >
                    <option value="0">HH</option>
                    {Array.from({ length: 12 }, (v, k) => k + 1).map(
                      (hh, i) => (
                        <option key={i} value={hh}>
                          {hh}
                        </option>
                      )
                    )}
                  </select>
                  <select
                    ref={this.mm}
                    className="form-control contact-ip br-0 b-1 z-0"
                  >
                    <option value="0">MM</option>
                    {Array.from({ length: 59 }, (v, k) => k + 1).map(
                      (mm, i) => (
                        <option key={i} value={mm}>
                          {mm}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>
            <button
              onClick={this.onDateConvert}
              className="btn btn-bni mt-10 p-10 btn-block br-4"
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mt-10 mb-10">
            {this.state.newDate ? (
              <div className="closeWrapper">
                <i
                  onClick={this.clearResult}
                  className="fa fa-times closeIcon"
                />
              </div>
            ) : null}
            <textarea
              placeholder="Select HH:MM and click calculate"
              value={this.state.newDate}
              readOnly
              style={{ resize: "none" }}
              rows="6"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-lg-12 section-title">
          <p>Javascript</p>
            {<div dangerouslySetInnerHTML={this.createMarkup()} />}
        </div>
      </div>
    );
  }
  createMarkup = () => {
    return { __html: `<pre class="prettyprint lang-html linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><span class="dec">&lt;!doctype html&gt;</span></li><li class="L1"><span class="tag">&lt;html&gt;</span></li><li class="L2"><span class="tag">&lt;head&gt;</span></li><li class="L3"><span class="tag">&lt;title&gt;</span><span class="pln">HTML Test</span><span class="tag">&lt;/title&gt;</span></li><li class="L4"><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/javascript"</span><span class="tag">&gt;</span></li><li class="L5"><span class="com">// Say hello world until the user starts questioning</span></li><li class="L6"><span class="com">// the meaningfulness of their existence.</span></li><li class="L7"><span class="kwd">function</span><span class="pln"> helloWorld</span><span class="pun">(</span><span class="pln">world</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L8"><span class="pln">  </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">42</span><span class="pun">;</span><span class="pln"> </span><span class="pun">--</span><span class="pln">i </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L9"><span class="pln">    alert</span><span class="pun">(</span><span class="str">'Hello '</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="typ">String</span><span class="pun">(</span><span class="pln">world</span><span class="pun">));</span></li><li class="L0"><span class="pln">  </span><span class="pun">}</span></li><li class="L1"><span class="pun">}</span></li><li class="L2"><span class="tag">&lt;/script&gt;</span></li><li class="L3"><span class="tag">&lt;style</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/css"</span><span class="tag">&gt;</span></li><li class="L4"><span class="pln">p </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">color</span><span class="pun">:</span><span class="pln"> pink </span><span class="pun">}</span></li><li class="L5"><span class="pln">b </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">color</span><span class="pun">:</span><span class="pln"> blue </span><span class="pun">}</span></li><li class="L6"><span class="pln">u </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">color</span><span class="pun">:</span><span class="pln"> </span><span class="str">"umber"</span><span class="pln"> </span><span class="pun">}</span></li><li class="L7"><span class="tag">&lt;/style&gt;</span></li><li class="L8"><span class="tag">&lt;/head&gt;</span></li><li class="L9"><span class="tag">&lt;body&gt;</span></li><li class="L0"><span class="tag">&lt;h1&gt;</span><span class="pln">Hello world!</span><span class="tag">&lt;/h1&gt;</span></li><li class="L1"><span class="tag">&lt;/body&gt;</span></li><li class="L2"><span class="tag">&lt;/html&gt;</span></li></ol></pre>` };
  };
}

export default DateTime;
