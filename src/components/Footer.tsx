import logo from "@/assets/logo.png";
import { Icons } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center min-h-[163px] py-20 sm:py-0">
        <img src={logo} alt="logo" width={114} height={41} />
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-[38px] mt-10 sm:mt-0">
          <ul className="list-none flex flex-col gap-2">
            <li className="cursor-context-menu">ANASAYFA</li>
            <li className="cursor-context-menu">HAKKIMIZDA</li>
            <li className="cursor-context-menu">BELGELER</li>
          </ul>
          <ul className="list-none flex flex-col gap-2 ">
            <li className="cursor-context-menu">ESANS</li>
            <li className="cursor-context-menu">Aroma</li>
            <li className="cursor-context-menu">ILETISIM</li>
          </ul>
          <div className="sm:ms-20">
            <h3 className="text-[20px] text-[#1E1E1E] font-bold">Follow Us</h3>
            <div className="flex items-center mt-4 gap-4">
              <a href="#">{Icons.facebook}</a>
              <a href="#">{Icons.twitter}</a>
              <a href="#">{Icons.instagram}</a>
              <a href="#">{Icons.linkedIn}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
