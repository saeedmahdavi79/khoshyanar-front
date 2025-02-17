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
const allContacts = () => {
  const [data, setData] = useState([]);


  const router = useRouter();
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/source/get-by-token"), {
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
          des={"مشاهده تمامی انبار های شما در سامانه"}
          title={"همه انبار ها"}
          buttons={
            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() =>
                    router.push("/dashboard/prodution/storage/addStorage")
                  }
                  text={"افزودن انبار"}
                  type={"green"}
                />
              </div>

              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/prodution")}
                  text={"بازگشت به بخش تولید"}
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
                name: !visitor.sourceName ? "تنظیم نشده" : visitor.sourceName,
                type: !visitor.type ? "تنظیم نشده" : visitor.type,
                vahed: !visitor.vahed ? "تنظیم نشده" : visitor.vahed,
                dama: !visitor.dama ? "تنظیم نشده" : visitor.dama,
                des: !visitor.sourceDes ? "تنظیم نشده" : visitor.sourceDes,
                exp: !visitor.expireDate ? "تنظیم نشده" : visitor.expireDate,
                operation: (
                  <>
                  <div className="flex flex-col md:flex-row  gap-3 ">
                    <Link href={`/dashboard/prodution/storage/${visitor._id}`}>
                      <Tag color="blue">مشاهده اطلاعات</Tag>
                    </Link>
                    <Link
                      href={`/dashboard/prodution/storage/${visitor._id}/allContent`}
                    >
                      <Tag color="green">مشاهده موجودی</Tag>
                    </Link></div>
                  </>
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
                  title: "توضیحات",
                  dataIndex: "des",
                  key: "des",
                  sorter: true,
                },
                {
                  title: "نوع",
                  dataIndex: "type",
                  key: "type",
                  sorter: true,
                },
                {
                  title: "واحد",
                  dataIndex: "vahed",
                  key: "vahed",
                  sorter: true,
                },
                {
                  title: "دما",
                  dataIndex: "dama",
                  key: "dama",
                  sorter: true,
                },

                {
                  title: "تاریخ انقضا",
                  dataIndex: "exp",
                  key: "exp",
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
