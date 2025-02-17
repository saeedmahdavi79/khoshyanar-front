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

const Addcheck = () => {  
  const router = useRouter();  
  const items = [  
    {  
      key: "1",  
      label: "افزودن نامه صادره",  
      children: (  
        <div className="w-full flex flex-col gap-3 ">
        <div className="grid md:grid-cols-4 px-2 place-items-center mx-auto  lg:grid-cols-4 sm:grid-cols-1 gap-3 justify-center items-center w-full">  
         
        <InputCom  
              legend={"شماره چک"}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          /> 
          <InputCom  
              legend={"تاریخ دریافتی"}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          />  
          <InputCom  
              legend={"بانک"}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          />  
          <InputCom  
              legend={"تاریخ سررسید"}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          /> 
          <InputCom  
              legend={"شعبه"}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          />  
          <InputCom   
              legend={"شناسه صیاد"}  
              option={[]}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          />  
            <InputCom  
              legend={"شماره حساب"}  
              option={[]}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          /> 
          <InputCom  
              legend={"وضعیت"}  
              option={[]}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          /> 
          <InputCom  
              legend={"پرداخت کننده"}  
              option={[]}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          /> 
          <InputCom  
              legend={"مبلغ"}  
              option={[]}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          /> 
          <InputCom  
              legend={"مبلغ ارزی"}  
              option={[]}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          /> 
          <InputCom  
              legend={"متن مغایرت چک"}  
              option={[]}  
              placeholder={"وارد کنید ..."}  
              type={"req"}  
          /> 
          
          
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
        title={"ایجاد چک دریافتی"}  
        des={"ایجاد چک برای معاملات"}  
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

export default Addcheck;