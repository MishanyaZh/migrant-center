import ContactItems from "@/app/ui/ContactItems/ContactItems";
import Map from "@/app/ui/Map/Map";
import { contactsLinks } from "@/app/utils/contacts";

export default function Page({ params }: { params: { slug: string } }) {
  const currentContact = contactsLinks?.find(
    (item) => item?.id === params?.slug,
  );

  return (
    <section id="contact" className="flex flex-col p-4 gap-3">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-shadow-custom">
        Контакти {currentContact?.name}:
      </h2>
      {currentContact && <ContactItems contact={currentContact} />}
      {currentContact && <Map contact={currentContact} />}
    </section>
  );
}
