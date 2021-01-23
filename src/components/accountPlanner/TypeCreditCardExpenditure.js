import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { creditCardConfig } from "../configuration/backendTableConfig";
import BackendCore from "../../components/configuration/backend/BackendCore";
import helpers from "../../helpers";

const TypeCreditCardExpenditure = props => {
  const { ccMonthYearSelected, ccBankSelected } = props;
  const [WhereClause, setWhereClause] = useState("");
  useEffect(() => {
    let [smonth, year] = ccMonthYearSelected.split("-");
    const month = helpers.strToNumMonth[smonth];
    const calDays = new Date(year, month, 0).getDate();
    const wClause = `cc_date between "${year}-${month}-01" and "${year}-${month}-${calDays}" and cc_for_card = ${ccBankSelected}`;
    setWhereClause(wClause);
  }, [ccMonthYearSelected, ccBankSelected]);

  return (
    <div className="settings">
      {ccMonthYearSelected &&
        WhereClause &&
        creditCardConfig
        .sort((a, b) => a.id > b.id)
        .map((t, i) => (
          <BackendCore
            key={i}
            Table={t.Table}
            TableRows={t.TableRows}
            WhereClause={WhereClause}
            rowElements={t.rowElements}
            showTotal={t.showTotal}
            rowKeyUp={t.rowKeyUp}
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