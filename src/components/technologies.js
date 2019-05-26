import React from 'react';

class Technologies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techs: [
                {
                    name: "Angular",
                    imageRoot: "angular.png",
                    description: "Angular is a platform and framework for building client applications in HTML and TypeScript"
                },
                {
                    name: "React",
                    imageRoot: "react.png",
                    description: "React is a JavaScript library for building user interfaces."
                }
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
                            <p>Not the actual coding and implementation, but the types of technology and the tradeoffs like</p>
                        </div>
                        <div className="row text-center">
                            {
                                this.state.techs.map((tech, i) => (
                                    <div key={i} className="col-lg-4 col-md-12">
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
                                ))
                            }
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}

export default Technologies;