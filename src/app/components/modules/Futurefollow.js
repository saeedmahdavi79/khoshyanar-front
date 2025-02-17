"use client";

import { DatePicker, ConfigProvider } from "antd";
import {
  DatePicker as DatePickerJalali,
  Calendar,
  JalaliLocaleListener,
} from "antd-jalali";
import Image from "next/image";

import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";

const Futurefollow = ({
  legend,
  clickUpload,
  value,
  name,
  placeholder,
  onChenge,
  type,
  calValu,
  col,
  row,
  img,
  code,
  disabled,
  bgcolor
}) => {
  return (
    <>
   



      {type == "textarea" ? (
        <div className="w-full flex flex-col gap-3">
          <div className=" text-[#202224] text-[14px] font-bold">{legend}</div>
          <div className="flex justify-center  p-[16px] w-full  py-2 rounded-[8px] bg-[#F1F4F9] border border-[#D8D8D8] h-[100px]">
            <textarea
              cols={col}
              rows={row}
              value={value}
              onChange={onChenge}
              name={name}
              placeholder={placeholder}
              className="bg-inherit text-white font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
            ></textarea>
          </div>
        </div>
      ) : (
        ""
      )}



  
 



 
   
   

    
  
        
 
      
    </>
  );
};

export default Futurefollow;
