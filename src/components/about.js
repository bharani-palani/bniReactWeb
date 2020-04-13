import React, { useContext, useState, useEffect } from "react";
import apiInstance from "../apiServices";
import Loader from "react-loader-spinner";
import helpers from "../helpers";
import Gallery from "react-grid-gallery";
import {baseUrl} from "../environment";
import AppContext from "../AppContext";

function About() {
  const [about, setAbout] = useContext(AppContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    document.title = "Bharani | About";
    getAvatarImages();
    setAbout(about);
  });

  const getAvatarImages = () => {
    apiInstance.get("/getImages").then(response => {
      const images = response.data.response.map((r, i) => {
        return {
          src: `${baseUrl()}/image/actualAvatar/avatar/${r.image_url}`,
          thumbnail: `${baseUrl()}/image/actualAvatar/avatar/${r.image_url}`,
          thumbnailWidth: 250,
          thumbnailHeight: 200,
          isSelected: false,
          caption: r.image_url
        };
      });
      setImages(images);
    });
  };
  return (
    <div className="video-section">
      <div className="overlay" />
      {about &&
      about.display_name &&
      about.profile_name &&
      images &&
      images.length > 0 ? (
        <div className="home-text-wrapper">
          <div className="home-message">
            <Gallery
              images={images}
              enableImageSelection={false}
              margin={0}
              rowHeight={250}
            />
            <div className="nameHeading">
              <p>{about.display_name}</p>
              <div className="skillset">{about.profile_name}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner">
          <Loader
            type={helpers.LoadRandomSpinnerIcon()}
            color="#c2d82e"
            height={100}
            width={100}
          />
        </div>
      )}
    </div>
  );
}

export default About;
