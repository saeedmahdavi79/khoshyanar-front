"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useRouter } from "next/navigation";



const fiscalyearPage = () => {
    const router = useRouter();
    return(
 <>
    <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"افزودن سال مالی"}
          des={"از این بخش میتوانید سال مالی به سیستم اضافه کنید"}
          buttons={
           
             
            <div className="flex flex-col md:flex-row gap-2">
             <div className="w-[200px]">
              <ButtonAfra
                onClick={() => router.push("/dashboard/")}
                text={"ثبت"}
                type={"green"}
              />
            </div>
            <div className="w-[200px]">
              <ButtonAfra
                onClick={() => router.push("/dashboard/")}
                text={"بازگشت به داشبورد"}
                type={"white-green-2"}
              />
            </div>
           
          </div>
           
          }
          data={
            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-3 justify-center items-center w-full">
              <InputCom
                legend={"سال مالی"}
                placeholder={"سال مالی را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"نام سال مالی"}
                placeholder={"نام سال مالی را وارد کنید"}
                type={"req"}
              />
              <InputCom
                legend={"توضیحات"}
                placeholder={"توضیحات را وارد کنید"}
                type={"req"}
              />
              <InputCom
              type={"number"}
                legend={"مقدار سال"}
                option={[]}
                placeholder={"مقدار سال را بنویسید"}
              />
              
              
            </div>
          }
        />
      </div>
 
 
 </>
    );
};
export default fiscalyearPage;