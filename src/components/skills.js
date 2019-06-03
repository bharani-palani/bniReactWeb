import React from 'react';
import "../../node_modules/flat-icons/ecommerce.css";
import "../../node_modules/flat-icons/interface.css";
import "../../node_modules/flat-icons/technology.css";
import "../../node_modules/flat-icons/creative.css";

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                {
                    name: "Browser Developer tools",
                    sort: 1,
                    imageRoot: "devTools.png",
                    description: "Bla bla"
                },
            ]
        }
    }
    render() {
        return (
            <div id="wrapper">
                <section className="section lb">
                    <div className="section-title text-center">
                        <div style={{ backgroundColor: "transparent" }} className="process-box">
                            <div className="process-front text-center">
                                <h2 style={{ color: "#aaa" }}>Skills</h2>
                                <hr />
                                <i className="fi-tech-tap"></i>
                                <p>Not the actual coding and implementation, but the types of technology and their tradeoffs like</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Skills;
