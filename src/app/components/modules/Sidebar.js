"use client";
import { useState } from "react";
import ButtonAfra from "./Buttons";
import ChatWindow from "./ChatWindow"; // اضافه کردن ChatWindow

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("contacts");
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedName, setSelectedName] = useState(""); // اضافه کردن state برای نام انتخاب‌شده

  const handleCreateGroup = () => {
    console.log("ایجاد گروه:", groupName, "اعضا:", selectedMembers);
    setShowModal(false);
  };

  const handleSelectItem = (name) => {
    setSelectedName(name); // به‌روزرسانی نام انتخاب‌شده
  };

  return (
    <div className="flex w-full">
      <div className="w-1/4 bg-[var(--color-gray-bc)] text-black p-4 relative">
        <div className="flex justify-between gap-4 mb-4">
          <button
            onClick={() => setActiveTab("contacts")}
            className={`w-full py-2 font-semibold text-center rounded-sm ${
              activeTab === "contacts" ? "bg-white" : "bg-[#cdcdcd] hover:bg-white"
            }`}
          >
            مخاطبین
          </button>
          <button
            onClick={() => setActiveTab("groups")}
            className={`w-full py-2 font-semibold text-center rounded-sm ${
              activeTab === "groups" ? "bg-white" : "bg-[#cdcdcd] hover:bg-white"
            }`}
          >
            گروه‌ها
          </button>
        </div>

        <div className="mt-4">
          {activeTab === "contacts" && (
            <ul>
              {["کاربر ۱", "کاربر ۲", "کاربر ۳"].map((user) => (
                <li
                  key={user}
                  onClick={() => handleSelectItem(user)}
                  className="p-2 rounded-sm cursor-pointer hover:bg-white"
                >
                  {user}
                </li>
              ))}
            </ul>
          )}
          {activeTab === "groups" && (
            <ul>
              {["گروه ۱", "گروه ۲", "گروه ۳"].map((group) => (
                <li
                  key={group}
                  onClick={() => handleSelectItem(group)}
                  className="p-2 rounded-sm cursor-pointer hover:bg-white"
                >
                  {group}
                </li>
              ))}
            </ul>
          )}
        </div>

        {activeTab === "groups" && (
          <button
            onClick={() => setShowModal(true)}
            className="absolute bottom-4 right-4 p-3 w-10 h-10 bg-blue-500 rounded-full text-white shadow-lg hover:bg-blue-600 focus:outline-none"
          >
            +
          </button>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-[var(--color-blue-dark-bc)] w-96 p-6 rounded-sm">
              <h2 className="text-lg font-semibold mb-4">ایجاد گروه جدید</h2>

              <input
                type="text"
                placeholder="نام گروه"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full p-2 text-black outline-none mb-4 border rounded-sm"
              />

              <div className="mb-4">
                <label className="font-semibold">انتخاب اعضا:</label>
                <div className="mt-2 flex flex-col space-y-2">
                  {["کاربر ۱", "کاربر ۲", "کاربر ۳"].map((user) => (
                    <label className="flex gap-2 items-center" key={user}>
                      <input
                        type="checkbox"
                        value={user}
                        checked={selectedMembers.includes(user)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedMembers([...selectedMembers, user]);
                          } else {
                            setSelectedMembers(
                              selectedMembers.filter((member) => member !== user)
                            );
                          }
                        }}
                        className="mr-2 text-black"
                      />
                      {user}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <ButtonAfra text={"لغو"} type={"blue"} onClick={() => setShowModal(false)} />
                <ButtonAfra text={"ایجاد"} type={"green"} onClick={handleCreateGroup} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ارسال selectedName به ChatWindow */}
      <ChatWindow selectedName={selectedName} />
    </div>
  );
}
