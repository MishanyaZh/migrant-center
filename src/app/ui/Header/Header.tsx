import BurgerMenu from "../BurgerMenu/BurgerMenu";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

const Header = () => {
  return (
    <header className="w-full p-4 bg-theme-background text-text-regular flex items-center justify-between">
      <DarkModeSwitch />
      <h1 className="text-3xl font-bold">My App Header</h1>
      <BurgerMenu />
    </header>
  );
};

export default Header;
