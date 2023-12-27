import React from "react";
import image3 from "@/assets/image3.png";
import image1 from "@/assets/image1.png";
import { Section } from "@/components/sections/Section";
import lineImage from "@/assets/line.png";

export const SecondeSection = () => {
  return (
    <Section>
      <div className="flex flex-col sm:flex-row items-center  min-h-[500px] mt-[150px] gap-5">
        <div className="flex-1 bg-[url('assets/image2.png')]  bg-cover bg-center h-[567px] flex justify-end pt-10 px-10">
          <img src={image3} />
        </div>
        <div className="flex-1  flex justify-center px-[15px] sm:px-0">
          <div className="flex flex-col justify-center max-w-[366px]">
            <h1 className="text-primary text-[50px]">
              Lorem ipsum <br /> & dolor sit amet
            </h1>
            <p className="text-[15px]">
              Phasellus elementum egestas lorem, at dictum urna sodales
              facilisis Maecenas ut tortor quis urna tincidunt molestie
            </p>
            <div className="flex mt-5">
              <div className="pr-10">
                <h2 className="text-primary text-[23px]">Lorem ipsum</h2>
                <p>Lorem ipsum</p>
              </div>
              <div className="pl-10 border-l border-l-[#C49F724D]">
                <h2 className="text-primary text-[23px]">Lorem ipsum</h2>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:block right-0 -top-[60%]  ">
        <div className="flex flex-col justify-end items-center gap-2 absolute h-fit bottom-0 -left-8">
          <img src={lineImage} alt="line" className="flex-1" />
          <p
            className="text-black text-center mr-2"
            style={{ writingMode: "vertical-rl", direction: "rtl" }}
          >
            Lorem Ipsum
          </p>
        </div>
        <img
          src={image1}
          className="w-full h-full max-w-[400px] max-h-[400px]"
        />
      </div>
    </Section>
  );
};
