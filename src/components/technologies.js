import React from 'react';
import baseUrl from "../environment";
import Loader from 'react-loader-spinner'
import helpers from "../helpers";

class Technologies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techs: [
                // {
                //     name: "HTML5",
                //     sort: 1,
                //     imageRoot: "html5.jpg",
                //     description: "Solution stack that defines the structure and presentation of Web contents with HTML5 API's and features"
                // },
                // {
                //     name: "CSS3",
                //     sort: 2,
                //     imageRoot: "css3.jpg",
                //     description: "Style Sheets language used for describing the look and formatting of a document / Progressive Web App using SCSS & SASS features"
                // },
                // {
                //     name: "Bootstrap 3 & 4",
                //     sort: 3,
                //     imageRoot: "bootstrap.png",
                //     description: "Responsive, mobile-first front-end web development. CSS / JS design templates for typography, forms and other UI components"
                // },
                // {
                //     name: "Angular",
                //     sort: 4,
                //     imageRoot: "angular.png",
                //     description: "Angular framework for building client applications (SPA) in HTML and TypeScript. Angular versioning 1.x, 2, 4, 5, 6, 7"
                // },
                // {
                //     name: "React",
                //     sort: 5,
                //     imageRoot: "react.png",
                //     description: "React is a JavaScript library for building UI Component Functional / static based. Props, Redux, Router, state management etc..."
                // },
                // {
                //     name: "Jquery",
                //     sort: 6,
                //     imageRoot: "jquery.png",
                //     description: "A JavaScript library designed to simplify HTML DOM tree traversal and manipulation, featuring event handling, CSS animation and Ajax"
                // },
                // {
                //     name: "Node.JS",
                //     sort: 7,
                //     imageRoot: "nodejs.png",
                //     description: "JavaScript code server-side scripting to ensure connect, packing, building applications using NPM CLI and establishing DB connectivity."
                // },
                // {
                //     name: "PhP",
                //     sort: 8,
                //     imageRoot: "php.png",
                //     description: "Build dynamic, interactive Web pages and service API's. MVC architecture. Core PhP, FPDF, CodeIgniter 3 and Zend are additional addons."
                // },
                // {
                //     name: "Mysql",
                //     sort: 9,
                //     imageRoot: "mysql.png",
                //     description: "An RDBMS architechture involving query building, table design / structuring, cursors and procedures. Tool: phpMyAdmin, Mysql Workbench, Mysql Yog etc.."
                // },
                // {
                //     name: "Spring Boot",
                //     sort: 10,
                //     imageRoot: "spring-boot-logo.png",
                //     description: "Annotaions, Java collections, REST service, configuring pom.xml for dependency injection, connecting MySql with varied Microservices"
                // },
                // {
                //     name: "GIT",
                //     sort: 10.1,
                //     imageRoot: "git.png",
                //     description: "A distributed version-control system. Actions like Cloning, Merging, branching, pull request, approve and merge activities handled."
                // },
                // {
                //     name: "Google Cloud",
                //     sort: 11,
                //     imageRoot: "google-cloud-logo.png",
                //     description: "Deploy application on clients instance. Cloud engine, network services, disable/shutdown instances etc.."
                // },
                // {
                //     name: "AWS",
                //     sort: 12,
                //     imageRoot: "aws.png",
                //     description: "Infrastructure as a service (IaaS), platform as a service (PaaS) and packaged software as a service (SaaS). Cloud instance and D3 bucket."
                // },
            ],
            ideTechs: [
                // {
                //     name: "Visual Studio Code",
                //     sort: 1,
                //     imageRoot: "vscode.png",
                //     description: "Code editor redefined and optimized for building and debugging modern web and cloud applications."
                // },
                // {
                //     name: "Mysql Workbench",
                //     sort: 2,
                //     imageRoot: "mysqlWb.jpg",
                //     description: "Database design for SQL development, administration, database design, creation and maintenance for MySQL database system."
                // },
                // {
                //     name: "Spring Tool Suite",
                //     sort: 3,
                //     imageRoot: "STS.png",
                //     description: "Code backend sprint boot files, which has an embeded Tomcat server"
                // },
                // {
                //     name: "IntelliJ Idea CE",
                //     sort: 4,
                //     imageRoot: "IntelliJ.png",
                //     description: "Java integrated development environment, similar to Eclipse IDE lookup and features."
                // },
            ],
            osTechs: [
                // {
                //     name: "Windows",
                //     sort: 4,
                //     imageRoot: "windows.png",
                //     description: "Java integrated development environment, similar to Eclipse IDE lookup and features."
                // },
                // {
                //     name: "MAC OS",
                //     sort: 4,
                //     imageRoot: "macos.png",
                //     description: "Java integrated development environment, similar to Eclipse IDE lookup and features."
                // },
            ]
        };
        document.title = "Bharani | Technologies"
    }
    componentDidMount() {
        const one = this.getTechnologies();
        const two = this.getIdes();
        const three = this.getOss();
    
        Promise.all([one, two, three]).then(r => {
            const [techHeading, techs] = r[0];
            const ideTechs = r[1];
            const osTechs = r[2];
            this.setState({ techHeading, techs, ideTechs, osTechs });
        });
    }
    getTechnologies = async() => {
        const apiUrl = `${baseUrl()}/technologies`;
        const axios = require('axios');
        const tech = axios.get(apiUrl).then(response => helpers.sageHeaderAndList(response.data.response, "tech_sort"));
        const json = await tech.then(r => r);
        return json;
    }
    getIdes = async() => {
        const apiUrl = `${baseUrl()}/ides`;
        const axios = require('axios');
        const ide = axios.get(apiUrl).then(response => response.data.response);
        const json = await ide.then(r => r);
        return json;
    }
    getOss = async() => {
        const apiUrl = `${baseUrl()}/operating-system`;
        const axios = require('axios');
        const os = axios.get(apiUrl).then(response => response.data.response);
        const json = await os.then(r => r);
        return json;
    }
    render() {
        return (
            <div id="wrapper">
                <section className="section lb" style={{ minHeight: window.screen.height }}>
                    {
                        this.state.techHeading &&
                        this.state.techs &&
                        this.state.ideTechs &&
                        this.state.osTechs  ?
                        <>
                            <div className="section-title text-center">
                                <div style={{ backgroundColor: "transparent" }} className="process-box">
                                    <div className="process-front text-center">
                                        <h2 style={{ color: "#aaa" }}>Technologies</h2>
                                        <hr />
                                        <i className="fi-creative-computer"></i>
                                        <p>{this.state.techHeading ? this.state.techHeading.tech_value : null}</p>
                                    </div>
                                </div>
                            </div>
                            {
                                this.state.techs ? this.state.techs.map((t, i) => (
                                    <div style={{ color: "#333" }} key={i} className={`text-center ${(i+1)%3 === 0 ? "row form-group ml-0 mr-0" : null}`}>
                                        <div className="col-lg-4 hidden-md">
                                            <div className="blog-box">
                                                <div className="post-media">
                                                {
                                                    t.tech_image_url ? <img src={require(`../images/technology/${t.tech_image_url}.png`)} alt="" className="img-responsive" /> : null
                                                }
                                                </div>
                                                <div className="blog-desc">
                                                    <h4>{t.tech_label}</h4>
                                                    <p>{t.tech_value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) : null
                            }
                            {
                                this.state.techs.map((t, i) => (
                                    <div style={{ color: "#333" }} key={i} className={`text-center ${(i+1)%2 === 0 ? "row form-group" : null}`}>
                                        <div className="col-md-6 visible-md-block">
                                            <div className="blog-box">
                                                <div className="post-media">
                                                {
                                                    t.tech_image_url ? <img src={require(`../images/technology/${t.tech_image_url}.png`)} alt="" className="img-responsive" /> : null
                                                }
                                                </div>
                                                <div className="blog-desc">
                                                    <h4>{t.tech_label}</h4>
                                                    <p>{t.tech_value}</p>
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
                                                    {
                                                        ide.ide_image_url ? 
                                                            <img style={{ width: "150px", height: "100px", margin: "0 auto" }} src={require(`../images/ide/${ide.ide_image_url}`)} alt="" className="img-responsive" />
                                                        :
                                                        null
                                                    }
                                                    <h3>{ide.ide_label}</h3>
                                                </div>

                                                <div className="process-end text-center">
                                                    {/* <h3>Typo's</h3> */}
                                                    <p>{ide.ide_value}</p>
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
                                                    {
                                                        os.os_image_url ?
                                                        <img style={{ width: "100px", height: "100px", margin: "0 auto" }} src={require(`../images/technology/${os.os_image_url}`)} alt="" className="img-responsive" />
                                                        :
                                                        null
                                                    }
                                                    <h3>{os.os_label}</h3>
                                                </div>

                                                <div className="process-end text-center">
                                                    <h3>Typo's</h3>
                                                    <p>{os.os_value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                        :
                        <div className="spinner">
                            <Loader
                                type={helpers.LoadRandomSpinnerIcon()}
                                color="#c2d82e"
                                height={100}
                                width={100}    
                            />
                        </div>
                    }
                </section>
            </div>
        );
    }
}

export default Technologies;