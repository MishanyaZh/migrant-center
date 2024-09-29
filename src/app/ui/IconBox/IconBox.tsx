import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const IconBox = ({ children, onClick }: Props) => {
  return (
    <>
      <div
        onClick={onClick}
        className="cursor-pointer p-1 rounded-md border 
        border-textColor-regular custom-shadow text-shadow-custom
        hover:text-special-violet hover:border-special-violet"
      >
        {children}
      </div>
    </>
  );
};

export default IconBox;
