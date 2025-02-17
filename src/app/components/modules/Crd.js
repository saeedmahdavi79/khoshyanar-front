"use client";
import React, { useState } from "react";  

import Dropdown from "./Drop";  
import CardInfo from "./Cardinfo";  

import { CheckSquare, Clock, MoreHorizontal } from "react-feather";  

 

function Card(props) {  
  const [showDropdown, setShowDropdown] = useState(false);  
  const [showModal, setShowModal] = useState(false);  

  const { id, title, date, tasks, labels } = props.card;  

  const formatDate = (value) => {  
    if (!value) return "";  
    const date = new Date(value);  

    const months = [  
      "Jan",  
      "Feb",  
      "Mar",  
      "Apr",  
      "May",  
      "Jun",  
      "Jul",  
      "Aug",  
      "Sep",  
      "Oct",  
      "Nov",  
      "Dec",  
    ];  

    const day = date.getDate();  
    const month = months[date.getMonth()];  
    return `${day} ${month}`;  
  };  

  return (  
    <>  
      {showModal && (  
        <CardInfo  
          onClose={() => setShowModal(false)}  
          card={props.card}  
          boardId={props.boardId}  
          updateCard={props.updateCard}  
        />  
      )}  
      <div  
        className="p-2 flex flex-col gap-2 bg-white rounded-lg shadow cursor-pointer"  
        draggable  
        onDragEnd={() => props.dragEnded(props.boardId, id)}  
        onDragEnter={() => props.dragEntered(props.boardId, id)}  
        onClick={() => setShowModal(true)}  
      >  
        <div className="flex items-start">  
          <div className="flex flex-wrap gap-1 flex-1">  
            {labels?.map((item, index) => (  
              <label  
                key={index}  
                className="rounded-full px-3 py-1 bg-gray-500 text-white"  
                style={{ backgroundColor: item.color }}  
              >  
                {item.text}  
              </label>  
            ))}  
          </div>  
          <div  
            className="w-8 h-5 ml-4 flex items-center justify-center transform transition-opacity duration-200 opacity-0 group-hover:opacity-100"  
            onClick={(event) => {  
              event.stopPropagation();  
              setShowDropdown(true);  
            }}  
          >  
            <MoreHorizontal />  
            {showDropdown && (  
              <Dropdown  
                className="board_dropdown"  
                onClose={() => setShowDropdown(false)}  
              >  
                <p onClick={() => props.removeCard(props.boardId, id)}>  
                  Delete Card  
                </p>  
              </Dropdown>  
            )}  
          </div>  
        </div>  
        <div className="font-bold text-base leading-8">{title}</div>  
        <div className="flex justify-between items-center">  
          {date && (  
            <p className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-black text-sm">  
              <Clock className="h-3.5 w-3.5 mr-1" />  
              {formatDate(date)}  
            </p>  
          )}  
          {tasks && tasks.length > 0 && (  
            <p className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-black text-sm">  
              <CheckSquare className="h-3.5 w-3.5 mr-1" />  
              {tasks.filter((item) => item.completed).length}/{tasks.length}  
            </p>  
          )}  
        </div>  
      </div>  
    </>  
  );  
}  

export default Card;