"use client";
import ReceiptRow from "@/app/components/modules/ReceiptRow";
import ReceiptSignatureRow from "@/app/components/modules/ReceiptSignatureRow";
import React from "react";
import { LiaFileExcel } from "react-icons/lia";
import { Excel } from "antd-table-saveas-excel";
import ButtonAfra from "@/app/components/modules/Buttons";

const Receipt = () => {
  const rowsData = [
    {
      index: 1,
      description: "کالا ۱",
      quantity: 5,
      unit: "عدد",
      usage: "مصرفی",
      notes: "بدون ملاحظه",
    },
    {
      index: 2,
      description: "کالا ۲",
      quantity: 10,
      unit: "بسته",
      usage: "فروش",
      notes: "ملاحظه",
    },
    {
      index: 3,
      description: "کالا ۱",
      quantity: 5,
      unit: "عدد",
      usage: "مصرفی",
      notes: "بدون ملاحظه",
    },
    {
      index: 4,
      description: "کالا ۲",
      quantity: 10,
      unit: "بسته",
      usage: "فروش",
      notes: "ملاحظه",
    },
    {
      index: 5,
      description: "کالا ۱",
      quantity: 5,
      unit: "عدد",
      usage: "مصرفی",
      notes: "بدون ملاحظه",
    },
    {
      index: 6,
      description: "کالا ۲",
      quantity: 10,
      unit: "بسته",
      usage: "فروش",
      notes: "ملاحظه",
    },
    {
      index: 7,
      description: "کالا ۱",
      quantity: 5,
      unit: "عدد",
      usage: "مصرفی",
      notes: "بدون ملاحظه",
    },
    {
      index: 8,
      description: "کالا ۲",
      quantity: 10,
      unit: "بسته",
      usage: "فروش",
      notes: "ملاحظه",
    },
  ];

  const exportToExcel = () => {
    const excel = new Excel();
    excel
      .addSheet("Excel Export AfraCrm")
      .addColumns([
        { title: "ردیف", dataIndex: "index" },
        { title: "شرح جنس", dataIndex: "description" },
        { title: "تعداد", dataIndex: "quantity" },
        { title: "واحد", dataIndex: "unit" },
        { title: "مورد مصرف", dataIndex: "usage" },
        { title: "ملاحظات", dataIndex: "notes" },
      ])
      .addDataSource(rowsData)
      .saveAs("خروجی.xlsx");
  };

  return (
    <div className="w-full  bg-white mx-auto p-4 border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-lg font-bold">نام شرکت</h1>
        </div>
        <div>
          <p>تاریخ: __ / __ / __</p>
          <p>شماره قبض: _______</p>
        </div>
      </div>

      <h2 className="text-center text-xl font-bold mb-6">درخواست خرید کالا</h2>

      <div className="flex flex-col items-start mb-4" dir="ltr">
        <label className="flex gap-2 items-center">
          <input type="checkbox" className="mr-2" />
          فوری
        </label>
        <label className="flex gap-2 items-center">
          <input type="checkbox" className="mr-2" />
          حداکثر ۴۸ ساعت
        </label>
        <label className="flex gap-2 items-center">
          <input type="checkbox" className="mr-2" />
          تا پایان
        </label>
      </div>

      <div className="w-full flex justify-end pb-4 items-center ">
      <ButtonAfra
        onClick={exportToExcel}
        text={"خروجی اکسل"}
        type={"green-xlx"}
        icon={<LiaFileExcel size={"1.3rem"} />}
      />

      </div>

      <table className="w-full border border-gray-300 text-right">
        <thead>
          <tr>
            <th className="border border-black p-2">ردیف</th>
            <th className="border border-black p-2">شرح جنس</th>
            <th className="border border-black p-2">تعداد</th>
            <th className="border border-black p-2">واحد</th>
            <th className="border border-black p-2">مورد مصرف</th>
            <th className="border border-black p-2">ملاحظات</th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((row) => (
            <ReceiptRow
              key={row.index}
              index={row.index}
              description={row.description}
              quantity={row.quantity}
              unit={row.unit}
              usage={row.usage}
              notes={row.notes}
            />
          ))}
          <ReceiptSignatureRow />
        </tbody>
      </table>
    </div>
  );
};

export default Receipt;
