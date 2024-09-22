"use client";

import { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { mainLinks, contactsLinks } from "../NavLinks/linksData";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

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
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-300 fixed top-[68px] right-0 w-full h-full flex flex-col items-start justify-start p-8 space-y-8 bg-theme-backdrop md:flex-row md:hidden`}
      >
        {mainLinks.map((link) => (
          <div key={link.id} className="relative flex flex-col items-start">
            {link.id === "contacts" ? (
              <>
                <div className="flex items-center">
                  <a
                    href={link.href}
                    className="text-2xl text-text-regular  hover:text-blue-600 "
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                  <button
                    onClick={toggleSubMenu}
                    className="ml-2 text-text-regular hover:text-blue-600 focus:outline-none"
                  >
                    {isSubMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                </div>
                {isSubMenuOpen && (
                  <div className="ml-4 w-auto bg-theme-background shadow-lg rounded-md">
                    {contactsLinks.map((subLink) => (
                      <a
                        key={subLink.id}
                        href={subLink.href}
                        className="block px-4 py-2 text-text-regular hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        {subLink.name}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a
                href={link.href}
                className="text-2xl text-text-regular hover:text-blue-600"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default BurgerMenu;
