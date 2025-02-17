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

const DialogPopup = ({
  isOpen,
  isOpen2,
  inputTypeFile,
  imageUser,
  close,
  close2,
  type,
  title,
  des,
  inputtitle,
  inputcolor,
  handleEvent,
  inputParent,
  inputChild,
  parentPDK,
  childPDK,
  inputCount,
}) => {
  return (
    <>
      {type == "2" ? (
        <Dialog open={isOpen} onClose={close} className="relative z-50">
          <div className="fixed inset-0 bg-[#00000052] flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 rounded-xl bg-white shadow-afra p-12">
              <DialogTitle className="font-bold flex flex-col gap-4 justify-center items-center text-[#52c41a] text-center text-[18px]">
                <div className="w-12 h-12  flex justify-center items-center bg-[#52c41a] rounded-full">
                  <HiOutlineCheck size={"2rem"} color="#fff" />
                </div>
                <span>{title}</span>
              </DialogTitle>

              <p className="text-[14px] font-normal text-center text-gray-400">
                {des}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={close}
                  className="w-2/3 bg-[#52c41a] text-white p-3 rounded-xl font-bold"
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
                <div className="w-12 h-12 flex justify-center items-center bg-[var(--color-red)] rounded-full">
                  <HiOutlineXMark size={"2rem"} color="#fff" />
                </div>
                <span>مشکلی پیش آمد</span>
              </DialogTitle>

              <p className="text-[14px] font-normal text-center text-gray-400">
                {des}
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
      {type == "3" ? (
        <Dialog open={isOpen} onClose={close} className="relative z-50">
          <div className="fixed inset-0 bg-[#00000052] flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 rounded-xl bg-white shadow-afra p-12">
              <DialogTitle className="font-bold flex flex-col gap-4 justify-center items-center text-blue-400 text-center text-[18px]">
                <div className="w-16 h-16 border-2 border-[#b7e7f0] flex justify-center items-center bg-blue-400 rounded-full">
                  {!imageUser ? (
                    <HiOutlineCloudArrowUp size={"2rem"} color="#fff" />
                  ) : (
                    <img src={imageUser} />
                  )}
                </div>
                <span>آپلود تصویر</span>
              </DialogTitle>

              <p className="text-[14px] font-bold text-center text-gray-400">
                جهت آپلود تصویر پروفایل از این بخش اقدام کنید
              </p>
              {inputTypeFile}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={close}
                  className="w-2/3 bg-blue-100 text-blue-400 p-3 rounded-xl font-bold"
                >
                  ثبت و ذخیره
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      ) : (
        ""
      )}
      {type == "4" ? (
        <Dialog open={isOpen} onClose={close} className="relative z-50">
          <div className="fixed inset-0 bg-[#00000052] flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 rounded-xl bg-white shadow-afra p-12">
              <DialogTitle className="font-bold flex flex-col gap-4 justify-center items-center text-blue-400 text-center text-[18px]">
                <span>افزودن ایونت</span>
              </DialogTitle>

              <p className="text-[14px] font-bold text-center text-gray-400">
                لطفا اطلاعات این ایونت را وارد کنید
              </p>
              {inputtitle}
              {inputcolor}

              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleEvent}
                  className="w-1/2 bg-blue-100 text-blue-400 p-2 rounded-xl text-[12px] font-bold"
                >
                  ثبت و ذخیره
                </button>
                <button
                  onClick={close}
                  className="w-1/2 bg-red-100 text-red-400 p-2 text-[12px] rounded-xl font-bold"
                >
                  بستن
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      ) : (
        ""
      )}
      {type == "dataProduct" ? (
        <Dialog open={isOpen} onClose={close} className="relative z-[9999]">
          <div className="fixed inset-0 bg-[#00000052] flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-2xl w-full space-y-4 rounded-xl bg-white shadow-afra p-12">
              <DialogTitle className="font-bold flex flex-col gap-4 justify-center items-center text-blue-400 text-center text-[18px]">
                <span>افزودن فرمولاسیون</span>
              </DialogTitle>

              <div className="flex flex-col gap-3 rounded-xl p-3 bg-gray-100 border-2 border-gray-200 justify-between">
                <span className="flex w-full flex-col gap-2 ">
                  <p className="text-[14px] font-bold text-center text-gray-400">
                    نام فرمولاسیون (BOM)
                  </p>
                  {inputParent}
                </span>

                <span className="flex w-full flex-col gap-2 ">
                  <p className="text-[14px] font-bold text-center text-gray-400">
                    محصول را انتخاب کنید
                  </p>
                  {inputChild}
                </span>
              </div>

              <div className="flex flex-col  gap-3">
                <span className="text-[12px] rounded-xl p-3 bg-gray-100 border-2 border-gray-200">
                  محصول انتخاب شده : {childPDK}
                </span>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleEvent}
                  className="w-1/2 bg-blue-100 text-blue-400 p-2 rounded-xl text-[12px] font-bold"
                >
                  ثبت و ذخیره
                </button>
                <button
                  onClick={close}
                  className="w-1/2 bg-red-100 text-red-400 p-2 text-[12px] rounded-xl font-bold"
                >
                  بستن
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

export default DialogPopup;
