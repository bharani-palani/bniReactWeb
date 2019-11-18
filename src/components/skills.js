import React from 'react';
import "../../node_modules/flat-icons/ecommerce.css";
import "../../node_modules/flat-icons/interface.css";
import "../../node_modules/flat-icons/technology.css";
import "../../node_modules/flat-icons/creative.css";

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                {
                    name: "Browser Developer tools",
                    sort: 1,
                    imageRoot: "webdevtools.jpg",
                    description: "Edit pages on-the-fly, Inspect Elements, inline style edit, test JS code on console, layout view on various devices, breakpoint check add HTML attributes etc.."
                },
                {
                    name: "Testing and Debugging",
                    sort: 1,
                    imageRoot: "testDebug.jpg",
                    description: "Process of finding bugs or errors in a software product that is done manually by tester or can be automated. Debugging is a done by fixing the bugs found in testing phase."
                },
                {
                    name: "Responsive Design",
                    sort: 1,
                    imageRoot: "responsiveWebDesign.jpg",
                    description: "RWD approach maintained web page that “responds to” or resizes itself depending on the type of device, that could be an oversized desktop, laptop or devices like smartphones and tablets."
                },
                {
                    name: "Command Line",
                    sort: 1,
                    imageRoot: "cli.png",
                    description: "A command-line interface or command language interpreter (CLI) on MAC and Windows in creating *.bat and *.sh command files to send commands to build apps on remote / local machines."
                },
                {
                    name: "Soft Skills",
                    sort: 1,
                    imageRoot: "softSkills.png",
                    description: "Communicate with clients to grasp ideas, prepare verbal and vocal communication to work with a team. Adhered best tools to visualize, stat and draw modals on functionality do abouts."
                },
                {
                    name: "Problem Solving Skills",
                    sort: 1,
                    imageRoot: "problemSolving.jpg",
                    description: "On an artistic mind, never missed a chance to study the basics of front end development and been passionate on problem-solving skill emphasizing best product on clients demand"
                },
                {
                    name: "JS Framework Adaptability",
                    sort: 1,
                    imageRoot: "jsFramework.png",
                    description: "Faster understanding of frameworks like React, Angular, VUE js etc.. and their features like interpolation, two way data binding, dependency injection, some new ECMA 6 syntax, animations, state, props, redux etc.."
                },
                {
                    name: "CSS Preprocessing",
                    sort: 1,
                    imageRoot: "cssPreprocessor.jpg",
                    description: "Pre-processors extend CSS with variables, operators, interpolations, functions, mixins and many more other usable assets. SASS, LESS and Stylus are the well known ones"
                },
            ]
        };
        document.title = "Bharani | Skills"
    }
    render() {
        return (
            <section className="section lb">
                <div className="section-title">
                    <div style={{ backgroundColor: "transparent" }} className="process-box">
                        <div className="process-front text-center">
                            <h2 style={{ color: "#aaa" }}>Skills</h2>
                            <hr />
                            <i className="fi-tech-gamepad-1"></i>
                            <p>Some acquired skills during development and bottle necks</p>
                        </div>
                    </div>
                </div>
                <div style={{ color: "#333" }} className="row container">
                {
                    this.state.skills.sort((a, b) => (a.sort > b.sort) ? 1 : (a.sort < b.sort) ? -1 : 0).map((skills, i) => (
                        <div key={i} className="blog-box col-lg-12 col-md-12 form-group">
                            <div className="post-media col-lg-4 col-md-6">
                                <img src={require(`../images/skills/${skills.imageRoot}`)} alt="" className="img-responsive lefty" />
                            </div>
                            <div className="blog-desc col-lg-8 col-md-6">
                                <h4 className="text-center">{skills.name}</h4>
                                <p>{skills.description}</p>
                            </div>                                    
                        </div>
                    ))
                }
                </div>
            </section>
        );
    }
}

export default Skills;
