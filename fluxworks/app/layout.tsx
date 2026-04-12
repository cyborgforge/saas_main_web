import React from "react";
import type { Metadata } from "next";

import { Anton, Outfit } from "next/font/google";


import "./globals.css";
import { PageShell } from "../components/page-shell";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Fluxworks",
  description:
    "We build scalable SaaS products for modern businesses. Pharmacy Management, Retail Suite, and Clinic Management solutions.",
  generator: "v0.app",
  icons: {
    icon: "/onlylogo.png",
    shortcut: "/onlylogo.png",
    apple: "/onlylogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${anton.variable} ${outfit.variable}`}>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
