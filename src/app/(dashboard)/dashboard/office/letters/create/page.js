"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useRouter } from "next/navigation";
import { Tabs } from "antd";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Select from "react-select";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const App = () => {
  const router = useRouter();
  const items = [
    {
      key: "1",
      label: "افزودن نامه صادره",
      children: (
        <div className="w-full flex flex-col gap-3 ">
          <div className="grid md:grid-cols-4 px-2 place-items-center mx-auto  lg:grid-cols-4 sm:grid-cols-1 gap-3 justify-center items-center w-full">
            <SelectCombo
              legend={"زونکن"}
              options={[]}
              placeholder={"زونکن را انتخاب کنید"}
            />
            <InputCom
              legend={"شماره نامه"}
              placeholder={"شماره نامه را وارد کنید"}
              type={"req"}
            />
            <InputCom
              legend={"موضوع"}
              placeholder={"موضوع نامه"}
              type={"req"}
            />
            <SelectCombo
              legend={"گیرنده"}
              option={[]}
              placeholder={"گیرنده را وارد کنید"}
            />
            <InputCom
              legend={"تاریخ نامه"}
              placeholder={"تاریخ را وارد کنید"}
              type={"req"}
            />
            <SelectCombo
              legend={"ارجاع به"}
              option={[]}
              placeholder={"جستجوی پرسنل"}
              type={"req"}
            />
            <SelectCombo
              legend={"عطف به"}
              option={[]}
              placeholder={""}
              type={"req"}
            />
            <InputCom
              legend={"توضیحات"}
              option={[]}
              placeholder={"توضیحات را وارد کنید"}
              type={"req"}
            />{" "}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <div className="h-[500px] px-3">
              <JoditEditor className="classletter" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const options = items.map((item) => ({ value: item.key, label: item.label }));
  const [selectedItem, setSelectedItem] = useState("1");

  const handleChange = (selectedOption) => {
    setSelectedItem(selectedOption.value);
  };

  const currentItem = items.find((item) => item.key === selectedItem);

  return (
    <div className="w-full max-h-[86vh] h-full">
      <CardStat
        type={"10"}
        title={"ایجاد نامه"}
        des={"ایجاد نامه برای کارکنان و پرسنل"}
        buttons={
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center md:flex-row gap-2 mb-4">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/")}
                  text={"بازگشت به داشبورد"}
                  type={"white-green-2"}
                />
              </div>
              <div className="w-[200px] ">
                <ButtonAfra type={"green"} text={"ثبت نهایی"} />
              </div>
            </div>
          </div>
        }
        data={<></>}
      />
    </div>
  );
};

export default App;
