"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { mainLinks, contactsLinks } from "../NavLinks/linksData";

const BurgerMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="text-3xl focus:outline-none md:hidden z-50"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav
        className={`md:hidden flex flex-col items-start justify-start 
        ${isOpen ? "translate-x-0" : "translate-x-full"} fixed top-[68px] right-0 w-full h-full
        transform transition-transform duration-300 
        p-8 space-y-8 bg-theme-backdrop`}
      >
        {mainLinks.map((link) => {
          const isActiveLink = pathname === link.href;

          const renderMainLink = () => (
            <Link
              href={link.href}
              onClick={closeMenu}
              className={`block text-2xl text-text-regular    
            ${isActiveLink ? "text-special-violet" : "text-textColor-regular"} hover:text-special-violet`}
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
                      className="ml-2 pt-1 text-text-regular hover:text-special-violet focus:outline-none"
                    >
                      {isSubMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                  </div>

                  {isSubMenuOpen && (
                    <div className="w-full bg-theme-background shadow-lg">
                      {contactsLinks.map((subLink) => {
                        const isActiveSubLink = pathname === subLink.href;

                        return (
                          <Link
                            key={subLink.id}
                            href={subLink.href}
                            className={`block px-2 py-2 text-text-regular
                          ${isActiveSubLink ? "text-special-violet" : "text-textColor-regular"} hover:text-special-violet`}
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
