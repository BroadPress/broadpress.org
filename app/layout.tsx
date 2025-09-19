import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"
import { Suspense } from "react"

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
  title: "BroadPress - WordPress Alternative Corporate CMS",
  description:
    "Powerful WordPress alternative built for Corporate Grade CMS on Cloud.",
  generator: "v0.app",
  metadataBase: new URL("https://broadpress.org"),
  openGraph: {
    title: "BroadPress - WordPress Alternative Corporate CMS",
    description:
      "Powerful WordPress alternative built for Corporate Grade CMS on Cloud.",
    url: "https://broadpress.org",
    siteName: "BroadPress",
    images: [
      {
        url: "https://i.ibb.co/pjDbMZ0v/Broad-Press-Logo.png",
        width: 1200,
        height: 630,
        alt: "BroadPress - WordPress Alternative Corporate CMS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BroadPress - BroadPress - WordPress Alternative Corporate CMS",
    description:
      "BroadPress is a powerful WordPress alternative corporate CMS built for modern enterprises",
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
      <body className="font-sans bg-white text-gray-900 min-h-screen flex flex-col">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-K5PW3M7Z46" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K5PW3M7Z46');
          `}
        </Script>

        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
