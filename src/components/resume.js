import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
import { Link } from "react-router-dom";
import Breadcrumbs from "./breadcrumb";


class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeContainer: false
        }
    }
    componentDidMount() {
        const width = document.getElementsByClassName("lb")[0].clientWidth;
        this.setState({ resumeContainer: width })
    }
    render() {
        document.title = "Bharani | Resume";
        return (
            <section className="section lb">
                <div className="breadcrumbs"><Breadcrumbs /></div>
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
                {
                    this.state.resumeContainer ?
                    <PDFReader 
                    width={ this.state.resumeContainer}
                    showAllPage={true} 
                    url={require("./resume.pdf")}/>
                    :
                    null
                }
            </section>
        );
    }
}

export default Resume;