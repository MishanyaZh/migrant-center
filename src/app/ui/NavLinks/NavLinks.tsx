"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { linksTypes } from "./linksData";

export default function NavLinks({ links }: { links: linksTypes[] }) {
  const pathname = usePathname();
  return (
    <nav className="min-w-full h-[52px] flex items-center justify-center gap-2 bg-gray-100">
      {links.map((link) => {
        const isActiveLink = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[42px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-green-500 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3 ${isActiveLink ? "bg-sky-100 text-blue-600" : ""}`}
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
