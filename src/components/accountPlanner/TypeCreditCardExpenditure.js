import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { creditCardConfig } from "../configuration/backendTableConfig";
import BackendCore from "../../components/configuration/backend/BackendCore";
import helpers from "../../helpers";

const TypeCreditCardExpenditure = props => {
  const { ccMonthYearSelected, ccBankSelected, ccDetails } = props;
  const [WhereClause, setWhereClause] = useState("");
  const [dateRanges, setDateRanges] = useState({});

  useEffect(() => {
    let [smonth, year] = ccMonthYearSelected.split("-");
    const month = helpers.strToNumMonth[smonth];
    // const calDays = new Date(year, month, 0).getDate();

    let eDate = new Date(
      `${Number(year)}-${Number(month)}-${Number(
        ccDetails.credit_card_end_date
      )}`
    );
    const eDateStr = `${eDate.getFullYear()}-${helpers.leadingZeros(
      eDate.getMonth() + 1
    )}-${helpers.leadingZeros(eDate.getDate())}`;

    var dateOffset = 24 * 60 * 60 * 1000 * 30; // 30 days
    let sDate = eDate.setTime(eDate.getTime() - dateOffset);
    sDate = new Date(sDate);
    sDate = new Date(sDate.setDate(ccDetails.credit_card_start_date));
    const sDateStr = `${sDate.getFullYear()}-${helpers.leadingZeros(
      sDate.getMonth() + 1
    )}-${helpers.leadingZeros(sDate.getDate())}`;

    const wClause = `cc_date between "${sDateStr}" and "${eDateStr}" and cc_for_card = ${ccBankSelected}`;
    setWhereClause(wClause);
    setDateRanges({ sDateStr, eDateStr });
  }, [ccMonthYearSelected, ccBankSelected, ccDetails]);

  let payDate = Number(ccDetails.credit_card_payment_date);
  payDate = payDate < 10 ? `0${payDate}` : payDate;
  payDate = new Date(`${payDate}-${ccMonthYearSelected}`);
  payDate = helpers.addMonths(payDate, 1);
  console.log(payDate);
  let [yyyy, mmm, dd] = [
    payDate.getFullYear(),
    payDate.getMonth() + 1,
    payDate.getDate()
  ];
  mmm = mmm < 10 ? `0${mmm}` : mmm;
  dd = dd < 10 ? `0${dd}` : dd;
  payDate = `${yyyy}-${mmm}-${dd}`;

  return (
    <div className="settings">
      <div className="backendConfigureSection">
        <div className="row mt-10">
          <div className="col-sm-3 text-center">
            For Month: {ccMonthYearSelected}
          </div>
          <div className="col-sm-3 text-center">
            For Card: {ccDetails.credit_card_number}
          </div>
          <div className="col-sm-3 text-center">
            Cycle: {dateRanges.sDateStr} to {dateRanges.eDateStr}
          </div>
          <div className="col-sm-3 text-center">
            PayDate: {payDate}
          </div>
        </div>
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
