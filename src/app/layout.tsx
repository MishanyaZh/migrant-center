import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavLinks from "./ui/NavLinks/NavLinks";
import { mainRoutes } from "./utils/routes";
import Providers from "./Providers";
import Header from "./ui/Header/Header";
import Footer from "./ui/Footer/Footer";
import { serviceKeywords } from "./ui/Services/servicesData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Centrum Migranta - Центр Мігранта",
  description: "Легалізація. Бізнес. Освіта.",
  keywords: `Centrum Migranta, Центр Мігранта, ${serviceKeywords}`,
  authors: [
    {
      name: "Centrum Migranta - Центр Мігранта",
      url: "https://migrant-center.vercel.app/",
    },
  ],
  metadataBase: new URL("https://migrant-center.vercel.app/"),
  openGraph: {
    title: "Centrum Migranta - Центр Мігранта",
    description: "Легалізація. Бізнес. Освіта.",
    url: "https://migrant-center.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://migrant-center.vercel.app/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "Centrum Migranta - Центр Мігранта",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Centrum Migranta - Центр Мігранта",
    description: "Легалізація. Бізнес. Освіта.",
    images: ["https://migrant-center.vercel.app/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning className="">
      <head>
        <link rel="canonical" href="https://migrant-center.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Centrum Migranta - Центр Мігранта",
              url: "https://migrant-center.vercel.app/",
              logo: "https://migrant-center.vercel.app/logo.png",
              sameAs: ["https://www.facebook.com/migrantgorzow"],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans h-full`}>
        <Providers>
          <Header />
          <NavLinks links={mainRoutes} />
          <main className="mt-[64px] md:mt-0 flex-grow backgroundContainer">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
