"use client";

import Image from "next/image";
import Bitmap from "@/../../public/image/Bitmap.png";
import Products from "@/app/components/modules/Products";

const products = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 h-full px-3 py-1">
        <div className="w-full flex justify-start items-center">
          <span className="text-black text-3xl py-6 font-bold">پیشخوان</span>
        </div>
        <div className="w-full gap-4 grid grid-cols-3">
          <Products
            img={Bitmap}
            text={"اپل واچ سری 1"}
            price={12500}
            rating={1}
          />{" "}
          <Products
            img={Bitmap}
            text={"اپل واچ سری 2"}
            price={12500}
            rating={1.5}
          />{" "}
          <Products
            img={Bitmap}
            text={"اپل واچ سری 3"}
            price={12500}
            rating={3}
          />
          <Products
            img={Bitmap}
            text={"اپل واچ سری 4"}
            price={12500}
            rating={3.5}
          />{" "}
          <Products
            img={Bitmap}
            text={"اپل واچ سری 5"}
            price={12500}
            rating={4.5}
          />{" "}
          <Products
            img={Bitmap}
            text={"اپل واچ سری 6"}
            price={12500}
            rating={5}
          />
        </div>
      </div>
    </>
  );
};

export default products;
