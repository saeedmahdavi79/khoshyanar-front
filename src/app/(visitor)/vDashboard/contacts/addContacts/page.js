"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useEffect, useState } from "react";
import DialogPopup from "@/app/components/modules/Dialog";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const addContacts = () => {
  const [typeUser, setTypeUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام به ثبت نام در نرم افزار جامع مدیریت ارتباط مشتریان افرا کنید"
  );

  const [data, setData] = useState({
    contactName: "",
    contactCompany: "",
    contactCompanyId: "",
    contactPosition: "",
    staticPhone: "",
    phone: "",
    fax: "",
    email: "",
    address: "",
    nationalCode: "",
    birthDate: "",
    marriedDate: "",
    description: "",
    leadName: "",
    description: "",
  });

  const [dataLeads, setDataLeads] = useState([]);

  const router = useRouter();

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");

    try {
      if (
        !data.contactName &&
        !data.contactCompany &&
        !data.nationalCode &&
        !data.contactCompanyId &&
        !data.email &&
        !data.address
      ) {
        setIsOpen("true");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/contact/create"), {
            method: "POST",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const getResponses = await postDatas.json();

          if (getResponses.status == 202) {
            setIsOpen(true);
            setDialogType("2");
            setDialogTitle("ثبت موفق");
            setDialogDes("کانتکت با موفقیت به سیستم اضافه شد");
          }
        } catch (error) {
          console.log(error);
          setIsOpen(true);
          setDialogType("1");
          setDialogTitle("ثبت نا موفق");
          setDialogDes("اضافه کردن کانتکت با مشکل مواجه شد");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    if (e.value) {
      setData({ ...data, contactCompany: e.label, contactCompanyId: e.value });
      // setData({ ...data, contactCompanyId: e.value });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const changeHandler2 = (e) => {
    if (e.value) {
      setData({ ...data, leadName: e.label, leadId: e.value });
    }
  };

  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/leads/get-visitor-leads"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => setDataLeads(data.data.dataGet));
  }, []);

  // const changeHandler3 = (e) => {
  //   if (e.value) {
  //     setData({ ...data, leadId: e.value });
  //   }
  // };
  return (
    <>
      <div className="flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          افزودن کانتکت
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400  ">
          افزودن کانتکت به سامانه
        </span>
      </div>

      <div className="flex gap-3 mt-6">
        <CardStat
          type={"3"}
          des={"افزودن کانتکت جدید به سامانه شما"}
          title={"افزودن کانتکت جدید به سیستم"}
          data={
            <>
              <InputCom
                onChenge={changeHandler}
                name={"contactName"}
                legend={"نام کانتکت"}
                type={"req"}
                placeholder={"نام کانتکت را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"email"}
                type={"req"}
                legend={"ایمیل کانتکت"}
                placeholder={"ایمیل کانتکت را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"phone"}
                type={"req"}
                legend={"تلفن همراه کانتکت"}
                placeholder={"تلفن همراه کانتکت را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"staticPhone"}
                legend={"تلفن ثابت کانتکت"}
                type={"req"}
                placeholder={"تلفن ثابت کانتکت را وارد کنید"}
              />
              <SelectCombo
                defaultValue={typeUser}
                options={[
                  {
                    value: "1",
                    label: "شرکت کانتکت",
                  },
                ]}
                name="role"
                onChange={changeHandler}
                legend={"شرکت کانتکت"}
                placeholder={"شرکت کانتکت را انتخاب کنید"}
              />

              <SelectCombo
                defaultValue={typeUser}
                options={dataLeads.map((leads) => ({
                  value: leads._id,
                  label: leads.leadName,
                }))}
                name="role"
                onChange={changeHandler2}
                legend={"سرنخ مرتبط با کانتکت"}
                placeholder={"سرنخ مرتبط کانتکت را انتخاب کنید"}
              />

              <InputCom
                onChenge={changeHandler}
                name={"nationalCode"}
                type={"req"}
                legend={"کد ملی کانتکت"}
                placeholder={"کد ملی کانتکت را وارد کنید"}
              />

              <InputCom
                onChenge={changeHandler}
                name={"description"}
                legend={"توضیحات کانتکت"}
                type={"req"}
                placeholder={"توضیحات کانتکت را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"address"}
                legend={"آدرس کانتکت"}
                type={"req"}
                placeholder={"آدرس کانتکت را وارد کنید"}
              />

              <InputCom
                onChenge={changeHandler}
                name={"contactPosition"}
                legend={"سمت کانتکت"}
                type={"req"}
                placeholder={"سمت کانتکت در شرکت را وارد کنید"}
              />
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="mt-6">
                <ButtonAfra
                  onClick={sendDataToServer}
                  type={"orange"}
                  text={"افزودن کانتکت"}
                />
              </div>
              <div className="mt-6">
                <ButtonAfra
                  onClick={() => router.push("/vDashboard")}
                  type={"white-orange"}
                  text={"بازگشت به داشبورد"}
                />
              </div>
            </>
          }
        />
      </div>
      <DialogPopup
        isOpen={isOpen}
        type={dialogType}
        title={dialogTitle}
        des={dialogDes}
        close={() => setIsOpen(false)}
      />
    </>
  );
};

export default addContacts;
