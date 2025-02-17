"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import DialogPopup from "@/app/components/modules/Dialog";
import InputCom from "@/app/components/modules/Inputs";
import baseUrl from "@/utils/baseUrl";
import { Eventcalendar, locale } from "@mobiscroll/react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { useCallback, useEffect, useMemo, useState } from "react";
const calenderPage = () => {
  const [myEvents, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState();
  const [dataColor, setDataColor] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataTime, setDataTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("4");

  const router = useRouter();

  const handleDataTime = useCallback((args) => {
    setDataTime(new Date(args.date).toISOString());
    setIsOpen(true);
  }, []);

  const handleEventClick = async () => {
    const getCookies = getCookie("WuZiK");

    const getData = await fetch(baseUrl("/calender/create"), {
      method: "POST",
      headers: {
        authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        color: dataColor,
        title: dataTitle,
        start: dataTime,
        end: "",
      }),
    });
    const getResponse = await getData.json();

    if (getResponse.status == 202) {
      setIsOpen(false);
      const dataGeted = () => {
        const getCookies = getCookie("WuZiK");
        fetch(baseUrl("/calender/get-admin-event"), {
          method: "GET",
          headers: { Authorization: `Bearer ${getCookies}` },
        })
          .then((response) => response.json())
          .then((data) => setEvents(data.data.dataGet));
      };
      dataGeted();
    }
  };

  const myView = useMemo(() => ({ calendar: { labels: true } }), []);

  useEffect(() => {
    const dataGeted = () => {
      const getCookies = getCookie("WuZiK");
      fetch(baseUrl("/calender/get-admin-event"), {
        method: "GET",
        headers: { Authorization: `Bearer ${getCookies}` },
      })
        .then((response) => response.json())
        .then((data) => setEvents(data.data.dataGet));
    };
    dataGeted();
  }, []);

  return (
    <>
      <div className="w-full flex max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          des={
            "افزودن رویداد به تقویم (روز انتخابی را یک روز جلوتر انتخاب کنید)"
          }
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/")}
                  text={"بازگشت به داشبورد"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          title={"افزودن رویداد"}
          data={
            <div className="h-full flex">
              <Eventcalendar
                theme={"windows"}
                themeVariant={"light"}
                locale={locale["fa"]}
                clickToCreate={false}
                dragToCreate={false}
                dragToMove={false}
                dragToResize={false}
                eventDelete={false}
                data={myEvents}
                view={myView}
                onCellClick={handleDataTime}
              />
            </div>
          }
        />
      </div>
      <DialogPopup
        isOpen={isOpen}
        type={dialogType}
        inputtitle={
          <InputCom
            onChenge={(e) => setDataTitle(e.target.value)}
            placeholder={"عنوان"}
            type={"req"}
          />
        }
        inputcolor={
          <InputCom
            onChenge={(e) => setDataColor(e.target.value)}
            placeholder={"رنگ"}
            type={"color"}
          />
        }
        handleEvent={handleEventClick}
        close={() => setIsOpen(false)}
      />
    </>
  );
};

export default calenderPage;
