import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div id="wrapper"> 
                <video className='videoTag' autoPlay loop muted>
                    <source src={require("../videos/video.mp4")} type='video/mp4' />
                </video>
                <div id="home" className="video-section js-height-full">
                    <div className="overlay"></div>
                    <div className="home-text-wrapper relative container">
                        <div className="home-message">
                            <img src={require("../images/biglogo.png")} alt="" />
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