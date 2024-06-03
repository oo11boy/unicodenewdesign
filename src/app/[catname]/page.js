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
import { company_design, goodprice_design, store_design } from "@/Db";
import React from "react";
export default function page({ params }) {
  const { catname } = params;
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

      {catname === "company_design" && (
        <Section2
          titleh1={company_design.titleh1}
          undertitleh1={company_design.undertitleh1}
          img={'companysvg'}
        />
      )}
      {catname === "goodprice_design" && (
        <Section2
          titleh1={goodprice_design.titleh1}
          undertitleh1={goodprice_design.undertitleh1}
          img={"goodpricesvg"}
        />
      )}

   {catname=="store_design" && <Section3 bg={"storebg"} />}   
   {catname=="company_design" && <Section3 bg={"companybg"} />}   
   {catname=="goodprice_design" && <Section3 bg={"goodpricebg"} />}   
      {catname == "store_design" && <StoreTable />}
      {catname == "company_design" && (
        <CompanyTable title={"شرکتی"} price1={4} price2={6} hard={3} />
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

      <SelectCategory />
      <Comments />
      <Footer />
    </>
  );
}
