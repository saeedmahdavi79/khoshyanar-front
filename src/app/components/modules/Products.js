"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Rate } from "antd";

import Image from "next/image";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import ButtonAfra from "@/app/components/modules/Buttons";

import "swiper/css";
import "swiper/css/navigation"; // اضافه کردن استایل ناوبری

const Products = ({ img, text, price, rating }) => {
  const [toXali, setToXali] = useState("flex");
  const [toPor, setToPor] = useState("hidden");

  const like = () => {
    if (toXali === "flex") {
      setToXali("hidden");
      setToPor("flex");
    } else {
      setToXali("flex");
      setToPor("hidden");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-white rounded-[14px] shadow-[#0000000D_6px_6px_54px_0px]">
        <div className="h-[317px] w-[361px] relative">
          {" "}
          {/* اضافه کردن relative برای دکمه‌ها */}
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true} // فعال کردن ناوبری
            modules={[Navigation]}
            className="mySwiper"
            dir="rtl"
          >
            <SwiperSlide>
              <Image src={img} alt="product image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={img} alt="product image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={img} alt="product image" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col items-start justify-center py-[24px] px-[16px] w-full gap-[15px]">
          <div className="flex justify-between items-center w-full">
            <span className="font-bold text-[18px] text-[#202224]">{text}</span>
            <div
              className="w-[44px] h-[44px] bg-[#F9F9F9] rounded-full flex justify-center items-center cursor-pointer"
              onClick={like}
            >
              <svg
                className={`${toXali}`}
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0002 15.883L17.1912 8.383C18.4874 7.08786 18.8086 5.10828 17.9885 3.46975V3.46975C17.3767 2.24665 16.2144 1.39215 14.8645 1.17313C13.5146 0.954121 12.1418 1.3973 11.1747 2.36425L10.0002 3.538L8.82571 2.36425C7.85866 1.3973 6.48578 0.954121 5.1359 1.17313C3.78602 1.39215 2.62368 2.24665 2.01196 3.46975V3.46975C1.19298 5.10758 1.51381 7.08571 2.80846 8.38075L10.0002 15.883Z"
                  stroke="#F93C65"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className={`${toPor}`}
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0002 15.883L17.1912 8.383C18.4874 7.08786 18.8086 5.10828 17.9885 3.46975C17.3767 2.24665 16.2144 1.39215 14.8645 1.17313C13.5146 0.954121 12.1418 1.3973 11.1747 2.36425L10.0002 3.538L8.82571 2.36425C7.85866 1.3973 6.48578 0.954121 5.1359 1.17313C3.78602 1.39215 2.62368 2.24665 2.01196 3.46975C1.19298 5.10758 1.51381 7.08571 2.80846 8.38075L10.0002 15.883Z"
                  fill="#F93C65"
                  stroke="#F93C65"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <span className="font-bold text-[16px] text-[var(--color-green)]">
            {price.toLocaleString("Fa-IR")} ریال
          </span>
          <div className="flex items-center gap3 ">
            <Rate allowHalf disabled defaultValue={rating} />
            <span className="font-semibold text-[#999999] text-[14px]">
              (131)
            </span>
          </div>
          <div>
            <ButtonAfra
              onClick={() => router.push("/auth/register")}
              text={"ویرایش محصول"}
              type={"blue-dark"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
