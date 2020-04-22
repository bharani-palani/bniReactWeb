import React, { useEffect, useState } from "react";
import Breadcrumbs from "./breadcrumb";
import apiInstance from "../apiServices";
import Loader from "react-loader-spinner";
import helpers from "../helpers";

function Resume() {
  document.title = "Bharani | Resume";
  const [header, setHeader] = useState([]);
  const [careerObj, setCareerObj] = useState({});
  let [careerExp, setCareerExp] = useState("");
  const [workSummary, setWorkSummary] = useState([]);
  const [proHighlights, setProHighLights] = useState([]);
  const [techSkills, setTechSkills] = useState([]);
  const [projectExperience, setProjectExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [extraAct, setExtraAct] = useState([]);
  const [personalInfo, setPersonalInfo] = useState([]);
  const [footer, setFooter] = useState({});

  const [allLoaded, setAllLoaded] = useState(false);
  const [now, setNow] = useState([]);

  useEffect(() => {
    Promise.all([
      getHeader(),
      getCareerObjective(),
      getCareerExpYears(),
      getWorkSummary(),
      getProHighLights(),
      getTechSkills(),
      getProjectExperience(),
      getEducation(),
      getExtrAct(),
      getPersonalInfo(),
      getFooter()
    ]).then(a => {
      setHeader(a[0]);
      setCareerObj(a[1]);
      setCareerExp(a[2]);
      setWorkSummary(a[3]);
      setProHighLights(a[4]);
      setTechSkills(a[5]);
      setProjectExperience(a[6]);
      setEducation(a[7]);
      setExtraAct(a[8]);
      setPersonalInfo(a[9]);
      setFooter(a[10]);
      setAllLoaded(true);
    });
  }, []);

  const getHeader = async () => {
    return await apiInstance
      .get("/resume/getHeader")
      .then(response => {
        return response.data.response[0];
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getCareerObjective = async () => {
    return await apiInstance
      .get("/resume/getCareerObjective")
      .then(response => {
        return response.data.response[0];
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getCareerExpYears = async () => {
    return await apiInstance
      .get("/resume/getCareerExpYears")
      .then(response => {
        return response.data.response;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getWorkSummary = async () => {
    return await apiInstance
      .get("/resume/workSummary")
      .then(response => {
        return response.data.response;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getProHighLights = async () => {
    return await apiInstance
      .get("/resume/proHighLights")
      .then(response => {
        return response.data.response;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getTechSkills = async () => {
    return await apiInstance
      .get("/resume/techSkills")
      .then(response => {
        return response.data.response;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getProjectExperience = async () => {
    return await apiInstance
      .get("/resume/projectExperience")
      .then(response => {
        return response.data.response;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getEducation = async () => {
    return await apiInstance
      .get("/resume/education")
      .then(response => {
        return response.data.response;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getExtrAct = async () => {
    return await apiInstance
      .get("/resume/extraAct")
      .then(response => {
        return response.data.response;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getPersonalInfo = async () => {
    return await apiInstance
      .get("/resume/personalInfo")
      .then(response => {
        return response.data.response;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getFooter = async () => {
    return await apiInstance
      .get("/resume/footer")
      .then(response => {
        setNow(response.data.now);
        return response.data.response[0];
      })
      .catch(error => {
        console.log(error);
      });
  };

  const arrow = () => (
    <i style={{ fontSize: "1rem" }} className={header["config_arrow_font"]} />
  );

  const renderDom = () => {
    const careerObjStr = String(careerObj.career_description).replace("{n}",careerExp);
    return (
      <div className="resumeContainer">
        {header &&
          header["header_name"] &&
          header["header_email"] &&
          header["header_mobile"] &&
          header["header_address"] && (
            <div className="mb-30">
              <div className="equal-grid-2">
                <div className="text-left pb-5">
                  <h3 className="name m-0">
                    <b>{header["header_name"]}</b>
                  </h3>
                  <div>
                    <i className="fa fa-envelope" />
                    &nbsp;{header["header_email"]}
                  </div>
                  <div>
                    <i className="fa fa-phone" />
                    &nbsp;{header["header_mobile"]}
                  </div>
                  <div>
                    <i className="fa fa-globe" />
                    &nbsp;
                    {header["header_web"]}
                  </div>
                </div>
                <div className="text-right m-text-left t-text-left">
                  {String(header["header_address"])
                    .split(",")
                    .map((add, i) => (
                      <div key={i}>
                        {i === 0 && <i className="fa fa-home" />} {add}
                      </div>
                    ))}
                </div>
              </div>
              <div className="borderedDiv thick wallToWall mb-20 mt-10" />
            </div>
          )}
        {careerObjStr && (
          <div className="mb-30">
            <h4 className="topicHeading">Career Objective</h4>
            <div className="wrap">{careerObjStr}</div>
          </div>
        )}
        {workSummary && workSummary.length > 0 && (
          <div className="mb-30">
            <h4 className="topicHeading">Work summary</h4>
            <div className="grid-4">
              {workSummary.map((w, i) => (
                <React.Fragment key={i}>
                  <div>
                    <div className="hidden-xs hidden-sm print-visible">
                      {arrow()}
                    </div>
                  </div>
                  <div>
                    <div>{w.work_company}</div>
                    <small>{w.work_country}</small>
                  </div>
                  <div>
                    {w.work_start_date} -{" "}
                    {i !== 0 ? w.work_end_date : "Till now"}
                  </div>
                  <div>
                    <div className="hidden-lg hidden-md hidden-print borderedDiv" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {proHighlights && proHighlights.length > 0 && (
          <div className="mb-30">
            <h4 className="topicHeading">Profesional Highlights</h4>
            <div className="grid-3 mb-30">
              {proHighlights.map((p, i) => (
                <React.Fragment key={i}>
                  <div>
                    <div className="hidden-xs hidden-sm print-visible">
                      {arrow()}
                    </div>
                  </div>
                  <div className="wrap">{p.pro_text}</div>
                  <div>
                    <div className="hidden-lg hidden-md hidden-print borderedDiv" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {techSkills && techSkills.length > 0 && (
          <div className="mb-30">
            <h4 className="topicHeading">Technical Skills</h4>
            <div className="grid-3">
              {techSkills.map((t, i) => (
                <React.Fragment key={i}>
                  <div>
                    <div className="hidden-xs hidden-sm print-visible">
                      {arrow()}
                    </div>
                  </div>
                  <div className="wrap">{t.tech_skill_label}</div>
                  <div>
                    <div className="hidden-lg hidden-md hidden-print borderedDiv" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {projectExperience && projectExperience.length > 0 && (
          <div className="mb-30">
            <h4 className="topicHeading">Project Experience</h4>
            {projectExperience.map((p, i) => (
              <React.Fragment key={i}>
                <div className="equal-grid-3 borderedDiv pt-10 pb-10 mb-20">
                  <div>
                    <i className="fa fa-university" /> {p.work_company}
                  </div>
                  <div className="text-center t-text-left m-text-left">
                    <i className="fa fa-briefcase" />
                    &nbsp;{p.project_name}
                  </div>
                  <div className="text-right t-text-left m-text-left">
                    <i className="fa fa-clock-o" />
                    &nbsp;{p.working_duration}
                  </div>
                </div>
                <div>
                  <b>{p.project_role}</b>
                </div>
                <p>{p.project_introduction}</p>
                {p.role_label && p.role_label.length > 0 && (
                  <>
                    <div>
                      <b>Roles & Responsibilities</b>
                    </div>
                    <div className="grid-3">
                      {p.role_label.map((r, i) => (
                        <React.Fragment key={i}>
                          <div>
                            <div className="hidden-xs hidden-sm print-visible">
                              {arrow()}
                            </div>
                          </div>
                          <div className="wrap">{r}</div>
                          <div>
                            <div className="hidden-lg hidden-md hidden-print borderedDiv" />
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        {education && education.length > 0 && (
          <div className="mb-30">
            <h4 className="topicHeading">Education</h4>
            <div className="grid-3">
              {education.map((e, i) => (
                <React.Fragment key={i}>
                  <div>
                    <div className="hidden-xs hidden-sm print-visible">
                      {arrow()}
                    </div>
                  </div>
                  <div>
                    {e.edu_graduation_acronym} - {e.edu_graduation_abbreviation}{" "}
                    ({e.edu_graduation_percent}%)
                  </div>
                  <div>
                    <div className="hidden-lg hidden-md hidden-print borderedDiv" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {extraAct && extraAct.length > 0 && (
          <div className="mb-30">
            <h4 className="topicHeading">Extracurricular activities</h4>
            <div className="grid-3">
              {extraAct.map((e, i) => (
                <React.Fragment key={i}>
                  <div>
                    <div className="hidden-xs hidden-sm print-visible">
                      {arrow()}
                    </div>
                  </div>
                  <div className="wrap">{e.activity_name}</div>
                  <div>
                    <div className="hidden-lg hidden-md hidden-print borderedDiv" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {personalInfo && personalInfo.length > 0 && (
          <div className="mb-30">
            <h4 className="topicHeading">Personal information:</h4>
            <div className="equal-grid-3">
              {personalInfo.map((p, i) => (
                <React.Fragment key={i}>
                  <div>{p.info_key}</div>
                  <div className="wrap">{p.info_value}</div>
                  <div>
                    <div className="hidden-lg hidden-md hidden-print mt-5 mb-5 borderedDiv" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {footer && (
          <div className="mb-30">
            <div className="mb-30">{footer["footer_text"]}</div>
            <div className="equal-grid-2 footer-grid">
              <div>
                <b>Place:</b>&nbsp;{footer["footer_place"]}
              </div>
              <div className="text-right pr-5">
                <b>SIGNATURE</b>
              </div>
              <div>
                <b className="pr-7">Date:</b>
                <span>{now}</span>
              </div>
              <div className="text-right">
                {footer["footer_signature_name"]}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="section lb" style={{ minHeight: window.screen.height }}>
      {!allLoaded ? (
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
          <div className="breadcrumbs hidden-print">
            <Breadcrumbs />
          </div>
          <div className="section-title">
            <div
              style={{ backgroundColor: "transparent" }}
              className="process-box hidden-print"
            >
              <div className="process-front text-center">
                <h2 style={{ color: "#aaa" }}>Resume</h2>
                <hr />
                <i className="fi-ecommerce-invoice"></i>
                <p>My skills, experience, projects and more</p>
              </div>
            </div>
          </div>
          {renderDom()}
        </>
      )}
    </section>
  );
}

export default Resume;
