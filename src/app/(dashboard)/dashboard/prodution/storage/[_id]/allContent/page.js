"use client";

import CardStat from "@/app/components/modules/Card";
import baseUrl from "@/utils/baseUrl";
import { useEffect, useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { getCookie } from "cookies-next";
import ButtonAfra from "@/app/components/modules/Buttons";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import TableAfra from "@/app/components/modules/TableAfra";
import { Tag } from "antd";
const allContacts = () => {
  const [data, setData] = useState([]);
  const { _id } = useParams();

  const router = useRouter();
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/source/get-src-content-by-source-id"), {
      method: "POST",
      body: JSON.stringify({ sourceId: _id }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));
  }, []);

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          buttons={
            <div className="flex gap-2">
              {/* <div className="w-[200px]">
                <ButtonAfra
                  onClick={() =>
                    router.push("/dashboard/prodution/storage/addStorage")
                  }
                  text={"افزودن انبار"}
                  type={"green"}
                />
              </div> */}

              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/prodution/storage")}
                  text={"بازکشت به لیست انبار ها"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          des={"مشاهده تمامی انبار های شما در سامانه"}
          title={"همه انبار ها"}
          data={
            <TableAfra
              type={"green"}
              data={data.map((visitor) => ({
                key: visitor._id,
                code: !visitor.code ? "تنظیم نشده" : visitor.code,
                name: !visitor.title ? "تنظیم نشده" : visitor.title,
                des: !visitor.des ? "تنظیم نشده" : visitor.des,
                firstCount: !visitor.firstCount
                  ? "تنظیم نشده"
                  : visitor.firstCount,
                entryCount: !visitor.entryCount
                  ? "تنظیم نشده"
                  : visitor.entryCount,
                exportCount: !visitor.exportCount
                  ? "تنظیم نشده"
                  : visitor.exportCount,
                mainCount: !visitor.mainCount
                  ? "تنظیم نشده"
                  : visitor.mainCount,

                operation: !visitor.vahed ? "تنظیم نشده" : visitor.vahed,
              }))}
              columns={[
                {
                  title: "کد محصول",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "نام محصول",
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
                  title: "اول دوره",
                  dataIndex: "firstCount",
                  key: "firstCount",
                  sorter: true,
                },
                {
                  title: "ورودی",
                  dataIndex: "entryCount",
                  key: "entryCount",
                  sorter: true,
                },

                {
                  title: "خروجی",
                  dataIndex: "exportCount",
                  key: "exportCount",
                  sorter: true,
                },
                {
                  title: "موجودی",
                  dataIndex: "mainCount",
                  key: "mainCount",
                  sorter: true,
                },
                {
                  title: "واحد",
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
