"use client";
import NextTopLoader from "nextjs-toploader";
import HeaderDashboard from "../components/layout/Header/Header";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }) {
  const [isScrollDisabled, setIsScrollDisabled] = useState("overflow-hidden");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsScrollDisabled("overflow-auto");
    }, 3000);
  }, [loading]);

  return (
    <div className=" dashboard-layout  bg-[#F5F6FA] w-full flex h-dvh overflow-hidden">
      {loading ? (
        <div className="z-[99999999999] fixed  left-0 right-0 bottom-0 top-0 h-full w-full bg-[var(--color-blue-dark-blur-2)] flex justify-center items-center">
          <div className=" w-fit px-5 bg-white p-4 rounded-lg h-fit py-5 flex justify-center items-center gap-3">
            <div className="flex  gap-3 justify-center items-center">
              {/* <Image className="w-20" src={afraLogo} /> */}
              <span className="loading loading-spinner text-[var(--color-green)]"></span>
              <span className="text-[var(--color-blue-dark)]">
                در حال بارگزاری...
              </span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      
      <HeaderDashboard child={children} />
    </div>
  );
}
