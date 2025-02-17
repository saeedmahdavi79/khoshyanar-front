"use client";
import React, { useEffect, useRef } from "react";  

function Dropdown(props) {  
  const dropdownRef = useRef();  

  const handleClick = (event) => {  
    if (  
      dropdownRef &&  
      !dropdownRef.current?.contains(event.target) &&  
      props.onClose  
    ) {  
      props.onClose();  
    }  
  };  

  useEffect(() => {  
    document.addEventListener("click", handleClick);  
    return () => {  
      document.removeEventListener("click", handleClick);  
    };  
  }, []); // Note: Added dependency array to prevent multiple subscriptions  

  return (  
    <div  
      ref={dropdownRef}  
      className={`absolute right-0 top-full bg-white rounded shadow-md min-h-10 min-w-20 w-auto max-w-xs max-h-96 overflow-y-auto z-50 custom-scroll ${  
        props.class ? props.class : ""  
      }`}  
    >  
      {props.children}  
    </div>  
  );  
}  

export default Dropdown;