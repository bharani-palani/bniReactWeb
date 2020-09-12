import React, { useState, useEffect } from "react";
import apiInstance from "../../services/apiServices";
import Loader from "react-loader-spinner";
import helpers from "../../helpers";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import AppContext from "../../contexts/AppContext";

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: Number(props.userData.latitude), lng: Number(props.userData.longitude) }}>
      <Marker onClick={props.onMarkerClick} position={{ lat: Number(props.userData.latitude), lng: Number(props.userData.longitude) }} />
    </GoogleMap>
  ))
);

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [contactHeading, setContactHeading] = useState([]);
  document.title = "Bharani | Contact";

  useEffect(() => {
    apiInstance
      .get("/contacts")
      .then(response => {
        const [contactHeading, contactList] = helpers.sageHeaderAndList(
          response.data.response,
          "contact_sort"
        );
        setContacts(contactList);
        setContactHeading(contactHeading);
      })
      .catch(error => console.log(error))
      .finally(() => 1);
  }, []);

  const initMap = () => {
    const [address1, address2, city, state, postcode] = [
      "7/4, Corporation School Rd",
      "Lake Area, Nungambakkam",
      "Chennai",
      "Tamil Nadu",
      "600034"
    ];
    const str = `${address1} ${address2} ${city} ${state} ${postcode}`;
    let directionsUrl = "";
    switch (true) {
      case /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase()):
        directionsUrl = `maps:?saddr=Current Location&daddr=${str}`;
        break;
      case /windows phone 7/i.test(navigator.userAgent.toLowerCase()):
        directionsUrl = `maps:${str}`;
        break;
      case /windows phone 8/i.test(navigator.userAgent.toLowerCase()):
        directionsUrl = `bingmaps:?where=${str}`;
        break;
      case /android/i.test(navigator.userAgent.toLowerCase()):
        directionsUrl = `geo:${str}`;
        break;
      case /blackberry/i.test(navigator.userAgent.toLowerCase()):
        directionsUrl = `javascript:blackberry.launch.newMap({'address':{${str}}})`;
        break;
      default:
        directionsUrl = `https://maps.google.com?q=${Number(this.props.userData.latitude)},${Number(this.props.userData.longitude)}`;
    }
    window.open(directionsUrl);
  };
  return (
    <AppContext.Consumer>
      {appcontext => {
        const [userData] = appcontext;
        console.log(userData);
        return (
          <section
            className="section lb"
            style={{ minHeight: window.screen.height }}
          >
            {contacts.length < 1 ? (
              <div className="spinner">
                <Loader
                  type={helpers.LoadRandomSpinnerIcon()}
                  color={helpers.fluorescentColor}
                  height={100}
                  width={100}
                />
              </div>
            ) : (
              <>
                <div className="section-title">
                  <div
                    style={{ backgroundColor: "transparent" }}
                    className="process-box"
                  >
                    <div className="process-front text-center">
                      <h2 style={{ color: "#aaa" }}>Contact</h2>
                      <hr />
                      <i className="fi-creative-telephone"></i>
                      <p>
                        {contactHeading ? contactHeading.contact_value : null}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row container-fluid">
                  <div className="col-lg-12">
                    <p className="contactLabel m-0">
                      Ping me <i className="fa fa-phone" />
                    </p>
                    {contacts.length > 0
                      ? contacts.map((c, i) => (
                          <div key={i}>
                            <div
                              style={{ height: "20px" }}
                              className="col-lg-3 col-md-6 pl-0"
                            >
                              <span className="contactLabel">
                                {c.contact_label}
                              </span>
                            </div>
                            <div className="col-lg-9 col-md-6 pl-0">
                              {c.contact_href ? (
                                <a className="normalLink" href={c.contact_href}>
                                  {c.contact_value}
                                </a>
                              ) : (
                                c.contact_value
                              )}
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                  <div className="col-lg-12 mt-20">
                    <div className="contactLabel">
                      <div>
                        Reach me <i className="fa fa-car" />
                      </div>
                      <div>
                        <small>
                          <i className="fa fa-map-marker" /> Click marker to
                          open in Goolgle Maps
                        </small>
                      </div>
                    </div>
                    {userData && userData.google_map_api_key && (
                      <MapWithAMarker
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${userData.google_map_api_key}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        onMarkerClick={() => initMap()}
                        userData={userData}
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </section>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Contact;
