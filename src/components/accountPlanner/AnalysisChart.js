import React, {useRef} from "react";
import PropTypes from "prop-types";
import { Chart } from "react-google-charts";

const AnalysisChart = props => {
  const inputEl = useRef(null);
  return (
    <div ref={inputEl}>
      {
        inputEl.current && inputEl.current.offsetWidth > 0 &&
        (<Chart
          width={`${inputEl.current.offsetWidth}px`}
          height={"300px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["Month", "Income", "Expense"],
            ["Jan", 1000, 200],
            ["Feb", 1170, 250],
            ["Mar", 660, 300],
            ["Apr", 1030, 350],
            ["May", 430, 450],
            ["Jun", 530, 550],
            ["Jul", 630, 650],
            ["Aug", 730, 750],
            ["Sep", 830, 850],
            ["Oct", 930, 950],
            ["Nov", 1030, 1050],
            ["Dec", 1130, 1150],
          ]}
          options={{
            legend: { position: 'none' },
            colors: ['#c2d82e', '#333'],
            chart: {
              title: "Compare expenses",
              subtitle: "Vendor, Category & Expenses"
            }
          }}
        />)
      }
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
