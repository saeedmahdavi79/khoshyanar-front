"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputCom from "@/app/components/modules/Inputs";
import CardStat from "@/app/components/modules/Card";
import SelectCombo from "@/app/components/modules/SelectCombo";
import ButtonAfra from "@/app/components/modules/Buttons";

const changeHandler = (e) => {
  setData2({ ...data2, [e.target.name]: e.target.value });
};

const addnewcontact = () => {
  const [selectedType, setSelectedType] = useState("حقوقی"); // پیش‌فرض "حقوقی"
  const [bgcolor, setBgColor] = useState("bg-[#F1F4F9]");

  const changeHandler = (e) => {
    // مدیریت تغییرات داده‌ها
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    if (type == "حقیقی") {
      setBgColor("bg-[#D7D7D7]");
    } else {
      setBgColor("bg-[#F1F4F9]");
    }
  };
  const router = useRouter();
  const goToSale = () => {
    router.push("/dashboard/sales");
  };
  return (
    <>
      <div className="w-full flex flex-col overflow-auto h-screen  px-6 gap-4 py-1">
        <div className="w-full flex justify-between items-center">
          <span className="text-black text-3xl py-6 font-bold">
            افزودن مشتری
          </span>
          <span className="w-1/4 flex gap-3">
            <ButtonAfra onClick={goToSale} text={"ثبت مشتری"} type={"green"} />
            <ButtonAfra
              onClick={() => location.replace("/dashboard")}
              text={"انصراف"}
              type={"blue-dark"}
            />
          </span>
        </div>

        <div className="w-full flex  flex-col h-full   gap-4 px-3 py-1">
          <div className="flex justify-center items-center gap-8">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleTypeChange("حقوقی")}
            >
              <input
                type="radio"
                name="type"
                checked={selectedType === "حقوقی"}
                readOnly
              />
              <span className="text-black">حقوقی (شرکت، فروشگاه یا موسسه)</span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleTypeChange("حقیقی")}
            >
              <input
                type="radio"
                name="type"
                checked={selectedType === "حقیقی"}
                readOnly
              />
              <span className="text-black">حقیقی (شخص عادی)</span>
            </div>
          </div>
          <div className="w-full grid grid-cols-4 items-center gap-4  ">
            <InputCom
              onChange={changeHandler}
              name={"companyName"}
              legend={"نام شرکت، فروشگاه یا موسسه"}
              type={"req"}
              bgcolor={bgcolor}
              placeholder={"وارد کنید..."}
              disabled={selectedType === "حقیقی"}
              className={`${
                selectedType === "حقیقی" ? "bg-gray-200 text-gray-500" : ""
              }`}
            />
            <SelectCombo
              options={[
                { value: "1", label: "سهامی عام" },
                { value: "2", label: "سهامی خاص" },
                { value: "3", label: "دولتی" },
                { value: "4", label: "خصوصی" },
                { value: "5", label: "تعاونی" },
              ]}
              name="type"
              onChange={changeHandler}
              legend={"نوع شرکت"}
              bgColor={bgcolor}
              placeholder={"نوع شرکت..."}
              disabled={selectedType === "حقیقی"}
              className={`${
                selectedType === "حقیقی" ? "bg-gray-200 text-gray-500" : ""
              }`}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"نام مدیر یا ارتباط اولیه با؟"}
              type={"req"}
              bgcolor={"bg-[#F1F4F9]"}
              placeholder={"وارد کنید..."}
            />
            <SelectCombo
              options={[
                {
                  value: "1",
                  label: "آقای",
                },
                {
                  value: "2",
                  label: "خانم",
                },
                {
                  value: "3",
                  label: "آقای دکتر",
                },
                {
                  value: "4",
                  label: "خانم دکتر",
                },
                {
                  value: "5",
                  label: "آقای مهندس",
                },
                {
                  value: "6",
                  label: "خانم مهندس",
                },
              ]}
              name="type"
              onChange={changeHandler}
              legend={"پیشوند"}
              bgColor={"bg-[#F1F4F9]"}
              placeholder={"پیشوند..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              bgcolor={"bg-[#F1F4F9]"}
              legend={"کد اشتراک / کد حسابداری"}
              type={"req"}
              placeholder={"وارد کنید..."}
            />
            <SelectCombo
              options={[
                {
                  value: "1",
                  label: "تامین کننده",
                },
                {
                  value: "2",
                  label: "مشتری",
                },
                {
                  value: "3",
                  label: "مشتری/تامین کننده",
                },
                {
                  value: "4",
                  label: "نماینده",
                },
                {
                  value: "5",
                  label: "همکار",
                },
              ]}
              name="type"
              onChange={changeHandler}
              legend={"نوع ارتباط"}
              bgColor={"bg-[#F1F4F9]"}
              placeholder={"نوع ارتباط..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              bgcolor={"bg-[#F1F4F9]"}
              legend={"جزئیات بیشتر نوع ارتباط"}
              type={"req"}
              placeholder={"وارد کنید..."}
            />
            <InputCom
              onChange={changeHandler}
              name={"registrationNumber"}
              legend={"شماره ثبت"}
              type={"req"}
              placeholder={"وارد کنید..."}
              bgcolor={bgcolor}
              disabled={selectedType === "حقیقی"}
              className={`${
                selectedType === "حقیقی" ? "bg-gray-200 text-gray-500" : ""
              }`}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"تاریخ ثبت / تولد"}
              type={"req"}
              bgcolor={"bg-[#F1F4F9]"}
              placeholder={"وارد کنید..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"شناسه ملی / کد ملی"}
              bgcolor={"bg-[#F1F4F9]"}
              type={"req"}
              placeholder={"وارد کنید..."}
            />
            <InputCom
              onChange={changeHandler}
              name={"economicCode"}
              legend={"کد اقتصادی"}
              type={"req"}
              placeholder={"وارد کنید..."}
              disabled={selectedType === "حقیقی"}
              bgcolor={bgcolor}
              className={`${
                selectedType === "حقیقی" ? "bg-gray-200 text-gray-500" : ""
              }`}
            />
            <SelectCombo
              options={[
                {
                  value: "1",
                  label: "آذربایجان شرقی",
                },
                {
                  value: "2",
                  label: "آذربایجان غربی",
                },
                {
                  value: "3",
                  label: "اردبیل",
                },
                {
                  value: "4",
                  label: "اصفهان",
                },
                {
                  value: "5",
                  label: "البرز",
                },
              ]}
              name="type"
              onChange={changeHandler}
              bgColor={"bg-[#F1F4F9]"}
              legend={"استان"}
              placeholder={"استان..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"شهرستان"}
              bgcolor={"bg-[#F1F4F9]"}
              type={"req"}
              placeholder={"وارد کنید..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"شهر"}
              bgcolor={"bg-[#F1F4F9]"}
              type={"req"}
              placeholder={"وارد کنید..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"بخش"}
              type={"req"}
              bgcolor={"bg-[#F1F4F9]"}
              placeholder={"وارد کنید..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"دهستان"}
              type={"req"}
              bgcolor={"bg-[#F1F4F9]"}
              placeholder={"وارد کنید..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"آدرس"}
              bgcolor={"bg-[#F1F4F9]"}
              type={"req"}
              placeholder={"وارد کنید..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"کد پستی"}
              type={"req"}
              bgcolor={"bg-[#F1F4F9]"}
              placeholder={"وارد کنید..."}
            />
            <SelectCombo
              options={[
                {
                  value: "1",
                  label: "تاسیسات ساختمانی",
                },
                {
                  value: "2",
                  label: "خانگی",
                },
                {
                  value: "3",
                  label: "خرید اداری",
                },
                {
                  value: "4",
                  label: "شرکت دارویی",
                },
                {
                  value: "5",
                  label: "شرکت ساختمانی",
                },
              ]}
              name="type"
              onChange={changeHandler}
              legend={"نوع فعالیت"}
              bgColor={"bg-[#F1F4F9]"}
              placeholder={"نوع فعالیت..."}
            />
            <SelectCombo
              options={[
                {
                  value: "1",
                  label: "آشنایی قبلی",
                },
                {
                  value: "2",
                  label: "آی استخدام",
                },
                {
                  value: "3",
                  label: "ایمیل مارکتینگ",
                },
                {
                  value: "4",
                  label: "اینستاگرام",
                },
                {
                  value: "5",
                  label: "بازرگانی تلفنی",
                },
              ]}
              name="type"
              onChange={changeHandler}
              legend={"نحوه آشنایی"}
              bgColor={"bg-[#F1F4F9]"}
              placeholder={"نحوه آشنایی..."}
            />
            <SelectCombo
              options={[
                {
                  value: "1",
                  label: "نمایشگاه تبریز",
                },
                {
                  value: "2",
                  label: "نمایشگاه تهران",
                },
              ]}
              name="type"
              onChange={changeHandler}
              legend={"جزئیات نحوه آشنایی"}
              bgColor={"bg-[#F1F4F9]"}
              placeholder={"جزئیات نحوه آشنایی..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              bgcolor={"bg-[#F1F4F9]"}
              legend={"تعداد کارکنان"}
              type={"req"}
              placeholder={"وارد کنید..."}
            />
            <SelectCombo
              options={[
                {
                  value: "1",
                  label: "مالک",
                },
                {
                  value: "2",
                  label: "استیجاری",
                },
                {
                  value: "3",
                  label: "سرقفلی",
                },
              ]}
              name="type"
              onChange={changeHandler}
              legend={"وضعیت مالکیت"}
              bgColor={"bg-[#F1F4F9]"}
              placeholder={"وضعیت مالکیت..."}
            />
            <InputCom
              onChenge={changeHandler}
              name={"title"}
              bgcolor={"bg-[#F1F4F9]"}
              legend={"رابط،ارتباطات و سایر توضیحات"}
              type={"req"}
              placeholder={"وارد کنید..."}
            />
          </div>
          {/* <span className="w-1/4 ml-auto flex gap-3 mt-7">
           
          </span> */}
        </div>
      </div>

      {/* <CardStat
        type={"10"}
        data={
          <>
       
          </>
        }
      /> */}
    </>
  );
};

export default addnewcontact;
