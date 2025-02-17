"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import baseUrl from "@/utils/baseUrl";
import ConvertEnNumberToPersian from "@/utils/numberConv";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiCheckCircle } from "react-icons/hi2";
import { LuChevronLeft } from "react-icons/lu";

const plansPage = () => {
  const [dataPlans, setDataPalns] = useState([]);

  const [buttonText, setButtonText] = useState("پرداخت صورتحساب");

  const [show, setShow] = useState("hidden");
  const [duration, setDuration] = useState("انتخاب کنید");
  const [price, setPrice] = useState("انتخاب کنید");
  const [des, setDes] = useState("انتخاب کنید");
  const [payLink, setPayLink] = useState("");

  const router = useRouter();
  useEffect(() => {
    fetch(baseUrl("/plans/get"))
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataPalns([]) : setDataPalns(data.data.dataGet)
      );
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

  const createOrder = async ({ price, paymethod, des, duration, id }) => {
    const getCookiess = await getCookie("WuZiK");

    try {
      const createOrder = await fetch(baseUrl("/plans/create-order"), {
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookiess}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderPrice: price,
          orderPayMethod: paymethod,
          orderDes: des,
          orderPDR: id,
        }),
      });

      const getResponse = await createOrder.json();

      const createPay = await fetch(baseUrl("/plans/pay-order"), {
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookiess}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: getResponse.orderId,
        }),
      });

      const getResponsePay = await createPay.json();

      setDes(des);
      setPrice(price);
      setDuration(duration);

      setShow("flex");
      setPayLink(getResponsePay.trackId);
    } catch (error) {
      console.log(error);
    }
  };

  const goPayOrder = () => {
    setButtonText("انتقال به درگاه پرداخت...");
    router.push(`https://gateway.zibal.ir/start/${payLink}`);
  };

  const inputOnChenge = () => {};

  const [showName, setShowName] = useState(true);
  const [showPersonel, setPersonel] = useState(false);
  const [showLeave, setLeave] = useState(false);
  const [handleActive, setHandleActive] = useState("sub-menu-active");
  const [handleActive2, setHandleActive2] = useState("sub-menu-deactive");
  const [handleActive3, setHandleActive3] = useState("sub-menu-deactive");

  const handleShowName = () => {
    setShowName(true);
    setPersonel(false);
    setLeave(false);
    setHandleActive("sub-menu-active");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
  };

  const handleShowPersonel = () => {
    setShowName(false);
    setPersonel(true);
    setLeave(false);
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-active");
    setHandleActive3("sub-menu-deactive");
  };

  const handleShowLeave = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(true);
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-active");
  };

  return (
    <>
      {/* <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"ارتقا پلن به حالت پیشرفته"}
          des={
            "در این بخش می توانید پلن های مورد استفاده خود را به حالت پیشرفته ارتقا دهید"
          }
          buttons={
            <div className="flex flex-col xl:flex-row md:flex-row lg:flex-row gap-3">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("#")}
                  text={"ارتباط با پشتیبانی"}
                  type={"green"}
                />
              </div>
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => location.replace("/dashboard/")}
                  text={"بازکشت به داشبورد"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <>
              <div className="w-4/5 grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 sm:w-full sm:grid-cols-1  mx-auto pt-12 justify-center items-center gap-3 px-3">
                {dataPlans.map((plans) => (
                  <>
                    <div className="w-full h-fit relative rounded-xl border flex flex-col px-2 justify-between py-3  items-center ">
                      <div className="flex flex-col justify-center items-center gap-6">
                        {plans.planDiscount == "0" ? (
                          ""
                        ) : (
                          <div className="text-white bg-[var(--color-green)] shadow-md h-[50px] absolute top-0 left-4 px-3 flex justify-center items-center rounded-b-full ">
                            {ConvertEnNumberToPersian(plans.planDiscount)}%
                          </div>
                        )}

                        <div className="font-bold text-2xl  text-[var(--color-green)] rounded-xl p-3">
                          پلن {plans.planName}
                        </div>
                        <div className="text-gray-500 w-full  text-center md:text-sm lg:text-sm sm:text-[14px]   xl:text-sm font-bold">
                          {plans.planDetails}
                        </div>
                        <div>
                          <ul className="text-center text-sm flex flex-col justify-start items-start gap-3 font-normal">
                            <li className="flex gap-2 justify-between items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />
                              تمامی ماژول ها فعال
                            </li>
                            <li className="flex gap-2 justify-center items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                              بی نهایت کاربر
                            </li>

                            <li className="flex gap-2 justify-center items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                              بی نهایت مشتری
                            </li>

                            <li className="flex gap-2 justify-center items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                              بی نهایت سر نخ
                            </li>
                            <li className="flex gap-2 justify-center items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                              بخش پرسنل و اداری
                            </li>
                            <li className="flex gap-2 justify-center items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                              بخش مدیریت وظایف
                            </li>
                            <li className="flex gap-2 justify-center items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                              گزارش گیری و آمار دقیق
                            </li>
                            <li className="flex gap-2 justify-center items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                              دارای پنل پیامک
                            </li>
                            <li className="flex gap-2 justify-center items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                              قابلیت اتصال به نرم افزار حسابداری
                            </li>
                            <li className="flex gap-2 justify-center items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                              قابلیت اتصال به وردپرس
                            </li>
                            <li className="flex gap-2 justify-center items-center">
                              <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                              پشتیبانی 24 ساعته
                            </li>
                          </ul>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <ButtonAfra
                            type={"blue-dark"}
                            text={`قیمت : ${ConvertEnNumberToPersian(
                              separate(parseInt(plans.planPrice))
                            )
                              .toString()
                              .replace("undefined", ",")
                              .replace("undefined", ",")
                              .replace("undefined", ",")
                              .replace("undefined", ",")} ریال`}
                          />
                          <ButtonAfra
                            onClick={() =>
                              createOrder({
                                price: plans.planPrice,
                                paymethod: "zibal",
                                des: plans.planDetails,
                                duration: plans.planName,
                                id: plans._id,
                              })
                            }
                            type={"green"}
                            text={"انتخاب این پلن"}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              <div
                className={`w-4/5 flex flex-col justify-center items-center mx-auto mt-12 ${show}`}
              >
                <div className="bg-[var(--color-blue-bc)] rounded-xl w-2/4 flex flex-col justify-center p-4 h-full ">
                  <span className="font-bold text-xl text-[var(--color-blue)]">
                    مشخصات پلن
                  </span>
                  <span className="text-sm text-[var(--color-blue)]">
                    مشخصات پلن انتخابی شما جهت خرید ، لطفا در صورت مشکل با ما در
                    ارتباط باشید
                  </span>
                  <div className="w-full h-[0.2px] mt-5 bg-[var(--color-blue)]"></div>
                  <div className="flex mt-3 flex-col gap-3 text-[var(--color-blue)]">
                    <span>
                      <span className="font-bold">مدت پلن</span> : {duration}
                    </span>
                    <span>
                      <span className="font-bold">توضیحات پلن</span> : {des}
                    </span>
                    <span>
                      <span className="font-bold">قیمت پلن</span> :{" "}
                      {ConvertEnNumberToPersian(separate(parseInt(price)))
                        .toString()
                        .replace("undefined", ",")
                        .replace("undefined", ",")
                        .replace("undefined", ",")
                        .replace("undefined", ",")}
                      ریال
                    </span>
                  </div>
                </div>
                <div className="w-2/4 flex justify-center mt-4">
                  <div className=" w-fit flex flex-col gap-6 justify-center items-center">
                    <span className="text-lg font-bold">درگاه پرداخت</span>
                    <span>
                      <a href="#" title="پرداخت آنلاین زیبال">
                        <img
                          className="h-[85px]"
                          src="https://zibal.ir/trust/assets/1.png"
                          border="0"
                          alt="پرداخت آنلاین زیبال"
                        />
                      </a>
                    </span>
                    <input type="radio" onChange={inputOnChenge} checked />
                    <div className="w-full">
                      <ButtonAfra
                        onClick={goPayOrder}
                        type={"green"}
                        text={buttonText}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />
      </div> */}
      <div className="w-full flex flex-col  h-full px-6 gap-4 py-1">
        <div className="w-full flex justify-start items-center">
          <span className="text-black text-3xl py-6 font-bold">
            ارتقای حساب کاربری
          </span>
        </div>
        <div className="w-full flex gap-3 h-full">
          <div className="bg-white flex flex-col rounded-lg w-1/5 h-[calc(100%-5rem)] p-5 border border-zinc-200">
            <ButtonAfra
              type={"green"}
              onClick={() => location.replace("/dashboard")}
              text={"بازگشت به پیشخوان"}
            />

            <span className="text-[14px] mt-5">بخش های داخلی</span>
            <div className="w-full flex flex-col gap-3 mt-5">
              <span
                onClick={handleShowName}
                className={`w-full cursor-pointer p-2 ${handleActive} flex justify-between items-center rounded-lg`}
              >
                پنل های اشتراک
                <LuChevronLeft />
              </span>
              <span
                onClick={handleShowPersonel}
                className={`w-full cursor-pointer p-2 ${handleActive2} flex justify-between items-center rounded-lg`}
              >
                گزارشات اکانت
                <LuChevronLeft />
              </span>
            </div>
          </div>
          <div className="w-4/5">
            {showName ? (
              <CardStat
                type={"10"}
                title={"پلن های اشتراکی"}
                des={"پلن های اشتراک با مدت زمان مختلف در اختیار شماست"}
                data={
                  <>
                    <div className="w-4/5 grid xl:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 sm:w-full sm:grid-cols-1  mx-auto pt-12 justify-center items-center gap-3 px-3">
                      {dataPlans.map((plans) => (
                        <>
                          <div className="w-full pattern h-fit relative rounded-xl border flex flex-col  justify-between py-3  items-center ">
                            <div className="flex flex-col justify-center items-center gap-6">
                              {plans.planDiscount == "0" ? (
                                ""
                              ) : (
                                <div className="text-white bg-[var(--color-green)] shadow-md h-[50px] absolute top-0 left-4 px-3 flex justify-center items-center rounded-b-full ">
                                  {ConvertEnNumberToPersian(plans.planDiscount)}
                                  %
                                </div>
                              )}

                              <div className="font-bold text-2xl  text-[var(--color-green)] rounded-xl p-3">
                                پلن {plans.planName}
                              </div>
                              <div className="text-gray-500 w-full  text-center md:text-sm lg:text-sm sm:text-[14px]   xl:text-sm font-bold">
                                {plans.planDetails}
                              </div>
                              <div>
                                <ul className="text-center text-sm flex flex-col justify-start items-start gap-3 font-normal">
                                  <li className="flex gap-2 justify-between items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />
                                    تمامی ماژول ها فعال
                                  </li>
                                  <li className="flex gap-2 justify-center items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                                    بی نهایت کاربر
                                  </li>

                                  <li className="flex gap-2 justify-center items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                                    بی نهایت مشتری
                                  </li>

                                  <li className="flex gap-2 justify-center items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                                    بی نهایت سر نخ
                                  </li>
                                  <li className="flex gap-2 justify-center items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                                    بخش پرسنل و اداری
                                  </li>
                                  <li className="flex gap-2 justify-center items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                                    بخش مدیریت وظایف
                                  </li>
                                  <li className="flex gap-2 justify-center items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                                    گزارش گیری و آمار دقیق
                                  </li>
                                  <li className="flex gap-2 justify-center items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                                    دارای پنل پیامک
                                  </li>
                                  <li className="flex gap-2 justify-center items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                                    قابلیت اتصال به نرم افزار حسابداری
                                  </li>
                                  <li className="flex gap-2 justify-center items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                                    قابلیت اتصال به وردپرس
                                  </li>
                                  <li className="flex gap-2 justify-center items-center">
                                    <HiCheckCircle className="text-[var(--color-green)]" />{" "}
                                    پشتیبانی 24 ساعته
                                  </li>
                                </ul>
                              </div>
                              <div className="w-full flex flex-col gap-2">
                                <ButtonAfra
                                  type={"blue-dark"}
                                  text={`قیمت : ${ConvertEnNumberToPersian(
                                    separate(parseInt(plans.planPrice))
                                  )
                                    .toString()
                                    .replace("undefined", ",")
                                    .replace("undefined", ",")
                                    .replace("undefined", ",")
                                    .replace("undefined", ",")} ریال`}
                                />
                                <ButtonAfra
                                  onClick={() =>
                                    createOrder({
                                      price: plans.planPrice,
                                      paymethod: "zibal",
                                      des: plans.planDetails,
                                      duration: plans.planName,
                                      id: plans._id,
                                    })
                                  }
                                  type={"green"}
                                  text={"انتخاب این پلن"}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>

                    <div
                      className={`w-4/5 flex flex-col justify-center items-center mx-auto mt-12 ${show}`}
                    >
                      <div className="bg-[var(--color-blue-bc)] rounded-xl w-2/4 flex flex-col justify-center p-4 h-full ">
                        <span className="font-bold text-xl text-[var(--color-blue)]">
                          مشخصات پلن
                        </span>
                        <span className="text-sm text-[var(--color-blue)]">
                          مشخصات پلن انتخابی شما جهت خرید ، لطفا در صورت مشکل با
                          ما در ارتباط باشید
                        </span>
                        <div className="w-full h-[0.2px] mt-5 bg-[var(--color-blue)]"></div>
                        <div className="flex mt-3 flex-col gap-3 text-[var(--color-blue)]">
                          <span>
                            <span className="font-bold">مدت پلن</span> :{" "}
                            {duration}
                          </span>
                          <span>
                            <span className="font-bold">توضیحات پلن</span> :{" "}
                            {des}
                          </span>
                          <span>
                            <span className="font-bold">قیمت پلن</span> :{" "}
                            {ConvertEnNumberToPersian(separate(parseInt(price)))
                              .toString()
                              .replace("undefined", ",")
                              .replace("undefined", ",")
                              .replace("undefined", ",")
                              .replace("undefined", ",")}
                            ریال
                          </span>
                        </div>
                      </div>
                      <div className="w-2/4 flex justify-center mt-4">
                        <div className=" w-fit flex flex-col gap-6 justify-center items-center">
                          <span className="text-lg font-bold">
                            درگاه پرداخت
                          </span>
                          <span>
                            <a href="#" title="پرداخت آنلاین زیبال">
                              <img
                                className="h-[85px]"
                                src="https://zibal.ir/trust/assets/1.png"
                                border="0"
                                alt="پرداخت آنلاین زیبال"
                              />
                            </a>
                          </span>
                          <input
                            type="radio"
                            onChange={inputOnChenge}
                            checked
                          />
                          <div className="w-full">
                            <ButtonAfra
                              onClick={goPayOrder}
                              type={"green"}
                              text={buttonText}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            ) : (
              ""
            )}
            {showPersonel ? (
              <CardStat
                type={"10"}
                title={"کارکنان و پرسنل"}
                des={"کارکنان و پرسنل خود را در این بخش ببینید"}
              />
            ) : (
              ""
            )}
            {showLeave ? (
              <CardStat
                type={"10"}
                title={"مرخصی ها"}
                des={"مرخصی ها و درخواست های خود را در این بخش ببینید"}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default plansPage;
