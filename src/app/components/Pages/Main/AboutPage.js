"use client";

import Lottie from "react-lottie";
import animationData from "../../../../lottie/about.json";
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
import AbbasiImage from "../../../../../public/image/abbasi.jpg";
import MahyarImage from "../../../../../public/image/mahyar.jpg";
import MiladImage from "../../../../../public/image/milad.jpg";
import FtmhImage from "../../../../../public/image/haji.jpg";
import SajjadImage from "../../../../../public/image/sajad.jpg";
import ManoochImage from "../../../../../public/image/manooch.jpg";
import AshkanImage from "../../../../../public/image/ashkan.jpg";
import RajabImage from "../../../../../public/image/rajab.jpg";

//
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

const AboutPageApp = () => {
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
            درباره افراپرداز
            <span className="class-heading"></span>
          </h3>
          <h5 className="text-black text-xl font-bold">
            بیاید بیشتر در مورد افراپرداز بدانیم
          </h5>
          <h6 className="text-justify font-normal  text-[14.4px] leading-7 text-gray-500">
            ما یک تیم متعهد و حرفه‌ای هستیم که هدفمان ارائه بهترین راه‌حل‌های
            نرم‌افزاری برای مدیریت ارتباط با مشتریان (CRM) است. با سال‌ها تجربه
            در صنعت نرم‌افزار و آگاهی از نیازهای واقعی کسب‌وکارها، ما بر آن شدیم
            تا محصولی کاربرپسند و موثر را طراحی کنیم که به شما کمک کند روابط خود
            را با مشتریان بهبود ببخشید و روند کارهای روزمره را ساده‌تر کنید
          </h6>
          <div className="w-[400px] flex gap-3">
            <div className="flex gap-2">
              {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
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
            درباره افراپرداز
          </h3>
          <h5 className="text-black text-lg font-bold">
            بیاید بیشتر در مورد افراپرداز بدانیم
          </h5>
          <h6 className="text-justify font-normal  text-[16px] leading-7 text-gray-500">
            ما یک تیم متعهد و حرفه‌ای هستیم که هدفمان ارائه بهترین راه‌حل‌های
            نرم‌افزاری برای مدیریت ارتباط با مشتریان (CRM) است. با سال‌ها تجربه
            در صنعت نرم‌افزار و آگاهی از نیازهای واقعی کسب‌وکارها، ما بر آن شدیم
            تا محصولی کاربرپسند و موثر را طراحی کنیم که به شما کمک کند روابط خود
            را با مشتریان بهبود ببخشید و روند کارهای روزمره را ساده‌تر کنید
          </h6>
          <div className="w-full flex gap-3">
            <div className="flex gap-2">
              {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
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
            تیم افراپرداز
            <span className="class-heading"></span>
          </h3>
          <h5 className="text-black text-2xl font-bold">
            افراپرداز با این تیم جذاب رشد کرده است
          </h5>

          <div className="w-full mt-[4rem] ">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              autoplay={
                (true,
                {
                  delay: 5000,
                })
              }
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={LeaderImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    بنیانگذار و مدیرعامل افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    سعید
                    <span className="text-black font-bold">مهدوی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={FtmhImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    رئیس هیئت مدیره افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    فاطمه
                    <span className=" text-black font-bold">‌حاجی زاده</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image
                      src={MahyarImage}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </span>
                  <span className="text-gray-400 text-sm">
                    مدیر بخش نرم افزار و توسعه افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    مهیار
                    <span className="text-black font-bold">سلامتی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={NomaniImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    مدیر بخش مارکتینگ افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    پوریا
                    <span className="text-black font-bold">نعمانی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={MiladImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    مدیر بخش سئو افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    میلاد
                    <span className="text-black font-bold">حسن پور</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image
                      src={SajjadImage}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    سجاد
                    <span className="text-black font-bold">سجودی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={UserImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    صدرا
                    <span className="text-black font-bold">نادرجلال</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image
                      src={RajabImage}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    مهدی
                    <span className="text-black font-bold">‌رجبی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={UserImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    مبینا
                    <span className="text-black font-bold">بیگ محمدی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={AbbasiImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    آناهیتا
                    <span className="text-black font-bold">عباسی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={ManoochImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    مهدی
                    <span className="text-black font-bold">‌سلامتی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={UserImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    یاشار
                    <span className="text-black font-bold">تیموری</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={UserImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    امیر
                    <span className="text-black font-bold">زرگرزاده</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image
                      src={AshkanImage}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-[20px] ">
                    اشکان
                    <span className="text-black font-bold">‌تارویردی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="w-full mt-[4rem] sm:flex lg:hidden justify-between items-center gap-5">
        <div className="flex w-full flex-col gap-3 items-center">
          <h3 className="text-4xl text-[var(--color-green)] font-black">
            تیم افراپرداز
          </h3>
          <h5 className="text-black text-lg font-bold">
            افراپرداز با این تیم جذاب رشد کرده است
          </h5>

          <div className="w-full mt-[4rem] ">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              freeMode={true}
              autoplay={
                (true,
                {
                  delay: 5000,
                })
              }
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[FreeMode, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={LeaderImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    بنیانگذار و مدیرعامل افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    سعید
                    <span className="text-black font-bold">مهدوی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={FtmhImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    رئیس هیئت مدیره افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    فاطمه
                    <span className=" text-black font-bold">‌حاجی زاده</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image
                      src={MahyarImage}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </span>
                  <span className="text-gray-400 text-sm">
                    مدیر بخش نرم افزار و توسعه افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    مهیار
                    <span className="text-black font-bold">سلامتی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={NomaniImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    مدیر بخش مارکتینگ افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    پوریا
                    <span className="text-black font-bold">نعمانی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={MiladImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    مدیر بخش سئو افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    میلاد
                    <span className="text-black font-bold">حسن پور</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image
                      src={SajjadImage}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    سجاد
                    <span className="text-black font-bold">سجودی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={UserImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    صدرا
                    <span className="text-black font-bold">نادرجلال</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image
                      src={RajabImage}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    مهدی
                    <span className="text-black font-bold">‌رجبی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={UserImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    مبینا
                    <span className="text-black font-bold">بیگ محمدی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={AbbasiImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    آناهیتا
                    <span className="text-black font-bold">عباسی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={ManoochImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    مهدی
                    <span className="text-black font-bold">‌سلامتی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={UserImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    یاشار
                    <span className="text-black font-bold">تیموری</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image src={UserImage} className="w-32  rounded-full" />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    امیر
                    <span className="text-black font-bold">زرگرزاده</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-full h-[330px] hover:scale-95 transition-all duration-300 bg-zinc-200
 rounded-sm gap-5 flex flex-col justify-center items-center"
                >
                  <span className="">
                    <Image
                      src={AshkanImage}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </span>
                  <span className="text-gray-400 text-sm">
                    برنامه نویس افراپرداز
                  </span>
                  <span className="text-[var(--color-green)] font-bold text-2xl ">
                    اشکان
                    <span className="text-black font-bold">‌تارویردی</span>
                  </span>
                  <span>
                    <div className="flex gap-2">
                      {/* <div className="w-[150px]">
                <a href="/auth/login">
                  <ButtonAfra type={"green"} text={"وارد شوید"} />
                </a>
              </div> */}
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                      <div className="w-[45px]">
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
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="w-full lg:flex lg:flex-col sm:hidden gap-8 mt-[8rem]">
        <div className="w-full flex justify-between items-center gap-5">
          <div className="flex w-full flex-col gap-3 justify-center ">
            <h3 className="text-3xl text-[var(--color-green)] font-black">
              ماموریت و رسالت افراپرداز
            </h3>
            <h5 className="text-black text-lg font-bold">
              رسالت افراپرداز و کمی درباره رشد و توسعه افراپرداز
            </h5>
            <span className="text-gray-400 text-justify text-[14.4px]">
              افراپرداز در 1402 تأسیس گردید و از آن زمان با بهره‌مندی از تیمی
              مجرب و متعهد، به یکی از پیشگامان صنعت برنامه‌نویسی و توسعه
              نرم‌افزارهای تجاری تبدیل شده است. ما با تمرکز بر نوآوری و کیفیت،
              نرم‌افزارهایی ارائه می‌دهیم که به سازمان‌ها کمک می‌کند عملکرد
              بهتری داشته باشند مأموریت ما، ارائه راهکارهای فناوری اطلاعات
              سفارشی است که به کسب‌وکارها کمک می‌کند تا بهره‌وری و کارایی بیشتری
              را تجربه کنند. ما به دنبال ایجاد بلندمدت‌ترین و موثرترین روابط با
              مشتریان خود هستیم
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-5">
          <div className="flex w-full flex-col gap-3 justify-center ">
            <h3 className="text-3xl text-[var(--color-green)] font-black">
              ارزش‌ها و چشم‌انداز ما
            </h3>
            <h5 className="text-black text-lg font-bold">
              چشم انداز ها و ارزش های افراپرداز
            </h5>
            <span className="text-gray-400 text-justify text-[14.4px]">
              چشم‌انداز ما تبدیل شدن به یک نام معتبر جهانی در زمینه ارائه
              راهکارهای نرم‌افزاری است که منجر به موفقیت و رشد مشتریان ما
              می‌شود. نوآوری: ما به جستجوی راه‌حل‌های خلاقانه و نوآورانه برای
              چالش‌های مشتریان متمرکز هستیم. کیفیت: کیفیت در بالاترین اولویت ما
              قرار دارد و ما هر محصول را با دقت و توجه به جزئیات طراحی می‌کنیم.
              همکاری: ما به کار تیمی و برقراری روابط مؤثر با مشتریان اعتقاد
              داریم.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full sm:flex flex-col lg:hidden gap-12 mt-[4rem]">
        <div className="w-full flex justify-between items-center gap-5">
          <div className="flex w-full flex-col gap-3 justify-center ">
            <h3 className="text-2xl text-[var(--color-green)] font-bold">
              ماموریت و رسالت افراپرداز
            </h3>
            <h5 className="text-black text-lg font-bold">
              رسالت افراپرداز و کمی درباره رشد و توسعه افراپرداز
            </h5>
            <span className="text-gray-400 text-justify text-[14.4px]">
              افراپرداز در 1402 تأسیس گردید و از آن زمان با بهره‌مندی از تیمی
              مجرب و متعهد، به یکی از پیشگامان صنعت برنامه‌نویسی و توسعه
              نرم‌افزارهای تجاری تبدیل شده است. ما با تمرکز بر نوآوری و کیفیت،
              نرم‌افزارهایی ارائه می‌دهیم که به سازمان‌ها کمک می‌کند عملکرد
              بهتری داشته باشند مأموریت ما، ارائه راهکارهای فناوری اطلاعات
              سفارشی است که به کسب‌وکارها کمک می‌کند تا بهره‌وری و کارایی بیشتری
              را تجربه کنند. ما به دنبال ایجاد بلندمدت‌ترین و موثرترین روابط با
              مشتریان خود هستیم
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-5">
          <div className="flex w-full flex-col gap-3 justify-center ">
            <h3 className="text-2xl text-[var(--color-green)] font-black">
              ارزش‌ها و چشم‌انداز ما
            </h3>
            <h5 className="text-black text-lg font-bold">
              چشم انداز ها و ارزش های افراپرداز
            </h5>
            <span className="text-gray-400 text-justify text-[14.4px]">
              چشم‌انداز ما تبدیل شدن به یک نام معتبر جهانی در زمینه ارائه
              راهکارهای نرم‌افزاری است که منجر به موفقیت و رشد مشتریان ما
              می‌شود. نوآوری: ما به جستجوی راه‌حل‌های خلاقانه و نوآورانه برای
              چالش‌های مشتریان متمرکز هستیم. کیفیت: کیفیت در بالاترین اولویت ما
              قرار دارد و ما هر محصول را با دقت و توجه به جزئیات طراحی می‌کنیم.
              همکاری: ما به کار تیمی و برقراری روابط مؤثر با مشتریان اعتقاد
              داریم.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[6rem]"></div>
    </>
  );
};

export default AboutPageApp;
