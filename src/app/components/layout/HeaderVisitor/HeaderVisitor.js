"use client";
import Image from "next/image";
import ImageUser from "@/../../public/image/user.svg";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { HiCalendarDays } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineChartPie } from "react-icons/hi2";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { HiOutlineSwatch } from "react-icons/hi2";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { HiOutlineChartBar } from "react-icons/hi2";
import { HiMiniUserGroup } from "react-icons/hi2";

import { useEffect, useState } from "react";
import baseUrl from "@/utils/baseUrl";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const HeaderDashboardVisitor = ({ child }) => {
  const [userDataAll, setUserDataAll] = useState({
    name: "",
    lastName: "",
    email: "",
    company: "",
    joinDate: "",
  });

  //router
  const router = useRouter();

  const logoutCookieVisitor = () => {
    deleteCookie("WuZiK", {
      path: "/vDashboard",
    });
    router.push("/auth/login", { shallow: true });
  };

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
      <div className="w-[7%] px-3 py-3 h-full flex justify-center items-center ">
        <div className="w-full h-full flex flex-col gap-2 justify-between  rounded-[40px] bg-[var(--color-orange)]">
          <span className="flex gap-2 justify-center h-[100px] items-center">
            <HiBars3BottomRight size={"2rem"} color="#fff" />
          </span>
          <span className="flex flex-col gap-2 justify-center items-center">
            <span
              onClick={() => router.push("/vDashboard")}
              className=" cursor-pointer h-12 w-12 rounded-[10px] flex p-3 justify-center items-center hover:bg-[#ffffff13]"
            >
              <HiOutlineHome size={"2rem"} color="#fff" />
            </span>
            <span className=" cursor-pointer h-12 w-12 rounded-[10px] flex p-3 justify-center items-center hover:bg-[#ffffff13]">
              <HiCalendarDays size={"2rem"} color="#fff" />
            </span>
            <span className=" cursor-pointer h-12 w-12 rounded-[10px] flex p-3 justify-center items-center hover:bg-[#ffffff13]">
              <HiOutlineUserGroup size={"2rem"} color="#fff" />
            </span>
            <span className=" cursor-pointer h-12 w-12 rounded-[10px] flex p-3 justify-center items-center hover:bg-[#ffffff13]">
              <HiOutlineBuildingOffice size={"2rem"} color="#fff" />
            </span>
            <span className=" cursor-pointer h-12 w-12 rounded-[10px] flex p-3 justify-center items-center hover:bg-[#ffffff13]">
              <HiOutlineChatBubbleLeftRight size={"2rem"} color="#fff" />
            </span>

            <span className=" cursor-pointer h-12 w-12 rounded-[10px] flex p-3 justify-center items-center hover:bg-[#ffffff13]">
              <HiOutlineRocketLaunch size={"2rem"} color="#fff" />
            </span>
          </span>
          <span
            onClick={logoutCookieVisitor}
            className="flex justify-center h-[100px] cursor-pointer rounded-[40px] bg-[#ffffff13] items-center"
          >
            <HiArrowLeftOnRectangle size={"2rem"} color="#fff" />
          </span>
        </div>
      </div>
      <div className="w-[93%] py-6 px-4">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-4">
            <Image
              src={ImageUser}
              className="w-12 h-12 rounded-full border-4 border-[var(--color-orange)]"
            />
            <span className="font-bold">{userDataAll.visitorName}</span>
            <span className="-mr-2 font-normal text-gray-400 text-[12px]">
              {userDataAll.company}
            </span>
            <span className=" cursor-pointer h-9 w-9 rounded-[10px] flex p-3 justify-center items-center bg-[#fb823013] text-[#fb8230] hover:bg-[var(--color-orange)] hover:text-white">
              <HiOutlineBell size={"1.6rem"} />
            </span>
          </div>
          <div className="flex gap-4 text-[12px] font-normal text-gray-400 ml-2">
            <span>
              {/* مدت زمان استفاده :{" "}
              {new Date().getTime() - parseInt(userDataAll.joinDate) > 259200000
                ? // ? router.push("/auth/register")
                  console.log("expired")
                : Math.ceil(
                    (new Date().getTime() - parseInt(userDataAll.joinDate)) /
                      3600000
                  ) + "ساعت از 72 ساعت آزمایشی"}
             */}
            </span>
          </div>
        </div>
        <div className="bg-white px-5 shadow-afra w-full flex items-center justify-between rounded-[20px] h-[100px] mt-7">
          <div className="flex items-center justify-center gap-3">
            <span className="font-bold text-[12px]">جستجو</span>
            <span className="w-[2px] h-[20px] bg-[#00000021] rounded-full"></span>
            <input
              placeholder="متن خود را وارد کنید"
              className=" placeholder:text-[12px] placeholder:font-normal font-normal focus:outline-none text-[12px]"
            />
            <span className=" cursor-pointer h-9 w-9 rounded-[10px] flex p-3 justify-center items-center bg-[#fb823013] text-[#fb8230] hover:bg-[var(--color-orange)] hover:text-white">
              <HiOutlineMagnifyingGlass size={"1.6rem"} />
            </span>
          </div>
          <div className="flex gap-10 h-[100px]">
            <span
              onClick={() => router.push("/vDashboard")}
              className="flex cursor-pointer  flex-col h-full group gap-3 hover:border-b-4 transition-all hover:border-[var(--color-orange)] items-center justify-center"
            >
              <span className="group-hover:text-[var(--color-orange)] text-gray-400">
                <HiOutlineSquares2X2 size={"2rem"} />
              </span>
              <span className="text-gray-400 group-hover:text-[var(--color-orange)] text-[14px] font-bold">
                داشبورد کاربری
              </span>
            </span>
            <span
              onClick={() => router.push("/vDashboard/leads")}
              className="flex cursor-pointer  flex-col h-full group gap-3 hover:border-b-4 transition-all hover:border-[var(--color-orange)] items-center justify-center"
            >
              <span className="group-hover:text-[var(--color-orange)] text-gray-400">
                <HiOutlineLightBulb size={"2rem"} />
              </span>
              <span className="text-gray-400 group-hover:text-[var(--color-orange)] text-[14px] font-bold">
                سرنخ ها
              </span>
            </span>
            <span
              onClick={() => router.push("/vDashboard/contacts")}
              className="flex cursor-pointer  flex-col h-full group gap-3 hover:border-b-4 transition-all hover:border-[var(--color-orange)] items-center justify-center"
            >
              <span className="group-hover:text-[var(--color-orange)] text-gray-400">
                <HiMiniUserGroup size={"2rem"} />
              </span>
              <span className="text-gray-400 group-hover:text-[var(--color-orange)] text-[14px] font-bold">
                کانتکت ها
              </span>
            </span>
            <span className="flex cursor-pointer  flex-col h-full group gap-3 hover:border-b-4 transition-all hover:border-[var(--color-orange)] items-center justify-center">
              <span className="group-hover:text-[var(--color-orange)] text-gray-400">
                <HiOutlineChartBar size={"2rem"} />
              </span>
              <span className="text-gray-400 group-hover:text-[var(--color-orange)] text-[14px] font-bold">
                گزارشات عملکرد
              </span>
            </span>
            <span className="flex cursor-pointer  flex-col h-full group gap-3 hover:border-b-4 transition-all hover:border-[var(--color-orange)] items-center justify-center">
              <span className="group-hover:text-[var(--color-orange)] text-gray-400">
                <HiOutlineInformationCircle size={"2rem"} />
              </span>
              <span className="text-gray-400 group-hover:text-[var(--color-orange)] text-[14px] font-bold">
                بخش آموزش
              </span>
            </span>
          </div>
          <div className="flex gap-2 font-bold text-[12px] text-gray-400 ml-2">
            <span>تاریخ امروز : {new Date().toLocaleDateString("fa-ir")}</span>
          </div>
        </div>
        <div className="w-full mt-6 px-2 overflow-scroll pb-[8rem] pt-2 section-layout-visitor max-h-[550px] h-full">
          {child}
        </div>
      </div>
    </>
  );
};

export default HeaderDashboardVisitor;
