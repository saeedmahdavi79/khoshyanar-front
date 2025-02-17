"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useRouter } from "next/navigation";






const CreatePage = () => {
    const router = useRouter();
    
  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"درخواست مرخصی"}
          des={"بخش درخواست مرخصی در سیستم "}
          buttons={
            <div className="grid md:grid-cols-2 sm:grid-cols-1   gap-2">
              <div className="w-full flex justify-end items-center">
                <div className="w-[200px]">
                  <ButtonAfra type={"green"} text={"ثبت نهایی"} />
                </div>
              </div>
              <div className="w-[200px] flex items-center">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/office/personal")}
                  text={"بازگشت به داشبورد"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-3 justify-center items-center w-full">
              <InputCom
                legend={"نام درخواست کننده"}
                placeholder={"نام خود را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"تاریخ درخواست"}
                placeholder={" تاریخ تولد خود را وارد کنید"}
                type={"date"}
              />   
               <InputCom
                legend={"مدت مرخصی"}
                placeholder={"مدت مرخصی را وارد کنید"}
                type={"req"}
              />
               <InputCom
                legend={"توضیحات"}
                placeholder={"توضیحات را وارد کنید"}
                type={"req"}
              />
               {/* <InputCom
                legend={"تاریخ ایجاد"}
                placeholder={" تاریخ را وارد کنید"}
                type={"date"}
              />    */}
            
            </div>
          }
        />
      </div>
    </>
  );
};
export default CreatePage;