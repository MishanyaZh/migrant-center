import { contactsRoutes } from "../utils/routes";
import NavLinks from "../ui/NavLinks/NavLinks";
import Link from "next/link";
import { FaPuzzlePiece } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 md:px-0">
      <h2 className="px-2 my-1 md:px-3 md:mb-2 text-center">
        Офіс Центру Мігранта в твоєму місті:
      </h2>
      <NavLinks links={contactsRoutes} />
      <div className="hidden-on-desktop w-full bg-theme-background px-4 ">
        {contactsRoutes.map((subLink) => {
          return (
            <Link
              key={subLink.id}
              href={subLink.href}
              className="flex flex-row items-center align-baseline gap-2 px-0 py-0 hover:text-special-violet"
            >
              <FaPuzzlePiece />
              <span>{subLink.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="">{children}</div>
    </div>
  );
}
