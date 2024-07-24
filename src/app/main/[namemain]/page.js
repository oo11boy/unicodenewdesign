import Footer from "@/Components/Site/OtherComponents/Footer/Footer";
import Header from "@/Components/Site/OtherComponents/Header/Header";
import ToHtml from "@/Components/ToHtml";
import React from "react";
import { API_URL } from "../../../../ApiUrl";
import { redirect } from "next/navigation";
export async function getdata() {
  // Fetch data from external API
  const res = await fetch(`${API_URL}/getmaincat`, { cache: "no-cache" });
  const data = await res.json();

  // Pass data to the page via props
  return data;
}



export async function generateMetadata({ params }) {
    const { namemain } = params;
    const dataposts = await getdata();
  
    const findpost = await dataposts.filter((item) => item.link === namemain)[0];
    !findpost && redirect("../");
    return {
      title: findpost.title,
      description: findpost.description,
      keywords: findpost.keyword,
      author: "unicodewebdeisgn",
      openGraph: {
        title: findpost.title || findpost.title,
        description: findpost.description,
        image: findpost.mainimg,
        url: `https://unicodewebdesign.com/main/${findpost.link}`,
      },
      twitter: {
        title: findpost.title,
        description: findpost.description,
        image: findpost.mainimg,
      },
    };
  }

export default async function page({ params }) {
  const { namemain } = params;
  const datamaincat = await getdata();

  const findmaincat = await datamaincat.filter(
    (item) => item.link === namemain
  )[0];


  return (
    <>
      <Header />

      <div className="w-[95%] my-[30%] md:my-[10%] mainarticle mx-auto  border border-black p-3 sm:p-10 ">
      <h1 className="bg-black p-2 text-white rounded-lg text-center">
                {findmaincat.title}
              </h1>
              <img className="w-[100%!important] h-[200px!important] md:h-[400px!important]"  src={findmaincat.mainimg} alt={findmaincat.title} title={findmaincat.title} />
          
              <ToHtml html={findmaincat.text} />
              <div className="qdiv ">
                        <a href="../" title="مشاهده هزینه و نمونه کارهای طراحی سایت ارزان">
                        <p className="text-2xl bg-red-600 p-3 text-white text-center ">جهت مشاهده نمونه کار ها و هزینه طراحی سایت ارزان کلیک کنید.</p>
   
                        </a>
              </div>
      </div>
   
      <Footer />
    </>
  );
}
