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

const singleVisitor = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { _id } = useParams();

  //useeff
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
      .then((data) => setData(data.data.dataGet[0]));
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          مشخصات کارشناس : {!data.visitorName ? "تنظیم نشده" : data.visitorName}
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400  ">
          مشاهده اطلاعات کارشناس
        </span>
      </div>
      <div className="w-full flex gap-3 mt-6">
        <CardStat
          type={"5"}
          title={`دریافت اطلاعات کامل کارشناس : ${
            !data.visitorName ? "تنظیم نشده" : data.visitorName
          }`}
          des={"اطلاعات کامل و شرح فعالیت های کارشناس بر اساس داده های موجود"}
          data={
            <>
              <div className="w-full grid sm:grid-cols-1  md:grid-cols-2 gap-6 justify-center">
                <div className="md:hidden flex flex-col gap-4 justify-center items-center   ">
                  <span className="w-32 h-32 rounded-[20px] flex justify-center items-center border-2 border-[var(--color-green)]">
                    {data.userProfileImage ? (
                      <img
                        className="rounded-[20px]"
                        src={data.userProfileImage}
                      />
                    ) : (
                      <HiOutlineUser
                        size={"4rem"}
                        className="text-[var(--color-green)]"
                      />
                    )}
                  </span>
                  <div className="flex flex-col gap-3">
                    <span className="font-bold text-[16px]">توضیحات :</span>
                    <p className="text-[12px] text-justify font-normal text-gray-400">
                      {!data.description
                        ? "توضیحی ثبت نشده است"
                        : data.description}
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                  <InputCom
                    value={!data.visitorName ? "تنظیم نشده" : data.visitorName}
                    type={"dis"}
                    legend={"نام کامل"}
                  />
                  <InputCom
                    value={
                      !data.visitorCompany ? "تنظیم نشده" : data.visitorCompany
                    }
                    type={"dis"}
                    legend={"شرکت"}
                  />
                  <InputCom
                    value={!data.departemant ? "تنظیم نشده" : data.departemant}
                    type={"dis"}
                    legend={"دپارتمان"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.role ? "تنظیم نشده" : data.role}
                    legend={"سمت"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.nationalId ? "تنظیم نشده" : data.nationalId}
                    legend={"کد ملی"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.phone ? "تنظیم نشده" : data.phone}
                    legend={"شماره تلفن"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.email ? "تنظیم نشده" : data.email}
                    legend={"پست الکترونیک"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.address ? "تنظیم نشده" : data.address}
                    legend={"آدرس"}
                  />
                  <ButtonAfra
                    onClick3={() =>
                      router.push(`/dashboard/visitors/${_id}/edit`)
                    }
                    type={"3"}
                    text={"ویرایش اطلاعات"}
                  />
                  <ButtonAfra
                    onClick={() =>
                      router.push("/dashboard/visitors/allVisitors")
                    }
                    type={"4"}
                    text={"بازگشت به لیست کارشناسان"}
                  />
                </div>
                <div className="md:flex sm:hidden  justify-between">
                  <div className="flex flex-col gap-3">
                    <span className="font-bold text-[16px]">توضیحات :</span>
                    <p className="text-[12px] text-justify font-normal text-gray-400">
                      {!data.description
                        ? "توضیحی ثبت نشده است"
                        : data.description}
                    </p>
                  </div>
                  <span className="w-32 h-32 rounded-[20px] flex justify-center items-center border-2 border-[var(--color-green)]">
                    {data.userProfileImage ? (
                      <img
                        className="rounded-[20px]"
                        src={data.userProfileImage}
                      />
                    ) : (
                      <HiOutlineUser
                        size={"4rem"}
                        className="text-[var(--color-green)]"
                      />
                    )}
                  </span>
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default singleVisitor;
