"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import TableAfra from "@/app/components/modules/TableAfra";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import DialogPopup from "@/app/components/modules/Dialog";

const startPishbini = () => {
  const [typeUser, setTypeUser] = useState();
  const [data3, setData3] = useState([]);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [inputCount, setInputCount] = useState();
  const [monthToolid, setMonthToolid] = useState("در حال دریافت");
  const [formulId, setFormulId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام کنید"
  );
  const router = useSearchParams();
  const getMonth = router.get("month");

  const countMap = [];
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

    fetch(baseUrl("/formula/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setData3("") : setData3(data.data.dataGet)
      );
  }, []);

  const ShowToolid = (id) => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/formula/get-by-id"), {
      method: "POST",
      body: JSON.stringify({ _id: id }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        !data.data ? setData([]) : setData(data.data.dataGet[0]);
        // !data.data ? setData2([]) : setData2(data.data.dataGet[0].childs);

        let _ids;

        _ids = {
          ids: data.data.dataGet[0].childs.map((data) => data.key),
        };

        fetch(baseUrl("/formula/get-storage-formula"), {
          method: "POST",
          body: JSON.stringify({ _id: _ids }),
          headers: {
            Authorization: `Bearer ${getCookies}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data2) => {
            countMap.push(data.data.dataGet[0].childs);
            countMap.forEach((item) => {
              data2.data.allDataCount.map((count) => {
                item.map((itemMap) => {
                  if (itemMap.key == count.id) {
                    console.log(itemMap);
                    itemMap.mainCount = count.count;
                    itemMap.newValue =
                      parseFloat(itemMap.count) * parseFloat(inputCount);
                  }
                });
              });
            });
          })
          .then(() => setData2(countMap));
      });
  };

  const showResult = () => {
    ShowToolid(typeUser.value);
    setFormulId(typeUser.value);
    setShowTable(true);
  };

  const saveDataInServer = () => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/formula/create-toolid"), {
      method: "POST",
      body: JSON.stringify({
        count: inputCount,
        child: data,
        formulaId: formulId,
        month: getMonth,
      }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          setIsOpen(true);
          setDialogType("2");
          setDialogTitle("ثبت موفق");
          setDialogDes("فرمولاسیون با موفقیت به سیستم اضافه شد");
        }
      });
  };

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={`برنامه ریزی و تولید ماه ${monthToolid}`}
          des={`برنامه ریزی و مشاهده کسری و موجودی برای ماه ${monthToolid}`}
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/")}
                  text={"بازگشت به بخش تولید"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <>
              <div className="mt-6 flex gap-3 items-start justify-center w-2/3 mx-auto">
                <div className="flex  flex-col md:flex-row sm:w-[300px] md:w-full justify-center items-center gap-3">
                  <InputCom
                    onChenge={(e) => setInputCount(e.target.value)}
                    legend={"تعداد در برنامه برای این فرمولاسیون"}
                    type={"number"}
                  />
                  <SelectCombo
                    legend={"انتخاب فرمولاسیون"}
                    defaultValue={typeUser}
                    onChange={setTypeUser}
                    placeholder={"لطفا فرمولاسیون را انتخاب کنید"}
                    // options={data3.map((leads) => ({
                    //   value: leads._id,
                    //   label: leads.title,
                    // }))}
                  />
                  <ButtonAfra
                    onClick={showResult}
                    type={"green"}
                    text={"ثبت و مشاهده نتیجه"}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4 ">
                {showTable == true ? (
                  <>
                    <TableAfra
                      type={"green"}
                      data={data2.map((newPRD) => ({
                        key: newPRD.key,
                        name: newPRD.title,
                        toolid: inputCount,
                        count: newPRD.count,
                        storage: newPRD.mainCount,
                      }))}
                      columns={[
                        {
                          title: "نام محصول",
                          dataIndex: "name",
                          key: "name",
                          sorter: true,
                          // render(text, record) {
                          //   return {
                          //     props: {
                          //       style: { background: record.color },
                          //     },
                          //     children: (
                          //       <div className="text-white">{text}</div>
                          //     ),
                          //   };
                          // },
                        },

                        {
                          title: "تعداد در فرمول",
                          dataIndex: "count",
                          key: "count",
                          sorter: true,
                          // render(text, record) {
                          //   return {
                          //     props: {
                          //       style: { background: record.color },
                          //     },
                          //     children: (
                          //       <div className="text-white">{text}</div>
                          //     ),
                          //   };
                          // },
                        },
                        {
                          title: "تعداد در برنامه",
                          dataIndex: "toolid",
                          key: "toolid",
                          sorter: true,
                          // render(text, record) {
                          //   return {
                          //     props: {
                          //       style: { background: record.color },
                          //     },
                          //     children: (
                          //       <div className="text-white">{text}</div>
                          //     ),
                          //   };
                          // },
                        },
                        {
                          title: "تعداد موجود در انبار",
                          dataIndex: "storage",
                          key: "storage",
                          sorter: true,
                          // render(text, record) {
                          //   return {
                          //     props: {
                          //       style: { background: record.color },
                          //     },
                          //     children: <div className="text-white">{text}</div>,
                          //   };
                          // },
                        },
                        // {
                        //   title: "تعداد موجود در انبار",
                        //   dataIndex: "storage",
                        //   key: "storage",
                        //   sorter: true,
                        //   render(text, record) {
                        //     return {
                        //       props: {
                        //         style: { background: record.color },
                        //       },
                        //       children: (
                        //         <div className="text-white">{text}</div>
                        //       ),
                        //     };
                        //   },
                        // },
                        // {
                        //   title: "تعداد موجودی پس از این تولید",
                        //   dataIndex: "reduced",
                        //   key: "reduced",
                        //   sorter: true,
                        //   render(text, record) {
                        //     return {
                        //       props: {
                        //         style: { background: record.color },
                        //       },
                        //       children: (
                        //         <div className="text-white">{text}</div>
                        //       ),
                        //     };
                        //   },
                        // },
                        // {
                        //   title: "وضعیت",
                        //   dataIndex: "status",
                        //   key: "status",
                        //   sorter: true,
                        //   render(text, record) {
                        //     return {
                        //       props: {
                        //         style: { background: record.color },
                        //       },
                        //       children: (
                        //         <div className="text-white">{text}</div>
                        //       ),
                        //     };
                        //   },
                        // },
                      ]}
                    />
                    <div className="w-full">
                      <div className="w-2/6 mx-auto">
                        <ButtonAfra
                          onClick={saveDataInServer}
                          type={"green"}
                          text={"ثبت نهایی"}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </>
          }
        />
      </div>
      <DialogPopup
        isOpen={isOpen}
        type={dialogType}
        title={dialogTitle}
        des={dialogDes}
        close={() => setIsOpen(false)}
      />
    </>
  );
};

export default startPishbini;
