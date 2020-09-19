import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-bootstrap";
import ResumeBackend from "../configuration/resumeBackend";
import ViewMessages from "../configuration/viewMessages";
import "./settings.scss";

const Settings = props => {
  const { id, name } = props;
  const [key, setKey] = useState("web");
  return (
    <section
      className="section lb"
      style={{
        minHeight: window.screen.height
      }}
    >
      <div className="section-title">
        <div className="process-box">
          <div className="process-front text-center">
            <h2 style={{ color: "#aaa" }}>Settings</h2>
            <hr />
            <i className="fi-tech-settings-1"></i>
            <p className="container-fluid">
              Configure your web content, read / delete messages & update your resume
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="settings">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            transition={false}
            onSelect={k => setKey(k)}
            defaultActiveKey="home"
            className="row"
          >
            <Tab eventKey="web" title="Web" tabClassName="col-sm-4">
                Web
            </Tab>
            <Tab eventKey="messages" title="Messages" tabClassName="col-sm-4">
                <ViewMessages />
            </Tab>
            <Tab eventKey="resume" title="Resume" tabClassName="col-sm-4">
                <ResumeBackend lastLogin={"lastLogin"} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

Settings.propTypes = {
  property: PropTypes.string
};
Settings.defaultProps = {
  property: "String name"
};

export default Settings;
