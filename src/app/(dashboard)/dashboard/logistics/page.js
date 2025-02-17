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

const Logistics = () => {
  const router = useRouter();
  const [showName, setShowName] = useState(true);
  const [showPersonel, setPersonel] = useState(false);
  const [showLeave, setLeave] = useState(false);
  const [showAnbarManagement, setShowAnbarManagement] = useState(false);
  const [showSarnakh, setShowSarnakh] = useState(false);
  const [showQabzAnbar, setShowQabzAnbar] = useState(false);
  const [handleActive, setHandleActive] = useState("sub-menu-active");
  const [handleActive2, setHandleActive2] = useState("sub-menu-deactive");
  const [handleActive3, setHandleActive3] = useState("sub-menu-deactive");
  const [handleActive4, setHandleActive4] = useState("sub-menu-deactive");
  const [handleActive5, setHandleActive5] = useState("sub-menu-deactive");
  const [handleActive6, setHandleActive6] = useState("sub-menu-deactive");

  const handleShowName = () => {
    setShowName(true);
    setPersonel(false);
    setLeave(false);
    setShowAnbarManagement(false);
    setShowSarnakh(false)
    setShowQabzAnbar(false)
    setHandleActive("sub-menu-active");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
  };

  const handleShowPersonel = () => {
    setShowName(false);
    setPersonel(true);
    setLeave(false);
    setShowAnbarManagement(false);
    setShowSarnakh(false)
    setShowQabzAnbar(false)
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-active");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
  };

  const handleShowLeave = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(true);
    setShowAnbarManagement(false);
    setShowSarnakh(false)
    setShowQabzAnbar(false)
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-active");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
  };
  const handleShowFormolasion = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowAnbarManagement(true);
    setShowSarnakh(false)
    setShowQabzAnbar(false)
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-active");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
  };
  const handleshowSarnakh = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowAnbarManagement(false);
    setShowSarnakh(true)
    setShowQabzAnbar(false)
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-active");
    setHandleActive6("sub-menu-deactive");
  };
  const handleshowQabzAnbar = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowAnbarManagement(false);
    setShowSarnakh(false)
    setShowQabzAnbar(true)
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-active");
  };

  return (
    <>
      <div className="w-full flex flex-col  h-full px-6 gap-4 py-1">
        <div className="w-full flex justify-start items-center">
          <span className="text-black text-3xl py-6 font-bold">
           بخش تدارکات
          </span>
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
              <span
                onClick={handleShowName}
                className={`w-full cursor-pointer p-2 ${handleActive} flex justify-between items-center rounded-lg`}
              >
                فرصت های خرید
                <LuChevronLeft />
              </span>
              <span
                onClick={handleShowPersonel}
                className={`w-full cursor-pointer p-2 ${handleActive2} flex justify-between items-center rounded-lg`}
              >
                مدیریت فاکتورها
                <LuChevronLeft />
              </span>
              <span
                onClick={handleShowLeave}
                className={`w-full cursor-pointer p-2 ${handleActive3} flex justify-between items-center rounded-lg`}
              >
                مدیریت کالا
                <LuChevronLeft />
              </span>
              <span
                onClick={handleShowFormolasion}
                className={`w-full cursor-pointer p-2 ${handleActive4} flex justify-between items-center rounded-lg`}
              >
                مدیریت موجودی انبار
                <LuChevronLeft />
              </span>
              <span
                onClick={handleshowSarnakh}
                className={`w-full cursor-pointer p-2 ${handleActive5} flex justify-between items-center rounded-lg`}
              >
                سرنخ های خرید
                <LuChevronLeft />
              </span>
              <span
                onClick={handleshowQabzAnbar}
                className={`w-full cursor-pointer p-2 ${handleActive6} flex justify-between items-center rounded-lg`}
              >
                مدیریت قبض انبارها
                <LuChevronLeft />
              </span>
            </div>
          </div>
          <div className="w-4/5">
            {showName ? (
              <CardStat
                type={"10"}
                title={"فرصت های خرید"}
                des={"فرصت های خرید خود را در این بخش ببینید"}
              />
            ) : (
              ""
            )}
            {showPersonel ? (
              <CardStat
                type={"10"}
                title={"مدیریت فاکتورها"}
                des={"فاکتور های خود را در این بخش ببینید"}
              />
            ) : (
              ""
            )}
            {showLeave ? (
                   <CardStat
                   type={"10"}
                   title={"مدیریت کالا "}
                   des={"میتوانید کالا های خود را مدیریت کنید"}
                 />
            ) : (
              ""
            )}
            {showAnbarManagement ? (
              <CardStat
                type={"10"}
                title={"مدیریت موجودی انبار"}
                des={"میتوانید موجودی انبار های خود را مدیریت کنید"}
                />
            ) : (
              ""
            )}
            {showSarnakh ? (
              <CardStat
                type={"10"}
                title={"سرنخ های خرید"}
                des={"  سرنخ های خود را در این بخش ببینید"}
              />
            ) : (
              ""
            )}
             {showQabzAnbar ? (
              <CardStat
                type={"10"}
                title={"مدیریت قبض انبارها"}
                des={"میتوانید قبض انبار های خود را مدیریت کنید"}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Logistics;
