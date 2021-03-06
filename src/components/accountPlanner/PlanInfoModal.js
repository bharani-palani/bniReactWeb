import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import apiInstance from "../../services/apiServices";

const PlanInfoModal = props => {
  const {monthYearSelected, bankSelected, selectedPlan} = props;
  useEffect(() => {
    const a = getPlanDetails();
    Promise.all([a]).then(r => {
      const data = r[0];
      console.log(data)
    });
  },[monthYearSelected, bankSelected, selectedPlan])

  const getPlanDetails = () => {
    const formdata = new FormData();
    formdata.append("startDate", selectedPlan.startDate);
    formdata.append("endDate", selectedPlan.endDate);
    formdata.append("bankSelected", bankSelected);
    formdata.append("criteria", selectedPlan.criteria);
    return apiInstance
      .post("/account_planner/get_plan_details", formdata)
      .then(res => res.data.response)
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Modal {...props} style={{ zIndex: 9999 }}>
      <Modal.Header closeButton>
        <Modal.Title>{JSON.stringify(selectedPlan)} / {monthYearSelected}, {bankSelected}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="equal-grid-5">
          <div>#</div>
          <div>Expenditure</div>
          <div>Committed</div>
          <div>Planned</div>
          <div>Graph</div>
          {[1, 2, 3].map(m => (
            <>
              <div>{m}</div>
              <div>{Math.random()}</div>
              <div>{Math.random()}</div>
              <div>{Math.random()}</div>
              <div>__</div>
            </>
          ))}
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
