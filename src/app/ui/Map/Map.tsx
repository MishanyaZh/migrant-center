"use client";

import { ContactsLinksTypes } from "@/app/utils/contacts";
import React, { useEffect, useState } from "react";
import Loading from "@/app/loading";

const Map = ({ contact }: { contact: ContactsLinksTypes }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);

      return () => {
        setIsLoaded(false);
      };
    }, 2000);
  }, []);
  return (
    <>
      <div className="w-full mt-4 lg:w-1/2">
        <h3 className="text-xl mb-2 text-shadow-custom">
          Знайдіть нас на карті:
        </h3>
        {!isLoaded && (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        )}
        <iframe
          src={contact?.mapIframeUrl}
          width="100%"
          height="300px"
          allowFullScreen={true}
          loading="lazy"
          className="border-0"
          style={isLoaded ? {} : { display: "none" }}
        />
      </div>
    </>
  );
};

export default Map;
