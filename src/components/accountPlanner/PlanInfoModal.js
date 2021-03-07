import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import apiInstance from "../../services/apiServices";

const PlanInfoModal = props => {
  const { monthYearSelected, bankSelected, selectedPlan } = props;
  const [table, setTable] = useState([]);
  useEffect(() => {
    const a = getPlanDetails();
    Promise.all([a]).then(r => {
      const data = r[0];
      setTable(data);
    });
  }, [monthYearSelected, bankSelected, selectedPlan]);

  const getPlanDetails = () => {
    const formdata = new FormData();
    formdata.append("startDate", selectedPlan.startDate);
    formdata.append("endDate", selectedPlan.endDate);
    formdata.append("bankSelected", bankSelected);
    formdata.append("criteria", selectedPlan.criteria);
    return apiInstance
      .post("/account_planner/getPlanDetails", formdata)
      .then(res => res.data.response)
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Modal {...props} style={{ zIndex: 9999 }}>
      <Modal.Header closeButton>
        <Modal.Title>{monthYearSelected}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive">
          <table className="table table-condensed">
            <thead>
              <tr>
                <th>#</th>
                <th>Expenditure</th>
                <th>Committed</th>
                <th>Planned</th>
                <th>Graph</th>
              </tr>
            </thead>
            <tbody>
              {table && table.map((t, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{t.inc_exp_name}</td>
                  <td>{t.inc_exp_amount}</td>
                  <td>{t.inc_exp_plan_amount}</td>
                  <td>G</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

PlanInfoModal.propTypes = {
  property: PropTypes.string
};
PlanInfoModal.defaultProps = {
  property: "String name"
};

export default PlanInfoModal;
