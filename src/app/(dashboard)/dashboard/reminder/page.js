"use client";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import Select from "@/app/components/modules/SelectCombo";
import Description1 from "@/app/components/modules/Description";
import Description2 from "@/app/components/modules/Futurefollow";


const reminder = () => {
    const handlerRegister = async () => {
        setButtonText("لطفا صبر کنید ...");
        try {
          if (
            data.email &&
            data.name &&
            data.lastName &&
            data.company &&
            data.password &&
            data.type &&
            data.phone
          ) {
            const sendData = await fetch(baseUrl("/auth/create"), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
            const getResponse = await sendData.json();
            if (getResponse.status == 202) {
              setIsOpen(true);
              setDialogType("2");
              setDialogTitle("ثبت نام موفقیت آمیز بود");
              setDialogDes(
                "شما با موفقیت در نرم افزار جامع مدیریت ارتباط با مشتریان افرا ثبت نام کردید جهت ادامه وارد حساب کاربری خود شوید"
              );
              setButtonText("ایجاد حساب");
            }
            if (getResponse.status == 400) {
              setIsOpen(true);
              setDialogType("1");
              setDialogTitle("ثبت نام با مشکل مواجه شد");
              setDialogDes(getResponse.message);
              setButtonText("ایجاد حساب");
            }
            if (getResponse.status == 500) {
              setIsOpen(true);
              setDialogType("1");
              setDialogTitle("ثبت نام با مشکل مواجه شد");
              setDialogDes(getResponse.message);
              setButtonText("ایجاد حساب");
            }
          } else {
            setIsOpen(true);
          }
        } catch (error) {
          setIsOpen(true);
          setButtonText("ایجاد حساب");
        }
      };
      const changeHandler = (e) => {
        if (e.value) {
          setData({ ...data, type: e.value });
        } else {
          setData({ ...data, [e.target.name]: e.target.value });
        }
      };
    return(
        <>
    <div className="flex justify-center items-center py-6 px-6">
        <div className="flex ml-auto justify-center items-center ">
            <span className="text-xl flex justify-center items-center font-semibold"> ثبت  و یادآوری</span>
          
            </div>
            <div className="w-[150px] mr-auto flex justify-center items-center">
                <ButtonAfra
                type={"green"}
                text={"بازگشت به داشبورد"}
                onClick={"/dashboard/"}
                />
        </div>
    </div>
     <div className="flex justify-center items-center px-6">
     <CardStat
     type={"8"}
        data={<>
        
        <div className="flex justify-center items-center px-[180px]  flex-col">
            <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center w-[400px]">
                <Select
             onChenge={changeHandler}
             legend={"ارجاع  "}
             options={[
                {
                  value: "1",
                  label: "  نام شخص ",
                },
                {
                  value: "2",
                  label: " نام شخص  ",
                },
                {
                  value: "3",
                  label: "  نام شخص ",
                },
                {
                  value: "4",
                  label: "  نام شخص ",
                },
                {
                  value: "5",
                  label: " نام شخص   ",
                },
              ]}
             name={"type"}
             
             placeholder={" ارجاع به ..؟  "}

            />
                </div>
                <div className="flex justify-center items-center w-[400px]">
                <Select
             onChenge={changeHandler}
             legend={"اولویت "}
             options={[
                {
                  value: "1",
                  label: " بالا  ",
                },
                {
                  value: "2",
                  label: " متوسط  ",
                },
                {
                  value: "3",
                  label: " پایین  ",
                },
                
              ]}
             name={"type"}
             
             placeholder={" اولویت ...؟  "}

            />
                </div>
            </div>

            {/* basediv */}
              <div className="flex justify-between items-center w-full pt-[30px]" >
              {/* right */}
              <div className="flex justify-between items-center w-[400px] "> 
             <Description1
             legend={"توضیحات"}
             name={"textarea"}
             type={"textarea"}
             onChenge={changeHandler}
             placeholder={"  توضیحات خود را وارد کنید   "}
             
             />
              </div>
              {/* left */}
              <div className="flex flex-col h-[200px] items-center w-[400px] justify-between">
                {/* time */}
              <div className="flex justify-between items-center w-[400px] ">
              <div  className="flex justify-between items-center w-[150px] ">
                  <Select
             onChenge={changeHandler}
             legend={" دقیقه"}
             options={[
                {
                  value: "0",
                  label: " 00  ",
                },
                {
                  value: "15",
                  label: " 15  ",
                },
                {
                  value: "30",
                  label: " 30  ",
                },
                {
                  value: "45",
                  label: " 45  ",
                },
                {
                  value: "_ _ _ _",
                  label: " _ _ _ _ ",
                },
                {
                  value: "1",
                  label: " 01  ",
                },
                {
                  value: "2",
                  label: " 02  ",
                },
                {
                  value: "3",
                  label: " 03  ",
                },
                {
                  value: "4",
                  label: " 04  ",
                },
                {
                  value: "5",
                  label: " 05  ",
                },
                {
                  value: "6",
                  label: " 06  ",
                },
                {
                  value: "7",
                  label: " 07  ",
                },
                {
                  value: "8",
                  label: " 08  ",
                },
                {
                  value: "9",
                  label: " 09  ",
                },
                {
                  value: "10",
                  label: " 10  ",
                },
                {
                  value: "11",
                  label: " 11  ",
                },
                {
                  value: "12",
                  label: " 12  ",
                },
                {
                  value: "13",
                  label: " 13  ",
                },
                {
                  value: "14",
                  label: " 14  ",
                },
               
                {
                  value: "16",
                  label: " 16  ",
                },
                {
                  value: "17",
                  label: " 17  ",
                },
                {
                  value: "18",
                  label: " 18  ",
                },
                
                {
                  value: "19",
                  label: " 19  ",
                },
                
                {
                  value: "20",
                  label: " 20  ",
                },
                
                {
                  value: "21",
                  label: " 21  ",
                },
                
                {
                  value: "22",
                  label: " 22  ",
                },
                
                {
                  value: "23",
                  label: " 23  ",
                },
                
                {
                  value: "23",
                  label: " 23  ",
                },
                
                {
                  value: "24",
                  label: " 24  ",
                },
                
                {
                  value: "25",
                  label: " 25  ",
                },
                
                {
                  value: "26",
                  label: " 26  ",
                },
                
                {
                  value: "27",
                  label: " 27  ",
                },
                
                {
                  value: "28",
                  label: " 28  ",
                },
                
                {
                  value: "29",
                  label: " 29  ",
                },
                
                
                
                {
                  value: "31",
                  label: " 31  ",
                },
                {
                  value: "32",
                  label: " 32  ",
                },
                {
                  value: "33",
                  label: " 33  ",
                },
                {
                  value: "34",
                  label: " 34  ",
                },
                {
                  value: "35",
                  label: " 35  ",
                },
                {
                  value: "36",
                  label: " 36  ",
                },
                {
                  value: "37",
                  label: " 37  ",
                },
                {
                  value: "38",
                  label: " 38  ",
                },
                {
                  value: "39",
                  label: " 39  ",
                },
                {
                  value: "40",
                  label: " 40  ",
                },
                {
                  value: "41",
                  label: " 41  ",
                },
                {
                  value: "42",
                  label: " 42  ",
                },
                {
                  value: "43",
                  label: " 43  ",
                },
                
                {
                  value: "46",
                  label: " 46  ",
                },
                {
                  value: "47",
                  label: " 47  ",
                },
                {
                  value: "48",
                  label: " 48  ",
                },
                {
                  value: "49",
                  label: " 49  ",
                },
                {
                  value: "50",
                  label: " 50  ",
                },
                {
                  value: "51",
                  label: " 51  ",
                },
                {
                  value: "52",
                  label: " 52  ",
                },
                {
                  value: "53",
                  label: " 53  ",
                },
                {
                  value: "54",
                  label: " 54  ",
                },
                {
                  value: "55",
                  label: " 55  ",
                },
                {
                  value: "56",
                  label: " 56  ",
                },
                {
                  value: "57",
                  label: " 57  ",
                },
                {
                  value: "58",
                  label: " 58  ",
                },
                {
                  value: "59",
                  label: " 59  ",
                },
                
                
              ]}
             name={"type"}
             
             placeholder={"  00  "}

            />
                  </div>

                  
                  <div className="flex justify-center items-center h-[56px] w-[60px] pt-[20px] ">
                  <span className="font-medium flex justify-center text-6xl">:</span>
                  </div>



                  <div  className="flex justify-between items-center w-[150px] ">
                  <Select
             onChenge={changeHandler}
             legend={"ساعت "}
             options={[
                {
                  value: "0",
                  label: " 00  ",
                },
                {
                  value: "1",
                  label: " 01  ",
                },
                {
                  value: "2",
                  label: " 02  ",
                },
                {
                  value: "3",
                  label: " 03  ",
                },
                {
                  value: "4",
                  label: " 04  ",
                },
                {
                  value: "5",
                  label: " 05  ",
                },
                {
                  value: "6",
                  label: " 06  ",
                },
                {
                  value: "7",
                  label: " 07  ",
                },
                {
                  value: "8",
                  label: " 08  ",
                },
                {
                  value: "9",
                  label: " 09  ",
                },
                {
                  value: "10",
                  label: " 10  ",
                },
                {
                  value: "11",
                  label: " 11  ",
                },
                {
                  value: "12",
                  label: " 12  ",
                },
                {
                  value: "13",
                  label: " 13  ",
                },
                {
                  value: "14",
                  label: " 14  ",
                },
                {
                  value: "15",
                  label: " 15  ",
                },
                {
                  value: "16",
                  label: " 16  ",
                },
                {
                  value: "17",
                  label: " 17  ",
                },
                {
                  value: "18",
                  label: " 18  ",
                },
                {
                  value: "19",
                  label: " 19  ",
                },
                {
                  value: "20",
                  label: " 20  ",
                },
                {
                  value: "21",
                  label: " 21  ",
                },
                {
                  value: "22",
                  label: " 22  ",
                },
                {
                  value: "23",
                  label: " 23  ",
                },
                {
                  value: "24",
                  label: " 24  ",
                },
                
              ]}
             name={"type"}
             
             placeholder={"  00  "}

            />
                  </div>
              </div>
              <div className="flex justify-between items-center w-[400px] ">
              <InputCom
                onChenge={changeHandler}
                type={"date"}
                name={"date"}
                legend={" تاریخ پیگیری"}
                placeholder={"  تاریخ  "}
              />
              </div>

              </div>
              </div>
            
        </div>
        {/* end */}
       <div className="flex justify-center items-center w-full pt-6 ">
       <div className="w-[150px] flex justify-center items-center">
                <ButtonAfra
                type={"green"}
                text={" ثبت "}
                onClick={"/dashboard/"}
                />
        </div>
       </div>
        <div className="flex justify-center items-center  w-full pb-3 ">
          <div className="flex justify-center items-center w-[958px]">
          <Description2
          legend={"پیگیری های آینده"}
          name={"textarea"}
          type={"textarea"}
          onChenge={changeHandler}
          placeholder={"     توضیحات خود را وارد کنید         "}
          />
          </div>
        </div>


        </>}
     />
     </div>







        
        
        
        
        
        
        
        </>
    );

};

export default reminder;