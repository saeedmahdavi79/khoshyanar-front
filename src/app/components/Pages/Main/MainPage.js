"use client";
import Lottie from "react-lottie";
import animationData from "../../../../lottie/amar.json";
import animationData2 from "../../../../lottie/dashboard.json";

import ButtonAfra from "../../../components/modules/Buttons";
import AmarImage from "../../../../../public/image/amar.svg";

import AIImage from "../../../../../public/image/mind.svg";
import EtesalImage from "../../../../../public/image/hamkar.svg";
import SetingImage from "../../../../../public/image/setting.svg";
import EdariImage from "../../../../../public/image/grp.svg";
import MoamelatImage from "../../../../../public/image/growth.svg";
import HesabImage from "../../../../../public/image/layer.svg";
import ImageNotif from "../../../../../public/image/notif-img.jpg";

import TaskImage from "../../../../../public/image/task.svg";
import ModImage from "../../../../../public/image/share.svg";
import TrgtImage from "../../../../../public/image/target.svg";
import RoadMapImage from "../../../../../public/image/roadmap.svg";
import PuzzleImage from "../../../../../public/image/puzzle.svg";
import SecureImage from "../../../../../public/image/security.svg";
import LeftImage from "../../../../../public/image/Left.svg";
import RightImage from "../../../../../public/image/Right.svg";

import IrancellImage from "../../../../../public/image/irancell.webp";
import TabiatImage from "../../../../../public/image/tabiat.png";
import UniImage from "../../../../../public/image/solar.jpg";
import TractorImage from "../../../../../public/image/Tractor_Logo.png";
import ZarinDashtImage from "../../../../../public/image/zarin.jpg";

import MahakImage from "../../../../../public/image/mahak.png";
import VistaImage from "../../../../../public/image/Vista .jpg";
import HamkaranImage from "../../../../../public/image/hamkaran.jpg";
import IraniCardImage from "../../../../../public/image/motogen.png";
import MahextImage from "../../../../../public/image/mahex.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import baseUrl from "@/utils/baseUrl";
import { HiCheckCircle } from "react-icons/hi2";
import ConvertEnNumberToPersian from "@/utils/numberConv";
import { Card, Collapse, Modal, Tag } from "antd";
import baseUrlBlog from "@/utils/baseUrlBlog";

const MainPageApp = () => {
  const [dataPlans, setDataPalns] = useState([]);
  const [dataBlog, setDataBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const [loadNotif, setLoadNotif] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);

  useEffect(() => {
    fetch(baseUrl("/plans/get"))
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataPalns([]) : setDataPalns(data.data.dataGet)
      );
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
          setDataBlog(results.slice(0, 3)); // تنها 6 آبجکت را به setDataBlog اضافه کنید
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setDataBlog([]); // در صورت وقوع خطا، آرایه خالی را تنظیم کنید
      });

    setOpenNotif(true);
    setLoadNotif(true);

    setTimeout(() => setLoadNotif(false), 2000);
  }, []);

  function separate(Number) {
    Number += "";
    Number = Number.replace(",", "");
    var x = Number.split(".");
    var y = x[0];
    var z = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
    console.log(z, y);

    return y + z;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
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
          <h1 className="text-3xl  relative text-[var(--color-green)] font-black">
            حال کسب و کارت خوبه
            <span className="class-heading"></span>
          </h1>
          <h2 className="text-black text-xl font-bold">
            چون مدیریت همه کاراتو به افراپرداز سپردی!
          </h2>
          <h3 className="text-justify font-normal  text-[14.4px] leading-7 text-gray-500">
            با افراپرداز تمامی مشکلات و دغدغه های کسب و کارت رو به صفر ضرب کن و
            از نهایت سرعت و دقت لذت ببر همچنین در افراپرداز میتونی ۷ روز به
            رایگان تمامی امکانات سیستم رو بررسی کنی با افراپرداز در اوج باش
            افراپرداز ابا امکانات و قیمت باورنکردنی که داره میتونه یه انتخاب خوب
            برای تمامی کسب وکار های کوچک تا حرفه ای باشه.
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
          <span className="-ml-20">
            <Lottie options={defaultOptions2} height={550} width={550} />
          </span>
        </div>

        <svg
          class="absolute inset-0 -z-10 h-full  w-full stroke-black/10 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-200/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          ></rect>
        </svg>

        {/* <div
          class="absolute left-[calc(50%-4rem)]  -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-[15%]  "
          aria-hidden="true"
        >
          <div class="aspect-[1108/632]  w-[50.25rem] bg-gradient-to-r from-[var(--color-green)] to-primary opacity-20"></div>
        </div> */}
      </div>

      <div className="w-full sm:flex flex-col lg:hidden justify-between items-center">
        <div className=" w-full flex justify-end">
          <span className="">
            <Lottie options={defaultOptions2} />
          </span>
        </div>
        <div className="w-full flex flex-col gap-5 ">
          <h1 className="text-3xl text-[var(--color-green)] font-black">
            افراپرداز
          </h1>
          <h2 className="text-zinc-100 text-lg font-bold">
            مدیریت یکپارچه رشد بی پایان
          </h2>
          <h3 className="text-justify font-normal  text-[16px] leading-7 text-gray-500">
            با افراپرداز تمامی مشکلات و دغدغه های کسب و کارت رو به صفر ضرب کن و
            از نهایت سرعت و دقت لذت ببر همچنین در افراپرداز میتونی ۷ روز به
            رایگان تمامی امکانات سیستم رو بررسی کنی با افراپرداز در اوج باش
            افراپرداز ابا امکانات و قیمت باورنکردنی که داره میتونه یه انتخاب خوب
            برای تمامی کسب وکار های کوچک تا حرفه ای باشه.
          </h3>
          <div className="w-full flex gap-3">
            <a href="/auth/register" className="w-1/2">
              <ButtonAfra type={"green"} text={"همین الان شروع کنید"} />
            </a>
            <a href="/" className="w-1/2">
              <ButtonAfra type={"blue-dark"} text={"مشاهده کاتالوگ"} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full mt-[4rem] lg:flex sm:hidden justify-center items-center">
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-3xl relative text-[var(--color-green)] font-black">
            ویژگی ها
            <span className="class-heading"></span>
          </h3>
          <span className="text-black text-xl font-bold">
            آن چه خوبان همه دارند ، تو یک جا داری!
          </span>
          <div className="grid grid-cols-4 gap-3 w-full mt-4">
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={AmarImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                آمار و گزارشات دقیق
              </h4>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={TaskImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                مدیریت وظایف کلی
              </h4>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={ModImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                مدیریت کاربران
              </h4>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={TrgtImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                مدیریت هدف گذاری ها
              </h4>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={RoadMapImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                نقشه راه هوشمند
              </h4>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={PuzzleImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                قابلیت اتصال به وردپرس
              </h4>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={AIImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                دستیار هوشمند افراپرداز
              </h4>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={EtesalImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                اتصال به سیستم های حسابداری
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 w-full">
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={EdariImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                اتوماسیون اداری
              </h4>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={SetingImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                اتوماسیون تولید
              </h4>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={MoamelatImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                اتوماسیون معاملات
              </h4>
            </div>
            <div className="bg-zinc-100  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={HesabImage} className="w-16" />
              <h4 className="font-normal text-black text-[14px]">
                اتوماسیون حسابداری
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:hidden sm:flex justify-center items-center mt-12">
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-3xl text-[var(--color-green)] font-black">
            ویژگی ها
          </h3>
          <span className="text-zinc-100 text-lg font-bold">
            ویژگی ها و خدمات افراپرداز در یک نگاه
          </span>
          <div className="grid grid-cols-2 gap-3 w-full mt-4">
            <div className="border  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={AmarImage} className="w-20" />
              <h4 className="font-bold text-sm">آمار و گزارشات دقیق</h4>
            </div>
            <div className="border  hover:scale-95 transition-all  text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={TaskImage} className="w-20" />
              <h4 className="font-bold text-sm">مدیریت وظایف کلی</h4>
            </div>
            <div className="border  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={ModImage} className="w-20" />
              <h4 className="font-bold text-sm">مدیریت کاربران</h4>
            </div>
            <div className="border  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={TrgtImage} className="w-20" />
              <h4 className="font-bold text-sm">مدیریت هدف گذاری ها</h4>
            </div>
            <div className="border  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={RoadMapImage} className="w-20" />
              <h4 className="font-bold text-sm">نقشه راه هوشمند</h4>
            </div>
            <div className="border  hover:scale-95 transition-all text-center duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-lg">
              <Image src={PuzzleImage} className="w-20" />
              <h4 className="font-bold text-sm">قابلیت اتصال به وردپرس</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[12rem]   lg:flex sm:hidden justify-center items-center">
        <span className=" absolute  right-0 max-w-[600px] w-auto">
          <Image src={RightImage} className="w-full grayscale" />
        </span>
        <span className=" absolute  left-0 max-w-[600px] w-auto">
          <Image src={LeftImage} className="w-full grayscale" />
        </span>

        <div className="flex w-full flex-col gap-3 items-center">
          <span className="w-full animate-bounce flex justify-center">
            <Image src={SecureImage} className="w-24" />
          </span>

          <h3 className="text-3xl relative text-[var(--color-green)] font-black">
            امنیت حرف اول و آخر
          </h3>
          <span className="text-black text-xl font-bold">
            ما در افراپرداز تلاش میکنیم که امنیت نرم‌افراز های خود را تامین کنیم
          </span>
          <span className="text-justify font-normal  text-[14px] text-gray-500">
            امنیت در افراپرداز همیشه حرف اول و آخر را می زند ما شبانه روز در
            تلاش هستیم تا به بهترین نحو امنیت اطلاعات کاربران خود را تامین کنیم
          </span>
          <div className="grid grid-cols-4 gap-3 w-full mt-4"></div>
        </div>
      </div>

      <div className="w-full mt-[4rem]   lg:hidden sm:flex justify-center items-center">
        <div className="flex w-full flex-col gap-3 items-center">
          <span className="w-full flex justify-center">
            <Image src={SecureImage} className="w-20" />
          </span>

          <h3 className="text-3xl text-[var(--color-green)] font-black">
            امنیت حرف اول و آخر
          </h3>
          <span className="text-zinc-100 text-[14px] text-center font-bold">
            ما در افراپرداز تلاش میکنیم که امنیت نرم‌افراز های خود را تامین کنیم
          </span>

          <div className="grid grid-cols-4 gap-3 w-full mt-4"></div>
        </div>
      </div>

      <div className="w-full mt-[12rem] lg:flex sm:hidden justify-between items-center gap-5">
        <div className="w-1/2 flex flex-col gap-5 ">
          <h3 className="text-3xl relative text-[var(--color-green)] font-black">
            مشتریان و همکاران
            <span className="class-heading"></span>
          </h3>
          <span className="text-black text-xl font-bold">
            چه برند ها و کسب و کار هایی به ما اعتماد کرده اند؟
          </span>
          <span className="text-justify font-normal  text-[14.4px] leading-7 text-gray-500">
            برند هایی که با استفاده از راهکار های افراپرداز توانسته اند فروش خود
            را تا ۳۰۰ درصد افزایش دهند و قدم در راه درست کسب و کار خود بگذارند
            چرا شما شخص بعدی نباشید ؟ شما می توانید ۷ روز از تمامی امکانات نرم
            افزار افراپرداز استفاده کنید همین الان شروع کنید
          </span>
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
        <div className="w-1/2 flex justify-end">
          <Swiper
            direction={"horizontal"}
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="grid grid-cols-5 gap-3">
                <div className="bg-white border border-zinc-200  hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={IrancellImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={ZarinDashtImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={TractorImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all overflow-hidden duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={UniImage} className="w-24 scale-150" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={TabiatImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={MahakImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={VistaImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={HamkaranImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all overflow-hidden duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={IraniCardImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={MahextImage} className="w-24 scale-110" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-5 gap-3">
                <div className="bg-white border border-zinc-200  hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={IrancellImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={ZarinDashtImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={TractorImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all overflow-hidden duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={UniImage} className="w-24 scale-150" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={TabiatImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={MahakImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={VistaImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={HamkaranImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all overflow-hidden duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={IraniCardImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white border border-zinc-200   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center  p-4 rounded-lg">
                  <Image src={MahextImage} className="w-24 scale-110" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="w-full mt-[4rem] sm:flex flex-col lg:hidden justify-between items-center gap-5">
        <div className="w-full flex justify-end">
          <Swiper
            direction={"horizontal"}
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={IrancellImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={ZarinDashtImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={TractorImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white   hover:scale-95 transition-all overflow-hidden duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={UniImage} className="w-24 scale-150" />
                </div>
                <div className="bg-white   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={TabiatImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={MahakImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={VistaImage} className="w-24 scale-110" />
                </div>
                <div className="bg-white   hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={HamkaranImage} className="w-24 scale-90" />
                </div>
                <div className="bg-white   hover:scale-95 transition-all overflow-hidden duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={IraniCardImage} className="w-24 scale-90" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-3 gap-3">
                <div className="border  hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={IrancellImage} className="w-24 scale-110" />
                </div>
                <div className="border  hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={ZarinDashtImage} className="w-24 scale-110" />
                </div>
                <div className="border  hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={TractorImage} className="w-24 scale-90" />
                </div>
                <div className="border  hover:scale-95 transition-all overflow-hidden duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={UniImage} className="w-24 scale-150" />
                </div>
                <div className="border  hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={TabiatImage} className="w-24 scale-110" />
                </div>
                <div className="border  hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={MahakImage} className="w-24 scale-90" />
                </div>
                <div className="border  hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={VistaImage} className="w-24 scale-110" />
                </div>
                <div className="border  hover:scale-95 transition-all duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={HamkaranImage} className="w-24 scale-90" />
                </div>
                <div className="border  hover:scale-95 transition-all overflow-hidden duration-300  flex flex-col gap-3 items-center justify-center border-gray-300 p-4 rounded-sm">
                  <Image src={IraniCardImage} className="w-24 scale-90" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full mt-4 flex flex-col gap-5 ">
          <h3 className="text-4xl w-full text-[var(--color-green)] font-black">
            مشتریان و همکاران
          </h3>
          <span className="text-black text-lg font-bold">
            چه برند ها و کسب و کار هایی به ما اعتماد کرده اند؟
          </span>
          <span className="text-justify font-normal  text-[16px] leading-7 text-gray-500">
            برند هایی که با استفاده از راهکار های افراپرداز توانسته اند فروش خود
            را تا ۳۰۰ درصد افزایش دهند و قدم در راه درست کسب و کار خود بگذارند
            چرا شما شخص بعدی نباشید ؟ شما می توانید ۷ روز از تمامی امکانات نرم
            افزار افراپرداز استفاده کنید همین الان شروع کنید
          </span>
          <div className="w-full flex gap-3">
            <ButtonAfra type={"green"} text={"همین الان شروع کنید"} />
            <ButtonAfra type={"blue-dark"} text={"مشاهده تعرفه ها"} />
          </div>
        </div>
      </div>

      <div className="w-full mt-[8.5rem] lg:flex sm:hidden justify-between items-center">
        <div className=" w-1/2 flex justify-start">
          <span className="-mr-16">
            <Lottie options={defaultOptions} height={450} width={450} />
          </span>
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-5 ">
          <h3 className="text-3xl relative text-[var(--color-green)] font-black">
            آمار و ارقام
            <span className="class-heading"></span>
          </h3>
          <span className="text-black text-xl font-bold">
            کمی از آمار و ارقام افراپرداز تا به امروز
          </span>
          <span className="text-justify font-normal  text-[14.4px] leading-7 text-gray-500">
            آمار و ارقام و افتخاری که افراپرداز در مدت زمان کوتاهی در این حوزه
            کسب کرده است ، همواره افراپرداز بر این باور است که جلب رضایت کاربران
            خود در الویت این تیم است و همیشه به دنبال راحتی کاربران خود است ،
            افراپرداز با این باور قدم به این بازار و حوزه گذاشته است و امید دارد
            تا همیشه خدماتی شایان به کاربران خود ارائه کند.
          </span>
          <div className="w-full flex gap-3">
            <ButtonAfra type={"green"} text={"۱۰۰۰+ کاربر"} />
            <ButtonAfra type={"blue-dark"} text={"۱۵۰+ کسب و کار"} />
            <ButtonAfra type={"green"} text={"۹۵%+ رضایت"} />
            <ButtonAfra type={"blue-dark"} text={"۳۰+ ماژول"} />
          </div>
        </div>
      </div>

      <div className="w-full mt-[4rem] sm:flex lg:hidden flex-col justify-between items-center">
        <div className=" w-full flex justify-start">
          <span className="">
            <Lottie options={defaultOptions} />
          </span>
        </div>
        <div className="w-full flex flex-col justify-center gap-5 ">
          <h3 className="text-3xl text-[var(--color-green)] font-black">
            آمار و ارقام
          </h3>
          <span className="text-blacks text-lg font-bold">
            کمی از آمار و ارقام افراپرداز تا به امروز
          </span>
          <span className="text-justify font-normal  text-[14.4px] leading-7 text-gray-500">
            آمار و ارقام و افتخاری که افراپرداز در مدت زمان کوتاهی در این حوزه
            کسب کرده است ، همواره افراپرداز بر این باور است که جلب رضایت کاربران
            خود در الویت این تیم است و همیشه به دنبال راحتی کاربران خود است ،
            افراپرداز با این باور قدم به این بازار و حوزه گذاشته است و امید دارد
            تا همیشه خدماتی شایان به کاربران خود ارائه کند.
          </span>
          <div className="w-full flex flex-col gap-3">
            <ButtonAfra type={"green"} text={"۱۰۰۰+ کاربر"} />
            <ButtonAfra type={"blue-dark"} text={"۱۵۰+ کسب و کار"} />
            <ButtonAfra type={"green"} text={"۹۵%+ رضایت"} />
            <ButtonAfra type={"blue-dark"} text={"۳۰+ ماژول"} />
          </div>
        </div>
      </div>

      <div className="w-full  mt-[8.5rem] lg:flex sm:hidden justify-center items-center">
        <div className="flex w-full flex-col gap-3 items-center">
          <h3 className="text-3xl relative text-[var(--color-green)] font-black">
            آخرین مقالات وبلاگ
            <span className="class-heading"></span>
          </h3>
          <span className="text-black text-xl font-bold">
            آخرین مقالاتی که در وبلاگ افراپرداز اضافه شده است را در این بخش
            ببینید
          </span>
          <div className="w-full mt-4 grid grid-cols-3 gap-6">
            {loading ? (
              <>
                <Card
                  loading={loading}
                  style={{
                    minWidth: "100%",
                  }}
                ></Card>
                <Card
                  loading={loading}
                  style={{
                    minWidth: "100%",
                  }}
                ></Card>
                <Card
                  loading={loading}
                  style={{
                    minWidth: "100%",
                  }}
                ></Card>
              </>
            ) : (
              ""
            )}

            {dataBlog.map((i) => (
              <div className="card glass w-full">
                <figure>
                  <img src={i.imagePf} alt="افراپرداز" />
                </figure>
                <div className="card-body flex flex-col gap-4">
                  <h2 className="card-title text-lg text-black">
                    {i.title.rendered}
                  </h2>
                  <p className="text-justify text-[12px] text-zinc-400">
                    {i.excerpt.rendered
                      .replaceAll("<p>", "")
                      .replaceAll("</p>", "")
                      .replaceAll("#", "")
                      .replaceAll("&", "")
                      .replaceAll("8230", "")
                      .replaceAll(";", "")}
                  </p>
                  <div className="card-actions justify-center mt-4">
                    <a href={i.link} target="_blank" className="w-1/2">
                      <ButtonAfra type={"green"} text={"مشاهده"} />
                    </a>
                  </div>
                </div>
              </div>

              // <div className="card image-full w-full shadow-xl">
              //   <figure>
              //     <img src={i.imagePf} alt="افراپرداز" />
              //   </figure>
              //   <div className="card-body">
              //     <h2 className="card-title text-zinc-100 font-bold text-xl">
              //       {i.title.rendered}
              //     </h2>
              //     <p className="text-zinc-200 text-[14px]">
              //       {i.excerpt.rendered
              //         .replaceAll("<p>", "")
              //         .replaceAll("</p>", "")
              //         .replaceAll("#", "")
              //         .replaceAll("&", "")
              //         .replaceAll("8230", "")
              //         .replaceAll(";", "")}
              //     </p>
              //     <div className="flex justify-center w-full">
              //       <span className="w-1/2">
              //         <ButtonAfra type={"green"} text={"مشاهده"} />
              //       </span>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
          <div className="mt-4">
            <a href="https://blog.afrapardaz.com" target="_blank">
              <ButtonAfra type={"blue-dark"} text={"مشاهده وبلاگ افراپرداز"} />
            </a>
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

      <div className="w-full mt-[4rem] sm:flex lg:hidden justify-center items-center">
        <div className="flex w-full flex-col gap-3 items-center">
          <h3 className="text-4xl text-[var(--color-green)] font-black">
            سوالات متداول
          </h3>
          <span className="text-zinc-100 text-center text-lg font-bold">
            سوالاتی که ممکن است در رابطه با افراپرداز به ذهن شما آمده باشد
          </span>
          <div className="w-full mt-4">
            <Collapse expandIconPosition="end" accordion items={items} />
          </div>
          <div className="mt-4">
            <ButtonAfra type={"green"} text={"جواب خود را پیدا نکردید؟"} />
          </div>
        </div>
      </div>

      <div className="w-full mt-[8.5rem]"></div>

      <Modal
        className="h-[30rem] relative"
        footer={<div className="w-full flex gap-3 mt-5 items-end"></div>}
        open={openNotif}
        onCancel={() => setOpenNotif(false)}
      >
        <div className="w-full rounded-t-lg overflow-hidden absolute top-0 left-0 right-0 ">
          <Image src={ImageNotif} className="w-full" />
        </div>
        <Tag color="blue" className=" absolute top-2 p-1 right-2">
          نسخه جدید افراپرداز منتشر شد
        </Tag>
        <div className="w-full mt-3 absolute left-0 right-0 p-4 top-[17rem] rounded-b-lg bg-white flex flex-col gap-3">
          <span className="font-black text-lg text-black">
            تغییرات اخیر نسخه (0.1.1) :
          </span>
          <span className="font-normal text-sm text-zinc-600">
            - اضافه شدن دستیار هوشمند
          </span>
          <span className="font-normal text-sm text-zinc-600">
            - بهبود بخش اداری و پرسنل
          </span>
          <span className="font-normal text-sm text-zinc-600">
            - بهبود بخش تولید
          </span>
          <span className="font-normal text-sm text-zinc-600">
            - بهبود بخش فروش
          </span>
          <span className="font-normal text-sm text-zinc-600">
            - بهبود بخش وظایف
          </span>

          <div className="w-full">
            <ButtonAfra
              onClick={() => setOpenNotif(false)}
              type={"green"}
              text={"متوجه شدم"}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MainPageApp;
