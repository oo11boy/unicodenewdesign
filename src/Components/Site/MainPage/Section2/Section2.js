import Image from "next/image";
import Link from "next/link";
import React from "react";
import './Section2.css'
export default function Section2() {
  return (
    <section className="flex Section2 flex-col-reverse md:flex-row justify-between items-start md:py-[100px] p-12">
      <div className="w-full md:w-1/2 ">
        <h1 className=" text-lg mt-10 md:mt-0 sm:text-3xl font-semibold mb-5 flex items-center">
          سفارش طراحی سایت ارزان و با کیفیت در سراسر تهران و ایران
        </h1>

        <h2 className="w-11/12 text-sm md:text-2xl text-justify mb-6  ">
          شرکت یونیکد با افتخار خدمات سفارش طراحی سایت ارزان را به مشتریان خود
          ارائه می‌دهد. اگر به دنبال یک طراحی حرفه‌ای و باکیفیت با قیمت مناسب
          هستید، یونیکد بهترین گزینه برای شماست. تیم ما متشکل از طراحان و
          برنامه‌نویسان با تجربه است که با استفاده از آخرین فناوری‌ها و
          استانداردهای روز، وب‌سایتی منحصر به فرد و کاربرپسند برای شما طراحی
          می‌کنند.
        </h2>
        <Link
          className="border bg-blue-700 text-white rounded-lg py-2 px-8 text-lg md:text-xl"
          href={"#"}
        >
          مشاهده تعرفه ها
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          width={900}
          height={100}
          src="./img/sec2svg.svg"
          alt="طراحی سایت ارزان"
          title="طراحی سایت ارزان"
        />
      </div>
    </section>
  );
}
