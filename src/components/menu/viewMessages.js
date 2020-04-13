import React, { useState, useEffect } from "react";
import apiInstance from "../../apiServices";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { ToastContainer, toast } from "react-toastify";


const [lat, lng, apiKey] = [
  13.067439,
  80.237617,
  "AIzaSyAHINg0FZK_OCJVCdxQJ1kQwcVUUUBNQ2k"
];

function ViewMessages(props) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const formdata = new FormData();
    formdata.append("TableRows", [
      "comment_id",
      "comment_name",
      "comment_mobile",
      "comment_description",
      "comment_email",
      "comment_ip",
      "comment_time",
      "latitude",
      "longitude"
    ]);
    formdata.append("Table", "public_comments");

    apiInstance
      .post("/getBackend", formdata)
      .then(response => {
        setComments(response.data.response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const initMap = () => {
    return false;
  };

  const commentHtml = (c) => {
    return (
        <div>
            <div><i className="fi-interface-user" />&nbsp;<small>{c.comment_name}</small></div>
            <div><i className="fa fa-comment-o" />&nbsp;<small>{c.comment_description}</small></div>
            <div><i className="fa fa-phone" />&nbsp;<small><a href={`tel:${c.comment_mobile}`}>{c.comment_mobile}</a></small></div>
            <div><i className="fa fa-envelope" />&nbsp;<small><a href={`mailto:${c.comment_email}`}>{c.comment_email}</a></small></div>
            <div><i className="fa fa-clock-o" />&nbsp;<small>{c.comment_time}</small></div>
            <div>
                <i className="fa fa-microchip" />&nbsp;<small>{c.comment_ip}</small>
                <i className="fa fa-trash trash" onClick={() => deleteComment(c)} />
            </div>
        </div>
    )
  }

  const deleteComment = c => {
    let newComments = comments.filter(co => co.comment_id !== c.comment_id)
    setComments(newComments);
  }
  const onMarkerClick = c => {
    toast.error(commentHtml(c));
  };
  const MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap defaultZoom={12} defaultCenter={{ lat, lng }}>
        {comments.map((comment, i) => {
          const index = i + 1;
          return (
            <Marker
              label={index.toString()}
              key={i}
              position={{
                lat: Number(comment.latitude),
                lng: Number(comment.longitude)
              }}
              onClick={() => onMarkerClick(comment)}
            ></Marker>
          );
        })}
      </GoogleMap>
    ))
  );

  return (
    <>
      <ToastContainer className="bniToaster" /> 
      {comments.length > 0 && (
        <MapWithAMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ height: `${window.innerHeight - 75}px` }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
          onMarkerClick={() => initMap()}
        />
      )}
    </>
  );
}

export default ViewMessages;
