"use client";
import { useState } from "react";
import CardStat from "@/app/components/modules/Card";
import Link from "next/link";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { HiOutlineCube } from "react-icons/hi2";
import { HiOutlineBeaker } from "react-icons/hi2";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";

import ButtonAfra from "@/app/components/modules/Buttons";

const CustomerRegistration = () => {
    const router = useRouter();
  
    const [showFirstPage, setShowFirstPage] = useState(0);
    const [activButton, setActivButton] = useState(0);
  
    const menu = [
      { title: "فرصت های خرید" },
      { title: "مدیریت فاکتورها" },
      { title: "مدیریت کالا" },
      { title: "مدیریت موجودی انبار" },
      { title: "سرنخ های خرید" },
      { title: "مدیریت قبض انبارها" },
    ];
  
    const handleButton = (button) => {
      setActivButton(button);
      setShowFirstPage(button); // به‌روزرسانی showFirstPage
    };
  
    return (
      <>
        <div className="w-full flex flex-col h-full px-6 gap-4 py-1">
          <div className="w-full flex justify-start items-center">
            <span className="text-black text-3xl py-6 font-bold">بخش تدارکات</span>
          </div>
          <div className="w-full flex gap-3 h-full">
            <div className="bg-white flex flex-col rounded-lg w-1/5 h-[calc(100%-5rem)] p-5 border border-zinc-200">
              <ButtonAfra
                type={"green"}
                onClick={() => location.replace("/dashboard")}
                text={"بازگشت به پیشخوان"}
              />
              <span className="text-[14px] mt-5">بخش های داخلی</span>
              <div className="w-full flex flex-col gap-3 mt-5">
                {menu.map((data, index) => (
                  <span
                    key={index}
                    className={`${
                      activButton === index
                        ? "sub-menu-active"
                        : "sub-menu-deactive"
                    } w-full cursor-pointer p-2 flex justify-between items-center rounded-lg`}
                    onClick={() => handleButton(index)}
                  >
                    {data.title}
                    <LuChevronLeft />
                  </span>
                ))}
              </div>
            </div>
            <div className="w-4/5">
              {showFirstPage === 0 && (
                <CardStat
                  type={"10"}
                  title={"فرصت های خرید"}
                  des={"فرصت های خرید خود را در این بخش ببینید"}
                />
              )}
              {showFirstPage === 1 && (
                <CardStat
                  type={"10"}
                  title={"مدیریت فاکتورها"}
                  des={"فاکتور های خود را در این بخش ببینید"}
                />
              )}
              {showFirstPage === 2 && (
                <CardStat
                  type={"10"}
                  title={"مدیریت کالا"}
                  des={"میتوانید کالا های خود را مدیریت کنید"}
                />
              )}
              {showFirstPage === 3 && (
                <CardStat
                  type={"10"}
                  title={"مدیریت موجودی انبار"}
                  des={"میتوانید موجودی انبار های خود را مدیریت کنید"}
                />
              )}
              {showFirstPage === 4 && (
                <CardStat
                  type={"10"}
                  title={"سرنخ های خرید"}
                  des={"سرنخ های خود را در این بخش ببینید"}
                />
              )}
              {showFirstPage === 5 && (
                <CardStat
                  type={"10"}
                  title={"مدیریت قبض انبارها"}
                  des={"میتوانید قبض انبار های خود را مدیریت کنید"}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  };
  export default CustomerRegistration;
  