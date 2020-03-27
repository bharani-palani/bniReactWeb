import React from "react";
import apiInstance from "../apiServices";
import Loader from "react-loader-spinner";
import helpers from "../helpers";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import Breadcrumbs from "./breadcrumb";

const [lat, lng, apiKey] = [13.057368, 80.239783, "AIzaSyAHINg0FZK_OCJVCdxQJ1kQwcVUUUBNQ2k"];

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat, lng }}
    >
      <Marker onClick={props.onMarkerClick} position={{ lat, lng }} />
    </GoogleMap>
  ))
);

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  componentDidMount() {
    const that = this;
    apiInstance
      .get("/contacts")
      .then(response => {
        const [contactHeading, contactList] = helpers.sageHeaderAndList(
          response.data.response,
          "contact_sort"
        );
        that.setState({ contacts: contactList, contactHeading });
      })
      .catch(error => console.log(error))
      .finally(() => 1);
  }
  initMap = () => {
    
     const [address1, address2, city, state, postcode] = ["7/4, Corporation School Rd",
      "Lake Area, Nungambakkam",
      "Chennai",
      "Tamil Nadu",
      "600034"];
    const str = `${address1} ${address2} ${city} ${state} ${postcode}`;
    let directionsUrl = "";
    switch(true) {
            case (/ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase())):
                directionsUrl = `maps:?saddr=Current Location&daddr=${str}`;
                break;
            case (/windows phone 7/i.test(navigator.userAgent.toLowerCase())):
                directionsUrl = `maps:${str}`;
                break;
            case (/windows phone 8/i.test(navigator.userAgent.toLowerCase())):
                directionsUrl = `bingmaps:?where=${str}`;
                break;
            case (/android/i.test(navigator.userAgent.toLowerCase())):
                directionsUrl = `geo:${str}`;
                break;
            case (/blackberry/i.test(navigator.userAgent.toLowerCase())):
                directionsUrl = `javascript:blackberry.launch.newMap({'address':{${str}}})`;
                break;
            default:
                directionsUrl = `https://maps.google.com?q=${lat},${lng}`;
        }
    window.open(directionsUrl);
  }
  render() {
    document.title = "Bharani | Contact";
    return (
        <section
          className="section lb"
          style={{ minHeight: window.screen.height }}
        >
          {this.state.contacts.length < 1 ? (
            <div className="spinner">
              <Loader
                type={helpers.LoadRandomSpinnerIcon()}
                color="#c2d82e"
                height={100}
                width={100}
              />
            </div>
          ) : (
            <>
              <div className="breadcrumbs"><Breadcrumbs /></div>
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
                      {this.state.contactHeading
                        ? this.state.contactHeading.contact_value
                        : null}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row container-fluid">
                <div className="col-lg-5">
                  <p className="contactLabel m-0"><big>Ping me <i className="fa fa-phone" /></big></p>
                  {this.state.contacts.length > 0
                    ? this.state.contacts.map((c, i) => (
                        <div key={i}>
                          <div
                            style={{ height: "20px" }}
                            className="col-lg-4 col-md-6 pl-0"
                          >
                            <span className="contactLabel">
                              {c.contact_label}
                            </span>
                          </div>
                          <div className="col-lg-8 col-md-6">
                            {c.contact_href ? (
                              <a href={c.contact_href}>{c.contact_value}</a>
                            ) : (
                              c.contact_value
                            )}
                          </div>
                        </div>
                      ))
                    : null}
                </div>
                <div className="col-lg-7">
                  <p className="contactLabel"><big>Reach me <i className="fa fa-car" /></big></p>
                  <MapWithAMarker
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onMarkerClick={() => this.initMap()}
                  />
                </div>
              </div>
            </>
          )}
        </section>
    );
  }
}

export default Contact;
