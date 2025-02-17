"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import Link from "next/link";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { HiOutlineCube } from "react-icons/hi2";
import { HiOutlineBeaker } from "react-icons/hi2";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { HiMiniCog8Tooth } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const productPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/")}
                  text={"بازگشت به بخش تولید"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          title={"بخش برنامه ریزی و پیش بینی تولید"}
          des={"پیش بینی تولید محصول و برنامه ریزی کلی تولیدات"}
          data={
            <>
              <div className="w-full grid  xl:grid-cols-4 gap-3 h-full sm:grid-cols-1 md:grid-cols-2 px-1   place-content-center ">
                <Link className="w-full" href="/dashboard/prodution/products/category">
                  <div className="w-full cursor-pointer hover:scale-95 transition-all duration-300 group py-5 px-3 rounded-xl justify-center flex flex-col gap-4 items-center h-[200px] shadow-afra">
                    <HiMiniSquares2X2
                      className="group-hover:text-[var(--color-green)] font-normal"
                      size={"2.5rem"}
                    />
                    <span className="font-bold text-[16px] group-hover:text-[var(--color-green)]">
                      بخش دسته بندی ها
                    </span>

                    <span className="text-gray-400 font-normal text-[12px] group-hover:text-[var(--color-green)]">
                      دسته بندی محصولات و مواد اولیه
                    </span>
                  </div>
                </Link>
                <Link className="w-full" href="/dashboard/prodution/products/all">
                  <div className="w-full cursor-pointer hover:scale-95 transition-all duration-300 group py-5 px-3 rounded-xl justify-center flex flex-col gap-4 items-center h-[200px] shadow-afra">
                    <HiOutlineCube
                      className="group-hover:text-[var(--color-green)]"
                      size={"2.5rem"}
                    />
                    <span className="font-bold text-[16px] group-hover:text-[var(--color-green)]">
                      بخش محصولات
                    </span>

                    <span className="text-gray-400 font-normal text-[12px] group-hover:text-[var(--color-green)]">
                      تمامی موارد مربوط به بخش محصولات شما
                    </span>
                  </div>
                </Link>
                <Link className="w-full" href="/dashboard/prodution/products/formula">
                  <div className="w-full cursor-pointer hover:scale-95 transition-all duration-300 group py-5 px-3 rounded-xl justify-center flex flex-col gap-4 items-center h-[200px] shadow-afra">
                    <HiMiniCog8Tooth
                      className="group-hover:text-[var(--color-green)]"
                      size={"2.5rem"}
                    />
                    <span className="font-bold text-[16px] group-hover:text-[var(--color-green)]">
                      بخش فرمولاسیون (BOM)
                    </span>

                    <span className="text-gray-400 font-normal text-[12px] group-hover:text-[var(--color-green)]">
                      تمامی موارد مربوط به بخش فرمولاسیون (BOM) شما
                    </span>
                  </div>
                </Link>
                <Link className="w-full" href={"/dashboard/prodution/products/reports"}>
                  <div className="w-full cursor-pointer hover:scale-95 transition-all duration-300 group py-5 px-3 rounded-xl justify-center flex flex-col gap-4 items-center h-[200px] shadow-afra">
                    <HiOutlinePresentationChartLine
                      className="group-hover:text-[var(--color-green)]"
                      size={"2.5rem"}
                    />
                    <span className="font-bold text-[16px] group-hover:text-[var(--color-green)]">
                      گزارش گیری و ارائه آمار
                    </span>

                    <span className="text-gray-400  truncate font-normal text-[12px] group-hover:text-[var(--color-green)]">
                      بررسی و گزارش گیری از ریز آمار
                      <br/>
                       و تمامی ورودی و خروجی ها
                    </span>
                  </div>
                </Link>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default productPage;
