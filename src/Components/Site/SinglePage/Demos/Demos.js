import React from "react";
import "./Demos.css";
import { AllDemos } from "@/Db";
export default function Demos({ catname }) {
  const finddemos = AllDemos.filter((item) => item.name === catname)[0].Info;

  return (
    <div className="secdemo">
      <h2>
        دمو های طراحی سایت{" "}
        {catname == "store_design"
          ? "فروشگاهی"
          : catname == "company_design"
          ? "شرکتی"
          : catname == "pez_design"
          ? "پزشکی و دندان پزشکی"
          : "اقتصادی و رزومه ای"}
      </h2>
      <div className="demos">
        {finddemos.map((item) => {
          return (
            <>
              {" "}
              <div
                key={item.id}
                className="itemdemo"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="seedesign">
                  <a target="_blank" title={item.name} href={item.link}>
                    مشاهده دمو
                  </a>
                </div>
                <h3 className="namedemo">{item.name}</h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
