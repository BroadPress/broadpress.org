import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "BroadPress - WordPress Alternative for Multi-Network News Publishing",
  description:
    "Revolutionizing how newsrooms publish and distribute content across multiple platforms from one central hub.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans bg-white text-gray-900 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
