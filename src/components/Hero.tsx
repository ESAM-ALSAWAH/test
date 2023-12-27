import { AppBar } from "@/components/AppBar";

export const Hero = () => {
  return (
    <div className="h-screen relative w-full bg-[url('assets/heroImage.png')] bg-cover  overflow-hidden">
      <AppBar />
      <div className="  text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <p className="text-[20px] font-[400] text-white">
          Lorem , Ipsum , dolor , sit , amet
        </p>
        <p className="text-[90px] font-[400] text-white">Lorem Ipsum</p>
      </div>
    </div>
  );
};
