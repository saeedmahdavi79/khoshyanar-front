"use client";
import CardStat from "@/app/components/modules/Card";
import { Card, Tag } from "antd";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import ButtonAfra from "@/app/components/modules/Buttons";
import { LuChevronLeft } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { BarChart } from "@mui/x-charts/BarChart";

import { useRouter } from "next/navigation";
import Link from "next/link";
import InputCom from "@/app/components/modules/Inputs";
import MyCalendar from "@/app/components/modules/Kanban";
import Image from "next/image";

import Task1 from "../../../../../public/image/task1.png";
import Task2 from "../../../../../public/image/task2.png";
import Task3 from "../../../../../public/image/task3.png";
import StatusImg from "../../../../../public/image/status.png";
import StatusImg2 from "../../../../../public/image/status2.png";

import { Button, notification, Modal } from "antd";
import SelectCombo from "@/app/components/modules/SelectCombo";
import jalali_to_gregorian from "@/utils/jalaliConverter";

const tasksPage = () => {
  const [data, setData] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const [typeUser, setTypeUser] = useState("1");

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "ثبت موفق بود",
      description: "ثبت داده با موفقیت انجام شد",
    });
  };
  const openNotificationWithIcon2 = (type) => {
    api[type]({
      message: "ثبت ناموفق بود",
      description: "ثبت داده با مشکل مواجه شد",
    });
  };

  //detail modal

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  //delete Modal

  const [open2, setOpen2] = useState(false);
  const [loading2, setLoading2] = useState(true);

  const router = useRouter();
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/task/get-admin"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setData([]) : setData(data.data.mergedData)
      );
  }, []);

  const [showName, setShowName] = useState(true);
  const [showPersonel, setPersonel] = useState(false);
  const [showLeave, setLeave] = useState(false);
  const [handleActive, setHandleActive] = useState("sub-menu-active");
  const [handleActive2, setHandleActive2] = useState("sub-menu-deactive");
  const [handleActive3, setHandleActive3] = useState("sub-menu-deactive");

  const handleShowName = () => {
    setShowName(true);
    setPersonel(false);
    setLeave(false);
    setHandleActive("sub-menu-active");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
  };

  const handleShowPersonel = () => {
    setShowName(false);
    setPersonel(true);
    setLeave(false);
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-active");
    setHandleActive3("sub-menu-deactive");
  };

  const handleShowLeave = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(true);
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-active");
  };

  const [nameTask, setNameTask] = useState("");
  const [personName, setPersonName] = useState("");

  const [dateTask, setDateTask] = useState("");
  const [desTask, setDesTask] = useState("");
  const [idTask, setIdTask] = useState("");
  const [showLoad, setShowLoad] = useState(false);
  const [showLoad2, setShowLoad2] = useState(false);
  const [showLoad3, setShowLoad3] = useState(false);


  const getCookieAccess = getCookie("UiS");



  const showDetail = (tasks) => {
    setNameTask(tasks.taskTitle);
    setDateTask(tasks.targetDate);
    setDesTask(tasks.taskDes);
    setIdTask(tasks._id);
    setOpen(true);
    setLoading(true);
    if (tasks.personelUser) {
      setPersonName(tasks.personelUserName);
    } else {
      setPersonName("");
    }
    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const showDelete = (_id) => {
    setShowLoad(true);
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/task/remove"), {
      method: "DELETE",
      body: JSON.stringify({ _id }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          setShowLoad(false);
          setOpen2(true);

          setOpen(false);
          refreshData();
        }
      });
  };

  const [dataTasks, setDataTasks] = useState({
    taskTitle: "",
    targetDate: "",
    taskDes: "",
    taskStatus: "",
    expiresIn: "",
    taskId: "",
  });

  const changeHandler = (e) => {
    if (e.value) {
      setDataTasks({ ...dataTasks, taskStatus: e.label, taskId: e.value });
    } else {
      setDataTasks({ ...dataTasks, [e.target.name]: e.target.value });
    }
  };

  const calanderHandler = async (e) => {
    let fullDate = await (e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD);
    setDataTasks({
      ...dataTasks,
      targetDate: fullDate.toString(),
      expiresIn: new Date(
        jalali_to_gregorian(e.$jy, e.$jM + 1, e.$jD)
      ).getTime(),
    });
  };

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");
    setShowLoad2(true);
    try {
      if (
        !dataTasks.taskTitle &&
        !dataTasks.targetDate &&
        !dataTasks.taskDes &&
        !dataTasks.taskStatus
      ) {
        setShowLoad2(false);

        openNotificationWithIcon2("error");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/task/create-admin"), {
            method: "POST",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataTasks),
          });

          const getResponses = await postDatas.json();

          if (getResponses.status == 202) {
            openNotificationWithIcon("success");
            setShowLoad2(false);
             refreshData();
            
          } else {
            openNotificationWithIcon2("error");
            setShowLoad2(false);
          }
        } catch (error) {}
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshData = () => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/task/get-admin"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setData([]) : setData(data.data.mergedData)
      );
  };

  const [dataPersonelApp, setDataPersonelApp] = useState([]);

  useEffect(() => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-personel"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data
          ? setDataPersonelApp([])
          : setDataPersonelApp(data.data.dataGet)
      );
  }, []);

  const [dataTasksOther, setDataTasksOther] = useState({
    taskTitle: "",
    targetDate: "",
    taskDes: "",
    taskStatus: "",
    expiresIn: "",
    taskId: "",
    personelUser: "",
  });

  const changeHandler2 = (e) => {
    if (e.value) {
      setDataTasksOther({
        ...dataTasksOther,
        taskStatus: e.label,
        taskId: e.value,
      });
    } else {
      setDataTasksOther({ ...dataTasksOther, [e.target.name]: e.target.value });
    }
  };

  const changeHandlerShakhs = (e) => {
    setDataTasksOther({ ...dataTasksOther, personelUser: e.value });
  };

  const calanderHandler2 = async (e) => {
    let fullDate = await (e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD);
    setDataTasksOther({
      ...dataTasksOther,
      targetDate: fullDate.toString(),
      expiresIn: new Date(
        jalali_to_gregorian(e.$jy, e.$jM + 1, e.$jD)
      ).getTime(),
    });
  };

  const sendDataToServerOther = async () => {
    const getCookiess = await getCookie("WuZiK");
    setShowLoad3(true);

    try {
      if (
        !dataTasksOther.taskTitle ||
        !dataTasksOther.targetDate ||
        !dataTasksOther.taskDes ||
        !dataTasksOther.taskStatus
      ) {
        setShowLoad3(false);

        openNotificationWithIcon2("error");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/task/create-task-other"), {
            method: "POST",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataTasksOther),
          });

          const getResponses = await postDatas.json();

          if (getResponses.status == 202) {
            openNotificationWithIcon("success");
            setShowLoad3(false);
            refreshData();
          } else {
            openNotificationWithIcon2("error");
            setShowLoad3(false);
          }
        } catch (error) {}
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [open3, setOpen3] = useState(false);
  const [loading3, setLoading3] = useState(true);
  const [dateEvent, setDateEvent] = useState("");
  const [showLoad4, setShowLoad4] = useState(false);
  const [events, setEvents] = useState([]);

  const [appEvent, setAppEvent] = useState({
    color: "",
    end: "",
    start: "",
    title: "",
  });

  const onDateSelect = (date) => {
    const selectedDate = date.$jy + "-" + date.$jM + "-" + date.$jD;
    setDateEvent(selectedDate);
    setOpen3(true);
    setLoading3(true);
    setAppEvent({ ...appEvent, end: selectedDate });

    setTimeout(() => {
      setLoading3(false);
    }, 2000);
  };

  const changeHandlerEvent = (e) => {
    if (e.value) {
      setAppEvent({
        ...appEvent,
        color: e.value,
      });
    } else {
      setAppEvent({ ...appEvent, [e.target.name]: e.target.value });
    }
  };

  const addEvent = () => {
    setShowLoad4(true);
    const token = getCookie("WuZiK");
    fetch(baseUrl("/calender/create"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appEvent),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIcon("success");
          setShowLoad4(false);
        } else {
          openNotificationWithIcon2("error");
          setShowLoad4(false);
        }
      });
  };

  useEffect(() => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/calender/get-admin-event"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setEvents([]) : setEvents(data.data.mergedData)
      );
  }, []);

  return (
    <>
      <div className="w-full flex flex-col  h-full px-6 gap-4 py-1">
        <div className="w-full flex justify-between items-center">
          <span className="text-black text-3xl py-6 font-bold">
            وظایف و کانبان
          </span>
          <span className="w-[200px]">
            <a href="/dashboard/ticket">
              <ButtonAfra type={"green"} text={"پشتیبانی"} />
            </a>
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
                وظایف
                <LuChevronLeft />
              </span>
              <span
                onClick={handleShowPersonel}
                className={`w-full cursor-pointer p-2 ${handleActive2} flex justify-between items-center rounded-lg`}
              >
                کانبان چارت
                <LuChevronLeft />
              </span>
            </div>
          </div>
          <div className="w-4/5">
            {showName ? (
              <CardStat
                type={"10"}
                title={"مدیریت وظایف"}
                des={"وظایف های خود را در این بخش ببینید"}
                data={
                  <>
                    <div
                      role="tablist"
                      className="tabs w-full grid-cols-7 tabs-bordered"
                    >
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="لیست وظایف در جریان"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-10 gap-3">
                          {data.map((tasks) =>
                            tasks.taskId == "1" ? (
                              <div
                                onClick={() => showDetail(tasks)}
                                className="w-full relative flex hover:scale-95 duration-300 transition-all cursor-pointer"
                              >
                                <span className=" absolute top-0 bottom-0 left-0 right-0 w-full">
                                  <Image src={Task1} className="w-full" />
                                </span>
                                <span className=" absolute top-20 right-2 text-black font-bold text-[14px] w-full truncate">
                                  {tasks.taskTitle}
                                </span>
                                <span className=" absolute top-[6.5rem] right-2 text-zinc-400 text-[14px] w-full truncate">
                                  {tasks.targetDate}
                                </span>
                              </div>
                            ) : (
                              ""
                            )
                          )}
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="لیست وظایف انجام شده"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-10 gap-3">
                          {data.map((tasks) =>
                            tasks.taskId == "2" ? (
                              <div
                                onClick={() => showDetail(tasks)}
                                className="w-full relative flex hover:scale-95 duration-300 transition-all cursor-pointer"
                              >
                                <span className=" absolute top-0 bottom-0 left-0 right-0 w-full">
                                  <Image src={Task3} className="w-full" />
                                </span>
                                <span className=" absolute top-20 right-2 text-black font-bold text-[14px] w-full truncate">
                                  {tasks.taskTitle}
                                </span>
                                <span className=" absolute top-[6.5rem] right-2 text-zinc-400 text-[14px] w-full truncate">
                                  {tasks.targetDate}
                                </span>
                              </div>
                            ) : (
                              ""
                            )
                          )}
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="لیست وظایف لغو شده"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-10 gap-3">
                          {data.map((tasks) =>
                            tasks.taskId == "3" ? (
                              <div
                                onClick={() => showDetail(tasks)}
                                className="w-full relative flex hover:scale-95 duration-300 transition-all cursor-pointer"
                              >
                                <span className=" absolute top-0 bottom-0 left-0 right-0 w-full">
                                  <Image src={Task2} className="w-full" />
                                </span>
                                <span className=" absolute top-20 right-2 text-black font-bold text-[14px] w-full truncate">
                                  {tasks.taskTitle}
                                </span>
                                <span className=" absolute top-[6.5rem] right-2 text-zinc-400 text-[14px] w-full truncate">
                                  {tasks.targetDate}
                                </span>
                              </div>
                            ) : (
                              ""
                            )
                          )}
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="افزودن وظیفه به خود"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-4 gap-3 items-end">
                          <InputCom
                            onChenge={changeHandler}
                            name={"taskTitle"}
                            type={"req"}
                            placeholder={"عنوان را وارد کنید"}
                          />
                          <InputCom
                            onChenge={calanderHandler}
                            name={"targetDate"}
                            type={"date"}
                            placeholder={"تاریخ تسک را وارد کنید"}
                          />
                          <InputCom
                            onChenge={calanderHandler}
                            name={"targetDate"}
                            type={"date"}
                            placeholder={"تاریخ تسک را وارد کنید"}
                          />
                          <InputCom
                            onChenge={changeHandler}
                            name={"taskDes"}
                            type={"req"}
                            placeholder={"توضیحات را وارد کنید"}
                          />

                          <SelectCombo
                            defaultValue={typeUser}
                            options={[
                              {
                                value: "1",
                                label: "در جریان",
                              },
                              {
                                value: "2",
                                label: "انجام شده",
                              },
                              {
                                value: "3",
                                label: "لغو شده",
                              },
                            ]}
                            name="taskStatus"
                            onChange={changeHandler}
                            placeholder={"وضعیت را انتخاب کنید"}
                          />

                          <ButtonAfra
                            showLoad={showLoad2}
                            onClick={sendDataToServer}
                            type={"green"}
                            text={"افزودن"}
                          />
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="افزودن وظیفه به دیگران"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-4 gap-3 items-end">
                          <InputCom
                            onChenge={changeHandler2}
                            name={"taskTitle"}
                            type={"req"}
                            placeholder={"عنوان را وارد کنید"}
                          />
                          <InputCom
                            onChenge={calanderHandler2}
                            name={"targetDate"}
                            type={"date"}
                            placeholder={"تاریخ تسک را وارد کنید"}
                          />
                          <InputCom
                            onChenge={calanderHandler2}
                            name={"targetDate"}
                            type={"date"}
                            placeholder={"تاریخ تسک را وارد کنید"}
                          />
                          <InputCom
                            onChenge={changeHandler2}
                            name={"taskDes"}
                            type={"req"}
                            placeholder={"توضیحات را وارد کنید"}
                          />

                          <SelectCombo
                            defaultValue={typeUser}
                            options={[
                              {
                                value: "1",
                                label: "در جریان",
                              },
                              {
                                value: "2",
                                label: "انجام شده",
                              },
                              {
                                value: "3",
                                label: "لغو شده",
                              },
                            ]}
                            name="taskStatus"
                            onChange={changeHandler2}
                            placeholder={"وضعیت را انتخاب کنید"}
                          />

                          <SelectCombo
                            options={dataPersonelApp.map((data) => ({
                              value: data._id,
                              label: data.name + " " + data.lastName,
                            }))}
                            name="personelUser"
                            onChange={changeHandlerShakhs}
                            placeholder={"شخص را انتخاب کنید"}
                          />

                          <ButtonAfra
                            showLoad={showLoad3}
                            onClick={sendDataToServerOther}
                            type={"green"}
                            text={"افزودن"}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            ) : (
              ""
            )}
            {showPersonel ? (
              <CardStat
                type={"10"}
                title={"کانبان چارت"}
                des={"رویداد ها و کانبان ها را در این بخش ببینید"}
                data={
                  <>
                    {/* <div className="w-full h-full flex flex-col gap-3">
                      <div className="w-full gap-5 flex justify-center items-center">
                        <div className="w-full gap-4 flex justify-start items-center">
                          <div className="w-[25%] flex justify-center items-center gap-3">
                            <span className="text-[14px] text-black">
                              تعداد وظایف
                            </span>
                            <span className="bg-[#e84e40] text-[#fff] text-[14px]  w-[24px] h-[32px] flex justify-center items-center">
                              0
                            </span>
                          </div>
                          <div className="pb-4">
                            <span>از تاریخ:</span>
                            <InputCom
                              legend={"نام"}
                              name={"name"}
                              type={"date"}
                              placeholder={"نام خود را وارد کنید"}
                            />
                          </div>
                          <div className="pb-5">
                            <span>تا تاریخ:</span>
                            <InputCom
                              legend={"نام"}
                              name={"name"}
                              type={"date"}
                              placeholder={"نام خود را وارد کنید"}
                            />
                          </div>
                          <button className="w-[70px] h-[30px] bg-[#8bc34a]  flex justify-center items-center hover:scale-95 transition-all duration-300">
                            <LuSearch className="text-[#fff] w-[15px] h-[15px]" />
                          </button>
                        </div>
                        <div className="w-full flex justify-center items-center gap-3">
                          <button className="w-full bg-[var(--color-slate-buttons)] text-[14px] text-[#fff] px-2 py-2 hover:scale-95 transition-all duration-300 border-2 border-[var-(--color-slate-buttons)] rounded-lg font-normal">
                            کل وظایف تا امروز 0
                          </button>
                          <button className="w-full bg-[var(--color-slate-buttons)] text-[14px] text-[#fff] px-2 py-2 hover:scale-95 transition-all duration-300 border-2 border-[var-(--color-slate-buttons)] rounded-lg font-normal">
                            لیست وظایف برای سمت ها
                          </button>
                        </div>
                      </div>
                      <div
                        dir="ltr"
                        className="w-full flex justify-center items-center"
                      >
                        <BarChart
                          series={[
                            {
                              data: [4, 2, 5, 4, 1],
                              stack: "A",
                              label: "Series A1",
                            },
                            {
                              data: [2, 8, 1, 3, 1],
                              stack: "A",
                              label: "Series A2",
                            },
                            { data: [14, 6, 5, 8, 9], label: "Series B1" },
                          ]}
                          barLabel={(item, context) => {
                            if ((item.value ?? 0) > 10) {
                              return "High";
                            }
                            return context.bar.height < 60
                              ? null
                              : item.value?.toString();
                          }}
                          labelStyle={{ fill: "black" }} // تغییر رنگ متن به سیاه
                          width={1100}
                          height={500}
                        />
                      </div>
                    </div> */}
                    <MyCalendar events={events} onChange={onDateSelect} />
                  </>
                }
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* Modal Show */}
      <Modal
        title={
          <div className="w-[90%] flex justify-between ">
            <p>اطلاعات تسک : {nameTask}</p>
            <p>{dateTask}</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3">
            {getCookieAccess == "1" ?             <ButtonAfra type={"blue-dark"} text={"ویرایش"} />
:""}
           {getCookieAccess == "1" ? <ButtonAfra
              onClick={() => showDelete(idTask)}
              type={"red"}
              text={"حذف"}
              showLoad={showLoad}
            />: ""}
            
            <ButtonAfra
              onClick={() => setOpen(false)}
              type={"green"}
              text={"بستن"}
            />
          </div>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        {/* <p>نام تسک : {nameTask}</p>
        <p>تاریخ تسک :</p>
        <p>توضیحات تسک :</p> */}

        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <span>
            <Image src={StatusImg} />
          </span>
          {personName != "" ? (
            <span className="text-lg font-bold">
              <span className="text-zinc-400 text-[12px]">محول شده به : </span>
              <span>{personName}</span>
            </span>
          ) : (
            ""
          )}
          <span className="text-lg font-bold">
            <span className="text-zinc-400 text-[12px]">نام تسک : </span>
            <span>{nameTask}</span>
          </span>
          <span className="text-sm text-zinc-600">
            <span className="text-zinc-400 text-[12px]">توضیحات تسک : </span>
            <span>{desTask}</span>
          </span>
        </div>
      </Modal>
      {/* Modal Delete */}
      <Modal
        title={
          <div className="w-full flex justify-between ">
            <p>نتیجه فرآیند</p>
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
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <span>
            <Image src={StatusImg2} />
          </span>
          <span className="text-lg font-bold">تسک حذف شد</span>
        </div>
      </Modal>
      {/* Modal Add */}
      <Modal
        title={
          <div className="w-[90%] flex justify-between ">
            <p>ثبت فعالیت </p>
            <p>{dateEvent}</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3">
            <ButtonAfra
              onClick={addEvent}
              type={"green"}
              showLoad={showLoad4}
              text={"ثبت"}
            />
            <ButtonAfra
              onClick={() => setOpen3(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={loading3}
        open={open3}
        onCancel={() => setOpen3(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">افزودن ایونت کاری</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش شما میتوانید بر اساس تقویم ایونت و جلسات خود را تنظیم
              کنید
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 w-full items-end">
            <div className="w-full gap-3 grid grid-cols-2 items-end">
              <InputCom
                name={"title"}
                onChenge={changeHandlerEvent}
                placeholder={"عنوان را وارد کنید"}
                type={"req"}
              />
              <SelectCombo
                onChange={changeHandlerEvent}
                placeholder={"انتخاب اهمیت"}
                options={[
                  {
                    value: "1",
                    label: "ضروری",
                  },
                  {
                    value: "2",
                    label: "مهم",
                  },
                  {
                    value: "3",
                    label: "معمولی",
                  },
                ]}
              />
            </div>

            <InputCom
              name={"start"}
              onChenge={changeHandlerEvent}
              placeholder={"توضیحات را وارد کنید"}
              type={"textarea"}
              row={5}
              col={5}
            />
          </div>
        </div>
      </Modal>

      {contextHolder}
    </>
  );
};

export default tasksPage;
