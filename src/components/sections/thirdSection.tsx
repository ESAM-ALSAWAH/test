import React from "react";
import lineImage from "@/assets/line.png";
import { Section } from "@/components/sections/Section";

export const ThirdSection = () => {
  return (
    <Section>
      <div className="min-h-[400px] bg-[url('assets/bg.png')] w-full flex justify-center items-center flex-wrap gap-10 py-10">
        <div className="relative max-w-[280px] min-h-[280px] bg-[url('assets/last_section/1.png')] bg-cover bg-center w-full h-full flex items-end">
          <div className="flex flex-col justify-center items-center gap-2 absolute top-0 bottom-0 -left-8  h-full">
            <img src={lineImage} alt="line" className="flex-1" />
            <p
              className="text-black text-center mr-2"
              style={{ writingMode: "vertical-rl", direction: "rtl" }}
            >
              Lorem Ipsum
            </p>
          </div>
          <div className="w-3/4 bg-white mx-auto text-center mb-4 py-4">
            <p className="text-[20px]">Lorem Ipsum</p>
            <p className="text-sm">Lorem Ipsum</p>
          </div>
        </div>
        <div className="max-w-[280px] min-h-[280px] bg-[url('assets/last_section/2.png')] bg-cover bg-center w-full h-full flex items-end">
          <div className="w-3/4 bg-white mx-auto text-center mb-4 py-4">
            <p className="text-[20px]">Lorem Ipsum</p>
            <p className="text-sm">Lorem Ipsum</p>
          </div>
        </div>
        <div className="max-w-[280px] min-h-[280px] bg-[url('assets/last_section/3.png')] bg-cover bg-center w-full h-full flex items-end">
          <div className="w-3/4 bg-white mx-auto text-center mb-4 py-4">
            <p className="text-[20px]">Lorem Ipsum</p>
            <p className="text-sm">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
