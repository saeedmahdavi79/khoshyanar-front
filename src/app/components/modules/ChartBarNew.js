import { Bar } from "@ant-design/plots";
import React from "react";
import ReactDOM from "react-dom";

const ChartBar = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/bar-bar.json",
    },
    data: [
      {
        month: "فروردین",
        vis: 1,
      },
      {
        month: "اردیبهشت",
        vis: 2,
      },
      {
        month: "خرداد",
        vis: 5,
      },
      {
        month: "تیر",
        vis: 1,
      },
      {
        month: "مرداد",
        vis: 3,
      },
      {
        month: "شهریور",
        vis: 7,
      },
      {
        month: "مهر",
        vis: 0,
      },
      {
        month: "آبان",
        vis: 6,
      },
      {
        month: "آذر",
        vis: 0,
      },
      {
        month: "دی",
        vis: 8,
      },
      {
        month: "بهمن",
        vis: 0,
      },
      {
        month: "اسفند",
        vis: 2,
      },
    ],
    xField: "month",
    yField: "vis",
    // label: {
    //   text: (d) => `${d.vis}`,
    //   textBaseline: "bottom",
    //   fontFamily: "dana",
    // },
    label: {
      text: (d) => d.vis,
      formatter: "0",
      style: {
        textAlign: (d) => (+d.vis > 0.008 ? "right" : "start"),
        fill: (d) => (+d.vis > 0.008 ? "#fff" : "#000"),
        dx: (d) => (+d.vis > 0.008 ? -5 : 5),
      },
    },
    axis: {
      y: {
        labelFormatter: "0",
      },
    },
    style: {
      radiusTopLeft: 10,
      radiusTopRight: 10,
      fill: "#41B3A2",
      fontFamily: "dana",
    },
  };
  return (
    <span dir="ltr">
      <Bar {...config} />
    </span>
  );
};

export default ChartBar;
