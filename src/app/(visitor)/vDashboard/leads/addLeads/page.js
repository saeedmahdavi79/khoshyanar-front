"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useState } from "react";
import DialogPopup from "@/app/components/modules/Dialog";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const addLeads = () => {
  const [typeUser, setTypeUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام به ثبت نام در نرم افزار جامع مدیریت ارتباط مشتریان افرا کنید"
  );

  const [data, setData] = useState({
    leadName: "",
    leadSubject: "",
    leadCompany: "",
    leadCompanyId: "",
    leadPosition: "",
    leadEmail: "",
    staticPhone: "",
    phone: "",
    leadWebsite: "",
    leadAddress: "",
    leadType: "",
    leadSource: "",
    leadLevel: "",
    leadStatus: "",
    leadCompanyCount: "",
  });

  const router = useRouter();

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");

    try {
      if (
        !data.leadName &&
        !data.leadSubject &&
        !data.leadCompany &&
        !data.leadEmail &&
        !data.leadWebsite &&
        !data.leadType
      ) {
        setIsOpen("true");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/leads/create"), {
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
            setDialogDes("سرنخ با موفقیت به سیستم اضافه شد");
          }
        } catch (error) {
          setIsOpen(true);
          setDialogType("1");
          setDialogTitle("ثبت نا موفق");
          setDialogDes("اضافه کردن سرنخ با مشکل مواجه شد");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    if (e.value) {
      setData({ ...data, leadCompany: e.label, leadCompanyId: e.value });
      // setData({ ...data, contactCompanyId: e.value });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const eventHandler1 = (e) => {
    setData({ ...data, leadCompanyCount: e.label });
  };
  const eventHandler2 = (e) => {
    setData({ ...data, leadStatus: e.label });
  };
  const eventHandler3 = (e) => {
    setData({ ...data, leadLevel: e.label });
  };
  const eventHandler4 = (e) => {
    setData({ ...data, leadType: e.label });
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          افزودن سرنخ
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400  ">
          افزودن سرنخ به سامانه
        </span>
      </div>

      <div className="flex gap-3 mt-6">
        <CardStat
          type={"3"}
          des={"افزودن سرنخ جدید به سامانه شما"}
          title={"افزودن سرنخ جدید به سیستم"}
          data={
            <>
              <InputCom
                onChenge={changeHandler}
                name={"leadName"}
                legend={"نام"}
                type={"req"}
                placeholder={"نام را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"leadSubject"}
                legend={"موضوع"}
                type={"req"}
                placeholder={"موضوع را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"leadEmail"}
                type={"req"}
                legend={"ایمیل"}
                placeholder={"ایمیل را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"phone"}
                type={"req"}
                legend={"تلفن همراه"}
                placeholder={"تلفن همراه را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"staticPhone"}
                legend={"تلفن ثابت"}
                type={"req"}
                placeholder={"تلفن ثابت را وارد کنید"}
              />
              <SelectCombo
                defaultValue={typeUser}
                options={[
                  {
                    value: "1",
                    label: "شرکت سرنخ",
                  },
                ]}
                name="leadCompany"
                onChange={changeHandler}
                legend={"شرکت یا حساب"}
                placeholder={"شرکت یا حساب را انتخاب کنید"}
              />

              <InputCom
                onChenge={changeHandler}
                name={"leadAddress"}
                legend={"آدرس"}
                type={"req"}
                placeholder={"آدرس را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"leadSource"}
                legend={"منبع"}
                type={"req"}
                placeholder={"منبع را وارد کنید"}
              />

              <InputCom
                onChenge={changeHandler}
                name={"leadWebsite"}
                legend={"وب سایت"}
                type={"req"}
                placeholder={"وبسایت را وارد کنید"}
              />

              <InputCom
                onChenge={changeHandler}
                name={"leadPosition"}
                legend={"سمت"}
                type={"req"}
                placeholder={"سمت را وارد کنید"}
              />

              <SelectCombo
                defaultValue={typeUser}
                options={[
                  {
                    value: "1",
                    label: "سرد",
                  },
                  {
                    value: "2",
                    label: "گرم",
                  },
                  {
                    value: "3",
                    label: "داغ",
                  },
                ]}
                name="leadLevel"
                onChange={eventHandler3}
                legend={"وضعیت"}
                placeholder={"سطح ارتباط را انتخاب کنید"}
              />

              <SelectCombo
                defaultValue={typeUser}
                options={[
                  {
                    value: "1",
                    label: "کشاورزی",
                  },
                  {
                    value: "2",
                    label: "پوشاک",
                  },
                  {
                    value: "3",
                    label: "بانکی",
                  },
                ]}
                name="leadType"
                onChange={eventHandler4}
                legend={"صنعت"}
                placeholder={"صنعت را انتخاب کنید"}
              />

              <SelectCombo
                defaultValue={typeUser}
                options={[
                  {
                    value: "1",
                    label: "جدید",
                  },
                  {
                    value: "2",
                    label: "اقدام به تماس",
                  },
                  {
                    value: "3",
                    label: "در حال پیگیری",
                  },
                  {
                    value: "4",
                    label: "تماس در روز های آتی",
                  },
                  {
                    value: "5",
                    label: "لغو شده",
                  },
                ]}
                name="leadStatus"
                onChange={eventHandler2}
                legend={"وضعیت"}
                placeholder={"وضعیت را انتخاب کنید"}
              />

              <SelectCombo
                defaultValue={typeUser}
                options={[
                  {
                    value: "1",
                    label: "0-5",
                  },
                  {
                    value: "2",
                    label: "5-10",
                  },
                  {
                    value: "3",
                    label: "10-20",
                  },
                  {
                    value: "4",
                    label: "20-50",
                  },
                  {
                    value: "5",
                    label: "50-100",
                  },
                  {
                    value: "6",
                    label: "100 به بالا",
                  },
                ]}
                name="leadCompanyCount"
                onChange={eventHandler1}
                legend={"تعداد پرسنل"}
                placeholder={"تعداد پرسنل را انتخاب کنید"}
              />

              <div></div>
              <div></div>
              <div></div>

              <div className="mt-6">
                <ButtonAfra
                  onClick={sendDataToServer}
                  type={"orange"}
                  text={"افزودن سرنخ"}
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

export default addLeads;
