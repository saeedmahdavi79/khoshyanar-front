"use client";
import { useRouter } from "next/navigation";
import SelectCombo from "@/app/components/modules/SelectCombo";
import TableAfra from "@/app/components/modules/TableAfra";
import CardStat from "@/app/components/modules/Card";
import ButtonAfra from "@/app/components/modules/Buttons";
import { Space, Table, Tag } from "antd";
import { Excel } from "antd-table-saveas-excel";
import { LiaFileExcel } from "react-icons/lia";
const billPage = () => {
  const router = useRouter();
 
  return (
    <>
      <CardStat
        type={"10"}
        title={"صورت حساب"}
        buttons={
         
          <div className="w-full flex flex-col md:flex-row  sm:justify-center   md:justify-end md:w-[100px]  sm:w-[200px]  items-center gap-3  lg:flex-row xl:flex-row ">
           <div className="xl:w-[300px] sm:w-[200px] flex  ">
              <span className="w-[300px] flex  gap-3">
                <span className=" w-full flex  justify-end gap-3 items-center">
                  <SelectCombo
                    placeholder={"صورت حساب"}
                    options={[
                      {
                        value: "paid",
                        label: "پرداخت شده",
                      },
                      {
                        value: "not paid",
                        label: "پرداخت نشده",
                      },
                    ]}
                  />
                </span>
              </span>
            </div>
            <div className="xl:w-[300px] sm:w-[200px] flex  ">
              <span className="w-[300px] flex  gap-3">
                <span className=" w-full flex  justify-end gap-3 items-center">
                  <SelectCombo
                    placeholder={"صورت حساب"}
                    options={[
                      {
                        value: "1",
                        label: "سال مالی 1403",
                      },
                      {
                        value: "2",
                        label: "سال مالی 1404",
                      },
                      {
                        value: "3",
                        label: "سال مالی 1405",
                      },
                    ]}
                  />
                </span>
              </span>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3">
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
        data={
          <>
            <div className="w-full mt-3">
              <TableAfra
                type={"green"}
                columns={[
                  {
                    title: "شماره",
                    dataIndex: "code",
                    key: "code",
                    sorter: true,
                  },
                  {
                    title: "تاریخ ایجاد",
                    dataIndex: "subject",
                    key: "subject",
                    sorter: true,
                  },
                  {
                    title: "پرداخت کننده",
                    dataIndex: "date",
                    key: "date",
                    sorter: true,
                  },
                  {
                    title: "تاریخ پرداخت",
                    dataIndex: "creator",
                    key: "creator",
                    sorter: true,
                  },
                  {
                    title: "مدت",
                    dataIndex: "recive",
                    key: "recive",
                    sorter: true,
                  },
                  {
                    title: "روش پرداخت",
                    dataIndex: "atf",
                    key: "atf",
                    sorter: true,
                  },
                  {
                    title: "مبلغ",
                    dataIndex: "status",
                    key: "status",
                    sorter: true,
                  },
                  {
                    title: "عملیات",
                    dataIndex: "erja",
                    key: "erja",
                    sorter: true,
                  },
                ]}
                data={[]}
              />
            </div>
          </>
        }
      />
    </>
  );
};
export default billPage;
