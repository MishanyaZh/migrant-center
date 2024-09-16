import BurgerMenu from "../BurgerMenu/BurgerMenu";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

const Header = () => {
  return (
    <header className="w-full p-4 bg-background text-foreground flex items-center justify-between">
      <DarkModeSwitch />
      <h1 className="text-3xl font-bold">My App Header</h1>
      <BurgerMenu />
    </header>
  );
};

export default Header;
