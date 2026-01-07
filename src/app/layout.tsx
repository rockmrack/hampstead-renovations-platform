import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hampstead Renovations | Premium Home Renovation in NW3 London",
    template: "%s | Hampstead Renovations",
  },
  description:
    "London's trusted renovation specialists serving Hampstead, Belsize Park & North West London. Full house refurbishment, extensions, loft conversions. Get a free survey.",
  keywords: [
    "Hampstead renovation",
    "NW3 builders",
    "London house refurbishment",
    "extension builders Camden",
    "loft conversion Hampstead",
    "kitchen renovation London",
    "bathroom refurbishment NW3",
  ],
  authors: [{ name: "Hampstead Renovations" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Hampstead Renovations",
    title: "Hampstead Renovations | Premium Home Renovation in NW3 London",
    description:
      "London's trusted renovation specialists serving Hampstead & North West London.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
