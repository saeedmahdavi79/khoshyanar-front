// "use client";
// import ButtonAfra from "@/app/components/modules/Buttons";
// import CardStat from "@/app/components/modules/Card";
// import InputCom from "@/app/components/modules/Inputs";
// import SelectCombo from "@/app/components/modules/SelectCombo";
// import { useRouter } from "next/navigation";
// import { Tabs } from "antd";
// import dynamic from "next/dynamic";
// import React, { useState } from "react";
// import Select from "react-select";

// const App = () => {
//   const items = [
//     {
//       key: "36",
//       label: "مدیریت دارایی",
//       children: (
//         <div className="w-full flex flex-col gap-3 ">
//           <div className="grid md:grid-cols-2 px-2 place-items-center mx-auto  lg:grid-cols-4 sm:grid-cols-1 gap-3 justify-center items-center w-full">
//             <SelectCombo
//               legend={"دسته بندی"}
//               options={[]}
//               placeholder={" دسته بندی  "}
//             />
//             <InputCom
//               legend={"موقعیت جغرافیایی "}
//               placeholder={"  موقعیت جغرافایی  "}
//               type={"req"}
//             />
//             <InputCom
//               legend={"جزئیات دارایی"}
//               placeholder={"جزئیات دارایی "}
//               type={"req"}
//             />
//             <InputCom
//               legend={" مدیریت ارزش دارایی"}
//               placeholder={" مدیریت ارزش دارایی "}
//               type={"req"}
//             />
//           </div>
//         </div>
//       ),
//     },
//   ];

//   const options = items.map((item) => ({ value: item.key, label: item.label }));
//   const [selectedItem, setSelectedItem] = useState(options[0]?.value || "1");

//   const handleChange = (selectedOption) => {
//     setSelectedItem(selectedOption.value);
//   };

//   const currentItem = items.find((item) => item.key === selectedItem);

//   return (
//     <div className="w-full max-h-[86vh] h-full">
//       <CardStat
//         type={"10"}
//         title={"مدیریت دارایی"}
//         des={"مدیریت دارایی"}
//         buttons={
//           <div className="flex flex-col">
//             <div className="flex flex-col justify-center items-center md:flex-row gap-2 mb-4">
//               <div className="w-[200px]">
//                 <ButtonAfra
//                   onClick={() => router.push("/dashboard/")}
//                   text={"بازگشت به داشبورد"}
//                   type={"white-green-2"}
//                 />
//               </div>
//               <div className="w-[200px] ">
//                 <ButtonAfra type={"green"} text={"ثبت نهایی"} />
//               </div>
//             </div>
//           </div>
//         }
//         data={currentItem?.children}
//       />
//     </div>
//   );
// };

// export default App;


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

const NonoperatingAccounting = () => {
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
          title={"دارایی های غیر عملیاتی"}
          des={"مشاهده تمامی دارایی های غیر عملیاتی"}
          data={
            
            <TableAfra
              type={"green"}
              data={data.map((Accounting) => ({
                key: Accounting._id,
                name: Accounting.leadName,
                subject: Accounting.AccountingSubject,
                company: Accounting.AccountingCompany,
                source: Accounting.AccountingSource,
                status: Accounting.AccountingStatus,
                level:
                  Accounting.AccountingLevel == "داغ" ? (
                    <Tag color="red">{Accounting.AccountingLevel}</Tag>
                  ) : Accounting.AccountingLevel == "گرم" ? (
                    <Tag color="orange">{Accounting.AccountingLevel}</Tag>
                  ) : Accounting.AccountingLevel == "سرد" ? (
                    <Tag color="blue">{Accounting.AccountingLevel}</Tag>
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
                visitor: Accounting.visitorName,
                operation: (
                  <Link href={`/dashboard/accounting/tongibleaccounting/currentaccounting${Accounting._id}`}>
                    <Tag color="blue">مشاهده بیشتر</Tag>
                  </Link>
                ),
              }))}
              columns={[
                {
                  title: "تاریخ ایجاد",
                  dataIndex: "Creation date",
                  key: "Creation date",
                  sorter: true,
                },
                {
                  title: "دسته بندی",
                  dataIndex: "Category",
                  key: "Category",
                  sorter: true,
                },
                {
                  title: " جزئیات دارایی ",
                  dataIndex: "Property details",
                  key: "Property details",
                  sorter: true,
                },
                {
                  title: "موقیعت جغرافیایی",
                  dataIndex: "Geographical location",
                  key: "Geographical location",
                  sorter: true,
                },

                {
                  title: "انبار",
                  dataIndex: "warehouse",
                  key: "warehouse",
                  sorter: true,
                },
                {
                  title: "ارزش دارایی",
                  dataIndex: "Property value",
                  key: "Property value",
                  sorter: true,
                },
              ]}
            />
          }
          buttons={
            <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center md:flex-row gap-2 mb-4">
                {/* <div className="w-[200px] ">
                    <ButtonAfra
                        type={"sabz"}
                        text={"افزودن دارایی"}
                        onClick={() => router.push("/dashboard/leads/addleads")}
                    />
                </div> */}
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

export default NonoperatingAccounting;

