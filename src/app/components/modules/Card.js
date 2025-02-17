import Image from "next/image";
import ImageCircle from "../../../../public/image/three.png";
import ImageCircle2 from "../../../../public/image/circle.png";

const CardStat = ({
  type,
  data,
  icon,
  color,
  title,
  des,
  count,
  countTitle,
  seeMoreClick,
  colorHover,
  buttons,
}) => {
  return (
    <>
      {type == "1" ? (
        <div className="w-1/3 h-fit   bg-white rounded-[20px] shadow-afra flex flex-col justify-between py-6 items-center">
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[16px] text-[var(--color-slate-dark)]">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
            <div>
              <span
                onClick={seeMoreClick}
                className="font-bold hover:bg-[var(--color-green)] hover:text-white p-2 rounded-[12px] cursor-pointer text-[10px] text-gray-400"
              >
                مشاهده همه
              </span>
            </div>
          </div>
          <div className="w-full h-[210px] px-2 section-layout overflow-auto overflow-x-hidden">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "2" ? (
        <div className="w-1/5 h-[150px] bg-white rounded-[20px] shadow-afra flex flex-col justify-between py-6 items-center">
          <span className="text-[14px] w-full px-5 font-bold text-[var(--color-slate-dark)] flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="text-[16px] font-bold text-[var(--color-slate-dark)]">
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </span>
            <span
              className={`${color} text-white cursor-pointer h-12 w-12 rounded-[10px] flex p-3 justify-between items-center`}
            >
              {icon}
            </span>
          </span>
          <span className="flex w-full px-6 gap-2 justify-between items-center">
            <span className="flex gap-3 items-center justify-center">
              <span className="font-bold text-[16px] text-[var(--color-slate-dark)]">
                {count}
              </span>
              <span className="font-normal text-[12px] text-gray-400">
                {countTitle}
              </span>
            </span>
            <span className="flex gap-3 items-center justify-between">
              <span
                onClick={seeMoreClick}
                className={`${colorHover} hover:text-white p-1 rounded-[7px] cursor-pointer font-bold text-[10px] text-gray-400`}
              >
                مشاهده همه
              </span>
            </span>
          </span>
        </div>
      ) : (
        ""
      )}

      {type == "3" ? (
        <div className="w-full h-fit   bg-white rounded-[20px] shadow-afra flex flex-col justify-between py-8 px-4 items-center">
          <div className="flex w-full px-4 justify-between items-center">
            <div className="flex sm:justify-center md:justify-start flex-col gap-2">
              <span className="font-bold sm:text-[14px] md:text-[16px] text-[var(--color-slate-dark)]">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <div className="w-full h-fit px-4 py-6 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-3">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "4" ? (
        <div className="w-full h-[150px] bg-white rounded-[20px] shadow-afra flex flex-col justify-between py-6 items-center">
          <span className="text-[14px] w-full px-5 font-bold text-[var(--color-slate-dark)] flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="text-[16px] font-bold text-[var(--color-slate-dark)]">
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </span>
            <span
              className={`${color} relative text-white cursor-pointer h-12 w-12 rounded-[10px] flex p-3 justify-between items-center`}
            >
              {icon}
            </span>
          </span>
          <span className="flex w-full px-6 gap-2 justify-between items-center">
            <span className="flex gap-3 items-center justify-center">
              <span className="font-bold text-[16px] text-[var(--color-slate-dark)]">
                {count}
              </span>
              <span className="font-normal text-[12px] text-gray-400">
                {countTitle}
              </span>
            </span>
            <span className="flex gap-3 items-center justify-between">
              <span className="font-bold text-[10px] text-gray-400">
                مشاهده جزئیات
              </span>
            </span>
          </span>
        </div>
      ) : (
        ""
      )}
      {type == "5" ? (
        <div className="w-full h-fit   bg-white rounded-[20px] shadow-afra flex flex-col justify-between py-8 px-4 items-center">
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[16px] text-[var(--color-slate-dark)]">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <div className="w-full h-fit px-4 py-6 flex justify-center  items-center gap-3">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "6" ? (
        <div className="w-[300px] h-[150px] bg-white rounded-[20px] shadow-afra flex flex-col justify-between py-6 items-center">
          <span className="text-[14px] w-full px-5 font-bold text-[var(--color-slate-dark)] flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="text-[16px] font-bold text-[var(--color-slate-dark)]">
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </span>
            <span
              className={`${color} text-white cursor-pointer h-12 w-12 rounded-[10px] flex p-3 justify-between items-center`}
            >
              {icon}
            </span>
          </span>
          <span className="flex w-full px-6 gap-2 justify-between items-center">
            <span className="flex gap-3 items-center justify-center">
              <span className="font-bold text-[16px] text-[var(--color-slate-dark)]">
                {count}
              </span>
              <span className="font-normal text-[12px] text-gray-400">
                {countTitle}
              </span>
            </span>
            <span className="flex gap-3 items-center justify-between">
              <span
                onClick={seeMoreClick}
                className={`${colorHover} hover:text-white p-1 rounded-[7px] cursor-pointer font-bold text-[10px] text-gray-400`}
              >
                مشاهده همه
              </span>
            </span>
          </span>
        </div>
      ) : (
        ""
      )}
      {type == "7" ? (
        <div className="w-full h-full section-layout overflow-auto bg-white rounded-xl shadow-afra flex flex-col justify-between py-8 px-4 items-center">
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[18px] text-[var(--color-slate-dark)]">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <div className="w-full h-full overflow-auto section-layout  px-4 py-6 justify-center items-center gap-3">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "8" ? (
        <div className="w-full h-fit bg-white rounded-xl shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05) flex flex-col justify-between py-8 px-4 items-center">
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-black text-[16px] ">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <div className="w-full h-fit overflow-auto section-layout  px-4 py-6 justify-center items-center gap-3">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "8-2" ? (
        <div className="w-full h-full bg-white rounded-xl shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05) flex flex-col justify-start py-8 px-4 items-center">
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-black text-[16px] ">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <div className="w-full h-fit overflow-auto section-layout  px-4 py-6 justify-center items-center gap-3">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "8login" ? (
        <div className="w-full h-fit   bg-white rounded-sm shadow-afra flex flex-col justify-between items-center">
          <div className="w-full h-fit overflow-auto section-layout justify-center items-center gap-3">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "8-main" ? (
        <div className="w-full h-[300px] overflow-hidden  relative  bg-[var(--color-blue-dark)] rounded-sm shadow-afra flex flex-col justify-between py-8 px-4 items-center">
          <div className="w-full h-fit overflow-auto section-layout  px-4 py-6 justify-center items-center gap-3">
            {data}
          </div>
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-white text-[16px] ">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <Image src={ImageCircle} className=" absolute w-20 top-4" />
          {/* <Image
            src={ImageCircle2}
            className=" absolute w-36 -bottom-[4rem] right-[-4rem]"
          /> */}
        </div>
      ) : (
        ""
      )}
      {type == "8-main-data" ? (
        <div className="w-full h-[300px] overflow-hidden  relative  bg-[var(--color-blue-dark)] rounded-sm shadow-afra flex flex-col justify-between py-8 px-4 items-center">
          <div className="w-full h-full overflow-auto section-layout  px-4 py-6 justify-center items-center gap-3">
            {data}
          </div>
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-white text-[16px] ">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <Image src={ImageCircle} className=" absolute w-20 top-4" />
          {/* <Image
            src={ImageCircle2}
            className=" absolute w-36 -bottom-[4.8rem] "
          /> */}
        </div>
      ) : (
        ""
      )}
      {type == "8-main-data-2" ? (
        <>
          <div className=" relative">
            {/* <div className="w-1/4 h-1/4 absolute rounded-full top-[35%] left-[35%] bg-[var(--color-green)] z-[-1] "></div> */}

            <div className="w-full border-gray-200 z-[9999999] bg-white shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] rounded-xl  h-[160px] overflow-hidden  relative   flex flex-col justify-between  px-4 items-center">
              <div className="w-full h-full overflow-auto section-layout   justify-center items-center gap-3">
                {data}
              </div>
              <div className="flex w-full px-5 justify-between items-center">
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-[var(--color-blue-dark)] text-[16px] ">
                    {/* گزارشات فروش بر اساس کارشناس */}
                    {title}
                  </span>
                  <span className="text-[11px] font-normal text-gray-400">
                    {des}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {type == "8-main-data-3" ? (
        <div className="w-full h-[525px] overflow-hidden  relative  bg-[var(--color-blue-dark)] rounded-sm shadow-afra flex flex-col justify-between py-8 px-4 items-center">
          <div className="w-full h-full overflow-auto section-layout  px-4 py-6 justify-center items-center gap-3">
            {data}
          </div>
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-white text-[16px] ">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <Image src={ImageCircle} className=" absolute w-20 bottom-4" />
          {/* <Image src={ImageCircle2} className=" absolute w-36 -top-[4.8rem] " /> */}
        </div>
      ) : (
        ""
      )}
      {type == "8-main-data-4" ? (
        <>
          <div className=" relative">
            {/* <div className="w-1/4 h-1/4 absolute rounded-full top-[35%] left-[38%] bg-[var(--color-slate)] z-[-1] "></div> */}

            <div className="w-full z-[9999999]  h-full border-2 border-gray-200  overflow-hidden  relative  bg-white rounded-sm shadow-afra flex flex-col justify-between py-8 px-4 items-center">
              <div className="w-full h-full overflow-auto section-layout  px-4 py-6 justify-center items-center gap-3">
                {data}
              </div>
              <div className="flex w-full px-5 justify-between items-center">
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-white text-[16px] ">
                    {/* گزارشات فروش بر اساس کارشناس */}
                    {title}
                  </span>
                  <span className="text-[11px] font-normal text-gray-400">
                    {des}
                  </span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {type == "9" ? (
        <div className="w-full h-[150px] bg-white rounded-xl shadow-afra flex flex-col justify-between py-6 items-center">
          <span className="text-[14px] w-full px-3 font-bold text-[var(--color-slate-dark)] flex justify-between items-center">
            <span className="flex flex-col gap-2">
              <span className="sm:text-[12px] xl:text-[14px] font-bold text-[var(--color-slate-dark)]">
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </span>
            <span
              className={`${color} relative text-white cursor-pointer h-12 w-12 rounded-[10px] flex p-3 justify-between items-center`}
            >
              {icon}
            </span>
          </span>
          <span className="flex w-full px-6 gap-2 justify-between items-center">
            <span className="flex gap-2 items-center justify-center">
              <span className="font-bold text-[14px] text-[var(--color-slate-dark)]">
                {count}
              </span>
              <span className="font-normal text-[12px] text-gray-400">
                {countTitle}
              </span>
            </span>
            <span className="flex gap-3 items-center justify-between"></span>
          </span>
        </div>
      ) : (
        ""
      )}
      {type == "10" ? (
        <div className="w-full h-[calc(100%-5rem)] section-layout overflow-auto bg-white rounded-lg border border-zinc-200 flex flex-col justify-start sm:py-2 md:py-2 px-4 items-center">
          <div className="flex flex-col xl:flex-row w-full sm:px-2 sm:gap-4 p-5 justify-between ">
            <div className="flex xl:w-1/2 w-full  flex-col  gap-2">
              <span className="font-bold text-black sm:font-extrabold sm:justify-center  flex md:justify-start text-[18px] text-[var(--color-slate-dark)]">
                {title}
              </span>
              <span className="sm:text-[13px] text-[11px] font-normal text-black sm:justify-center  flex md:justify-start">
                {des}
              </span>
            </div>
            <div className="xl:w-1/2  w-full flex sm:justify-center md:justify-end">
              {buttons}
            </div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <div className="w-full h-full overflow-auto section-layout sm:py-2 py-6 justify-center items-center gap-3">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "11" ? (
        <div className="w-full h-full section-layout overflow-auto bg-white rounded-xl shadow-afra flex flex-col justify-between py-8 px-4 items-center">
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex w-1/2 flex-col gap-2">
              <span className="font-bold text-[18px] text-[var(--color-slate-dark)]">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
            <div className="w-1/2 flex justify-end">{buttons}</div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <div className="w-full h-full overflow-auto section-layout  px-4 py-6 justify-center items-center gap-3">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "12" ? (
        <div className="w-full h-fit  py-3 section-layout  bg-[var(--color-blue-dark-bc)] rounded-none shadow-afra flex flex-col   px-3 ">
          <div className="w-full h-full    sm:py-2 md:py-4  ">{data}</div>
        </div>
      ) : (
        ""
      )}

      {type == "13" ? (
        <div className="w-1/4 h-full   bg-white rounded-[20px] shadow-afra flex flex-col justify-between py-6 items-center">
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[16px] text-[var(--color-slate-dark)]">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
          </div>
          <div className="w-full h-full px-2 section-layout overflow-auto overflow-x-hidden">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "14" ? (
        <div className="w-3/4 h-full   bg-white rounded-[20px] shadow-afra flex flex-col   items-center">
          <div className="flex w-full px-5 justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[16px] text-[var(--color-slate-dark)]">
                {/* گزارشات فروش بر اساس کارشناس */}
                {title}
              </span>
              <span className="text-[11px] font-normal text-gray-400">
                {des}
              </span>
            </div>
          </div>
          <div className="w-full h-full px-2 section-layout overflow-auto overflow-x-hidden">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}

      {type == "15" ? (
        <div className="w-full h-full section-layout overflow-auto bg-white rounded-xl shadow-afra flex flex-col justify-start sm:py-2 md:py-8 px-4 items-center">
          <div className="flex flex-col xl:flex-row w-full sm:px-2 sm:gap-4 p-3 justify-between ">
            <div className="flex xl:w-1/2 w-full  flex-col  gap-2">
              <span className="font-bold sm:font-extrabold sm:justify-center  flex md:justify-start text-[18px] text-[var(--color-slate-dark)]">
                {title}
              </span>
              <span className="sm:text-[13px] text-[11px] font-normal text-gray-400 sm:justify-center  flex md:justify-start">
                {des}
              </span>
            </div>
            <div className="xl:w-1/2  w-full flex sm:justify-center md:justify-end">
              {buttons}
            </div>
            <div>
              {/* <span className="font-bold text-[12px] text-gray-400">
                مشاهده همه
              </span> */}
            </div>
          </div>
          <div className="w-full overflow-auto section-layout sm:py-2  justify-center items-center gap-3">
            {data}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CardStat;
