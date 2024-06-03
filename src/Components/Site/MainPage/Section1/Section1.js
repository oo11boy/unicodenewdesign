import React from "react";
import "./Section1.css";
import Image from "next/image";
export default function Section1({ title, undertitle,bg }) {
  return (
    <div  className={`${bg} sec1 p-5 flex flex-col `}>
      <Image
        title="طراحی سایت ارزان"
        alt="سفارش طراحی سایت ارزان"
        src={"/img/logo.webp"}
        width={150}
        className="mb-6"
        height={100}
      />
      <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl md:text-4xl leading-snug sm:w-full md:w-3/4 text-center mb-6">
        {title ? title : " طراحی سایت ارزان با یونیکد"}
      </h2>
      <p className="text-white text-lg text-center w-full">
        {undertitle
          ? undertitle
          : ` یونیکد مرجع طراحی انواع سایت های مختلف با قیمتی ارزان و کیفیتی متاسب
      میتواند شما را در بهبود کسب و کارتان همراهی نماید`}
      </p>
      <div className="md:flex hidden mt-10 justify-between items-center w-3/4 sm:flex-col md:flex-row">
        <div className="border border-white p-3 flex flex-col items-center justify-center text-white w-[30%] h-[150px]">
          <h4 className="text-3xl pb-4">+8</h4>
          <h4 className="text-2xl text-center">سابقه کاری در طراحی سایت</h4>
        </div>
        <div className="border border-white p-3 flex flex-col items-center justify-center text-white w-[30%] h-[150px]">
          <h4 className="text-3xl pb-4">+120</h4>
          <h4 className="text-2xl text-center">پروژه موفق به زبان فارسی</h4>
        </div>
        <div className="border border-white p-3 flex flex-col items-center justify-center text-white w-[30%] h-[150px]">
          <h4 className="text-3xl pb-4">+100</h4>
          <h4 className="text-2xl text-center">مشتری راضی</h4>
        </div>
      </div>
    </div>
  );
}
