import React, { useState, useEffect } from "react";

function AboutBackend(props) {
  const Table = "login";
  const TableRows = [
    "display_name",
    "profile_name",
    "user_mail",
    "user_mobile"
  ];
  return (
    <div className="container-fluid backendConfigureSection">
      <h5 className="heading">Table: {Table}</h5>
      <div className={`grid-${TableRows.length+1}`}>
        <div>Check</div>
        {TableRows.map(t => (
          <div>{t}</div>
        ))}
      </div>
    </div>
  );
}

export default AboutBackend;
