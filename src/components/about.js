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
  const [height, setheight] = useState(window.innerHeight);
  const [width, setWidth] = useState('100%');

  useEffect(() => {
    document.title = "Bharani | About";
    // setAbout(about);
  });

  window.addEventListener('resize', () => {
    setheight(window.innerHeight);
    setWidth('100%');
  });
  return (
    <div className="video-section">
      <div className="overlay" />
      {about &&
      about.display_name &&
      about.profile_name ? (
        <div className="home-text-wrapper">
          <div className="home-message">
            <div className="visible-lg">
              <img style={{height, width}} src={`${baseUrl()}/image/actualAvatar/collage/desktop.png`} className="img-responsive" alt="desktop" />
            </div>
            <div className="visible-md">
              <img style={{height, width}} src={`${baseUrl()}/image/actualAvatar/collage/tablet.png`} className="img-responsive" alt="tablet" />
            </div>
            <div className="visible-sm">
              <img style={{height, width}} src={`${baseUrl()}/image/actualAvatar/collage/tablet.png`} className="img-responsive" alt="tablet" />
            </div>
            <div className="visible-xs mt-60">
              <img style={{height, width}} src={`${baseUrl()}/image/actualAvatar/avatar/bniGreyCoat.jpg`} className="img-responsive" alt="mobile" />
            </div>
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
