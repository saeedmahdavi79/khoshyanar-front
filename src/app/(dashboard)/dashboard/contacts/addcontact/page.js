"use client"
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DialogPopupSuc from "@/app/components/modules/DialogSuccess";

const AddContact = () => {

    // تعریف state برای نگهداری مقدار ورودی
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');
    const [inputValue6, setInputValue6] = useState('');
    const [inputValue7, setInputValue7] = useState('');
    const [inputValue8, setInputValue8] = useState('');
    const [inputValue9, setInputValue9] = useState('');
    // تابع handler برای تغییر مقدار state
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };
    const handleInputChange3 = (event) => {
        setInputValue3(event.target.value);
    };
    const handleInputChange4 = (event) => {
        setInputValue4(event.target.value);
    };
    const handleInputChange5 = (event) => {
        setInputValue5(event.target.value);
    };
    const handleInputChange6 = (event) => {
        setInputValue6(event.target.value);
    };
    const handleInputChange7 = (event) => {
        setInputValue7(event.target.value);
    };
    const handleInputChange8 = (event) => {
        setInputValue8(event.target.value);
    };
    const handleInputChange9 = (event) => {
        setInputValue9(event.target.value);
    };
    const [isOpen, setIsOpen] = useState(false);

    const checkdata = () => {

        if (!inputValue) {
            setIsOpen(false);
            setDialogType("1");
            setDialogTitle("ثبت نا موفق");
            setDialogDes("اضافه کردن مخاطب با مشکل مواجه شد");
        }

        else {
            setIsOpen(true);
            setDialogType("2");
            setDialogTitle("ثبت موفق");
            setDialogDes("مخاطب با موفقیت به سیستم اضافه شد");

        }


    }

    const [dialogType, setDialogType] = useState("1");
    const [dialogTitle, setDialogTitle] = useState(
        "اطلاعات وارد نشده"
    );
    const [dialogDes, setDialogDes] = useState(
        "هنوز تمامی اطلاعات درخواستی را کامل نکردید"
    );



    const router = useRouter();

    const gotocontact = () => {
        setIsOpen(true)
        router.push("/dashboard/contact")
    }
    const gotoaddcontact = () => {
        setIsOpen(false)
        router.push("/dashboard/contact/addcontact")
    }





    const items = [
        {
            key: "1",
            label: "افزودن مخاطب",
            children: (
                <div className="w-full flex flex-col gap-3 ">
                    <div className="grid md:grid-cols-4 px-2 place-items-center mx-auto  lg:grid-cols-4 sm:grid-cols-1 gap-3 justify-center items-center w-full">

                        <InputCom
                            legend={" نام و نام خانوادگی"}
                            placeholder={"نام و نام خانوادگی را وارد کنید"}
                            type={"req"}
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <InputCom
                            legend={" سمت"}
                            placeholder={"سمت"}
                            type={"req"}
                            value={inputValue2}
                            onChange={handleInputChange2}
                        />
                        <InputCom
                            legend={"شماره تلفن"}
                            placeholder={"شماره تلفن"}
                            type={"req"}
                            value={inputValue3}
                            onChange={handleInputChange3}
                        />
                        <InputCom
                            legend={"شرکت یا حساب"}
                            placeholder={"نام شرکت یا حساب را وارد کنید"}
                            type={"req"}
                            value={inputValue4}
                            onChange={handleInputChange4}
                        />
                        <InputCom
                            legend={"ایمیل"}
                            placeholder={"ایمیل مخاطب را وارد کنید"}
                            type={"req"}
                            value={inputValue5}
                            onChange={handleInputChange5}
                        />
                        <InputCom
                            legend={" آدرس"}
                            placeholder={"آدرس"}
                            type={"req"}
                            value={inputValue6}
                            onChange={handleInputChange6}
                        />
                        <InputCom
                            legend={"کارشناس"}
                            placeholder={"کارشناس مربوطه را وارد کنید"}
                            type={"req"}
                            value={inputValue7}
                            onChange={handleInputChange7}
                        />
                        <InputCom
                            legend={"سرنخ"}
                            placeholder={"سرنخ   "}
                            type={"req"}
                            value={inputValue8}
                            onChange={handleInputChange8}
                        />
                        <InputCom
                            legend={"عملیات"}
                            placeholder={"عملیات"}
                            type={"req"}
                            value={inputValue9}
                            onChange={handleInputChange9}
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
                    title={"افزودن مخاطب"}
                    des={"افزودن مخاطب به بخش کانتکت ها"}
                    buttons={
                        <div className="flex flex-col">
                            <div className="flex flex-col justify-center items-center md:flex-row gap-2 mb-4">
                                <div className="w-[200px] ">
                                    <ButtonAfra
                                        type={"green"}
                                        text={"ثبت نهایی"}
                                        onClick={checkdata}
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



            <DialogPopupSuc
                isOpen={isOpen}
                type={dialogType}
                title={dialogTitle}
                des={dialogDes}
                close={gotocontact}
            />{" "}

        </>
    )
}
export default AddContact;