"use client";
import dynamic from "next/dynamic";
// import Chart from 'react-apexcharts';
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChartNew = ({ letters, personels, leaves }) => {
  console.log({ letters, personels, leaves });

  const pieChartOptions = {
    labels: ["مکاتبات", "کارکنان", "مرخصی ها"],
    colors: ["#fff", "#fff", "#fff"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#ff0041", "#1a243e", "#EFF4FB"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };

  const pieChartData = [letters, personels, leaves];

  return (
    <div className="w-full mx-auto">
      <Chart
        options={pieChartOptions}
        type="pie"
        width="100%"
        height="400px"
        series={pieChartData}
      />
    </div>
  );
};

export default PieChartNew;
