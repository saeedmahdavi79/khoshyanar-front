"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useState, useEffect } from "react";
import DialogPopup from "@/app/components/modules/Dialog";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import { useRouter, useParams } from "next/navigation";
const addStorage = () => {
  const { _id } = useParams();
  const [typeUser, setTypeUser] = useState("1");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام به ثبت نام در نرم افزار جامع مدیریت ارتباط مشتریان افرا کنید"
  );
  const [data, setData] = useState({
    sourceCode: "",
    sourceName: "",
    sourceDes: "",
    firstCount: "",
    entryCount: "",
    exportCount: "",
    productId: "6692d3246fd47800323fcb44",
    sourceId: _id,
  });
  const [dataRec, setDataRec] = useState([]);

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
        !data.data ? setDataRec([]) : setDataRec(data.data.dataGet[0])
      );
  }, []);

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
          const postDatas = await fetch(baseUrl("/source/create-content"), {
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
            setDialogDes("مواد یا محصول با موفقیت به سیستم اضافه شد");
          } else {
            setIsOpen(true);
            setDialogType("1");
            setDialogTitle("ثبت نا موفق");
            setDialogDes("اضافه کردن مواد یا محصول با مشکل مواجه شد");
          }
        } catch (error) {
          console.log(error);
          setIsOpen(true);
          setDialogType("1");
          setDialogTitle("ثبت نا موفق");
          setDialogDes("اضافه کردن مواد یا محصول با مشکل مواجه شد");
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
      <div className="w-full flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          اضافه کردن مواد / محصول به انبار :{" "}
          {!dataRec.sourceName ? "تنظیم نشده" : dataRec.sourceName}
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400  ">
          افزودن انبار به سیستم مدیریت انبار
        </span>
      </div>
      <div className="flex gap-3 mt-6">
        <CardStat
          type={"3"}
          des={"افزودن مواد یا محصول به سیستم مدیریت انبار"}
          title={`افزودن محصول یا مواد جدید به : ${dataRec.sourceName}`}
          data={
            <>
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "> 
              <InputCom
                onChenge={changeHandler}
                name={"sourceCode"}
                legend={"کد محصول"}
                type={"req"}
                placeholder={"کد محصول را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"sourceName"}
                legend={"نام محصول"}
                type={"req"}
                placeholder={"نام محصول را وارد کنید"}
              />

              <InputCom
                onChenge={changeHandler}
                name={"sourceDes"}
                legend={"توضیحات محصول"}
                type={"req"}
                placeholder={"توضیحات محصول را وارد کنید"}
              />

              <InputCom
                onChenge={changeHandler}
                name={"firstCount"}
                legend={"موجودی اول دوره محصول"}
                type={"req"}
                placeholder={"موجودی اول دوره محصول را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"entryCount"}
                legend={"ورودی محصول"}
                type={"req"}
                placeholder={"ورودی محصول را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandler}
                name={"exportCount"}
                legend={"خروجی محصول"}
                type={"req"}
                placeholder={"خروجی محصول را وارد کنید"}
              />
          </div>

              <ButtonAfra
                onClick={sendDataToServer}
                type={"green"}
                text={"افزودن مواد / محصول"}
              />
              <ButtonAfra
                onClick={() => router.push("/dashboard/prodution/storage")}
                type={"white"}
                text={"بازگشت به لیست انبار ها"}
              />
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
