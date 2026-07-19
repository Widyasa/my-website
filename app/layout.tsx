import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://widya-yasa.vercel.app"),
  title: {
    default: "Widya Yasa — Full-stack developer & Game Developer",
    template: "%s — Widya Yasa",
  },
  description: "Personal portfolio of Widya Yasa, a passionate full-stack developer and Game Developer.",
  openGraph: {
    title: "Widya Yasa — Full-stack developer & Game Developer",
    description: "Personal portfolio of Widya Yasa, a passionate full-stack developer and Game Developer.",
    url: "/",
    siteName: "Widya Yasa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Widya Yasa — Full-stack developer & Game Developer",
    description: "Personal portfolio of Widya Yasa, a passionate full-stack developer and Game Developer.",
  },
  icons: {
    icon: "/logo.svg",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
