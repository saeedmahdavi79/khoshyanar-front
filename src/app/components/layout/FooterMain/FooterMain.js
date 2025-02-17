"use client";

import Image from "next/image";
import LogoImage from "../../../../../public/image/afrapardaz.png";
import EnamadLogo from "../../../../../public/image/enamad.png";
import UniLogo from "../../../../../public/image/uni.png";
import PardisLogo from "../../../../../public/image/pardis.webp";
import KhalaghLogo from "../../../../../public/image/khalag.jpg";
import ButtonAfra from "../../modules/Buttons";
import { LuInstagram } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import ConvertEnNumberToPersian from "@/utils/numberConv";
import { useState, useEffect } from "react";
import baseUrlBlog from "@/utils/baseUrlBlog";
import { Skeleton } from "antd";

const FooterMain = () => {
  const [dataBlog, setDataBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(baseUrlBlog("/posts"))
      .then((response) => response.json())
      .then((data) => {
        if (!data || !Array.isArray(data)) {
          setDataBlog([]);
          return;
        }

        const array = data.map(async (item) => {
          const itemArray = item.featured_media;
          const response = await fetch(baseUrlBlog(`/media/${itemArray}`));
          const mediaData = await response.json();
          item.imagePf = mediaData.link;
          return item;
        });

        // استفاده از Promise.all برای انتظار بارگذاری همه media ها
        Promise.all(array).then((results) => {
          setLoading(false);
          setDataBlog(results.slice(0, 5)); // تنها 6 آبجکت را به setDataBlog اضافه کنید
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setDataBlog([]); // در صورت وقوع خطا، آرایه خالی را تنظیم کنید
      });
  }, []);

  return (
    <>
      <footer className="w-full relative py-3  sm:px-4 lg:px-0">
        <div className="flex lg:flex-row sm:flex-col gap-10 class-bg-bc container mx-auto">
          <div className="lg:w-2/4 sm:w-full">
            <div className="w-full flex-col flex items-start ">
              <Image src={LogoImage} className="w-32" />
              <span className="text-black font-bold text-[1.2rem] mt-4">
                راه های ارتباط
              </span>
              <span className="text-zinc-700 font-normal text-[16px] mt-3">
                info@afrapardaz.com
              </span>
              <span className="text-black font-normal text-[20px] mt-3">
                {ConvertEnNumberToPersian("041-36559180")}
              </span>
              <span className="flex gap-3 items-center mt-5">
                <span className="w-8 h-8 flex justify-center items-center p-1 bg-zinc-200 rounded-lg cursor-pointer hover:text-[var(--color-green)]">
                  <LuInstagram size={"1.1rem"} />
                </span>
                <span className="w-8 h-8 flex justify-center items-center p-1 bg-zinc-200 rounded-lg cursor-pointer hover:text-[var(--color-green)]">
                  <FaTelegramPlane size={"1.1rem"} />
                </span>
                <span className="w-8 h-8 flex justify-center items-center p-1 bg-zinc-200 rounded-lg cursor-pointer hover:text-[var(--color-green)]">
                  <FaWhatsapp size={"1.1rem"} />
                </span>
                <span className="w-8 h-8 flex justify-center items-center p-1 bg-zinc-200 rounded-lg cursor-pointer hover:text-[var(--color-green)]">
                  <FaLinkedinIn size={"1.1rem"} />
                </span>
              </span>
              <div className="flex  mt-5 gap-3 items-center">
                <span className="w-24 p-1 cursor-pointer rounded-lg border border-zinc-200">
                  <a
                    referrerpolicy="origin"
                    target="_blank"
                    href="https://trustseal.enamad.ir/?id=561184&Code=xht5dehjmJnZc1MsGRGcoecsWo4pnGTf"
                  >
                    <img
                      referrerpolicy="origin"
                      src="https://trustseal.enamad.ir/logo.aspx?id=561184&Code=xht5dehjmJnZc1MsGRGcoecsWo4pnGTf"
                      alt=""
                      code="xht5dehjmJnZc1MsGRGcoecsWo4pnGTf"
                    />
                  </a>
                </span>
                <span className="w-24 p-1 rounded-lg border border-zinc-200">
                  <Image src={UniLogo} className="w-full" />
                </span>{" "}
                <span className="w-24 p-1 rounded-lg border border-zinc-200">
                  <Image src={PardisLogo} className="w-full" />
                </span>{" "}
                <span className="w-24 p-1 rounded-lg overflow-hidden border border-zinc-200">
                  <Image src={KhalaghLogo} className="w-24 object-center" />
                </span>
              </div>
              <span
                dir="ltr"
                className="text-xs mt-5 leading-5 sm:hidden lg:block text-gray-400"
              >
                Copyright © 2024 Afrapardaz - All rights reserved.
              </span>
            </div>
          </div>
          <div className="lg:w-1/4 sm:w-full mt-5">
            <div className="w-full flex flex-col gap-5">
              <span className="font-bold text-[16px] text-black flex flex-col gap-2">
                <span>لینک های افراپرداز</span>
                <span className="w-10 h-1 rounded-sm bg-[var(--color-green)]"></span>
              </span>
              <span className="grid grid-cols-2 gap-4">
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  پنل کاربری
                </span>
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  پشتیبانی
                </span>
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  کارشناسان
                </span>
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  ویژگی ها
                </span>
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  وبلاگ
                </span>
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  پایگاه دانش
                </span>
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  شرایط استفاده
                </span>
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  قوانین و مقررات
                </span>
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  خط مشی
                </span>
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  عضویت و ورود
                </span>

                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  درباره ما
                </span>
                <span className="text-[13px] text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                  تماس با ما
                </span>
              </span>
            </div>
          </div>
          <div className="lg:w-1/4 sm:w-full mt-5">
            <div className="w-full flex flex-col gap-5">
              <span className="font-bold text-[16px] text-black flex flex-col gap-2">
                <span>آخرین مقالات وبلاگ</span>
                <span className="w-10 h-1 rounded-sm bg-[var(--color-green)]"></span>
              </span>
              <div className="grid grid-cols-1 gap-4">
                {loading ? (
                  <>
                    <Skeleton active />
                    <Skeleton active />
                  </>
                ) : (
                  ""
                )}

                {dataBlog.map((i) => (
                  <a href={i.link} target="_blank" className="w-full truncate">
                    <span className="text-[14px]  text-zinc-700 cursor-pointer hover:text-[var(--color-green)]">
                      {i.title.rendered}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterMain;
