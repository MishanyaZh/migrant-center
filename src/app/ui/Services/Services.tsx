import React from "react";
import { FaPuzzlePiece } from "react-icons/fa";
import { servicesData } from "./servicesData";

const Services = () => {
  return (
    <div className="">
      <h2 className="text-xl font-bold my-4">
        Друзі, нижче список послуг, які є в нашому Центрі Мігранта:
      </h2>

      <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="flex items-center bg-theme-background-2 shadow-md py-1 px-2 md:p-3 rounded-md gap-2"
          >
            <FaPuzzlePiece />
            <p className="w-5/6">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
