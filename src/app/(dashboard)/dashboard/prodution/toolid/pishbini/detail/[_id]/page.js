"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import TableAfra from "@/app/components/modules/TableAfra";
import { Tag } from "antd";
import Link from "next/link";
import CardStat from "@/app/components/modules/Card";
import { useRouter, useParams } from "next/navigation";

const detailPagePishbini = () => {
  const [monthToolid, setMonthToolid] = useState("در حال دریافت");
  const router = useSearchParams();
  const getMonth = router.get("month");
  const [data3, setData3] = useState([]);
  const [data, setData] = useState([]);
  const [inputCount, setInputCount] = useState();

  const countMap = [];

  const { _id } = useParams();

  useEffect(() => {
    if (getMonth == "1") {
      setMonthToolid("فروردین");
    }
    if (getMonth == "2") {
      setMonthToolid("اردیبهشت");
    }
    if (getMonth == "3") {
      setMonthToolid("خرداد");
    }
    if (getMonth == "4") {
      setMonthToolid("تیر");
    }
    if (getMonth == "5") {
      setMonthToolid("مرداد");
    }
    if (getMonth == "6") {
      setMonthToolid("شهریور");
    }
    if (getMonth == "7") {
      setMonthToolid("مهر");
    }
    if (getMonth == "8") {
      setMonthToolid("آبان");
    }
    if (getMonth == "9") {
      setMonthToolid("آذر");
    }
    if (getMonth == "10") {
      setMonthToolid("دی");
    }
    if (getMonth == "11") {
      setMonthToolid("بهمن");
    }
    if (getMonth == "12") {
      setMonthToolid("اسفند");
    }

    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/formula/get-toolid-by-month-fr"), {
      method: "POST",
      body: JSON.stringify({ month: getMonth, formulaId: _id }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setData([]) : setData(data.data.dataGet[0].child[0]);
        // !data.data ? setData2([]) : setData2(data.data.dataGet[0].childs);
      });
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          مشاهده جزئیات
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400   flex gap-1">
          مشاهده جزئیات برنامه ریزی و تولید
        </span>
      </div>
      <div className="w-full mt-6">
        <CardStat
          type={"7"}
          title={"  مشاهده جزئیات"}
          des={"مشاهده جزئیات برنامه ریزی و تولید"}
          data={
            <>
              <TableAfra
                type={"green"}
                data={data.map((di) => ({
                  key: di.key,
                  name: !di.title ? "تنظیم نشده" : di.title,
                  count: !di.count
                    ? "تنظیم نشده"
                    : di.count.toString().replace("-", "").replace(".", "/"),
                  toolid: !di.count
                    ? "تنظیم نشده"
                    : parseFloat(di.newValue)
                        .toFixed(3)
                        .toString()
                        .replace("-", "")
                        .replace(".", "/"),
                  storage: !di.mainCount ? "تنظیم نشده" : di.mainCount,
                  reduced: (parseFloat(di.mainCount) - parseFloat(di.newValue))
                    .toFixed(3)
                    .toString()
                    .replace("-", "")
                    .replace(".", "/"),
                  reduce:
                    parseFloat(di.mainCount) >= parseFloat(di.newValue)
                      ? "در انبار موجود است"
                      : "در انبار کسری وجود دارد",
                  color:
                    parseFloat(di.mainCount) >= parseFloat(di.newValue)
                      ? "green"
                      : "red",
                }))}
                columns={[
                  {
                    title: "نام محصول",
                    dataIndex: "name",
                    key: "name",
                    sorter: true,
                    render(text, record) {
                      return {
                        props: {
                          style: { background: record.color },
                        },
                        children: <div className="text-white">{text}</div>,
                      };
                    },
                  },

                  {
                    title: "تعداد در فرمول",
                    dataIndex: "count",
                    key: "count",
                    sorter: true,
                    render(text, record) {
                      return {
                        props: {
                          style: { background: record.color },
                        },
                        children: <div className="text-white">{text}</div>,
                      };
                    },
                  },
                  {
                    title: "تعداد در برنامه",
                    dataIndex: "toolid",
                    key: "toolid",
                    sorter: true,
                    render(text, record) {
                      return {
                        props: {
                          style: { background: record.color },
                        },
                        children: <div className="text-white">{text}</div>,
                      };
                    },
                  },
                  {
                    title: "تعداد موجود در انبار",
                    dataIndex: "storage",
                    key: "storage",
                    sorter: true,
                    render(text, record) {
                      return {
                        props: {
                          style: { background: record.color },
                        },
                        children: <div className="text-white">{text}</div>,
                      };
                    },
                  },
                  {
                    title: "تعداد موجودی پس از این تولید",
                    dataIndex: "reduced",
                    key: "reduced",
                    sorter: true,
                    render(text, record) {
                      return {
                        props: {
                          style: { background: record.color },
                        },
                        children: <div className="text-white">{text}</div>,
                      };
                    },
                  },
                  {
                    title: "وضعیت",
                    dataIndex: "reduce",
                    key: "reduce",
                    sorter: true,
                    render(text, record) {
                      return {
                        props: {
                          style: { background: record.color },
                        },
                        children: <div className="text-white">{text}</div>,
                      };
                    },
                  },
                ]}
              />
            </>
          }
        />
      </div>
    </>
  );
};

export default detailPagePishbini;
