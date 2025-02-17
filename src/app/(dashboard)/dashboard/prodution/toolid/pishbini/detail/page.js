"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import TableAfra from "@/app/components/modules/TableAfra";
import { Tag } from "antd";
import Link from "next/link";
import CardStat from "@/app/components/modules/Card";

const detailPagePishbini = () => {
  const [monthToolid, setMonthToolid] = useState("در حال دریافت");
  const router = useSearchParams();
  const getMonth = router.get("month");
  const [data3, setData3] = useState([]);

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

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

    fetch(baseUrl("/formula/get-toolid-by-month"), {
      method: "POST",
      body: JSON.stringify({ month: getMonth }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          setData3(data.data.dataGet);
        }
      });
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 items-center">
        <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
          مشاهده جزئیات تولید در {monthToolid}
        </span>
        <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
        <span className="font-normal text-[12px] text-gray-400   flex gap-1">
          مشاهده برنامه ریزی و تولید {monthToolid}
        </span>
      </div>
      <div className="w-full mt-6">
        <CardStat
          type={"7"}
          title={"مشاهده جزئیات برنامه ریزی"}
          des={"مشاهده جزئیات تولید و برنامه ریزی این ماه بر اساس فرمولاسیون"}
          data={
            <>
              <TableAfra
                type={"green"}
                data={data3.map((di) => ({
                  key: di._id,
                  name: !di.title ? "تنظیم نشده" : di.title,
                  count: !di.count ? "تنظیم نشده" : di.count,
                  month: monthToolid,
                  operation: (
                    <Link
                      href={`/dashboard/prodution/toolid/pishbini/detail/${di.formulaId}?month=${getMonth}`}
                    >
                      <Tag color="blue">مشاهده بیشتر</Tag>
                    </Link>
                  ),
                }))}
                columns={[
                  {
                    title: "نام محصول",
                    dataIndex: "name",
                    key: "name",
                    sorter: true,
                  },

                  {
                    title: "تعداد در برنامه",
                    dataIndex: "count",
                    key: "count",
                    sorter: true,
                  },
                  {
                    title: "ماه",
                    dataIndex: "month",
                    key: "month",
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
            </>
          }
        />
      </div>
    </>
  );
};

export default detailPagePishbini;
