"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./Header.css";
import Link from "next/link";

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
      className={`header fixed  top-0 flex justify-between items-center w-full p-5 ${
        isScrolled ? "blur-header bg-white" : "bg-[#333]"
      }`}
    >
      <div className="lg:flex hidden">
        <Image

          src={"/img/logo.webp"}
          width={50}
          height={100}
          alt="سفارش طراحی سایت ارزان"
          title="طراحی سایت ارزان"
        />
      </div>
    <ul className={`${openmenu ? "menuul":"d-mob-none"} ${(openmenu || isScrolled )?"text-black":(!openmenu || isScrolled) ? "text-white" :"text-black"}  flex  gap-10 text-lg  items-center`}>
        <li><Link href={'../'} title="صفحه اصلی خرید سایت ارزان">خانه</Link></li>
        <li>
<Link  href={'../store_design'} title="خرید سایت فروشگاهی"> طراحی سایت فروشگاهی</Link>
         </li>
         <li>
<Link  href={'../company_design'} title="خرید سایت شرکتی"> طراحی سایت شرکتی</Link>
         </li>
         <li>
<Link  href={'../goodprice_design'} title="خرید سایت رزومه ای شخصی"> طراحی سایت رزومه ای</Link>
         </li>
        <li>
          <Link href={'../Blog'} title="وبلاگ">وبلاگ</Link>
          </li>
      </ul>
    {!openmenu ? <svg onClick={()=>setopenmenu(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`d-desk-none size-6 ${isScrolled ? 'text-black' : 'text-white'} `}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
:
<svg  onClick={()=>setopenmenu(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconclosemenu">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

}  

      <div className={`flex items-center border rounded-full ${isScrolled ? 'border-black' : 'border-white'}`}>
        <p className={`${isScrolled ? 'text-black' : 'text-white'} mr-2`}>09354502369</p>
        <button className="bg-black text-white p-1 mr-2 rounded-full">
          ثبت درخواست
        </button>
      </div>
    </header>
  );
}
