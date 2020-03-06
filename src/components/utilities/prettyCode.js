import React from "react";
import "code-prettify/styles/sunburst.css";

class PrettyCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.code,
      checked: false
    };
  }
  handleCheck = () => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    let str = String(this.state.code);
    const random = Math.random();
    str = str.split(/\r?\n/);
    return (
      <>
        <p className="ml-0 pt-10 pb-10">
          <input
            type="checkbox"
            id={`mycheckbox-${random}`}
            onChange={this.handleCheck}
            defaultChecked={this.state.checked}
          />{" "}
          <label htmlFor={`mycheckbox-${random}`}>
            <em>Javascript :</em>
          </label>
        </p>
        {this.state.checked && (
          <pre className="prettyprint lang-html linenums prettyprinted">
            <ol className="linenums">
              {str.map((s, i) => (
                <li className={`l${i}`} key={i}>
                  <span className="atn">{s}</span>
                </li>
              ))}
            </ol>
          </pre>
        )}
      </>
    );
  }
}

export default PrettyCode;
