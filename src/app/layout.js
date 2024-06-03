import "./globals.css";
import localFont from '@next/font/local'
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

};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="stylesheet" href="Styles.css" />
      </head>
      <body className={vazir.className}>{children}</body>
    </html>
  );
}
