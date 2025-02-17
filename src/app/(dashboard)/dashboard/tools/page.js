"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import { Tabs } from "antd";
import BtnCal from "@/app/components/modules/BtnCal";
import Notepad from "@/app/components/modules/Notepad";
import Sidebar from "@/app/components/modules/Sidebar";
import ChatWindow from "@/app/components/modules/ChatWindow";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";

import { LuUsers } from "react-icons/lu";
import { LuSmartphone } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { LuUserCircle } from "react-icons/lu";
import { LuBuilding } from "react-icons/lu";

const Tools = () => {
  const router = useRouter();

  const onChange = (key) => {
    console.log(key);
  };

  const [display, setDisplay] = useState("0");

  // تابع برای به‌روزرسانی نمایشگر
  const handleClick = (value) => {
    if (value === "AC") {
      setDisplay("0");
    } else if (value === "+/-") {
      setDisplay((prev) => (parseFloat(prev) * -1).toString());
    } else if (value === "=") {
      try {
        // تبدیل نمادهای خاص به فرمت مناسب برای محاسبه
        const formattedDisplay = display.replace(/×/g, "*").replace(/÷/g, "/");
        setDisplay(eval(formattedDisplay).toString());
      } catch {
        setDisplay("خطا");
      }
    } else if (value === "<") {
      setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else {
      setDisplay((prev) => (prev === "0" ? value : prev + value));
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const validKeys = "0123456789.+-*/=";
      if (validKeys.includes(e.key)) {
        handleClick(e.key === "*" ? "×" : e.key === "/" ? "÷" : e.key);
      } else if (e.key === "Enter") {
        handleClick("=");
      } else if (e.key === "Backspace") {
        setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      } else if (e.key === "Escape") {
        setDisplay("0");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [display]);

  const [notepads, setNotepads] = useState([]); // وضعیت لیست نوت‌پدها

  const addNotepad = () => {
    setNotepads([...notepads, <Notepad key={notepads.length} />]); // اضافه کردن یک نوت‌پد جدید
  };

  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    home: "",
    type: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // وضعیت باز بودن مودال

  // تابع مرتب‌سازی مخاطبین
  const sortContacts = (contacts) => {
    return contacts.sort((a, b) => {
      if (!isNaN(a.name[0]) && isNaN(b.name[0])) return -1;
      if (isNaN(a.name[0]) && !isNaN(b.name[0])) return 1;

      const isEnglishA = /^[A-Za-z]/.test(a.name);
      const isEnglishB = /^[A-Za-z]/.test(b.name);
      if (isEnglishA && !isEnglishB) return -1;
      if (!isEnglishA && isEnglishB) return 1;

      return a.name.localeCompare(b.name, "fa");
    });
  };

  // افزودن مخاطب و بستن مودال
  const handleAddContact = () => {
    if (newContact.name.trim() && newContact.phone.trim()) {
      const updatedContacts = [...contacts, { ...newContact }];
      setContacts(sortContacts(updatedContacts));
      setNewContact({ name: "", phone: "" });
      setIsModalOpen(false); // بستن مودال بعد از ذخیره
    }
  };

  const items = [
    {
      key: "1",
      label: "تقویم یادآور",
      children: (
        <>
          <span className="text-[15px] font-normal text-white flex justify-center w-full">
            به زودی در این محل تقویم یادآور تاسیس میشود
          </span>
        </>
      ),
    },
    {
      key: "2",
      label: "ماشین حساب",
      children: (
        <>
          <div className="w-full flex justify-end items-end">
            <div className="w-fit flex  justify-center gap-4  overflow-hidden p-4 bg-[var(--color-gray-bc)] rounded-sm items-center flex-col">
              <div className="w-full flex justify-center items-center h-20 rounded-lg px-4">
                <span className="flex justify-start text-[18px] font-bold items-center w-full text-black">
                  {display}
                </span>
              </div>
              <div className="w-fit grid grid-cols-4 gap-2" dir="ltr">
                {[
                  "AC",
                  "+/-",
                  "%",
                  "÷",
                  "7",
                  "8",
                  "9",
                  "×",
                  "4",
                  "5",
                  "6",
                  "-",
                  "1",
                  "2",
                  "3",
                  "+",
                  "0",
                  ".",
                  "=",
                  "<",
                ].map((text) => (
                  <BtnCal
                    key={text}
                    type={
                      ["÷", "×", "-", "+", "=", "<"].includes(text)
                        ? "orange"
                        : ["AC", "+/-", "%", ""].includes(text)
                        ? "number"
                        : "gray"
                    }
                    text={text}
                    onClick={() => handleClick(text)}
                    className={text === "0" ? "col-span-2" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: "دفترچه یادداشت",
      children: (
        <>
          <div className="w-full h-full flex flex-col justify-start items-end gap-4">
            <div className="w-[200px] flex h-full justify-start items-start   flex-col">
              <ButtonAfra
                text={"اضافه کردن"}
                type={"green"}
                onClick={addNotepad}
              />
            </div>
            <div className="w-full grid grid-cols-4 gap-2">
              <Notepad />
              {notepads} {/* نمایش نوت‌پدها */}
            </div>
          </div>
        </>
      ),
    },
    {
      key: "4",
      label: "چت روم",
      children: (
        <>
          <div className="flex w-full max-h-[65vh] h-[65vh]">
            <Sidebar />
          </div>
        </>
      ),
    },
    {
      key: "5",
      label: "دفترچه تلفن",
      children: (
        <>
          <div className="w-full flex justify-center flex-col p-4">
            {/* نمایش لیست مخاطبین به صورت گرید */}
          <div className="w-full flex justify-end">
          <div className="w-[200px] flex items-end justify-end">
              <ButtonAfra
                text={"اضافه کردن"}
                onClick={() => setIsModalOpen(true)}
                type={"green"}
              />
            </div>

          </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className=" flex flex-col gap-2 rounded-sm p-4 bg-[var(--color-blue-dark-bc)]"
                >
                  <div className="flex justify-between gap-2 items-center">
                    <LuUserCircle className="text-white size-5" />

                    <span className="font-bold text-[16px] text-white">
                      {contact.name}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2 items-center">
                    <LuSmartphone className="text-white size-5" />
                    <span className="font-bold text-[16px] text-white">
                      {contact.phone}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2 items-center">
                    <LuPhone className="text-white size-5" />
                    <span className="font-bold text-[16px] text-white">
                      {contact.home}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2 items-center">
                    <div className="flex">
                      <LuBuilding className="text-white size-5" />
                      <LuUsers className="text-white size-5" />
                    </div>
                    <span className="font-bold text-[16px] text-white">
                      {contact.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* دکمه اد کردن به صورت absolute پایین سمت راست */}
            {/* <button
              onClick={() => setIsModalOpen(true)} // باز کردن مودال
              className=" bottom-0 right-0 bg-blue-500 text-white px-4 py-2 rounded shadow-lg"
            >
              اد کردن
            </button> */}

            {/* مودال افزودن مخاطب */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-[#31363F]  p-6 rounded-sm shadow-lg w-full max-w-md">
                  <h2 className="text-xl text-white pb-4 font-semibold ">
                    افزودن مخاطب جدید
                  </h2>

                  {/* فرم ورودی نام و شماره تماس */}

                  <InputCom
                    onChenge={(e) =>
                      setNewContact({ ...newContact, name: e.target.value })
                    }
                    legend={"نام/نام شرکت"}
                    value={newContact.name}
                    name={"name"}
                    type={"req"}
                    placeholder={"نام یا شرکت را وارد کنید"}
                  />

                  <InputCom
                    onChenge={(e) =>
                      setNewContact({ ...newContact, phone: e.target.value })
                    }
                    value={newContact.phone}
                    legend={"تلفن همراه"}
                    name={"phone"}
                    type={"req"}
                    placeholder={"تلفن همراه را وارد کنید"}
                  />

                  <InputCom
                    onChenge={(e) =>
                      setNewContact({ ...newContact, home: e.target.value })
                    }
                    value={newContact.home}
                    legend={"تلفن ثابت"}
                    name={"phone"}
                    type={"req"}
                    placeholder={"تلفن ثابت را وارد کنید"}
                  />

                  <div className="mt-1">
                    <SelectCombo
                      options={[
                        {
                          value: "1",
                          label: "حقیقی",
                        },
                        {
                          value: "2",
                          label: "حقوقی",
                        },
                      ]}
                      name="type"
                      onChange={(e) =>
                        setNewContact({ ...newContact, type: e.label })
                      }
                      type={"new"}
                      defaultValue={newContact.type}
                      placeholder={"نوع مخاطب"}
                    />
                  </div>

                  {/* دکمه‌های ذخیره و بستن مودال */}
                  <div className="flex gap-4 justify-end pt-4">
                    <ButtonAfra
                      text={"ذخیره"}
                      onClick={handleAddContact}
                      type={"green"}
                    />
                    <ButtonAfra
                      text={"لغو"}
                      onClick={() => setIsModalOpen(false)}
                      type={"blue"}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="w-full h-full">
        <CardStat
          type={"10"}
          title={"ابزار ها"}
          des={"همه ابزار ها در یکجا"}
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
          data={
            <>
              <Tabs onChange={onChange} type="card" items={items} />
            </>
          }
        />
      </div>
    </>
  );
};
export default Tools;
