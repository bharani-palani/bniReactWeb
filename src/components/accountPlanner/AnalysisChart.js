import React from "react";
import PropTypes from "prop-types";
import { Chart } from "react-google-charts";

const AnalysisChart = props => {
    console.log(this)
  return (
    <div>
      <Chart
        width={`350px`}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ["Month", "Sales", "Profit"],
          ["Jan", 1000, 200],
          ["Feb", 1170, 250],
          ["Mar", 660, 300],
          ["Apr", 1030, 350]
        ]}
        options={{
          legend: { position: 'none' },
          colors: ['#c2d82e', '#333'],
          chart: {
            title: "Compare expenses",
            subtitle: "Vendor, Category & Expenses"
          }
        }}
        // For tests
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
};

AnalysisChart.propTypes = {
  property: PropTypes.string
};
AnalysisChart.defaultProps = {
  property: "String name"
};

export default AnalysisChart;
