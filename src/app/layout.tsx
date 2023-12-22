import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "./_conponents/Header";
import Footer from "./_conponents/Footer";

const inter = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Rimi's Kitchen | Make Your Kitchen Enjoyable",
    template: "%s | Rimi's Kitchen",
  },
  description: `Welcome to Rimi's Kitchen – the place where cooking is fun and easy! Rimi's Kitchen is all about sharing yummy recipes with everyone. Whether you're a pro in the kitchen or just starting out, Rimi makes cooking simple and enjoyable.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
