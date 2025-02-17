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
const allVisitors = () => {
  const [data, setData] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/visitor/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));
  }, []);

  return (
    <>
      {/* <div className="w-full flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
            مشاهده همه کارشناسان
          </span>
          <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
          <span className="font-normal text-[12px] text-gray-400  ">
            مشاهده همه کارشناسان سامانه شما در سیستم
          </span>
        </div>
        <div className="flex gap-2">
          <div className="w-[200px]">
            <ButtonAfra
              onClick={() => router.push("/dashboard/visitors/addVisitor")}
              text={"افزودن"}
              type={"green"}
            />
          </div>
          <div className="w-[200px]">
            <ButtonAfra
              onClick={() => router.push("/dashboard/")}
              text={"بازکشت به داشبورد"}
              type={"white"}
            />
          </div>
        </div>
      </div> */}
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          des={"مشاهده تمامی کارشناسان فعال شما در سامانه"}
          title={"همه کارشناسان"}
          buttons={
            <div className="grid md:grid-cols-2 sm:grid-cols-1 w-fit   gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/visitors/addVisitor")}
                  text={"افزودن کارشناس"}
                  type={"green"}
                />
              </div>
              <div className="w-[200px] ">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/")}
                  text={"بازگشت به داشبورد"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <TableAfra
              type={"green"}
              data={data.map((visitor) => ({
                key: visitor._id,
                name: visitor.visitorName,
                subject: visitor.role,
                company: visitor.phone,
                source: visitor.nationalId,
                status: visitor.email,
                level: visitor.address,
                visitor: visitor.createDate,
                operation: (
                  <Link href={`/dashboard/visitors/${visitor._id}`}>
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
                  title: "تاریخ ایجاد",
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

export default allVisitors;
