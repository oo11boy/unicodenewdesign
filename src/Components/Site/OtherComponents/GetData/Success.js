import React from 'react'
import { API_URL } from '../../../../../ApiUrl';
export async function getdata() {
    // Fetch data from external API
    const res = await fetch(`${API_URL}/getproduct`, { cache: "no-cache" });
    const data = await res.json();
  
    return data;
  }
export default async function Success({infopay}) {
  
    const dataposts = await getdata();

    const findpost = await dataposts.filter(
      (item) => item.id == infopay.description
    )[0];

  return (
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <div class="mx-auto max-w-2xl px-4 2xl:px-0">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">از خرید شما متشکریم</h2>
       <p>
        سفارش شما تایید شد برای دسترسی به محتوای خریداری شده از طریق لینک زیر
        که مربوط به تلگرام است به محتویات خریداری شده دسترسی پیدا کنید.
        </p>
        <div class="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
            <dl class="sm:flex items-center justify-between gap-4">
                <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">تاریخ</dt>
                <dd class="font-medium text-gray-900 dark:text-white sm:text-end">{ Date()}</dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
                <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">لینک دانلود</dt>
                <dd class="font-medium text-gray-900 dark:text-white sm:text-end"><a className='text-3xl text-blue-900' href={findpost.viplink}>دریافت محتویات خریداری شده از تلگرام</a></dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
                <dt class="font-normal mb-1 sm:mb-0 text-3xl text-gray-500 dark:text-gray-400">کد تراکنش (ذخیره شود)</dt>
                <dd class="font-medium text-gray-900 text-3xl dark:text-white sm:text-end">{infopay.orderId}</dd>
            </dl>
          
        </div>
        <div class="flex items-center space-x-4">
            <a href={findpost.viplink} class="text-white bg-black hover:bg-primary-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5  dark:hover:bg-primary-700 focus:outline-none ">دریافت از تلگرام</a>
         
           </div>
           <p className='my-3 text-2xl'>همچنین میتوانید لینک زیر را کپی کنید و در تلگرام باز کنید:</p>
    
        <p className='text-3xl text-blue-900'>{findpost.viplink}</p>
    </div>
  </section>
  )
}
