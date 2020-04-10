import React from 'react';
import apiInstance from "../apiServices";
import Loader from 'react-loader-spinner'
import helpers from "../helpers";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Gallery from 'react-grid-gallery'; 

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
        apiInstance.get("/").then(response => {
            that.setState({
                about: response.data.response[0]
            },() => {
                that.getAvatarImages()
            });
        })
        .catch(error => console.log(error))
        .finally(() => 1);
    }
    getAvatarImages = () => {
        const that = this;
        apiInstance.get("/getImages").then(response => {
            const images = response.data.response.map((r,i) => {
                return {
                    src: `http://localhost/bni-react-web/services/image/actualAvatar/avatar/${r.image_url}`,
                    thumbnail: `http://localhost/bni-react-web/services/image/actualAvatar/avatar/${r.image_url}`,
                    thumbnailWidth: 250,
                    thumbnailHeight: 200,
                    isSelected: false,
                    caption: r.image_url
                }
            });
            that.setState({images});
        })
    }
    render() {
        const {about, images} = this.state;
        document.title = "Bharani | About";
        return (
            <div className="video-section">
                <div className="overlay" />
                {
                    about && about.display_name && about.profile_name && images.length > 0 ?
                    <div className="home-text-wrapper">
                        <div className="home-message">
                            {
                                images && images.length > 0 &&
                                <Gallery 
                                    images={images}
                                    enableImageSelection={false}
                                    margin={0}
                                    rowHeight={250}
                                />
                            }
                            <div className="nameHeading">
                                <p>{about.display_name}</p>
                                <div className="skillset">{about.profile_name}</div>
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