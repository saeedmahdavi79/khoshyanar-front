"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import TableAfra from "@/app/components/modules/TableAfra";
import baseUrl from "@/utils/baseUrl";
import { LineChart, PieChart } from "@mui/x-charts";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const reportPage = () => {
  const [countCat, setCountCat] = useState();
  const [countProduct, setCountProduct] = useState();
  const [uData, setUdata] = useState([]);
  const [pData, setPdata] = useState([]);
  const [tData, setTdata] = useState([]);
  const [tPieData, setTPiedata] = useState();

  const [fData, setFdata] = useState([]);
  const [fPieData, setFPiedata] = useState();

  const [data, setData] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
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

    fetch(baseUrl("/product/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));

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
  }, []);
  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"گزارشات و آمار محصولات و دسته بندی ها و پیش بینی ها"}
          des={
            "گزارش گیری از تمامی آمار ها در بخش محصولات و دسته بندی ها و پیش بینی ها"
          }
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/")}
                  text={"بازگشت به داشبورد"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          data={
            <>
              <div className=" w-full justify-center   ">
                <div className="flex gap-5 justify-center items-center sm:w-[300px] md:w-full flex-col md:flex-row classCharts w-full">
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
                            value: parseInt(tPieData),
                            label: "پیش بینی ها",
                          },
                          {
                            id: 3,
                            value: parseInt(fPieData),
                            label: "BOM های تولید",
                          },
                        ],
                      },
                    ]}
                    className="chart-pie sm:hidden md:flex"
                    width={500}
                    height={250}
                  />
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
                            value: parseInt(tPieData),
                            label: "پیش بینی ها",
                          },
                          {
                            id: 3,
                            value: parseInt(fPieData),
                            label: "BOM های تولید",
                          },
                        ],
                      },
                    ]}
                    className="chart-pie sm:flex gap-5 md:hidden"
                    width={400}
                    height={200}
                  />
                  <LineChart
                    width={800}
                    height={300}
                    className="sm:hidden md:flex "
                    series={[
                      { data: pData, label: "محصولات", yAxisKey: "leftAxisId" },
                      {
                        data: uData,
                        label: "دسته بندی ها",
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
                  <LineChart
                    width={300}
                    height={200}
                    className="sm:flex md:hidden "
                    series={[
                      { data: pData, label: "محصولات", yAxisKey: "leftAxisId" },
                      {
                        data: uData,
                        label: "دسته بندی ها",
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
              </div>
              <div className="w-full mt-6">
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
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default reportPage;
