"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted ? (
        currentTheme === "dark" ? (
          <div onClick={() => setTheme("light")}>
            <MdLightMode className="text-2xl" />
          </div>
        ) : (
          <div onClick={() => setTheme("dark")}>
            <MdDarkMode className="text-2xl" />
          </div>
        )
      ) : (
        <Loading height={24} width={24} center />
      )}
    </>
  );
};

export default DarkModeSwitch;
