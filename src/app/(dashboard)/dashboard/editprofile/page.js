"use client";
import { useState } from "react";
import { BsCamera } from "react-icons/bs";
import Image from "next/image";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";

const EditProfile = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [dataVisitor, setDataVisitor] = useState({
    email: "",
    password: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeHandlerVisitor = (e) => {
    setDataVisitor({ ...dataVisitor, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-h-[86vh] h-full">
      <CardStat
        type={"10"}
        title={"ویرایش پروفایل"}
        des={"اطلاعاتتو ویرایش کن!"}
        buttons={
          <a className="w-[200px]" href="/dashboard">
            <div className="flex w-full justify-end items-center gap-2">
              <div className="w-full">
                <ButtonAfra text={"بازگشت به داشبورد"} type={"white-green-2"} />
              </div>
            </div>
          </a>
        }
        data={
          <div className="w-full gap-4 flex pt-4 justify-center items-center xl:flex-row lg:flex-col md:flex-col sm:flex-col">
            <div className="xl:w-1/2 lg:w-full md:w-full sm:w-full flex flex-col items-center gap-4">
              <div className="relative w-1/2 min-h-40 rounded-[10px] border-2 border-dashed border-[#ff6e40] flex items-center justify-center overflow-hidden">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Profile"
                    className="w-full h-full "
                  />
                ) : (
                  <BsCamera className="text-gray-400 text-4xl" />
                )}
              </div>
              <label
                htmlFor="upload"
                className="cursor-pointer flex justify-center items-center w-1/2 py-2 px-4 bg-[#ff6e40] text-white rounded-lg hover:bg-[#fb8230] transition-all"
              >
                انتخاب عکس پروفایل
              </label>
              <input
                id="upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            <div className="xl:w-1/2 lg:w-full md:w-full sm:w-full grid gap-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
              <InputCom
                onChenge={changeHandlerVisitor}
                name={"name"}
                legend={"نام : "}
                type={"req"}
                placeholder={"نام را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                legend={"نام خانوادگی"}
                name={"lastName"}
                type={"req"}
                placeholder={"نام خانوادگی خود را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                legend={"ایمیل "}
                name={"email"}
                type={"req"}
                placeholder={"ایمیل را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                legend={"نام شرکت / سازمان"}
                name={"company"}
                type={"req"}
                placeholder={"نام شرکت یا سازمان  را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                legend={"تلفن همراه"}
                name={"phone"}
                type={"req"}
                placeholder={"تلفن همراه را وارد کنید"}
              />
              <SelectCombo
                options={[
                  { value: "1", label: "کسب و کار تولیدی" },
                  { value: "2", label: "کسب و کار پزشکی" },
                  { value: "3", label: "کسب و کار آموزشگاهی" },
                  { value: "4", label: "کسب و کار اداری" },
                  { value: "5", label: "کسب و کار پخش محصول" },
                ]}
                name="type"
                onChange={changeHandler}
                legend={"نوع کسب و کار"}
                placeholder={"کسب و کار پخش محصول"}
              />
              <InputCom
                onChenge={changeHandler}
                type={"password"}
                name={"password"}
                legend={"رمز عبور"}
                placeholder={"رمز عبور را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                type={"password"}
                name={"password2"}
                legend={"تکرار رمز عبور"}
                placeholder={"رمز عبور را دوباره وارد کنید"}
              />
            </div>

            {/* طراحی جذاب انتخاب عکس */}
          </div>
        }
      />
    </div>
  );
};

export default EditProfile;
