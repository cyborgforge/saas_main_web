import React from "react";
import type { Metadata } from "next";
import { Anton } from "next/font/google";

import "./globals.css";
import { PageShell } from "../components/page-shell";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "FluxWorks",
  description:
    "We build scalable SaaS products for modern businesses. Pharmacy Management, Retail Suite, and Clinic Management solutions.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${anton.variable}`}>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
