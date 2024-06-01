
import Image from "next/image";
import React from "react";

export default function CommentView({ step, nexthandler, prevhandler }) {
 const commentmainpage=[
    {id:1, title:"شاهین کرم زاده",sub:"مدیر سایت دکه", text:"خدمات طراحی سایت شما واقعاً عالی بود! تیم شما با دقت به جزئیات کار کرده و نتیجه‌ی نهایی بسیار حرفه‌ای و جذاب بوده است.", img:"https://avatar.iran.liara.run/public/5"},
    {id:2, title:"آرمان رضایی",sub:"مدیر سایت پلیمر پرگاس" , text:"از طراحی سایت ارزان شما بسیار راضی هستم. قیمت مناسب، کیفیت بالا و پشتیبانی فوق‌العاده سریع. از شما ممنونم!", img:"https://avatar.iran.liara.run/public/45"},
    {id:3, title:"سینا حجت زاده",sub:"مدیر سایت اطلس موویز", text:"تیم طراحی سایت شما بسیار حرفه‌ای عمل کرده‌اند. ارتباط مداوم و شفافیت در هماهنگی‌ها، تجربه‌ی کاربری عالی و طراحی زیبا، همه‌ی این‌ها باعث شده تا برند من به یک سطح جدید از حضور آنلاین برسد.", img:"https://avatar.iran.liara.run/public/19"},
    {id:4, title:"نیلوفر بخشی",sub:"مدیر سایت نیلی شاپ", text:"طراحی سایت از شما بسیار حرفه‌ای و با کیفیت بوده است. بهترین قیمت را برای خدماتی از این کیفیت پیدا کردم. با امکانات پیشرفته و طراحی زیبا، حالا برند من از یک سایت جذاب برخوردار است.", img:"https://avatar.iran.liara.run/public/67"},
   ]
  
  return (
    <div className="commentmain w-[100%] lg:w-[50%]">
      <span class="icon-arrow-right p-1 sm:p-3" onClick={prevhandler}></span>

      {commentmainpage.map((item) => {
        return (
          step == item.id && (
            <div className="itemcomment" key={item.id}>
              <div className="top1comment">
                <div>
                  <Image
                    width={50}
                    height={50}
                    src={item.img}
                    alt="طراحی سایت ارزان"
                  />
                </div>
                <div>
                  <h3 className="text-sm sm:text-2xl ">{item.title}</h3>
                  <p className="text-sm sm:text-xl">{item.sub}</p>
                </div>
              </div>
              <div className="undermaincomment">
                <p className="textmaincomment h-[140px] md:h-[80px]">{item.text}</p>
                <div className="stars">
                  <span class="icon-star-full"></span>
                  <span class="icon-star-full"></span>
                  <span class="icon-star-full"></span>
                  <span class="icon-star-full"></span>
                  <span class="icon-star-full"></span>
                </div>
              </div>
            </div>
          )
        );
      })}
      <span class="icon-arrow-left p-1 sm:p-3" onClick={nexthandler}></span>
    </div>
  );
}
