import { contactsLinks } from "../ui/NavLinks/linksData";
import NavLinks from "../ui/NavLinks/NavLinks";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div>Contacts Page general info</div>
      <NavLinks links={contactsLinks} />
      <div className="">{children}</div>
    </div>
  );
}
