"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import TableAfra from "@/app/components/modules/TableAfra";

import { Tabs, Tag } from "antd";

import { useRouter } from "next/navigation";

const OrderPage = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const router = useRouter();

  const items = [
    {
      key: "1",
      label: "سفارشات",
      children: (
        <>
          <TableAfra
            type={"green"}
            columns={[
              {
                title: "نامه کالا",
                dataIndex: "code",
                key: "code",
                sorter: true,
              },
              {
                title: "تعداد",
                dataIndex: "subject",
                key: "subject",
                sorter: true,
              },
              {
                title: "تاریخ ثبت",
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
                title: "قیمت فروش",
                dataIndex: "atf",
                key: "atf",
                sorter: true,
              },
              {
                title: "تخفیف",
                dataIndex: "status",
                key: "status",
                sorter: true,
              },
              {
                title: "محصول",
                dataIndex: "opt",
                key: "opt",
                sorter: true,
              },
            ]}
            data={[]}
          />
        </>
      ),
    },
    {
      key: "2",
      label: "خریداران حقیقی",
      children: (
        <>
          <TableAfra
            type={"green"}
            columns={[
              {
                title: "نام نام خانوادگی",
                dataIndex: "code",
                key: "code",
                sorter: true,
              },
              {
                title: "کد ملی",
                dataIndex: "subject",
                key: "subject",
                sorter: true,
              },
              {
                title: "شماره شناسنامه",
                dataIndex: "subject",
                key: "subject",
                sorter: true,
              },
              {
                title: "تلفن همراه",
                dataIndex: "date",
                key: "date",
                sorter: true,
              },
              {
                title: "تلفن ثابت",
                dataIndex: "creator",
                key: "creator",
                sorter: true,
              },
              {
                title: "کدپستی",
                dataIndex: "recive",
                key: "recive",
                sorter: true,
              },
              {
                title: "آدرس",
                dataIndex: "atf",
                key: "atf",
                sorter: true,
              },
              {
                title: "محصول",
                dataIndex: "opt",
                key: "opt",
                sorter: true,
              },
              {
                title: "تعداد",
                dataIndex: "subject2",
                key: "subject2",
                sorter: true,
              },
            ]}
            data={[]}
          />
        </>
      ),
    },
    {
      key: "3",
      label: "خریداران حقوقی",
      children: (
        <>
          <TableAfra
            type={"green"}
            columns={[
              {
                title: "نام  شرکت",
                dataIndex: "code",
                key: "code",
                sorter: true,
              },
              {
                title: "شناسه ملی",
                dataIndex: "subject",
                key: "subject",
                sorter: true,
              },
              {
                title: "کد ثبت",
                dataIndex: "subject",
                key: "subject",
                sorter: true,
              },
              {
                title: "تلفن همراه",
                dataIndex: "date",
                key: "date",
                sorter: true,
              },
              {
                title: "تلفن ثابت",
                dataIndex: "creator",
                key: "creator",
                sorter: true,
              },
              {
                title: "کدپستی",
                dataIndex: "recive",
                key: "recive",
                sorter: true,
              },
              {
                title: "آدرس",
                dataIndex: "atf",
                key: "atf",
                sorter: true,
              },
              {
                title: "محصول",
                dataIndex: "opt",
                key: "opt",
                sorter: true,
              },
              {
                title: "تعداد",
                dataIndex: "subject2",
                key: "subject2",
                sorter: true,
              },
            ]}
            data={[]}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"ثبت سفارش فروش"}
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() =>
                    router.push("/dashboard/order/orderregistration")
                  }
                  text={"افزودن سفارش"}
                  type={"sabz"}
                />
              </div>
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/order/buyer")}
                  text={"افزودن خریدار"}
                  type={"green"}
                />
              </div>
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/")}
                  text={"بازکشت به داشبورد"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <>
              <Tabs onChange={onChange} type="card" items={items} />
            </>
          }
        />
      </div>
    </>
  );
};
export default OrderPage;
