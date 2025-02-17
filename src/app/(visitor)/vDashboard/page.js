"use client";
import CardStat from "@/app/components/modules/Card";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
import { HiOutlineTrophy } from "react-icons/hi2";
import chartOption from "@/app/components/modules/ChartOptions";

import { useRouter } from "next/navigation";
import ChartCard from "@/app/components/modules/ChartCard";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import { Tag } from "antd";
const vDashboard = () => {
  const [userDataAll, setUserDataAll] = useState({
    name: "",
    lastName: "",
    email: "",
    company: "",
    joinDate: "",
  });

  const router = useRouter();

  const getUserData = async () => {
    try {
      const getCookies = await getCookie("WuZiK");
      const getData = await fetch(baseUrl("/visitor/get-visitor-data"), {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${getCookies}`,
        },
      });
      const getResponse = await getData.json();
      if (getResponse.status == 200) {
        setUserDataAll({
          ...userDataAll,
          visitorName: getResponse.data.user.visitorName,
          company: getResponse.data.user.visitorCompany,
          email: getResponse.data.user.email,
          joinDate: getResponse.data.user.createDate,
        });
      } else {
        router.push("/auth/login");
      }
    } catch (error) {
      router.push("/auth/login");
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          داشبورد کارشناسان
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-orange)]"></span>
        <span className="font-normal text-[12px] text-gray-400  ">
          مشاهده پیشخوان کارشناس
        </span>
      </div>
      <div className="flex gap-3 mt-6">
        <CardStat
          icon={<HiMiniUserGroup size={"2rem"} />}
          color={"bg-[var(--color-orange)]"}
          count={"35"}
          title={"کانتکت ها"}
          des={" تعداد کانتکت های اقدام شده شما"}
          countTitle={"کانتکت"}
          type={"2"}
          seeMoreClick={() => router.push("/vDashboard/contacts")}
          colorHover={"hover:bg-[var(--color-orange)]"}
        />
        <CardStat
          icon={<HiMiniUserGroup size={"2rem"} />}
          color={"bg-[var(--color-blue)]"}
          count={"35"}
          title={"سرنخ ها"}
          des={" تعداد سر نخ های ایجاد شده شما"}
          countTitle={"سرنخ"}
          type={"2"}
          seeMoreClick={() => router.push("/vDashboard/leads")}
          colorHover={"hover:bg-[var(--color-blue)]"}
        />
        <CardStat
          icon={<HiOutlineArrowTrendingUp size={"2rem"} />}
          color={"bg-[#659487]"}
          count={"15"}
          countTitle={"فروش موفق"}
          des={"فروش های موفق ثبت شما"}
          title={"فروش های موفق"}
          type={"2"}
          colorHover={"hover:bg-[#659487]"}
        />
        <CardStat
          icon={<HiOutlineArrowTrendingDown size={"2rem"} />}
          color={"bg-[#C80036]"}
          count={"15"}
          countTitle={"فروش نا موفق"}
          des={"فروش های نا موفق ثبت شده شما"}
          title={"فروش های ناموفق"}
          type={"2"}
          colorHover={"hover:bg-[#C80036]"}
        />
        <CardStat
          icon={<HiOutlineTrophy size={"2rem"} />}
          color={"bg-[#874CCC]"}
          count={"15"}
          countTitle={"فرصت"}
          des={"فرصت های فروش شما"}
          title={"فرصت های فروش"}
          type={"2"}
          colorHover={"hover:bg-[#874CCC]"}
        />
      </div>
      <div className="flex gap-3 mt-6">
        <ChartCard
          data={[
            {
              name: "مقدار فروش",
              data: [450],
            },
            {
              name: "تعداد سرنخ",
              data: [500],
            },
          ]}
          des={"گزارشات کارشناشان بر اساس مراجعه و فروش"}
          title={"گزارشات کارشناسان"}
          option={chartOption([`${userDataAll.visitorName}`])}
        />
        <CardStat
          type={"1"}
          des={"وظایف و تسک های در جریان شما"}
          title={"وظایف"}
          data={
            <>
              <div className="w-full flex flex-col gap-3 mt-6">
                <Tag
                  color="blue"
                  className="w-full flex px-6 font-bold text-[12px] justify-between items-center h-[50px] border-2 rounded-[20px] "
                >
                  <span>جلسه با تیم فروش</span>
                  <span className="font-normal">در جریان</span>
                  <span className="font-normal">تاریخ : 1403/03/24</span>
                </Tag>
                <Tag
                  color="green"
                  className="w-full flex px-6 font-bold text-[12px justify-between items-center h-[50px] border-2 rounded-[20px] "
                >
                  <span>جلسه با تیم تولید محتوا</span>
                  <span className="font-normal">انجام شده</span>
                  <span className="font-normal">تاریخ : 1403/03/22</span>
                </Tag>
                <Tag
                  color="red"
                  className="w-full flex px-6 font-bold text-[12px justify-between items-center h-[50px] border-2 rounded-[20px] "
                >
                  <span>جلسه با تیم بازرگانی</span>
                  <span className="font-normal">لغو شده</span>
                  <span className="font-normal">تاریخ : 1403/03/20</span>
                </Tag>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default vDashboard;
