"use client";  
import ButtonAfra from "@/app/components/modules/Buttons";  
import CardStat from "@/app/components/modules/Card";  
import InputCom from "@/app/components/modules/Inputs";  
import SelectCombo from "@/app/components/modules/SelectCombo";  
import { useRouter } from "next/navigation";  
import dynamic from "next/dynamic";  
import React, { useState } from "react";  

const JoditEditor = dynamic(() => import("jodit-react"), {  
  ssr: false,  
});  

const Addmoamele = () => {  
  const router = useRouter();  
  const items = [  
    {  
      key: "1",  
      label: "افزودن نامه صادره",  
      children: (  
        <div className="w-full flex flex-col gap-3 ">
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
  const [selectedItem, setSelectedItem] = useState(options[0]?.value || "1");  

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
        data={currentItem?.children}
      />  
    </div>  
  );  
};  

export default Addmoamele;