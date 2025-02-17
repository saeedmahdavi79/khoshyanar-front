"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import TableAfra from "@/app/components/modules/TableAfra";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiCheckCircle } from "react-icons/hi2";

const SMSPage = () => {
  const router = useRouter();

  const SendSms = async () => {
    const sendData = await fetch(baseUrl("/sepidar/send-sms"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numbers: ["09146922788", "09376922788", "09146883163"],
        message: "مهیار جون سلام",
      }),
    });

    const getResponse = await sendData.json();
  };

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"ارسال پیامک گروهی به مخاطبان"}
          des={
            "در این بخش می توانید به تمامی مخاطبان خود پیامک گروهی ارسال کنید و مخاطبین را از آخرین بروزرسانی های کسب و کار خود آگاه کنید"
          }
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={SendSms}
                  text={"ارتباط با پشتیبانی"}
                  type={"green"}
                />
              </div>
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/")}
                  text={"بازکشت به داشبورد"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <>
              <div className="w-full flex pt-12 gap-3">
                <div className="w-1/2 flex flex-col gap-3">
                  <InputCom
                    type={"req"}
                    placeholder={"موضوع پیامک را وارد کنید"}
                    legend={"موضوع پیامک"}
                  />
                  <span>انتخاب گیرندگان</span>
                </div>
                <div className="w-1/2 flex flex-col gap-5">
                  <span>
                    <InputCom
                      col={10}
                      row={10}
                      name={"text"}
                      legend={"متن پیامک"}
                      type={"textarea"}
                      placeholder={"متن پیامک ارسالی را وارد کنید"}
                    />
                  </span>
                  <div className="w-[200px] mr-auto">
                    <ButtonAfra
                      onClick={SendSms}
                      text={"ارسال پیامک"}
                      type={"green"}
                    />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <div className="mt-3">
          <CardStat
            type={"10"}
            title={"آخرین پیامک های ارسالی"}
            des={"وضعیت و مشاهده آخرین پیامک های ارسال شده توسط شما"}
            data={
              <div className="w-full pt-6">
                <TableAfra
                  type={"green"}
                  data={[]}
                  columns={[
                    {
                      title: "کد پیگیری",
                      dataIndex: "code",
                      key: "code",
                      sorter: true,
                    },
                    {
                      title: "وضعیت",
                      dataIndex: "status",
                      key: "status",
                      sorter: true,
                    },
                    {
                      title: "موضوع پیامک",
                      dataIndex: "subject",
                      key: "subject",
                      sorter: true,
                    },
                    {
                      title: "متن پیامک",
                      dataIndex: "text",
                      key: "text",
                      sorter: true,
                    },

                    {
                      title: "تاریخ ایجاد",
                      dataIndex: "date",
                      key: "date",
                      sorter: true,
                    },
                  ]}
                />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};

export default SMSPage;
