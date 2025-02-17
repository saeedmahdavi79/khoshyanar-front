"use client";
import React, { useState } from "react";  
import Card from "../../components/modules/Crd"  
import Dropdown from "./Drop"; 
import Editable from "./Editabl";  
import { MoreHorizontal } from "react-feather";    

function Board(props) {  
  const [showDropdown, setShowDropdown] = useState(false);  

  return (  
    <div className="min-w-[290px] w-[290px] max-h-full flex flex-col gap-5">  
      <div className="flex justify-between items-center">  
        <p className="font-bold text-base flex gap-1 items-center">  
          {props.board?.title}  
          <span className="text-gray-500">{props.board?.cards?.length || 0}</span>  
        </p>  
        <div  
          className="cursor-pointer relative"  
          onClick={() => setShowDropdown(true)}  
        >  
          <MoreHorizontal />  
          {showDropdown && (  
            <Dropdown  
              className="shadow-md p-5 w-[150px] cursor-default"  
              onClose={() => setShowDropdown(false)}  
            >  
              <p className="border-b border-gray-200 cursor-pointer" onClick={() => props.removeBoard()}>Delete Board</p>  
            </Dropdown>  
          )}  
        </div>  
      </div>  
      <div className="bg-gray-100 p-2 rounded-lg flex flex-col gap-2 overflow-y-auto custom-scroll">  
        {props.board?.cards?.map((item) => (  
          <Card  
            key={item.id}  
            card={item}  
            boardId={props.board.id}  
            removeCard={props.removeCard}  
            dragEntered={props.dragEntered}  
            dragEnded={props.dragEnded}  
            updateCard={props.updateCard}  
          />  
        ))}  
        <Editable  
          text="+ Add Card"  
          placeholder="Enter Card Title"  
          displayClass="bg-white text-black rounded-2xl shadow-sm text-center"  
          editClass="bg-white rounded-2xl p-2"  
          onSubmit={(value) => props.addCard(props.board?.id, value)}  
        />  
      </div>  
    </div>  
  );  
}  

export default Board;  