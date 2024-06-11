"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('login') !== "true") {
      router.push('../');
    }
  }, [router]);
const exithandler=()=>{
    localStorage.removeItem('login')
}
  return (
    <>
    <button className='absolute z-[999] top-0' onClick={exithandler}>exit</button>
    </>
  );
}
