import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frenergysolucoes.com.br"),
  title: "Frenergy Soluções | Energia Solar",
  description:
    "Frenergy Soluções em Energia Solar. Economize até 95% na conta de luz com instalação de painéis solares para residências, comércios e indústrias.",
  icons: {
    icon: "/frenergy-logo.svg",
  },
  openGraph: {
    title: "Frenergy Soluções | Energia Solar",
    description:
      "Frenergy Soluções em Energia Solar. Economize até 95% na conta de luz com instalação de painéis solares para residências, comércios e indústrias.",
    url: "https://frenergysolucoes.com.br",
    siteName: "Frenergy Soluções",
    images: [
      {
        url: "/bg-home.jpg",
        width: 1200,
        height: 630,
        alt: "Frenergy Soluções - Energia Solar",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frenergy Soluções | Energia Solar",
    description:
      "Frenergy Soluções em Energia Solar. Economize até 95% na conta de luz com instalação de painéis solares para residências, comércios e indústrias.",
    images: ["/bg-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-montserrat">{children}</body>
    </html>
  );
}
