"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { HiMenuAlt3 } from "react-icons/hi";
import { LuAlignJustify, LuCircle, LuMenu } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";
import { LuCog } from "react-icons/lu";
import { LuIndent } from "react-icons/lu";
import { LuLifeBuoy } from "react-icons/lu";
import { LuCoins } from "react-icons/lu";
import { LuCreditCard } from "react-icons/lu";
import { PiHandshakeLight } from "react-icons/pi";
import { LuScrollText } from "react-icons/lu";
import { RiBillLine } from "react-icons/ri";
import { LuBanknote } from "react-icons/lu";
import { LuBot } from "react-icons/lu";
import { LuContact } from "react-icons/lu";
import { LuMedal } from "react-icons/lu";
import { LuPaperclip } from "react-icons/lu";

import { IoIosNotifications } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import {
  Add02Icon,
  AiBeautifyIcon,
  AiBrain02Icon,
  AiChat01Icon,
  BotIcon,
  CheckUnread02Icon,
  CustomerSupportIcon,
  Hamburger01Icon,
  Home01Icon,
  LetterSpacingIcon,
  Menu01Icon,
  Message01Icon,
  Money02Icon,
  Money04Icon,
  OfficeIcon,
  PowerSocket01Icon,
  Setting06Icon,
  Setting07Icon,
  ShopSignIcon,
  ShoppingBag01Icon,
  StarIcon,
  Target02Icon,
  Task01Icon,
  Task02Icon,
} from "hugeicons-react";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";

const Header2 = ({
  sidebar,
  clickSide,
  hideText,
  sideBarBtn,
  sideBarRaduis,
  sideBarJustify,
  sideBarEleman,
  sideBarPadding,
  userAccess,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState({
    dashboard: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    bakhshEdari: {
      pointer: "bg-white",
      bg: "bg-white",
      circle: "bg-[#545555]",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    namehvamoktebat: {
      pointer: "bg-white",
      bg: "bg-white",
      circle: "bg-[#545555]",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    taskManagement: {
      pointer: "bg-white",
      bg: "bg-white",
      circle: "bg-[#545555]",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    bakhshtoolid: {
      pointer: "bg-white",
      bg: "bg-white",
      circle: "bg-[#545555]",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    frooshgah: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    bakhshFroosh: {
      pointer: "bg-white",
      bg: "bg-white",
      circle: "bg-[#545555]",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },

    mali: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    assistant: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },

    setting: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },

    afraai: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    message: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    support: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    estelam: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    marketing: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    prem: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    addOrder: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
    tadarokat: {
      pointer: "bg-white",
      bg: "bg-white",
      text: "text-[#545555]",
      icon: "#545555",
      font: "font-normal",
    },
  });

  useEffect(() => {
    const updatedState = { ...state };
    Object.keys(updatedState).forEach((key) => {
      updatedState[key] = {
        pointer: "bg-[var(--color-blue)]",
        bg: "bg-[var(--color-blue)]",
        text: "text-white",
        icon: "#fff",
        font: "font-normal",
      };
    });

    const activeKey = {
      "/dashboard": "dashboard",
      "/dashboard/office": "bakhshEdari",
      // "/dashboard/prodution": "tadarokat",
      "/dashboard/correspondence": "namehvamoktebat",
      "/dashboard/tasks": "taskManagement",
      "/dashboard/prodution": "bakhshtoolid",
      "/dashboard/sales": "bakhshFroosh",
      "/dashboard/addnewcontact": "bakhshFroosh", // اینجا اضافه شده
      // "/dashboard/logistics": "tadarokat",
      "/dashboard/setting": "setting",
      "/dashboard/afraai": "afraai",
      "/dashboard/facilities": "estelam",
      "/dashboard/ticket": "support",
      "/dashboard/messenger": "message",
      "/dashboard/marketing": "marketing",
      "/dashboard/premium": "prem",
      "/dashboard/premium/payment/callback": "prem",
      "/dashboard/order/add": "addOrder",
    }[pathname];

    if (activeKey) {
      updatedState[activeKey] = {
        pointer: "bg-[var(--color-green)]",
        bg: "bg-[var(--color-green)]",
        text: "text-white",
        icon: "#FFFFFF",
        font: "font-extrabold",
      };
    }

    setState(updatedState);
  }, []);

  const mali = () => {
    updateState("mali");
  };
  // const assistant = () => {
  //   updateState("assistant");
  // };

  return (
    <>
      <div className="w-full relative h-full bg-[var(--color-blue)]">
        <div
          className={`${sidebar} transition-all duration-500   h-full flex flex-col  gap-28   bg-[var(--color-blue)] py-4`}
        >
          <div className="w-full flex justify-center gap-6 items-center    flex-col">
            {/* داشبورد */}

            <div className="flex w-full items-center cursor-pointer">
              <div className="w-full flex  px-3 justify-center items-center">
                <div
                  className={`flex ${sideBarJustify} truncate transition-all w-full duration-500  items-center ${sideBarBtn} h-[45.81px] bg-[var(--color-blue-bc-2)] text-[var(--color-green)] rounded-lg px-[10px] cursor-pointer`}
                  onClick={clickSide}
                >
                  <span
                    className={`text-[var(--color-green)] ${hideText}  text-[16px] font-black`}
                  >
                    منو مدیریت
                  </span>
                  <Menu01Icon
                    className="text-[var(--color-green)]"
                    size={"1.2rem"}
                  />
                </div>
              </div>
            </div>

            <a className="w-full" href="/dashboard">
              <div className="flex w-full items-center cursor-pointer">
                <div
                  className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.dashboard.pointer}`}
                ></div>
                <div className="w-full flex -mr-1 px-2 justify-center items-center">
                  <div
                    className={`${sideBarEleman} truncate transition-all duration-500 h-[45.81px] px-4 ${state.dashboard.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <span
                      className={`${state.dashboard.text} ${hideText} mr-2 text-[16px] ${state.dashboard.font}`}
                    >
                      میزکار افراپرداز
                    </span>
                    <Home01Icon
                      style={{ color: state.dashboard.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </div>
            </a>
            {/* سفارش */}

            {userAccess != "1" ? (
              <a className="w-full" href="/dashboard/office">
                <div className="flex w-full   items-center cursor-pointer">
                  <div
                    className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.bakhshEdari.pointer}`}
                  ></div>
                  <div
                    className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] gap-2 ${sideBarPadding} ${state.bakhshEdari.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <div className="flex gap-4 items-center justify-center">
                      <span
                        className={`text-[16px] truncate ${hideText} ${state.bakhshEdari.font} ${state.bakhshEdari.text}`}
                      >
                        مکاتبات و مرخصی ها
                      </span>
                    </div>
                    <OfficeIcon
                      style={{ color: state.bakhshEdari.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </a>
            ) : userAccess == "1" ? (
              <a className="w-full" href="/dashboard/office">
                <div className="flex w-full   items-center cursor-pointer">
                  <div
                    className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.bakhshEdari.pointer}`}
                  ></div>
                  <div
                    className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] gap-2 ${sideBarPadding} ${state.bakhshEdari.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <div className="flex gap-4 items-center justify-center">
                      <span
                        className={`text-[16px] truncate ${hideText} ${state.bakhshEdari.font} ${state.bakhshEdari.text}`}
                      >
                        اداری و پرسنل{" "}
                      </span>
                    </div>
                    <OfficeIcon
                      style={{ color: state.bakhshEdari.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </a>
            ) : userAccess == "2" ? (
              <a className="w-full" href="/dashboard/office">
                <div className="flex w-full   items-center cursor-pointer">
                  <div
                    className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.bakhshEdari.pointer}`}
                  ></div>
                  <div
                    className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] gap-2 ${sideBarPadding} ${state.bakhshEdari.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <div className="flex gap-4 items-center justify-center">
                      <span
                        className={`text-[16px] truncate ${hideText} ${state.bakhshEdari.font} ${state.bakhshEdari.text}`}
                      >
                        اداری و پرسنل{" "}
                      </span>
                    </div>
                    <OfficeIcon
                      style={{ color: state.bakhshEdari.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}

            {/* <a className="w-full" href="/dashboard/correspondence">
      <div className="flex w-full   items-center cursor-pointer">
        <div
          className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.namehvamoktebat.pointer}`}
        ></div>
        <div
          className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] gap-2 ${sideBarPadding} ${state.namehvamoktebat.bg} flex ${sideBarJustify} items-center rounded-md`}
        >
          <div className="flex gap-4 items-center justify-center">
            <span
              className={`text-[16px] truncate ${hideText} ${state.namehvamoktebat.font} ${state.namehvamoktebat.text}`}
            >
              نامه ها و مکاتبات
            </span>
          </div>
          <LetterSpacingIcon
            style={{ color: state.namehvamoktebat.icon }}
            size={"1.2rem"}
          />
        </div>
      </div>
    </a> */}
            {/* تیکت */}

            {userAccess == "1" ? (
              <a className="w-full" href="/dashboard/tasks">
                <div className="flex w-full   items-center cursor-pointer">
                  <div
                    className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.taskManagement.pointer}`}
                  ></div>
                  <div
                    className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] gap-2 ${sideBarPadding} ${state.taskManagement.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <div className="flex gap-4 items-center justify-center">
                      <span
                        className={`text-[16px] truncate ${hideText} ${state.taskManagement.font} ${state.taskManagement.text}`}
                      >
                        وظایف و کانبان
                      </span>
                    </div>
                    <Task02Icon
                      style={{ color: state.taskManagement.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}

            {userAccess == "10" ? (
              <a className="w-full" href="/dashboard/order/add">
                <div className="flex w-full   items-center cursor-pointer">
                  <div
                    className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.addOrder.pointer}`}
                  ></div>
                  <div
                    className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] gap-2 ${sideBarPadding} ${state.addOrder.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <div className="flex gap-4 items-center justify-center">
                      <span
                        className={`text-[16px] truncate ${hideText} ${state.addOrder.font} ${state.addOrder.text}`}
                      >
                        مدیریت سفارشات
                      </span>
                    </div>
                    <ShoppingBag01Icon
                      style={{ color: state.addOrder.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}

            {/* چت */}

            {userAccess == "1" ? (
              <a className="w-full" href="/dashboard/prodution">
                <div className="flex  w-full   items-center cursor-pointer">
                  <div
                    className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.bakhshtoolid.pointer}`}
                  ></div>
                  <div
                    className={`${sideBarEleman} truncate h-[45.81px] mx-2 transition-all duration-500 ${sideBarPadding} gap-2 ${state.bakhshtoolid.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <div className="flex gap-4 items-center justify-center">
                      <span
                        className={`text-[16px] truncate ${hideText} ${state.bakhshtoolid.font} ${state.bakhshtoolid.text}`}
                      >
                        تولید و برنامه ریزی
                      </span>
                    </div>
                    <Setting06Icon
                      style={{ color: state.bakhshtoolid.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </a>
            ) : userAccess == "4" ? (
              <a className="w-full" href="/dashboard/prodution">
                <div className="flex  w-full   items-center cursor-pointer">
                  <div
                    className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.bakhshtoolid.pointer}`}
                  ></div>
                  <div
                    className={`${sideBarEleman} truncate h-[45.81px] mx-2 transition-all duration-500 ${sideBarPadding} gap-2 ${state.bakhshtoolid.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <div className="flex gap-4 items-center justify-center">
                      <span
                        className={`text-[16px] truncate ${hideText} ${state.bakhshtoolid.font} ${state.bakhshtoolid.text}`}
                      >
                        تولید و برنامه ریزی
                      </span>
                    </div>
                    <Setting06Icon
                      style={{ color: state.bakhshtoolid.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}

            {userAccess == "8" ? (
              <a className="w-full" href="/dashboard/prodution">
                <div className="flex  w-full  items-center cursor-pointer ">
                  <div
                    className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.bakhshtoolid.pointer}`}
                  ></div>
                  <div
                    className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] ${sideBarPadding} gap-2 ${state.bakhshtoolid.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <div className="flex gap-4 items-center justify-center">
                      <span
                        className={`text-[16px] ${hideText} ${state.bakhshtoolid.font} ${state.bakhshtoolid.text}`}
                      >
                        تدارکات
                      </span>
                    </div>
                    <Add02Icon
                      style={{ color: state.bakhshtoolid.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}

            {/* نظرات */}
            {userAccess == "1" ? (
              <>
                <a className="w-full" href="/dashboard/sales">
                  <div className="flex  w-full   items-center cursor-pointer ">
                    <div
                      className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.bakhshFroosh.pointer}`}
                    ></div>
                    <div
                      className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] ${sideBarPadding} gap-2 ${state.bakhshFroosh.bg} flex ${sideBarJustify} items-center rounded-md`}
                    >
                      <div className="flex gap-4 items-center justify-center">
                        <span
                          className={`text-[16px] ${hideText} ${state.bakhshFroosh.font} ${state.bakhshFroosh.text}`}
                        >
                          فروش و مشتریان
                        </span>
                      </div>
                      <ShoppingBag01Icon
                        style={{ color: state.bakhshFroosh.icon }}
                        size={"1.2rem"}
                      />
                    </div>
                  </div>
                </a>
                <a className="w-full" href="/dashboard/marketing">
                  <div className="flex w-full   items-center cursor-pointer">
                    <div
                      className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.marketing.pointer}`}
                    ></div>
                    <div
                      className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] gap-2 ${sideBarPadding} ${state.marketing.bg} flex ${sideBarJustify} items-center rounded-md`}
                    >
                      <div className="flex gap-4 items-center justify-center">
                        <span
                          className={`text-[16px] truncate ${hideText} ${state.marketing.font} ${state.marketing.text}`}
                        >
                          مارکتینگ و بازاریابی
                        </span>
                      </div>
                      <Target02Icon
                        style={{ color: state.marketing.icon }}
                        size={"1.2rem"}
                      />
                    </div>
                  </div>
                </a>
              </>
            ) : userAccess == "3" ? (
              <>
                <a className="w-full" href="/dashboard/sales">
                  <div className="flex  w-full   items-center cursor-pointer ">
                    <div
                      className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.bakhshFroosh.pointer}`}
                    ></div>
                    <div
                      className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] ${sideBarPadding} gap-2 ${state.bakhshFroosh.bg} flex ${sideBarJustify} items-center rounded-md`}
                    >
                      <div className="flex gap-4 items-center justify-center">
                        <span
                          className={`text-[16px] ${hideText} ${state.bakhshFroosh.font} ${state.bakhshFroosh.text}`}
                        >
                          فروش و مشتریان
                        </span>
                      </div>
                      <ShoppingBag01Icon
                        style={{ color: state.bakhshFroosh.icon }}
                        size={"1.2rem"}
                      />
                    </div>
                  </div>
                </a>
              </>
            ) : userAccess == "7" ? (
              <>
                <a className="w-full" href="/dashboard/sales">
                  <div className="flex  w-full   items-center cursor-pointer ">
                    <div
                      className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.bakhshFroosh.pointer}`}
                    ></div>
                    <div
                      className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] ${sideBarPadding} gap-2 ${state.bakhshFroosh.bg} flex ${sideBarJustify} items-center rounded-md`}
                    >
                      <div className="flex gap-4 items-center justify-center">
                        <span
                          className={`text-[16px] ${hideText} ${state.bakhshFroosh.font} ${state.bakhshFroosh.text}`}
                        >
                          فروش و مشتریان
                        </span>
                      </div>
                      <ShoppingBag01Icon
                        style={{ color: state.bakhshFroosh.icon }}
                        size={"1.2rem"}
                      />
                    </div>
                  </div>
                </a>
                <a className="w-full" href="/dashboard/marketing">
                  <div className="flex w-full   items-center cursor-pointer">
                    <div
                      className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.marketing.pointer}`}
                    ></div>
                    <div
                      className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] gap-2 ${sideBarPadding} ${state.marketing.bg} flex ${sideBarJustify} items-center rounded-md`}
                    >
                      <div className="flex gap-4 items-center justify-center">
                        <span
                          className={`text-[16px] truncate ${hideText} ${state.marketing.font} ${state.marketing.text}`}
                        >
                          مارکتینگ و بازاریابی
                        </span>
                      </div>
                      <Target02Icon
                        style={{ color: state.marketing.icon }}
                        size={"1.2rem"}
                      />
                    </div>
                  </div>
                </a>
              </>
            ) : (
              ""
            )}

            {/* آمار */}

            <a className="w-full" href="/dashboard/messenger">
              <div className="flex  w-full   items-center cursor-pointer ">
                <div
                  className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.message.pointer}`}
                ></div>
                <div
                  className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] ${sideBarPadding} gap-2 ${state.message.bg} flex ${sideBarJustify} items-center rounded-md`}
                >
                  <div className="flex gap-4 items-center justify-center">
                    <span
                      className={`text-[16px] ${hideText} ${state.message.font} ${state.message.text}`}
                    >
                      پیام رسان داخلی
                    </span>
                  </div>
                  <Message01Icon
                    style={{ color: state.message.icon }}
                    size={"1.2rem"}
                  />
                </div>
              </div>
            </a>

            {userAccess == "1" || userAccess == "3" ? (
              <a className="w-full" href="/dashboard/facilities">
                <div className="flex w-full   items-center cursor-pointer">
                  <div
                    className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.estelam.pointer}`}
                  ></div>
                  <div
                    className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] gap-2 ${sideBarPadding} ${state.estelam.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <div className="flex gap-4 items-center justify-center">
                      <span
                        className={`text-[16px] truncate ${hideText} ${state.estelam.font} ${state.estelam.text}`}
                      >
                        سامانه استعلام
                      </span>
                    </div>
                    <PowerSocket01Icon
                      style={{ color: state.estelam.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}

            {userAccess == "1" ? (
              <a className="w-full" href="/dashboard/setting">
                <div className="flex w-full   items-center cursor-pointer">
                  <div
                    className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.setting.pointer}`}
                  ></div>
                  <div
                    className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] gap-2 ${sideBarPadding} ${state.setting.bg} flex ${sideBarJustify} items-center rounded-md`}
                  >
                    <div className="flex gap-4 items-center justify-center">
                      <span
                        className={`text-[16px] truncate ${hideText} ${state.setting.font} ${state.setting.text}`}
                      >
                        تنظیمات سیستم
                      </span>
                    </div>
                    <Setting07Icon
                      style={{ color: state.setting.icon }}
                      size={"1.2rem"}
                    />
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}

            <a className="w-full" href="/dashboard/afraai">
              <div className="flex  w-full   items-center cursor-pointer ">
                <div
                  className={`flex justify-start transition-all duration-500 w-1 h-8 rounded-l-[4px] ${state.afraai.pointer}`}
                ></div>
                <div
                  className={`${sideBarEleman} truncate transition-all mx-2 duration-500 h-[45.81px] ${sideBarPadding} gap-2 ${state.afraai.bg} flex ${sideBarJustify} items-center rounded-md`}
                >
                  <div className="flex gap-4 items-center justify-center">
                    <span
                      className={`text-[16px] ${hideText} ${state.afraai.font} ${state.afraai.text}`}
                    >
                      دستیار هوشمند افراپرداز
                    </span>
                  </div>
                  <BotIcon
                    style={{ color: state.afraai.icon }}
                    size={"1.2rem"}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
