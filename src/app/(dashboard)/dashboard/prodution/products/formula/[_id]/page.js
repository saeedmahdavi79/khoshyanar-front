"use client";

import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import ButtonAfra from "@/app/components/modules/Buttons";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi2";
import TableAfra from "@/app/components/modules/TableAfra";

const singleLead = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const countMap = [];
  const router = useRouter();
  const { _id } = useParams();

  //useeff
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/formula/get-by-id"), {
      method: "POST",
      body: JSON.stringify({ _id }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setData([]) : setData(data.data.dataGet[0]);
        // !data.data ? setData2([]) : setData2(data.data.dataGet[0].childs);

        let _ids;

        _ids = {
          ids: data.data.dataGet[0].childs.map((data) => data.key),
        };

        fetch(baseUrl("/formula/get-storage-formula"), {
          method: "POST",
          body: JSON.stringify({ _id: _ids }),
          headers: {
            Authorization: `Bearer ${getCookies}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data2) => {
            countMap.push(data.data.dataGet[0].childs);
            countMap.forEach((item) => {
              data2.data.allDataCount.map((count) => {
                item.map((itemMap) => {
                  if (itemMap.key == count.id) {
                    itemMap.mainCount = count.count;
                  }
                });
              });
            });
          })
          .then(() => setData2(countMap[0]));
      });
  }, []);

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={`دریافت اطلاعات کامل فرمولاسیون : ${
            !data.title ? "تنظیم نشده" : data.title
          }`}
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
          des={"اطلاعات کامل و شرح فرمولاسیون بر اساس داده های موجود در سیستم"}
          data={
            <>
              <TableAfra
                type={"green"}
                data={data2.map((newPRD) => ({
                  key: newPRD._id,
                  name: newPRD.title,
                  count: newPRD.count,
                  storage: newPRD.mainCount,
                }))}
                columns={[
                  {
                    title: "نام محصول",
                    dataIndex: "name",
                    key: "name",
                    sorter: true,
                    // render(text, record) {
                    //   return {
                    //     props: {
                    //       style: { background: record.color },
                    //     },
                    //     children: <div className="text-white">{text}</div>,
                    //   };
                    // },
                  },

                  {
                    title: "تعداد در فرمول",
                    dataIndex: "count",
                    key: "count",
                    sorter: true,
                    // render(text, record) {
                    //   return {
                    //     props: {
                    //       style: { background: record.color },
                    //     },
                    //     children: <div className="text-white">{text}</div>,
                    //   };
                    // },
                  },
                  {
                    title: "تعداد موجود در انبار",
                    dataIndex: "storage",
                    key: "storage",
                    sorter: true,
                    // render(text, record) {
                    //   return {
                    //     props: {
                    //       style: { background: record.color },
                    //     },
                    //     children: <div className="text-white">{text}</div>,
                    //   };
                    // },
                  },
                  // {
                  //   title: "واحد",
                  //   dataIndex: "unit",
                  //   key: "unit",
                  //   sorter: true,
                  //   // render(text, record) {
                  //   //   return {
                  //   //     props: {
                  //   //       style: { background: record.color },
                  //   //     },
                  //   //     children: <div className="text-white">{text}</div>,
                  //   //   };
                  //   // },
                  // },
                ]}
              />
            </>
          }
        />
      </div>
    </>
  );
};

export default singleLead;
