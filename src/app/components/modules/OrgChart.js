"use client";
import { useEffect, useState } from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import SelectCombo from "./SelectCombo";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import InputCom from "./Inputs";
import { Tag, Tree, notification } from "antd";
import ButtonAfra from "./Buttons";

const OrganizationChartData = ({ data }) => {
  const initechOrg = {
    name: "سعید مهدوی",
    actor: "مدیر عامل",
    children: [
      //   {
      //     name: "Bob Slydell",
      //     actor: "John C. McGi...",
      //   },
    ],
  };

  const MyNodeComponent = ({ node }) => {
    return (
      <>
        <div className="initechNode cursor-pointer hover:scale-95 duration-300 transition-all">
          <div className="w-full flex flex-col justify-center gap-3 items-center">
            <div className="w-12 h-12 font-black flex justify-center items-center rounded-full bg-[var(--color-blue)] text-white">
              {node.title.slice(0, 1)}
            </div>
            <div className="w-2/3 flex flex-col gap-1 truncate">
              <span className="text-black text-[14px]">{node.title}</span>
              <span className="text-zinc-500 text-[12px]">{node.actor}</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="App" id="initechOrgChart">
      <OrgChart tree={data[0]} NodeComponent={MyNodeComponent} />
    </div>
  );
};

export default OrganizationChartData;
