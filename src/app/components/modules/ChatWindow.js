import Image from "next/image";
import ChatTicket from "./ChatTicket";
import MessageInput from "./MessageInput";

import profile from "@/../../public/image/Vista .jpg";


export default function ChatWindow({ selectedName }) {
  return (
    <div className="flex flex-col gap-2 w-full bg-[var(--color-blue-dark-bc)] p-4">
      {/* نمایش نام انتخاب‌شده در بالای پنجره چت */}
      <div className="text-lg text-white font-semibold mb-4">
        {selectedName
          ? `در حال چت با: ${selectedName}`
          : "انتخاب کاربر یا گروه"}
      </div>
      <div className="flex flex-col gap-4 overflow-y-scroll bg-[var(--color-blue-dark)] p-4 rounded-sm">
        <ChatTicket
          type={"chatAdmin"}
          username={"سجاد سجودی"}
          isFirst={true}
          profile={profile}
          memberchat={"سلام وقتتون بخیر ببخشید مزاحم شدم"}
        />
        <ChatTicket
          type={"chatAdmin"}
          username={"سجاد سجودی"}
          memberchat={"خوب هستین"}
        />
        <ChatTicket type={"chatMember"} adminchat={"سلام ممنون در خدمتم"} />
        <ChatTicket type={"chatMember"} adminchat={"چه کمکی از دستم برمیاد"} />
        <ChatTicket
          type={"chatAdmin"}
          username={"سجاد سجودی"}
          isFirst={true}
          profile={profile}
          memberchat={"سلام وقتتون بخیر ببخشید مزاحم شدم"}
        />
      </div>
      <MessageInput />
    </div>
  );
}
