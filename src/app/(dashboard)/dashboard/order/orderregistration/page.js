"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useRouter } from "next/navigation";

const orderregistrationPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"ثبت سفارش"}
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
            <div className="grid grid-cols-4 gap-3 justify-center items-center w-full">
              <InputCom
                legend={"نام خریدار"}
                placeholder={"نام خریدار را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"تاریخ ثبت سفارش"}
                placeholder={"  تاریخ ثبت سفارش را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"نام محصول"}
                placeholder={"   نام محصول را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"تعداد"}
                option={[]}
                placeholder={"تعداد را وارد کنید"}
              />
              <InputCom
                legend={" قیمت فروش"}
                placeholder={"   قیمت فروش را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"تخفیف"}
                placeholder={"   کد تخفیف را وارد کنید"}
                type={"date"}
              />
              <SelectCombo
                legend={"محصولات"}
                placeholder={" محصول مورد نظر را انتخاب کنید"}
                type={"req"}
                options={[]}
              />
            </div>
          }
        />
      </div>
    </>
  );
};

export default orderregistrationPage;
