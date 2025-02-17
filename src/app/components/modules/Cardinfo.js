"use client";
import React, { useEffect, useState } from "react";  
import Modal from "./Mdl";
import { Calendar, CheckSquare, List, Tag, Trash, Type } from "react-feather";  

import Editable from "./Editabl";  

function CardInfo(props) {  
  const colors = [  
    "#a8193d",  
    "#4fcc25",  
    "#1ebffa",  
    "#8da377",  
    "#9975bd",  
    "#cf61a1",  
    "#240959",  
  ];  

  const [selectedColor, setSelectedColor] = useState();  
  const [values, setValues] = useState({  
    ...props.card,  
  });  

  const updateTitle = (value) => {  
    setValues({ ...values, title: value });  
  };  

  const updateDesc = (value) => {  
    setValues({ ...values, desc: value });  
  };  

  const addLabel = (label) => {  
    const index = values.labels.findIndex((item) => item.text === label.text);  
    if (index > -1) return;  

    setSelectedColor("");  
    setValues({  
      ...values,  
      labels: [...values.labels, label],  
    });  
  };  

  const removeLabel = (label) => {  
    const tempLabels = values.labels.filter((item) => item.text !== label.text);  
    setValues({  
      ...values,  
      labels: tempLabels,  
    });  
  };  

  const addTask = (value) => {  
    const task = {  
      id: Date.now() + Math.random() * 2,  
      completed: false,  
      text: value,  
    };  
    setValues({  
      ...values,  
      tasks: [...values.tasks, task],  
    });  
  };  

  const removeTask = (id) => {  
    const tempTasks = values.tasks.filter((item) => item.id !== id);  
    setValues({  
      ...values,  
      tasks: tempTasks,  
    });  
  };  

  const updateTask = (id, value) => {  
    const tasks = [...values.tasks];  
    const index = tasks.findIndex((item) => item.id === id);  
    if (index < 0) return;  

    tasks[index].completed = value;  

    setValues({  
      ...values,  
      tasks,  
    });  
  };  

  const calculatePercent = () => {  
    if (!values.tasks?.length) return 0;  
    const completed = values.tasks?.filter((item) => item.completed)?.length;  
    return (completed / values.tasks?.length) * 100;  
  };  

  const updateDate = (date) => {  
    if (!date) return;  

    setValues({  
      ...values,  
      date,  
    });  
  };  

  useEffect(() => {  
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);  
  }, [values]);  

  return (  
    <Modal onClose={props.onClose}>  
      <div className="p-8 flex flex-col gap-8 min-w-[550px] max-w-[650px]">  
        <div className="flex flex-col gap-4 w-full">  
          <div className="flex gap-2 items-center">  
            <Type />  
            <p className="font-bold text-xl">Title</p>  
          </div>  
          <Editable  
            defaultValue={values.title}  
            text={values.title}  
            placeholder="Enter Title"  
            onSubmit={updateTitle}  
          />  
        </div>  

        <div className="flex flex-col gap-4 w-full">  
          <div className="flex gap-2 items-center">  
            <List />  
            <p className="font-bold text-xl">Description</p>  
          </div>  
          <Editable  
            defaultValue={values.desc}  
            text={values.desc || "Add a Description"}  
            placeholder="Enter description"  
            onSubmit={updateDesc}  
          />  
        </div>  

        <div className="flex flex-col gap-4 w-full">  
          <div className="flex gap-2 items-center">  
            <Calendar />  
            <p className="font-bold text-xl">Date</p>  
          </div>  
          <input  
            type="date"  
            defaultValue={values.date}  
            min={new Date().toISOString().substr(0, 10)}  
            className="border-2 border-gray-300 rounded p-2"  
            onChange={(event) => updateDate(event.target.value)}  
          />  
        </div>  

        <div className="flex flex-col gap-4 w-full">  
          <div className="flex gap-2 items-center">  
            <Tag />  
            <p className="font-bold text-xl">Labels</p>  
          </div>  
          <div className="flex flex-wrap gap-2">  
            {values.labels?.map((label, index) => (  
              <label key={index} className="bg-gray-500 text-white py-1 px-3 rounded-full flex items-center gap-1">  
                {label.text}  
                <span onClick={() => removeLabel(label)} className="cursor-pointer">  
                  <Trash size={14} />  
                </span>  
              </label>  
            ))}  
          </div>  
          <Editable  
            text="Add Label"  
            placeholder="Enter label text"  
            onSubmit={(value) => addLabel({ color: selectedColor, text: value })}  
          />  
        </div>  

        <div className="flex flex-col gap-4 w-full">  
          <div className="flex gap-2 items-center">  
            <CheckSquare />  
            <p className="font-bold text-xl">Tasks</p>  
          </div>  
          <div className="relative w-full h-2 bg-gray-200 rounded">  
            <div  
              className="h-full bg-skyblue rounded transition-all"  
              style={{  
                width: `${calculatePercent()}%`,  
                backgroundColor: calculatePercent() === 100 ? "limegreen" : "",  
              }}  
            />  
          </div>  
          <div className="flex flex-col gap-2">  
            {values.tasks?.map((item) => (  
              <div key={item.id} className="flex items-center gap-2">  
                <input  
                  type="checkbox"  
                  checked={item.completed}  
                  onChange={(event) => updateTask(item.id, event.target.checked)}  
                  className="cursor-pointer"  
                />  
                <p className={`flex-1 ${item.completed ? "line-through" : ""}`}>{item.text}</p>  
                <Trash onClick={() => removeTask(item.id)} className="cursor-pointer" />  
              </div>  
            ))}  
          </div>  
          <Editable  
            text="Add a Task"  
            placeholder="Enter task"  
            onSubmit={addTask}  
          />  
        </div>  
      </div>  
    </Modal>  
  );  
}  

export default CardInfo;  