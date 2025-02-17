"use client";
import CardStat from "@/app/components/modules/Card";
import TableAfra from "@/app/components/modules/TableAfra";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { HiOutlineCube } from "react-icons/hi2";
import { HiOutlineBeaker } from "react-icons/hi2";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { HiMiniCog8Tooth } from "react-icons/hi2";
import { Tag } from "antd";
import { useRouter } from "next/navigation";
import ButtonAfra from "@/app/components/modules/Buttons";

const formulaPage = () => {
  const [data3, setData3] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/formula/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setData3([]) : setData3(data.data.dataGet);
      });
  }, []);

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"بخش مشاهده فرمولاسیون ها (BOM)"}
          des={"مشاهده تمامی فرمولاسیون ها (BOM) ها متصل شده به سیستم سپیدار"}
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/")}
                  text={"بازگشت به بخش تولید"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <TableAfra
              type={"green"}
              data={data3.map((leads) => ({
                key: leads._id,
                name: leads.title,
                code: leads.createDate,
                operation: (
                  <Link
                    href={`/dashboard/prodution/products/formula/${leads._id}`}
                  >
                    <Tag color="orange">مشاهده اطلاعات</Tag>
                  </Link>
                ),
              }))}
              columns={[
                {
                  title: "نام BOM",
                  dataIndex: "name",
                  key: "name",
                  sorter: true,
                },
                {
                  title: "تاریخ ایجاد",
                  dataIndex: "code",
                  key: "code",
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

export default formulaPage;
