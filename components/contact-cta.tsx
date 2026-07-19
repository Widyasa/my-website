"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Check, Copy, Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const socials = [
  { name: "GitHub", href: "https://github.com/widyasa", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/widya-yasa/", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/widya_yasaa/", icon: Instagram },
]

const email = "widya@example.com"

export default function ContactCTA() {
  const [copied, setCopied] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const transition = { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" as const }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={transition}
        className="text-center"
      >
        <p className="font-mono text-sm text-accent">Contact</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">Let’s work together</h2>
        <p className="mt-4 mx-auto max-w-[55ch] text-muted-foreground">
          Have a project in mind or just want to say hi? I’m currently open to freelance work and full-time opportunities.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail className="h-4 w-4" />
            Send an email
          </a>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
            aria-live="polite"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
              >
                <Icon className="h-4 w-4" />
                {social.name}
              </Link>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
