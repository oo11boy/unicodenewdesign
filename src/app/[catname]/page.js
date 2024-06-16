import Comments from "@/Components/Site/MainPage/Comments/Comments";
import Faq from "@/Components/Site/MainPage/Faq/Faq";
import Company_More from "@/Components/Site/MainPage/MoreContent/Company_More";
import GoodPrice_More from "@/Components/Site/MainPage/MoreContent/GoodPrice_More";
import MoreContent from "@/Components/Site/MainPage/MoreContent/MoreContent";
import Store_More from "@/Components/Site/MainPage/MoreContent/Store_More";
import RoadMap from "@/Components/Site/MainPage/RoadMap/RoadMap";
import Section1 from "@/Components/Site/MainPage/Section1/Section1";
import Section2 from "@/Components/Site/MainPage/Section2/Section2";
import Section3 from "@/Components/Site/MainPage/Section3/Section3";
import SelectCategory from "@/Components/Site/MainPage/SelectCategory/SelectCategory";
import Footer from "@/Components/Site/OtherComponents/Footer/Footer";
import Header from "@/Components/Site/OtherComponents/Header/Header";
import CompanyTable from "@/Components/Site/OtherComponents/TablePrice/CompanyTable";
import StoreTable from "@/Components/Site/OtherComponents/TablePrice/StoreTable";
import Demos from "@/Components/Site/SinglePage/Demos/Demos";
import "../icons.css";
import { company_design, goodprice_design, pez_design, store_design } from "@/Db";
import React from "react";
import { redirect } from "next/navigation";
import Pez_More from "@/Components/Site/MainPage/MoreContent/Pez_More";

export async function generateMetadata({ params }) {
  const { catname } = params;

  return {
    title:
      catname == "store_design"
        ? store_design.metatitle
        : catname == "company_design"
        ? company_design.metatitle
        : catname == "goodprice_design"
        ? goodprice_design.metatitle 
        : catname=="pez_design"
        ? pez_design.metatitle
        : "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان",

    description:
      catname == "store_design"
        ? store_design.undertitlesec1
        : catname == "company_design"
        ? company_design.undertitlesec1
        : catname == "goodprice_design"
        ? goodprice_design.undertitlesec1 
        : catname=="pez_design"
        ? pez_design.undertitleh1
        : "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",

    keywords:
      catname == "store_design"
        ? store_design.keywords
        : catname == "company_design"
        ? company_design.keywords
        : catname == "goodprice_design"
        ? goodprice_design.keywords
        : catname=="pez_design"
        ? pez_design.keywords
        : "طراحی سایت ارزان ، خرید سایت ارزان ، طراحی سایت شرکتی ارزان ، طراحی سایت فروشگاهی ارزان ، طراحی سایت شخصی رزومه ای ارزان ، سفارش طراحی سایت ارزان ، خرید سایت فروشگاهی",
    author: "unicodewebdeisgn",
    openGraph: {
      title:
        catname == "store_design"
          ? store_design.metatitle
          : catname == "company_design"
          ? company_design.metatitle
          : catname == "goodprice_design"
          ? goodprice_design.metatitle
          : catname=="pez_design"
          ? pez_design.metatitle
          : "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان",

      description:
        catname == "store_design"
          ? store_design.undertitlesec1
          : catname == "company_design"
          ? company_design.undertitlesec1
          : catname == "goodprice_design"
          ? goodprice_design.undertitlesec1
          : catname=="pez_design"
          ? pez_design.undertitlesec1
          
          : "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",

      image: "../img/logo.webp",
    },
    twitter: {
      title:
        catname == "store_design"
          ? store_design.metatitle
          : catname == "company_design"
          ? company_design.metatitle
          : catname == "goodprice_design"
          ? goodprice_design.metatitle
          : catname=="pez_design"
          ? pez_design.metatitle
          : "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان",

      description:
        catname == "store_design"
          ? store_design.undertitlesec1
          : catname == "company_design"
          ? company_design.undertitlesec1
          : catname == "goodprice_design"
          ? goodprice_design.undertitlesec1
          : catname=="pez_design"
          ? pez_design.undertitlesec1
          : "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",

      image: "../img/logo.webp",
    },
  };
}

export default function page({ params }) {
  const { catname } = params;
  catname !== "store_design" &&
    catname !== "company_design" &&
    catname !== "pez_design" &&
    catname !== "goodprice_design" &&
    redirect("../");
  return (
    <>
      <Header />
      {catname === "store_design" && (
        <Section1
          title={store_design.titlesec1}
          undertitle={store_design.undertitlesec1}
          bg={"storebg"}
        />
      )}

      {catname === "company_design" && (
        <Section1
          title={company_design.titlesec1}
          undertitle={company_design.undertitlesec1}
          bg={"companybg"}
        />
      )}
        {catname === "pez_design" && (
        <Section1
          title={pez_design.titlesec1}
          undertitle={pez_design.undertitlesec1}
          bg={"pzbg"}
        />
      )}

      {catname === "goodprice_design" && (
        <Section1
          title={goodprice_design.titlesec1}
          undertitle={goodprice_design.undertitlesec1}
          bg={"goodpricebg"}
        />
      )}

      {catname === "store_design" && (
        <Section2
          titleh1={store_design.titleh1}
          undertitleh1={store_design.undertitleh1}
          img={"storesvg"}
        />
      )}
     {catname === "pez_design" && (
        <Section2
          titleh1={pez_design.titleh1}
          undertitleh1={pez_design.undertitleh1}
          img={"pezsvg"}
        />
      )}
      {catname === "company_design" && (
        <Section2
          titleh1={company_design.titleh1}
          undertitleh1={company_design.undertitleh1}
          img={"companysvg"}
        />
      )}
      {catname === "goodprice_design" && (
        <Section2
          titleh1={goodprice_design.titleh1}
          undertitleh1={goodprice_design.undertitleh1}
          img={"goodpricesvg"}
        />
      )}

      {catname == "store_design" && <Section3 bg={"storebg"} />}
      {catname == "company_design" && <Section3 bg={"companybg"} />}
      {catname == "goodprice_design" && <Section3 bg={"goodpricebg"} />}
      {catname == "pez_design" && <Section3 bg={"pzbg"} />}
      {catname == "store_design" && <StoreTable />}
      {catname == "company_design" && (
        <CompanyTable title={"شرکتی"} price1={4} price2={6} hard={3} />
      )}
         {catname == "pez_design" && (
        <CompanyTable title={"پزشکی و دندان پزشکی"} price1={4} price2={6} hard={3} />
      )}
      {catname == "goodprice_design" && (
        <CompanyTable title={"شخصی و رزومه"} price1={2} price2={4} hard={1} />
      )}
      <Demos catname={catname} />
      <RoadMap />
      <Faq />

      {catname == "store_design" && (
        <MoreContent>
          <Store_More />
        </MoreContent>
      )}

      {catname == "company_design" && (
        <MoreContent>
          <Company_More />
        </MoreContent>
      )}
      {catname == "goodprice_design" && (
        <MoreContent>
          <GoodPrice_More />
        </MoreContent>
      )}


{catname == "pez_design" && (
        <MoreContent>
          <Pez_More />
        </MoreContent>
      )}

      <SelectCategory />
      <Comments />
      <Footer />
    </>
  );
}
