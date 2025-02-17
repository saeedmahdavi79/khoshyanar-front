// import Link from "next/link";
// import CardStat from "./components/modules/Card";
// import ConvertEnNumberToPersian from "@/utils/numberConv";

// const NotFound = () => {
//   return (
//     <div className="w-full h-screen bg-transparent mx-auto flex justify-end items-center">
//       <div class="flex flex-col  items-center justify-center gap-8 md:gap-16 group bg-transparent w-2/3 p-4 rounded-xl">
//         <div class="w-32 h-32 md:w-36 md:h-36 bg-gray-200 rounded-xl group-hover:bg-gray-800 duration-500">
//           <span class="w-full h-full font-black text-4xl md:text-5xl text-gray-600 group-hover:text-white duration-500 flex  items-center justify-center">
//             {ConvertEnNumberToPersian(404)}
//           </span>
//         </div>
//         <div class="flex flex-col gap-5 md:gap-10">
//           <div class="flex flex-col gap-2 md:gap-3">
//             <span class="font-black text-3xl md:text-3xl text-gray-800 text-center">
//               متأسفانه صفحه مورد نظر یافت نشد
//             </span>
//             <span class="font-light text-lg md:text-lg text-gray-600 text-center">
//               از طریق گزینه زیر به صفحه &zwnj;ورود هدایت خواهید شد.
//             </span>
//           </div>
//           <a
//             class="w-full h-10 md:h-14 hover:scale-95 transition-all duration-300 flex justify-center items-center gap-3 rounded-lg bg-[var(--color-green)] group-hover:bg-orangeAccent-400 "
//             href="/auth/login"
//           >
//             <span class="text-white mt-1 font-semibold text-sm md:text-lg">
//               صفحه اصلی
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotFound;
"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import error1 from "../../public/image/error.png";
const error = () => {
  const router = useRouter();
  const GoDashboard = () => {
    location.replace("/dashboard");
  };
  return (
    <>
      <div className="bg-main absolute w-full flex justify-center items-center h-screen">
        <div className=" flex flex-col justify-center items-center w-[630px]  bg-[#FFFFFF] border-[0.3px] border-[#B9B9B9] rounded-[24px] p-x[57px] py-[60px]">
          <Image className="w-[390px] h-[298px]" src={error1} />
          <div className="w-full  flex flex-col gap-3 rounded-[8px] pt-[70px] px-[106px] ">
            <div className="w-full flex justify-center items-center pb-[10px] ">
              <span className=" text-[18px] font-bold text-[#202224] text-right flex justify-center items-center  w-full ">
                صفحه مورد نظر شما یافت نشد ...
              </span>
            </div>
            {/* <botton className="w-[418px] h-[56px] bg-[#FF6E40] rounded-[8px] flex justify-center items-center  ">
                    <span className="w-full font-bold  flex justify-center items-center text-[#FFFFFF] text-[18px] ">بازگشت به داشبورد</span>
                </botton> */}
            <div className="flex  justify-center items-center ">
              <ButtonAfra
                type={"green"}
                text={"بازگشت به صفحه اصلی"}
                onClick={GoDashboard}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default error;
