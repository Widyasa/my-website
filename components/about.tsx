"use client"

import { motion } from "framer-motion"

export default function About() {
  const transition = { duration: 0.6, ease: "easeOut" as const }

  return (
    <section id="about" className="py-20 md:py-28 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={transition}
        className="space-y-2"
      >
        <p className="font-mono text-sm text-accent">About</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">A little more about me</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ ...transition, delay: 0.1 }}
        className="mt-8 grid gap-6 text-muted-foreground leading-relaxed md:grid-cols-2"
      >
        <p>
          I’m someone who genuinely enjoys learning new things and sharing them with others. Whether it’s a casual chat, a sharing session, or mentoring, helping people grow is something I value.
        </p>
        <p>
          I’m active in a few tech communities because I believe the best way to grow is to be around people who are just as excited to learn. Connecting, collaborating, and growing together is important to me.
        </p>
        <p>
          Outside of coding, I’m into anime, gaming, and exploring new places. I also enjoy food — trying out new restaurants or cooking something delicious at home.
        </p>
        <p>
          To me, life is about continuous learning, meaningful sharing, and enjoying the journey both online and offline.
        </p>
      </motion.div>
    </section>
  )
}
