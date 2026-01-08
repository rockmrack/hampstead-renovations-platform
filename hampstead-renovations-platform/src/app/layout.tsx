import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hampstead Renovations | Premium North London Builders",
    template: "%s | Hampstead Renovations",
  },
  description: "Award-winning renovation specialists serving Hampstead, Belsize Park, Primrose Hill & NW London. Full house renovations, extensions, loft conversions. 10-year guarantee.",
  keywords: ["renovation", "Hampstead", "NW3", "London builders", "extensions", "loft conversion", "refurbishment"],
  authors: [{ name: "Hampstead Renovations" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Hampstead Renovations",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
