"use client";
import React, { useState } from "react";

import CommentView from "./CommentView";

export default function CommentSlider() {
  const commentmainpage=[
    {id:1, title:"شاهین کرم زاده",sub:"مدیر سایت دکه", text:"خدمات طراحی سایت شما واقعاً عالی بود! تیم شما با دقت به جزئیات کار کرده و نتیجه‌ی نهایی بسیار حرفه‌ای و جذاب بوده است.", img:"https://www.svgrepo.com/show/81103/avatar.svg"},
    {id:2, title:"آرمان رضایی",sub:"مدیر سایت پلیمر پرگاس" , text:"از طراحی سایت ارزان شما بسیار راضی هستم. قیمت مناسب، کیفیت بالا و پشتیبانی فوق‌العاده سریع. از شما ممنونم!", img:"https://unicodewebdesign.com/wp-content/uploads/2019/07/r.webp"},
    {id:3, title:"سینا حجت زاده",sub:"مدیر سایت اطلس موویز", text:"تیم طراحی سایت شما بسیار حرفه‌ای عمل کرده‌اند. ارتباط مداوم و شفافیت در هماهنگی‌ها، تجربه‌ی کاربری عالی و طراحی زیبا، همه‌ی این‌ها باعث شده تا برند من به یک سطح جدید از حضور آنلاین برسد.", img:"https://unicodewebdesign.com/wp-content/uploads/2019/07/team_03-e1700842143507.webp"},
    {id:4, title:"نیلوفر بخشتی",sub:"مدیر سایت نیلی شاپ", text:"طراحی سایت از شما بسیار حرفه‌ای و با کیفیت بوده است. بهترین قیمت را برای خدماتی از این کیفیت پیدا کردم. با امکانات پیشرفته و طراحی زیبا، حالا برند من از یک سایت جذاب برخوردار است.", img:"	https://unicodewebdesign.com/wp-content/uploads/2019/07/team_04.webp"},
   ]
  const [step, setstep] = useState(1);
  const nexthandler = () => {
    setstep((prevstep) => prevstep + 1);
    if (commentmainpage.length == step) {
      setstep(1);
    }
    
  };
  const prevhandler = () => {
    setstep((prevstep) => prevstep - 1);
    if (step == 1) {
      setstep(commentmainpage.length);
    }
  };
  return (
    <CommentView
      step={step}
      nexthandler={nexthandler}
      prevhandler={prevhandler}
    />
  );
}
