"use client"
import CardStat from "@/app/components/modules/Card";
import ButtonAfra from "@/app/components/modules/Buttons";
import InputCom from "@/app/components/modules/Inputs";
import { useState } from "react";





const AddLeads = () => {

    const items = [
        {
            key: "1",
            label: "افزودن سرنخ",
            children: (
                <div className="w-full flex flex-col gap-3 ">
                    <div className="grid md:grid-cols-4 px-2 place-items-center mx-auto  lg:grid-cols-4 sm:grid-cols-1 gap-3 justify-center items-center w-full">

                        <InputCom
                            legend={"نام   "}
                            placeholder={"نام"}
                            type={"req"}
                            // value={inputValue}
                            // onChange={handleInputChange}
                        />
                        <InputCom
                            legend={"موضوع"}
                            placeholder={"موضوع"}
                            type={"req"}
                            // value={inputValue}
                            // onChange={handleInputChange}
                        />
                        <InputCom
                            legend={"شرکت یا حساب"}
                            placeholder={"شرکت یا حساب"}
                            type={"req"}
                            // value={inputValue}
                            // onChange={handleInputChange}
                        />
                        <InputCom
                            legend={"منبع "}
                            placeholder={" منبع"}
                            type={"req"}
                            // value={inputValue}
                            // onChange={handleInputChange}
                        />
                        <InputCom
                            legend={"وضیعت"}
                            placeholder={"  وضیعت  "}
                            type={"req"}
                            // value={inputValue}
                            // onChange={handleInputChange}
                        />
                        <InputCom
                            legend={" سطح ارتباط"}
                            placeholder={"سطح ارتباط"}
                            type={"req"}
                            // value={inputValue}
                            // onChange={handleInputChange}
                        />
                        <InputCom
                            legend={"کارشناس"}
                            placeholder={"کارشناس مربوطه را وارد کنید"}
                            type={"req"}
                            // value={inputValue}
                            // onChange={handleInputChange}
                        />
                        <InputCom
                            legend={"عملیات"}
                            placeholder={"عملیات"}
                            type={"req"}
                            // value={inputValue}
                            // onChange={handleInputChange}
                        />
                    </div>


                </div>


            ),
        },

    ];


    const options = items.map((item) => ({ value: item.key, label: item.label }));
    const [selectedItem, setSelectedItem] = useState(options[0]?.value || "1");
    const currentItem = items.find((item) => item.key === selectedItem);


    return (
        <>
            <div className="w-full h-full">

                <CardStat
                    type={10}
                    title={"افزودن سرنخ"}
                    des={"افزودن سرنخ به بخش سرنخ ها"}
                    buttons={

                        <div className="flex flex-col">
                            <div className="flex flex-col justify-center items-center md:flex-row gap-2 mb-4">
                                <div className="w-[200px] ">
                                    <ButtonAfra
                                        type={"green"}
                                        text={"ثبت نهایی"}
                                      
                                    />
                                </div>
                                <div className="w-[200px]">
                                    <ButtonAfra
                                        onClick={() => router.push("/dashboard/")}
                                        text={"بازگشت به داشبورد"}
                                        type={"white-green-2"}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    data={currentItem?.children}
                />

            </div>





        </>
    )
}
export default AddLeads;