"use client";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SelectCombo from "@/app/components/modules/SelectCombo";
import ButtonAfra from "@/app/components/modules/Buttons";
import DialogPopup from "@/app/components/modules/Dialog";
import { axiosReq } from "@/utils/axios";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import DialogPopupSuc from "@/app/components/modules/DialogSuccess";
const editVisitor = () => {
  const [typeUser, setTypeUser] = useState("1");
  const router = useRouter();
  const { _id } = useParams();
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام به ثبت نام در نرم افزار جامع مدیریت ارتباط مشتریان افرا کنید"
  );
  const [imageProfile, setImage] = useState("");

  const [visitorName, setVisitorName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [description, setDes] = useState("");
  const [address, setAdress] = useState("");
  const [departemant, setDepartemant] = useState("");

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");

    try {
      if (
        !visitorName &&
        !email &&
        !nationalId &&
        !password &&
        !phone &&
        !role
      ) {
        setIsOpen2(true);
        setDialogType("1");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/visitor/edit"), {
            method: "PUT",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              visitorName,
              email,
              phone,
              password,
              role,
              nationalId,
              description,
              departemant,
              address,
              userProfileImage: imageProfile,
              _id,
            }),
          });

          const getResponses = await postDatas.json();

          if (getResponses.status == 202) {
            setIsOpen2(true);
            setDialogType("2");
            setDialogTitle("ویرایش کارشناس موفقیت آمیز بود");
            setDialogDes("کارشناس مورد نظر با موفقیت ویرایش شد");
          }
        } catch (error) {
          console.log(error);
          setIsOpen2(true);
          setDialogType("1");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    if (e.value) {
      setRole(e.label);
    }
  };

  const uploadHandler = () => {
    setIsOpen(true);
    setDialogType("3");
  };

  const postHandler = async (e) => {
    try {
      const getCookiess = await getCookie("WuZiK");

      const res = await axiosReq({
        method: "post",
        url: "/imageUpload/image",
        data: { image: e.target.files[0] },
        withCredentials: true,

        headers: {
          authorization: `Bearer ${getCookiess}`,

          "Content-Type": "multipart/form-data",
        },
      });

      setImage(res.data.imageUrl);
      //   setData({ userProfileImage: res.data.imageUrl });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/visitor/getbyid"), {
      method: "POST",
      body: JSON.stringify({ _id }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAdress(data.data.dataGet[0].address);
        setVisitorName(data.data.dataGet[0].visitorName);
        setDepartemant(data.data.dataGet[0].departemant);
        setRole(data.data.dataGet[0].role);
        setNationalId(data.data.dataGet[0].nationalId);
        setPhone(data.data.dataGet[0].phone);
        setEmail(data.data.dataGet[0].email);
        setDes(data.data.dataGet[0].description);
      });
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          ویرایش کردن کارشناس
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400  ">
          ویرایش و تکمیل اطلاعات کارشناس ثبت شده
        </span>
      </div>
      <div className="flex gap-3 mt-6">
        <CardStat
          type={"3"}
          title={"ویرایش اطلاعات کارشناس"}
          des={"ویرایش و تکمیل کردن اطلاعات کارشناس"}
          data={
            <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">


              <InputCom
                onChenge={(e) => setVisitorName(e.target.value)}
                name={"visitorName"}
                legend={"نام کارشناس"}
                type={"req"}
                placeholder={"نام کارشناس را وارد کنید"}
                value={visitorName}
              />
              <InputCom
                onChenge={(e) => setEmail(e.target.value)}
                name={"email"}
                type={"req"}
                legend={"ایمیل کارشناس"}
                placeholder={"ایمیل کارشناس را وارد کنید"}
                value={email}
              />
              <InputCom
                onChenge={(e) => setPhone(e.target.value)}
                name={"phone"}
                type={"req"}
                legend={"تلفن همراه کارشناس"}
                placeholder={"تلفن همراه کارشناس را وارد کنید"}
                value={phone}
              />
              <InputCom
                onChenge={(e) => setPassword(e.target.value)}
                name={"password"}
                type={"password"}
                legend={"رمز عبور کارشناس"}
                placeholder={"رمز عبور کارشناس را وارد کنید"}
              />
              <SelectCombo
                defaultValue={typeUser}
                options={[
                  {
                    value: "1",
                    label: "کارشناس فروش",
                  },
                  {
                    value: "3",
                    label: "کارشناس بازاریابی",
                  },
                  {
                    value: "4",
                    label: "کارشناس پشتیبانی",
                  },
                ]}
                name="role"
                onChange={changeHandler}
                legend={"نقش کارشناس"}
                placeholder={"نقش کارشناس را انتخاب کنید"}
              />
              <InputCom
                onChenge={(e) => setNationalId(e.target.value)}
                name={"nationalId"}
                type={"req"}
                legend={"کد ملی کارشناس"}
                placeholder={"کد ملی کارشناس را وارد کنید"}
                value={nationalId}
              />

              <InputCom
                onChenge={(e) => setDes(e.target.value)}
                name={"description"}
                legend={"توضیحات کارشناس"}
                type={"req"}
                placeholder={"توضیحات کارشناس را وارد کنید"}
                value={description}
              />
              <InputCom
                onChenge={(e) => setAdress(e.target.value)}
                name={"adress"}
                legend={"آدرس کارشناس"}
                type={"req"}
                placeholder={"آدرس کارشناس را وارد کنید"}
                value={address}
              />
              <InputCom
                onChenge={(e) => setDepartemant(e.target.value)}
                name={"departemant"}
                legend={"دپارتمان کارشناس"}
                type={"req"}
                placeholder={"دپارتمان کارشناس را وارد کنید"}
                value={departemant}
              />
              <InputCom
                clickUpload={uploadHandler}
                legend={"بارگذاری تصویر کارشناس"}
                type={"upload"}
                placeholder={"تصویر کارشناس را بارگذاری کنید"}
              />
              <ButtonAfra
                onClick3={sendDataToServer}
                type={"3"}
                text={"ویرایش کارشناس"}
              />
              <ButtonAfra
                onClick={() => router.push("/dashboard/visitors/allVisitors")}
                type={"4"}
                text={"بازگشت به لیست کارشناسان"}
              />            </div>

            </>
          }
        />
      </div>
      <DialogPopup
        isOpen={isOpen}
        type={dialogType}
        imageUser={imageProfile}
        inputTypeFile={
          <fieldset className=" border rounded-[20px] py-3 px-6 w-full">
            <legend className="text-[var(--text-color-gray)] text-sm font-bold">
              تصویر را انتخاب کنید
            </legend>
            <input
              placeholder="تصویر را انتخاب کنید"
              type="file"
              name="file"
              onChange={postHandler}
            />
          </fieldset>
        }
        close={() => setIsOpen(false)}
      />
      <DialogPopupSuc
        type={"2"}
        title={dialogTitle}
        des={dialogDes}
        isOpen={isOpen2}
        close={() => setIsOpen2(false)}
      />
    </>
  );
};

export default editVisitor;
