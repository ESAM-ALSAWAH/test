import logo from "@/assets/logo.png";
import languageIcon from "@/assets/svg/language.svg";
import topArrowIcon from "@/assets/svg/topArrow.svg";
export const AppBar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center mx-auto my-[3vh]">
        <img src={logo} alt="logo" width={114} height={31} />
        <div className="hidden md:flex   gap-[31px] items-center">
          <a href="#" className="font-[400]">
            ANASAYFA
          </a>
          <a href="#" className="font-[400]">
            HAKKIMIZDA
          </a>
          <a href="#" className="font-[400]">
            BELGELER
          </a>
          <a href="#" className="font-[400]">
            ESANS
          </a>
          <a href="#" className="font-[400]">
            Aroma
          </a>
        </div>
        <div className="flex gap-[13px] items-center">
          <button className="text-[#C49F72] border border-[#C49F72] rounded-full px-4 py-2">
            Contact us
          </button>
          <button className="flex gap-[2px] items-center">
            <img src={languageIcon} alt="language" width={20} height={20} />
            <img src={topArrowIcon} alt="language" width={20} height={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
