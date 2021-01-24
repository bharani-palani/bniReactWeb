import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DonutChart from "react-donut-chart";
import helpers from "../../helpers";
// https://www.npmjs.com/package/react-donut-chart

const CreditCardChart = props => {
  let { ccChartData, onCcMonthYearSelected } = props;
  const [data, setData] = useState([]);
  const [ccMonthYearSelected, setMonthYearSelected] = useState("");
  const [noRecords, setNoRecords] = useState(false);

  useEffect(() => {
    let monthArray = ccChartData.map(d => String(d.dated));
    monthArray = [...new Set(monthArray)];
    const data = monthArray.map(m => {
      let isThere = ccChartData.filter(cd => String(cd.dated) === String(m));
      isThere = isThere.map(({ ob, paid, purchases, taxesInterest, balance, dated }) => (
        [
          {month: dated, label: "Opening balance", value: Number(ob), isEmpty: Number(ob) === 0 },
          {month: dated, label: "Paid", value: Number(paid), isEmpty: Number(paid) === 0},
          {month: dated, label: "Purchases", value: Number(purchases), isEmpty: Number(purchases) === 0},
          {month: dated, label: "Taxes & Interest", value: Number(taxesInterest), isEmpty: Number(taxesInterest) === 0},
          {month: dated, label: "Payable", value: Number(balance), isEmpty: Number(balance) === 0},
        ]
      ));
      const obj = {
        month: m,
        cData: isThere[0]
      };
      return obj;
    });

    setData(data);
    if (data.length > 0) {
      setMonthYearSelected(data[0].month);
      onCcMonthYearSelected(data[0].month);
    } else {
      setNoRecords(true)
    }
  }, [ccChartData]);

  // Interface
  // {dated: "Dec-2020", total: "0.00", category: "Bike petrol"}
  // cData = { label: "Mobile bill", value: 120 },

  const genId = i => `chrat-${i}`;
  const colors = helpers.donutChartColors;
  return (
    <>
      {data && data.length > 0 ? data.map((d, i) => (
        <div className="chartWrapper" key={genId(i)}>
          <div className="text-center pt-10 pb-10">
            <button
              className={`btn btn-sm btn-capsule ${
                String(ccMonthYearSelected) === String(d.month) ? "active" : ""
              }`}
              onClick={() => {
                setMonthYearSelected(d.month);
                onCcMonthYearSelected(d.month);
              }}
            >
              {d.month}
            </button>
          </div>
          <DonutChart
            strokeColor={`#000`}
            innerRadius={0.7}
            outerRadius={0.9}
            clickToggle={true}
            colors={colors}
            height={220}
            width={220}
            legend={false}
            data={d.cData}
            formatValues={values => helpers.indianLacSeperator(values)}
          />
        </div>
      )) : (<div className="noRecords block mt-10">No Records Generated</div>)}
    </>
  );
};

CreditCardChart.propTypes = {
  property: PropTypes.string
};
CreditCardChart.defaultProps = {
  property: "String name"
};

export default CreditCardChart;
