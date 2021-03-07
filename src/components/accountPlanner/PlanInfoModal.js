import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import apiInstance from "../../services/apiServices";
import helpers from "../../helpers";
import Loader from "react-loader-spinner";

const PlanInfoModal = props => {
  const { monthYearSelected, bankSelected, selectedPlan } = props;
  const [table, setTable] = useState([]);
  const [allLoader, setAllLoader] = useState(true);
  useEffect(() => {
    setAllLoader(true);
    const a = getPlanDetails();
    Promise.all([a]).then(r => {
      const data = r[0];
      setTable(data);
      setAllLoader(false);
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
  const loaderComp = () => {
    return (
      <div className="relativeSpinner">
        <Loader
          type={helpers.LoadRandomSpinnerIcon()}
          color={helpers.fluorescentColor}
          height={100}
          width={100}
        />
      </div>
    );
  };
  const doDifference = (plan, actual) => {
    let diff = Number(plan) - Number(actual);
    return diff;
  };
  return (
    <Modal {...props} style={{ zIndex: 9999 }}>
      <Modal.Header closeButton>
        <Modal.Title>
          {monthYearSelected} {selectedPlan.label}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive p-10">
          {!allLoader ? (
            <table className="table table-condensed">
                <tr>
                  <th>#</th>
                  <th>Expenditure</th>
                  <th>Committed</th>
                  <th>Planned</th>
                  <th>Difference</th>
                </tr>
                {table.length > 0 ? table.map((t, i) => {
                  const diff = doDifference(
                    t.inc_exp_plan_amount,
                    t.inc_exp_amount
                  );
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{t.inc_exp_name}</td>
                      <td>{t.inc_exp_amount}</td>
                      <td>{t.inc_exp_plan_amount}</td>
                      <td
                        className={`text-${diff >= 0 ? "success" : "danger"}`}
                      >
                        {diff >= 0
                          ? `+${helpers.indianLacSeperator(diff)}`
                          : `(${helpers.indianLacSeperator(diff)})`}
                      </td>
                    </tr>
                  );
                }) : (
                  <tr>
                    <td className="text-center noRecords" colSpan="5">No records</td>
                  </tr>
                )}
            </table>
          ) : (
            loaderComp()
          )}
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
