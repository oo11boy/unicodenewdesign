"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
const [openmenu,setopenmenu]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header fixed top-0 flex justify-between items-center w-full p-5 ${
        isScrolled ? "blur-header" : ""
      }`}
    >
      <div className="md:flex hidden">
        <Image

          src={"/img/logo.webp"}
          width={50}
          height={100}
          alt="سفارش طراحی سایت ارزان"
          title="طراحی سایت ارزان"
        />
      </div>
    <ul className={`${openmenu ? "menuul":"d-mob-none"} ${(openmenu || isScrolled )?"text-black":(!openmenu || isScrolled) ? "text-white" :"text-black"}  flex  gap-10 text-lg  items-center`}>
        <li>خانه</li>
        <li>طراحی سایت</li>
        <li>وبلاگ</li>
      </ul>
    {!openmenu ? <svg onClick={()=>setopenmenu(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" d-desk-none size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
:
<svg  onClick={()=>setopenmenu(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconclosemenu">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

}  

      <div className="flex items-center border rounded-full border-black">
        <p className="text-black mr-2">09354502369</p>
        <button className="bg-black text-white p-1 mr-2 rounded-full">
          ثبت درخواست
        </button>
      </div>
    </header>
  );
}
