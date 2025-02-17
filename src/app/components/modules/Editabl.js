"use client";
import React, { useState } from "react";  

import { X } from "react-feather";  

function Editable(props) {  
  const [isEditable, setIsEditable] = useState(false);  
  const [inputText, setInputText] = useState(props.defaultValue || "");  

  const submission = (e) => {  
    e.preventDefault();  
    if (inputText && props.onSubmit) {  
      setInputText("");  
      props.onSubmit(inputText);  
    }  
    setIsEditable(false);  
  };  

  return (  
    <div className="w-full">  
      {isEditable ? (  
        <form  
          className={`flex flex-col gap-2 ${props.editClass ? props.editClass : ""}`}  
          onSubmit={submission}  
        >  
          <input  
            type="text"  
            value={inputText}  
            placeholder={props.placeholder || props.text}  
            onChange={(event) => setInputText(event.target.value)}  
            autoFocus  
            className="border-2 border-blue-600 rounded-lg outline-none text-base p-2"  
          />  
          <div className="flex gap-2 items-center">  
            <button  
              type="submit"  
              className="cursor-pointer rounded-lg border-none bg-blue-600 text-white transition duration-100 ease-in-out p-2 hover:bg-blue-700 active:translate-y-0.5"  
            >  
              {props.buttonText || "Add"}  
            </button>  
            <X   
              onClick={() => setIsEditable(false)}   
              className="cursor-pointer h-6 w-6"   
            />  
          </div>  
        </form>  
      ) : (  
        <p  
          className={`p-2 rounded-md bg-gray-300 text-black cursor-pointer w-fit transition duration-200 hover:bg-gray-400 ${props.displayClass ? props.displayClass : ""}`}  
          onClick={() => setIsEditable(true)}  
        >  
          {props.text}  
        </p>  
      )}  
    </div>  
  );  
}  

export default Editable;