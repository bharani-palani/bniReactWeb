import React from 'react';
import Breadcrumbs from "./breadcrumb";

class Awards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ideTechs: [
                {
                    name: "Outstanding Performance",
                    sort: 1,
                    description: "Promising best developer on swift and efficient issue tracking and problem solving."
                },
                {
                    name: "Quality Certification",
                    sort: 2,
                    description: "Attired award for best coding practices and code optimization."
                },
                {
                    name: "Collaboration and Leadership",
                    sort: 2,
                    description: "Team handling, task splitting, knowledge sharing and higher end leadership qualities."
                },
            ]
        };
    }
    render() {
        return (
            <section className="section lb" style={{ minHeight: window.screen.height }}>
                <div className="breadcrumbs"><Breadcrumbs /></div>
                <div className="section-title">
                    <div style={{ backgroundColor: "transparent" }} className="process-box">
                        <div className="process-front text-center">
                            <h2 style={{ color: "#aaa" }}>Awards</h2>
                            <hr />
                            <i className="fi-tech-shield-6"></i>
                            <p>Honours, Awards and Certification</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.ideTechs.map((ide, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="process-box">
                                    <div className="process-front text-center">
                                        {/* <i class="flaticon-lightbulb-idea"></i> */}
                                        {/* <img style={{ width: "150px", height: "100px", margin: "0 auto" }} src={require(`../images/ide/${ide.imageRoot}`)} alt="" className="img-responsive" /> */}
                                        <h3>{ide.name}</h3>
                                    </div>

                                    <div className="process-end text-center">
                                        <p>{ide.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
               
        );
    }
}

export default Awards; 