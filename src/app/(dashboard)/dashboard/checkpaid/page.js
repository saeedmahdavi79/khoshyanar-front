"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import { useRouter } from "next/navigation";
import { Tabs, Tag } from "antd";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import SelectCombo from "@/app/components/modules/SelectCombo";
import TableAfra from "@/app/components/modules/TableAfra";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import InputCom from "@/app/components/modules/Inputs";
const checkpaid = () => {
  const router = useRouter();

  const onChange = (key) => {
    console.log(key);
  };
  const changeHandler = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const items = [
    {
      key: "1",
      label: "کلیه چک ها",
      children: (
        <>
          <div className="w-full flex  justify-end items-center gap-3 flex-row">
            <span className="w-[415px] h-[45px] flex flex-row gap-2   ">
              <ButtonAfra
                type={"sabz"}
                onClick={() => router.push("/dashboard/addcheck/addcheck1")}
                className="h-[50px] "
                text={
                  <span className="flex  justify-center gap-3 items-center">
                    <HiOutlinePlusCircle
                      className="font-bold"
                      size={"1.3rem"}
                    />
                    <span>افزودن چک</span>
                  </span>
                }
              />
                <SelectCombo
                  type={"req"}
                  placeholder={"وضعیت چک "}
                  options={[
                    {
                      value: "all",
                      label: "همه",
                    },
                    {
                      value: "answered",
                      label: "پاسخ داده شده",
                    },
                    {
                      value: "new",
                      label: "جدید",
                    },
                    {
                      value: "closed",
                      label: "بسته شده",
                    },
                  ]}
                />
            </span>
          </div>
          <div className="w-full mt-3">
            <TableAfra
              type={"green"}
              columns={[
                {
                  title: "ردیف چک",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "شماره چک",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ صدور",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "تاریخ سررسید",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "بانک",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "شعبه",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "شماره حساب",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "عنوان ارز و کشور",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ ارزی",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
              ]}
              data={[]}
            />
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: "عودت شده از مشتری",
      children: (
        <>
          <div className="w-full flex flex-col sm:justify-center  md:justify-end lg:flex-row  items-center gap-3 md:flex-row  xl:flex-row">
          <span className="w-[400px] flex sm:flex-col md:justify-end lg:w-[400] md:w-[300px]  xl:w-[400px] sm:items-center md:flex-row sm:w-[200px]  gap-3 items-center">
              <span className="w-[200px] flex sm:w-[200px]   sm:flex-col   gap-3 items-center ">
                <SelectCombo
                  type={"req"}
                  placeholder={"وضعیت ارجاع"}
                  options={[
                    {
                      value: "all",
                      label: "دریافت شد",
                    },
                   
                  ]}
                />
              </span>
            </span>
          </div>

          <div className="w-full mt-3">
          <TableAfra
              type={"green"}
              columns={[
                {
                  title: "ردیف چک",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "شماره چک",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ صدور",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "تاریخ سررسید",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "بانک",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "شعبه",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "شماره حساب",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "عنوان ارز و کشور",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ ارزی",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
              ]}
              data={[]}
            />
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: "چک های اول دوره",
      children: (
        <>
          <div className="w-full flex flex-col  sm:justify-center   md:justify-between lg:flex-row     items-center gap-3 md:flex-row  xl:flex-row">
            <span className="w-1/4 flex justify-end items-center flex-row gap-3">
              <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"[جمع موجودی اول دوره"}
              type={"req"}
              placeholder={"وارد کنید..."}
            />
            </span>
          </div>

          <div className="w-full mt-3">
          <TableAfra
              type={"green"}
              columns={[
                {
                  title: "ردیف چک",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "شماره چک",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ صدور",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "تاریخ سررسید",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "بانک",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "شعبه",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "شماره حساب",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "عنوان ارز و کشور",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ ارزی",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
              ]}
              data={[]}
            />
          </div>
        </>
      ),
    },
    {
      key: "4",
      label: "پاس شده",
      children: (
        <>
      

          <div className="w-full mt-3">
          <TableAfra
              type={"green"}
              columns={[
                {
                  title: "ردیف چک",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "شماره چک",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ صدور",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "تاریخ سررسید",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "بانک",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "شعبه",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "شماره حساب",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "عنوان ارز و کشور",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ ارزی",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
              ]}
              data={[]}
            />
          </div>
        </>
      ),
    },
    {
      key: "5",
      label: "برگشتی",
      children: (
        <>
         

          <div className="w-full mt-3">
          <TableAfra
              type={"green"}
              columns={[
                {
                  title: "ردیف چک",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "شماره چک",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ صدور",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "تاریخ سررسید",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "بانک",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "شعبه",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "شماره حساب",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "عنوان ارز و کشور",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ ارزی",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
              ]}
              data={[]}
            />
          </div>
        </>
      ),
    },
    {
      key: "6",
      label: "موعد پرداخت",
      children: (
        <>
          

          <div className="w-full mt-3">
          <TableAfra
              type={"green"}
              columns={[
                {
                  title: "ردیف چک",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "شماره چک",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ صدور",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "تاریخ سررسید",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "بانک",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "شعبه",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "شماره حساب",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "عنوان ارز و کشور",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ ارزی",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
              ]}
              data={[]}
            />
          </div>
        </>
      ),
    },
    {
      key: "7",
      label: "ابطال شده",
      children: (
        <>
         

          <div className="w-full mt-3">
          <TableAfra
              type={"green"}
              columns={[
                {
                  title: "ردیف چک",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "شماره چک",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ صدور",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "تاریخ سررسید",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "بانک",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "شعبه",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "شماره حساب",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "عنوان ارز و کشور",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ ارزی",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
              ]}
              data={[]}
            />
          </div>
        </>
      ),
    },
    {
        key: "8",
        label: "صادر شده",
        children: (
          <>
          
  
            <div className="w-full mt-3">
            <TableAfra
              type={"green"}
              columns={[
                {
                  title: "ردیف چک",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "شماره چک",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ صدور",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "تاریخ سررسید",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "بانک",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "شعبه",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "شماره حساب",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "عنوان ارز و کشور",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مبلغ ارزی",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
              ]}
              data={[]}
            />
            </div>
          </>
        ),
      },
  ];
  const options = items.map((item) => ({ value: item.key, label: item.label }));
  const [selectedItem, setSelectedItem] = useState(options[0]?.value || "1");

  const handleChange = (selectedOption) => {
    setSelectedItem(selectedOption.value);
  };

  const currentItem = items.find((item) => item.key === selectedItem);
  return (
    <>
        <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"چک های پرداختی"}
          des={"چک ها تو مدیریت کن"}
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

export default checkpaid;
