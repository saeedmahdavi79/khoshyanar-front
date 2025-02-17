"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const Requirementspage = () => {
  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"نیازمندی های پرسنل"}
          des={" بخش ثبت نیازمندی های پرسنل "}
          buttons={
            <div className="flex flex-col">
              <div className="flex flex-col justify-center items-center md:flex-row gap-2 mb-4">
                <div className="w-[200px]">
                  <ButtonAfra
                    onClick={() => router.push("/dashboard/")}
                    text={"بازگشت به داشبورد"}
                    type={"white-green-2"}
                  />
                </div>
                <div className="w-[200px] ">
                  <ButtonAfra
                    type={"green"}
                    text={"ثبت نهایی و ارسال به تدارکات"}
                  />
                </div>
              </div>
            </div>
          }
          data={<>
          
          <div className="flex flex-col gap-3 w-full">
          <div className=" px-3">
            <JoditEditor className="classletter-2" />
          </div>
        </div>
          
          </>}
        />
       
      </div>
    </>
  );
};
export default Requirementspage;
