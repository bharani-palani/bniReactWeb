import React from 'react';

class Utilities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div id="wrapper">
                <section className="section lb" style={{ minHeight: window.screen.height }}>
                    <div className="section-title text-center">
                        <div style={{ backgroundColor: "transparent" }} className="process-box">
                            <div className="process-front text-center">
                                <h2 style={{ color: "#aaa" }}>Utilities</h2>
                                <hr />
                                <i className="fi-creative-computer"></i>
                                <p>Some useful javascript utilities</p>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        );
    }
}

export default Utilities;