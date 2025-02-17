"use client";

import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import ButtonAfra from "@/app/components/modules/Buttons";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi2";

const singleLeadAdmin = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { _id } = useParams();

  //useEff
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
      .then((data) => setData(data.data.dataGet[0]));
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          نام کانتکت : {!data.contactName ? "تنظیم نشده" : data.contactName}
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400  ">
          مشاهده اطلاعات کانتکت
        </span>
      </div>
      <div className="w-full flex gap-3 mt-6">
        <CardStat
          type={"5"}
          title={`دریافت اطلاعات کامل کانتکت : ${
            !data.contactName ? "تنظیم نشده" : data.contactName
          }`}
          des={"اطلاعات کامل و شرح کانتکت بر اساس داده های موجود"}
          data={
            <>
              <div className="w-full gap-6 justify-center">
                <div className="grid grid-cols-4 gap-3">
                  <InputCom
                    value={!data.contactName ? "تنظیم نشده" : data.contactName}
                    type={"dis"}
                    legend={"نام کامل"}
                  />
                  <InputCom
                    value={
                      !data.contactCompany ? "تنظیم نشده" : data.contactCompany
                    }
                    type={"dis"}
                    legend={"شرکت"}
                  />
                  <InputCom
                    value={
                      !data.contactPosition
                        ? "تنظیم نشده"
                        : data.contactPosition
                    }
                    type={"dis"}
                    legend={"سمت"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.email ? "تنظیم نشده" : data.email}
                    legend={"ایمیل"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.staticPhone ? "تنظیم نشده" : data.staticPhone}
                    legend={"تلفن ثابت"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.phone ? "تنظیم نشده" : data.phone}
                    legend={"شماره تلفن"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.address ? "تنظیم نشده" : data.address}
                    legend={"آدرس"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.visitorUser ? "تنظیم نشده" : data.visitorUser}
                    legend={"کارشناس"}
                  />
                  <InputCom
                    type={"dis"}
                    value={
                      !data.nationalCode ? "تنظیم نشده" : data.nationalCode
                    }
                    legend={"کد ملی"}
                  />

                  <div></div>
                  <div></div>

                  <div></div>
                  <div></div>

                  <ButtonAfra
                    onClick={() =>
                      router.push(`/dashboard/contacts/${_id}/edit`)
                    }
                    type={"green"}
                    text={"ویرایش اطلاعات"}
                  />
                  <ButtonAfra
                    onClick={() => router.push("/dashboard/contacts")}
                    type={"white"}
                    text={"بازگشت به لیست کانتکت ها"}
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default singleLeadAdmin;
