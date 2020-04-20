import React, { useEffect, useState } from "react";
import Breadcrumbs from "./breadcrumb";
import apiInstance from "../apiServices";
import Loader from "react-loader-spinner";
import helpers from "../helpers";

function Resume() {
  document.title = "Bharani | Resume";
  const [header, setHeader] = useState([]);
  const [careerObj, setCareerObj] = useState({});
  let [careerExp, setCareerExp] = useState([]);
  const [workSummary, setWorkSummary] = useState([]);
  const [proHighlights, setProHighLights] = useState([]);
  const [techSkills, setTechSkills] = useState([]);
  const [projectExperience, setProjectExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [extraAct, setExtraAct] = useState([]);
  const [personalInfo, setPersonalInfo] = useState([]);
  const [footer, setFooter] = useState([]);

  const [allLoaded, setAllLoaded] = useState(false);
  const now = new Date();

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
        return response.data.response;
      })
      .catch(error => {
        console.log(error);
      });
  };
  const getCurrentDate = (separator = "") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  };
  const renderDom = () => {
    let [$years, $months, expString] = [0, 0, ""];
    if (Number(careerExp) - Math.floor(careerExp) !== 0) {
      [$years, $months] = String(careerExp).split(".");
      $months = Math.floor(Number(`0.${$months}`) * 12);
      expString = `${$years} Years & ${$months} months`;
    } else {
      [$years, $months] = [careerExp, 0];
      expString = `${$years} Years`;
    }

    const careerObjStr = String(careerObj.career_description).replace(
      "{n}",
      expString
    );
    return (
      <div className="resumeContainer">
        {header &&
          header["header_name"] &&
          header["header_email"] &&
          header["header_mobile"] &&
          header["header_address"] && (
            <div className="mb-30">
              <div className="equal-grid-2">
                <div className="text-left">
                  <div className="name">{header["header_name"]}</div>
                  <div>
                    <i className="fa fa-envelope" />
                    &nbsp;{header["header_email"]}
                  </div>
                  <div>
                    <i className="fa fa-phone" />
                    &nbsp;{header["header_mobile"]}
                  </div>
                </div>
                <div className="text-right">
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
          <>
            <h4 className="topicHeading">Career Objective</h4>
            <div>{careerObjStr}</div>
          </>
        )}
        <div className="mb-30" />
        {workSummary && workSummary.length > 0 && (
          <>
            <h4 className="topicHeading">Work summary</h4>
            <div className="grid-3 mb-30">
              {workSummary.map((w, i) => (
                <React.Fragment key={i}>
                  <div>
                    <i className="fa fa-hand-o-right" />
                  </div>
                  <div>
                    <div>{w.work_company}</div>
                    <small>{w.work_country}</small>
                  </div>
                  <div>
                    {w.work_start_date} -{" "}
                    {i !== 0 ? w.work_end_date : "Till now"}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </>
        )}
        {proHighlights && proHighlights.length > 0 && (
          <>
            <h4 className="topicHeading">Profesional Highlights</h4>
            <div className="grid-2 mb-30">
              {proHighlights.map((p, i) => (
                <React.Fragment key={i}>
                  <div>
                    <i className="fa fa-hand-o-right" />
                  </div>
                  <div>{p.pro_text}</div>
                </React.Fragment>
              ))}
            </div>
          </>
        )}
        {techSkills && techSkills.length > 0 && (
          <>
            <h4 className="topicHeading">Technical Skills</h4>
            <div className="grid-2 mb-30">
              {techSkills.map((t, i) => (
                <React.Fragment key={i}>
                  <div>
                    <i className="fa fa-hand-o-right" />
                  </div>
                  <div>{t.tech_skill_label}</div>
                </React.Fragment>
              ))}
            </div>
          </>
        )}
        {projectExperience && projectExperience.length > 0 && (
          <div className="mb-30">
            <h4 className="topicHeading">Project Experience</h4>
            {projectExperience.map((p, i) => (
              <React.Fragment key={i}>
                <div className="equal-grid-3 borderedDiv pt-10 pb-10 mb-20">
                  <div>
                    <i className="fa fa-building" />
                    {' '}{p.work_company.split(" ").map(s => s[0].toUpperCase()+s.slice(1).toLowerCase()).join(" ")}
                  </div>
                  <div className="text-center">
                    <i className="fa fa-briefcase" />
                    &nbsp;{p.project_name}
                  </div>
                  <div className="text-right">
                    <i className="fa fa-calendar" />
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
                    <div className="grid-2">
                      {p.role_label.map((r, i) => (
                        <React.Fragment key={i}>
                          <div>
                            <i className="fa fa-hand-o-right" />
                          </div>
                          <div>{r}</div>
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
            <div className="grid-2">
              {education.map((e, i) => (
                <React.Fragment key={i}>
                  <div>
                    <i className="fa fa-hand-o-right" />
                  </div>
                  <div>
                    {e.edu_graduation_acronym} - {e.edu_graduation_abbreviation}{" "}
                    ({e.edu_graduation_percent}%)
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {extraAct && extraAct.length > 0 && (
          <div className="mb-30">
            <h4 className="topicHeading">Extracurricular activities</h4>
            <div className="grid-2">
              {extraAct.map((e, i) => (
                <React.Fragment key={i}>
                  <div>
                    <i className="fa fa-hand-o-right" />
                  </div>
                  <div>{e.activity_name}</div>
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
                  <div>{p.info_value}</div>
                  <div />
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {footer && footer.length > 0 && (
          <div className="">
            <p>{footer[0]["footer_text"]}</p>
            <div className="equal-grid-2">
              <div><b>Place:</b>&nbsp;{footer[0]["footer_place"]}</div>
              <div className="text-right"><b>SIGNATURE</b></div>
              <div><b>Date:</b>&nbsp;{getCurrentDate("-")}</div>
              <div className="text-right">
                {footer[0]["footer_signature_name"]}
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
          <div className="breadcrumbs">
            <Breadcrumbs />
          </div>
          <div className="section-title">
            <div
              style={{ backgroundColor: "transparent" }}
              className="process-box"
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
