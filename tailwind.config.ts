import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-backdrop": "var(--theme-backdrop)",
        "theme-background": "var(--theme-background)",
        "theme-background-2": "var(--theme-background-2)",
        "textColor-regular": "var(--textColor-regular)",
        "textColor-primary": "var(--textColor-primary)",
        "textColor-secondary": "var(--textColor-secondary)",

        "special-yellow": "var(--special-yellow)",
        "special-violet": "var(--special-violet)",
        "special-white": "var(--special-white)",
        "special-green": "var(--special-green)",
      },
      backgroundImage: {
        "theme-backdrop": "var(--theme-backdrop)",
        "theme-background": "var(--theme-background)",
        "theme-background-2": "var(--theme-background-2)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
