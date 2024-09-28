import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavLinks from "./ui/NavLinks/NavLinks";
import { mainLinks } from "./ui/NavLinks/linksData";
import Providers from "./Providers";
import Header from "./ui/Header/Header";
import Footer from "./ui/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <NavLinks links={mainLinks} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
