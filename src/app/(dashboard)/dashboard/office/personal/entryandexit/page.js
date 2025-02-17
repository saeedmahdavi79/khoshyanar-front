"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import TableAfra from "@/app/components/modules/TableAfra";
import Link from "next/link";
import { useEffect, useState } from "react";

const Entryexitpage = () => {
  const [changeSelect, setChangeselect] = useState("");
  const [changeSelect2, setChangeselect2] = useState("");
  const [changeSelect3, setChangeselect3] = useState("");
  const [showInput, setShowInput] = useState("hidden");
  const [showInput2, setShowInput2] = useState("hidden");
  const [showInput3, setShowInput3] = useState("hidden");

  useEffect(() => {
    if (
      changeSelect.value == "1" ||
      changeSelect.value == "2" ||
      changeSelect.value == "3"
    ) {
      setShowInput("block");
    } else {
      setShowInput("hidden");
    }
  }, [changeSelect]);
  useEffect(() => {
    if (
      changeSelect2.value == "1" ||
      changeSelect2.value == "2" ||
      changeSelect2.value == "3"
    ) {
      setShowInput2("block");
    } else {
      setShowInput2("hidden");
    }
  }, [changeSelect2]);
  useEffect(() => {
    if (
      changeSelect3.value == "1" ||
      changeSelect3.value == "2" ||
      changeSelect3.value == "3"
    ) {
      setShowInput3("block");
    } else {
      setShowInput3("hidden");
    }
  }, [changeSelect3]);
  return (
    <>
      <div className="w-full  h-full">
        <CardStat
          type={"10"}
          title={"ورود و خروج"}
          des={"بخش ثبت ورود و خروج کارکنان"}
          buttons={
            <div className="grid sm:grid-cols-1  gap-4 place-items-center  ">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:w-[200px] md:w-full gap-4 place-items-center    ">
                <span className="w-full">
                  <Link href={"/dashboard/office/personal/entryandexit"}>
                    <ButtonAfra type={"green"} text={<span>ثبت</span>} />
                  </Link>
                </span>
                <div className="w-full flex">
                  <ButtonAfra
                    onClick={() => router.push("/dashboard/")}
                    text={"بازگشت به داشبورد"}
                    type={"white-green-2"}
                  />
                </div>
              </div>
            </div>
          }
          data={
            <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center items-center w-full">
              <InputCom
                legend={"وضعیت روز کاری/شروع ساعت کار"}
                placeholder={"  ساعت شروع کار را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"شیفت کاری"}
                option={[]}
                placeholder={"شیفت خود را وارد کنید"}
              />
              <InputCom
                legend={"ورود"}
                placeholder={"  ساعت ورود خود را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"خروج"}
                placeholder={"  ساعت خروج  خود را وارد کنید"}
                type={"req"}
              />
              <SelectCombo
                defaultValue={changeSelect}
                onChange={setChangeselect}
                legend={"جمع کارکرد"}
                options={[
                  {
                    value: "1",
                    label: "روز",
                  },
                  {
                    value: "2",
                    label: "شب",
                  },
                  {
                    value: "3",
                    label: "روز و شب",
                  },
                ]}
                placeholder={" جمع کارکرد خود را وارد کنید"}
                type={"req"}
              />
              <div className={`${showInput}`}>
                <InputCom
                  legend={"جمع کارکرد"}
                  placeholder={"  جمع کارکرد خود را وارد کنید"}
                  type={"req"}
                />
              </div>
              <SelectCombo
                defaultValue={changeSelect2}
                onChange={setChangeselect2}
                legend={"اضافه کار"}
                options={[
                  {
                    value: "1",
                    label: "روز",
                  },
                  {
                    value: "2",
                    label: "شب",
                  },
                  {
                    value: "3",
                    label: "روز و شب",
                  },
                ]}
                placeholder={" جمع اضافه کار خود را وارد کنید"}
                type={"req"}
              />
              <div className={`${showInput2}`}>
                <InputCom
                  legend={"جمع اضافه"}
                  placeholder={"  جمع اضافه کار خود را وارد کنید"}
                  type={"req"}
                />
              </div>
              <SelectCombo
                defaultValue={changeSelect3}
                onChange={setChangeselect3}
                legend={"تاخیر و تعجیل"}
                options={[
                  {
                    value: "1",
                    label: "روز",
                  },
                  {
                    value: "2",
                    label: "شب",
                  },
                  {
                    value: "3",
                    label: "روز و شب",
                  },
                ]}
                placeholder={" جمع تاخیر و تعجیل خود را انتخاب کنید"}
                type={"req"}
              />
              <div className={`${showInput3}`}>
                <InputCom
                  legend={"تاخیر و تعجیل"}
                  placeholder={"  جمع تاخیر و تعجیل خود را وارد کنید"}
                  type={"req"}
                />
              </div>
              <InputCom
                legend={"وضعیت تاخیر و  تعجیل"}
                placeholder={" وضعیت را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"ساعت ناهار و استراحت"}
                placeholder={""}
                type={"req"}
              />
              <InputCom />
            </div>
          }
        />
      </div>
    </>
  );
};
export default Entryexitpage;
