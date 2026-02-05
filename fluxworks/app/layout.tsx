import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Anton } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton'
})

export const metadata: Metadata = {
  title: 'CloudSite - Scalable SaaS Products for Modern Businesses',
  description: 'We build scalable SaaS products for modern businesses. Pharmacy Management, Retail Suite, and Clinic Management solutions.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${anton.variable}`}>{children}</body>
    </html>
  )
}
