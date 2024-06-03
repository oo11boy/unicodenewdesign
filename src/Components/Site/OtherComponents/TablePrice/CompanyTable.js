import React from 'react'

export default function CompanyTable({title,price1,price2,hard}) {
  return (

<div class="table_component" role="region" tabindex="0">
<table>
    <caption className='my-10 text-3xl'>تعرفه طراحی سایت {title}</caption>
    <thead>
        <tr>
            <th>طلایی</th>
            <th>ویژه</th>
            <th>امکانات</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{price2} میلیون تومان</td>
            <td>{price1} میلیون تومان</td>
            <td>قیمت کل</td>
        </tr>
        <tr>
            <td>نامحدود</td>
            <td>5 گیگ&nbsp;</td>
            <td>پهنای باند</td>
        </tr>
        <tr>
            <td>1 سال</td>
            <td>1 سال</td>
            <td>پشتیبانی رایگان هاست</td>
        </tr>
        <tr>
            <td>2 عدد</td>
            <td>1 عدد</td>
            <td>ایمیل اختصاصی</td>
        </tr>
        <tr>
            <td>20 صفحه</td>
            <td>10 صفحه</td>
            <td>تعداد صفحات</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>صفحه نمونه کار</td>
        </tr>
        <tr>
            <td>{hard} گیگ</td>
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>هاست رایگان</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>&nbsp;بخش وبلاگ و مقاله</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>دامنه IR رایگان</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>امکان انتقال هاست</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>مالکیت دامنه</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>افزونه امنیتی</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>افزونه ضدهرزنامه</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>آپدیت افزونه ها</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>ssl رایگان</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>فرم تماس با ما</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>امکان درج آدرس‌ شبکه‌های اجتماعی</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
            <td>قابلیت ارتقا سایت</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>فرم پیشرفته</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>تلفن شناور</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>معرفی به گوگل ( اتصال سایت به سرچ کنسول)&nbsp;</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>تغییر رنگ قالب</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>افزونه سئو ( rank math )</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>ثبت نام اینماد ( هزینه های دولتی ثبت اینماد به عهده مشتری است )</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>ثبت نام در سایت ساماندهی</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>تست gtmetrix ( بهینه سازی سرعت سایت )</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>تغییر فونت</td>
        </tr>
        <tr>
           <td><span class="icon-checkmark bg-green-600 rounded-full text-white p-[3px]"></span></td>
           
           <td><span class="icon-cross text-sm bg-green-600 rounded-full text-white p-[3px]"></span></td>
            <td>درج ویدیو در صفحات</td>
        </tr>
    </tbody>
</table>
</div>
  )
}
