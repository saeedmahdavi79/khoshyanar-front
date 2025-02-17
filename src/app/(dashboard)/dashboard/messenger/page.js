"use client";
import { useEffect, useState } from "react";
import CardStat from "@/app/components/modules/Card";
import Link from "next/link";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { HiOutlineCube } from "react-icons/hi2";
import { HiOutlineBeaker } from "react-icons/hi2";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";

import ButtonAfra from "@/app/components/modules/Buttons";
import {
  Menu02Icon,
  Menu08Icon,
  Message02Icon,
  More01Icon,
  More02Icon,
  Profile02Icon,
  ProfileIcon,
  UserAccountIcon,
  UserAdd02Icon,
  UserCircle02Icon,
} from "hugeicons-react";
import { Tag } from "antd";
import baseUrl from "@/utils/baseUrl";
import { getCookie, setCookie } from "cookies-next";
import InputCom from "@/app/components/modules/Inputs";
import { MoreOutlined } from "@ant-design/icons";
import upUrl from "@/utils/upUrl";

const CustomerRegistration = () => {
  const router = useRouter();
  const [dataPersonelApp, setDataPersonelApp] = useState([]);
  const [dataChat, setDataChat] = useState([]);

  const [showFirstPage, setShowFirstPage] = useState(0);
  const [activButton, setActivButton] = useState(0);
  const [userData, setUserData] = useState("نام");
  const userName = getCookie("X0*_m");
  const token = getCookie("WuZiK");
  const [content, setContent] = useState("");
  const [sender, setSender] = useState(userName);
  const [receiver, setReceiver] = useState("");
  const menu = [{ title: "پیامرسان اختصاصی" }];

  useEffect(() => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-personel-chat"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setDataPersonelApp([])
          : setDataPersonelApp(data.data.dataGet);
      });
  }, []);

  const handleButton = (button) => {
    setActivButton(button);
    setShowFirstPage(button); // به‌روزرسانی showFirstPage
  };

  const searchHandler = (e) => {
    const filteredResults = dataPersonelApp.filter(
      (item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setDataPersonelApp(filteredResults);

    if (e.target.value == "" || !e.target.value) {
      const token = getCookie("WuZiK");
      fetch(baseUrl("/office/get-personel"), {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          !data.data
            ? setDataPersonelApp([])
            : setDataPersonelApp(data.data.dataGet);
        });
    }
  };

  const [dataUser, setDataUser] = useState(false);
  const [loadShow, setLoadShow] = useState(false);

  const [dataUserApp, setDataUserApp] = useState({});
  const [dataUserId, setDataUserId] = useState("");

  const showChat = (data) => {
    setReceiver(data._id);
    setDataUserApp(data);
    setDataUser(true);

    // setCookie("XopL", data._id, {
    //   maxAge: 24 * 60 * 60,
    //   path: "/",
    // });

    setCookie("XopL", data._id, {
      maxAge: 24 * 60 * 60,
      path: "/",
    });
    setDataChat([]);
    const token = getCookie("WuZiK");
    fetch(baseUrl("/auth/get-message"), {
      method: "POST",
      body: JSON.stringify({
        user1: userName,
        user2: data._id,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataChat([]) : setDataChat(data.data.dataGet);
      });
  };

  const chatSend = () => {
    //socket.emit("message", chatData);
    setLoadShow(true);
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/auth/create-message"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        sender,
        receiver,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          setLoadShow(false);
          showChatRefresh(data.receiver);
          setContent("");
        }
      });
  };

  const showChatRefresh = (data) => {
    // setChatData({ ...chatData, receiver: data });

    const token = getCookie("WuZiK");
    fetch(baseUrl("/auth/get-message"), {
      method: "POST",
      body: JSON.stringify({
        user1: userName,
        user2: data,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataChat([]) : setDataChat(data.data.dataGet);
      });
  };

  useEffect(() => {
    // const getIdChat = getCookie("XopL");
    showChatRefresh(getCookie("XopL"));
  }, [dataChat]);

  // const showChatRefreshAuto = async () => {
  //   // const HostId = await getCookie("XopL");
  //   // setChatData({ ...chatData, receiver: HostId });

  //   const token = getCookie("WuZiK");
  //   fetch(baseUrl("/auth/get-message"), {
  //     method: "POST",
  //     body: JSON.stringify({
  //       user1: userName,
  //       user2: receiver,
  //     }),
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       scrollToBottom();
  //       !data.data ? setDataChat([]) : setDataChat(data.data.dataGet);
  //     });
  // };

  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: "smooth",
  //   });
  // };

  // useEffect(() => {
  //   setInterval(() => showChatRefreshAuto(), 5000);
  // }, []);

  return (
    <>
      <div className="w-full flex flex-col h-full px-3 gap-4 py-1">
        {/* <div className="w-full flex justify-between items-center">
          <span className="relative text-black text-3xl py-6 font-bold">
            پیامرسان داخلی
            <span className="class-heading-4"></span>
            <span className="class-heading-5"></span>
            <span className="class-heading-6"></span>
          </span>
          <span className="w-[200px]">
            <a href="/dashboard/ticket">
              <ButtonAfra type={"green"} text={"پشتیبانی"} />
            </a>
          </span>
        </div> */}
        <div className="w-full flex gap-3 h-full">
          <div className="bg-white flex flex-col rounded-lg w-1/5 shadow-sm h-[calc(100%-5rem)] p-5 ">
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
                title={"پیامرسان اختصاصی"}
                des={"جهت ارتباط با اعضای شرکت از این بخش اقدام کنید"}
                data={
                  <>
                    <div className="w-full flex gap-3 h-full">
                      <div className="w-1/4 h-full overflow-auto border p-3 border-zinc-200 rounded-lg">
                        <div className="w-full py-2">
                          <InputCom
                            onChenge={searchHandler}
                            type={"req"}
                            placeholder={"جستجوی کاربر"}
                          />
                        </div>
                        {dataPersonelApp
                          .filter((item) => item._id !== userName)
                          .map((data) => (
                            <>
                              <div className="w-full h-fit py-2 items-center justify-between border-b border-b-zinc-200 flex gap-3">
                                <div className="flex gap-3 items-center">
                                  <span className="text-purple-500 bg-purple-100 font-bold rounded-full w-10 h-10 flex justify-center text-xl items-center">
                                    {data.name.slice(0, 1)}
                                  </span>
                                  <span className="text-[14px] w-[150px] truncate text-zinc-700">
                                    {data.name + " " + data.lastName}
                                  </span>
                                </div>
                                <span>
                                  <Tag
                                    color="green"
                                    className=" cursor-pointer"
                                    onClick={() => showChat(data)}
                                  >
                                    شروع
                                  </Tag>
                                </span>
                              </div>
                            </>
                          ))}
                      </div>

                      <div
                        className={`w-3/4 flex justify-center ${dataUser ? "items-start px-3 relative" : "items-center"} h-full overflow-auto border border-zinc-200 rounded-lg`}
                      >
                        {dataUser ? (
                          <>
                            <div className="w-full absolute top-0 flex border-b justify-between items-center px-3">
                              <div className="w-full h-[70px] flex gap-3 items-center">
                                <span className="text-purple-500 bg-purple-100 font-bold rounded-full w-10 h-10 flex justify-center text-xl items-center">
                                  {dataUserApp.name.slice(0, 1)}
                                </span>
                                <span className="text-zinc-700">
                                  {dataUserApp.name +
                                    " " +
                                    dataUserApp.lastName}
                                </span>
                              </div>
                              <div className="text-[25px] cursor-pointer">
                                <MoreOutlined />
                              </div>
                            </div>
                            <div className=" absolute top-[71px] overflow-auto w-full bottom-[66px] p-4">
                              <div className="w-full flex flex-col gap-3">
                                {dataChat.length == 0 ? (
                                  <>
                                    <div className=" absolute top-[40%] left-[40%]">
                                      در حال بارگزاری...
                                    </div>
                                  </>
                                ) : (
                                  dataChat
                                    // .filter((x) => x.sender == userName)
                                    .map((o) =>
                                      o.sender == userName ? (
                                        <span className="w-1/2 flex flex-col gap-3 bg-[var(--color-green)] h-fit p-3 rounded-t-lg rounded-bl-lg text-white">
                                          <span>{o.content}</span>
                                          <span className="text-[10px] mr-auto text-zinc-100">
                                            {o.createDate}
                                          </span>
                                        </span>
                                      ) : (
                                        <span className="w-1/2 flex flex-col gap-3 bg-[var(--color-gray-bc)] h-fit p-3 rounded-t-lg rounded-br-lg text-zinc-700 mr-auto">
                                          <span>{o.content}</span>
                                          <span className="text-[10px] mr-auto text-zinc-700">
                                            {o.createDate}
                                          </span>
                                        </span>
                                      )
                                    )
                                )}

                                {/* {dataChat
                                  .filter((x) => x.receiver == userName)
                                  .map((o) => (
                                    
                                  ))} */}
                              </div>
                            </div>
                            <div className="w-full absolute bottom-0 flex justify-between px-2 items-center border-t h-[65px]">
                              <input
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="متن خود را وارد کنید"
                                className="w-5/6 outline-none h-full bg-transparent"
                              />
                              <span className="w-[150px]">
                                <ButtonAfra
                                  showLoad={loadShow}
                                  type={"green"}
                                  onClick={chatSend}
                                  text={"ارسال"}
                                />
                              </span>
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col gap-3 items-center justify-center">
                            <div className="">
                              <Message02Icon size={"5rem"} color="#ff0041" />
                            </div>
                            <div>
                              <Tag
                                color="#ff0041"
                                className="p-2 rounded-lg text-[16px]"
                              >
                                برای شروع گفتگو یک کاربر را انتخاب کنید
                              </Tag>
                            </div>
                          </div>
                        )}
                      </div>
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
