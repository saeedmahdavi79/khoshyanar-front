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
const addStorage = () => {
  const [typeUser, setTypeUser] = useState("1");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام کنید"
  );
  const [data, setData] = useState({
    sourceName: "",
    sourceDes: "",

    vahed: "",
    dama: "",
    type: "",
    expireDate: "",
  });

  const router = useRouter();

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");

    try {
      if (
        !data.sourceName &&
        !data.sourceDes &&
        !data.vahed &&
        !data.dama &&
        !data.type &&
        !data.expireDate
      ) {
        setIsOpen("true");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/source/create"), {
            method: "POST",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const getResponses = await postDatas.json();

          console.log(getResponses);
          if (getResponses.status == 202) {
            setIsOpen(true);
            setDialogType("2");
            setDialogTitle("ثبت موفق");
            setDialogDes("انبار با موفقیت به سیستم اضافه شد");
          } else {
            setIsOpen(true);
            setDialogType("1");
            setDialogTitle("ثبت نا موفق");
            setDialogDes("اضافه کردن انبار با مشکل مواجه شد");
          }
        } catch (error) {
          setIsOpen(true);
          setDialogType("1");
          setDialogTitle("ثبت نا موفق");
          setDialogDes("اضافه کردن انبار با مشکل مواجه شد");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeHandlerType = (e) => {
    setData({ ...data, type: e.label });
  };

  const changeHandlerVahed = (e) => {
    setData({ ...data, vahed: e.label });
  };

  const changeCal = async (e) => {
    let fullDate = await (e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD);
    setData({
      ...data,
      expireDate: fullDate.toString(),
      // expiresIn: new Date(
      //   jalali_to_gregorian(e.$jy, e.$jM + 1, e.$jD)
      // ).getTime(),
    });
  };

  return (
    <>
      <div className="w-full h-full">
        <CardStat
          type={"10"}
          des={"افزودن انبار جدید به سیستم مدیریت انبار"}
          title={"افزودن انبار به سیستم"}
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={sendDataToServer}
                  text={"ثبت اطلاعات انبار"}
                  type={"green"}
                />
              </div>

              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/prodution/storage")}
                  text={"بازگشت به لیست انبار ها"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <>
              <div
                className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 
                gap-3"
              >
                <InputCom
                  onChenge={changeHandler}
                  name={"sourceName"}
                  legend={"نام انبار"}
                  type={"req"}
                  placeholder={"نام انبار را وارد کنید"}
                />

                <InputCom
                  onChenge={changeCal}
                  name={"expireDate"}
                  type={"date"}
                  legend={"تاریخ انقضا انبار"}
                  placeholder={"تاریخ انقضا انبار را وارد کنید"}
                />

                <InputCom
                  onChenge={changeHandler}
                  name={"sourceDes"}
                  legend={"توضیحات انبار"}
                  type={"req"}
                  placeholder={"توضیحات انبار را وارد کنید"}
                />
                <SelectCombo
                  defaultValue={typeUser}
                  options={[
                    {
                      value: "1",
                      label: "کیلو",
                    },
                    {
                      value: "3",
                      label: "گرم",
                    },
                    {
                      value: "4",
                      label: "تن",
                    },
                    {
                      value: "5",
                      label: "عدد",
                    },
                  ]}
                  name="vahed"
                  onChange={changeHandlerVahed}
                  legend={"واحد شمارش انبار"}
                  placeholder={"واحد شمارش را انتخاب کنید"}
                />
                <SelectCombo
                  defaultValue={typeUser}
                  options={[
                    {
                      value: "1",
                      label: "انبار لوازم فاسد نشدنی",
                    },
                    {
                      value: "3",
                      label: "انبار لوازم فاسد شدنی",
                    },
                  ]}
                  name="type"
                  onChange={changeHandlerType}
                  legend={"نوع انبار"}
                  placeholder={"نوع انبار را انتخاب کنید"}
                />
                <InputCom
                  onChenge={changeHandler}
                  name={"dama"}
                  legend={"دمای مورد نظر انبار"}
                  type={"req"}
                  placeholder={"دمای مورد نظر انبار را وارد کنید"}
                />

                {/* <ButtonAfra
                  onClick={() => router.push("/dashboard/prodution/storage")}
                  type={"white-green-2"}
                  text={"بازگشت به لیست انبار ها"}
                /> */}
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

export default addStorage;
