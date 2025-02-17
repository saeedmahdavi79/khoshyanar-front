"use client";

import Image from "next/image";
import LogoImage from "../../../../../public/image/afrapardaz.png";
import ButtonAfra from "../../modules/Buttons";
import { LuAlignJustify } from "react-icons/lu";
import { Button, Drawer, Radio, Space } from "antd";
import { useEffect, useState } from "react";
import { LuXCircle } from "react-icons/lu";

const HeaderMain = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <header className="lg:flex sm:hidden w-full px-3 h-[85px] bg-white border-b border-b-gray-200 items-center justify-center">
        <div className="flex  justify-between items-center container">
          <div className="flex w-2/3 gap-7">
            <span className="nias-mask w-36 flex items-center justify-center">
              <a href="/">
                {/* <span className=" relative w-full block mt-auto">
                  <span className="calss-hooman relative z-[999999999] text-black text-5xl font-normal ">
                    افراپرداز
                  </span>
                  <span className="w-full absolute bottom-[0.15rem] left-0 right-0 h-[15px] -rotate-2 rounded-sm bg-[var(--color-green)]"></span>
                </span> */}

                <Image src={LogoImage} className="w-36" />
              </a>
            </span>
            <nav className="w-fit flex items-center h-[85px]">
              <ul className="flex gap-5 items-center h-full">
                <a href="/fetures" className="h-full">
                  <li className="p-2 flex items-center h-full text-[14px] hover:border-b-[var(--color-green)] hover:border-b-4  transition-all duration-200 text-black hover:text-[var(--color-green)] cursor-pointer">
                    ویژگی ها
                  </li>
                </a>
                <li className="p-2 flex items-center h-full text-[14px] hover:border-b-[var(--color-green)] hover:border-b-4  transition-all duration-200 text-black hover:text-[var(--color-green)] cursor-pointer">
                  پایگاه دانش
                </li>
                <a
                  href="https://blog.afrapardaz.com/"
                  target="_blank"
                  className="h-full"
                >
                  <li className="p-2 flex items-center h-full text-[14px] hover:border-b-[var(--color-green)] hover:border-b-4  transition-all duration-200 text-black hover:text-[var(--color-green)] cursor-pointer">
                    وبلاگ
                  </li>
                </a>
                <a href="/about" className="h-full">
                  <li className="p-2 flex items-center h-full text-[14px] hover:border-b-[var(--color-green)] hover:border-b-4  transition-all duration-200 text-black hover:text-[var(--color-green)] cursor-pointer">
                    درباره ما
                  </li>
                </a>
                <a href="/contact-us" className="h-full">
                  <li className="p-2 flex items-center h-full text-[14px] hover:border-b-[var(--color-green)] hover:border-b-4  transition-all duration-200 text-black hover:text-[var(--color-green)] cursor-pointer">
                    تماس با ما
                  </li>
                </a>
                <a
                  target="_blank"
                  className="h-full"
                  href="/downloads/catalog/afrapardaz.pdf"
                >
                  <li className="p-2 flex items-center h-full text-[14px] hover:border-b-[var(--color-green)] hover:border-b-4  transition-all duration-200 text-black hover:text-[var(--color-green)] cursor-pointer">
                    دریافت کاتالوگ
                  </li>
                </a>
              </ul>
            </nav>
          </div>
          <div className="flex w-1/3 gap-3 items-center justify-end">
            <div className="w-[120px]">
              <a href="/auth/register">
                <ButtonAfra type={"green"} text={"ثبت نام"} />
              </a>
            </div>
            <div className="w-[120px]">
              <a href="/auth/login">
                <ButtonAfra type={"blue-dark"} text={"ورود"} />
              </a>
            </div>
          </div>
        </div>
      </header>
      <header className="lg:hidden sm:flex w-full px-2 h-[50px] border-b border-b-gra-200 items-center justify-between">
        <div>
          <Image src={LogoImage} className="w-20" />
        </div>
        <div onClick={showDrawer}>
          <LuAlignJustify size={"1.4rem"} />
        </div>
      </header>

      <Drawer
        title={
          <span className="text-xl font-bold text-white">
            <Image src={LogoImage} className="w-20" />
          </span>
        }
        placement={placement}
        closable={true}
        onClose={onClose}
        open={open}
        key={placement}
        className="drawer-menu"
      >
        <div className="flex flex-col h-full w-full justify-between items-center">
          <div className="w-full list-none flex flex-col gap-3 justify-center">
            <a href="/" className="w-full">
              <li className="p-2 hover:bg-[var(--color-green)] hover:scale-90 transition-all duration-300 rounded-lg hover:text-white cursor-pointer">
                صفحه اصلی
              </li>
            </a>
            <a href="/" className="w-full">
              <li className="p-2 hover:bg-[var(--color-green)] hover:scale-90 transition-all duration-300 rounded-lg hover:text-white cursor-pointer">
                خدمات و ویژگی ها
              </li>
            </a>

            <a href="/about">
              <li className="p-2 hover:bg-[var(--color-green)] hover:scale-90 transition-all duration-300 rounded-lg hover:text-white cursor-pointer">
                درباره ما
              </li>
            </a>
            <a href="/contact-us">
              <li className="p-2 hover:bg-[var(--color-green)] hover:scale-90 transition-all duration-300 rounded-lg hover:text-white cursor-pointer">
                تماس با ما
              </li>
            </a>
            <a href="/">
              <li className="p-2 hover:bg-[var(--color-green)] hover:scale-90 transition-all duration-300 rounded-lg hover:text-white cursor-pointer">
                دریافت کاتالوگ
              </li>
            </a>
          </div>

          <div className="flex w-full gap-3 items-center justify-end">
            <div className="w-[200px]">
              <a href="/auth/login">
                <ButtonAfra type={"blue-dark"} text={"وارد شوید"} />
              </a>
            </div>
            <div className="w-[200px]">
              <a href="/auth/register">
                <ButtonAfra type={"green"} text={"رایگان شروع کنید"} />
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default HeaderMain;
