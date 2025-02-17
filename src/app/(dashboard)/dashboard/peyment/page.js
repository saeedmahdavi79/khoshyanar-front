"use client";
import { useRouter } from "next/navigation";
import TableAfra from "@/app/components/modules/TableAfra";
import CardStat from "@/app/components/modules/Card";
import ButtonAfra from "@/app/components/modules/Buttons";
import { Space, Table, Tag } from "antd";
import { Excel } from "antd-table-saveas-excel";
import { LiaFileExcel } from "react-icons/lia";
const peymentPage = () => {
  const router = useRouter();
  const handleClick = () => {
    const excel = new Excel();
    excel
      .addSheet("Excel Export AfraCrm")
      .addColumns(columns)
      .addDataSource(data, {
        str2Percent: true,
      })
      .saveAs("خروجی.xlsx");
  };

  return (
    <>
      <CardStat
        type={"10"}
        title={"پرداخت ها"}
        buttons={
          <>
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3">
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
            <div className="w-full mt-3 ">
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
                    title: "حساب",
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
export default peymentPage;
