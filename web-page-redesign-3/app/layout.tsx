import React from "react"
import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lumina Data | Decisiones que escalan',
  description: 'Ayudamos a E-commerce y productos digitales a crecer con datos. Embudo, retencion y decisiones con impacto real.',
  generator: 'v0.app',
  icons: {
    icon: '/luminadatalogo.png',
    apple: '/luminadatalogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
