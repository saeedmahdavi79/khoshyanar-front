import { getWidth } from "@neshan-maps-platform/ol/extent";
import { useState } from "react";
import Select from "react-select";

const SelectCombo = ({
  onChange,
  legend,
  options,
  placeholder,
  defaultValue,
  name,
  type,
  disabled,
  bgColor,
}) => {
  //Select Option
  //   const options = [
  //   { value: "1", label: "پایه حقیقی - فعال" },
  //   {
  //     value: "2",
  //     label: "پایه حقوقی (مدیریت صادرات آرمان تجارت آدرین  ) - فعال",
  //   },
  //   {
  //     value: "3",
  //     label: "نمایندگی حقیقی بازرگان حقوقی فولاد نقشینه تبریز - فعال",
  //   },
  //   ];
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      fontSize: 14,
      width: "100%",
      color: "#000",
      backgroundColor: "transparent",
      border: "none",
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontSize: 14,
        color: "#000",
        backgroundColor: "white",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
    singleValue: (styles, { data }) => {
      return {
        ...styles,
        color: "#000",
      };
    },

    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#e0e0e0",
      };
    },

    multiValueLabel: (styles) => ({
      ...styles,
      color: "#000",
    }),

    multiValueRemove: (styles) => ({
      ...styles,
      color: "#000",
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
  };

  const colourStyles2 = {
    control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      fontSize: 13,
      color: isSelected ? "#fff" : "#000",
      backgroundColor: "#FFFFFF",
      border: "none",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontSize: 13,
        color: "#000",
        backgroundColor: "white",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };
  return (
    <>
      {type == "new" ? (
        <fieldset className="bg-[#222831] rounded-sm py-[0.35rem]  w-full">
          <legend className="text-white text-sm font-bold">{legend}</legend>
          <Select
            placeholder={placeholder}
            styles={colourStyles2}
            className="bg-transparent class-select w-full focus:outline-none focus:border-none hover:border-none  select-outline"
            defaultValue={defaultValue}
            options={options}
            onChange={onChange}
            name={name}
          />
        </fieldset>
      ) : type == "multi" ? (
        <div className="w-full flex  flex-col gap-3">
          <legend className=" text-[#202224] text-[14px] font-bold">
            {legend}
          </legend>
          <div
            className={`flex justify-center items-center p-[16px] text-black  w-full h-[45px] rounded-[8px] ${bgColor} border border-[#D8D8D8]`}
          >
            <Select
              placeholder={placeholder}
              styles={colourStyles}
              className="bg-transparent class-select w-full text-black focus:outline-none focus:border-none hover:border-none  select-outline "
              defaultValue={defaultValue}
              options={options}
              isDisabled={disabled}
              onChange={onChange}
              name={name}
              isMulti={true}
            />
            {/**/}
            {/* 
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={onChange}
              options={options}
            /> */}
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-3">
          <legend className=" text-[#202224] text-[14px] font-bold">
            {legend}
          </legend>
          <div
            className={`flex justify-center items-center p-[16px] text-black  w-full h-[45px] rounded-[8px] ${bgColor} border border-[#D8D8D8]`}
          >
            <Select
              placeholder={placeholder}
              styles={colourStyles}
              className="bg-transparent class-select w-full text-black focus:outline-none focus:border-none hover:border-none  select-outline "
              defaultValue={defaultValue}
              options={options}
              isDisabled={disabled}
              onChange={onChange}
              name={name}
            />
            {/**/}
            {/* 
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={["a10", "c12"]}
            onChange={onChange}
            options={options}
          /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SelectCombo;
