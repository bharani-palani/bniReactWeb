import React, { useState } from "react";
import PropTypes from "prop-types";
// import Loader from "react-loader-spinner";
// import helpers from "../../helpers";
import Donut from "../charts/donut";
import "./AccountPlanner.scss";

const AccountPlanner = props => {
  // const {id, name} = props;
  const [loaderState, setLoaderState] = useState(false);
  const style = {};
  const data = [
    { label: "Mobile bill", value: 120 },
    { label: "Savings", value: 1220 },
    { label: "Car diesel", value: 110 },
    { label: "Prema salary", value: 210 },
    { label: "HDFC Credit card", value: 310 },
    { label: "Medical", value: 120 },
    { label: "Car cleaner", value: 1320 },
    { label: "Online Shopping", value: 110 },
    { label: "Home snacks", value: 1420 },
    { label: "Bike petrol", value: 310 } // isEmpty:true
  ];

  return (
    <section className="section lb" style={{ minHeight: window.screen.height }}>
      <div className="section-title">
        <div className="process-box">
          <div className="process-front text-center">
            <h2 style={{ color: "#aaa" }}>Account planner</h2>
            <hr />
            <i className="fi-ecommerce-dollar-symbol-4"></i>
            <p>
              Plan my Salary credits to expenses with analytical or
              visualization status
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="accountPlanner">
            <div className="row">
              <div className="text-center col-xs-11 pr-0 pl-0">Compare with last months</div>
              <div className="col-xs-1 pr-0 pl-0 text-right"><i className={`fa fa-circle-o-notch ${loaderState ? "fa-spin text-danger" : "text-success"} fa-2x fa-fw`} /></div>
            </div>
            <div className="flex bigWidth">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
              ].map(n => (
                <div className="chartWrapper" onClick={() => setLoaderState(!loaderState)} >
                  <h4 className="text-center">{n}</h4>
                  <Donut data={data} />
                </div>
              ))}
            </div>
            <div className="row" style={style}>
                <div className="table-responsive col-md-4 b-0">
                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Description</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array(5).fill(5).map(u => {
                        return (
                          <tr>
                            <td>#</td>
                            <td>Test</td>
                            <td>120</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              <div className="col-md-4">
                Type this month expenditure (clone feature), with this month
                history in the top (Inline edit, multi checkbox with delete).
              </div>
              <div className="col-md-4">Category Table</div>
            </div>
            <div className="grid-1" style={style}>
              <ol>
                <li>
                  Detailled Tabular Report with search feature, export as csv,
                  share
                </li>
                <li>Cron alert on email</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AccountPlanner.propTypes = {
  property: PropTypes.string
};
AccountPlanner.defaultProps = {
  property: "String name"
};

export default AccountPlanner;
