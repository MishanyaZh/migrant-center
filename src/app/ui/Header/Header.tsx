import Image from "next/image";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import { logoUrl } from "@/app/constants";

const Header = () => {
  return (
    <header className="w-full fixed md:relative z-50 px-4 py-4 bg-theme-background text-text-regular flex items-center justify-between">
      <div className="hidden md:block">
        <DarkModeSwitch />
      </div>

      <Image
        src={logoUrl}
        alt="logo"
        height={30}
        width={30}
        priority={true}
        className="block md:hidden bg-special-white rounded-md "
      />
      <h1 className="text-2xl font-sans">CENTRUM MIGRANTA</h1>
      <BurgerMenu />
      <Image
        src={logoUrl}
        alt="logo"
        height={30}
        width={30}
        priority={true}
        className="hidden md:block bg-special-white rounded-md "
      />
    </header>
  );
};

export default Header;
