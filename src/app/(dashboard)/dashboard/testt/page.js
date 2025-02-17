"use client";
import CardStat from "@/app/components/modules/Card";
import { useRouter } from "next/navigation";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import ButtonAfra from "@/app/components/modules/Buttons";
import {Tabs} from "antd";
import SelectCombo from "@/app/components/modules/SelectCombo";
import TableAfra from "@/app/components/modules/TableAfra";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React from "react";
import Modal from "@/app/components/modules/Mdl";
const Moamelat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([[], [], []]);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (currentIndex !== null && inputValue.trim() !== "") {
      setData((prevData) => {
        const newData = [...prevData];
        newData[currentIndex].push(inputValue);
        return newData;
      });
      setInputValue("");
      setIsOpen(false);
      setCurrentIndex(null);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // جابجایی بین ستون‌ها
    if (source.droppableId !== destination.droppableId) {
      const sourceData = [...data[source.droppableId]];
      const destinationData = [...data[destination.droppableId]];
      const [removed] = sourceData.splice(source.index, 1);
      destinationData.splice(destination.index, 0, removed);

      const newData = [...data];
      newData[source.droppableId] = sourceData;
      newData[destination.droppableId] = destinationData;
      setData(newData);
    } else {
      // جابجایی درون همان ستون
      const columnData = [...data[source.droppableId]];
      const [removed] = columnData.splice(source.index, 1);
      columnData.splice(destination.index, 0, removed);

      const newData = [...data];
      newData[source.droppableId] = columnData;
      setData(newData);
    }
  };
  const router = useRouter();

  const onChange = (key) => {
    console.log(key);
  };
  const headers = ["مذاکرات", "پیگیری", "ثبت نهایی"]; // آرایه هدرها

  const items = [
    {
      key: "1",
      label: "کاریز",
      children: (
        <>
          <div className="w-screen flex flex-wrap gap-8  ">
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="w-screen flex flex-wrap gap-8 p-5">
                {[0, 1, 2].map((index) => (
                  <Droppable droppableId={index.toString()} key={index}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="w-[320px] h-fit flex flex-col gap-4"
                      >
                        <div className="w-full rounded-md h-[50px]  bg-white flex justify-center items-center ">
                          {" "}
                          {headers[index]}{" "}
                        </div>

                        {data[index].map((item, idx) => (
                          <Draggable
                            key={item + idx}
                            draggableId={item + idx}
                            index={idx}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="w-full rounded-md h-fit text-white bg-transparent  border border-dashed flex justify-center items-center p-2 mb-2 cursor-pointer"
                              >
                                {item}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        <div className="w-full rounded-md min-h-[100px] bg-transparent border border-dashed flex justify-center items-center flex-col">
                          <button
                            onClick={() => {
                              setIsOpen(true);
                              setCurrentIndex(index);
                            }}
                            className="bg-gray-300   text-black  rounded-full w-10 h-10 flex justify-center items-center"
                          >
                            +
                          </button>
                        </div>
                        {provided.placeholder}
                        <Modal
                          isOpen={isOpen}
                          onClose={() => {
                            setIsOpen(false);
                            setCurrentIndex(null);
                          }}
                          onSubmit={handleSubmit}
                        >
                          <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="border rounded-md p-2 w-full"
                            placeholder="متن خود را وارد کنید"
                          />
                        </Modal>
                      </div>
                    )}
                  </Droppable>
                ))}
              </div>
            </DragDropContext>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: "لیست",
      children: (
        <>
          <div className="w-full flex  justify-end items-center gap-3 flex-row">
            <span className="w-[415px] h-[45px] flex flex-row gap-2   ">
              <ButtonAfra
                type={"sabz"}
                onClick={() => router.push("/dashboard/testt/create")}
                className="h-[50px] "
                text={
                  <span className="flex  justify-center gap-3 items-center">
                    <HiOutlinePlusCircle
                      className="font-bold"
                      size={"1.3rem"}
                    />
                    <span>افزودن معامله</span>
                  </span>
                }
              />
              <SelectCombo
                type={"req"}
                placeholder={"وضعیت معامله "}
                options={[
                  {
                    value: "all",
                    label: "همه",
                  },
                  {
                    value: "answered",
                    label: "معامله جاری",
                  },
                  {
                    value: "new",
                    label: "معامله موفق",
                  },
                  {
                    value: "closed",
                    label: "معامله ناموفق",
                  },
                ]}
              />
            </span>
          </div>
          <div className="w-full mt-3">
            <TableAfra
              type={"green"}
              columns={[
                {
                  title: "نام خانوادگی",
                  dataIndex: "code",
                  key: "code",
                  sorter: true,
                },
                {
                  title: "نام شرکت",
                  dataIndex: "subject",
                  key: "subject",
                  sorter: true,
                },
                {
                  title: "عنوان معامله",
                  dataIndex: "date",
                  key: "date",
                  sorter: true,
                },
                {
                  title: "مبلغ حدودی معامله",
                  dataIndex: "creator",
                  key: "creator",
                  sorter: true,
                },
                {
                  title: "کاریز",
                  dataIndex: "recive",
                  key: "recive",
                  sorter: true,
                },
                {
                  title: "تاریخ احتمالی بسته شدن معامله",
                  dataIndex: "atf",
                  key: "atf",
                  sorter: true,
                },
                {
                  title: "شیوه آشنایی",
                  dataIndex: "status",
                  key: "status",
                  sorter: true,
                },
                {
                  title: "مسئول معامله",
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
        </>
      ),
    },
  ];
  return (
    <>
      <>
        <div className="w-full max-h-[86vh] h-full">
          <CardStat
            type={"10"}
            title={"معاملات"}
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
                <Tabs onChange={onChange} type="card" items={items} />
              </>
            }
          />
        </div>
      </>
    </>
  );
};

export default Moamelat;
