import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DonutChart from "react-donut-chart";
import helpers from "../../helpers";
import Loader from "react-loader-spinner";
// https://www.npmjs.com/package/react-donut-chart

const Chart = props => {
  let { chartData, onMonthYearSelected } = props;
  const [data, setData] = useState([]);
  const [loaderState, setLoaderState] = useState(false);
  const [monthYearSelected, setMonthYearSelected] = useState("");

  useEffect(() => {
    setLoaderState(true);
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
    if(data.length > 0) {
      setMonthYearSelected(data[0].month);
      onMonthYearSelected(data[0].month);
      setLoaderState(false)
    };
  }, [chartData]);

  // Interface
  // {dated: "Dec-2020", total: "0.00", category: "Bike petrol"}
  // cData = { label: "Mobile bill", value: 120 },

  const genId = i => `chrat-${i}`;
  const colors = helpers.donutChartColors;
  return (
    <>
      {loaderState ? (
        <div className="relativeSpinner">
          <Loader
            type={helpers.LoadRandomSpinnerIcon()}
            color={helpers.fluorescentColor}
            height={100}
            width={100}
          />
        </div>
      ) : (
        data.map((d, i) => (
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
              height={200}
              width={200}
              legend={false}
              data={d.cData}
              formatValues={(values, total) =>
                `${values} / (${((values / total) * 100).toFixed(2)}%)`
              }
            />
          </div>
        ))
      )}
    </>
  );
};

Chart.propTypes = {
  property: PropTypes.string
};
Chart.defaultProps = {
  property: "String name"
};

export default Chart;
