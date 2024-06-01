import Image from "next/image";
import React from "react";
import commentimg from "../../../../../public/img/comment.webp";
import "./Comments.css";
import CommentSlider from "./CommentSlider";

export default function Comments() {
  return (
    <div>
      <h3 className="text-center text-xl md:text-4xl font-bold mb-5">نظرات مشتریان</h3>
    <div className=" commentmainpage w-full lg:w-[50%]">
     
      <CommentSlider/>
      <div className="hidden lg:flex">
        <Image
          src={commentimg}
          alt="طراحی سایت ارزان"
          title="نظرات طراحی سایت ارزان"
        />
      </div>
    </div>
    </div>
  );
}
