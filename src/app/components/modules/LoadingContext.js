"use client";
import Image from "next/image";
import React, { createContext, useContext, useState } from "react";
import afraLogo from "../../../../public/image/afrapardaz.png";
const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-[var(--color-blue-dark-blur-2)] flex justify-center items-center">
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
    );
  }
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
