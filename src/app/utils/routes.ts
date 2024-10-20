export type linksTypes = {
  id: string;
  name: string;
  href: string;
};

export enum ROUTES {
  HOME = "/",
  GALLERY = "/gallery",
  CONTACTS = "/contacts",

  CONTACT_1 = "/contacts/gorzow",
  CONTACT_2 = "/contacts/zielona-gora",
  CONTACT_3 = "/contacts/sulecin",
  CONTACT_4 = "/contacts/sopot",
  CONTACT_5 = "/contacts/swinousce",
  CONTACT_6 = "/contacts/nowa-sol",
}
export enum ROUTES_IDs {
  HOME = "home",
  GALLERY = "gallery",
  CONTACTS = "contacts",

  CONTACT_1 = "gorzow",
  CONTACT_2 = "zielona-gora",
  CONTACT_3 = "sulecin",
  CONTACT_4 = "sopot",
  CONTACT_5 = "swinousce",
  CONTACT_6 = "nowa-sol",
}
export enum ROUTES_NAMES {
  HOME = "Головна",
  GALLERY = "Галерея",
  CONTACTS = "Контакти",

  CONTACT_1 = "Gorzów Wlkp",
  CONTACT_2 = "Zielona Góra",
  CONTACT_3 = "Sulęcin",
  CONTACT_4 = "Sopot",
  CONTACT_5 = "Świnoujście",
  CONTACT_6 = "Nowa Sól",
}

export const mainRoutes = [
  {
    id: ROUTES_IDs.HOME,
    name: ROUTES_NAMES.HOME,
    href: ROUTES.HOME,
  },
  {
    id: ROUTES_IDs.GALLERY,
    name: ROUTES_NAMES.GALLERY,
    href: ROUTES.GALLERY,
  },
  {
    id: ROUTES_IDs.CONTACTS,
    name: ROUTES_NAMES.CONTACTS,
    href: ROUTES.CONTACTS,
  },
];

export const contactsRoutes = [
  {
    id: ROUTES_IDs.CONTACT_1,
    name: ROUTES_NAMES.CONTACT_1,
    href: ROUTES.CONTACT_1,
  },
  {
    id: ROUTES_IDs.CONTACT_2,
    name: ROUTES_NAMES.CONTACT_2,
    href: ROUTES.CONTACT_2,
  },
  {
    id: ROUTES_IDs.CONTACT_3,
    name: ROUTES_NAMES.CONTACT_3,
    href: ROUTES.CONTACT_3,
  },
  {
    id: ROUTES_IDs.CONTACT_4,
    name: ROUTES_NAMES.CONTACT_4,
    href: ROUTES.CONTACT_4,
  },
  {
    id: ROUTES_IDs.CONTACT_5,
    name: ROUTES_NAMES.CONTACT_5,
    href: ROUTES.CONTACT_5,
  },
  {
    id: ROUTES_IDs.CONTACT_6,
    name: ROUTES_NAMES.CONTACT_6,
    href: ROUTES.CONTACT_6,
  },
];
