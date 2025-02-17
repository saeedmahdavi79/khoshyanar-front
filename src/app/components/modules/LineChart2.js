"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const SalesChart2 = ({ data, anbar }) => {
  const lineChartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 13,
        left: 0,
        blur: 10,
        opacity: 0.1,
        color: "#ff0041",
      },
    },
    colors: ["#ff0041", "#1a243e"],
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "#1a243e",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      // radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      // type: "line",
    },
    xaxis: {
      // type: "numeric",
      categories: [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
      ],
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      show: true,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      column: {
        // color: ["#7551FF", "#39B8FF"],
        opacity: 0.5,
      },
    },
    // color: ["#7551FF", "#39B8FF"],
  };
  const lineChartData = [
    {
      name: "محصول",
      data: data,
    },
    {
      name: "انبار",
      data: anbar,
    },
  ];

  return (
    <Chart
      options={lineChartOptions}
      type="line"
      // width="100%"
      // height="100%"
      series={lineChartData}
    />
  );
};

export default SalesChart2;
