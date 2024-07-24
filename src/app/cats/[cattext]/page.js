import Footer from '@/Components/Site/OtherComponents/Footer/Footer';
import Header from '@/Components/Site/OtherComponents/Header/Header';
import React from 'react'
import { API_URL } from '../../../../ApiUrl';
export async function getdata() {
    // Fetch data from external API
    const res = await fetch(`${API_URL}/getposts`, { cache: "no-cache" });
    const data = await res.json();
    // Pass data to the page via props
    return data;
  }
  export async function getdatacat() {
    // Fetch data from external API
    const res = await fetch(`${API_URL}/getcat`, { cache: "no-cache" });
    const data = await res.json();
  
    // Pass data to the page via props
    return data;
  }
  
  export async function generateMetadata({ params }) {
    const datacat = await getdatacat();
    const {cattext}=params
    const catinfo = datacat.find(item => item.link==cattext);

        return {
          title: `مطالب مربوط به ${catinfo.text}`,
          description: `اگر به دنبال مطالبی در رابطه با ${catinfo.text} هستید ما این مطالب را برایتان به شکلی منظم در سایتمان قرار داده ایم.`,
          keywords:catinfo.text,
          author: "unicodewebdeisgn",
          openGraph: {
            title: `مطالبی درباره ${catinfo.text}`,
            description: `اگر به دنبال مطالبی در رابطه با ${catinfo.text} هستید ما این مطالب را برایتان به شکلی منظم در سایتمان قرار داده ایم.`,
           
            url: `https://unicodewebdesign.com/cats/${catinfo.text}`,
          },
          twitter: {
            title: `مطالبی درباره ${catinfo.text}`,
            description: `اگر به دنبال مطالبی در رابطه با ${catinfo.text} هستید ما این مطالب را برایتان به شکلی منظم در سایتمان قرار داده ایم.`,
          
          },
        };
      }
  
export default async function page({params}) {
    const {cattext}=params
    const dataposts = await getdata();
    const datacat = await getdatacat();
    const postcat = dataposts.filter(item => item.cat.includes(cattext));

const catinfo = datacat.find(item => item.link==cattext);

  return (
    <>
    <Header />

    <div class="max-w-[85rem] px-4 py-[20%] sm:px-6 lg:px-8 lg:py-[10%] mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h3 class="text-2xl font-bold md:text-4xl md:leading-tight">
     
          مطالب مربوط به {catinfo.text}
        </h3>
        <p class="mt-1 text-gray-600">
          تمام پست های مربوط به {catinfo.text} را میتوانید در اینجا مشاهده نمایید.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {postcat.map((item) => {
          return (
            <a
              class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
              href={`../Blog/${item.link}`}
              title={item.h1title}
            >
              <div class="aspect-w-16 aspect-h-11">
                <img
                  class="w-full object-cover rounded-xl h-[200px]"
                  src={item.mainimg}
                  alt="Image Description"
                />
              </div>
              <div class="my-6">
                <h2 class="text-xl font-semibold text-gray-800">
                  {item.h1title}
                </h2>
                <p class="mt-5 text-gray-600">{item.metadescription}</p>
              </div>
              <div class="mt-auto flex items-center gap-x-3">
                <img
                  class="size-8 rounded-full"
                  src="../img/logo.webp"
                  alt="سفارش طراحی سایت ارزان"
                />
                <div>
                  <h5 class="text-sm text-gray-800">یونیکد</h5>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
    <Footer />
  </>
  )
}
