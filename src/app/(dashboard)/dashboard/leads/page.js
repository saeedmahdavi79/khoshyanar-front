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
import { Button } from "jodit/esm/modules";

const leadsPage = () => {
  const [data, setData] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/leads/get-admin-leads"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));
  }, []);

  return (
    <>
     
       
      <div className="flex gap-3 mt-6">
        <CardStat
          type={10}
          title={"همه سرنخ ها"}
          des={"تمامی سرنخ های ثبت شده شما"}
          data={
            
            <TableAfra
              type={"green"}
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
                // leads.leadLevel == "داغ" ? (
                //   <span className="bg-red-200 text-red-500">
                //     {leads.leadLevel}
                //   </span>
                // ) : leads.leadLevel == "گرم" ? (
                //   <span className="bg-orange-200 text-orange-500">
                //     {leads.leadLevel}
                //   </span>
                // ) : leads.leadLevel == "سرد" ? (
                //   <span className="bg-blue-200 text-blue-500">
                //     {leads.leadLevel}
                //   </span>
                // ) : (
                //   ""
                // ),
                visitor: leads.visitorName,
                operation: (
                  <Link href={`/dashboard/leads/${leads._id}`}>
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
          buttons={
            <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center md:flex-row gap-2 mb-4">
                <div className="w-[200px] ">
                    <ButtonAfra
                        type={"sabz"}
                        text={"افزودن سرنخ"}
                        onClick={() => router.push("/dashboard/leads/addleads")}
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
        </div>
          }
        />
      </div>
    </>
  );
};

export default leadsPage;
