import React from "react";
import { API_URL } from "../../../ApiUrl";

export async function getdata() {
  // Fetch data from external API
  const res = await fetch(`${API_URL}/getsiteorder`, { cache: "no-cache" });
  const data = await res.json();

  // Pass data to the page via props
  return data;
}

export default async function AddSiteOrder() {
  const dataorder = await getdata();
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              نام
            </th>
            <th scope="col" class="px-6 py-3">
              شماره تماس
            </th>
            <th scope="col" class="px-6 py-3">
              نوع سایت درخواستی
            </th>
            <th scope="col" class="px-6 py-3">
              توضیحات
            </th>
          </tr>
        </thead>
        <tbody>
          {dataorder.map((item) => {
         return   <tr class="bg-white border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
               {item.name}
              </th>
              <td class="px-6 py-4">{item.number}</td>
              <td class="px-6 py-4">{item.type}</td>
              <td class="px-6 py-4">{item.text}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
