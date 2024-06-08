"use client"
import Link from 'next/link'
import React from 'react'
import { API_URL } from '../../../../../ApiUrl'

export async function getdata() {
  // Fetch data from external API
  const res = await fetch(`${API_URL}/getposts`,{cache:"no-cache"})
  const data = await res.json()

  // Pass data to the page via props
  return data
}

export default async function Posts() {
  const dataposts = await getdata()

  // Get the last 3 posts
  const lastThreePosts = dataposts.slice(-3)

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h3 className="text-2xl font-bold md:text-4xl md:leading-tight">آخرین پست ها</h3>
        <p className="mt-1 text-gray-600">جدیدترین پست های سایت را میتوانید در اینجا مشاهده نمایید.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lastThreePosts.map((item) => (
          <Link key={item.id} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5" href={`../Blog/${item.link}`}>
            <div className="aspect-w-16 aspect-h-11">
              <img className="w-full object-cover rounded-xl" src={item.mainimg} alt={item.metatitle} />
            </div>
            <div className="my-6">
              <h2 className="text-xl font-semibold text-gray-800">{item.h1title}</h2>
              <p className="mt-5 text-gray-600">{item.shorttext}</p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img className="size-8 rounded-full" src="../img/logo.webp" alt="Image Description" />
              <div>
                <h5 className="text-sm text-gray-800">یونیکد</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="../Blog">
          مشاهد سایر پست ها
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </Link>
      </div>
    </div>
  )
}