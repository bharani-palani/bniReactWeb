import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';

const ExamplePDFViewer = () => {
    return (
        <PDFViewer
            scale={1}
            navbarOnTop={true}
            document={{
                url: require('./resume.pdf')
            }}
        />
    );
};

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

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
                                <p>My skills, experience, projects and others</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <ExamplePDFViewer />
                    </div>
                </section>
            </div>
        );
    }
}

export default Resume;