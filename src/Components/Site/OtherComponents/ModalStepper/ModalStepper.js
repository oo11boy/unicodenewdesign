
import React, { useState } from "react";
import { API_URL } from "../../../../../ApiUrl";

export default function ModalStepper({ setshowmodal }) {
  const [nextstep, setnextstep] = useState(false);



  const [formData, setFormData] = useState({
    name:"",
    type: "",
    text: "",
    number: "",
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/addsiteorder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          number: formData.number,
          type: formData.type,
          text: formData.text,
        }),
      });
  
      if (response.ok) {
        console.log("order added successfully");
        alert("با موفقیت اضافه شد");
  
        // Send SMS notification
        try {
          const smsResponse = await fetch(
            "https://sms.farazsms.com/class/sms/webservice/send_url.php?from=3000505&to=9354502369&msg=یک سفارش طراحی سایت جدید در یونیکد ثبت شد.&uname=rasoul0011&pass=Ra13781379",
            {
              method: "GET",
            }
          );
          if (smsResponse.ok) {
            console.log("SMS sent successfully");
          } else {
            console.error("Error sending SMS");
          }
        } catch (smsError) {
          console.error("Error:", smsError);
        }
  
        // Optionally, you can reset the form or update the UI
        setFormData({
          name: "",
          type: "",
          text: "",
          number: "",
        });
        setnextstep(true);
      } else {
        console.error("Error adding demo");
        alert("خطا در ثبت درخواست");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="  bg-slate-900 bg-opacity-80 fixed flex justify-center items-center top-0 left-0 w-full h-screen ">
      <button
        onClick={() => setshowmodal(false)}
        className="absolute top-1 left-1 text-white"
      >
        <span class="icon-cancel-circle text-6xl bg-blue-700 p-2 rounded-lg"></span>
      </button>
      <div className="w-10/12  lg:w-1/2  h-auto bg-white p-3 rounded-lg">
        <header className="m-auto w-full flex justify-center items-center">
          <p className=" bg-blue-700 hover:bg-blue-800 p-3 rounded-lg text-white mb-4 w-full text-center">
            درخواست سفارش طراحی سایت
          </p>
        </header>
        <section>
          {nextstep ? (
            <div className="h-[300px] flex justify-center items-center flex-col">
              <span class="icon-checkbox-checked text-6xl my-4 text-green-700"></span>
              <p>درخواست با موفقیت ثبت شد.</p>
              <p>به زودی با شما تماس خواهیم گرفت.</p>
            </div>
          ) : (
            <form onSubmit={submithandler} class=" mx-auto">
              <div class="mb-5">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  نام شما
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  چه نوع سایتی میخواهید؟
                </label>
                <input
                  type="text"
                
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                  required
                  name="type"
                  onChange={handleChange}
                />
              </div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                اطلاعات تکمیلی
              </label>
              <textarea
                id="message"
                rows="4"
                name="text"
                onChange={handleChange}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   "
                placeholder="درباره سایت درخواستی توضیح بده..."
              ></textarea>

              <div class="my-5">
                <label
                  for="number"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  شماره تماس
                </label>
                <input
                      name="number"
                      onChange={handleChange}
                  type="number"
                
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                  required
                />
              </div>

              <button
                type="submit"
                class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                ثبت درخواست تماس
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
