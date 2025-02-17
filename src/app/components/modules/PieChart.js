"use client";
import dynamic from "next/dynamic";
// import Chart from 'react-apexcharts';
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChart = ({ chartData, chartOptions }) => {
  return (
    <Chart
      options={chartOptions}
      type="pie"
      width="100%"
      height="195px"
      series={chartData}
    />
  );
};

export default PieChart;
