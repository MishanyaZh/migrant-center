import { contactsRoutes } from "../utils/routes";
import NavLinks from "../ui/NavLinks/NavLinks";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="">Contacts Page general info</div>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <NavLinks links={contactsRoutes} />
      <div className="md:hidden w-full bg-theme-background shadow-lg">
        Контакти:
        {contactsRoutes.map((subLink) => {
          return (
            <Link
              key={subLink.id}
              href={subLink.href}
              className="block px-0 py-0 text-text-regular hover:text-special-violet"
            >
              {subLink.name}
            </Link>
          );
        })}
      </div>
      <div className="">{children}</div>
    </div>
  );
}
