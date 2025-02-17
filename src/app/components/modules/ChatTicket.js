import ConvertEnNumberToPersian from "@/utils/numberConv";
import Image from "next/image";
const ChatTicket = ({
  username,
  date,
  subject,
  profile,
  adminchat,
  memberchat,
  clock,
  type,
  isFirst,
}) => {
  return (
    <>
      {type == "contact" ? (
        <div className=" hover:bg-[var(--color-green)] rounded-lg group hover:scale-95 duration-300 transition-all w-full h-full flex flex-col gap-1 overflow-auto ">
          <div className="w-full h-full items-center p-2   flex gap-1 cursor-pointer">
            <div className="w-1/5 h-full flex justify-center items-center">
              <div className="w-12 h-12 bg-yellow-200 rounded-full">
                <Image src={profile} className="rounded-full" />
              </div>
            </div>
            <div className="w-4/5 h-full flex flex-col justify-center items-center gap-2 px-4">
              <div className="w-full flex justify-between items-center ">
                <span className="text-[15px] group-hover:text-white text-gray-800 font-semibold">
                  {username}
                </span>
                <span className="text-[14px] group-hover:text-white text-gray-600 font-light">
                 {ConvertEnNumberToPersian(date)} 
                </span>
              </div>
              <div className="w-full flex justify-between items-center ">
                <span className="text-[13px] group-hover:text-white text-gray-600 font-extralight">
                  {subject}
                </span> 
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {type == "chatAdmin" ? (
        <div className="w-full h-fit gap-2 flex flex-col justify-start items-start">
          {isFirst == true ? (
          <div className="flex justify-center items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-emerald-400 overflow-hidden">
               <Image src={profile} className="w-full h-full" /> 
            </div>
            <span className="text-[18px] text-white font-normal">
             {username}
            </span>
          </div>
            
          ) : ""}
          <div className="max-w-[70%] w-fit h-fit bg-[var(--color-gray-bc)] rounded-l-[8px]  border-l-4 border-[var(--color-green)] rounded-b-[8px] -mt-1 p-4 break-words text-justify flex flex-col justify-start items-start gap-2">
            <span className="w-full text-[14px] text-black font-extralight ">
              {memberchat}
            </span>
            <span className="w-full text-end text-[10px] text-black font-extralight">
              1403/3/3 2:30pm{" "}
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
      {type == "chatMember" ? (
        <div className="w-full h-fit flex justify-end items-end gap-2">
          <div className="max-w-[80%] w-fit h-fit  bg-[var(--color-gray-bc)] rounded-r-lg  border-r-4 border-[var(--color-blue)] rounded-t-lg -mb-1 break-words p-4 text-justify flex flex-col justify-start items-start gap-2">
            <span className="w-full text-[14px] text-black font-extralight ">
             {adminchat}
            </span>
            <span className="w-full text-end text-[10px] text-black font-extralight">
              1403/3/3 2:30pm{" "}
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default ChatTicket;
