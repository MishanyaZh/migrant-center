import { contactsLinks } from "../ui/NavLinks/linksData";
import NavLinks from "../ui/NavLinks/NavLinks";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="">Contacts Page general info</div>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus
        delectus libero, voluptate officiis animi consequuntur aspernatur
        praesentium id similique laboriosam quaerat nostrum, eligendi
        repudiandae quo debitis fugiat non omnis! Voluptatibus illum sed,
        repudiandae repellendus repellat nostrum odio accusamus mollitia. Est,
        esse adipisci, veniam dolores possimus, nesciunt impedit eligendi natus
        voluptatem distinctio error magni sapiente sequi ea ex modi praesentium?
      </h2>
      <NavLinks links={contactsLinks} />
      <div className="">{children}</div>
    </div>
  );
}
