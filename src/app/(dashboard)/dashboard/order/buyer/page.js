"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Buyerpage = () => {
  const router = useRouter();

  const [changeSelect, setChangeSelect] = useState("");

  const [changeInput, setChangeInput] = useState("grid");
  const [changeInput2, setChangeInput2] = useState("hidden");

  useEffect(() => {
    if (changeSelect.value == "1") {
      setChangeInput("grid");
      setChangeInput2("hidden");
    }
    if (changeSelect.value == "2") {
      setChangeInput("hidden");
      setChangeInput2("grid");
    }
  }, [changeSelect]);

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"خریدار"}
          des={""}
          buttons={
            <div className="flex gap-2">
              <div className="w-full flex justify-end items-center">
                <div className="w-[200px]">
                  <ButtonAfra type={"green"} text={"ثبت"} />
                </div>
              </div>
              <div className="w-[300px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/order")}
                  text={"بازکشت به سفارشات"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <>
              <div className="w-full grid grid-cols-4 gap-3">
                <SelectCombo
                  legend={"معرفی شخصیت"}
                  options={[
                    { value: "1", label: "حقیقی" },
                    { value: "2", label: "حقوقی" },
                  ]}
                  defaultValue={changeSelect}
                  onChange={setChangeSelect}
                />
              </div>
              <div
                className={`${changeInput} grid-cols-4 gap-3 justify-center items-center w-full mt-2`}
              >
                <InputCom
                  legend={"نام"}
                  placeholder={"نام خود را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"نام خانوادگی"}
                  placeholder={"نام خانوادگی خود را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"کدملی"}
                  placeholder={" کد ملی خود را وارد کنید"}
                  type={"req"}
                />

                <InputCom
                  legend={"شماره شناسنامه"}
                  placeholder={" شماره شناسنامه خود را وارد کنید"}
                  type={"req"}
                />

                <InputCom
                  legend={"تلفن همراه"}
                  placeholder={"تلفن همراه خود را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"تلفن ثابت"}
                  placeholder={"تلفن ثابت خود را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"کد پستی"}
                  placeholder={" کد پستی را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"آدرس"}
                  placeholder={"آدرس محل سکونت خود را وارد کنید"}
                  type={"req"}
                />
              </div>
              <div
                className={`${changeInput2} grid-cols-4 gap-3 justify-center items-center w-full mt-2`}
              >
                <InputCom
                  legend={"نام شرکت"}
                  placeholder={"نام شرکت را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"شناسه ملی"}
                  placeholder={" شناسه ملی را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"کد ثبت"}
                  placeholder={"   کد ثبت را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"کد پستی"}
                  placeholder={" کد پستی را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"تلفن همراه"}
                  placeholder={"تلفن همراه خود را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"تلفن ثابت"}
                  placeholder={"تلفن ثابت خود را وارد کنید"}
                  type={"req"}
                />
                <InputCom
                  legend={"آدرس"}
                  placeholder={"آدرس محل سکونت خود را وارد کنید"}
                  type={"req"}
                />
              </div>
            </>
          }
        />
      </div>
    </>
  );
};
export default Buyerpage;
