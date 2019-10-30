import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
import { Link } from "react-router-dom";


class Resume extends React.Component {
    render() {
        document.title = "Bharani | Resume";
        return (
            <div id="wrapper">
                <section className="section lb">
                    <div className="section-title">
                        <div style={{ backgroundColor: "transparent" }} className="process-box">
                            <div className="process-front text-center">
                                <h2 style={{ color: "#aaa" }}>Resume</h2>
                                <hr />
                                <i className="fi-ecommerce-invoice"></i>
                                <p>My skills, experience, projects and more</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid text-center">
                        <Link to={require("./resume.pdf")} target="_blank" download>
                            <i className="fi-creative-download downloadIcon" />
                        </Link>
                    </div>
                        <PDFReader 
                        showAllPage={true} 
                        url={require("./resume.pdf")}/>
                </section>
            </div>
        );
    }
}

export default Resume;