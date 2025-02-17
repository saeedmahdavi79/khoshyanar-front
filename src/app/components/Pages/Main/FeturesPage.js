"use client";

import animationData2 from "../../../../lottie/login.json";
import ButtonAfra from "../../modules/Buttons";
import Lottie from "react-lottie";
import AmarImage from "../../../../../public/image/amar.svg";

import AIImage from "../../../../../public/image/mind.svg";
import EtesalImage from "../../../../../public/image/hamkar.svg";
import SetingImage from "../../../../../public/image/setting.svg";
import EdariImage from "../../../../../public/image/grp.svg";
import MoamelatImage from "../../../../../public/image/growth.svg";
import HesabImage from "../../../../../public/image/layer.svg";

import TaskImage from "../../../../../public/image/task.svg";
import ModImage from "../../../../../public/image/share.svg";
import TrgtImage from "../../../../../public/image/target.svg";
import RoadMapImage from "../../../../../public/image/roadmap.svg";
import PuzzleImage from "../../../../../public/image/puzzle.svg";
import { Collapse } from "antd";

import Image from "next/image";

const FeturesAppPage = () => {
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const items = [
    {
      key: "1",
      label: "افراپرداز چیست؟",
      children: (
        <p>
          افراپرداز یک شرکت تکنولوژی است که در زمینه برنامه‌نویسی و توسعه
          نرم‌افزارهای مدیریت ارتباط با مشتری (CRM) فعالیت می‌کند. هدف این شرکت
          ارائه راهکارهای نرم‌افزاری کارآمد و سفارشی برای کسب‌وکارها به منظور
          بهبود فرآیندهای مدیریتی و افزایش بهره‌وری است.
        </p>
      ),
    },
    {
      key: "2",
      label: "استفاده از نرم افزار در مقابل روش های سنتی چه فرقی داره؟",
      children: (
        <p>
          استفاده از نرم‌افزارها به جای روش‌های سنتی مزایای زیادی دارد.
          نرم‌افزارها مدیریت اطلاعات را سریع‌تر و دقیق‌تر انجام می‌دهند، خطاها
          را کاهش می‌دهند، و امکان تحلیل داده‌ها و گزارش‌گیری را فراهم می‌کنند.
          همچنین، نرم‌افزارها به همکاری بهتر و دسترسی از راه دور کمک می‌کنند.
        </p>
      ),
    },
    {
      key: "3",
      label: "آیا تمامی ماژول ها در این نرم افزار فعال است؟",
      children: (
        <p>بله در افراپرداز بدون نیاز به هزینه اضافی تمامی ماژول ها فعال است</p>
      ),
    },
    {
      key: "4",
      label: "آیا برای کارشناسان بیشتر هزینه اضافی دریافت می شود؟",
      children: (
        <p>
          خیر، معمولاً در نرم‌افزارهای CRM، هزینه‌های اضافی برای کارشناسان یا
          کاربران اضافه‌تر ممکن است دریافت شود اما در افراپرداز خبری از هزینه
          های اضافی نیست و شما بایکبار پرداخت از تمامی امکانات به صورت نامحدود
          استفاده می کنید
        </p>
      ),
    },
    {
      key: "5",
      label: "آیاامکان ارائه نسخه اختصاصی برای شرکت ها وجود دارد؟",
      children: (
        <p>
          بله، در افراپرداز، امکان ارائه نسخه اختصاصی نرم‌افزار برای شرکت‌ها
          وجود دارد. این نسخه‌ها معمولاً بر اساس نیازها و الزامات خاص هر شرکت
          طراحی و سفارشی‌سازی می‌شوند. برای اطلاعات بیشتر، بهتر است با تیم فروش
          یا پشتیبانی تماس بگیرید.
        </p>
      ),
    },
    {
      key: "6",
      label: "آیا این نرم افزار نسخه آزمایشی و تست هم دارد؟",
      children: (
        <p>
          بله، اکثر نرم‌افزارهای CRM، از جمله محصولات افراپرداز، معمولاً
          نسخه‌های آزمایشی و می‌کنند. این نسخه‌ها به کاربران امکان می‌دهند تا
          قابلیت‌ها و عملکرد نرم‌افزار را قبل از خرید اصلی امتحان کنند. برای
          دسترسی به نسخه آزمایشی، می‌توانید به وب‌سایت رسمی مراجعه کنید.
        </p>
      ),
    },
  ];

  return (
    <>
      <div className="w-full sm:hidden  lg:flex justify-between items-center">
        <div className="w-1/2 flex flex-col gap-5 ">
          <h1 className="text-3xl relative text-[var(--color-green)] font-black">
            ویژگی های افراپرداز
            <span className="class-heading"></span>
          </h1>
          <h2 className="text-black text-xl font-bold">
            آنچه خوبان همه دارند ، تو یک جا داری!
          </h2>
          <h3 className="text-justify font-normal  text-[14.4px] leading-7 text-gray-500">
            افراپرداز ، یکی از بهترین و جذاب ترین نرم افزار های حوزه مدیریت با
            ویژگی های خاصی که داره میتونه انتخاب جذابی برای شما باشه ، در ادامه
            این ویژگی ها رو براتون شرح میدیم.
          </h3>
          <div className="w-[400px] flex gap-3">
            <a href="/auth/register" className="w-1/2">
              <ButtonAfra type={"green"} text={"همین الان شروع کنید"} />
            </a>
            <a
              target="_blank"
              href="/downloads/catalog/afrapardaz.pdf"
              className="w-1/2"
            >
              <ButtonAfra type={"blue-dark"} text={"مشاهده کاتالوگ"} />
            </a>
          </div>
        </div>
        <div className=" w-1/2 flex justify-end">
          <span className="-ml-16">
            <Lottie options={defaultOptions2} height={450} width={450} />
          </span>
        </div>

        {/* <div
          class="absolute left-[calc(50%-4rem)]  -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-[15%]  "
          aria-hidden="true"
        >
          <div class="aspect-[1108/632]  w-[50.25rem] bg-gradient-to-r from-[var(--color-green)] to-primary opacity-20"></div>
        </div> */}
      </div>

      <div className="w-full mt-[5rem] lg:flex sm:hidden justify-center items-center">
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-3xl relative text-[var(--color-green)] font-black">
            ویژگی ها
            <span className="class-heading"></span>
          </h3>
          <span className="text-black text-xl font-bold">
            همه چی تو مشتته ، وقتی افراپرداز داری!
          </span>
          <div className="grid grid-cols-3 gap-3 w-full mt-4">
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={AmarImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                آمار و گزارشات دقیق
              </h4>
              <p className="text-[12px] w-full text-center">
                ارائه گزارشات دقیق و کلی از آمار ها و نمودار های سیستم به همراه
                محاسبه و تحلیل
              </p>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={TaskImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                مدیریت وظایف کلی
              </h4>
              <p className="text-[12px] w-full text-center">
                سیستم حرفه ای مدیریت وظایف کارکنان و پرسنل و ارائه گزارشات و
                آمار دقیق
              </p>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={ModImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                مدیریت کاربران
              </h4>
              <p className="text-[12px] w-full text-center">
                سیستم مدیریت پرسنل و کارکنان و مرخصی ها و ارائه گزارش کامل
                کارکنان و پرسنل
              </p>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={TrgtImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                مدیریت هدف گذاری ها
              </h4>
              <p className="text-[12px] w-full text-center">
                هدف گذاری و افزودن تارگت به مشتریان و کارشناسان در حوزه فروش
              </p>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={RoadMapImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                نقشه راه هوشمند
              </h4>
              <p className="text-[12px] w-full text-center">
                ارائه نقشه راه هدفمند و هوشمند برای کسب و کار شما و کمک به توسعه
                کسب و کار شما
              </p>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={PuzzleImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                قابلیت اتصال به وردپرس
              </h4>
              <p className="text-[12px] w-full text-center">
                اتصال به سیستم های مختلف از جمله سیستم پر طرفدار وردپرس و سینک
                کلی با این سیستم
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full">
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={AIImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                دستیار هوشمند افراپرداز
              </h4>
              <p className="text-[12px] w-full text-center">
                دستیار هوشمند افراپرداز ، دستیار هوشمند پرسش و پاسخ هوش مصنوعی
                افراپرداز برای راحتی شما
              </p>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={EtesalImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                اتصال به سیستم های حسابداری
              </h4>
              <p className="text-[12px] w-full text-center">
                اتصال به سیستم های حسابداری مختلف و ادغام کلی به این نرم افزار
                ها و سیستم ها
              </p>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={EdariImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                اتوماسیون اداری
              </h4>
              <p className="text-[12px] w-full text-center">
                سیستم حرفه ای اتوماسیون اداری ، نامه ها و مکاتبات و مدیریت و
                کنترل پرسنل
              </p>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={SetingImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                اتوماسیون تولید
              </h4>
              <p className="text-[12px] w-full text-center">
                اتوماسیون تولید ، پیش بینی تولید و سیستم انبارداری و بخش های
                دیگر در اتوماسیون تولید
              </p>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={MoamelatImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                اتوماسیون معاملات
              </h4>
              <p className="text-[12px] w-full text-center">
                اتوماسیون معاملات پیشرفته با ثبت کاریز به همراه گزارش و آمار کلی
                در سیستم
              </p>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={HesabImage} className="w-16" />
              <h4 className="font-bold text-black text-[14px]">
                اتوماسیون حسابداری
              </h4>
              <p className="text-[12px] w-full text-center">
                سیستم حسابداری کلی و حرفه ای با ریز ترین جزئیات و کامل ترین بخش
                ها در سیستم
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  mt-[8.5rem] lg:flex sm:hidden justify-center items-center">
        <div className="flex w-full flex-col gap-3 items-center">
          <h3 className="text-3xl relative text-[var(--color-green)] font-black">
            سوالات متداول
            <span className="class-heading"></span>
          </h3>
          <span className="text-black text-xl font-bold">
            سوالاتی که ممکن است در رابطه با افراپرداز به ذهن شما آمده باشد
          </span>
          <div className="w-full mt-4">
            <Collapse
              expandIconPosition="end"
              style={{ background: "#f4f5f7" }}
              accordion
              items={items}
            />
          </div>
          <div className="mt-4">
            <ButtonAfra type={"green"} text={"جواب خود را پیدا نکردید؟"} />
          </div>
        </div>
      </div>

      <div className="mt-10"></div>
    </>
  );
};

export default FeturesAppPage;
