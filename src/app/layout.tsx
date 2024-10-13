import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavLinks from "./ui/NavLinks/NavLinks";
import { mainRoutes } from "./utils/routes";
import Providers from "./Providers";
import Header from "./ui/Header/Header";
import Footer from "./ui/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CENTRUM MIGRANTA",
  description: "Punkty informacyjny dla migrantów",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning className="">
      <body className={`${inter.className} font-sans h-full`}>
        <Providers>
          <Header />
          <NavLinks links={mainRoutes} />
          <main className="mt-[64px] md:mt-0 flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
