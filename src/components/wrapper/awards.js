import React, { useState, useEffect } from "react";
import apiInstance from "../../services/apiServices";
import Loader from "react-loader-spinner";
import helpers from "../../helpers";

function Awards() {
  const [awards, setAwards] = useState([]);
  const [awardsHeading, setAwardsHeading] = useState("");

  useEffect(() => {
    apiInstance
      .get("/awards")
      .then(response => {
        const [awardsHeading, awardsList] = helpers.sageHeaderAndList(
          response.data.response,
          "award_sort"
        );
        setAwards(awardsList);
        setAwardsHeading(awardsHeading);
      })
      .catch(error => console.log(error))
      .finally(() => 1);
  });

  return (
    <section className="section lb" style={{ minHeight: window.screen.height }}>
      {awards.length < 1 ? (
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
                <h2 style={{ color: "#aaa" }}>Awards</h2>
                <hr />
                <i className="fi-tech-shield-6"></i>
                <p>
                  {awardsHeading ? awardsHeading.award_value : null}
                </p>
              </div>
            </div>
            {awards.map((award, i) => (
              <div
                style={{ color: "#333" }}
                key={i}
                className={`${(i + 1) % 3 === 0 ? "row form-group" : null}`}
              >
                <div className="col-md-4">
                  <div className="blog-box">
                    <div className="post-media">
                      <div className="title text-center">
                        <h4>{award.award_label}</h4>
                      </div>
                    </div>
                    <div className="blog-desc">
                      <p>{award.award_value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Awards;
