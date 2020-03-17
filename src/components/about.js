import React from 'react';
import apiInstance from "../apiServices";
import Loader from 'react-loader-spinner'
import helpers from "../helpers";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: {},
            images: []
        }
    }
    componentDidMount() {
        const that = this;
        const params = new URLSearchParams();
        params.append('param1', 'value1');
        params.append('param2', 'value2');
        apiInstance.get("/", params).then(response => {
            that.setState({
                about: response.data.response[0],
                images: response.data.images
            });
        })
        .catch(error => console.log(error))
        .finally(() => 1);
    }
    render() {
        document.title = "Bharani | About";
        return (
            <div className="video-section">
                <div className="overlay" />
                {
                    this.state.about && this.state.about.display_name && this.state.about.profile_name ?
                    <div className="home-text-wrapper">
                        <div className="home-message">
                            {
                                this.state.images && this.state.images.length > 0 &&
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
                                    this.state.images.map((img,i) => {
                                        const image = require("../images/avatar/"+img.image_url);
                                        return img ? <img key={img.image_id} className="cImage" src={image} alt={`Avatar ordered ${img.image_order}`} /> : null;
                                    })                                        
                                }
                                </Carousel>
                            }
                            <div className="nameHeading">
                                <p>{this.state.about.display_name}</p>
                                <div className="skillset">{this.state.about.profile_name}</div>
                            </div>
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
        );
    }
}

export default About;