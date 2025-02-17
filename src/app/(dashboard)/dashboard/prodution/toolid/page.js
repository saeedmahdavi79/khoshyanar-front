"use client";

import { HiOutlineCircleStack } from "react-icons/hi2";
import { HiOutlineCube } from "react-icons/hi2";
import { HiOutlineBeaker } from "react-icons/hi2";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { HiOutlineClock } from "react-icons/hi2";

import CardStat from "@/app/components/modules/Card";
import Link from "next/link";
import ButtonAfra from "@/app/components/modules/Buttons";

import { useRouter } from "next/navigation";

const toolidPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"بخش تولید و برنامه ریزی"}
          des={"بخش برنامه ریزی  و تولید مخصوص بخش های تولیدی"}
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <a href="/dashboard">
                  <ButtonAfra
                    text={"بازگشت به داشبورد"}
                    type={"white-green-2"}
                  />
                </a>
              </div>
            </div>
          }
          data={
            <>
              <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-3 h-full justify-center items-center">
                <a href="/dashboard/prodution/toolid/pishbini">
                  <div className="w-full transition-all hover:scale-95 duration-300 cursor-pointer group py-5 px-3 rounded-xl justify-center flex flex-col gap-4 items-center h-fit shadow-afra">
                    <HiOutlineClock
                      className="group-hover:text-[var(--color-green)] font-normal"
                      size={"2.5rem"}
                    />
                    <span className="font-bold text-[16px] group-hover:text-[var(--color-green)]">
                      پیش بینی تولید
                    </span>

                    <span className="text-gray-400 font-normal text-[12px] group-hover:text-[var(--color-green)]">
                      بررسی و پیش بینی تولید بر اساس موجودی انبار
                    </span>
                  </div>
                </a>
                <a href="/dashboard/prodution/reports">
                  <div className="w-full  transition-all hover:scale-95 duration-300 cursor-pointer group py-5 px-3 rounded-xl justify-center flex flex-col gap-4 items-center h-fit shadow-afra">
                    <HiOutlinePresentationChartLine
                      className="group-hover:text-[var(--color-green)]"
                      size={"2.5rem"}
                    />
                    <span className="font-bold text-[16px] group-hover:text-[var(--color-green)]">
                      گزارش گیری و ارائه آمار
                    </span>

                    <span className="text-gray-400 truncate font-normal text-[12px] group-hover:text-[var(--color-green)]">
                      بررسی و گزارش گیری از ریز آمار و تمامی فعالیت های این بخش
                    </span>
                  </div>
                </a>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};
export default toolidPage;
