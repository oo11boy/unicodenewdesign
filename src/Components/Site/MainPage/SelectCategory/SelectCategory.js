import Link from "next/link";
import React from "react";
import './SelectCategory.css'
export default function SelectCategory() {
  return (
    <div className="flex SelectCategory my-12 flex-col items-center justify-center w-[90%] m-auto">
      <h2 className="my-12 text-2xl font-bold text-white">دسته بندی های طراحی سایت ارزان و با کیفیت</h2>

      <div className="flex flex-col sm:flex-row justify-between w-[100%] flex-wrap m-auto">
        <div className="mb-4 w-[100%] md:w-[48%] lg:w-[24%] flex flex-col bg-slate-950 text-white justify-center items-center h-[200px]">
        <span className="icon-cart my-4 text-3xl"></span>
          <Link href={"#"}>طراحی سایت فروشگاهی ارزان</Link>
        </div>
        <div className=" mb-4 w-[100%] md:w-[48%] lg:w-[24%] flex flex-col bg-slate-950 text-white justify-center items-center h-[200px]">
        <span class="icon-office my-4 text-3xl" ></span>
          <Link href={"#"}>طراحی سایت شرکتی ارزان</Link>
        </div>
        <div className="mb-4 w-[100%] md:w-[48%] lg:w-[24%] flex flex-col bg-slate-950 text-white justify-center items-center h-[200px]">
        <span class="icon-credit-card my-4 text-3xl"></span>
          <Link href={"#"}>طراحی سایت اقتصادی ارزان</Link>
        </div>
        {/* <div className="mb-4 w-[100%] md:w-[48%] lg:w-[24%] flex flex-col bg-slate-950 text-white justify-center items-center h-[200px]">
        <span class="icon-paint-format my-4 text-3xl"></span>
        
          <Link href={"#"}>طراحی سایت اختصاصی ارزان</Link>
        </div> */}
      </div>
    </div>
  );
}
