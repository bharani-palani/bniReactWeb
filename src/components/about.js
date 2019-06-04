import React from 'react';

class About extends React.Component {
    render() {
        document.title = "Bharani | About";
        return (
            <div id="wrapper"> 
                <div className="video-section">
                    <div className="overlay"></div>
                    <div className="home-text-wrapper">
                        <div className="home-message">
                            <img className="cImage" src={require("../images/avatar/coll3.jpeg")} alt="" />
                            <p>Bharani Palani</p>
                            <div className="skillset">Full Stack Devops</div>
                            {/* <p>Hi, Thats my name ...</p> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;