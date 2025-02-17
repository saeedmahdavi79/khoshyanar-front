"use client";
import Image from "next/image";

import Shape1 from "../../../../public/image/shape1.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaGoogle } from "react-icons/fa";

import InputCom from "../../components/modules/Inputs";
import ButtonAfra from "../../components/modules/Buttons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DialogPopup from "@/app/components/modules/Dialog";
import { setCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import CardStat from "@/app/components/modules/Card";
import Lottie from "react-lottie";
import animationData from "../../../lottie/login.json";
import ImageLogo from "../../../../public/image/afrapardaz.png";
import LogoImage from "../../../../public/image/text-logo.png";
import Captcha from "demos-react-captcha";

import logo from "../../../../public/image/square-logo.png";

import Swal from "sweetalert2";
export default function Auth() {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  //router
  const router = useRouter();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
  });
  const [dataVisitor, setDataVisitor] = useState({
    email: "",
    password: "",
  });
  const [textButton, setButtonText] = useState("ورود به پنل");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // اضافه کردن state برای مدیریت وضعیت دکمه
  const [captchaSolver, setCaptchaSolver] = useState(false);

  const captchaHandler = (e) => {
    setCaptchaSolver(e);
  };

  const handlerLoginMain = async () => {
    setButtonText("لطفا صبر کنید ....");
    setIsButtonDisabled(true); // دکمه را غیرفعال کن

    if (captchaSolver) {
      try {
        if (!data.email && !data.password) {
          setIsOpen(true);
          setButtonText("ورود به حساب");
          setIsButtonDisabled(true); // دکمه را دوباره فعال کن
        } else {
          const sendData = await fetch(baseUrl("/auth/login"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const getResponse = await sendData.json();

          if (getResponse.status == 200) {
            setCookie("WuZiK", getResponse.accessToken, {
              maxAge: 24 * 60 * 60,
              path: "/",
            });

            setCookie("aUo", getResponse.role, {
              maxAge: 24 * 60 * 60,
              path: "/",
            });

            setCookie("SessT", getResponse.requestDate, {
              maxAge: 24 * 60 * 60,
              path: "/",
            });

            Toast.fire({
              icon: "success",
              title: "با موفقیت وارد شدید",
            });

            setIsButtonDisabled(false);
            setButtonText("ورود به پنل");

            location.replace("/dashboard");
          } else {
            setButtonText("ورود به پنل");

            setIsButtonDisabled(true);
            Toast.fire({
              icon: "error",
              title: "رمز یا نام کاربری نادرست است",
            });
          }
        }
      } catch (error) {
        setIsOpen(true);
        setButtonText("ورود به پنل");
      } finally {
        setIsButtonDisabled(false); // دکمه را دوباره فعال کن بعد از پایان درخواست
      }
    } else {
      setButtonText("ورود به پنل");

      Toast.fire({
        icon: "error",
        title: "کد امنیتی صحیح نیست",
      });
    }
  };

  const handlerLogin = async () => {
    setButtonText("لطفا صبر کنید ....");
    try {
      if (!dataVisitor.email && !dataVisitor.password) {
        setIsOpen(true);
      } else {
        const sendData = await fetch(baseUrl("/visitor/login"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataVisitor),
        });
        const getResponse = await sendData.json();

        if (getResponse.status == 200) {
          setButtonText("ورود به پنل موفقیت آمیز بود !");
          setCookie("WuZiK", getResponse.accessToken, {
            maxAge: 24 * 60 * 60,
            path: "/",
          });

          router.push("/vDashboard");
        } else {
          setButtonText("رمز عبور یا ایمیل نادرست است !");
        }
      }
    } catch (error) {
      console.log(error);
      setIsOpen(true);
      setButtonText("ورود به حساب");
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const changeHandlerVisitor = (e) => {
    setDataVisitor({ ...dataVisitor, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* Mobile: < 768px */}
      <div className="md:hidden mx-auto flex flex-col gap-10 ">
        <div className="w-full h-[100dvh] login-bg p-6 relative overflow-hidden">
          <div className="w-full h-full bg-white rounded-[10px] flex flex-col items-center gap-4 p-4 overflow-auto">
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <Image
                onClick={() => location.replace("/")}
                src={logo}
                alt="افراپرداز"
                className="w-[250px] h-fit"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <InputCom
                onChenge={changeHandler}
                name={"email"}
                type={"req"}
                placeholder={"نام کاربری یا ایمیل را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                type={"password"}
                name={"password"}
                placeholder={"رمز عبور را وارد کنید"}
              />
              <div className="w-full col-span-1 sm:col-span-2">
                <Captcha
                  onChange={captchaHandler}
                  placeholder="کد امنیتی را وارد کنید" // optional
                  length={4} // default
                  char={(1, 2, 3, 4, 5, 6, 7, 8, 9)}
                />
              </div>
              <ButtonAfra
                text={textButton}
                onClick={handlerLoginMain}
                type={"green"}
                disabled={isButtonDisabled} // غیرفعال کردن دکمه بر اساس وضعیت
              />
            </div>

            {/* <div className="text-[15px] font-semibold flex justify-center items-center gap-2 mt-4">
              <span className="text-[var(--text-dark)]">
                رمز عبورتان را گم کرده‌اید؟
              </span>
              <span className="text-[var(--color-red)]">
                ایجاد رمز عبور جدید
              </span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Tablet: 768px - 1024px */}
      <div className="hidden md:block lg:hidden w-full">
        <div className="w-full h-[100dvh] login-bg p-6 relative overflow-hidden">
          <div className="w-full h-full bg-white rounded-[10px] flex flex-col items-center gap-4 p-4 overflow-auto">
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <Image
                onClick={() => location.replace("/")}
                src={logo}
                alt="افراپرداز"
                className="w-[250px] h-fit"
              />
            </div>
            <div className="w-full grid grid-cols-2 justify-center items-center gap-4">
              <InputCom
                onChenge={changeHandler}
                name={"email"}
                type={"req"}
                placeholder={"نام کاربری یا ایمیل را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                type={"password"}
                name={"password"}
                placeholder={"رمز عبور را وارد کنید"}
              />
              <div className="w-full col-span-1 sm:col-span-2">
                <Captcha
                  onChange={captchaHandler}
                  placeholder="کد امنیتی را وارد کنید" // optional
                  length={4} // default
                  char={(1, 2, 3, 4, 5, 6, 7, 8, 9)}
                />
              </div>
              <ButtonAfra
                text={textButton}
                onClick={handlerLoginMain}
                type={"green"}
                disabled={isButtonDisabled} // غیرفعال کردن دکمه بر اساس وضعیت
              />
              <ButtonAfra
                onClick={() => router.push("/auth/register")}
                text={"ایجاد پنل"}
                type={"blue-dark"}
              />
            </div>

            <div className="text-[15px] font-semibold flex justify-center items-center gap-2 mt-4">
              <span className="text-[var(--text-dark)]">
                رمز عبورتان را گم کرده‌اید؟
              </span>
              <span className="text-[var(--color-red)]">
                ایجاد رمز عبور جدید
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop/Desktop: 1024px  */}
      <div className="hidden lg:block">
        <div className=" absolute top-0 left-0 bottom-0 right-0 flex ">
          <div className="w-2/3 bg-white">
            <CardStat
              type={"8login"}
              data={
                <>
                  <div className="bg-white w-full px-0 flex justify-center items-center h-screen">
                    <div className="flex flex-col justify-center items-center w-4/6 bg-transparent rounded-[24px] px-6 py-8 xl:px-[50px] xl:py-[60px]  ">
                      <div className="flex flex-col w-full justify-center items-start gap-8 xl:px-24">
                        <div className="flex flex-col justify-center items-start gap-[15px]">
                          <span className="text-[#202224] font-black text-[28px]">
                            ورود به پنل افراپرداز
                          </span>{" "}
                          <small className="text-gray-400 text-center xl:font-normal  xl:text-sm lg:text-sm md:text-xs sm:text-[10px]">
                            جهت ورود به پنل نرم افزار جامع مدیریتی افراپرداز از
                            این بخش استفاده کنید
                          </small>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full gap-8">
                          <div className="flex flex-col justify-center items-center w-full gap-4">
                            <InputCom
                              onChenge={changeHandler}
                              name={"email"}
                              type={"req"}
                              placeholder={"نام کاربری یا ایمیل را وارد کنید"}
                            />

                            <InputCom
                              onChenge={changeHandler}
                              type={"password"}
                              name={"password"}
                              placeholder={"رمز عبور را وارد کنید"}
                            />
                            <span className="w-full mt-3">
                              <Captcha
                                onChange={captchaHandler}
                                placeholder="کد امنیتی را وارد کنید" // optional
                                length={4} // default
                                char={(1, 2, 3, 4, 5, 6, 7, 8, 9)}
                              />
                            </span>
                          </div>
                          <div className="flex flex-col justify-center items-center w-full gap-4">
                            <div className="flex flex-col justify-center items-center w-full rounded-[8px]   gap-3 ">
                              <div className="flex gap-3 w-full">
                                <ButtonAfra
                                  text={textButton}
                                  onClick={handlerLoginMain}
                                  type={"green"}
                                  disabled={isButtonDisabled} // غیرفعال کردن دکمه بر اساس وضعیت
                                />
                                {/* <ButtonAfra
                                  onClick={() => router.push("/auth/register")}
                                  text={"ایجاد پنل"}
                                  type={"blue-dark"}
                                /> */}
                              </div>
                              {/* <div className="w-full  flex xl:flex-row lg:flex-row md:flex-row sm:flex-col justify-center gap-1 items-center">
                              <span className="text-black text-[12px] font-normal">
                                رمز عبورتان را گم کرده‌اید؟{" "}
                              </span>
                              <a href="/auth/forgotpassword">
                                <span className="text-[var(--color-slate-buttons)] text-[12px] font-normal">
                                  ایجاد رمز عبور جدید
                                </span>
                              </a>
                            </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              }
            />
          </div>
          <div className="w-1/3 relative bg-[var(--color-green)] flex justify-center items-center">
            <span className="w-full">
              <Image src={LogoImage} className="opacity-10 w-full" />
            </span>
            <span
              onClick={() => location.replace("/")}
              className=" cursor-pointer absolute w-full flex justify-center"
            >
              <Image src={LogoImage} className="w-1/3" />
            </span>
          </div>
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
