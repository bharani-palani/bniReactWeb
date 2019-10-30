import React from 'react';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
    pageNumber: 1,
        }
    }

    render() {
        document.title = "Bharani | Resume";
        const { pageNumber, numPages } = this.state;
        return (
            <div id="wrapper">
                <section className="section lb">
                    <div className="section-title">
                        <div style={{ backgroundColor: "transparent" }} className="process-box">
                            <div className="process-front text-center">
                                <h2 style={{ color: "#aaa" }}>Resume</h2>
                                <hr />
                                <i className="fi-ecommerce-invoice"></i>
                                <p>My skills, experience, projects and others</p>
                            </div>
                        </div>
                    </div>
                    <div className="">

                    </div>
                </section>
            </div>
        );
    }
}

export default Resume;