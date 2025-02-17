"use client";

import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import ButtonAfra from "@/app/components/modules/Buttons";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import DialogPopup from "@/app/components/modules/Dialog";

const singleLead = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { _id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام به ثبت نام در نرم افزار جامع مدیریت ارتباط مشتریان افرا کنید"
  );
  const [taskId1, setTaskId1] = useState("1");
  const [taskId2, setTaskId2] = useState("2");
  const [taskId3, setTaskId3] = useState("3");

  const [taskStatus1, setTaskStatus1] = useState("در جریان");
  const [taskStatus2, setTaskStatus2] = useState("انجام شده");
  const [taskStatus3, setTaskStatus3] = useState("لغو شده");

  //useeff
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/task/get-task-by-id-admin"), {
      method: "POST",
      body: JSON.stringify({ _id }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.data.dataGet[0]));
  }, []);

  const setStatusToInWork = async () => {
    try {
      const getCookies = getCookie("WuZiK");

      const getData = await fetch(baseUrl("/task/change-status"), {
        method: "PUT",
        body: JSON.stringify({ _id, taskId: taskId1, taskStatus: taskStatus1 }),
        headers: {
          Authorization: `Bearer ${getCookies}`,
          "Content-Type": "application/json",
        },
      });
      const getResponse = await getData.json();

      if (getResponse.status == 202) {
        setIsOpen(true);
        setDialogType("2");
        setDialogTitle("ویرایش موفق");
        setDialogDes("تسک با موفقیت ویرایش شد");
      }
    } catch (error) {
      setIsOpen(true);
    }
  };

  const setStatusToDone = async () => {
    try {
      const getCookies = getCookie("WuZiK");

      const getData = await fetch(baseUrl("/task/change-status"), {
        method: "PUT",
        body: JSON.stringify({ _id, taskId: taskId2, taskStatus: taskStatus2 }),
        headers: {
          Authorization: `Bearer ${getCookies}`,
          "Content-Type": "application/json",
        },
      });
      const getResponse = await getData.json();

      if (getResponse.status == 202) {
        setIsOpen(true);
        setDialogType("2");
        setDialogTitle("ویرایش موفق");
        setDialogDes("تسک با موفقیت ویرایش شد");
      }
    } catch (error) {
      setIsOpen(true);
    }
  };

  const setStatusToExpired = async () => {
    try {
      const getCookies = getCookie("WuZiK");

      const getData = await fetch(baseUrl("/task/change-status"), {
        method: "PUT",
        body: JSON.stringify({ _id, taskId: taskId3, taskStatus: taskStatus3 }),
        headers: {
          Authorization: `Bearer ${getCookies}`,
          "Content-Type": "application/json",
        },
      });
      const getResponse = await getData.json();

      if (getResponse.status == 202) {
        setIsOpen(true);
        setDialogType("2");
        setDialogTitle("ویرایش موفق");
        setDialogDes("تسک با موفقیت ویرایش شد");
      }
    } catch (error) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="w-full flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          عنوان وظیفه یا تسک : {!data.taskTitle ? "تنظیم نشده" : data.taskTitle}
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400  ">
          مشاهده اطلاعات وظیفه یا تسک
        </span>
      </div>
      <div className="w-full flex gap-3 mt-6">
        <CardStat
          type={"5"}
          title={`دریافت اطلاعات کامل تسک : ${
            !data.taskTitle ? "تنظیم نشده" : data.taskTitle
          }`}
          des={"اطلاعات کامل و شرح سرنخ بر اساس داده های موجود"}
          data={
            <>
              <div className="w-full gap-6 justify-center">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                  <InputCom
                    value={!data.taskTitle ? "تنظیم نشده" : data.taskTitle}
                    type={"dis"}
                    legend={"عنوان کامل"}
                  />
                  <InputCom
                    value={!data.taskDes ? "تنظیم نشده" : data.taskDes}
                    type={"dis"}
                    legend={"توضیحات"}
                  />
                  <InputCom
                    value={!data.taskStatus ? "تنظیم نشده" : data.taskStatus}
                    type={"dis"}
                    legend={"وضعیت"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.targetDate ? "تنظیم نشده" : data.targetDate}
                    legend={"تاریخ تسک"}
                  />

                 

                  <div className="flex gap-2 justify-center items-center">
                    <ButtonAfra
                      onClick={setStatusToDone}
                      type={"green-icon"}
                      text={"انجام شده"}
                      icon={<HiOutlineCheckCircle size={"1rem"} />}
                    />
                    <ButtonAfra
                      onClick={setStatusToInWork}
                      type={"blue-icon"}
                      text={"در جریان"}
                      icon={<HiOutlineArrowPathRoundedSquare size={"1rem"} />}
                    />
                    <ButtonAfra
                      onClick={setStatusToExpired}
                      type={"red-icon"}
                      text={"لغو کردن"}
                      icon={<HiMiniXMark size={"1rem"} />}
                    />
                  </div>

                  <ButtonAfra
                    onClick={() => router.push("/dashboard/tasks")}
                    type={"white"}
                    text={"بازگشت به لیست تسک ها"}
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
      <DialogPopup
        isOpen={isOpen}
        type={dialogType}
        title={dialogTitle}
        des={dialogDes}
        close={() => setIsOpen(false)}
      />
    </>
  );
};

export default singleLead;
