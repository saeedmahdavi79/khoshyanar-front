"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useState } from "react";
import DialogPopup from "@/app/components/modules/Dialog";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import jalali_to_gregorian from "@/utils/jalaliConverter";
const addTask = () => {
  const [typeUser, setTypeUser] = useState("1");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام به ثبت نام در نرم افزار جامع مدیریت ارتباط مشتریان افرا کنید"
  );

  const [data, setData] = useState({
    taskTitle: "",
    targetDate: "",
    taskDes: "",
    taskStatus: "",
    expiresIn: "",
    taskId: "",
  });

  const router = useRouter();

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");

    try {
      if (
        !data.taskTitle &&
        !data.targetDate &&
        !data.taskDes &&
        !data.taskStatus
      ) {
        setIsOpen("true");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/task/create-admin"), {
            method: "POST",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const getResponses = await postDatas.json();

          if (getResponses.status == 202) {
            setIsOpen(true);
            setDialogType("2");
            setDialogTitle("ثبت موفق");
            setDialogDes("تسک با موفقیت به سیستم اضافه شد");
          }
        } catch (error) {
          console.log(error);
          setIsOpen(true);
          setDialogType("1");
          setDialogTitle("ثبت نا موفق");
          setDialogDes("اضافه کردن تسک با مشکل مواجه شد");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    if (e.value) {
      setData({ ...data, taskStatus: e.label, taskId: e.value });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const calanderHandler = async (e) => {
    let fullDate = await (e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD);
    setData({
      ...data,
      targetDate: fullDate.toString(),
      expiresIn: new Date(
        jalali_to_gregorian(e.$jy, e.$jM + 1, e.$jD)
      ).getTime(),
    });
  };

  return (
    <>
      <div className="w-full flex gap-2 sm:justify-center md:justify-start items-center">
        <span className="md:font-bold sm:font-[800] sm:text-[12px] md:text-[16px] text-[var(--color-slate-dark)] ">
          اضافه کردن وظیفه (تسک)
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="md:font-normal sm:font-[600] sm:text-[8px] md:text-[12px] text-gray-400  ">
          افزودن وظیفه (تسک) جدید به سامانه
        </span>
      </div>
      <div className="flex gap-3 mt-6">
        <CardStat
          type={"3"}
          des={"افزودن وظیفه (تسک) جدید به سامانه شما"}
          title={"افزودن وظیفه (تسک) جدید به سیستم"}
          data={
            <>
              <InputCom
                onChenge={changeHandler}
                name={"taskTitle"}
                legend={"مسئول تعیین تسک"}
                type={"req"}
                placeholder={"نام مسئول را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"taskTitle"}
                legend={"سمت"}
                type={"req"}
                placeholder={"سمت را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"taskTitle"}
                legend={"عنوان"}
                type={"req"}
                placeholder={"عنوان را وارد کنید"}
              />
              <InputCom
                onChenge={calanderHandler}
                name={"targetDate"}
                type={"date"}
                legend={"تاریخ تسک"}
                placeholder={"تاریخ تسک را وارد کنید"}
              />
              <InputCom
                onChenge={calanderHandler}
                name={"targetDate"}
                type={"date"}
                legend={"تاریخ سررسید"}
                placeholder={"تاریخ تسک را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"taskDes"}
                type={"req"}
                legend={"توضیحات"}
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
                legend={"وضعیت"}
                placeholder={"وضعیت را انتخاب کنید"}
              />
              

              <ButtonAfra
                onClick={sendDataToServer}
                type={"green"}
                text={"افزودن"}
              />
              <ButtonAfra
                onClick={() => router.push("/dashboard")}
                type={"white"}
                text={"بازگشت به داشبورد"}
              />
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

export default addTask;
