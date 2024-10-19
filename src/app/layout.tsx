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
  keywords:
    "Centrum Migranta, Центр Мігранта, карта побиту, карта сталого побиту, карта резидента, громадянство, Присяжні переклади, Шлюб на території Польщі, Відкриття фірми, Написання бізнес-плану, Усі види довіреностей, Апостиль на документи, Заміна та перевірка водійських прав, Оформлення КОД 95, чіп-картки водія, Дозволи на роботу для візи, 800+, 300+, Profil Zaufany, PIT, Легалізація, Бізнес, Освіта",
  authors: [
    {
      name: "Centrum Migranta - Центр Мігранта",
      url: "https://migrant-center.vercel.app/",
    },
  ],
  metadataBase: new URL("https://migrant-center.vercel.app/"),
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
