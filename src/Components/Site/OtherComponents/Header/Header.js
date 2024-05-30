import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className=' fixed top-0 bg-blue-700 flex justify-between items-center w-full p-5'>
        <div >
            <Image src={'/img/logo.webp'} width={80 } height={100} />
        </div>
        
            <ul className='flex gap-3 text-white items-center'>
                <li>خانه</li>
                <li>طراحی سایت</li>
                <li>وبلاگ</li>
            </ul>
       
        <div className='flex items-center border rounded-full border-white'>
            <p className='text-white mr-2'>09354502369</p>
            <button className='bg-white text-black p-1 mr-2 rounded-full'>ثبت درخواست</button>
        </div>
    </header>
  )
}
