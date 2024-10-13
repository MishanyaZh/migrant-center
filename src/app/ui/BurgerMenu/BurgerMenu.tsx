"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { mainRoutes, contactsRoutes } from "@/app/utils/routes";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

const BurgerMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const toggleMenu = () => {
    !isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    document.body.style.overflow = "";
    setIsOpen(false);
  };
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  return (
    <div className="hidden-on-desktop flex">
      <button
        onClick={toggleMenu}
        className="text-3xl focus:outline-none z-50"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav
        className={`flex flex-col items-start justify-start p-8
        ${isOpen ? "translate-x-0" : "translate-x-full"} fixed top-[64px] right-0 w-full h-full
        transform transition-transform duration-300 
        bg-theme-backdrop custom-shadow`}
      >
        <div className="flex justify-end w-full">
          <DarkModeSwitch />
        </div>
        {mainRoutes.map((link) => {
          const isActiveLink = pathname === link.href;

          const renderMainLink = () => (
            <Link
              href={link.href}
              onClick={closeMenu}
              className={`block text-2xl mb-3  
            ${isActiveLink ? "text-textColor-primary" : "text-textColor-regular"} hover:text-textColor-primary`}
            >
              {link.name}
            </Link>
          );

          return (
            <div key={link.id} className="relative flex flex-col items-start">
              {link.id === "contacts" ? (
                <>
                  <div className="flex items-center">
                    {renderMainLink()}
                    <button
                      onClick={toggleSubMenu}
                      className="ml-2 mb-3 pt-1 hover:text-textColor-primary focus:outline-none"
                    >
                      {isSubMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                  </div>

                  {isSubMenuOpen && (
                    <div className="w-full bg-theme-background shadow-lg">
                      {contactsRoutes.map((subLink) => {
                        const isActiveSubLink = pathname === subLink.href;

                        return (
                          <Link
                            key={subLink.id}
                            href={subLink.href}
                            className={`block px-2 py-2
                          ${isActiveSubLink ? "text-textColor-primary" : "text-textColor-regular"} hover:text-textColor-primary`}
                            onClick={closeMenu}
                          >
                            {subLink.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                renderMainLink()
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default BurgerMenu;
