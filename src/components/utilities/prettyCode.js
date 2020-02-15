import React from "react";
import "code-prettify/styles/sunburst.css";

class PrettyCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.code
    };
  }
  render() {
    let str = String(this.state.code);
    str = str.split(/\r?\n/);
    return (
      <>
        <p style={{ margin: 0 }}><em>Javascript :</em></p>
        <pre class="prettyprint lang-html linenums prettyprinted">
          <ol className="linenums">
            {str.map((s, i) => (
              <li className={`l${i}`} key={i}>
                <span className="atn">{s}</span>
              </li>
            ))}
          </ol>
        </pre>
      </>
    );
  }
}

export default PrettyCode;
