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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "light-theme": "linear-gradient(135deg, #f0f0f0, #e0e0e0)",
        "dark-theme": "linear-gradient(135deg, #0f0f0f, #333333)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
