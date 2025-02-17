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
    fetch(baseUrl("/source/get-by-id"), {
      method: "POST",
      body: JSON.stringify({ _id }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setData([]) : setData(data.data.dataGet[0])
      );
  }, []);

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          buttons={
            <div className="flex gap-2">
              {/* <div className="w-[200px]">
                <ButtonAfra
                  onClick={() =>
                    router.push("/dashboard/prodution/storage/addStorage")
                  }
                  text={"افزودن انبار"}
                  type={"green"}
                />
              </div> */}

              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/prodution/storage")}
                  text={"بازکشت به بخش لیست انبار ها"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          title={`دریافت اطلاعات کامل انبار : ${
            !data.sourceName ? "تنظیم نشده" : data.sourceName
          }`}
          des={"اطلاعات کامل و شرح انبار بر اساس داده های موجود"}
          data={
            <>
              <div className="w-full gap-6 justify-center">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
                  <InputCom
                    value={!data.sourceName ? "تنظیم نشده" : data.sourceName}
                    type={"dis"}
                    legend={"نام انبار"}
                  />
                  <InputCom
                    value={!data.sourceDes ? "تنظیم نشده" : data.sourceDes}
                    type={"dis"}
                    legend={"توضیحات"}
                  />
                  <InputCom
                    value={!data.vahed ? "تنظیم نشده" : data.vahed}
                    type={"dis"}
                    legend={"واحد"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.dama ? "تنظیم نشده" : data.dama}
                    legend={"دما"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.type ? "تنظیم نشده" : data.type}
                    legend={"نوع انبار"}
                  />
                  <InputCom
                    type={"dis"}
                    value={!data.expireDate ? "تنظیم نشده" : data.expireDate}
                    legend={"تاریخ انقضا"}
                  />

                  <ButtonAfra
                    onClick={() =>
                      router.push(`/dashboard/prodution/products/all`)
                    }
                    type={"green"}
                    text={"افزودن مواد اولیه / کالا"}
                  />
                  {/* <ButtonAfra
                    onClick={() => router.push("/dashboard/prodution/storage")}
                    type={"white"}
                    text={"بازگشت به لیست انبار ها"}
                  /> */}
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
