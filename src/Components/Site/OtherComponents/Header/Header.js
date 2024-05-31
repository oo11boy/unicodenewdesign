"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './Header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header fixed top-0 flex justify-between items-center w-full p-5 ${isScrolled ? 'blur-header' : ''}`}>
      <div>
        <Image src={'/img/logo.webp'} width={50} height={100} />
      </div>
      <ul className='flex gap-10 text-lg text-black items-center'>
        <li>خانه</li>
        <li>طراحی سایت</li>
        <li>وبلاگ</li>
      </ul>
      <div className='flex items-center border rounded-full border-black'>
        <p className='text-black mr-2'>09354502369</p>
        <button className='bg-black text-white p-1 mr-2 rounded-full'>ثبت درخواست</button>
      </div>
    </header>
  )
}
