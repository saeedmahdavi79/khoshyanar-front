"use client";
import CardStat from "@/app/components/modules/Card";
import TableAfra from "@/app/components/modules/TableAfra";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import { Tag } from "antd";
import ButtonAfra from "@/app/components/modules/Buttons";
import Link from "next/link";

const leadsPage = () => {
  const [data, setData] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/leads/get-visitor-leads"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
            مشاهده همه سرنخ ها
          </span>
          <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
          <span className="font-normal text-[12px] text-gray-400  ">
            مشاهده همه سرنخ های ثبت شده توسط شما
          </span>
        </div>
        <div className="flex gap-2">
          <div className="w-[200px]">
            <ButtonAfra
              onClick={() => router.push("/vDashboard/leads/addLeads")}
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
          title={"همه سرنخ ها"}
          des={"تمامی سرنخ های ثبت شده شما"}
          data={
            <TableAfra
              type={"orange"}
              data={data.map((leads) => ({
                key: leads._id,
                name: leads.leadName,
                subject: leads.leadSubject,
                company: leads.leadCompany,
                source: leads.leadSource,
                status: leads.leadStatus,
                level:
                  leads.leadLevel == "داغ" ? (
                    <Tag color="red">{leads.leadLevel}</Tag>
                  ) : leads.leadLevel == "گرم" ? (
                    <Tag color="orange">{leads.leadLevel}</Tag>
                  ) : leads.leadLevel == "سرد" ? (
                    <Tag color="blue">{leads.leadLevel}</Tag>
                  ) : (
                    ""
                  ),

                visitor: leads.visitorName,
                operation: (
                  <Link href={`/vDashboard/leads/${leads._id}`}>
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
                  title: "موضوع",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "شرکت یا حساب",
                  dataIndex: "company",
                  key: "company",
                  sorter: true,
                },
                {
                  title: "منبع",
                  dataIndex: "source",
                  key: "source",
                  sorter: true,
                },

                {
                  title: "وضعیت",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "سطح ارتباط",
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

export default leadsPage;
