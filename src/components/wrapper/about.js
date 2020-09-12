import React, { useContext, useState } from "react";
import Loader from "react-loader-spinner";
import helpers from "../../helpers";
import {baseUrl} from "../../environment";
import AppContext from "../../contexts/AppContext";

function About() {
  const [appData] = useContext(AppContext);
  document.title = `${appData.display_name} | About`;
  const [height, setheight] = useState(window.innerHeight);
  const [width, setWidth] = useState('100%');

  window.addEventListener('resize', () => {
    setheight(window.innerHeight);
    setWidth('100%');
  });
  return (
    <div className="video-section">
      <div className="overlay" />
      {appData &&
      appData.display_name &&
      appData.profile_name ? (
        <div className="home-text-wrapper">
          <div className="home-message">
            <div className="visible-lg">
              <img style={{height, width}} src={`${baseUrl()}/image/actualAvatar/collage/desktop.jpg`} className="img-responsive" alt="desktop" />
            </div>
            <div className="visible-md">
              <img style={{height, width}} src={`${baseUrl()}/image/actualAvatar/collage/tablet.jpg`} className="img-responsive" alt="tablet" />
            </div>
            <div className="visible-sm">
              <img style={{height, width}} src={`${baseUrl()}/image/actualAvatar/collage/tablet.jpg`} className="img-responsive" alt="tablet" />
            </div>
            <div className="visible-xs mt-60">
              <img style={{height, width}} src={`${baseUrl()}/image/actualAvatar/avatar/bniGreyCoat.jpg`} className="img-responsive" alt="mobile" />
            </div>
            <div className="nameHeading">
              <p>{appData.display_name}</p>
              <div className="skillset">{appData.profile_name}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner">
          <Loader
            type={helpers.LoadRandomSpinnerIcon()}
            color={helpers.fluorescentColor}
            height={100}
            width={100}
          />
        </div>
      )}
    </div>
  );
}

export default About;
