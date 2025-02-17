"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import TableAfra from "@/app/components/modules/TableAfra";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiCheckCircle } from "react-icons/hi2";
import { Button, Result } from "antd";

const callBackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams("success");
  const [statusPay, setStatusPay] = useState("");

  useEffect(() => {
    try {
      fetch(baseUrl("/plans/pay-verify"), {
        method: "POST",
        body: JSON.stringify({
          trackId: searchParams.get("trackId"),
          orderId: searchParams.get("orderId"),
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then(async (data) => {
          if (data.status == 202) {
            setStatusPay("0");
          }
          if (data.status == 100) {
            fetch(baseUrl("/plans/add-plan-to-user"), {
              method: "POST",
              body: JSON.stringify({
                userId: data.getOrder.orderUser,
                planId: data.getOrder.orderPDR,
              }),
              headers: { "Content-Type": "application/json" },
            })
              .then((response) => response.json())
              .then(async (data) => {
                if (data.status == 200) {
                  setStatusPay("1");
                }
              });
          }
          if (data.status == 201) {
            setStatusPay("1");
          }
        });
    } catch (error) {
      setStatusPay("2");
    }
  }, []);

  return (
    <div className="w-full max-h-[86vh] h-full">
      <CardStat
        type={"10"}
        title={"نتیجه تراکنش"}
        des={"در این بخش نتیجه تراکنش خود را از درگاه مشاهده کنید"}
        buttons={
          <div className="flex gap-2">
            <div className="w-[200px]">
              <ButtonAfra
                onClick={() => router.push("#")}
                text={"ارتباط با پشتیبانی"}
                type={"green"}
              />
            </div>
          </div>
        }
        data={
          <>
            {statusPay == "0" ? (
              <Result
                status="error"
                title="تراکنش ناموفق"
                subTitle="تراکنش نا موفق بود ، در صورت کسر مبلغ تا 72 ساعت به حساب شما برگشت داده می شود ، در غیر این صورت با پشتیبانی در ارتباط باشید"
                extra={[
                  <div className="flex gap-2 w-full justify-center items-center">
                    <div className="w-[200px] ">
                      <ButtonAfra
                        onClick={() => router.push("/dashboard/")}
                        text={"بازکشت به داشبورد"}
                        type={"red"}
                      />
                    </div>
                  </div>,
                ]}
              />
            ) : statusPay == "1" ? (
              <Result
                status="success"
                title="تراکنش موفق"
                subTitle={` تراکنش با موفقیت انجام شد ، کد رهگیری ${searchParams.get(
                  "trackId"
                )} در صورت بروز مشکل با پشتیبانی در ارتباط باشید`}
                extra={[
                  <div className="flex gap-2 w-full justify-center items-center">
                    <div className="w-[200px] ">
                      <ButtonAfra
                        onClick={() => router.push("/dashboard/")}
                        text={"بازکشت به داشبورد"}
                        type={"sabz"}
                      />
                    </div>
                  </div>,
                ]}
              />
            ) : statusPay == "2" ? (
              <Result
                status="error"
                title="نتیجه نامشخص"
                subTitle="تراکنش با موفقیت انجام شد ، کد رهگیری 0000 در صورت بروز مشکل با پشتیبانی در ارتباط باشید"
                extra={[
                  <div className="flex gap-2 w-full justify-center items-center">
                    <div className="w-[200px] ">
                      <ButtonAfra
                        onClick={() => router.push("/dashboard/")}
                        text={"بازکشت به داشبورد"}
                        type={"sabz"}
                      />
                    </div>
                  </div>,
                ]}
              />
            ) : (
              ""
            )}
          </>
        }
      />
    </div>
  );
};

export default callBackPage;
