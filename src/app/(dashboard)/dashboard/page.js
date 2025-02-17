"use client";

import CardStat from "@/app/components/modules/Card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import { Tag } from "antd";
import ButtonAfra from "@/app/components/modules/Buttons";
import ConvertEnNumberToPersian from "@/utils/numberConv";
import ChartColumn from "@/app/components/modules/ChartNew";
import ChartPie from "@/app/components/modules/ChartPieNew";
import { Table } from "antd";
import { IranMap } from "react-iran-map";
import mapData from "@/utils/mapData";
import TableAfra from "@/app/components/modules/TableAfra";
const DashboardMain = () => {
  const [dataCount, setDataCount] = useState("");
  const [dataLeadCount, setDataLeadCount] = useState("");

  const [dataCountContact, setDataCountContact] = useState("");

  const [dataTask, setDataTask] = useState([]);

  const [getTime, setGetTime] = useState("");

  const [countDataPrd, setCountDataPrd] = useState("");
  const [countDataPer, setCountPer] = useState("");

  const router = useRouter();
  const getCookieAccess2 = getCookie("UiS");

  const [getCookieAccess, setGetAccess] = useState("");

  const [tData, setTdata] = useState([]);
  const [tPieData, setTPiedata] = useState();

  const [lData, setLdata] = useState([]);
  const [lPieData, setLeiedata] = useState();

  const [fData, setFdata] = useState([]);
  const [fPieData, setFPiedata] = useState();

  const [dataVisitor, setDataVisitor] = useState([]);

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

  const columns_personel = [
    {
      title: "نام و نام خانوادگی",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "تاریخ تولد",
      dataIndex: "birth",
      key: "birth",
    },

    {
      title: "تلفن",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "تاریخ ایجاد",
      dataIndex: "createDate",
      key: "createDate",
    },
  ];

  //personel
  const [dataPersonelApp, setDataPersonelApp] = useState([]);

  useEffect(() => {
    const token = getCookie("WuZiK");

    fetch(baseUrl("/auth/get-user-data"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then(async (data) => {
        if (!data.user) {
          location.replace("/auth/login");
        } else {
          setGetAccess(data.customer ? "10" : data.user.access);
        }
      });

    fetch(baseUrl("/office/get-personel"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data
          ? setDataPersonelApp([])
          : setDataPersonelApp(data.data.dataGet)
      );
  }, []);

  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    setGetTime(getCookie("SessT"));
    fetch(baseUrl("/visitor/get-visitor-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? "-" : setDataCount(data.data.toString());
      });

    fetch(baseUrl("/contact/get-contacts-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? "-" : setDataCountContact(data.data.toString());
      });

    fetch(baseUrl("/task/get-admin"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataTask([]) : setDataTask(data.data.dataGet)
      );

    fetch(baseUrl("/visitor/get-visitor-in-month"), {
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

    fetch(baseUrl("/contact/get-contacts-in-month"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setFdata([])
          : setFdata([
              {
                month: "فروردین",
                vis: data.data.farvardin,
              },
              {
                month: "اردیبهشت",
                vis: data.data.ordibehesht,
              },
              {
                month: "خرداد",
                vis: data.data.khordad,
              },
              {
                month: "تیر",
                vis: data.data.tir,
              },
              {
                month: "مرداد",
                vis: data.data.mordad,
              },
              {
                month: "شهریور",
                vis: data.data.shahrivar,
              },
              {
                month: "مهر",
                vis: data.data.mehr,
              },
              {
                month: "آبان",
                vis: data.data.aban,
              },
              {
                month: "آذر",
                vis: data.data.azar,
              },
              {
                month: "دی",
                vis: data.data.dey,
              },
              {
                month: "بهمن",
                vis: data.data.bahman,
              },
              {
                month: "اسفند",
                vis: data.data.esfand,
              },
            ]);
      });

    fetch(baseUrl("/leads/get-leads-month"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setLdata([])
          : setLdata([
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

    fetch(baseUrl("/leads/get-leads-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? "-" : setDataLeadCount(data.data.toString());
      });

    fetch(baseUrl("/visitor/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataVisitor([]) : setDataVisitor(data.data.dataGet)
      );

    fetch(baseUrl("/product/get-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setCountDataPrd("0")
          : setCountDataPrd(data.data.toString());
      });

    fetch(baseUrl("/product/get-per-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setCountPer("0") : setCountPer(data.data.toString());
      });
  }, []);

  const columns = [
    {
      title: "نام و نام خانوادگی",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "سمت",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "شماره تلفن",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "عملیات",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const selectProvinceHandler = (province) => {
    console.log(province);
  };

  return (
    <>
      <div className="w-full flex flex-col  h-full px-6 gap-4 py-1">
        {/* <div className="w-full flex justify-between items-center">
          <span className="text-black text-3xl py-6 font-bold">پیشخوان</span>
          <span className="w-[200px]">
            <a href="/dashboard/ticket">
              <ButtonAfra type={"green"} text={"پشتیبانی"} />
            </a>
          </span>
        </div> */}
        <div className="w-full grid grid-cols-4  gap-3">
          {getCookieAccess == "1" ? (
            <>
              <CardStat
                type={"8-main-data-2"}
                data={
                  <>
                    <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
                      <div className="w-full flex justify-between items-center">
                        <div className="flex w-2/3 flex-col gap-3 justify-center items-start">
                          <span className="font-bold text-base text-[#202224]">
                            تعداد مشتریان
                          </span>
                          <span className="text-[var(--color-green)] text-3xl font-black text-justify">
                            {ConvertEnNumberToPersian(dataCountContact)}
                          </span>
                        </div>
                        <div className="bg-[#E5E4FF] flex justify-center items-center w-[60px] rounded-3xl h-[60px]">
                          <svg
                            width="32"
                            height="24"
                            viewBox="0 0 32 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.587821"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.66667 5.33333C6.66667 8.27885 9.05449 10.6667 12 10.6667C14.9455 10.6667 17.3333 8.27885 17.3333 5.33333C17.3333 2.38781 14.9455 0 12 0C9.05449 0 6.66667 2.38781 6.66667 5.33333ZM20 10.6667C20 12.8758 21.7909 14.6667 24 14.6667C26.2091 14.6667 28 12.8758 28 10.6667C28 8.45753 26.2091 6.66667 24 6.66667C21.7909 6.66667 20 8.45753 20 10.6667Z"
                              fill="#8280FF"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.9778 13.3333C5.68255 13.3333 0.517678 16.5687 0.000868912 22.9323C-0.0272823 23.2789 0.635616 24 0.970003 24H22.9956C23.9972 24 24.0128 23.194 23.9972 22.9333C23.6065 16.3909 18.3616 13.3333 11.9778 13.3333ZM31.2746 24L26.1333 24C26.1333 20.9988 25.1417 18.2291 23.4683 16.0008C28.0103 16.0505 31.7189 18.3469 31.998 23.2C32.0092 23.3955 31.998 24 31.2746 24Z"
                              fill="#8280FF"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <span className="text-zinc-500 text-[14px]">
                          تعداد کلی تمامی مشتریان ثبت شده
                        </span>
                      </div>
                    </div>
                  </>
                }
              />
              <CardStat
                type={"8-main-data-2"}
                data={
                  <>
                    <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
                      <div className="w-full flex justify-between items-center">
                        <div className="flex w-2/3 flex-col gap-3 justify-center items-start">
                          <span className="font-bold text-base text-[#202224]">
                            تعداد پرسنل و کارکنان
                          </span>
                          <span className="text-[var(--color-green)] text-3xl font-black text-justify">
                            {ConvertEnNumberToPersian(countDataPer)}
                          </span>
                        </div>
                        <div className="bg-[#fceac1d4] flex justify-center items-center w-[60px] rounded-3xl h-[60px]">
                          <svg
                            width="30"
                            height="34"
                            viewBox="0 0 30 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 11.3165L12.9005 18.7646C13.0394 18.8448 13.1851 18.9027 13.3333 18.9395V33.3847L0.920065 26.0385C0.349784 25.701 0 25.0876 0 24.4249V11.3165ZM30 11.1185V24.4249C30 25.0876 29.6502 25.701 29.0799 26.0385L16.6667 33.3847V18.8129C16.6969 18.7978 16.7269 18.7817 16.7566 18.7646L30 11.1185Z"
                              fill="#FEC53D"
                            />
                            <path
                              opacity="0.499209"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0.405212 7.70142C0.562787 7.50244 0.761675 7.33426 0.993554 7.21076L14.1186 0.2201C14.6695 -0.0733665 15.3304 -0.0733665 15.8814 0.2201L29.0064 7.21076C29.1852 7.30596 29.3443 7.42771 29.48 7.56966L15.0899 15.8778C14.9953 15.9325 14.908 15.995 14.8285 16.064C14.749 15.995 14.6618 15.9325 14.5671 15.8778L0.405212 7.70142Z"
                              fill="#FEC53D"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <span className="text-zinc-500 text-[14px]">
                          تعداد کلی تمامی پرسنل و کارکنان ثبت شده
                        </span>
                      </div>
                    </div>
                  </>
                }
              />
              <CardStat
                type={"8-main-data-2"}
                data={
                  <>
                    <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
                      <div className="w-full flex justify-between items-center">
                        <div className="flex w-2/3 flex-col gap-3 justify-center items-start">
                          <span className="font-bold text-base text-[#202224]">
                            تعداد کالا ها
                          </span>
                          <span className="text-[var(--color-green)] text-3xl font-black text-justify">
                            {ConvertEnNumberToPersian(countDataPrd)}
                          </span>
                        </div>
                        <div className="bg-[#D9F7E8] flex justify-center items-center w-[60px] rounded-3xl h-[60px]">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.11111 24.8889H26.4444C27.3036 24.8889 28 25.5853 28 26.4444C28 27.3036 27.3036 28 26.4444 28H1.55556C0.696446 28 0 27.3036 0 26.4444V1.55556C0 0.696446 0.696446 0 1.55556 0C2.41467 0 3.11111 0.696446 3.11111 1.55556V24.8889Z"
                              fill="#4AD991"
                            />
                            <path
                              opacity="0.5"
                              d="M8.91263 18.175C8.32504 18.8018 7.34063 18.8335 6.71388 18.2459C6.08713 17.6584 6.05537 16.674 6.64295 16.0472L12.4763 9.82498C13.0445 9.21884 13.9888 9.16627 14.6209 9.7056L19.2249 13.6344L25.2235 6.03611C25.7559 5.36181 26.734 5.24673 27.4083 5.77907C28.0826 6.31141 28.1977 7.28959 27.6654 7.96389L20.6654 16.8306C20.1186 17.5231 19.1059 17.6227 18.4347 17.05L13.7306 13.0358L8.91263 18.175Z"
                              fill="#4AD991"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <span className="text-zinc-500 text-[14px]">
                          تعداد کلی کالا های ثبت شده
                        </span>
                      </div>
                    </div>
                  </>
                }
              />
            </>
          ) : (
            ""
          )}

          <CardStat
            type={"8-main-data-2"}
            data={
              <>
                <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex w-2/3 flex-col gap-3 justify-center items-start">
                      <span className="font-bold text-base text-[#202224]">
                        آخرین ورود
                      </span>
                      <span className="text-[var(--color-green)] text-3xl font-black text-justify">
                        {!getTime ? "" : getTime}
                      </span>
                    </div>
                    <div className="bg-[#FFDED1] flex justify-center items-center w-[60px] rounded-3xl h-[60px]">
                      <svg
                        width="28"
                        height="31"
                        viewBox="0 0 28 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.78"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.6312 9.80884C12.6512 9.54834 12.8684 9.34719 13.1297 9.34719H13.5475C13.8044 9.34719 14.0195 9.54184 14.045 9.79744L14.6667 16.0139L19.0814 18.5366C19.2372 18.6256 19.3333 18.7913 19.3333 18.9707V19.3592C19.3333 19.6889 19.0199 19.9284 18.7018 19.8416L12.3987 18.1226C12.1673 18.0595 12.0133 17.841 12.0317 17.6019L12.6312 9.80884Z"
                          fill="#FF9066"
                        />
                        <path
                          opacity="0.901274"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.72176 0.984394C6.45765 0.669646 5.94771 0.790115 5.85238 1.18978L4.21891 8.03792C4.14123 8.36357 4.39931 8.67207 4.73356 8.65312L11.7783 8.25391C12.1892 8.23062 12.3976 7.7486 12.133 7.43332L10.3316 5.28647C11.4965 4.88843 12.7317 4.68052 14 4.68052C20.2592 4.68052 25.3333 9.75463 25.3333 16.0139C25.3333 22.2731 20.2592 27.3472 14 27.3472C7.74077 27.3472 2.66667 22.2731 2.66667 16.0139C2.66667 14.9631 2.80896 13.9339 3.08641 12.9448L0.518845 12.2246C0.180793 13.4298 0 14.7007 0 16.0139C0 23.7458 6.26801 30.0139 14 30.0139C21.732 30.0139 28 23.7458 28 16.0139C28 8.28187 21.732 2.01386 14 2.01386C12.0551 2.01386 10.2029 2.41043 8.51973 3.12713L6.72176 0.984394Z"
                          fill="#FF9066"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <span className="text-zinc-500 text-[14px]">
                      زمان آخرین ورود ثبت شده شما به سیستم
                    </span>
                  </div>
                </div>
              </>
            }
          />
        </div>
        {getCookieAccess == "1" ? (
          <>
            <div className="w-full flex justify-center items-center">
              <div className="w-full grid grid-cols-2 gap-3">
                <CardStat
                  title={"گزارش ها و آمار مشتریان"}
                  des={
                    "در این بخش گزارشات و آمار های مشتریان بر اساس ماه را ببینید"
                  }
                  type={"8-2"}
                  data={
                    <>
                      <ChartColumn data={fData} />
                      <span className="w-full flex gap-3 justify-center items-center mt-10">
                        <span className="w-4 h-4 rounded-full bg-[#ff6e40]"></span>
                        <span>مشتریان بر اساس ماه</span>
                      </span>
                    </>
                  }
                />
                <CardStat
                  title={"گزارش ها و آمار فروش  بر اساس استان"}
                  des={
                    "در این بخش گزارشات و آمار های فروش بر اساس استان را ببینید"
                  }
                  type={"8"}
                  data={
                    <>
                      <div>
                        <IranMap
                          data={mapData}
                          colorRange="30, 70, 181"
                          width={600}
                          textColor="#000"
                          defaultSelectedProvince="tehran"
                          deactiveProvinceColor="#eee"
                          selectedProvinceColor="#3bcc6d"
                          tooltipTitle="تعداد:"
                          selectProvinceHandler={selectProvinceHandler}
                        />
                      </div>
                    </>
                  }
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-full grid grid-cols-1 gap-3">
                <CardStat
                  title={"لیست و اطلاعات کارکنان"}
                  des={"در این بخش لیست و اطلاعات کارکنان را ببینید"}
                  type={"8-2"}
                  data={
                    <>
                      {/* <ChartBar /> */}
                      <div className="h-full">
                        <TableAfra
                          type={"green"}
                          data={dataPersonelApp.map((data) => ({
                            name: !data.name
                              ? "-"
                              : data.name + " " + data.lastName,

                            sex: !data.sex ? "-" : data.sex,
                            birth: !data.birth ? "-" : data.birth,
                            contract: !data.type ? "-" : data.type,
                            phone: !data.phone ? "-" : data.phone,
                            contract: !data.type ? "-" : data.type,
                            userName: !data.userName ? "-" : data.userName,
                            role: !data.role ? "-" : data.role,

                            createDate: !data.createDate
                              ? "-"
                              : data.createDate,
                          }))}
                          columns={columns_personel}
                        />
                      </div>
                    </>
                  }
                />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DashboardMain;
