"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";

const Addtransactionpage = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center items-center w-full">
          <InputCom
            legend={"نام خانوادگی"}
            placeholder={"نام خانوادگی را وارد کنید"}
            type={"req"}
          />
          <InputCom
            legend={"نام شرکت"}
            placeholder={" نام شرکت را وارد کنید"}
            type={"req"}
          />
          <InputCom
            legend={"عنوان معامله"}
            placeholder={"معامله جدید"}
            type={"req"}
          />
          <InputCom
            legend={"مبلغ حدودی معامله"}
            placeholder={""}
            type={"req"}
          />
          <SelectCombo
            legend={"افزودن محصول"}
            options={[]}
            placeholder={"IRR"}
            type={"req"}
          />
          <InputCom
            legend={"کاریز"}
            placeholder={"کاریز شرکت Afra Team"}
            type={"req"}
          />
          <InputCom
            legend={"تاریخ احتمالی بسته شدن معامله"}
            placeholder={""}
            type={"date"}
          />
          <SelectCombo
            legend={"شیوه آشنایی"}
            options={[]}
            placeholder={"جهت تعریف کردن شیوه آشنایی اینجا را کلیک کنید"}
            type={"req"}
          />
          <SelectCombo
            legend={"مسؤل معامله"}
            options={[]}
            placeholder={"Afra Team"}
            type={"req"}
          />
          <InputCom />
        </div>
        <div className="w-full flex gap-3 mt-5 justify-start items-start">
          <div className="w-[200px] h-[45px]">
            <ButtonAfra
              type={"green"}
              text={<span>ذخیره به صورت فروش موفق</span>}
            />
          </div>
          <div className="w-[200px] h-[45px] flex">
            <ButtonAfra
              onClick={() => router.push("/dashboard/")}
              text={"ذخیره معامله"}
              type={"white-green-2"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Addtransactionpage;
