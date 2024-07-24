import React from 'react'
import { API_URL } from '../../../../../ApiUrl';

export async function getdata() {
    // Fetch data from external API
    const res = await fetch(`${API_URL}/getcat`, { cache: "no-cache" });
    const data = await res.json();
  
    // Pass data to the page via props
    return data;
  }
  


export default async function GetCat() {
    
    const datacat = await getdata();

  return (
    <div class="w-full mt-6 ">
    <div class="p-4 border-t border-b md:border md:rounded">
    <p  class="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded"
      >دسته بندی مطالب</p>
          <div className="flex flex-col gap-4 pt-4" >
            {datacat.map((item)=>{
                return <a key={item.key} className='pt-3 cursor-pointer' title={item.text} href={`../cats/${item.link}`}>{item.text}</a>
            })}

      </div>
    </div>
    </div>
  )
}
