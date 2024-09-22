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
            className={`flex h-[52px] items-center justify-center gap-2  bg-theme-background p-3 text-sm text-textColor-regular font-medium hover:text-textColor-primary hover:bg-theme-background-2 md:flex-none md:p-2 md:px-3 ${isActiveLink ? "text-textColor-primary bg-theme-background-2" : ""}`}
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
