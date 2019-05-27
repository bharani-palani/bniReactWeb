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
                    description: "A JavaScript library designed to simplify HTML DOM tree traversal and manipulation, featuring event handling, CSS animation, and Ajax"
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
                    description: "Annotaions, REST service, configuring pom.xml for dependency injection, connecting MySql with varied Microservices"
                },
                {
                    name: "Google Cloud",
                    sort: 11,
                    imageRoot: "google-cloud-logo.png",
                    description: "Deploy application on clients instance. Cloud engine, network services, disable/shutdown instances etc.."
                },
            ]
        };
    }
    render() {
        return (
            <div id="wrapper">
                <section className="section lb">
                    <div className="container">
                        <div className="section-title text-center">
                            <h3>Technology</h3>
                            <p>Not the actual coding and implementation, but the types of technology and their tradeoffs like</p>
                        </div>
                        {
                            this.state.techs.sort((a, b) => (a.sort > b.sort) ? 1 : (a.sort < b.sort) ? -1 : 0).map((tech, i) => (
                            <div key={i} className={`text-center ${(i+1)%3 === 0 ? "row form-group" : null}`}>
                                <div className="col-lg-4 col-md-12">
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
                    </div>
                </section>
            </div>
        );
    }
}

export default Technologies;