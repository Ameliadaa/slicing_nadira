import type { Metadata } from "next";
import { Poppins,  Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: [ "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plusJakartaSans",
  weight: [ "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});


export const metadata: Metadata = {
  title: "Slicing Nadira",
  description: "Slicing homepage Nadira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
