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
const addVisitor = () => {
  const [typeUser, setTypeUser] = useState("1");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام به ثبت نام در نرم افزار جامع مدیریت ارتباط مشتریان افرا کنید"
  );
  const [data, setData] = useState({
    visitorName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    nationalId: "",
    description: "",
    address: "",
  });

  const router = useRouter();

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");

    try {
      if (
        !data.visitorName &&
        !data.email &&
        !data.nationalId &&
        !data.password &&
        !data.phone &&
        !data.role
      ) {
        setIsOpen("true");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/visitor/create"), {
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
            setDialogDes("کارشناس با موفقیت به سیستم اضافه شد");
          }
        } catch (error) {
          console.log(error);
          setIsOpen(true);
          setDialogType("1");
          setDialogTitle("ثبت نا موفق");
          setDialogDes("اضافه کردن کارشناس با مشکل مواجه شد");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    if (e.value) {
      setData({ ...data, role: e.label });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
  
  
      <div className="flex gap-3 mt-6">
        <CardStat
          type={"3"}
          des={"افزودن کارشناس جدید به بخش بازاریابی و فروش سامانه شما"}
          title={"افزودن کارشناس جدید به سیستم"}
          data={
            <>
              <InputCom
                onChenge={changeHandler}
                name={"visitorName"}
                legend={"نام کارشناس"}
                type={"req"}
                placeholder={"نام کارشناس را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"email"}
                type={"req"}
                legend={"ایمیل کارشناس"}
                placeholder={"ایمیل کارشناس را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"phone"}
                type={"req"}
                legend={"تلفن همراه کارشناس"}
                placeholder={"تلفن همراه کارشناس را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"password"}
                type={"password"}
                legend={"رمز عبور کارشناس"}
                placeholder={"رمز عبور کارشناس را وارد کنید"}
              />
              <SelectCombo
                defaultValue={typeUser}
                options={[
                  {
                    value: "1",
                    label: "کارشناس فروش",
                  },
                  {
                    value: "3",
                    label: "کارشناس بازاریابی",
                  },
                  {
                    value: "4",
                    label: "کارشناس پشتیبانی",
                  },
                ]}
                name="role"
                onChange={changeHandler}
                legend={"نقش کارشناس"}
                placeholder={"نقش کارشناس را انتخاب کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"nationalId"}
                type={"req"}
                legend={"کد ملی کارشناس"}
                placeholder={"کد ملی کارشناس را وارد کنید"}
              />

              <InputCom
                onChenge={changeHandler}
                name={"description"}
                legend={"توضیحات کارشناس"}
                type={"req"}
                placeholder={"توضیحات کارشناس را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"address"}
                legend={"آدرس کارشناس"}
                type={"req"}
                placeholder={"آدرس کارشناس را وارد کنید"}
              />
              <ButtonAfra
                onClick3={sendDataToServer}
                type={"3"}
                text={"افزودن کارشناس"}
              />
              <ButtonAfra
                onClick={() => router.push("/dashboard")}
                type={"4"}
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

export default addVisitor;
