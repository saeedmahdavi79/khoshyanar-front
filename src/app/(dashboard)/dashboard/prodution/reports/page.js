"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import SelectCombo from "@/app/components/modules/SelectCombo";
import TableAfra from "@/app/components/modules/TableAfra";
import baseUrl from "@/utils/baseUrl";
import { LineChart, PieChart } from "@mui/x-charts";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import DialogPopup from "@/app/components/modules/Dialog";
import { useRouter } from "next/navigation";

const reportPage = () => {
  const [countCat, setCountCat] = useState();
  const [countProduct, setCountProduct] = useState();
  const [countSource, setCountSource] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام کنید"
  );

  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [type, setType] = useState();
  const [showTable, setShowTable] = useState(4);

  const [uData, setUdata] = useState([]);
  const [pData, setPdata] = useState([]);
  const [sData, setSdata] = useState([]);
  const [data, setData] = useState([]);
  const [dataYear, setDataYear] = useState([]);
  const [dataTable1, setDataTable1] = useState([]);
  const [dataTable2, setDataTable2] = useState([]);
  const [dataTable3, setDataTable3] = useState([]);

  const [tData, setTdata] = useState([]);
  const [tPieData, setTPiedata] = useState();

  const [fData, setFdata] = useState([]);
  const [fPieData, setFPiedata] = useState();
  const router = useRouter();
  const xLabels = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/product/get-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setCountProduct([]) : setCountProduct(data.data)
      );

    fetch(baseUrl("/category/get-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setCountCat("") : setCountCat(data.data)));

    fetch(baseUrl("/product/get-source-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setCountSource("") : setCountSource(data.data)
      );

    fetch(baseUrl("/product/get-cat-in-month"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setUdata([])
          : setUdata([
              data.data.farvardin,
              data.data.ordibehesht,
              data.data.khordad,
              data.data.tir,
              data.data.mordad,
              data.data.shahrivar,
              data.data.mehr,
              data.data.aban,
              data.data.azar,
              data.data.dey,
              data.data.bahman,
              data.data.esfand,
            ]);
      });

    fetch(baseUrl("/product/get-product-in-month"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setPdata([])
          : setPdata([
              data.data.farvardin,
              data.data.ordibehesht,
              data.data.khordad,
              data.data.tir,
              data.data.mordad,
              data.data.shahrivar,
              data.data.mehr,
              data.data.aban,
              data.data.azar,
              data.data.dey,
              data.data.bahman,
              data.data.esfand,
            ]);
      });

    fetch(baseUrl("/product/get-source-in-month"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setSdata([])
          : setSdata([
              data.data.farvardin,
              data.data.ordibehesht,
              data.data.khordad,
              data.data.tir,
              data.data.mordad,
              data.data.shahrivar,
              data.data.mehr,
              data.data.aban,
              data.data.azar,
              data.data.dey,
              data.data.bahman,
              data.data.esfand,
            ]);
      });

    fetch(baseUrl("/product/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));

    fetch(baseUrl("/fy/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        !data.data ? setDataYear([]) : setDataYear(data.data.dataGet);
      });

    fetch(baseUrl("/formula/get-in-month-pish"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setTdata([])
          : setTdata([
              data.data.farvardin,
              data.data.ordibehesht,
              data.data.khordad,
              data.data.tir,
              data.data.mordad,
              data.data.shahrivar,
              data.data.mehr,
              data.data.aban,
              data.data.azar,
              data.data.dey,
              data.data.bahman,
              data.data.esfand,
            ]);
      });
    fetch(baseUrl("/formula/get-pish-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setTPiedata("") : setTPiedata(data.data)));

    fetch(baseUrl("/formula/get-formula-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setFPiedata("") : setFPiedata(data.data)));

    fetch(baseUrl("/formula/get-formula-count-month"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setFdata([])
          : setFdata([
              data.data.farvardin,
              data.data.ordibehesht,
              data.data.khordad,
              data.data.tir,
              data.data.mordad,
              data.data.shahrivar,
              data.data.mehr,
              data.data.aban,
              data.data.azar,
              data.data.dey,
              data.data.bahman,
              data.data.esfand,
            ]);
      });
  }, []);

  const changeHandlerMonth = (e) => {
    setMonth(e.value);
  };
  const changeHandlerYear = (e) => {
    setYear(e.value);
  };

  const changeHandlerType = (e) => {
    setType(e.value);
  };

  const eventHandler = async () => {
    try {
      const getCookiess = await getCookie("WuZiK");

      if (!month && !year && !type) {
        setIsOpen(true);
      } else {
        if (type == "1") {
          setShowTable("1");
          const postDatas = await fetch(baseUrl("/product/get-by-year-month"), {
            method: "POST",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ month, year }),
          });
          const getResponses = await postDatas.json();
          if (!getResponses.data) {
            setDataTable3([]);
          } else {
            setDataTable3(getResponses.data.dataGet);
          }
        }
        if (type == "2") {
          setShowTable("2");
          const postDatas = await fetch(
            baseUrl("/product/get-pr-by-year-month"),
            {
              method: "POST",
              headers: {
                authorization: `Bearer ${getCookiess}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ month, year }),
            }
          );
          const getResponses = await postDatas.json();
          if (!getResponses.data) {
            setDataTable2([]);
          } else {
            setDataTable2(getResponses.data.dataGet);
          }
        }
        if (type == "3") {
          setShowTable("3");
          const postDatas = await fetch(
            baseUrl("/product/get-src-by-year-month"),
            {
              method: "POST",
              headers: {
                authorization: `Bearer ${getCookiess}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ month, year }),
            }
          );
          const getResponses = await postDatas.json();
          if (!getResponses.data) {
            setDataTable1([]);
          } else {
            setDataTable1(getResponses.data.dataGet);
          }
        }
      }
    } catch (error) {
      setIsOpen(true);
      setDialogType("1");
      setDialogTitle("نا موفق");
      setDialogDes("دریافت اطلاعات با مشکل مواجه شد");
    }
  };

  return (
    <>
      <div className="w-full h-full">
        <CardStat
          type={"10"}
          title={"گزارشات و آمار کلی از بخش برنامه ریزی و تولید"}
          des={
            "گزارش گیری از تمامی آمار ها در بخش محصولات،انبار ها ، دسته بندی ها و گزارشات تولید"
          }
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/prodution")}
                  text={"بازگشت به بخش تولید"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <>
              <div className="flex classCharts w-full justify-center items-center">
                <PieChart
                  series={[
                    {
                      data: [
                        {
                          id: 0,
                          value: parseInt(countProduct),
                          label: "محصولات",
                        },
                        {
                          id: 1,
                          value: parseInt(countCat),
                          label: "دسته بندی ها",
                        },
                        {
                          id: 2,
                          value: parseInt(countSource),
                          label: "انبار ها",
                        },
                        {
                          id: 3,
                          value: parseInt(tPieData),
                          label: "پیش بینی ها",
                        },
                        {
                          id: 4,
                          value: parseInt(fPieData),
                          label: "BOM های تولید",
                        },
                      ],
                    },
                  ]}
                  className="chart-pie"
                  width={600}
                  height={300}
                />
                <LineChart
                  width={800}
                  height={500}
                  series={[
                    { data: pData, label: "محصولات", yAxisKey: "leftAxisId" },
                    {
                      data: uData,
                      label: "دسته بندی ها",
                      yAxisKey: "leftAxisId",
                    },
                    {
                      data: sData,
                      label: "انبار ها",
                      yAxisKey: "leftAxisId",
                    },
                    {
                      data: tData,
                      label: "پیش بینی تولید",
                      yAxisKey: "leftAxisId",
                    },
                    {
                      data: fData,
                      label: "BOM های تولید",
                      yAxisKey: "leftAxisId",
                    },
                  ]}
                  xAxis={[{ scaleType: "point", data: xLabels }]}
                  yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
                  rightAxis="rightAxisId"
                />
              </div>
              <div className="flex justify-start mt-6 ">
                <span className="font-bold text-xl">گزارش گیری پیشرفته</span>
              </div>

              <div className="w-full grid mt-6 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3">
                <SelectCombo
                  onChange={changeHandlerMonth}
                  options={[
                    {
                      value: "1",
                      label: "فروردین",
                    },
                    {
                      value: "2",
                      label: "اردیبهشت",
                    },
                    {
                      value: "3",
                      label: "خرداد",
                    },
                    {
                      value: "4",
                      label: "تیر",
                    },
                    {
                      value: "5",
                      label: "مرداد",
                    },
                    {
                      value: "6",
                      label: "شهریور",
                    },
                    {
                      value: "7",
                      label: "مهر",
                    },
                    {
                      value: "8",
                      label: "آبان",
                    },
                    {
                      value: "9",
                      label: "آذر",
                    },
                    {
                      value: "10",
                      label: "دی",
                    },

                    {
                      value: "11",
                      label: "بهمن",
                    },
                    {
                      value: "12",
                      label: "اسفند",
                    },
                  ]}
                  placeholder={"ماه را انتخاب کنید"}
                />
                <SelectCombo
                  onChange={changeHandlerYear}
                  options={dataYear.map((data) => ({
                    value: data.fyValue,
                    label: data.fyName,
                  }))}
                  placeholder={"سال مالی را انتخاب کنید"}
                />
                <SelectCombo
                  onChange={changeHandlerType}
                  options={[
                    {
                      value: "1",
                      label: "دسته بندی ها",
                    },
                    {
                      value: "2",
                      label: "محصولات",
                    },
                    {
                      value: "3",
                      label: "انبار ها",
                    },
                  ]}
                  placeholder={"نوع گزارش را انتخاب کنید"}
                />
                <ButtonAfra
                  onClick={eventHandler}
                  text={"اعمال فیلتر"}
                  type={"green"}
                />
              </div>

              <div className="w-full mt-6">
                {showTable == "3" ? (
                  <TableAfra
                    type={"green"}
                    data={dataTable1.map((product) => ({
                      key: product._id,
                      name: !product.sourceName
                        ? "تنظیم نشده"
                        : product.sourceName,
                      type: !product.type ? "تنظیم نشده" : product.type,
                      vahed: !product.vahed ? "تنظیم نشده" : product.vahed,
                      dama: !product.dama ? "تنظیم نشده" : product.dama,
                      des: !product.sourceDes
                        ? "تنظیم نشده"
                        : product.sourceDes,
                      exp: !product.expireDate
                        ? "تنظیم نشده"
                        : product.expireDate,
                      create: product.createDate,
                    }))}
                    columns={[
                      {
                        title: "نام",
                        dataIndex: "name",
                        key: "name",
                        sorter: true,
                      },
                      {
                        title: "توضیحات",
                        dataIndex: "des",
                        key: "des",
                        sorter: true,
                      },
                      {
                        title: "نوع",
                        dataIndex: "type",
                        key: "type",
                        sorter: true,
                      },
                      {
                        title: "واحد",
                        dataIndex: "vahed",
                        key: "vahed",
                        sorter: true,
                      },
                      {
                        title: "دما",
                        dataIndex: "dama",
                        key: "dama",
                        sorter: true,
                      },

                      {
                        title: "تاریخ ایجاد",
                        dataIndex: "exp",
                        key: "exp",
                        sorter: true,
                      },
                    ]}
                  />
                ) : (
                  ""
                )}
                {showTable == "2" ? (
                  <TableAfra
                    type={"green"}
                    data={dataTable2.map((product) => ({
                      key: product._id,
                      name: product.productName,
                      des: product.des,
                      cat: product.productCatName,
                      formol: product.formulaName,
                      erp: product.erpCount,
                      machine: product.machineCount,
                      vahed: product.vahed,
                      create: product.createDate,
                    }))}
                    columns={[
                      {
                        title: "نام محصول",
                        dataIndex: "name",
                        key: "name",
                        sorter: true,
                      },
                      {
                        title: "توضیحات",
                        dataIndex: "des",
                        key: "des",
                        sorter: true,
                      },
                      {
                        title: "دسته بندی",
                        dataIndex: "cat",
                        key: "cat",
                        sorter: true,
                      },
                      {
                        title: "فرمولاسیون",
                        dataIndex: "formol",
                        key: "formol",
                        sorter: true,
                      },

                      {
                        title: "تعداد پرسنل",
                        dataIndex: "erp",
                        key: "erp",
                        sorter: true,
                      },
                      {
                        title: "تعداد ماشین آلات",
                        dataIndex: "machine",
                        key: "machine",
                        sorter: true,
                      },
                      {
                        title: "واحد اندازه گیری",
                        dataIndex: "vahed",
                        key: "vahed",
                        sorter: true,
                      },
                      {
                        title: "تاریخ ایجاد",
                        dataIndex: "create",
                        key: "create",
                        sorter: true,
                      },
                    ]}
                  />
                ) : (
                  ""
                )}

                {showTable == "1" ? (
                  <TableAfra
                    type={"green"}
                    data={dataTable3.map((product) => ({
                      key: product._id,
                      name: product.title,
                      des: product.des,

                      create: product.createDate,
                    }))}
                    columns={[
                      {
                        title: "نام دسته بندی",
                        dataIndex: "name",
                        key: "name",
                        sorter: true,
                      },
                      {
                        title: "توضیحات",
                        dataIndex: "des",
                        key: "des",
                        sorter: true,
                      },

                      {
                        title: "تاریخ ایجاد",
                        dataIndex: "create",
                        key: "create",
                        sorter: true,
                      },
                    ]}
                  />
                ) : (
                  ""
                )}
                {showTable == "4" ? (
                  <TableAfra
                    type={"green"}
                    data={data.map((product) => ({
                      key: product._id,
                      name: product.productName,
                      des: product.des,
                      cat: product.productCatName,
                      formol: product.formulaName,
                      erp: product.erpCount,
                      machine: product.machineCount,
                      vahed: product.vahed,
                      create: product.createDate,
                    }))}
                    columns={[
                      {
                        title: "نام محصول",
                        dataIndex: "name",
                        key: "name",
                        sorter: true,
                      },
                      {
                        title: "توضیحات",
                        dataIndex: "des",
                        key: "des",
                        sorter: true,
                      },
                      {
                        title: "دسته بندی",
                        dataIndex: "cat",
                        key: "cat",
                        sorter: true,
                      },
                      {
                        title: "فرمولاسیون",
                        dataIndex: "formol",
                        key: "formol",
                        sorter: true,
                      },

                      {
                        title: "تعداد پرسنل",
                        dataIndex: "erp",
                        key: "erp",
                        sorter: true,
                      },
                      {
                        title: "تعداد ماشین آلات",
                        dataIndex: "machine",
                        key: "machine",
                        sorter: true,
                      },
                      {
                        title: "واحد اندازه گیری",
                        dataIndex: "vahed",
                        key: "vahed",
                        sorter: true,
                      },
                      {
                        title: "تاریخ ایجاد",
                        dataIndex: "create",
                        key: "create",
                        sorter: true,
                      },
                    ]}
                  />
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

export default reportPage;
