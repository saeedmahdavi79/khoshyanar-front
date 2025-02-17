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

const singleLead = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { _id } = useParams();

  //useeff
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/leads/get-lead-by-id-admin"), {
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
          نام سرنخ : {!data.leadName ? "تنظیم نشده" : data.leadName}
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400  ">
          مشاهده اطلاعات سرنخ
        </span>
      </div>
      <div className="w-full flex gap-3 mt-6">
        <CardStat
          type={"5"}
          title={`دریافت اطلاعات کامل سرنخ : ${
            !data.leadName ? "تنظیم نشده" : data.leadName
          }`}
          des={"اطلاعات کامل و شرح سرنخ بر اساس داده های موجود"}
          data={
            <>
              <div className="w-full gap-6 justify-center">
                <div className="grid grid-cols-4 gap-3">
                  <InputCom
                    value={!data.leadName ? "تنظیم نشده" : data.leadName}
                    type={"dis"}
                    legend={"نام کامل"}
                  />
                  <InputCom
                    value={!data.leadCompany ? "تنظیم نشده" : data.leadCompany}
                    type={"dis"}
                    legend={"شرکت"}
                  />
                  <InputCom
                    value={
                      !data.leadPosition ? "تنظیم نشده" : data.leadPosition
                    }
                    type={"dis"}
                    legend={"سمت"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.leadEmail ? "تنظیم نشده" : data.leadEmail}
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
                    value={!data.leadWebsite ? "تنظیم نشده" : data.leadWebsite}
                    legend={"وب سایت"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.leadAddress ? "تنظیم نشده" : data.leadAddress}
                    legend={"آدرس"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.leadType ? "تنظیم نشده" : data.leadType}
                    legend={"کسب و کار"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.leadSource ? "تنظیم نشده" : data.leadSource}
                    legend={"منبع"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.leadLevel ? "تنظیم نشده" : data.leadLevel}
                    legend={"سطح ارتباط"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.leadStatus ? "تنظیم نشده" : data.leadStatus}
                    legend={"وضعیت"}
                  />
                  <InputCom
                    type={"dis"}
                    value={
                      !data.leadCompanyCount
                        ? "تنظیم نشده"
                        : data.leadCompanyCount
                    }
                    legend={"تعداد پرسنل"}
                  />
                  <div></div>
                  <div></div>

                  <div></div>
                  <div></div>

                  <ButtonAfra
                    onClick3={() =>
                      router.push(`/dashboard/visitors/${_id}/edit`)
                    }
                    type={"green"}
                    text={"ویرایش اطلاعات"}
                  />
                  <ButtonAfra
                    onClick={() => router.push("/dashboard/leads")}
                    type={"white"}
                    text={"بازگشت به لیست سرنخ ها"}
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

export default singleLead;
