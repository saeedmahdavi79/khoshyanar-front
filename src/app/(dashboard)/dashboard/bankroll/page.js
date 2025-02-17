"use client";
import { useRouter } from "next/navigation";
import TableAfra from "@/app/components/modules/TableAfra";
import CardStat from "@/app/components/modules/Card";
import ButtonAfra from "@/app/components/modules/Buttons";
import { Space, Table, Tag } from "antd";
import { Excel } from "antd-table-saveas-excel";
import { LiaFileExcel } from "react-icons/lia";
import InputCom from "@/app/components/modules/Inputs";
const bankroll = () => {
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
  const changeHandler = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  return (
    <>
      <CardStat
        type={"10"}
        des={""}
        title={"گزارشات هزینه روزانه"}
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
         <div className="w-full grid grid-cols-4">
          <InputCom
              onChenge={changeHandler}
              name={"title"}
              legend={"موجودی اول دوره بانک"}
              type={"req"}
              placeholder={"وارد کنید..."}
            /></div>
            <div className="w-full mt-3 ">
              <TableAfra
                type={"green"}
                columns={[
                  {
                    title: "ردیف",
                    dataIndex: "code",
                    key: "code",
                    sorter: true,
                  },
                  {
                    title: "روز",
                    dataIndex: "subject",
                    key: "subject",
                    sorter: true,
                  },
                  {
                    title: "تاریخ",
                    dataIndex: "date",
                    key: "date",
                    sorter: true,
                  },
                  {
                    title: "نام بانک",
                    dataIndex: "creator",
                    key: "creator",
                    sorter: true,
                  },
                  {
                    title: "شماره حساب/شماره کارت",
                    dataIndex: "recive",
                    key: "recive",
                    sorter: true,
                  },
                  {
                    title: "شعبه/کد شعبه",
                    dataIndex: "atf",
                    key: "atf",
                    sorter: true,
                  },
                  {
                    title: "توضیحات",
                    dataIndex: "status",
                    key: "status",
                    sorter: true,
                  },
                  {
                    title: "دسته بندی",
                    dataIndex: "status",
                    key: "status",
                    sorter: true,
                  },
                  {
                    title: "روش پرداخت",
                    dataIndex: "erja",
                    key: "erja",
                    sorter: true,
                  },
                  {
                    title: "بدهکار",
                    dataIndex: "erja",
                    key: "erja",
                    sorter: true,
                  },
                  {
                    title: "بستانکار",
                    dataIndex: "erja",
                    key: "erja",
                    sorter: true,
                  },
                  {
                    title: "مانده",
                    dataIndex: "erja",
                    key: "erja",
                    sorter: true,
                  },
                  {
                    title: "نام دریافت کننده",
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
export default bankroll;
