import React from "react";
import IconBox from "../IconBox/IconBox";
import Link from "next/link";
import { FaFacebook, FaMapMarkedAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { ContactsLinksTypes } from "@/app/utils/contacts";

const ContactItems = ({ contact }: { contact: ContactsLinksTypes }) => {
  const { phone, address, mapMark, facebook } = contact;
  return (
    <>
      <Link
        href={`tel:${phone}`}
        className="flex flex-row items-center align-baseline gap-4 text-shadow-custom"
      >
        <IconBox>
          <FaPhoneSquareAlt className="text-2xl" />
        </IconBox>
        <span>{phone}</span>
      </Link>

      <Link
        target="_blank"
        href={facebook}
        className="flex flex-row items-center align-baseline gap-4 text-shadow-custom"
      >
        <IconBox>
          <FaFacebook className="text-2xl hover:text---special-violet" />
        </IconBox>
        <span>CENTRUM MIGRANTA</span>
      </Link>

      <Link
        target="_blank"
        href={mapMark}
        className="flex flex-row items-center align-baseline gap-4 text-shadow-custom"
      >
        <IconBox>
          <FaMapMarkedAlt className="text-2xl hover:text-o--special-violet" />
        </IconBox>
        <span>{address}</span>
      </Link>
    </>
  );
};

export default ContactItems;
