"use client";
import Image from "next/image";

import Shape1 from "../../../../public/image/shape1.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import InputCom from "../../components/modules/Inputs";
import ButtonAfra from "../../components/modules/Buttons";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import DialogPopup from "@/app/components/modules/Dialog";
import { setCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import CardStat from "@/app/components/modules/Card";

import iran from "@/../../public/image/iran.webp";
export default function Auth() {
  //router
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const [dialogType, setDialogType] = useState("2");
  const [dialogTitle, setDialogTitle] = useState(
    "رمز عبور با موفقیت تغییر یافت"
  );
  const [dialogDes, setDialogDes] = useState(
    "از این به بعد با استفاده از رمز عبور جدید وارد شوید"
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

  const handlerLoginMain = async () => {
    setButtonText("لطفا صبر کنید ....");
    try {
      if (!data.email && !data.password) {
        setIsOpen(true);
      } else {
        const sendData = await fetch(baseUrl("/auth/login"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const getResponse = await sendData.json();

        if (getResponse.status == 200) {
          setButtonText("ورود به پنل موفقیت آمیز بود !");
          setCookie("WuZiK", getResponse.accessToken, {
            maxAge: 24 * 60 * 60,
            path: "/",
          });

          router.push("/dashboard");
        } else {
          setButtonText("رمز عبور یا ایمیل نادرست است !");
        }
      }
    } catch (error) {
      setIsOpen(true);
      setButtonText("ورود به حساب");
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
    ``;
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const changeHandlerVisitor = (e) => {
    setDataVisitor({ ...dataVisitor, [e.target.name]: e.target.value });
  };

  const [numberSection, setNumberSection] = useState(false);
  const [changePasswordSection, setChangePasswordSection] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showFocus, setShowFocus] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    if (showFocus) {
      inputRef.current.focus();
    }
  }, [showFocus]);

  useEffect(() => {
    function focusNextInput(el, prevId, nextId) {
      if (el.value.length === 0 && prevId) {
        document.getElementById(prevId).focus();
      } else if (el.value.length === 1 && nextId) {
        document.getElementById(nextId).focus();
      }
    }

    function handleKeyup(event) {
      const prevId = event.target.getAttribute("data-focus-input-prev");
      const nextId = event.target.getAttribute("data-focus-input-next");
      focusNextInput(event.target, prevId, nextId);
    }

    const elements = document.querySelectorAll("[data-focus-input-init]");

    elements.forEach((element) => {
      element.addEventListener("keyup", handleKeyup);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("keyup", handleKeyup);
      });
    };
  }, []);

  useEffect(() => {
    if (showFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showFocus]);
  2;

  const [timeLeft, setTimeLeft] = useState(31); // زمان به ثانیه
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("مانده تا دریافت مجدد کد");
  const [buttonTextdo, setButtonTextdo] = useState("");
  const [massage1, setMassage1] = useState("hidden");
  const [hideTime, setHideTime] = useState("flex");

  useEffect(() => {
    if (showCode) {
      startTimer(); // شروع تایمر هنگام نمایش صفحه دوم
    }
  }, [!showCode]);

  const startTimer = () => {
    setTimeLeft(31); // بازنشانی زمان به ۳ ثانیه
    setIsButtonDisabled(true); // غیرفعال کردن دکمه
    setButtonText("مانده تا دریافت مجدد کد"); // بازنشانی متن دکمه

    setHideTime("flex");
    setMassage1("hidden");

    setTimeLeft((prevTime) => {
      if (prevTime > 0) {
        return prevTime - 1; // بلافاصله بعد از کلیک کاهش زمان
      }
      return prevTime;
    });

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          setIsButtonDisabled(false); // فعال کردن دکمه زمانی که تایمر به پایان می‌رسد
          setButtonText(" دریافت مجدد از طریق");
          setButtonTextdo("پیامک");
          setHideTime("hidden");
          setMassage1("flex");
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval); // اطمینان از پاک کردن تایمر قبلی
  };

  const handleRestartTimer = () => {
    startTimer(); // شروع مجدد تایمر
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };
  const codeShow = () => {
    if (!showCode) {
      setShowCode(!showCode);
      setChangePasswordSection(changePasswordSection);
    } else {
      setNumberSection(!numberSection);
      setChangePasswordSection(!changePasswordSection);
    }
  };

  const gotoLogin = () => {
    setIsOpen(true);
    setTimeout(() => {
      router.push("/auth/login");
    }, 2000);
  };

  const goLogin = () => {
    setIsOpen(false);
    router.push("/auth/login");
  };

  return (
    <>
      <div className="xl:w-2/3 lg:w-2/3 md:w-full sm:w-full fixed flex items-center   justify-center top-0 bottom-0 right-0 ">
        <div className="xl:w-1/2 lg:h-2/3 md:w-2/3 sm:w-full xl:px-0 lg:px-0 md:px-0 sm:px-5 ">
          <CardStat
            type={"8"}
            data={
              <>
                <Tabs>
                  <TabPanel>
                    <div className="flex w-full flex-col gap-6 mt-7">
                      <h3 className="xl:font-bold lg:font-bold md:font-bold sm:font-medium xl:text-xl lg:text-xl md:text-lg sm:text-[12px] flex flex-col gap-2 items-center">
                        <span> تغییر رمز نرم افزار جامع مدیریتی افراپرداز</span>
                        <small className="text-gray-400 text-center xl:font-normal  xl:text-sm lg:text-sm md:text-xs sm:text-[10px]">
                          جهت تغییر رمز فراموش شده از این بخش استفاده کنید
                        </small>
                      </h3>

                      {!numberSection && (
                        <div className="w-full flex gap-4 justify-center flex-col">
                          <InputCom
                            onChenge={changeHandler}
                            name={"phonenumber"}
                            legend={"شماره همراه : "}
                            type={"phonenumber"}
                            img={iran}
                            code={"+98"}
                            placeholder={"912 123 4567"}
                          />

                          {showCode && (
                            <div className="flex justify-center items-center w-full flex-col">
                              <div
                                className="w-full py-2 gap-2.5 flex items-center justify-center"
                                dir="ltr"
                              >
                                <form className="max-w-sm mx-auto">
                                  <div
                                    className="flex mb-2 space-x-2"
                                    dir="ltr"
                                  >
                                    <div>
                                      <input
                                        ref={inputRef}
                                        type="text"
                                        inputMode="numeric"
                                        data-focus-input-init
                                        data-focus-input-prev="code-1"
                                        data-focus-input-next="code-2"
                                        id="code-1"
                                        className={`block w-11 h-12 py-3 ${showFocus} text-[25px] font-extrabold text-center focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border border-gray-300 rounded-xl`}
                                        maxLength="1"
                                        onInput={(e) =>
                                          (e.target.value =
                                            e.target.value.replace(
                                              /[^0-9]/g,
                                              ""
                                            ))
                                        }
                                        required
                                      />
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        inputMode="numeric"
                                        data-focus-input-init
                                        data-focus-input-prev="code-1"
                                        data-focus-input-next="code-3"
                                        id="code-2"
                                        className="block w-11 h-12 py-3 text-[25px] font-extrabold text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white border border-gray-300 rounded-xl"
                                        maxLength="1"
                                        onInput={(e) =>
                                          (e.target.value =
                                            e.target.value.replace(
                                              /[^0-9]/g,
                                              ""
                                            ))
                                        }
                                        required
                                      />
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        inputMode="numeric"
                                        data-focus-input-init
                                        data-focus-input-prev="code-2"
                                        data-focus-input-next="code-4"
                                        id="code-3"
                                        className="block w-11 h-12 py-3 text-[25px] font-extrabold text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white border border-gray-300 rounded-xl"
                                        maxLength="1"
                                        onInput={(e) =>
                                          (e.target.value =
                                            e.target.value.replace(
                                              /[^0-9]/g,
                                              ""
                                            ))
                                        }
                                        required
                                      />
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        inputMode="numeric"
                                        data-focus-input-init
                                        data-focus-input-prev="code-3"
                                        data-focus-input-next="code-5"
                                        id="code-4"
                                        className="block w-11 h-12 py-3 text-[25px] font-extrabold text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white border border-gray-300 rounded-xl"
                                        maxLength="1"
                                        onInput={(e) =>
                                          (e.target.value =
                                            e.target.value.replace(
                                              /[^0-9]/g,
                                              ""
                                            ))
                                        }
                                        required
                                      />
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        inputMode="numeric"
                                        data-focus-input-init
                                        data-focus-input-prev="code-4"
                                        data-focus-input-next="code-6"
                                        id="code-5"
                                        className="block w-11 h-12 py-3 text-[25px] font-extrabold text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white border border-gray-300 rounded-xl"
                                        maxLength="1"
                                        onInput={(e) =>
                                          (e.target.value =
                                            e.target.value.replace(
                                              /[^0-9]/g,
                                              ""
                                            ))
                                        }
                                        required
                                      />
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        inputMode="numeric"
                                        data-focus-input-init
                                        data-focus-input-prev="code-5"
                                        id="code-6"
                                        className="block w-11 h-12 py-3 text-[25px] font-extrabold text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white border border-gray-300 rounded-xl"
                                        maxLength="1"
                                        onInput={(e) =>
                                          (e.target.value =
                                            e.target.value.replace(
                                              /[^0-9]/g,
                                              ""
                                            ))
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="w-full flex justify-center ">
                                <span className="flex justify-center items-center ">
                                  <span className="font-bold text-[12px] text-[#545555]">
                                    <div className="flex gap-1">
                                      <div
                                        className={`${hideTime} text-[var(--color-slate-buttons)] text-[12px] font-bold`}
                                      >
                                        {" "}
                                        {formatTime(timeLeft)}
                                      </div>
                                      <div className="flex justify-center items-center gap-2">
                                        <span className="text-[#545555] text-[12px] font-bold">
                                          {buttonText}{" "}
                                        </span>
                                        <div
                                          className={`${massage1} justify-center items-center cursor-pointer gap-0.5`}
                                          onClick={handleRestartTimer}
                                          disabled={isButtonDisabled}
                                        >
                                          <span className="text-[var(--color-slate-buttons)] text-[12px] font-bold">
                                            {buttonTextdo}
                                          </span>
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.5 9L4.5 6L7.5 3"
                                              stroke="#ff6e40"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="w-full flex justify-center items-center">
                            <div className="w-3/4">
                              <ButtonAfra
                                text={"ادامه"}
                                onClick={codeShow}
                                type={"green"}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {changePasswordSection && (
                        <div className="w-full flex justify-center items-center flex-col gap-4">
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

                          <div className="w-full flex justify-center items-center">
                            <div className="w-3/4">
                              <ButtonAfra
                                text={"ثبت"}
                                onClick={gotoLogin}
                                type={"green"}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="w-full flex gap-2 justify-center items-center flex-col  ">
                      <div className="flex mt-4 w-full gap-2 flex-col justify-center items-center">
                        <div className="flex justify-center items-center w-3/4">
                          <ButtonAfra
                            onClick={() => router.push("/auth/register")}
                            text={"حساب کاربری ندارید ؟"}
                            type={"white-green-2"}
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </>
            }
          />
        </div>
      </div>
      <div
        className={`w-1/3 fixed xl:flex lg:flex md:hidden sm:hidden top-0 bottom-0 left-0 ${color}`}
      >
        <div className="w-full absolute top-0 left-0 bottom-0 right-0">
          <div className=" flex flex-col gap-2 h-full w-full">
            <span className="mt-16 flex justify-center items-center mx-auto xl:w-[380px] xl:h-[380px]">
            
            </span>
            <div className="w-full flex flex-col justify-center items-center mx-auto -mt-8">
              <h2 className="w-full  xl:text-3xl lg:text-xl font-extrabold text-white pt-8 flex justify-center">
                نرم افزار جامع مدیریتی افراپرداز
              </h2>
              <small className="w-full flex justify-center text-white pt-3 text-sm">
                اولین و جامع ترین نرم افزار مدیریتی حرفه ای در کشور
              </small>
            </div>
            <Image className="w-2/4 absolute bottom-0  right-0" src={Shape1} />
          </div>
        </div>
      </div>
      <DialogPopup
        isOpen={isOpen}
        type={dialogType}
        title={dialogTitle}
        des={dialogDes}
        close={goLogin}
      />{" "}
    </>
  );
}
