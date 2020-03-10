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
            images: [
                "bniGreyCoat.jpg",
                "bniBlackFull.jpeg",
                "20190128_200541.jpg",
                "20190309_165844.jpg",
                "20190408_213558.jpg",
                "20190706_164557.jpg",
                "20190714_164140.jpg",
                "20190817_160034.jpg",
                "20191005_140735.jpg",
                "20191005_191358.jpg",
                "20191006_161009.jpg",
                "20191025_152431.jpg",
                "20191026_155625.jpg",
                "20191106_161047.jpg",
                "coll3.jpeg",
                "IMAG0274.jpg",
                "IMAG0571.jpg",
                "IMAG0615.jpg",
                "IMAG0668.jpg",
                "IMAG0716.jpg",
                "IMAG0736.jpg",
                "IMAG0923.jpg",
                "IMAG0950.jpg",
                "IMAG0969.jpg",
                "IMAG1281.jpg",
                "IMAG1352.jpg",
                "IMAG1424.jpg",
                "20160709_145507.jpg",
            ]
        }
    }
    componentDidMount() {
        const that = this;
        const params = new URLSearchParams();
        params.append('param1', 'value1');
        params.append('param2', 'value2');
        apiInstance.get("/", params).then(response => {
            that.setState({about: response.data.response});
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
                    this.state.about && this.state.about.heading && this.state.about.subHeading ?
                    <div className="home-text-wrapper">
                        {/* <div className="home-message col-md-10 col-md-offset-1 col-lg-4 col-lg-offset-4 pt-50"> */}
                        <div className="home-message">
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
                            <div className="nameHeading">
                                <p>{this.state.about.heading}</p>
                                <div className="skillset">{this.state.about.subHeading}</div>
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