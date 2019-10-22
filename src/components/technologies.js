import React from 'react';

class Technologies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techs: [
                {
                    name: "HTML5",
                    sort: 1,
                    imageRoot: "html5.jpg",
                    description: "Solution stack that defines the structure and presentation of Web contents with HTML5 API's and features"
                },
                {
                    name: "CSS3",
                    sort: 2,
                    imageRoot: "css3.jpg",
                    description: "Style Sheets language used for describing the look and formatting of a document / Progressive Web App using SCSS & SASS features"
                },
                {
                    name: "Bootstrap 3 & 4",
                    sort: 3,
                    imageRoot: "bootstrap.png",
                    description: "Responsive, mobile-first front-end web development. CSS / JS design templates for typography, forms and other UI components"
                },
                {
                    name: "Angular",
                    sort: 4,
                    imageRoot: "angular.png",
                    description: "Angular framework for building client applications (SPA) in HTML and TypeScript. Angular versioning 1.x, 2, 4, 5, 6, 7"
                },
                {
                    name: "React",
                    sort: 5,
                    imageRoot: "react.png",
                    description: "React is a JavaScript library for building UI Component Functional / static based. Props, Redux, Router, state management etc..."
                },
                {
                    name: "Jquery",
                    sort: 6,
                    imageRoot: "jquery.png",
                    description: "A JavaScript library designed to simplify HTML DOM tree traversal and manipulation, featuring event handling, CSS animation and Ajax"
                },
                {
                    name: "Node.JS",
                    sort: 7,
                    imageRoot: "nodejs.png",
                    description: "JavaScript code server-side scripting to ensure connect, packing, building applications using NPM CLI and establishing DB connectivity."
                },
                {
                    name: "PhP",
                    sort: 8,
                    imageRoot: "php.png",
                    description: "Build dynamic, interactive Web pages and service API's. MVC architecture. Core PhP, FPDF, CodeIgniter 3 and Zend are additional addons."
                },
                {
                    name: "Mysql",
                    sort: 9,
                    imageRoot: "mysql.png",
                    description: "An RDBMS architechture involving query building, table design / structuring, cursors and procedures. Tool: phpMyAdmin, Mysql Workbench, Mysql Yog etc.."
                },
                {
                    name: "Spring Boot",
                    sort: 10,
                    imageRoot: "spring-boot-logo.png",
                    description: "Annotaions, Java collections, REST service, configuring pom.xml for dependency injection, connecting MySql with varied Microservices"
                },
                {
                    name: "GIT",
                    sort: 10.1,
                    imageRoot: "git.png",
                    description: "A distributed version-control system. Actions like Cloning, Merging, branching, pull request, approve and merge activities handled."
                },
                {
                    name: "Google Cloud",
                    sort: 11,
                    imageRoot: "google-cloud-logo.png",
                    description: "Deploy application on clients instance. Cloud engine, network services, disable/shutdown instances etc.."
                },
                {
                    name: "AWS",
                    sort: 12,
                    imageRoot: "aws.png",
                    description: "Infrastructure as a service (IaaS), platform as a service (PaaS) and packaged software as a service (SaaS). Cloud instance and D3 bucket."
                },
            ],
            ideTechs: [
                {
                    name: "Visual Studio Code",
                    sort: 1,
                    imageRoot: "vscode.png",
                    description: "Code editor redefined and optimized for building and debugging modern web and cloud applications."
                },
                {
                    name: "Mysql Workbench",
                    sort: 2,
                    imageRoot: "mysqlWb.jpg",
                    description: "Database design for SQL development, administration, database design, creation and maintenance for MySQL database system."
                },
                {
                    name: "Spring Tool Suite",
                    sort: 3,
                    imageRoot: "STS.png",
                    description: "Code backend sprint boot files, which has an embeded Tomcat server"
                },
                {
                    name: "IntelliJ Idea CE",
                    sort: 4,
                    imageRoot: "IntelliJ.png",
                    description: "Java integrated development environment, similar to Eclipse IDE lookup and features."
                },
            ],
            osTechs: [
                {
                    name: "Windows",
                    sort: 4,
                    imageRoot: "windows.png",
                    description: "Java integrated development environment, similar to Eclipse IDE lookup and features."
                },
                {
                    name: "MAC OS",
                    sort: 4,
                    imageRoot: "macos.png",
                    description: "Java integrated development environment, similar to Eclipse IDE lookup and features."
                },
            ]
        };
        document.title = "Bharani | Technologies"
    }
    render() {
        return (
            <div id="wrapper">
                <section className="section lb">
                    <div className="section-title text-center">
                        <div style={{ backgroundColor: "transparent" }} className="process-box">
                            <div className="process-front text-center">
                                <h2 style={{ color: "#aaa" }}>Technologies</h2>
                                <hr />
                                <i className="flaticon-computer"></i>
                                <p>Not the actual coding and implementation, but the types of technology and their tradeoffs like</p>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.techs.sort((a, b) => (a.sort > b.sort) ? 1 : (a.sort < b.sort) ? -1 : 0).map((tech, i) => (
                            <div style={{ color: "#333" }} key={i} className={`text-center ${(i+1)%3 === 0 ? "row form-group ml-0 mr-0" : null}`}>
                                <div className="col-lg-4 hidden-md">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <img src={require(`../images/technology/${tech.imageRoot}`)} alt="" className="img-responsive" />
                                        </div>
                                        <div className="blog-desc">
                                            <h4>{tech.name}</h4>
                                            <p>{tech.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        this.state.techs.sort((a, b) => (a.sort > b.sort) ? 1 : (a.sort < b.sort) ? -1 : 0).map((tech, i) => (
                            <div style={{ color: "#333" }} key={i} className={`text-center ${(i+1)%2 === 0 ? "row form-group" : null}`}>
                                <div className="col-md-6 visible-md-block">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <img src={require(`../images/technology/${tech.imageRoot}`)} alt="" className="img-responsive" />
                                        </div>
                                        <div className="blog-desc">
                                            <h4>{tech.name}</h4>
                                            <p>{tech.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div style={{ backgroundColor: "transparent" }} className="process-box">
                        <div className="process-front text-center">
                            <h2 style={{ color: "#aaa" }}>IDE</h2>
                            <i className="flaticon-monitor"></i>
                        </div>
                    </div>

                    <div className="row">
                        {
                            this.state.ideTechs.map((ide, i) => (
                                <div key={i} className="col-lg-3 col-md-6">
                                    <div className="process-box">
                                        <div className="process-front text-center">
                                            {/* <i class="flaticon-lightbulb-idea"></i> */}
                                            <img style={{ width: "150px", height: "100px", margin: "0 auto" }} src={require(`../images/ide/${ide.imageRoot}`)} alt="" className="img-responsive" />
                                            <h3>{ide.name}</h3>
                                        </div>

                                        <div className="process-end text-center">
                                            {/* <h3>Typo's</h3> */}
                                            <p>{ide.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div style={{ backgroundColor: "transparent" }} className="process-box">
                        <div className="process-front text-center">
                            <h2 style={{ color: "#aaa" }}>OS</h2>
                            <i className="flaticon-point-mark-on-a-circle"></i>
                        </div>
                    </div>

                    <div className="row">
                        {
                            this.state.osTechs.map((os, i) => (
                                <div key={i} className="col-lg-3 col-md-6">
                                    <div className="process-box">
                                        <div className="process-front text-center">
                                            {/* <i class="flaticon-lightbulb-idea"></i> */}
                                            <img style={{ width: "100px", height: "100px", margin: "0 auto" }} src={require(`../images/technology/${os.imageRoot}`)} alt="" className="img-responsive" />
                                            <h3>{os.name}</h3>
                                        </div>

                                        <div className="process-end text-center">
                                            <h3>Typo's</h3>
                                            <p>{os.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </section>
            </div>
        );
    }
}

export default Technologies;