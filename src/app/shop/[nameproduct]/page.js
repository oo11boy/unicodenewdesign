import Footer from "@/Components/Site/OtherComponents/Footer/Footer";
import Header from "@/Components/Site/OtherComponents/Header/Header";
import React from "react";
import { API_URL } from "../../../../ApiUrl";
import { redirect } from "next/navigation";
import ToHtml from "@/Components/ToHtml";
export async function getdata() {
  // Fetch data from external API
  const res = await fetch(`${API_URL}/getproduct`, { cache: "no-cache" });
  const data = await res.json();

  return data;
}


export async function generateMetadata({ params }) {
  const { nameproduct } = params;
  const dataposts = await getdata();

  const findpost = await dataposts.filter(
    (item) => item.link == nameproduct
  )[0];
  return {
    title: findpost.title,
    description: findpost.descrption,
    keywords: findpost.title,
    author: "unicodewebdeisgn",
    openGraph: {
      title: findpost.title || findpost.title,
      description: findpost.descrption,
      image: findpost.mainimg,
      url: `https://unicodewebdesign.com/shop/${findpost.link}`,
    },
    twitter: {
      title: findpost.title,
      description: findpost.descrption,
      image: findpost.mainimg,
    },
  };
}


export default async function page({ params }) {

  const { nameproduct } = params;
  const dataposts = await getdata();

  const findpost = await dataposts.filter(
    (item) => item.link == nameproduct
  )[0];
  !findpost && redirect("../shop");
  return (
    <div>
      <Header />
      <section class="py-8 w-[90%] mx-auto mt-[100px] bg-white md:py-16 antialiased">
        <div class=" px-4 mx-auto 2xl:px-0">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div>
              <img
                class="w-full rounded-lg"
                src={findpost.mainimg}
                alt={findpost.title}
                title={findpost.title}
              />
            </div>

            <div class="mt-6 sm:mt-8 lg:mt-0">
              <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl ">
                {findpost.title}
              </h1>
              <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                
                
                {findpost.price==0 ?
                  'رایگان'
                :
                  findpost.price +' هزار تومان'
                }
                </p>

                <div class="flex items-center gap-2 mt-2 sm:mt-0">
                  <div class="flex items-center gap-1">
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                
                {findpost.price==0 ?
                <a
                href={findpost.viplink}
                target="_blank"
                title={findpost.title}
                class="text-white mt-4 sm:mt-0 bg-black  focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 :bg-primary-600  focus:outline-none  flex items-center justify-center"
                role="button"

              >
                <svg
                  class="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                دریافت رایگان در تلگرام
              </a>
              :

              <form action="https://payunicode.liara.run/buy" method="post">
              <input
                type="number"
                className="hidden"
                value={findpost.payprice}
                name="amount"
                id="amount"
                required
              />
                    <input
                type="number"
                className="hidden"
                value={findpost.id}
                name="idproduct"
                id="idproduct"
                required
              />
              <input
              className="p-2 m-2 rounded-md border border-black"
                type="number"
                name="phone"
                id="phone"
                placeholder="شماره موبایل"
                required
              />

              <button
                class="text-white mt-4 sm:mt-0 bg-black  focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 :bg-primary-600  focus:outline-none  flex items-center justify-center"
                role="button"
              >
                <svg
                  class="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                خرید از درگاه بانکی مستقیم
              </button>
            </form>

              }
             
              </div>

              <hr class="my-6 md:my-8 border-gray-200 " />

              <p class="mb-6 text-gray-500 ">
                {findpost.descrption}
              </p>
            </div>
          </div>
        </div>

        <div class="mb-4 border-b border-gray-200 ">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li class="me-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                توضیحات
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div
            class=" p-4 rounded-lg bg-gray-50 "
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <ToHtml  html= {findpost.text}/>
           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
