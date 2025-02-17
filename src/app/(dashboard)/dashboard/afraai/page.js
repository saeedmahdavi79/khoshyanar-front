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
import Script from "next/script";

const CustomerRegistration = () => {
  const router = useRouter();

  const [showFirstPage, setShowFirstPage] = useState(0);
  const [activButton, setActivButton] = useState(0);

  const menu = [{ title: "دستیار هوشمند" }];

  const handleButton = (button) => {
    setActivButton(button);
    setShowFirstPage(button); // به‌روزرسانی showFirstPage
  };

  return (
    <>
      <div className="w-full flex flex-col h-full px-6 gap-4 py-1">
        {/* <div className="w-full flex justify-start items-center">
          <span className="text-black text-3xl py-6 font-bold">
            دستیار هوشمند افراپرداز
          </span>
        </div> */}
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
                title={"دستیار هوشمند افراپرداز"}
                des={
                  "جهت مکالمه با ربات هوش مصنوعی افراپرداز مجهز به ChatGPT-4 از این بخش استفاده کنید"
                }
                data={
                  <>
                    <div className="w-full">
                      <iframe
                        src="https://app.mu.chat/@afrapardaz"
                        className="w-full h-[580px]"
                      />
                    </div>
                  </>
                }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerRegistration;
