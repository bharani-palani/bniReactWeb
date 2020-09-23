import React, { useState } from "react";
import PropTypes from "prop-types";
import DonutChart from "react-donut-chart";
// https://www.npmjs.com/package/react-donut-chart

const Chart = props => {
  const [loaderState, setLoaderState] = useState(false);
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
  const colors = [
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
    "#f44336"
  ];  
  return (
    <>
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
        <div
          className="chartWrapper"
          onClick={() => setLoaderState(!loaderState)}
        >
          <h4 className="text-center">{n}</h4>
          <DonutChart
            strokeColor={`#000`}
            innerRadius={0.7}
            outerRadius={0.9}
            clickToggle={true}
            colors={colors}
            height={200}
            width={200}
            legend={false}
            data={data}
            formatValues={(values, total) =>
              `${values} / (${((values / total) * 100).toFixed(2)}%)`
            }
          />
        </div>
      ))}
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
