"use client";

import CardStat from "@/app/components/modules/Card";
import baseUrl from "@/utils/baseUrl";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import ButtonAfra from "@/app/components/modules/Buttons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TableAfra from "@/app/components/modules/TableAfra";
import { Tag } from "antd";
import { HiOutlinePlusCircle } from "react-icons/hi2";

const allContacts = () => {
  const [data, setData] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/contact/get-admin-contacts"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));
  }, []);

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          des={"مشاهده تمامی کانتکت های شما در سامانه"}
          title={"همه کانتکت ها"}
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/contacts/addcontact")}
                  text={
                    <span className="flex justify-center gap-3 items-center">
                      <HiOutlinePlusCircle
                        className="font-bold"
                        size={"1.3rem"}
                      />
                      <span>
                        افزودن مخاطب
                      </span>
                    </span>
                  }
                  type={"sabz"}
                />
              </div>
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
            <TableAfra
              type={"green"}
              data={data.map((visitor) => ({
                key: visitor._id,
                name: !visitor.contactName ? "تنظیم نشده" : visitor.contactName,
                subject: !visitor.contactPosition
                  ? "تنظیم نشده"
                  : visitor.contactPosition,
                company: !visitor.phone ? "تنظیم نشده" : visitor.phone,
                source: !visitor.contactCompany
                  ? "تنظیم نشده"
                  : visitor.contactCompany,
                status: !visitor.email ? "تنظیم نشده" : visitor.email,
                level: !visitor.address ? "تنظیم نشده" : visitor.address,
                visitor: !visitor.visitorUser
                  ? "تنظیم نشده"
                  : visitor.visitorUser,
                date: !visitor.leadName ? "تنظیم نشده" : visitor.leadName,
                operation: (
                  <Link href={`/dashboard/contacts/${visitor._id}`}>
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
                  title: "سمت",
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
                  title: "شرکت یا حساب",
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
                  title: "کارشناس",
                  dataIndex: "visitor",
                  key: "visitor",
                  sorter: true,
                },
                {
                  title: "سرنخ ها",
                  dataIndex: "date",
                  key: "date",
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
