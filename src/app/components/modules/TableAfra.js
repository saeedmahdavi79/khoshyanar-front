"use client";
import { Space, Table } from "antd";
import { Excel } from "antd-table-saveas-excel";
import ButtonAfra from "./Buttons";
import { LiaFileExcel } from "react-icons/lia";
import { useState } from "react";
import InputCom from "./Inputs";
import { FileExcelOutlined } from "@ant-design/icons";
import { Search01Icon, Search02Icon } from "hugeicons-react";

const TableAfra = ({ data, columns, type }) => {
  const [dataFilter, setDataFilter] = useState("");

  const handleClick = () => {
    const excel = new Excel();
    excel
      .addSheet("Excel Export AfraCrm")
      .addColumns(columns)
      .addDataSource(data, {
        str2Percent: true,
      })
      .saveAs("خروجی.xlsx");
  };

  const handleSearch = (value) => {
    setDataFilter(value.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(dataFilter.toLocaleLowerCase())
    )
  );
  return (
    <>
      {type == "green" ? (
        <div className="w-full flex flex-col gap-3 overflow-auto green-table-2">
          <span className="w-[200px] md:flex sm:hidden  gap-2 md:justify-end mr-auto  items-center">
            <InputCom
              type={"req-search"}
              placeholder="جستجوی کلی ..."
              onChenge={handleSearch}
            />
          </span>
          <Table
            showSorterTooltip={{ title: "مرتب سازی بر اساس این ستون" }}
            direction="rtl"
            dataSource={filteredData}
            columns={columns}
            pagination={{ pageSize: 5 }}
          />
        </div>
      ) : (
        ""
      )}

      {type == "orange" ? (
        <div className="w-full flex flex-col gap-3">
          <span className="w-[200px] mr-auto flex">
            <ButtonAfra
              onClick={handleClick}
              text={"خروجی اکسل"}
              type={"orange-icon"}
              icon={<LiaFileExcel size={"1.3rem"} />}
            />
          </span>
          <Table
            className="orange-table"
            showSorterTooltip={{ title: "مرتب سازی بر اساس این ستون" }}
            direction="rtl"
            dataSource={data}
            columns={columns}
          />
        </div>
      ) : (
        ""
      )}
      {type == "green-clean" ? (
        <div className="w-full flex flex-col gap-3 overflow-auto green-table-2">
          <Table
            className="green-table"
            showSorterTooltip={{ title: "مرتب سازی بر اساس این ستون" }}
            direction="rtl"
            dataSource={data}
            columns={columns}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TableAfra;
