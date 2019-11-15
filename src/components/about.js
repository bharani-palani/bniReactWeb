import React from 'react';
import baseUrl from "../environment";
import Loader from 'react-loader-spinner'
import helpers from "../helpers";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: {},
            images: [
                "bniGreyCoat.jpg",
                "coll3.jpeg",
                "bniBlackFull.jpeg"
            ]
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
                    <div className="overlay" style={{ minHeight: window.screen.height }} />
                    {
                        this.state.about.heading && this.state.about.subHeading ?
                        <div className="home-text-wrapper">
                            <div className="home-message col-md-10 col-md-offset-1 col-lg-5 col-lg-offset-3 pt-50">
                                <Carousel 
                                    autoPlay={true}
                                    showArrows={false}
                                    useKeyboardArrows={true}
                                    showStatus={false}
                                    showIndicators={false}
                                    showThumbs={false}
                                    infiniteLoop={true}
                                    stopOnHover={false}
                                    dynamicHeight={true}
                                >
                                {
                                    this.state.images.map((img,i) =>
                                        (img ? <img key={i} className="cImage" src={require(`../images/avatar/${img}`)} alt="" /> : null)
                                    )
                                }
                                </Carousel>
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