"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {

  const transition = { duration: 0.6, ease: "easeOut" as const }

  return (
    <section className="min-h-[calc(100vh-7rem)] flex flex-col justify-center py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="space-y-6"
      >
        <p className="font-mono text-sm text-accent">Full-stack developer &amp; Game Developer</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Widya Yasa
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[50ch] leading-relaxed">
          I build web apps and game experiences that feel fast, intentional, and easy to use. Currently taking freelance projects and open to full-time opportunities.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.1 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <Link
          href="#featured-projects"
          className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
        >
          View projects
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
        >
          Get in touch
          <Mail className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  )
}
