"use client";

import axios from "axios";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Success from "./Success";
import { Alert, Button } from "@mui/material";

const Callback = () => {
  const searchParams = useSearchParams();
  const [infopay, setInfopay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const trackId = searchParams.get("trackId");
        if (trackId) {
          const verifyResponse = await axios.post(
            "https://gateway.zibal.ir/v1/verify",
            {
              merchant: "65d62c97c5d2cb001b6e2d4b",
              trackId: trackId,
            }
          );

          if (verifyResponse) {
            const inquiryResponse = await axios.post(
              "https://gateway.zibal.ir/v1/inquiry",
              {
                merchant: "65d62c97c5d2cb001b6e2d4b",
                trackId: trackId,
              }
            );
            if (inquiryResponse) {
              setInfopay(inquiryResponse.data);
            }
          }
        }
      } catch (error) {
        setError("Error verifying payment information");
        console.error("Error verifying payment information:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInfo(); // Call fetchInfo when the component mounts
  }, [searchParams]);

  if (loading)
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <p className="border bg-blue-950 text-white p-3 rounded-lg">
          در حال بررسی وضعیت تراکنش...
        </p>
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      {infopay ? (
        <div className="my-[200px] w-[90%] mx-auto">
          {infopay.status && infopay.status == 1 ? (
            <Success infopay={infopay} />
          ) : (
            <div className="flex justify-center items-center">
            <Alert  severity="error" >مشکلی در پرداخت رخ داده است.</Alert>
            <a href="../shop" className="bg-black mr-3 text-white p-3">بازگشت به فروشگاه</a>
            </div>
         )}
        </div>
      ) : (
        redirect("./")
      )}
      <Footer />
    </div>
  );
};

const CallbackPage = () => (
  <Suspense fallback={<p>در حال بررسی تراکنش...</p>}>
    <Callback />
  </Suspense>
);

export default CallbackPage;
