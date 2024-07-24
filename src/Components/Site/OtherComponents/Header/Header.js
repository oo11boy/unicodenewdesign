"use client";
import Image from "next/image";
import React, {  useState } from "react";
import "./Header.css";
import Link from "next/link";
import ModalStepper from "../ModalStepper/ModalStepper";

export default function Header() {

  const [showmodal, setshowmodal] = useState(false);
  const [openmenu, setopenmenu] = useState(false);

  return (
    <>
      <header
        className={`header fixed  top-0 flex justify-between items-center w-full p-5 bg-[#333]`}
      >
        <div className="lg:flex hidden">
          <Link href={"../"} title="طراحی سایت یونیکد">
            <Image
              src={"/img/logo.webp"}
              width={50}
              height={100}
              alt="سفارش طراحی سایت ارزان"
              title="طراحی سایت ارزان"
            />
          </Link>
        </div>
        <ul
          className={`${openmenu ? "menuul text-black" : "d-mob-none text-white"} 
           flex  gap-10 text-lg  items-center`}
        >
          <li>
            <Link href={"../"} title="صفحه اصلی خرید سایت ارزان">
              خانه
            </Link>
          </li>
          <li>
            <Link href={"../store_design"} title="خرید سایت فروشگاهی">
              {" "}
              طراحی سایت فروشگاهی
            </Link>
          </li>
          <li>
            <Link href={"../company_design"} title="خرید سایت شرکتی">
              {" "}
              طراحی سایت شرکتی
            </Link>
          </li>
          <li>
            <Link href={"../goodprice_design"} title="خرید سایت رزومه ای شخصی">
              {" "}
              طراحی سایت رزومه ای
            </Link>
          </li>

          <li>
            <Link href={"../Blog"} title="وبلاگ">
              وبلاگ
            </Link>
          </li>
          <li>
            <Link href={"../shop"} title="وبلاگ">
              فروشگاه
            </Link>
          </li>
        </ul>
        {!openmenu ? (
          <svg
            onClick={() => setopenmenu(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={`d-desk-none size-6 text-white`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setopenmenu(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 iconclosemenu"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}

        <div
          className={`flex items-center border rounded-full border-white`}
        >
          <p className={`text-white mr-2`}>
            09354502369
          </p>
          <button
            onClick={() => setshowmodal(true)}
            className="bg-blue-700  cursor-pointer text-white py-1 px-4 mr-2 rounded-full"
          >
            ثبت درخواست
          </button>
        </div>
        {showmodal && <ModalStepper setshowmodal={setshowmodal} />}
      </header>
    </>
  );
}
