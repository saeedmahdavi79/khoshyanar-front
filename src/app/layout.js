import "./globals.css";
// import "antd/dist/antd.css";
import "react-tabs/style/react-tabs.css";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import "swiper/css";

import { bakh } from "@/utils/font";
export const metadata = {
  title: "افراپرداز | برترین نرم افزار جامع مدیریتی در کشور",
  description:
    "افراپرداز برترین و جامع ترین نرم افزار مدیریتی در کشور با انبوهی از امکانات و ماژول ها",
};
import Script from "next/script";
import GapifyWidget from "./components/modules/GapifyWidget";
import { Fragment } from "react";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="fa-ir" dir="rtl">
        <body className={`${bakh.className} bg-[#e6e6e6] container`}>
          {children}
        </body>
        {/* <Script
          id="muchat-agent"
          type="module"
          dangerouslySetInnerHTML={{
            __html: `import Chatbox from 'https://cdn.mu.chat/embeds/dist/chatbox/index.js?v=2';
             
   Chatbox.initBubble({
   agentId: 'cm53kbls601cwh9mgg5ehzn0d',
      });`,
          }}
        /> */}
      </html>
    </>
  );
}
