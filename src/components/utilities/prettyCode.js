import React from "react";
import "code-prettify/styles/sunburst.css";
import Switch from "react-switch";

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
        <div className="ml-0 pt-10 pb-10">
          <div className="grid-pretty eightyPixColumn">
            <div>
              <label onClick={this.handleCheck} htmlFor={`mycheckbox-${random}`}>
                Javascript
              </label>
            </div>
            <div>
              <Switch
                onColor="#c2d82e"
                offColor="#333"
                checkedIcon={false}
                uncheckedIcon={false}
                height={21}
                width={42}
                onChange={this.handleCheck}
                checked={this.state.checked}
              />
            </div>
          </div>
        </div>
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
