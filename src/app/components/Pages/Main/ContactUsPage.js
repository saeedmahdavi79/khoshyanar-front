"use client";

import Lottie from "react-lottie";
import animationData from "../../../../lottie/contact_us.json";
import animationData2 from "../../../../lottie/amar.json";
import ButtonAfra from "../../../components/modules/Buttons";
import { LuInstagram } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import LeaderImage from "../../../../../public/image/leadership.jpeg";
import NomaniImage from "../../../../../public/image/nomani.jpg";
import UserImage from "../../../../../public/image/userplc.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import InputCom from "../../modules/Inputs";
import MapImage from "../../../../../public/image/map.png";

const ContactUsPageApp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="w-full lg:flex sm:hidden justify-between items-center">
        <div className="w-1/2 flex flex-col gap-5 ">
          <h3 className="text-3xl relative text-[var(--color-green)] font-black">
            تماس با ما
            <span className="class-heading"></span>
          </h3>
          <h5 className="text-black text-xl font-bold">
            راه های ارتباطی با افراپرداز
          </h5>
          <h6 className="text-justify font-normal  text-[14.4px] leading-7 text-gray-500">
            ما در افراپرداز آماده‌ایم تا به سوالات و نیازهای شما پاسخ دهیم. تیم
            ما همیشه در دسترس است تا به شما کمک کند. لطفاً در صورت داشتن هرگونه
            سوال یا درخواست، با ما تماس بگیرید.
          </h6>
          <div className="w-[400px] flex gap-3">
            <div className="flex gap-2">
              {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"blue-dark"} text={"وارد شوید"} />
                </a>
              </div> */}
              <div className="w-[50px]">
                <a href="#">
                  <ButtonAfra
                    type={"green"}
                    text={
                      <>
                        <LuInstagram size={"1.6rem"} />
                      </>
                    }
                  />
                </a>
              </div>
              <div className="w-[50px]">
                <a href="#">
                  <ButtonAfra
                    type={"green"}
                    text={
                      <>
                        <FaTelegramPlane size={"1.6rem"} />
                      </>
                    }
                  />
                </a>
              </div>
              <div className="w-[50px]">
                <a href="#">
                  <ButtonAfra
                    type={"green"}
                    text={
                      <>
                        <FaWhatsapp size={"1.6rem"} />
                      </>
                    }
                  />
                </a>
              </div>
              <div className="w-[50px]">
                <a href="#">
                  <ButtonAfra
                    type={"green"}
                    text={
                      <>
                        <FaLinkedinIn size={"1.6rem"} />
                      </>
                    }
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/2 flex justify-end">
          <span className="-ml-16">
            <Lottie options={defaultOptions} height={550} width={550} />
          </span>
        </div>
      </div>

      <div className="w-full sm:flex flex-col lg:hidden justify-between items-center">
        <div className=" w-full flex justify-end">
          <span className="">
            <Lottie options={defaultOptions} />
          </span>
        </div>
        <div className="w-full flex flex-col gap-5 ">
          <h3 className="text-4xl text-[var(--color-green)] font-black">
            تماس با ما
          </h3>
          <h5 className="text-[var(--color-blue-dark)] text-lg font-bold">
            راه های ارتباطی با افراپرداز
          </h5>
          <h6 className="text-justify font-normal  text-[16px] leading-7 text-gray-500">
            ما در افراپرداز آماده‌ایم تا به سوالات و نیازهای شما پاسخ دهیم. تیم
            ما همیشه در دسترس است تا به شما کمک کند. لطفاً در صورت داشتن هرگونه
            سوال یا درخواست، با ما تماس بگیرید.
          </h6>
          <div className="w-full flex gap-3">
            <div className="flex gap-2">
              {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"blue-dark"} text={"وارد شوید"} />
                </a>
              </div> */}
              <div className="w-[50px]">
                <a href="#">
                  <ButtonAfra
                    type={"green"}
                    text={
                      <>
                        <LuInstagram size={"1.6rem"} />
                      </>
                    }
                  />
                </a>
              </div>
              <div className="w-[50px]">
                <a href="#">
                  <ButtonAfra
                    type={"green"}
                    text={
                      <>
                        <FaTelegramPlane size={"1.6rem"} />
                      </>
                    }
                  />
                </a>
              </div>
              <div className="w-[50px]">
                <a href="#">
                  <ButtonAfra
                    type={"green"}
                    text={
                      <>
                        <FaWhatsapp size={"1.6rem"} />
                      </>
                    }
                  />
                </a>
              </div>
              <div className="w-[50px]">
                <a href="#">
                  <ButtonAfra
                    type={"green"}
                    text={
                      <>
                        <FaLinkedinIn size={"1.6rem"} />
                      </>
                    }
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[4rem] lg:flex sm:hidden justify-between items-center gap-5">
        <div className="flex w-full flex-col gap-3 items-center">
          <h3 className="text-3xl relative text-[var(--color-green)] font-black">
            با ما در ارتباط باشید
            <span className="class-heading"></span>
          </h3>
          <h5 className="text-black text-xl font-bold">
            از طریق فرم زیر پیام شما را دریافت خواهیم کرد
          </h5>

          <div className="w-full mt-[4rem]  rounded flex gap-3 items-center">
            <div className="flex flex-col gap-3 w-full rounded-lg bg-zinc-200 p-4">
              <div className="flex gap-3 justify-center items-center">
                <InputCom
                  legend={"عنوان پیام"}
                  type={"req"}
                  placeholder={"عنوان"}
                />
                <InputCom
                  legend={"ایمیل شما"}
                  type={"req"}
                  placeholder={"ایمیل"}
                />
              </div>

              <InputCom
                legend={"پیام شما"}
                type={"textarea"}
                row={15}
                placeholder={"متن"}
              />
              <div className="flex gap-3 mt-2 justify-center items-center">
                <ButtonAfra text={"ارسال پیام"} type={"green"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[4rem] sm:flex lg:hidden justify-between items-center gap-5">
        <div className="flex w-full flex-col gap-3 items-center">
          <h3 className="text-4xl text-[var(--color-green)] font-black">
            با ما در ارتباط باشید
          </h3>
          <h5 className="text-[var(--color-blue-dark)] text-center text-lg font-bold">
            از طریق فرم زیر پیام شما را دریافت خواهیم کرد
          </h5>

          <div className="w-full mt-[2rem] flex flex-col gap-3 items-center">
            <div className="flex flex-col gap-3 w-full">
              <div className="flex gap-3 justify-center items-center">
                <InputCom
                  legend={"عنوان پیام"}
                  type={"req"}
                  placeholder={"عنوان"}
                />
                <InputCom
                  legend={"ایمیل شما"}
                  type={"req"}
                  placeholder={"ایمیل"}
                />
              </div>

              <InputCom
                legend={"پیام شما"}
                type={"textarea"}
                row={15}
                placeholder={"متن"}
              />
              <div className="flex gap-3 mt-2 justify-center items-center">
                <ButtonAfra text={"ارسال پیام"} type={"green"} />
              </div>
            </div>
            <div className="w-full">
              <Image src={MapImage} className="rounded-sm border" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[6rem]"></div>
    </>
  );
};

export default ContactUsPageApp;
