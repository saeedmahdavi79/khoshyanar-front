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
const lettersPage = () => {
  const router = useRouter();

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "نامه های صادره",
      children: (
        <>
          <div className="w-full flex  justify-end items-center gap-3 flex-row">
            <span className="w-[415px] h-[45px] flex flex-row gap-2   ">
              <ButtonAfra
                type={"sabz"}
                onClick={() => router.push("/dashboard/office/letters/create")}
                className="h-[50px] "
                text={
                  <span className="flex  justify-center gap-3 items-center">
                    <HiOutlinePlusCircle
                      className="font-bold"
                      size={"1.3rem"}
                    />
                    <span>افزودن نامه</span>
                  </span>
                }
              />
                <SelectCombo
                  type={"req"}
                  placeholder={"وضعیت نامه "}
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
                  title: "شماره نامه",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "موضوع",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ نامه",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "ایجاد کننده",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "عطف به",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "ارجاع به",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "عملیات",
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
      label: "نامه های وارده",
      children: (
        <>
          <div className="w-full flex flex-col sm:justify-center  md:justify-end lg:flex-row  items-center gap-3 md:flex-row  xl:flex-row">
            <span className="w-[415px] h-[45px] flex flex-col md:flex-row gap-2   ">
              <ButtonAfra
                type={"sabz"}
                onClick={() => router.push("/dashboard/office/letters/create")}
                text={
                  <span className="flex justify-center gap-3 items-center">
                    <HiOutlinePlusCircle
                      className="font-bold"
                      size={"1.3rem"}
                    />
                    <span>افزودن نامه</span>
                  </span>
                }
              />
                <SelectCombo
                  type={"req"}
                  placeholder={"وضعیت نامه "}
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
                  title: "شماره نامه",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "موضوع",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ نامه",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "ایجاد کننده",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "عطف به",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "ارجاع به",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "عملیات",
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
      label: " نامه های کارکنان",
      children: (
        <>
          <div className="w-full flex flex-col  sm:justify-center   md:justify-between lg:flex-row     items-center gap-3 md:flex-row  xl:flex-row">
            <span className="w-[200px]">
              <ButtonAfra
                type={"sabz"}
                text={
                  <span className="flex justify-center gap-3 items-center">
                    <HiOutlinePlusCircle
                      className="font-bold"
                      size={"1.3rem"}
                    />
                    <span>افزودن نامه</span>
                  </span>
                }
              />
            </span>
            <span className="w-[600px] flex justify-end items-center flex-row gap-3">
              <span className="font-bold text-[12px] w-[300px]  flex justify-center ">
                <SelectCombo
                  type={"req"}
                  placeholder={"وضعیت نامه "}
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
              <span className="w-[300px] flex justify-end gap-3 items-center">
                <SelectCombo placeholder={"جستجو بر اساس شماره نامه..."} />
              </span>
            </span>
          </div>

          <div className="w-full mt-3">
            <TableAfra
              type={"green"}
              columns={[
                {
                  title: "شماره نامه",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "موضوع",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ نامه",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "ایجاد کننده",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "عطف به",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "ارجاع به",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "عملیات",
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
      label: "نامه های ارجاع شده به من",
      children: (
        <>
          <div className="w-full flex flex-col  items-center sm:justify-center   md:justify-end lg:flex-row  gap-3 md:flex-row  xl:flex-row">
            <span className="w-[5
              10px] h-[50px] flex  flex-col justify-end items-center sm:flex-col md:flex-row gap-3">
              <span className="font-bold  text-[12px] justify-end  gap-3 sm:flex-col md:flex-row items-center flex">
                <SelectCombo
                  type={"req"}
                  placeholder={"وضعیت ارجاع"}
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
              <span className=" flex justify-end h-[50px] gap-3 items-center">
                <SelectCombo placeholder={"جستجو بر اساس شماره نامه..."} />
              </span>
            </span>
          </div>

          <div className="w-full mt-3">
            <TableAfra
              type={"green"}
              columns={[
                {
                  title: "شماره نامه",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "موضوع",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ نامه",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "ایجاد کننده",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "عطف به",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "ارجاع به",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "عملیات",
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
      label: " نامه های ارجاعی من به دیگران",
      children: (
        <>
          <div className="w-full  flex justify-end items-center sm:flex-col md:justify-end md:flex-row lg:justify-end">
            <span className="w-[400px] flex sm:flex-col md:justify-end lg:w-[400] md:w-[300px]  xl:w-[400px] sm:items-center md:flex-row sm:w-[200px]  gap-3 items-center">
              <span className="w-[200px] flex sm:w-[200px]   sm:flex-col   gap-3 items-center ">
                <SelectCombo
                  type={"req"}
                  placeholder={"وضعیت ارجاع"}
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
                      value: "closed",
                      label: "پاسخ داده نشده",
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
                  title: "شماره نامه",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "موضوع",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "تاریخ نامه",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "ایجاد کننده",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "دریافت کننده",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "عطف به",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "وضعیت",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "ارجاع به",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "عملیات",
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
 

  return (
    <>
        <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"ایجاد نامه"}
          des={"ایجاد نامه برای کارکنان و پرسنل"}
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

export default lettersPage;
