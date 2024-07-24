import Script from "next/script";
import { BlogSchema } from "./Blog/[namepost]/page";
import "./globals.css";
import localFont from '@next/font/local'
import GoftinoWidget from "@/Components/Site/OtherComponents/Goftino";
const vazir = localFont({
  src: [
    {
      path: '../../public/Fonts/Vazir.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/Fonts/Vazir.ttf',
      weight: '400',
      style: 'normal',
    },
  ],

});
export const metadata = {
  title: "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان",
  description:   "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",

    keywords: "طراحی سایت ارزان ، خرید سایت ارزان ، طراحی سایت شرکتی ارزان ، طراحی سایت فروشگاهی ارزان ، طراحی سایت شخصی رزومه ای ارزان ، سفارش طراحی سایت ارزان ، خرید سایت فروشگاهی",
    author: "unicodewebdeisgn",
    openGraph: {
      title: "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان",
      description:  "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",
      image: "../img/logo.webp",
      url:"https://unicodewebdesign.com",
      locale:"fa_IR"

    },
    twitter: {
    
      title:  "طراحی سایت ارزان در تهران و ایران | قیمت از 1 میلیون تومان",
      description: "به دنبال طراحی سایت ارزان و با کیفیت مناسب هستید؟ ما می توانیم وب سایت شما را با بهترین قیمت و در کوتاه ترین زمان ممکن طراحی کنیم.",
      image: "../img/logo.webp",
    },
  };


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="stylesheet" href="../Styles.css" />
        <meta property="og:site_name" content="طراحی سایت یونیکد" />
    <GoftinoWidget/>
    
    <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-F5SP8L25T4"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-F5SP8L25T4');
              `,
            }}
          />
      </head>
      <body className={vazir.className}>{children}
      
      
      </body>
      
    </html>
  );
}
