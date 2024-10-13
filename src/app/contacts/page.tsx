import ContactItems from "../ui/ContactItems/ContactItems";
import Map from "../ui/Map/Map";
import { contactsLinks } from "../utils/contacts";

export default function Page() {
  return (
    <section className="flex flex-col p-2 gap-3">
      <p>
        Друзі, раді поділитися з вами новиною — ми відкриваємо шостий офіс
        Центру Мігранта. І наш новий офіс буде в місті Nowa Sól 🥳🥳🥳 Зараз
        триває підготовка, і з жовтня ми стартуємо. Дякуємо нашій дорогій
        Nataliia Skorobohatova за партнерство. Ми дуже раді нашій співпраці ❤️
        Якщо ви хочете відкрити Центр Мігранта у своєму місті та отримати нашу
        підтримку, звяжіться з нами🙂
      </p>
      <ContactItems contact={contactsLinks[0]} />
      <Map contact={contactsLinks[0]} />
    </section>
  );
}
