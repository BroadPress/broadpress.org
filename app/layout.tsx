import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"
import Script from "next/script"

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
  metadataBase: new URL("https://broadpress.org"),
  openGraph: {
    title: "BroadPress - WordPress Alternative for Multi-Network News Publishing",
    description:
      "Revolutionizing how newsrooms publish and distribute content across multiple platforms from one central hub.",
    url: "https://broadpress.org",
    siteName: "BroadPress",
    images: [
      {
        url: "https://i.ibb.co/pjDbMZ0v/Broad-Press-Logo.png",
        width: 1200,
        height: 630,
        alt: "BroadPress - Multi-Network News Publishing Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BroadPress - WordPress Alternative for Multi-Network News Publishing",
    description:
      "Revolutionizing how newsrooms publish and distribute content across multiple platforms from one central hub.",
    images: ["https://i.ibb.co/pjDbMZ0v/Broad-Press-Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://i.ibb.co/pjDbMZ0v/Broad-Press-Logo.png",
    shortcut: "https://i.ibb.co/pjDbMZ0v/Broad-Press-Logo.png",
    apple: "https://i.ibb.co/pjDbMZ0v/Broad-Press-Logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-K5PW3M7Z46" strategy="beforeInteractive" async />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K5PW3M7Z46');
        `}
      </Script>

      <body className="font-sans bg-white text-gray-900 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
