import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valdaria Creation | Premium Wholesale Menswear",
  description:
    "Premium wholesale menswear supplier based in Mumbai. Formal shirts, trousers, and kurtas for retailers and boutique owners across India. 30+ years of excellence.",
  keywords: [
    "wholesale menswear",
    "wholesale shirts Mumbai",
    "wholesale kurtas",
    "menswear supplier India",
    "Kalbadevi wholesale clothing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
