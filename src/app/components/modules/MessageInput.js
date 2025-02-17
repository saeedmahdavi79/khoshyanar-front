"use client"
import { useState } from 'react';
import ButtonAfra from './Buttons';

export default function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('پیام ارسال شد:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center w-full justify-between gap-4 border border-[var(--color-blue-dark-bc)] p-1">
      {/* <button
        onClick={handleSendMessage}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        ارسال
      </button> */}

      <div className='w-[100px]'>
      <ButtonAfra
      type={"green"}
      text={"ارسال"}
      />
      </div>
      <input
        type="text"
        placeholder="پیام خود را وارد کنید"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className=" p-2 outline-none w-full  rounded-sm"
      />
      {/* می‌توانید اینجا قابلیت آپلود عکس و انتخاب ایموجی اضافه کنید */}


    </div>
  );
}
