import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Widya Yasa - Full Stack Developer",
  description: "Personal portfolio of WIdya Yasa, a passionate full-stack developer and Game Developer.",
  icons: {
    icon: 'logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans theme-transition">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
           <div className="mt-12 pt-6 border-t border-border text-center pb-6">
            <p className="text-xs text-muted-foreground">
              © 2025 Widya Yasa. Website inspired by{" "}
              <a
                href="https://antfu.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground underline transition-colors duration-300"
              >
                antfu.me
              </a>
            </p>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
