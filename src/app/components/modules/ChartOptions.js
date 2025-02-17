const chartOption = (data) => {
  return {
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
        color: "#608C62",
      },
    },
    colors: ["#608C62", "#c80036"],
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "#608C62",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
    },
    tooltip: {
      theme: "dark",
      style: {
        fontFamily: "bakh",
      },
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
      categories: data,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
          fontFamily: "bakh",
        },
      },
      fontFamily: "bakh",
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
      show: true,
      fontFamily: "bakh",

      style: {
        fontFamily: "bakh",
      },
    },
    grid: {
      show: true,
      column: {
        // color: ["#7551FF", "#39B8FF"],
        opacity: 0.5,
      },
    },
    // color: ["#7551FF", "#39B8FF"],
  };
};

export default chartOption;
