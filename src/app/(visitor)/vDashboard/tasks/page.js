"use client";
import CardStat from "@/app/components/modules/Card";
import { Card, Tag } from "antd";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import ButtonAfra from "@/app/components/modules/Buttons";
import { useRouter } from "next/navigation";
const tasksPage = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/task/get-visitor"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
            مدیریت تسک ها و وظایف
          </span>
          <span className="w-[2px] h-[20px] bg-[var(--color-slate-buttons)]"></span>
          <span className="font-normal text-[12px] text-gray-400  ">
            مدیریت حرفه ای و کارآمد وظایف و تسک های شما
          </span>
        </div>
        <div className="flex gap-2">
          <div className="w-[200px]">
            <ButtonAfra
              onClick={() => router.push("/vDashboard/tasks/addTask")}
              text={"افزودن"}
              type={"orange"}
            />
          </div>
          <div className="w-[200px]">
            <ButtonAfra
              onClick={() => router.push("/vDashboard/")}
              text={"بازکشت به داشبورد"}
              type={"white-orange"}
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-6 flex">
        <CardStat
          type={"7"}
          title={"مدیریت وظایف و تسک ها"}
          des={"مدیریت تمامی وظایف ، ماموریت ها و تسک ها در سامانه"}
          data={
            <>
              <div className="w-full flex gap-3 justify-between">
                <Tag
                  color="blue"
                  className="w-1/3 h-[124vh] section-layout-blue overflow-auto py-2 px-3 flex flex-col gap-3"
                >
                  <p className="font-bold text-lg">تسک های در جریان</p>
                  <p>تمامی تسک های در جریان شما در سیستم</p>
                  <div className="flex flex-col gap-3">
                    {data.map((tasks) =>
                      tasks.taskId == "1" ? (
                        <Card title={tasks.taskTitle} className="font-bakh">
                          <div className="w-full">
                            <p className="">{tasks.taskDes}</p>
                          </div>
                          <div className="w-full flex mt-5 justify-between">
                            <p className="text-[12px]">
                              تاریخ معین شده : {tasks.targetDate}
                            </p>
                            <Tag color="blue" className="mr-auto">
                              مشاهده تسک
                            </Tag>
                          </div>
                        </Card>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </Tag>
                <Tag
                  color="green"
                  className="w-1/3 h-[124vh] overflow-auto section-layout py-2 px-3 flex flex-col gap-3"
                >
                  <p className="font-bold text-lg">تسک های انجام شده</p>
                  <p>تمامی تسک های انجام شده شما در سیستم</p>
                  <div className="flex flex-col gap-3">
                    {data.map((tasks) =>
                      tasks.taskId == "2" ? (
                        <Card title={tasks.taskTitle} className="font-bakh">
                          <div className="w-full">
                            <p className="">{tasks.taskDes}</p>
                          </div>
                          <div className="w-full flex mt-5 justify-between">
                            <p className="text-[12px]">
                              تاریخ معین شده : {tasks.targetDate}
                            </p>
                            <Tag color="blue" className="mr-auto">
                              مشاهده تسک
                            </Tag>
                          </div>
                        </Card>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </Tag>
                <Tag
                  color="red"
                  className="w-1/3 h-[124vh] overflow-auto section-layout-red py-2 px-3 flex flex-col gap-3"
                >
                  <p className="font-bold text-lg">تسک های لغو شده</p>
                  <p>تمامی تسک های لغو شده شما در سیستم</p>
                  <div className="flex flex-col gap-3">
                    {data.map((tasks) =>
                      tasks.taskId == "3" ? (
                        <Card title={tasks.taskTitle} className="font-bakh">
                          <div className="w-full">
                            <p className="">{tasks.taskDes}</p>
                          </div>
                          <div className="w-full flex mt-5 justify-between">
                            <p className="text-[12px]">
                              تاریخ معین شده : {tasks.targetDate}
                            </p>
                            <Tag color="blue" className="mr-auto">
                              مشاهده تسک
                            </Tag>
                          </div>
                        </Card>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </Tag>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default tasksPage;
