"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import { useState } from "react";
import { LuChevronLeft } from "react-icons/lu";

const correspondence = () => {
  const [showName, setShowName] = useState(true);
  const [showPersonel, setPersonel] = useState(false);
  const [showLeave, setLeave] = useState(false);
  const [showMyMokatebat, setShowMyMokatebat] = useState(false);
  const [showSabt, setShowSabt] = useState(false);
  const [showMokatebatBaste, setshowMokatebatBaste] = useState(false);
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
    setShowMyMokatebat(false)
    setShowSabt(false)
    setshowMokatebatBaste(false)
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
    setShowMyMokatebat(false)
    setShowSabt(false)
    setshowMokatebatBaste(false)
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
    setShowMyMokatebat(false)
    setShowSabt(false)
    setshowMokatebatBaste(false)
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-active");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
  };

  const handleShowMyMokatebat = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowMyMokatebat(true)
    setShowSabt(false)
    setshowMokatebatBaste(false)
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-active");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
  };

  const handleShowSabt = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowMyMokatebat(false)
    setShowSabt(true)
    setshowMokatebatBaste(false)
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-active");
    setHandleActive6("sub-menu-deactive");
  };
  const handleShowMokatebatBaste = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowMyMokatebat(false)
    setShowSabt(false)
    setshowMokatebatBaste(true)
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
            نامه ها و مکاتبات
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
                لیست کل مکاتبات
                <LuChevronLeft />
              </span>
              <span
                onClick={handleShowPersonel}
                className={`w-full cursor-pointer p-2 ${handleActive2} flex justify-between items-center rounded-lg`}
              >
                اشتراک مکاتبات
                <LuChevronLeft />
              </span>
              <span
                onClick={handleShowLeave}
                className={`w-full cursor-pointer p-2 ${handleActive3} flex justify-between items-center rounded-lg`}
              >
                 پاسخ های مکاتبات
                <LuChevronLeft />
              </span>
              <span
                onClick={handleShowMyMokatebat}
                className={`w-full cursor-pointer p-2 ${handleActive4} flex justify-between items-center rounded-lg`}
              >
                مکاتبات من
                <LuChevronLeft />
              </span>
              <span
                onClick={handleShowSabt}
                className={`w-full cursor-pointer p-2 ${handleActive5} flex justify-between items-center rounded-lg`}
              >
                مکاتبات ثبت شده
                <LuChevronLeft />
              </span>
              <span
                onClick={handleShowMokatebatBaste}
                className={`w-full cursor-pointer p-2 ${handleActive6} flex justify-between items-center rounded-lg`}
              >
                مکاتبات بسته شده
                <LuChevronLeft />
              </span>
            </div>
          </div>
          <div className="w-4/5">
            {showName ? (
              <CardStat
                type={"10"}
                title={"لیست کل مکاتبات"}
                des={"مکاتبات و نامه های خود را در این بخش ببینید"}
              />
            ) : (
              ""
            )}
            {showPersonel ? (
              <CardStat
                type={"10"}
                title={"اشتراک مکاتبات"}
                des={"کارکنان و پرسنل خود را در این بخش ببینید"}
              />
            ) : (
              ""
            )}
            {showLeave ? (
              <CardStat
                type={"10"}
                title={"پاسخ های مکاتبات"}
                des={"مرخصی ها و درخواست های خود را در این بخش ببینید"}
              />
            ) : (
              ""
            )}
                  {showMyMokatebat ? (
              <CardStat
                type={"10"}
                title={"مکاتبات من"}
                des={"مرخصی ها و درخواست های خود را در این بخش ببینید"}
              />
            ) : (
              ""
            )}
                  {showSabt ? (
              <CardStat
                type={"10"}
                title={"مکاتبات ثبت شده"}
                des={"مرخصی ها و درخواست های خود را در این بخش ببینید"}
              />
            ) : (
              ""
            )}
                  {showMokatebatBaste ? (
              <CardStat
                type={"10"}
                title={"مکاتبات بسته شده"}
                des={"مرخصی ها و درخواست های خود را در این بخش ببینید"}
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

export default correspondence;
