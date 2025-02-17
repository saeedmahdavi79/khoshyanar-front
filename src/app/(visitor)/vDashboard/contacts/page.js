"use client";

import CardStat from "@/app/components/modules/Card";
import baseUrl from "@/utils/baseUrl";
import { useEffect, useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { getCookie } from "cookies-next";
import ButtonAfra from "@/app/components/modules/Buttons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import TableAfra from "@/app/components/modules/TableAfra";
import { Tag } from "antd";

const allContacts = () => {
  const [data, setData] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/contact/get-visitors-contacts"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.user)));
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
            مشاهده همه کانتکت ها
          </span>
          <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
          <span className="font-normal text-[12px] text-gray-400  ">
            مشاهده همه کانتکت های ثبت شده شما در سیستم
          </span>
        </div>
        <div className="flex gap-2">
          <div className="w-[200px]">
            <ButtonAfra
              onClick={() => router.push("/vDashboard/contacts/addContacts")}
              text={"افزودن"}
              type={"orange"}
            />
          </div>
          <div className="w-[200px]">
            <ButtonAfra
              onClick={() => router.push("/vDashboard/")}
              text={"بازکشت به داشبورد"}
              type={"white-orange"}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <CardStat
          type={"7"}
          des={"مشاهده تمامی کانتکت های شما در سامانه"}
          title={"همه کانتکت ها"}
          data={
            <TableAfra
              type={"orange"}
              data={data.map((visitor) => ({
                key: visitor._id,
                name: visitor.contactName,
                subject: visitor.contactPosition,
                company: visitor.phone,
                source: visitor.nationalCode,
                status: visitor.email,
                level: visitor.address,
                visitor: visitor.leadName,
                operation: (
                  <Link href={`/vDashboard/contacts/${visitor._id}`}>
                    <Tag color="blue">مشاهده بیشتر</Tag>
                  </Link>
                ),
              }))}
              columns={[
                {
                  title: "نام",
                  dataIndex: "name",
                  key: "name",
                  sorter: true,
                },
                {
                  title: "نقش",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "شماره تلفن",
                  dataIndex: "company",
                  key: "company",
                  sorter: true,
                },
                {
                  title: "کد ملی",
                  dataIndex: "source",
                  key: "source",
                  sorter: true,
                },

                {
                  title: "ایمیل",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "آدرس",
                  dataIndex: "level",
                  key: "level",
                  sorter: true,
                },
                {
                  title: "سرنخ",
                  dataIndex: "visitor",
                  key: "visitor",
                  sorter: true,
                },
                {
                  title: "عملیات",
                  dataIndex: "operation",
                  key: "operation",
                  sorter: true,
                },
              ]}
            />
          }
        />
      </div>
    </>
  );
};

export default allContacts;
