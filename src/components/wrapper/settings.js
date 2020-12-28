import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-bootstrap";
import ResumeBackend from "../configuration/resumeBackend";
import ViewMessages from "../configuration/viewMessages";
import { configArray } from "../configuration/backendTableConfig";
import { Accordion, Card, Button } from "react-bootstrap";
import BackendCore from "../configuration/backend/BackendCore";
import "./settings.scss";

const Settings = props => {
  const [collapse, setCollapse] = useState("");
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
              Configure your web content, read / delete messages & update your
              resume
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid settings">
        <div className="backendConfigureSection">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            transition={false}
            onSelect={k => setKey(k)}
            defaultActiveKey="home"
            className="row mb-20"
          >
            <Tab eventKey="web" title="Web" tabClassName="col-md-4">
              {key === "web" && (
                <Accordion bsPrefix="util" defaultActiveKey="0">
                  {configArray
                    .sort((a, b) => a.label > b.label)
                    .map((t, i) => (
                      <Card key={t.id}>
                        <Card.Header>
                          <Accordion.Toggle
                            onClick={() => setCollapse(t.label)}
                            as={Button}
                            variant="link"
                            eventKey={t.id}
                          >
                            {t.label}
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={t.id}>
                          <Card.Body>
                            {collapse === t.label && (
                              <BackendCore
                                Table={t.Table}
                                TableRows={t.TableRows}
                                rowElements={t.rowElements}
                                getApiUrl="/getBackend"
                                postApiUrl="/postBackend"
                              />
                            )}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    ))}
                </Accordion>
              )}
            </Tab>
            <Tab eventKey="messages" title="Messages" tabClassName="col-md-4">
              {key === "messages" && <ViewMessages />}
            </Tab>
            <Tab eventKey="resume" title="Resume" tabClassName="col-md-4">
              {key === "resume" && <ResumeBackend />}
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
