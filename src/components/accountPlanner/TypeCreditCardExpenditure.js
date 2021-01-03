import React from "react";
import PropTypes from "prop-types";
import { creditCardConfig } from "../configuration/backendTableConfig";
import BackendCore from "../../components/configuration/backend/BackendCore";

const TypeCreditCardExpenditure = props => {
  //   const { id, name } = props;
  return (
    <div className="settings">
      {creditCardConfig
        .sort((a, b) => a.id > b.id)
        .map((t, i) => (
          <BackendCore
            key={i}
            Table={t.Table}
            TableRows={t.TableRows}
            rowElements={t.rowElements}
            showTotal={t.showTotal}
            getApiUrl="/account_planner/getAccountPlanner"
            postApiUrl="/account_planner/postAccountPlanner"
          />
        ))}
    </div>
  );
};

TypeCreditCardExpenditure.propTypes = {
  property: PropTypes.string
};
TypeCreditCardExpenditure.defaultProps = {
  property: "String name"
};

export default TypeCreditCardExpenditure;