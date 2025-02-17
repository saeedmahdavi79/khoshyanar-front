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
const editContacts = () => {
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

  const [contactName, setVisitorName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [staticPhone, setStaticPhone] = useState("");
  const [nationalCode, setNationalId] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [fax, setFax] = useState("");
  const [marriedDate, setMarriedDate] = useState("");

  const [description, setDes] = useState("");
  const [address, setAdress] = useState("");
  const [lead, setLead] = useState("");
  const [company, setContactCompany] = useState("");
  const [contactPosition, setContactPos] = useState("");

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");

    try {
      if (
        !contactName &&
        !email &&
        !staticPhone &&
        !birthDate &&
        !phone &&
        !marriedDate
      ) {
        setIsOpen2(true);
        setDialogType("1");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/contact/edit-admin"), {
            method: "PUT",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contactName,
              email,
              phone,
              staticPhone,
              birthDate,
              nationalCode,
              description,
              fax,
              address,
              marriedDate,
              contactPosition,
              _id,
            }),
          });

          const getResponses = await postDatas.json();
          console.log(getResponses);
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
    fetch(baseUrl("/contact/get-contact-by-id-admin"), {
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
        setVisitorName(data.data.dataGet[0].contactName);
        setLead(data.data.dataGet[0].leadName);
        setContactPos(data.data.dataGet[0].contactPosition);
        setNationalId(data.data.dataGet[0].nationalCode);
        setPhone(data.data.dataGet[0].phone);
        setEmail(data.data.dataGet[0].email);
        setDes(data.data.dataGet[0].description);
        setStaticPhone(data.data.dataGet[0].staticPhone);
        setFax(data.data.dataGet[0].fax);
        setMarriedDate(data.data.dataGet[0].marriedDate);
        setBirthDate(data.data.dataGet[0].birthDate);
        setContactCompany(data.data.dataGet[0].contactCompany);
        setContactPos(data.data.dataGet[0].contactPosition);
      });
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          ویرایش کردن کانتکت
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400  ">
          ویرایش و تکمیل اطلاعات کانتکت ثبت شده
        </span>
      </div>
      <div className="flex gap-3 mt-6">
        <CardStat
          type={"3"}
          title={"ویرایش اطلاعات "}
          des={"ویرایش و تکمیل کردن اطلاعات "}
          data={
            <>
              <InputCom
                onChenge={(e) => setVisitorName(e.target.value)}
                name={"visitorName"}
                legend={"نام "}
                type={"req"}
                placeholder={"نام  را وارد کنید"}
                value={contactName}
              />
              <InputCom
                onChenge={(e) => setEmail(e.target.value)}
                name={"email"}
                type={"req"}
                legend={"ایمیل "}
                placeholder={"ایمیل  را وارد کنید"}
                value={email}
              />
              <InputCom
                onChenge={(e) => setPhone(e.target.value)}
                name={"phone"}
                type={"req"}
                legend={"تلفن همراه "}
                placeholder={"تلفن همراه  را وارد کنید"}
                value={phone}
              />
              <InputCom
                onChenge={(e) => setStaticPhone(e.target.value)}
                name={"phone"}
                type={"req"}
                legend={"تلفن ثابت "}
                placeholder={"تلفن ثابت  را وارد کنید"}
                value={staticPhone}
              />
              <InputCom
                onChenge={(e) => setFax(e.target.value)}
                name={"phone"}
                type={"req"}
                legend={"فکس"}
                placeholder={"فکس را وارد کنید"}
                value={fax}
              />
              <InputCom
                onChenge={(e) => setMarriedDate(e.target.value)}
                name={"phone"}
                type={"req"}
                legend={"تاریخ ازدواج"}
                placeholder={"تاریخ ازدواج را وارد کنید"}
                value={marriedDate}
              />
              <InputCom
                onChenge={(e) => setBirthDate(e.target.value)}
                name={"phone"}
                type={"req"}
                legend={"تاریخ تولد"}
                placeholder={"تاریخ تولد را وارد کنید"}
                value={birthDate}
              />

              <InputCom
                onChenge={(e) => setNationalId(e.target.value)}
                name={"nationalId"}
                type={"req"}
                legend={"کد ملی "}
                placeholder={"کد ملی  را وارد کنید"}
                value={nationalCode}
              />

              <InputCom
                onChenge={(e) => setDes(e.target.value)}
                name={"description"}
                legend={"توضیحات "}
                type={"req"}
                placeholder={"توضیحات  را وارد کنید"}
                value={description}
              />
              <InputCom
                onChenge={(e) => setAdress(e.target.value)}
                name={"adress"}
                legend={"آدرس "}
                type={"req"}
                placeholder={"آدرس  را وارد کنید"}
                value={address}
              />
              <InputCom
                onChenge={(e) => setContactPos(e.target.value)}
                name={"lead"}
                legend={"سمت"}
                type={"req"}
                placeholder={"سمت کانتکت"}
                value={contactPosition}
              />
              <InputCom
                onChenge={(e) => setDepartemant(e.target.value)}
                name={"lead"}
                legend={"سرنخ"}
                type={"dis"}
                placeholder={"دپارتمان  را وارد کنید"}
                value={lead}
              />
              <InputCom
                onChenge={(e) => setDepartemant(e.target.value)}
                name={"lead"}
                legend={"حساب یا شرکت"}
                type={"dis"}
                placeholder={"حساب یا شرکت کانتکت"}
                value={company}
              />

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <ButtonAfra
                onClick={sendDataToServer}
                type={"green"}
                text={"ویرایش "}
              />
              <ButtonAfra
                onClick={() => router.push("/dashboard/contacts")}
                type={"white"}
                text={"بازگشت به لیست کانتکت ها"}
              />
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

export default editContacts;
