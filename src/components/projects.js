import React from 'react';
import "../../node_modules/flat-icons/ecommerce.css";
import "../../node_modules/flat-icons/interface.css";
import "../../node_modules/flat-icons/technology.css";
import "../../node_modules/flat-icons/creative.css";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    name: "Parlor / Studio Management",
                    description: "A Dance Studio comprising business appointments, attendance, fee collection, payments etc..",
                    sort: 1,
                },
                {
                    name: "Chartered Accountant ERP",
                    description: "Connecting CA branches accross globe, dynamic CA cases, user / role based case allocation, client database and client pricing.",
                    sort: 2,
                },
                {
                    name: "Gaming arcade time slotting",
                    description: "Online appointment for gaming members (time based / FCFS), member registration, member typing, member coaching, cafe kiosk, payments and acknowledgement.",
                    sort: 3,
                },
                {
                    name: "Hospital Management",
                    description: "Patient registration, diagnosis, analyse biopsy data, diagnosis pricing, Kidney transplantation services, patient associated pharmacy and discharge summary",
                    sort: 4,
                },
                {
                    name: "TakeOut Kitchens",
                    description: "Phone orders, Inventory, printer friendly, employee registration with roles, stock take, back order, stock transfer, payment methods and loyalty program.",
                    sort: 5,
                },
                {
                    name: "TBC Tires",
                    description: "Responsive web app for users to purchase tires online. Tire variants, vehicle compatibility for tires, Google API user login and pay online.",
                    sort: 6,
                },
                {
                    name: "Bayer & Photon Labs",
                    description: "Responsive web for Bayer products. Various levels of regional domains. Photon internal projects maintenance and stream line activities.",
                    sort: 7,
                },
                {
                    name: "Analance - Business Intelligence Software",
                    description: "Aspects like busineess intelligence, Advance Analytics, Data Management, Artificical Intelligence, IOT, front end component architecture and web first.",
                    sort: 8,
                },
                {
                    name: "Non Disclosable Mobile Manufacturing Company",
                    description: "Manufacture units, Station, Site details, travel time calculation during production. Analysis charts, table details of analytics based datas.",
                    sort: 9,
                },
            ]
        };
        document.title = "Bharani | Projects"
    }
    render() {
        return (
            <section className="section lb">
                <div className="section-title">
                    <div style={{ backgroundColor: "transparent" }} className="process-box">
                        <div className="process-front text-center">
                            <h2 style={{ color: "#aaa" }}>Projects</h2>
                            <hr />
                            <i className="fi-creative-cloud-computing-3"></i>
                            <p>
                                While designing and developing products, I use UX methods and principles to deliver a positive experience.
                                Design principles are the guiding light for any software application.
                                There are many ways to create a less ambiguous product. Countably, some of my them are ...
                            </p>
                        </div>
                    </div>
                    {
                    this.state.projects.sort((a, b) => (a.sort < b.sort) ? 1 : (a.sort > b.sort) ? -1 : 0).map((project, i) => (
                        <div style={{ color: "#333" }} key={i} className={`${(i+1)%2 === 0 ? "row form-group" : null}`}>
                            <div className="col-md-6">
                                <div className="blog-box">
                                    <div className="post-media">
                                        <div className="title text-center">
                                            <h4>{project.name}</h4>
                                        </div>
                                    </div>
                                    <div className="blog-desc">
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
        )
    }
}
 export default Projects;
