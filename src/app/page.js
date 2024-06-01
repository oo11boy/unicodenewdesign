import Section1 from "@/Components/Site/MainPage/Section1/Section1";
import Section2 from "@/Components/Site/MainPage/Section2/Section2";
import Section3 from "@/Components/Site/MainPage/Section3/Section3";
import Header from "@/Components/Site/OtherComponents/Header/Header";
import React from "react";
import "./icons.css";
import RoadMap from "@/Components/Site/MainPage/RoadMap/RoadMap";
import SelectCategory from "@/Components/Site/MainPage/SelectCategory/SelectCategory";
import Comments from "@/Components/Site/MainPage/Comments/Comments";
import Price from "@/Components/Site/MainPage/Price/Price";
import Faq from "@/Components/Site/MainPage/Faq/Faq";
import MoreContent from "@/Components/Site/MainPage/MoreContent/MoreContent";
import Footer from "@/Components/Site/OtherComponents/Footer/Footer";
export default function page() {
  return (
    <div>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Price/>
        <RoadMap />
        <SelectCategory />
        <Comments />
       <Faq/>
       <MoreContent/>
       <Footer/>
      </main>
    </div>
  );
}
