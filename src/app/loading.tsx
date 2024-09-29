import Image from "next/image";
import React from "react";
import { spinnerUrl } from "./constants";

type Props = { height?: number; width?: number; center?: boolean };

const Loading = ({ height = 200, width = 200, center }: Props) => {
  return (
    <div className={`flex justify-center ${!center && "mt-16"} `}>
      <Image
        height={height}
        width={width}
        src={spinnerUrl}
        alt="loading..."
        priority={true}
      />
    </div>
  );
};

export default Loading;
