"use client";
import { useState } from "react";
import CardStat from "@/app/components/modules/Card";
import Link from "next/link";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { HiOutlineCube } from "react-icons/hi2";
import { HiOutlineBeaker } from "react-icons/hi2";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";

import ButtonAfra from "@/app/components/modules/Buttons";
import InputCom from "@/app/components/modules/Inputs";
import { Tag } from "antd";

const CustomerRegistration = () => {
    const router = useRouter();
  
    const [showFirstPage, setShowFirstPage] = useState(0);
    const [activButton, setActivButton] = useState(0);
  
    const menu = [
      { title: "استعلام هویت" },
      { title: "استعلام شماره کارت" },
      { title: "استعلام کد پستی (بزودی ...)" },
      { title: "استعلام چک صیادی (بزودی ...)" },
      { title: "استعلام انتقال وجه (بزودی ...)" },
      
    ];
  
    const handleButton = (button) => {
        if(button == 3 || button == 4 || button == 2){

        }else{
            setActivButton(button);
            setShowFirstPage(button); // به‌روزرسانی showFirstPage
        }
     
    };

//hoviat

const [nationalId , setNationalId] = useState("")
const [birthDate , setBirthDate] = useState("")
const [dataHoviat , setDataHoviat] = useState({})
const [showDetail , setShowDetail] = useState(false)

const dateHandler = (e) => {
  
  let month;
  if((e.$jM + 1) == 1||(e.$jM + 1) == 3 ||(e.$jM + 1) == 4||(e.$jM + 1) == 5||(e.$jM + 1) == 6||(e.$jM + 1) == 7||(e.$jM + 1) == 8||(e.$jM + 1) == 9){
    month = "0" + (e.$jM + 1)
  }else{
    month =  (e.$jM + 1)
  }

  let fullDate = (e.$jy + "/" + month + "/" + e.$jD);
  setBirthDate(fullDate.toString(),
    
  );
}

const getEstelam = () => {

  
  fetch("https://api.zibal.ir/v1/facility/nationalIdentityInquiry/", {
    method: "POST",
    headers: {
      Authorization: `Bearer 057694e2fc284560aaed89ff6d9c6d0e`,
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      nationalCode:nationalId,
      birthDate: birthDate
    })
  })
    .then((response) => response.json())
    .then((data) => {
      
      setDataHoviat(data.data)
      setShowDetail(true)
    });

}


const [cardNumber , setCardNumber] = useState("")
const [dataHoviatCard , setDataHoviatCard] = useState({})
const [showDetailCard , setShowDetailCard] = useState(false)


const getEstelamCard = () => {

  
  fetch("https://api.zibal.ir/v1/facility/cardInquiry/", {
    method: "POST",
    headers: {
      Authorization: `Bearer 057694e2fc284560aaed89ff6d9c6d0e`,
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      cardNumber:cardNumber,
     
    })
  })
    .then((response) => response.json())
    .then((data) => {
      
      setDataHoviatCard(data.data)
      setShowDetailCard(true)
    });

}



    return (
      <>
        <div className="w-full flex flex-col h-full px-6 gap-4 py-1">
          <div className="w-full flex justify-start items-center">
            <span className="text-black text-3xl py-6 font-bold">سامانه استعلام</span>
          </div>
          <div className="w-full flex gap-3 h-full">
            <div className="bg-white flex flex-col rounded-lg w-1/5 h-[calc(100%-5rem)] p-5 border border-zinc-200">
              <ButtonAfra
                type={"green"}
                onClick={() => location.replace("/dashboard")}
                text={"بازگشت به پیشخوان"}
              />
              <span className="text-[14px] mt-5">بخش های داخلی</span>
              <div className="w-full flex flex-col gap-3 mt-5">
                {menu.map((data, index) => (
                  <span
                    key={index}
                    className={`${
                      activButton === index
                        ? "sub-menu-active"
                        : "sub-menu-deactive"
                    } w-full cursor-pointer p-2 flex justify-between items-center rounded-lg`}
                    onClick={() => handleButton(index)}
                  >
                    {data.title}
                    <LuChevronLeft />
                  </span>
                ))}
              </div>
            </div>
            <div className="w-4/5">
              {showFirstPage === 0 && (
                <CardStat
                  type={"10"}
                  title={"استعلام هویت"}
                  des={"جهت اسعلام هویتی از این بخش استفاده کنید."}
                data={<>
                <div className="w-full grid grid-cols-4 gap-3 items-end">

                  <InputCom onChenge={(e)=>setNationalId(e.target.value)} type={"req"} placeholder={"کد ملی"}/>
                  <InputCom onChenge={dateHandler} type={"date"} placeholder={"تاریخ تولد"}/>
                <div className="w-full flex gap-3">

                  <ButtonAfra onClick={getEstelam} type={"green"} text={"استعلام"}/>
                  <ButtonAfra type={"blue-dark"} text={"انصراف"}/>
                </div>
                </div>
                {showDetail ?  <div className="w-full mt-3">

<Tag color="processing" className="p-4 text-[16px] w-full">

نتیجه : 
<div className="mt-2"></div>
نام : {dataHoviat.firstName}
<div className="mt-2"></div>
نام خانوادگی : {dataHoviat.lastName}
<div className="mt-2"></div>
نام پدر : {dataHoviat.fatherName}
<div className="mt-2"></div>
در قید حیات : {dataHoviat.alive == true ? "بله" : "خیر"}

</Tag>

</div>: ""}
               
                </>}
                />
              )}
              {showFirstPage === 1 && (
                <CardStat
                  type={"10"}
                  title={"استعلام شماره کارت"}
                  des={"جهت استعلام شماره کارت از این بخش استفاده کنید"}
                data={
                <>
                <div className="w-full grid grid-cols-4 gap-3 items-end">
                <InputCom onChenge={(e)=>setCardNumber(e.target.value)} type={"req"} placeholder={"شماره کارت"}/>

                <div className="w-full flex gap-3">

<ButtonAfra onClick={getEstelamCard} type={"green"} text={"استعلام"}/>
<ButtonAfra type={"blue-dark"} text={"انصراف"}/>
</div>
                </div>
                {showDetailCard ?  <div className="w-full mt-3">

<Tag color="processing" className="p-4 text-[16px] w-full">

نتیجه : 
<div className="mt-2"></div>
نام دارنده کارت : {dataHoviatCard.name}


</Tag>

</div>: ""}
                </>
                }
                />
              )}
              {showFirstPage === 2 && (
                <CardStat
                  type={"10"}
                  title={"استعلام کدپستی"}
                  des={"جهت استعلام کد پستی از این بخش استفاده کنید"}
                />
              )}
              {showFirstPage === 3 && (
                <CardStat
                  type={"10"}
                  title={"مدیریت موجودی انبار"}
                  des={"میتوانید موجودی انبار های خود را مدیریت کنید"}
                />
              )}
              {showFirstPage === 4 && (
                <CardStat
                  type={"10"}
                  title={"سرنخ های خرید"}
                  des={"سرنخ های خود را در این بخش ببینید"}
                />
              )}
              
            </div>
          </div>
        </div>
      </>
    );
  };
  export default CustomerRegistration;
  