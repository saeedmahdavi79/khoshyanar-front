import { Area } from "@ant-design/plots";
import React from "react";
import ReactDOM from "react-dom";

const ChartArea = () => {
  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/stocks.json",
      transform: [{ type: "filter", callback: (d) => d.symbol === "GOOG" }],
    },
    xField: (d) => new Date(d.date),
    yField: "price",
    style: {
      fill: "linear-gradient(-90deg, white 0%, #FF204E 100%)",
    },
    axis: {
      y: { labelFormatter: "~s" },
    },
    line: {
      style: {
        stroke: "#FF204E",
        strokeWidth: 2,
      },
    },
  };
  return <Area {...config} />;
};

export default ChartArea;
