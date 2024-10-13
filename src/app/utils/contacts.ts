import { contactsRoutes } from "./routes";
const gorzowMapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2416.050126574191!2d15.238309176438266!3d52.73128787211726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47071fbd7ee0e15d%3A0xa6be4c5f4575fd91!2sSikorskiego%208%2C%2066-400%20Gorz%C3%B3w%20Wielkopolski!5e0!3m2!1sru!2spl!4v1727593758477!5m2!1sru!2spl";

const zelonaGoraMapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.565213815784!2d15.500397388393532!3d51.94188369950126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470613dd78d4a6df%3A0x94657eee2c5a87a!2sBohater%C3%B3w%20Westerplatte%209%2C%2065-034%20Zielona%20G%C3%B3ra!5e0!3m2!1sru!2spl!4v1727593948205!5m2!1sru!2spl";

const sulencinMapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.8870910094915!2d15.108276776419233!3d52.44496007204159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47070022e3905ed1%3A0xf91d070ebb151c77!2sWiejska%206%2C%2069-200%20Sul%C4%99cin!5e0!3m2!1sru!2spl!4v1727594014699!5m2!1sru!2spl";

const sopotMapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.9827342244546!2d18.561072177932502!3d54.4232166571934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0bb68cca017b%3A0xa41876857d13cfa9!2sAleja%20Niepodleg%C5%82o%C5%9Bci%20606%2F610%2C%2081-875%20Sopot!5e0!3m2!1sru!2spl!4v1727594118615!5m2!1sru!2spl";

const swinousceMapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146.89146993096583!2d14.24964563874162!3d53.909293047820206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa5f337d2eaaab%3A0x5b8fdfc7d6dc9368!2zUGFzYcW8IMW7ZWdsYXJza2E!5e0!3m2!1sru!2spl!4v1727594226199!5m2!1sru!2spl";

export type ContactsLinksTypes = {
  id: string;
  name: string;
  href: string;
  phone: string;
  address: string;
  mapIframeUrl: string;
  mapMark: string;
  facebook: string;
  mail?: string;
};

export const contactsLinks = [
  {
    ...contactsRoutes[0],
    phone: "+48 730 206 112",
    address: "Gorzów Wlkp., ul. Sikorskiego 8, поверх II",
    mapIframeUrl: gorzowMapSrc,
    mapMark: "https://maps.app.goo.gl/C4tEJytN6YmXoZao9",
    facebook: "https://www.facebook.com/migrantgorzow",
    mail: "centrum.migrantagw@gmail.com",
  },
  {
    ...contactsRoutes[1],
    phone: "+48 576 616 483",
    address: "Zielona Góra, ul. Westerplatte 9, кімн. 126",
    mapIframeUrl: zelonaGoraMapSrc,
    mapMark: "https://maps.app.goo.gl/GrPQhFm81iXDhSYq7",
    facebook: "https://www.facebook.com/migrantgorzow",
  },
  {
    ...contactsRoutes[2],
    phone: "+48 515 525 306",
    address: "Sulęcin, ul. Wiejska 6, кімн. 106",
    mapIframeUrl: sulencinMapSrc,
    mapMark: "https://maps.app.goo.gl/J31uMdhZX8tyzm6j8",
    facebook: "https://www.facebook.com/migrantgorzow",
  },
  {
    ...contactsRoutes[3],
    phone: "+48 570 825 758",
    address: "Sopot, Aleja Niepodległości 606/610, локал 2.12",
    mapIframeUrl: sopotMapSrc,
    mapMark: "https://maps.app.goo.gl/nykRBHFGiyvKH8m96",
    facebook: "https://www.facebook.com/migrantgorzow",
  },
  {
    ...contactsRoutes[4],
    phone: "+48 660 802 570",
    address: "Świnoujście, Pasaż Żeglarska, ul. Bohaterów Września 83/18",
    mapIframeUrl: swinousceMapSrc,
    mapMark: "https://maps.app.goo.gl/HqHxcY33xK8rpEvg9",
    facebook: "https://www.facebook.com/migrantgorzow",
  },
];
