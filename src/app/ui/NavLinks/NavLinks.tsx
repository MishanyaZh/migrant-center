"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { linksTypes } from "../../utils/routes";
import Loading from "@/app/loading";

export default function NavLinks({ links }: { links: linksTypes[] }) {
  const pathname = usePathname();
  return (
    <Suspense fallback={<Loading />}>
      <nav className="hidden-on-mobile md:flex min-w-full h-[52px] items-center justify-center gap-2 bg-theme-background-2">
        {links.map((link) => {
          const isActiveLink = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`md:flex-none 
              flex h-[52px] items-center justify-center gap-2 p-3 text-sm font-medium
              hover:text-textColor-primary
              ${
                isActiveLink
                  ? "text-textColor-primary"
                  : "text-textColor-regular"
              }`}
            >
              <p className="">{link.name}</p>
            </Link>
          );
        })}
      </nav>
    </Suspense>
  );
}
