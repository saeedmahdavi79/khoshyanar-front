"use client";
import { Space, Table, Tag } from "antd";
import { Excel } from "antd-table-saveas-excel";
import { LiaFileExcel } from "react-icons/lia";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import TableAfra from "@/app/components/modules/TableAfra";
import Link from "next/link";
import { useRouter } from "next/navigation";

const createPage = () => {
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
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"پرسنل و کارکنان"}
          des={"بخش کارکنان و پرسنل ثبت شده در سیستم"}
          buttons={
            <div className="grid sm:grid-cols-1  gap-4 place-items-center  ">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:w-[200px] md:w-full gap-4 place-items-center    ">
              <span className="w-full">
                <Link href={"/dashboard/office/personal/create"}>
                  <ButtonAfra type={"green"} text={<span>افزودن پرسنل</span>} />
                </Link>
              </span>
              <div className="w-full flex">
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
            <TableAfra
              type={"green"}
              columns={[
                {
                  title: "نام",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "نام خانوادگی",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "کدملی",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },

                {
                  title: "شماره شناسنامه",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "تاریخ تولد",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "سمت",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "توضیحات",
                  dataIndex: "erja",
                  key: "erja",
                  sorter: true,
                },
                {
                  title: "تاریخ عقد قرارداد",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "مدت همکاری",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "تلفن همراه",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "تلفن ثابت",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "آدرس",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "کد پستی",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
                {
                  title: "عملیات",
                  dataIndex: "opt",
                  key: "opt",
                  sorter: true,
                },
              ]}
              data={[]}
            />
          }
        />
      </div>
      {/* <div className="w-full p-2 flex justify-between items-center">
      <div className="w-full mt-3">
        <TableAfra
          type={"green"}
          columns={[
            {
              title: "شماره نامه",
              dataIndex: "code",
              key: "code",
              sorter: true,
            },
            {
              title: "موضوع",
              dataIndex: "subject",
              key: "subject",
              sorter: true,
            },
            {
              title: "تاریخ نامه",
              dataIndex: "date",
              key: "date",
              sorter: true,
            },
            {
              title: "ایجاد کننده",
              dataIndex: "creator",
              key: "creator",
              sorter: true,
            },
            {
              title: "دریافت کننده",
              dataIndex: "recive",
              key: "recive",
              sorter: true,
            },
            {
              title: "عطف به",
              dataIndex: "atf",
              key: "atf",
              sorter: true,
            },
            {
              title: "وضعیت",
              dataIndex: "status",
              key: "status",
              sorter: true,
            },
            {
              title: "ارجاع به",
              dataIndex: "erja",
              key: "erja",
              sorter: true,
            },
            {
              title: "عملیات",
              dataIndex: "opt",
              key: "opt",
              sorter: true,
            },
          ]}
          data={[]}
        />
      </div>
      
    </div> */}
    </>
  );
};
export default createPage;
