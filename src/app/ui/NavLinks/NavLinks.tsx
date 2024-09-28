"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { linksTypes } from "./linksData";

export default function NavLinks({ links }: { links: linksTypes[] }) {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex min-w-full h-[52px] items-center justify-center gap-2 bg-theme-background-2">
      {links.map((link) => {
        const isActiveLink = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`md:flex-none 
              flex h-[52px] items-center justify-center gap-2 p-3 text-sm font-medium
              hover:text-special-violet hover:bg-theme-background-2
              ${
                isActiveLink
                  ? "text-special-violet bg-theme-background-2"
                  : "text-textColor-regular bg-theme-background"
              }`}
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
