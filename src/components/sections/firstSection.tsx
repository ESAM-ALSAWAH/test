import { Section } from "@/components/sections/Section";
import lineImage from "@/assets/line.png";

export const FirstSection = () => {
  return (
    <Section>
      <div className="container mx-auto relative">
        <div className=" relative ">
          <p className="flex justify-end text-primary mb-[40px]">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit. Phasellus
          </p>
          <div className="relative max-w-[706px] min-h-[448px] mx-auto bg-[url('assets/bg_overlay.png')] flex flex-col justify-center items-center  text-center gap-3">
            <div className="hidden sm:flex flex-col justify-center items-center gap-2 absolute h-fit -top-[25%] left-1/2 -translate-x-1/2">
              <p
                className="text-black text-center ml-2"
                style={{ writingMode: "vertical-rl", direction: "rtl" }}
              >
                Scroll
              </p>
              <img src={lineImage} alt="line" className="flex-1 rotate-180" />
            </div>
            <h1 className="text-[35px]">
              Lorem ipsum dolor sit <br /> amet, consectetur
            </h1>
            <p className="text-sm max-w-[348px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              elementum egestas lorem, at dictum urna sodales facilisis.
              Maecenas ut tortor quis urna tincidunt molestie.
            </p>
            <h2 className="text-[30px]">Lorem ipsum</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <p className="hidden sm:block absolute -rotate-90 -left-20  bottom-[150px]">
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </Section>
  );
};
