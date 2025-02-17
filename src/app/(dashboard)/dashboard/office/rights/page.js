"use client";  

import ButtonAfra from "@/app/components/modules/Buttons";  
import CardStat from "@/app/components/modules/Card";  
import { useRouter } from "next/navigation";  
import { useEffect, useState } from "react";  
import { LuRotateCcw } from "react-icons/lu";  
import SelectCombo from "@/app/components/modules/SelectCombo";
const RightsPage = () => {  
  const router = useRouter();  
  const [isMobile, setIsMobile] = useState(false);  
  const [selectedEmployee, setSelectedEmployee] = useState(""); // State to track selected employee  
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');  

  const handleResize = () => {  
    setIsMobile(window.innerWidth < 667);  
  };  
  const handleEmployeeChange = (selectedOption) => {  
    setSelectedEmployeeId(selectedOption ? selectedOption.value : '');  
  };  

  useEffect(() => {  
    handleResize(); // Check screen size on initial load  
    window.addEventListener("resize", handleResize);  

    return () => {  
      window.removeEventListener("resize", handleResize);  
    };  
  }, []);  

  // Sample employee data  
  const employees = [  
    { id: 1, name: "Employee 1" },  
    { id: 2, name: "Employee 2" },  
    { id: 3, name: "Employee 3" }  
  ];  

  return (  
    <>  
      {isMobile && (  
        <div className="fixed inset-0 w-full flex items-center justify-center bg-orange-500 bg-opacity-20 backdrop-blur-md z-50">  
          <div className="bg-white border-[2px] border-orange-600 gap-1 flex flex-col justify-center items-center p-4 rounded-lg shadow-xl">  
            <LuRotateCcw className="text-blue-950 size-[30px] stroke-current stroke-2" />  
            <p className="text-center font-[500] text-blue-950 ">لطفا دستگاه خودرا بچرخانید</p>  
          </div>  
        </div>  
      )}   
      
      <div className="w-full max-h-[86vh] h-full">  
        <CardStat  
          type={"10"}  
          title={"محاسبه دستمزد"}  
          buttons={  
            <div className="flex flex-row gap-2">  
              <div className="w-[200px]">  
                <ButtonAfra text={"محاسبه"} type={"green"} />  
              </div>  

              <div className="w-[200px]">  
                <ButtonAfra  
                  onClick={() => router.push("/dashboard/")}  
                  text={"بازگشت به داشبورد"}  
                  type={"white-green-2"}  
                />  
              </div>  
            </div>  
          }  
          data={  
            <> 
            <div className=" w-full flex  justify-end px-2  ">
              <div className="flex items-center w-[200px] mb-4 justify-end">  
                <SelectCombo  
        legend={"انتخاب پرسنل:"}  
        options={employees.map(employee => ({  
          value: employee.id, // شناسه پرسنل  
          label: employee.name // نام پرسنل  
        }))}  
        onChange={handleEmployeeChange}  
      /> 
              </div>  </div> 

              {/* Show the table only if an employee is selected */}  
              {selectedEmployeeId && (  
                <div className="w-full flex border-2 border-[#000]">
                <div className="w-full flex grid-cols-4">
                  <div className="w-full flex flex-col border-l-2 border-[#000]">
                    <div className="w-full h-10 border-[#000] flex justify-center items-center bg-[var(--header-table)]  border-b-2 text-[#000]">
                      مشخصات پرسنلی
                    </div>
                    <div className="w-full flex flex-col justify-start p-2 gap-5 grid-cols-2 h-[600px]">
                      <div>کد پرسنلی : 1</div>
                      <div>نام : 1</div>
                      <div>نام خانوادگی : 1</div>
                      <div>کدملی : 1</div>
                      <div>شماره حساب : 1</div>
                      <div>شماره بیمه : 1</div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col border-l-2 border-[#000]">
                    <div className="w-full bg-[var(--header-table)]  border-b-2 h-10 border-[#000] flex justify-center items-center">
                      وضعیت کارکرد
                    </div>
                    <div className="w-full h-[300px] flex flex-col justify-start p-2 gap-5 grid-cols-2">
                      <div>کد پرسنلی : 1</div>
                      <div>نام : 1</div>
                    </div>
                    <div className="w-full bg-[var(--header-table)] border-t-2  border-b-2 h-10 border-[#000] flex justify-center items-center">
                      وضعیت مرخصی
                    </div>
                    <div className="w-full h-[300px] flex flex-col justify-start p-2 gap-5 grid-cols-2">
                      <div>مانده مرخصی جاری : 1</div>
                      <div>مرخصی استفاده شده : 1</div>
                    </div>
                  </div>
                  <div className="w-full border-l-2 border-[#000] flex flex-col justify-between">
                    <div className="w-full">
                      <div className="w-full bg-[var(--header-table)]  border-b-2 h-10 border-[#000] flex justify-center items-center">
                        شرح پرداخت ها
                      </div>
                      <div className="w-full flex grid-cols-2 border-b-2 border-[#000]">
                        <div className="w-full border-l-2 border-[#000]">
                          حقوق پایه
                        </div>
                        <div className="w-full">1</div>
                      </div>
                      <div className="w-full flex grid-cols-2 border-b-2 border-[#000]">
                        <div className="w-full border-l-2 border-[#000]">
                          بن کارگری
                        </div>
                        <div className="w-full">1</div>
                      </div>
                      <div className="w-full flex grid-cols-2 border-b-2 border-[#000]">
                        <div className="w-full border-l-2 border-[#000]">
                          حق مسکن
                        </div>
                        <div className="w-full">1</div>
                      </div>

                      <div className="w-full flex grid-cols-2 border-b-2 border-[#000]">
                        <div className="w-full border-l-2 border-[#000]">
                          پایه سنواتی
                        </div>
                        <div className="w-full">1</div>
                      </div>
                      <div className="w-full flex grid-cols-2 border-b-2 border-[#000]">
                        <div className="w-full border-l-2 border-[#000]">
                          حق اولادی
                        </div>
                        <div className="w-full">1</div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-5">
                      <div className="border-t-2 h-[50%] border-b-2 border-[#000] py-3">
                        جمع پرداخت ها :
                      </div>
                      <div className="w-full h-[50%]">خالص پرداختی :</div>
                    </div>
                  </div>
                  <div className="w-full border-[#000] flex flex-col justify-between">
                    <div className="w-full">
                      <div className="w-full bg-[var(--header-table)]  border-b-2 h-10 border-[#000] flex justify-center items-center">
                        شرح کسورات
                      </div>
                      <div className="w-full flex grid-cols-2 border-b-2 border-[#000]">
                        <div className="w-full border-l-2 border-[#000]">
                          کسر کار
                        </div>
                        <div className="w-full">1</div>
                      </div>
                      <div className="w-full flex grid-cols-2 border-b-2 border-[#000]">
                        <div className="w-full border-l-2 border-[#000]">
                          بیمه
                        </div>
                        <div className="w-full">1</div>
                      </div>
                      <div className="w-full flex grid-cols-2 border-b-2 border-[#000]">
                        <div className="w-full border-l-2 border-[#000]">
                          مالیات
                        </div>
                        <div className="w-full">1</div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="border-t-2 border-[#000] py-3">
                        جمع کسورات :
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              )}  
            </>  
          }  
        />  
      </div>  
    </>  
  );  
};  

export default RightsPage;