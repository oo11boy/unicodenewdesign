import React, { useRef, useState } from "react";

import "./AddPostForm.css";
import { API_URL } from "../../../../ApiUrl";

import Editorme from "./Editor";

export default function AddPostForm() {
  const editor = useRef(null);


  const [formData, setFormData] = useState({
    metatitle: "",
    metadescription: "",
    h1title: "",
    mainimg: "",
    text: "",
    keyword: "",
    link: "",
    shorttext:""
  });
console.log(formData.text)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/addPost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          metatitle: formData.metatitle,
          metadescription: formData.metadescription,
          h1title: formData.h1title,
          mainimg: formData.mainimg,
          text: formData.text,
          keyword: formData.keyword,
          link: formData.link,
          shorttext:formData.shorttext
        }),
      });
      if (response.ok) {
        console.log("Plan added successfully");
        alert("با موفقیت اضافه شد");
        // Optionally, you can reset the form or update the UI
        setFormData({
            metatitle: "",
            metadescription: "",
            h1title: "",
            mainimg: "",
            text: "",
            keyword: "",
            link: "",
            shorttext:""
        });
      } else {
        console.error("Error adding demo");
        alert("خطا در ثبت درخواست");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
console.log(formData)
  return (
    <div>
      <form onSubmit={handleSubmitPost} className="flex flex-col w-full gap-5">
        <input
          className="border border-black p-5 rounded-xl"
          type="text"
          placeholder="تایتل اصلی"
          name="metatitle"
          onChange={handleChange}
        />
        <input
          className="border border-black p-5 rounded-xl"
          type="text"
          placeholder="دیسکریپشن اصلی"
          name="metadescription"
          onChange={handleChange}
        />
         <input
          className="border border-black p-5 rounded-xl"
          type="text"
          placeholder="متن کوتاه زیر پست"
          name="shorttext"
          onChange={handleChange}
        />
        <input
          className="border border-black p-5 rounded-xl"
          type="text"
          placeholder="تصویر اصلی"
          name="mainimg"
          onChange={handleChange}
        />
           <input
          className="border border-black p-5 rounded-xl"
          type="text"
          placeholder="لینک صفحه"
          name="link"
          onChange={handleChange}
        />
        <input
          className="border border-black p-5 rounded-xl"
          type="text"
          placeholder="h1 صفحه"
          name="h1title"
          onChange={handleChange}
        />
        <input
          className="border border-black p-5 rounded-xl"
          type="text"
          name="keyword"
          placeholder="کلمات کلیدی"
          onChange={handleChange}
        />
        <label style={{ marginBottom: 20 }} htmlFor="">
          توضیحات
        </label>
  <Editorme formData={formData} setFormData={setFormData}/>
        <input
          className="bg-purple-700 p-4 mt-10 rounded-lg text-white"
          type="submit"
          value="ثبت پست"
        />
      </form>
    </div>
  );
}
