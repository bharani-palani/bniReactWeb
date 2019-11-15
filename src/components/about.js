import React from 'react';
import baseUrl from "../environment";
import Loader from 'react-loader-spinner'
import helpers from "../helpers";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: {}
        }
    }
    componentDidMount() {
        const that = this;
        const apiUrl = `${baseUrl()}/`;
        const axios = require('axios');
        axios.get(apiUrl).then(response => {
            that.setState({about: response.data.response});
        })
        .catch(error => console.log(error))
        .finally(() => 1);
    }
    render() {
        document.title = "Bharani | About";
        return (
            <div id="wrapper"> 
                <div className="video-section">
                    <div className="overlay"></div>
                    {
                        this.state.about.heading && this.state.about.subHeading ?
                        <div className="home-text-wrapper">
                            <div className="home-message">
                                <img className="cImage" src={require("../images/avatar/bniGreyCoat.jpg")} alt="" />
                                <p>{this.state.about.heading}</p>
                                <div className="skillset">{this.state.about.subHeading}</div>
                            </div>
                        </div>
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
                </div>
            </div>
        );
    }
}

export default About;