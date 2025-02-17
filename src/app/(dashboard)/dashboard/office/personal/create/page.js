"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useRouter } from "next/navigation";

const personelCreatePage = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"پرسنل و کارکنان"}
          des={"بخش کارکنان و پرسنل ثبت شده در سیستم"}
          buttons={
            <div className="flex items-center  gap-2">
              <div className="w-[200px]">
                <ButtonAfra type={"green"} text={"ثبت نهایی"} />
              </div>
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/office/personal")}
                  text={"بازگشت به پرسنل"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center items-center w-full">
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
                legend={"گیرنده"}
                option={[]}
                placeholder={"گیرنده را وارد کنید"}
              />
              <InputCom
                legend={"شماره شناسنامه"}
                placeholder={" شماره شناسنامه خود را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"تاریخ تولد"}
                placeholder={" تاریخ تولد خود را وارد کنید"}
                type={"date"}
              />
              <SelectCombo
                legend={"عنوان شغلی"}
                options={[
                  {
                    value: "1",
                    label: "کارگر",
                  },
                  {
                    value: "2",
                    label: "مدیریت",
                  },
                  {
                    value: "3",
                    label: "منشی",
                  },
                ]}
                placeholder={"عنوان شغلی را انتخاب کنید"}
                type={"req"}
              />
              <InputCom
                legend={"توضیحات"}
                placeholder={"توضیحات را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"تاریخ عقد قرارداد"}
                placeholder={"مدت قرارداد را وارد کنید"}
                type={"date"}
              />
              <InputCom
                legend={"پایان همکاری"}
                placeholder={"مدت همکاری را وارد کنید"}
                type={"date"}
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
              <InputCom
                legend={"کد پستی"}
                placeholder={"کد پستی خود را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"نوع قرارداد"}
                placeholder={"نوع قرارداد خود را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"حقوق پایه"}
                placeholder={"حقوق پایه خود را به (ریال) وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"شماره حساب"}
                placeholder={"شماره حساب خود را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"شماره بیمه"}
                placeholder={"شماره بیمه خود را وارد کنید"}
                type={"req"}
              />
            </div>
          }
        />
      </div>
    </>
  );
};

export default personelCreatePage;
