import { Column } from "@ant-design/plots";
import React from "react";
import ReactDOM from "react-dom";

const ChartColumn = ({data}) => {
  console.log(data);
  
  const config = {
    data: data,
    xField: "month",
    yField: "vis",
    label: {
      text: (d) => `${d.vis}`,
      textBaseline: "bottom",
      fontFamily: "dana",
    },
    axis: {
      y: {
        labelFormatter: 0,
      },
    },
    style: {
      radiusTopLeft: 10,
      radiusTopRight: 10,
      fill: "#ff6e40",
      fontFamily: "dana",
    },
  };
  return (
    <span dir="ltr">
      <Column {...config} />
    </span>
  );
};

export default ChartColumn;
