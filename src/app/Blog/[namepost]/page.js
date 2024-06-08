import Posts from '@/Components/Site/MainPage/Posts/Posts'
import Footer from '@/Components/Site/OtherComponents/Footer/Footer'
import Header from '@/Components/Site/OtherComponents/Header/Header'
import Link from 'next/link'
import React from 'react'
import { API_URL } from '../../../../ApiUrl'
import { redirect } from 'next/navigation'
import ToHtml from '@/Components/ToHtml'

export async function getdata() {
  // Fetch data from external API
  const res = await fetch(`${API_URL}/getposts`,{cache:'no-cache'})
  const data = await res.json()

  // Pass data to the page via props
  return data
}
export async function generateMetadata({ params }) {
  const { namepost } = params;
  const dataposts = await getdata();

  const findpost = await dataposts.filter((item) => item.link === namepost)[0];

  return {
    title: findpost.metatitle,
    description: findpost.metadescription,
    keywords: findpost.keyword,
    author: "unicodewebdeisgn",
    openGraph: {
      title: findpost.h1title || findpost.metatitle,
      description:  findpost.metadescription,
      image: findpost.mainimg,
    },
    twitter: {
    
      title:  findpost.metatitle,
      description:findpost.metadescription,
      image: findpost.mainimg,
    },
  };
}



export default async function page({params}) {
  const {namepost}=params
  const dataposts=await getdata()
 
  const findpost=await dataposts.filter((item)=>item.link==namepost)[0]
console.log(namepost)
!findpost && redirect('../') 
  return (
 <>
   <Header/>
    <div class="w-[90%] my-[10%] mx-auto">

        <main class="mt-10">
    
          <div class="mb-4 md:mb-0 w-full mx-auto relative">
            <div class="px-4 lg:px-0">
              <h1 class="text-4xl font-semibold text-gray-800 leading-tight">
           
               
    {findpost.h1title}
              </h1>
              <Link
                href="../"
                class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                {findpost.keyword}
              </Link>
            </div>
    
            <img src={findpost.mainimg} alt={findpost.metatitle} class="w-full object-cover lg:rounded"/>
          </div>
    
          <div class="flex flex-col lg:flex-row lg:space-x-12">
    
            <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
        <ToHtml html={findpost.text}/> 
            </div>
    
            <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div class="p-4 border-t border-b md:border md:rounded">
                <div class="flex py-2">
                  <img src="../img/logo.webp"
                    class="h-10 w-10 rounded-full ml-2 object-cover" />
                  <div>
                    <p class="font-semibold text-gray-700 text-sm"> طراحی سایت ارزان با یونیکد </p>
                    <p class="font-semibold text-gray-600 text-xs"> unicodewebdesign </p>
                  </div>
                </div>
                <p class="text-gray-700 py-3">
                اگر به دنبال خرید سایت ارزان و با کیفیت بالا برای خودتان ، شرکتتان و یا کسب و کارتان هستید تیم یونیکد با بیش از 8 سال سابقه طراحی سایت میتوانید به شما در ایجاد سایت کمک کند.
                  </p>
                <Link href={'../'} title='سفارش طراحی سایت ارزان' class="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                  اطلاعات بیشتر 
                  <i class='bx bx-user-plus ml-2' ></i>
                </Link>
              </div>
            </div>
    
          </div>
        </main>
   
      </div>
      <Posts/>
      <Footer/>
      </>
  )
}
