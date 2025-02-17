"use client";
// import { Datepicker } from "@ijavad805/react-datepicker";

import { DatePicker, ConfigProvider } from "antd";
import {
  DatePicker as DatePickerJalali,
  Calendar,
  JalaliLocaleListener,
} from "antd-jalali";
import Image from "next/image";

import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";
import { Search01Icon } from "hugeicons-react";

const InputCom = ({
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
  bgcolor,
}) => {
  return (
    <>
      {type == "password" ? (
       <div className="w-full flex flex-col gap-3">
       <div className=" text-[#202224] text-[14px] font-bold">{legend}</div>
       <div
         className={`flex justify-center items-center p-[10px] w-full h-[45px] rounded-[8px] ${bgcolor} border border-[#D8D8D8]`}
       >
         <input
         type={type}
           value={value}
           onChange={onChenge}
           disabled={disabled}
           name={name}
           className="bg-inherit font-normal focus:outline-none w-full placeholder:font-normal text-black placeholder:text-[14px] text-[14px] placeholder:text-gray-400"
           placeholder={placeholder}
         />
       </div>
     </div>
      ) : (
        ""
      )}
      {type == "req" ? (
        <div className="w-full flex flex-col gap-3">
          <div className=" text-[#202224] text-[14px] font-bold">{legend}</div>
          <div
            className={`flex justify-center items-center p-[10px] w-full h-[45px] rounded-[8px] ${bgcolor} border border-[#D8D8D8]`}
          >
            <input
              value={value}
              onChange={onChenge}
              disabled={disabled}
              name={name}
              className="bg-inherit font-normal focus:outline-none w-full placeholder:font-normal text-black placeholder:text-[14px] text-[14px] placeholder:text-gray-400"
              placeholder={placeholder}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {type == "req-search" ? (
        <div className="w-full flex flex-col gap-3">
          <div className=" text-[#202224] text-[14px] font-bold">{legend}</div>
          <div
            className={`flex justify-between items-center p-[5px] w-full h-9 rounded-[8px] ${bgcolor} border border-[#D8D8D8]`}
          >
            <input
              value={value}
              onChange={onChenge}
              disabled={disabled}
              name={name}
              className="bg-inherit font-normal focus:outline-none w-full placeholder:font-normal text-black placeholder:text-[14px] text-[14px] placeholder:text-gray-400"
              placeholder={placeholder}
            />
            <span>
              <Search01Icon size={"1rem"} />
            </span>
          </div>
        </div>
      ) : (
        ""
      )}

      {type == "req-menu" ? (
        <fieldset className="bg-[#F5F6FA] border border-[#D5D5D5] rounded-full py-[0.7rem]  px-6 w-full">
          <legend className="text-black text-sm font-bold">{legend}</legend>
          <input
            value={value}
            onChange={onChenge}
            name={name}
            className="bg-inherit text-black font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[14px] text-[14px] placeholder:text-gray-400"
            placeholder={placeholder}
          />
        </fieldset>
      ) : (
        ""
      )}

      {type == "textarea" ? (
        <div className="w-full flex flex-col gap-3">
          <div className=" text-[#202224] text-[14px] font-bold">{legend}</div>
          <div className="flex justify-center items-center p-[16px] w-full h-fit py-2 rounded-[8px] bg-white border border-[#D8D8D8]">
            <textarea
              cols={col}
              rows={row}
              value={value}
              onChange={onChenge}
              name={name}
              placeholder={placeholder}
              className="bg-inherit text-black font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[14px] text-[14px] placeholder:text-gray-400"
            ></textarea>
          </div>
        </div>
      ) : (
        ""
      )}

      {type == "textareaDis" ? (
        <div className="w-full flex flex-col gap-3">
          <div className=" text-[#202224] text-[14px] font-bold">{legend}</div>
          <div className="flex justify-center items-center p-[16px] w-full h-fit py-2 rounded-[8px] bg-zinc-200 border border-[#D8D8D8]">
            <textarea
              disabled={true}
              cols={col}
              rows={row}
              value={value}
              onChange={onChenge}
              name={name}
              placeholder={placeholder}
              className="bg-inherit text-black font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[14px] text-[14px] placeholder:text-black"
            ></textarea>
          </div>
        </div>
      ) : (
        ""
      )}

      {type == "number" ? (
        <fieldset className=" border rounded-xl py-3 px-6 w-full">
          <legend className="text-[var(--text-color-gray)] text-sm font-bold">
            {legend}
          </legend>
          <input
            value={value}
            onChange={onChenge}
            name={name}
            type="number"
            className="bg-inherit font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
            placeholder={placeholder}
          />
        </fieldset>
      ) : (
        ""
      )}

      {type == "color" ? (
        <fieldset className=" border rounded-xl py-3 px-6 w-full">
          <legend className="text-[var(--text-color-gray)] text-sm font-bold">
            {legend}
          </legend>
          <input
            value={value}
            onChange={onChenge}
            name={name}
            type="color"
            className="bg-inherit font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
            placeholder={placeholder}
          />
        </fieldset>
      ) : (
        ""
      )}

      {type == "dis" ? (
        <div className="w-full flex flex-col gap-3">
          <div className=" text-[#202224] text-[14px] font-bold">{legend}</div>
          <div
            className={`flex justify-center items-center p-[10px] w-full h-[45px] rounded-[8px] bg-zinc-200 border border-[#D8D8D8]`}
          >
            <input
              value={value}
              disabled={true}
              onChange={onChenge}
              name={name}
              className="bg-inherit font-normal focus:outline-none w-full placeholder:font-normal text-black placeholder:text-[14px] text-[14px] placeholder:text-black"
              placeholder={placeholder}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {type == "upload" ? (
        <div className=" cursor-pointer" onClick={clickUpload}>
          <fieldset className=" border rounded-xl py-3 px-6 w-full">
            <legend className="text-[var(--text-color-gray)] text-sm font-bold">
              {legend}
            </legend>
            <input
              value={value}
              disabled={true}
              onChange={onChenge}
              name={name}
              className="bg-inherit font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] placeholder:text-gray-400"
              placeholder={placeholder}
            />
          </fieldset>
        </div>
      ) : (
        ""
      )}

      {type == "upload-2" ? (
        <div className="w-full  flex flex-col gap-3">
          <div className=" text-[#202224] text-[14px] font-bold">{legend}</div>
          <div
            className={`flex justify-center relative items-center overflow-hidden p-[10px] w-full h-[45px] rounded-[8px] ${bgcolor} border border-[#D8D8D8]`}
          >
            <label
              for="files"
              class="w-full cursor-pointer h-full absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center  bg-[var(--color-gray-bc)]  font-normal rounded-lg text-[var(--color-blue-dark)]"
            >
              {placeholder}
            </label>
            <input
              id="files"
              value={value}
              onChange={onChenge}
              disabled={disabled}
              name={name}
              type="file"
              className="bg-inherit font-normal invisible focus:outline-none w-full placeholder:font-normal text-black placeholder:text-[14px] text-[14px] placeholder:text-gray-400"
              placeholder={placeholder}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {type == "date" ? (
        <fieldset
          className={`flex justify-center items-center p-[10px] w-full h-[45px] rounded-[8px] ${bgcolor} border border-[#D8D8D8]`}
        >
          {/* <DatePicker
            round="x3"
            className="bg-inherit  font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
            defaultValue={value}
            onChange={onChenge}
            locale="fa"
            accentColor="#608c62"
            inputClass="class-input-calender bg-inherit  font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
            inputAttributes={{ placeholder: "تاریخ را وارد کنید" }}
          /> */}
          {/* <Datepicker
            allowClear={false}
            theme="green"
            lang="fa"
            onChange={onChenge}
            input={
              <input
                className="class-input-calender bg-inherit  font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
                placeholder="تاریخ را انتخاب کنید"
              />
            }
          /> */}
          <ConfigProvider
            locale={fa_IR}
            lang={"fa"}
            className={"w-full"}
            direction="rtl"
          >
            <JalaliLocaleListener />
            <DatePickerJalali placeholder={placeholder} onChange={onChenge} />
          </ConfigProvider>
        </fieldset>
      ) : (
        ""
      )}
      {type == "check" ? (
        <fieldset className=" border relative rounded-xl py-3 px-6 w-full">
          <legend className="text-[var(--text-color-gray)] text-sm font-bold">
            {legend}
          </legend>
          {/* <DatePicker
            round="x3"
            className="bg-inherit  font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
            defaultValue={value}
            onChange={onChenge}
            locale="fa"
            accentColor="#608c62"
            inputClass="class-input-calender bg-inherit  font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
            inputAttributes={{ placeholder: "تاریخ را وارد کنید" }}
          /> */}
          {/* <Datepicker
            allowClear={false}
            theme="green"
            lang="fa"
            onChange={onChenge}
            input={
              <input
                className="class-input-calender bg-inherit  font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
                placeholder="تاریخ را انتخاب کنید"
              />
            }
          /> */}
          <div className="flex justify-start gap-3 items-center">
            <input onChange={onChenge} type="checkbox" />
            <span className="text-[12px] text-gray-500">
              این خود دسته بندی مادر است
            </span>
          </div>
        </fieldset>
      ) : (
        ""
      )}
      {type == "discheck" ? (
        <fieldset className=" border relative rounded-xl py-3 px-6 w-full">
          <legend className="text-[var(--text-color-gray)] text-sm font-bold">
            {legend}
          </legend>
          {/* <DatePicker
            round="x3"
            className="bg-inherit  font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
            defaultValue={value}
            onChange={onChenge}
            locale="fa"
            accentColor="#608c62"
            inputClass="class-input-calender bg-inherit  font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
            inputAttributes={{ placeholder: "تاریخ را وارد کنید" }}
          /> */}
          {/* <Datepicker
            allowClear={false}
            theme="green"
            lang="fa"
            onChange={onChenge}
            input={
              <input
                className="class-input-calender bg-inherit  font-normal focus:outline-none w-full placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
                placeholder="تاریخ را انتخاب کنید"
              />
            }
          /> */}
          <div className="flex justify-start gap-3 items-center">
            <input disabled={true} onChange={onChenge} type="checkbox" />
            <span className="text-[12px] text-gray-500">
              این خود دسته بندی مادر است
            </span>
          </div>
        </fieldset>
      ) : (
        ""
      )}

      {type == "phonenumber" ? (
        <div className=" border flex h-[60px] relative gap-2  rounded-xl  pr-6 w-full">
          <legend className="text-[var(--text-color-gray)] absolute bg-white -top-2.5 text-sm font-bold">
            {legend}
          </legend>
          <input
            value={value}
            onChange={onChenge}
            name={name}
            className="bg-inherit font-normal focus:outline-none flex justify-center items-center my-auto h-full   w-5/6 placeholder:font-normal placeholder:text-[12px] text-[12px] placeholder:text-gray-400"
            dir="ltr"
            placeholder={placeholder}
          />
          <div className="flex justify-center items-center gap-1  w-1/6 mx-auto  h-w-full border-r ">
            <span className="text-xs text-black pt-[2px]" dir="ltr">
              {code}
            </span>
            <div className="flex ju stify-center items-center w-5 h-3">
              <Image src={img} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default InputCom;
