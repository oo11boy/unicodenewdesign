import Link from 'next/link'
import React from 'react'

export default function PriceMainPage() {
  return (
<div class="pt-5 bg-gray-900" id="pricing">
  <div class="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h3 class="text-base font-semibold leading-7 text-indigo-400">قیمت گذاری</h3>
      <h3 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">تعرفه سفارش طراحی سایت</h3>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">پلن مورد نظر را انتخاب نمایید.</p>
    <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      
      <div class="ring-1 ring-white/50 rounded-3xl p-8 xl:p-10">
        <div class="flex items-center justify-between gap-x-4">
          <h2 id="product1" class="text-lg font-semibold leading-8 text-white">طراحی سایت اقتصادی</h2>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-300">مناسب سایت های شخصی و رزومه ای و کوچک</p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-white">شروع از 2 میلیون تومان</span><span class="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <Link href="../goodprice_design" aria-describedby="product1"
          class="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">اطلاعات بیشتر</Link>
        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>سئو عالی</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>سرعت فوق العاده بالا</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>دامنه رایگان ir</li>

            <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>ریسپانسیو شده</li>
        </ul>
      </div>

      
      <div class="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
        <div class="flex items-baseline justify-between gap-x-4">
          <h2 id="product2" class="text-lg font-semibold leading-8 text-white">طراحی سایت فروشگاهی</h2>
          <p class="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">ویژه</p>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-300">مناسب برای راه اندازی فروشگاه اینترنتی</p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-white">شروع از 6 میلیون تومان</span><span class="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <Link href="../store_design" aria-describedby="product2"
          class="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">اطلاعات بیشتر</Link>
        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>سئو مناسب</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>سرعت بارگذاری فوق العاده</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>دامنه ir رایگان</li>
            <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>تمام امکانات سایت های معروف فروشگاهی مانند دیجیکالا</li>
            <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>ریسپانسیو و مناسب نمایشگر های مختلف</li>
      
        </ul>
      </div>

      
      <div class="ring-1 ring-white/50 rounded-3xl p-8 xl:p-10">
        <div class="flex items-center justify-between gap-x-4">
          <h2 id="product3" class="text-lg font-semibold leading-8 text-white">طراحی سایت شرکتی</h2>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-300"> مناسب برای انواع شرکت های مختلف </p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-white">شروع از 4 میلیون تومان</span><span class="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <Link href="../company_design" aria-describedby="product3"
          class="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">اطلاعات بیشتر</Link>
        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>سئو مناسب</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>سرعت بارگذاری فوق العاده</li>
          <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>دامنه ir رایگان</li>
            <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>طراحی شیک و مناسب</li>
            <li class="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" class="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>ریسپانسیو شده و مناسب نمایشگر های مختلف</li>
        </ul>
      </div>
      
    </div>
  </div>
</div>
  )
}
