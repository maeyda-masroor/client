import React from "react";
import { Pie } from "react-chartjs-2";
import {Chart , ArcElement} from 'chart.js';
import {Charts} from "chart.js/auto";
const ThePieChart = () => {
  const pieChartData = {
    labels: ["Nutrition Program", "Education Program"],
    datasets: [{
      data: [12,88.5],
      backgroundColor: ["#ffae42", "#c21809", "#ff6600","#FFC37D","#E91E63"],
      hoverBackgroundColor: ["#c21809", "#003350", "#993d00","#FF5733","#D35400"],
    }]
  };
  Chart.register(ArcElement);
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      }
    },
    width:300,
    height:300
  };

  return (
    <div style={{ height: "200px", width: "200px" }}>
      <Pie  data={pieChartData} options={options}/>
    </div>
  );
};

export default ThePieChart;