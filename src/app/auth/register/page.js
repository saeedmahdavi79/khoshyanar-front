"use client";
import Image from "next/image";
import UnderImage from "../../../../public/image/under.png";
import IconImage from "../../../../public/image/3-top.png";
import LogoImage from "../../../../public/image/logo.png";
import RegisterImage from "../../../../public/image/3-top.png";
import Shape1 from "../../../../public/image/shape1.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import InputCom from "../../components/modules/Inputs";
import ButtonAfra from "../../components/modules/Buttons";
import { useState } from "react";
import DialogPopup from "@/app/components/modules/Dialog";
import baseUrl from "@/utils/baseUrl";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useRouter } from "next/navigation";
import { bakh } from "@/utils/font";
import CardStat from "@/app/components/modules/Card";

import ImageLogo from "../../../../public/image/afrapardaz.png";

export default function Auth() {
  const [typeUser, setTypeUser] = useState("1");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام به ثبت نام در نرم افزار جامع مدیریت ارتباط مشتریان افرا کنید"
  );
  const [color, setColor] = useState("bg-[var(--color-blue-dark)] ");

  const [data, setData] = useState({
    email: "",
    password: "",
    company: "",
    name: "",
    lastName: "",
    type: "",
    phone: "",
  });
  const [textButton, setButtonText] = useState("ایجاد حساب");

  //router
  const router = useRouter();

  const handlerRegister = async () => {
    setButtonText("لطفا صبر کنید ...");
    try {
      if (
        data.email &&
        data.name &&
        data.lastName &&
        data.company &&
        data.password &&
        data.type &&
        data.phone
      ) {
        const sendData = await fetch(baseUrl("/auth/create"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const getResponse = await sendData.json();
        if (getResponse.status == 202) {
          setIsOpen(true);
          setDialogType("2");
          setDialogTitle("ثبت نام موفقیت آمیز بود");
          setDialogDes(
            "شما با موفقیت در نرم افزار جامع مدیریت ارتباط با مشتریان افرا ثبت نام کردید جهت ادامه وارد حساب کاربری خود شوید"
          );
          setButtonText("ایجاد حساب");
        }
        if (getResponse.status == 400) {
          setIsOpen(true);
          setDialogType("1");
          setDialogTitle("ثبت نام با مشکل مواجه شد");
          setDialogDes(getResponse.message);
          setButtonText("ایجاد حساب");
        }
        if (getResponse.status == 500) {
          setIsOpen(true);
          setDialogType("1");
          setDialogTitle("ثبت نام با مشکل مواجه شد");
          setDialogDes(getResponse.message);
          setButtonText("ایجاد حساب");
        }
      } else {
        setIsOpen(true);
      }
    } catch (error) {
      setIsOpen(true);
      setButtonText("ایجاد حساب");
    }
  };
  const changeHandler = (e) => {
    if (e.value) {
      setData({ ...data, type: e.value });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }

    // if (!e) {
    //   setData({ ...data, type: e.target.value });
    // } else {
    //   setData({ ...data, [e.target.name]: e.target.value });
    // }
  };
  return (
    <>
      {/* <div className="w-[70%] bg-white overflow-hidden justify-center mx-auto px-5 py-[7rem] flex items-center shadow-afra dashboard-layout content-center h-fit gap-5 rounded-[40px]">
        <div className="flex flex-col relative justify-center w-1/2 items-center gap-3">
          <div className="grid grid-cols-2 gap-6 w-full items-center">
            <InputCom
              onChenge={changeHandler}
              legend={"ایمیل "}
              name={"email"}
              type={"req"}
              placeholder={"ایمیل را وارد کنید"}
            />
            <InputCom
              onChenge={changeHandler}
              legend={"نام"}
              name={"name"}
              type={"req"}
              placeholder={"نام خود را وارد کنید"}
            />
            <InputCom
              onChenge={changeHandler}
              legend={"نام خانوادگی"}
              name={"lastName"}
              type={"req"}
              placeholder={"نام خانوادگی خود را وارد کنید"}
            />
            <InputCom
              onChenge={changeHandler}
              legend={"نام شرکت / سازمان"}
              name={"company"}
              type={"req"}
              placeholder={"نام شرکت یا سازمان  را وارد کنید"}
            />
            <InputCom
              onChenge={changeHandler}
              legend={"تلفن همراه"}
              name={"phone"}
              type={"req"}
              placeholder={"تلفن همراه را وارد کنید"}
            />
            <SelectCombo
              defaultValue={typeUser}
              options={[
                {
                  value: "1",
                  label: "کسب و کار پخش محصول",
                },
              ]}
              name="type"
              onChange={changeHandler}
              legend={"نوع کسب و کار"}
              placeholder={"کسب و کار پخش محصول"}
            />
            <InputCom
              onChenge={changeHandler}
              type={"password"}
              name={"password"}
              legend={"رمز عبور"}
              placeholder={"رمز عبور را وارد کنید"}
            />
            <InputCom
              onChenge={changeHandler}
              type={"password"}
              name={"password2"}
              legend={"تکرار رمز عبور"}
              placeholder={"رمز عبور را دوباره وارد کنید"}
            />

            <ButtonAfra
              onClick={handlerRegister}
              text={textButton}
              type={"purple"}
            />

            <ButtonAfra
              onClick={() => router.push("/auth/login")}
              text={"ورود به حساب"}
              type={"white-purple"}
            />
          </div>
        </div>
        <div className="w-1/2 relative flex flex-col justify-center items-center gap-2">
          <span className=" absolute left-[-25rem] opacity-[0.035]">
            <Image className="w-[95%]" src={LogoImage} />
          </span>
          <h2 className="text-2xl absolute -top-[17.5rem]   font-bold mt-12">
            ایجاد حساب در نرم افزار جامع افراپرداز
          </h2>
          <Image className="w-1/2 -mt-[22rem]" src={UnderImage} />
          <Image
            className="w-[80%] absolute -top-[4.5rem] left-0"
            src={RegisterImage}
          />
        </div>
      </div> */}

      <div className=" lg:w-full md:w-full sm:w-full  flex items-center   justify-center fixed top-0 bottom-0 right-0 left-[25%] ">
        <div className=" lg:w-full h-fit md:w-full sm:w-full xl:px-0 lg:px-0 md:px-0 sm:px-5 ">
          <CardStat
            type={"8login"}
            data={
              <>
             <div className="bg-main flex justify-center items-center h-screen w-full">
        <div className="flex flex-col justify-center items-center w-[700px] bg-[#FFFFFF] border-[0.3px] border-[#B9B9B9] rounded-[24px] px-5 py-[60px] ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[15px] pb-[37px] ">
              <span className="text-[#202224] font-bold text-[24px]"> ایجاد حساب کاربری</span>
              <small className="text-gray-400 text-center font-normal text-sm">
                ایجاد حساب کاربری در نرم افزار جامع مدیریتی افراپرداز
                <span className="font-bold text-red-600 mr-2">
                  (دارای هفت روز نسخه آزمایشی رایگان)
                </span>
              </small>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 overflow-auto gap-4 w-[600px]">
              <InputCom
                onChenge={changeHandler}
                legend={"نام"}
                name={"name"}
                type={"req"}
                placeholder={"نام خود را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                legend={"نام خانوادگی"}
                name={"lastName"}
                type={"req"}
                placeholder={"نام خانوادگی خود را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                legend={"ایمیل "}
                name={"email"}
                type={"req"}
                placeholder={"ایمیل را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                legend={"نام شرکت / سازمان"}
                name={"company"}
                type={"req"}
                placeholder={"نام شرکت یا سازمان  را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                legend={"تلفن همراه"}
                name={"phone"}
                type={"req"}
                placeholder={"تلفن همراه را وارد کنید"}
              />
              <SelectCombo
                options={[
                  {
                    value: "1",
                    label: "کسب و کار تولیدی",
                  },
                  {
                    value: "2",
                    label: "کسب و کار پزشکی",
                  },
                  {
                    value: "3",
                    label: "کسب و کار آموزشگاهی",
                  },
                  {
                    value: "4",
                    label: "کسب و کار اداری",
                  },
                  {
                    value: "5",
                    label: "کسب و کار پخش محصول",
                  },
                ]}
                name="type"
                onChange={changeHandler}
                legend={"نوع کسب و کار"}
                placeholder={"کسب و کار پخش محصول"}
              />

              <InputCom
                onChenge={changeHandler}
                type={"password"}
                name={"password"}
                legend={"رمز عبور"}
                placeholder={"رمز عبور را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                type={"password"}
                name={"password2"}
                legend={"تکرار رمز عبور"}
                placeholder={"رمز عبور را دوباره وارد کنید"}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full rounded-[8px] px-7 py-10 gap-3 ">
            <ButtonAfra
              onClick={handlerRegister}
              text={textButton}
              type={"green"}
            />
            <div className="flex gap-1 ">
                <span>ثبت نام کرده اید ؟</span>
                <a href="/auth/login" className=" text-[#FF6E40]">ورود</a>
            </div>
          </div>
        </div>
      </div>
              </>
            }
          />
        </div>
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
}
