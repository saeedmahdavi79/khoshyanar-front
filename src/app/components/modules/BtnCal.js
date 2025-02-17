const BtnCal = ({ type, text ,onClick}) => {
  return (
    <>
      {type == "gray" && (
        <div className="w-20 h-20 flex justify-center items-center active:bg-[#bababa] duration-200 ease-in-out rounded-full bg-[#d6d6d6] cursor-pointer" onClick={() => onClick(text)} >
          <span className="text-black text-[24px] font-bold">{text}</span>
        </div>
      )}

      {type == "orange" && (
        <div className="w-20 h-20 flex justify-center items-center rounded-full  active:bg-[#f79475] duration-200 ease-in-out bg-[var(--color-green)] cursor-pointer" onClick={() => onClick(text)} >
          <span className="text-white text-[24px] font-bold">{text}</span>
        </div>
      )}

      {type == "number" && (
        <div className="w-20 h-20 flex justify-center items-center rounded-full bg-[#8b8b8b] cursor-pointer" onClick={() => onClick(text)} >
          <span className="text-white text-[24px] font-bold">{text}</span>
        </div>
      )}
       {type == "numberzero" && (
        <div className=" h-full flex justify-start px-4 items-center rounded-full bg-[#343434] cursor-pointer" onClick={() => onClick(text)} >
          <span className="text-white text-[24px] font-bold">{text}</span>
        </div>
      )}
    </>
  );
};
export default BtnCal;
