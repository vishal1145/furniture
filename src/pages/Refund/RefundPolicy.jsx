import React from "react";
import Navbar from "../../components/Navbar";
import HeaderFile from '../../components/Header';
import furnitureData from "../../data/furnitureData.json";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import refundData from "../../data/refund.json";

export default function ReturnPolicy() {
  return (
    <div>
      <Navbar data={furnitureData.navigation} />
      <HeaderFile data={refundData.header} />

     <div className=" flex flex-col px-6 sm:px-12 lg:px-32 py-4 gap-10">
      {refundData.sections.map((section, index) => (
        <div key={index} className="flex flex-col gap-5">
          <h1 className="text-[24px] font-bold text-green-900">{section.title}</h1>
          {section.content.map((paragraph, idx) => (
            <p key={idx} className="text-[14px]">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>

      <Features data={furnitureData.features} />
      <Footer data={furnitureData.footer} />

    </div>
  );
}
