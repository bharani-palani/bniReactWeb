import React from "react";
import DonutChart from "react-donut-chart";
// import PropTypes from "prop-types";

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
const Donut = props => {
  const { data } = props;
  return (
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
      formatValues={(values, total) => `${values} / (${((values/total) * 100).toFixed(2)}%)`}
    />
  );
};

Donut.propTypes = {};
Donut.defaultProps = {};

export default Donut;
