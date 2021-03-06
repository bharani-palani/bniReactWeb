import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DonutChart from "react-donut-chart";
import helpers from "../../helpers";
// https://www.npmjs.com/package/react-donut-chart

const IncExpChart = props => {
  let { chartData, onMonthYearSelected } = props;
  const [data, setData] = useState([]);
  const [monthYearSelected, setMonthYearSelected] = useState("");
  const [noRecords, setNoRecords] = useState(false);

  useEffect(() => {
    let monthArray = chartData.map(d => String(d.dated));
    monthArray = [...new Set(monthArray)];
    const data = monthArray.map(m => {
      let isThere = chartData.filter(cd => String(cd.dated) === String(m));
      isThere = isThere.map(({ category, total, dated }) => ({
        month: dated,
        label: category,
        value: Number(total),
        isEmpty: Number(total) <= 0
      }));
      const obj = {
        month: m,
        cData: isThere
      };
      return obj;
    });

    setData(data);
    if (data.length > 0) {
      setMonthYearSelected(data[0].month);
      onMonthYearSelected(data[0].month);
    } else {
      setNoRecords(true)
    }
  }, [chartData]);

  // Interface
  // {dated: "Dec-2020", total: "0.00", category: "Bike petrol"}
  // cData = { label: "Mobile bill", value: 120 },

  const genId = i => `chart-${i}`;
  const colors = helpers.donutChartColors;
  return (
    <>
      {data && data.length > 0 ? data.map((d, i) => (
        <div className="chartWrapper" key={genId(i)}>
          <div className="text-center pt-10 pb-10">
            <button
              className={`btn btn-sm btn-capsule ${
                String(monthYearSelected) === String(d.month) ? "active" : ""
              }`}
              onClick={() => {
                setMonthYearSelected(d.month);
                onMonthYearSelected(d.month);
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
            // formatValues={(values, total) => `${helpers.indianLacSeperator(values)} / (${((values / total) * 100).toFixed(2)}%)`
            formatValues={(values, total) => `${helpers.indianLacSeperator(values)}`
            }
          />
        </div>
      )) : (<div className="noRecords block mt-10">No Records Generated</div>)}
    </>
  );
};

IncExpChart.propTypes = {
  property: PropTypes.string
};
IncExpChart.defaultProps = {
  property: "String name"
};

export default IncExpChart;
