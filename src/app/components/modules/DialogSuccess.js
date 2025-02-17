"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineCloudArrowUp } from "react-icons/hi2";
import { HiOutlineCheck } from "react-icons/hi2";

const DialogPopupSuc = ({
  isOpen,
  inputTypeFile,
  imageUser,
  close,
  type,
  title,
  des,
}) => {
  return (
    <>
      {type == "2" ? (
        <Dialog open={isOpen} onClose={close} className="relative z-50">
          <div className="fixed inset-0 bg-[#00000052] flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 rounded-xl bg-white shadow-afra p-12">
              <DialogTitle className="font-bold flex flex-col gap-4 justify-center items-center text-[var(--color-slate)] text-center text-[18px]">
                <div className="w-12 h-12 border-2 border-[#b7f0d8] flex justify-center items-center bg-[var(--color-slate)] rounded-full">
                  <HiOutlineCheck size={"2rem"} color="#fff" />
                </div>
                <span>{title}</span>
              </DialogTitle>

              <p className="text-[14px] font-bold text-center text-gray-400">
                {des}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={close}
                  className="w-2/3 bg-[#6594871f] text-[var(--color-green)] p-3 rounded-xl font-bold"
                >
                  متوجه شدم
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      ) : (
        ""
      )}
      {type == "1" ? (
        <Dialog open={isOpen} onClose={close} className="relative z-50">
          <div className="fixed inset-0 bg-[#00000052] flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 rounded-xl bg-white shadow-afra p-12">
              <DialogTitle className="font-bold flex flex-col gap-4 justify-center items-center text-[var(--color-red)] text-center text-[18px]">
                <div className="w-12 h-12 border-2 border-[#f0b7c6] flex justify-center items-center bg-[var(--color-red)] rounded-full">
                  <HiOutlineXMark size={"2rem"} color="#fff" />
                </div>
                <span>مشکلی پیش آمد</span>
              </DialogTitle>

              <p className="text-[14px] font-bold text-center text-gray-400">
                لطفا پس از بازبینی مجدد دوباره اقدام به ثبت نام در نرم افزار
                جامع مدیریت ارتباط مشتریان افرا کنید
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={close}
                  className="w-2/3 bg-[var(--color-red)] text-white p-3 rounded-xl font-bold"
                >
                  متوجه شدم
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      ) : (
        ""
      )}
        
    </>
  );
};

export default DialogPopupSuc;
