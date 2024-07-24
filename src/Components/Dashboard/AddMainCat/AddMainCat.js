import React, { useState } from 'react'
import Editorme from '../AddPost/Editor'
import { API_URL } from '../../../../ApiUrl';

export default function AddMainCat() {
    
  const [formData, setFormData] = useState({
    cat:"",
    metatitle: "",
    metadescription: "",
    h1title: "",
    mainimg: "",
    text: "",
    keyword: "",
    link: "",
    shorttext:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/addMainCat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        
          title: formData.title,
          description: formData.description,
       
          mainimg: formData.mainimg,
          text: formData.text,
          keyword: formData.keyword,
          link: formData.link,
        
        }),
      });
      if (response.ok) {
        console.log("Plan added successfully");
        alert("با موفقیت اضافه شد");
        // Optionally, you can reset the form or update the UI
        setFormData({
         
            title: "",
            description: "",
          
            mainimg: "",
            text: "",
            keyword: "",
            link: "",
         
        });
      } else {
        console.error("Error adding maincat");
        alert("خطا در ثبت درخواست");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmitPost} className="flex flex-col w-full gap-5">
      <input
        className="border border-black p-5 rounded-xl"
        type="text"
        placeholder="تایتل اصلی"
        name="title"
        onChange={handleChange}
      />
      <input
        className="border border-black p-5 rounded-xl"
        type="text"
        placeholder="دیسکریپشن اصلی"
        name="description"
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
  )
}
