"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import TableAfra from "@/app/components/modules/TableAfra";

import { useRouter } from "next/navigation";

const LeavePage = () => {
  const router = useRouter("");

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={" بخش مرخصی"}
          des={"لیست افراد درخواست دهنده مرخصی"}
          buttons={
            <>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="w-[200px]">
                  <ButtonAfra
                    onClick={() => router.push("/dashboard/office/createleave")}
                    text={"درخواست مرخصی"}
                    type={"green"}
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
            </>
          }
          data={
            <>
              <TableAfra
                type={"green"}
                data={[
                  {
                    Operation: (
                      <>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-2">
                          <div className="w-[100px]">
                            <ButtonAfra text={"تایید مرخصی"} type={"sabz"} />
                          </div>
                          <div className="w-[100px]">
                            <ButtonAfra text={"رد مرخصی"} type={"red"} />
                          </div>
                        </div>
                      </>
                    ),
                  },
                ]}
                columns={[
                  {
                    title: "نام درخواست کننده",
                    dataIndex: "name",
                    key: "name",
                    sorter: true,
                  },
                  {
                    title: "تاریخ درخواست",
                    dataIndex: "",
                    key: "",
                    sorter: true,
                  },
                  {
                    title: "مدت مرخصی",
                    dataIndex: "",
                    key: "",
                    sorter: true,
                  },
                  {
                    title: "توضیحات",
                    dataIndex: "",
                    key: "",
                    sorter: true,
                  },
                  {
                    title: "تاریخ ایجاد",
                    dataIndex: "",
                    key: "",
                    sorter: true,
                  },
                  {
                    title: "عملیات",
                    dataIndex: "Operation",
                    key: "Operation",
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

export default LeavePage;
