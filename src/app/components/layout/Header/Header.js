"use client";
import Image from "next/image";

//iconNew
import { LuAlignJustify, LuCircle, LuMenu } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";
import { LuCog } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { LuUserCircle2 } from "react-icons/lu";
import { LuFlower2 } from "react-icons/lu";
import { LuFolderTree } from "react-icons/lu";
import { LuFileBarChart } from "react-icons/lu";
import { LuBlinds } from "react-icons/lu";
import { LuContact } from "react-icons/lu";
import { LuBox } from "react-icons/lu";
import { LuWorkflow } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";

import { LuMedal } from "react-icons/lu";
import { LuFileSignature } from "react-icons/lu";
import { LuUserCheck2 } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuTestTube2 } from "react-icons/lu";
import { LuAlignEndHorizontal } from "react-icons/lu";
import { LuGanttChartSquare } from "react-icons/lu";
import { LuUserCircle } from "react-icons/lu";
import { LuCalculator } from "react-icons/lu";
import { LuUserMinus } from "react-icons/lu";
import { LuOutdent } from "react-icons/lu";
import { LuIndent } from "react-icons/lu";
import { LuLifeBuoy } from "react-icons/lu";
import TopImage from "../../../../../public/image/afrapardaz.png";
import TopImageSquare from "../../../../../public/image/square-logo.png";
import ImageNotFound from "../../../../../public/image/404.svg";

import { useEffect, useState } from "react";
import baseUrl from "@/utils/baseUrl";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import SelectCombo from "../../modules/SelectCombo";
import ButtonAfra from "../../modules/Buttons";

import { LuCoins } from "react-icons/lu";
import { LuCreditCard } from "react-icons/lu";
import { PiHandshakeLight } from "react-icons/pi";
import { LuScrollText } from "react-icons/lu";
import { RiBillLine } from "react-icons/ri";
import { LuBanknote } from "react-icons/lu";
import { LuBot } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { IoIosSync } from "react-icons/io";
import { LuBadgeDollarSign } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";

import { IoIosNotifications } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import ImageUser from "../../../../../public/image/user.png";
import {
  AppstoreOutlined,
  CloseCircleOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Button, Menu, Modal, Tag } from "antd";

import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { LuUserCog } from "react-icons/lu";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space, Drawer } from "antd";
import ConvertEnNumberToPersian from "@/utils/numberConv";
import InputCom from "../../modules/Inputs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import Header2 from "../Header2/Header2";
import {
  ArrowLeft01Icon,
  ArrowLeft02Icon,
  ArrowLeft03Icon,
  ArrowLeft05Icon,
  Edit01Icon,
  HelpSquareIcon,
  InstagramIcon,
  Logout01Icon,
  Logout02Icon,
  Message01Icon,
  Notification01Icon,
  Notification02Icon,
  PlayCircle02Icon,
  PlayCircleIcon,
  PlayIcon,
  Setting06Icon,
  StarCircleIcon,
  StarFaceIcon,
  StarIcon,
  StarSquareIcon,
  TelegramIcon,
  TwitchIcon,
  TwitterIcon,
  WhatsappIcon,
  XingIcon,
} from "hugeicons-react";

const HeaderDashboard = ({ child }) => {
  const [userDataAll, setUserDataAll] = useState({
    name: "",
    lastName: "",
    email: "",
    company: "",
    joinDate: "",
    activePlan: "",
    activePlanLenght: "",
    activePlanExpireTime: "",
    activePlanName: "",
    accessUser: "",
  });
  const [isPremium, setIsPremium] = useState(false);
  const [premiumLenght, setIsPremiumLenght] = useState();
  const [loadingShow, setLoadingShow] = useState("hidden");
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuFast, setShowMenuFast] = useState(false);
  const [userAccess, setUserAccess] = useState("");
  const [searchMenu, setSearchMenu] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [collapsed, setCollapsed] = useState(false);
  const [sidebar, setSideBar] = useState("w-full");
  const [sideBarBtn, setSideBarBtn] = useState("w-full");
  const [hideText, setHideText] = useState("flex");
  const [sideBarRaduis, setSideBarRaduis] = useState("rounded-lg");
  const [sideBarJustify, setSideBarJustify] = useState("justify-between");
  const [sideBarEleman, setSideBarEleman] = useState("w-full");
  const [sideBarPadding, setSideBarPadding] = useState("px-4");
  const [dataNotif, setDataNotif] = useState([]);
  const [dataNotifShow, setDataNotifShow] = useState({});

  const toggleCollapsed = () => {
    if (sidebar == "w-full") {
      setSideBar("w-[90px]");
      setSideBarBtn("w-10");
      setHideText("hidden");
      setSideBarRaduis("rounded-md");
      setSideBarJustify("justify-center");
      setSideBarEleman("w-[64px]");
      setSideBarPadding("");
    } else {
      setSideBar("w-full");
      setSideBarBtn("w-full");
      setHideText("flex");
      setSideBarRaduis("rounded-[10px]");
      setSideBarJustify("justify-between");
      setSideBarEleman("w-full");
      setSideBarPadding("px-4");
    }
    setCollapsed(!collapsed);
  };

  const logout = () => {
    deleteCookie("WuZiK");
    location.replace("/auth/login");
  };

  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [loading2, setLoading2] = useState(true);

  const setting = () => {
    deleteCookie("WuZiK");
    location.replace("/dashboard/setting");
  };

  const showElanContent = (data) => {
    setOpen3(true);
    setDataNotifShow(data);
  };

  const showHelp = (data) => {
    setOpen4(true);
  };

  useEffect(() => {
    setTimeout(() => setLoadingShow("hidden"), 4000);

    const getCookies = getCookie("WuZiK");

    if (!getCookies) {
      location.replace("/auth/login");
    } else {
      fetch(baseUrl("/auth/get-user-data"), {
        method: "GET",
        headers: { Authorization: `Bearer ${getCookies}` },
      })
        .then((response) => response.json())
        .then(async (data) => {
          if (!data.user) {
            location.replace("/auth/login");
          } else {
            await setUserDataAll({
              ...userDataAll,
              lastName: data.user.lastName,
              name: data.user.name,
              company: !data.user.company ? "" : data.user.company,
              email: data.user.email,
              activePlan: data.user.activePlan,
              activePlanLenght: data.user.activePlanLenght,
              activePlanExpireTime: data.user.activePlanExpireTime,
              activePlanName: data.user.activePlanName,
              joinDate: data.user.createDate,
              accessUser: data.customer ? "10" : data.user.access,
            });

            setCookie("X0*_m", data.user._id, {
              maxAge: 24 * 60 * 60,
              path: "/",
            });

            // setCookie("X!O_P", data.user.access, {
            //   maxAge: 24 * 60 * 60,
            //   path: "/",
            // });
            const getSecondFromMili =
              parseInt(data.user.activePlanExpireTime - new Date().getTime()) *
              0.001;

            const getMinFromMili = parseInt(getSecondFromMili * 0.016);
            const getHoursFromMili = parseInt(getMinFromMili * 0.016);
            const getDayFromMili = parseInt(getHoursFromMili * 0.0416);
            setIsPremiumLenght(getDayFromMili);

            if (getDayFromMili <= 0) {
              setIsPremium(true);
            }
          }
        });

      fetch(baseUrl("/fy/get"), {
        method: "GET",
        headers: { Authorization: `Bearer ${getCookies}` },
      })
        .then((response) => response.json())
        .then((data) => {
          !data.data ? setData([]) : setData(data.data.dataGet);
        });

      fetch(baseUrl("/search/get"), {
        method: "GET",
        headers: { Authorization: `Bearer ${getCookies}` },
      })
        .then((response) => response.json())
        .then((data) => {
          !data.data ? setSearchMenu([]) : setSearchMenu(data.data.dataGet);
        });
    }
  }, [loadingShow]);

  // const getDataNotifAuto = () => {
  //   const getCookies = getCookie("WuZiK");

  //   fetch(baseUrl("/auth/get-notif"), {
  //     method: "GET",
  //     headers: { Authorization: `Bearer ${getCookies}` },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       !data.data ? setDataNotif([]) : setDataNotif(data.data.dataGet);
  //     });
  // };

  // useEffect(() => {
  //   // const getIdChat = getCookie("XopL");
  //   setTimeout(() => getDataNotifAuto, 4000);
  // }, [dataNotif]);

  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/auth/get-notif"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataNotif([]) : setDataNotif(data.data.dataGet);
      });
  }, []);

  const items2 = [
    {
      key: "1",
      label: (
        <span className="flex border-b border-b-[#f1f1f1] w-full h-[50px] justify-between items-center">
          <span className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-[var(--color-blue)]  w-10 rounded-full ">
                <span className="text-lg text-white font-bold">
                  {userDataAll.name.slice(0, 1)}
                </span>
              </div>
            </div>
            <span className="text-[15px] truncate text-black">
              {userDataAll.name} {userDataAll.lastName}
            </span>
          </span>
          <Logout01Icon
            onClick={logout}
            className="cursor-pointer"
            size={"1.3rem"}
          />
        </span>
      ),
    },

    {
      key: "3",
      label:
        userDataAll.accessUser == "1" ? (
          <a href="/dashboard/setting" className="w-full cursor-pointer">
            <span className="flex border-b w-full border-b-[#f1f1f1] h-[50px] justify-between items-center">
              <span className="flex w-full items-center gap-3">
                <Setting06Icon className="text-black" />
                <span className="text-[15px] truncate text-black">تنظیمات</span>
              </span>
              <span>
                <ArrowLeft01Icon size={"1.5rem"} />
              </span>
            </span>
          </a>
        ) : (
          ""
        ),
    },
    // {
    //   key: "4",
    //   label:
    //     <a href="/dashboard/editprofile" className="w-full cursor-pointer">
    //       <span className="flex border-b w-full border-b-[#f1f1f1] h-[50px] justify-between items-center">
    //         <span className="flex w-full items-center gap-3">
    //           <Edit01Icon className="text-black" />
    //           <span className="text-[15px] truncate text-black">
    //             ویرایش پروفایل
    //           </span>
    //         </span>
    //         <span>
    //           <ArrowLeft01Icon size={"1.5rem"} color="#000" />
    //         </span>
    //       </span>
    //     </a>
    //   ,
    // },
    {
      key: "5",
      label: (
        <span
          onClick={logout}
          className="flex w-full h-[50px] justify-between items-center"
        >
          <span className="flex w-full items-center gap-3">
            <Logout02Icon className="text-black" />
            <span className="text-[15px] truncate text-black">
              خروج از حساب
            </span>
          </span>
          <span>
            <ArrowLeft01Icon size={"1.5rem"} color="#000" />
          </span>
        </span>
      ),
    },
  ];

  const menu = <Menu items={items2} />;

  const [menuKey, setMenuKey] = useState("");

  const [data, setData] = useState([]);
  const [dateShow, setDateShow] = useState("");

  //router
  // const router = useRouter();
  // const routerPath = usePathname();
  // let alertPackage;

  useEffect(() => {
    //url tab select

    fetch("https://api.keybit.ir/time/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then(async (data) => {
        const dataTime =
          data.date.weekday.name +
          " " +
          data.date.day.number.fa +
          " " +
          data.date.month.name +
          " " +
          data.date.year.number.fa;
        setDateShow(dataTime);
      });
  }, []);

  const itemsBot = [
    {
      type: "divider",
    },
    {
      key: "21",
      icon: <LuLifeBuoy size={"1.2rem"} />,
      label: "پشتیبانی",
    },
    {
      key: "28",
      icon: (
        <span onClick={setting}>
          <LuSettings size={"1.2rem"} />
        </span>
      ),

      label: <span onClick={setting}>تنظیمات</span>,
    },
    {
      key: "22",
      icon: (
        <span onClick={logout}>
          <LuLogOut size={"1.2rem"} />
        </span>
      ),
      label: <span onClick={logout}>خروج از حساب</span>,
    },
  ];

  return (
    <>
      <div
        className={`z-[9999999] transition-all duration-300 fixed top-0 bottom-0 left-0 right-0 bg-white ${loadingShow} justify-center items-center`}
      >
        <div className="w-full animate-bounce flex justify-center items-center gap-3">
          <span>
            <Image src={TopImage} className="w-24 " />
          </span>
          <span className="font-bold text-xl   text-[var(--color-green)] flex justify-center items-center">
            افراپرداز ، مدیریت یکپارچه رشد بی پایان
          </span>
        </div>
      </div>
      <div className="w-full  relative flex flex-col gap-3">
        {showMenuFast ? (
          <div className="w-[200px] transition-all duration-300 p-4 absolute h-[300px] bg-white top-[80px] left-[10.7rem] z-[99999999] ">
            <div className="w-full h-full flex flex-col gap-3 ">
              <span className="flex border-b border-b-gray-700 h-[50px] justify-between items-center">
                <span className="flex items-center gap-3 text-white font-bold">
                  دسترسی سریع
                </span>
                <span
                  className=" cursor-pointer"
                  onClick={() => setShowMenuFast(false)}
                >
                  <IoIosClose size={"1.7rem"} color="#fff" />
                </span>
              </span>
              <span className="flex border-b border-b-gray-700 h-[50px] justify-between items-center">
                <span className="flex w-full items-center gap-3">
                  <a href="/dashobard/visitors/addVisitor">
                    <span className="text-[15px] truncate text-white">
                      افزودن کارشناس
                    </span>
                  </a>
                </span>
              </span>
              <span className="flex border-b border-b-gray-700 h-[50px] justify-between items-center">
                <span className="flex w-full items-center gap-3">
                  <a href="/dashobard/contacts">
                    <span className="text-[15px] truncate text-white">
                      افزودن مخاطب
                    </span>
                  </a>
                </span>
              </span>
              <span className="flex border-b border-b-gray-700 h-[50px] justify-between items-center">
                <span className="flex w-full items-center gap-3">
                  <span className="text-[15px] truncate text-white">
                    افزودن معاملات
                  </span>
                </span>
              </span>
              <span className="flex h-[50px] justify-between items-center">
                <span className="flex w-full items-center gap-3">
                  <a href="/dashobard/tasks/addTask">
                    <span className="text-[15px] truncate text-white">
                      افزودن وظیفه
                    </span>
                  </a>
                </span>
              </span>
            </div>
          </div>
        ) : (
          ""
        )}

        <div
          className={` flex  ${collapsed ? "w-[95%]" : "w-[84%]"} mr-auto shadow-sm bg-white h-[80px]`}
        >
          <div className="w-full h-full pr-[0.9rem] pl-8 flex gap-3 justify-between items-center">
            <span className="flex w-fit px-3 gap-5 items-center">
              <span>
                <Image src={TopImage} className="w-40" />
              </span>
              {/* {userDataAll.accessUser == "1" ? (
                <span className="-mt-3 w-[300px] relative flex gap-3 items-center">
                  <InputCom
                    type={"req"}
                    onChenge={(e) => {
                      if (e.target.value == "") {
                        setShowSearch(false);
                      }
                      setShowSearch(true);
                      setSearchQuery(e.target.value);
                    }}
                    placeholder={"جستجو در سامانه ..."}
                  />
                  {showSearch ? (
                    <span
                      onClick={() => setShowSearch(false)}
                      className="mt-3 cursor-pointer hover:text-[var(--color-green)]"
                    >
                      <CloseCircleOutlined />
                    </span>
                  ) : (
                    ""
                  )}

                  {showSearch ? (
                    <div className=" absolute top-16 z-[99999999] bg-white w-[270px] h-[300px] border border-zinc-300 overflow-auto section-layout rounded-lg">
                      {searchMenu
                        .filter((k) => k.name.includes(searchQuery))
                        .map((i) => (
                          <a href={i.link}>
                            {" "}
                            <span className="w-full px-4 py-2 text-black hover:text-white cursor-pointer hover:bg-[var(--color-green)] transition-all duration-300  h-[60px] flex justify-between items-center border-b border-b-zinc-300">
                              <span>{i.name}</span>
                              <span>
                                <ArrowLeft01Icon />
                              </span>
                            </span>{" "}
                          </a>
                        ))}
                    </div>
                  ) : (
                    ""
                  )}
                </span>
              ) : (
                ""
              )} */}
            </span>
            {/* <span className="text-sm w-[9%]">{dateShow}</span> */}
            <div className="flex items-center justify-end gap-3">
              <span
                className={`w-fit px-3 h-10 flex justify-center items-center hover:scale-95 hover:text-white transition-all duration-300 cursor-pointer text-white rounded-full  ${userDataAll.accessUser == "1" ? "bg-[var(--color-green)]" : "bg-[var(--color-green)]"} `}
              >
                {dateShow}
              </span>

              <span
                onClick={showHelp}
                className="w-10 h-10 flex justify-center items-center hover:scale-95 hover:text-white transition-all duration-300 cursor-pointer text-white rounded-full bg-[var(--color-blue)]"
              >
                <HelpSquareIcon size={"1.2rem"} />
              </span>
              <span
                onClick={() => setOpen2(true)}
                className=" relative w-10 h-10 flex justify-center items-center hover:scale-95 hover:text-white transition-all duration-300 cursor-pointer text-white rounded-full bg-[var(--color-green)]"
              >
                <Notification02Icon size={"1.2rem"} />
                <span className="w-2 h-2 bg-green-700 rounded-full absolute top-0 right-0 animate-ping"></span>
              </span>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <div className=" w-fit px-2 justify-end gap-2 flex  items-center cursor-pointer">
                    <div className="w-5 h-5 border rounded-full flex justify-center items-center">
                      <LuChevronDown size={"1.9rem"} color="#000" />
                    </div>
                    <span className="text-[15px] w-full truncate text-black">
                      {userDataAll.name} {userDataAll.lastName}
                    </span>
                    <div className="avatar placeholder">
                      <div className="bg-[var(--color-blue)]  w-10 rounded-full ">
                        <span className="text-lg text-white font-bold">
                          {userDataAll.name.slice(0, 1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-3 h-full px-3 pb-3">
          {/* Sidebar */}
          <div
            className={`xl:flex border-l border-l-zinc-300 lg:flex md:hidden sm:hidden ${
              collapsed ? "w-[5%]" : "w-[16%]"
            } absolute top-0 right-0 bottom-0 transition-all duration-300 h-full flex justify-center items-center`}
          >
            <div className="w-full overflow-auto section-layout h-full flex flex-col py-0 bg-[var(--color-blue)]">
              <div className="px-1 w-full flex flex-col justify-center items-baseline">
                {/* ارسال props به Header2 */}
                <Header2
                  sidebar={sidebar}
                  sideBarBtn={sideBarBtn}
                  hideText={hideText}
                  clickSide={toggleCollapsed}
                  sideBarRaduis={sideBarRaduis}
                  sideBarJustify={sideBarJustify}
                  sideBarEleman={sideBarEleman}
                  sideBarPadding={sideBarPadding}
                  userAccess={userDataAll.accessUser}
                />
              </div>
            </div>
            <div
              className={`${collapsed ? "hidden" : "show"} border-t border-t-[var(--color-blue-bc-border)] flex px-3 justify-between bg-[var(--color-blue)] gap-3 w-full absolute bottom-0 py-4 text-center mt-auto text-[12px] text-zinc-400`}
            >
              <span className="w-1/2 text-[13px] flex gap-3 justify-start items-center">
                <a href="https://instagram.com/afrapardaz">
                  <InstagramIcon className="hover:text-[var(--color-green)] cursor-pointer hover:scale-95 transition-all" />
                </a>
                <a href="https://t.me/afrapardaz">
                  <TelegramIcon className="hover:text-[var(--color-green)] cursor-pointer hover:scale-95 transition-all" />
                </a>
                <TwitterIcon className="hover:text-[var(--color-green)] cursor-pointer hover:scale-95 transition-all" />
                <WhatsappIcon className="hover:text-[var(--color-green)] cursor-pointer hover:scale-95 transition-all" />
              </span>
              <span className="text-[13px] w-1/2 flex items-center justify-end">
                <span>Beta version : 0.2.1</span>
              </span>
            </div>
          </div>

          {/* محتوای اصلی */}
          {collapsed ? (
            <div className="w-[95%] transition-all rounded-2xl  absolute top-[80px] left-0 bottom-0 h-[95%] duration-300 mr-auto overflow-auto section-layout">
              {child}
            </div>
          ) : (
            <>
              <div className="w-[84%]  transition-all duration-300  mr-auto absolute top-[80px] left-0 bottom-0 h-[99%] overflow-auto section-layout">
                {/* <div className="absolute -top-[0.55rem] right-[-0.10rem] border-t border-t-zinc-300 border-r border-r-zinc-300 rounded-tr-lg w-10 h-10 bg-[#F5F6FA]"></div> */}
                {child}
              </div>
            </>
          )}
        </div>
      </div>

      <Modal
        title={
          <div className="w-full flex justify-between ">
            <p>اعلانات و پیام ها</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3">
            <ButtonAfra
              onClick={() => setOpen2(false)}
              type={"green"}
              text={"بستن"}
            />
          </div>
        }
        open={open2}
        onCancel={() => setOpen2(false)}
      >
        <div className="w-full  overflow-auto section-layout flex flex-col gap-5 justify-center items-center">
          <div role="tablist" className="tabs w-full grid-cols-3 tabs-bordered">
            <input
              type="radio"
              name="my_tabs_not"
              role="tab"
              className="tab w-full"
              aria-label="همه"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content px-3 py-3">
              <div className="w-full flex flex-col gap-5 justify-center items-center divide-y  h-[350px] overflow-auto section-layout">
                {dataNotif.length == 0 ? (
                  <div className="w-full flex flex-col gap-3 justify-center items-center">
                    <Image src={ImageNotFound} className="w-52 mx-auto" />
                    <span className="text-[var(--color-blue)] font-bold text-lg">
                      موردی وجود ندارد
                    </span>
                  </div>
                ) : (
                  dataNotif
                    .slice(-5)
                    .reverse()
                    .map((i) => (
                      <div className="w-full h-[70px]  flex justify-between items-center">
                        <div className="flex justify-start items-center gap-3">
                          <span className="w-8 h-8 flex justify-center items-center bg-orange-300 rounded-full">
                            <Message01Icon color="#fff" size={"1.2rem"} />
                          </span>
                          <span className="text-black font-bold text-sm">
                            {i.nameElan}
                          </span>
                        </div>
                        <div
                          onClick={() => showElanContent(i)}
                          className=" cursor-pointer flex gap-3 items-center"
                        >
                          <span className="text-[12px] text-blue-500">
                            مشاهده
                          </span>
                          <span className="text-[12px] text-blue-500">
                            <ArrowLeft01Icon size={"18px"} />
                          </span>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
            <input
              type="radio"
              name="my_tabs_not"
              role="tab"
              className="tab w-full"
              aria-label="اعلان ها"
            />
            <div role="tabpanel" className="tab-content px-3 py-3">
              <div className="w-full flex flex-col gap-5 justify-center items-center divide-y h-[350px] overflow-auto section-layout">
                {dataNotif.length == 0 ? (
                  <div className="w-full flex flex-col gap-3 justify-center items-center">
                    <Image src={ImageNotFound} className="w-52 mx-auto" />
                    <span className="text-[var(--color-blue)] font-bold text-lg">
                      موردی وجود ندارد
                    </span>
                  </div>
                ) : (
                  dataNotif
                    .slice(-5)
                    .reverse()
                    .map((i) => (
                      <div className="w-full h-[70px]  flex justify-between items-center">
                        <div className="flex justify-start items-center gap-3">
                          <span className="w-8 h-8 flex justify-center items-center bg-orange-300 rounded-full">
                            <Message01Icon color="#fff" size={"1.2rem"} />
                          </span>
                          <span className="text-black font-bold text-sm">
                            {i.nameElan}
                          </span>
                        </div>
                        <div
                          onClick={() => showElanContent(i)}
                          className=" cursor-pointer flex gap-3 items-center"
                        >
                          <span className="text-[12px] text-blue-500">
                            مشاهده
                          </span>
                          <span className="text-[12px] text-blue-500">
                            <ArrowLeft01Icon size={"18px"} />
                          </span>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        title={
          <div className="w-full flex gap-3 ">
            <p>اعلان و اطلاع رسانی</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3">
            <ButtonAfra
              onClick={() => setOpen3(false)}
              type={"green"}
              text={"بستن"}
            />
          </div>
        }
        open={open3}
        onCancel={() => setOpen3(false)}
      >
        <div className="w-full flex flex-col gap-3">
          <div className="text-lg font-bold">محتوای اعلان</div>
          <div className="text-[12px] font-normal text-zinc-500">
            محتوای اعلان را مشاهده کنید
          </div>

          <InputCom
            type={"dis"}
            placeholder={"نام اعلان : " + dataNotifShow.nameElan}
          />
          <InputCom
            type={"textareaDis"}
            row={5}
            col={5}
            placeholder={"متن اعلان : " + dataNotifShow.contentElan}
          />
        </div>
      </Modal>

      <Modal
        title={
          <div className="w-full flex gap-3 ">
            <p>نحوه و آموزش استفاده</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3">
            <ButtonAfra
              onClick={() => setOpen4(false)}
              type={"green"}
              text={"بستن"}
            />
          </div>
        }
        open={open4}
        onCancel={() => setOpen4(false)}
      >
        <div className="w-full flex flex-col gap-3">
          {/* <div className="text-lg font-bold">نحوه استفاده</div> */}
          <div className="text-[12px] font-normal text-zinc-500">
            افراپرداز چیست؟ چگونه استفاده کنیم؟
          </div>
          <div className="mt-3 rounded-lg overflow-hidden relative flex justify-center items-center w-full h-[300px]">
            <div className="h_iframe-aparat_embed_frame w-full h-full">
              <span className="block pt-[57%]"></span>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/nen90n1/vt/frame?titleShow=true&recom=self"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HeaderDashboard;
