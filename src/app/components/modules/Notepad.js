import { useRef } from "react";
import { LuHardDriveDownload } from "react-icons/lu";

export default function Notepad() {
  const noteRef = useRef(null);

  const handleSave = () => {
    const content = noteRef.current.value;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "AfraNote.txt");
  };

  const saveAs = (blob, fileName) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return (
    <div className="notepad   p-5 w-full max-w-md bg-[var(--color-gray-bc)] backdrop-blur-md  rounded-sm shadow-sm">
      <button
        onClick={handleSave}
        className="save-btn float-right p-2 bg-blue-600 text-black hover:bg-blue-800 hover:text-white rounded-sm"
      >
        <LuHardDriveDownload className="text-white" />
      </button>
      <h1 className="text-center text-black text-2xl font-semibold mb-4">
        یادداشت
      </h1>
      <textarea
        ref={noteRef}
        className="w-full min-h-80  rounded-sm bg-white  p-3 text-lg text-black resize-none focus:outline-none"
        placeholder="تایپ کنید ..."
      ></textarea>
    </div>
  );
}
