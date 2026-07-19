"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const skillGroups = [
  {
    label: "Frontend",
    items: [
      { name: "TypeScript", icon: "/img/typescript.svg" },
      { name: "React", icon: "/img/react.svg" },
      { name: "Vue", icon: "/img/vue.svg" },
      { name: "Nuxt.js", icon: "/img/nuxtjs.svg" },
      { name: "Next.js", icon: "/img/nextjs.svg" },
      { name: "Tailwind", icon: "/img/tailwind.svg" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Laravel", icon: "/img/laravel.svg" },
      { name: "Node.js", icon: "/img/nodejs.svg" },
      { name: "Supabase", icon: "/img/supabase.svg" },
      { name: "Prisma", icon: "/img/prisma.svg" },
      { name: "PostgreSQL", icon: "/img/postgres.svg" },
      { name: "MySQL", icon: "/img/mysql.svg" },
    ],
  },
  {
    label: "Game",
    items: [
      { name: "Unity", icon: "/img/unity.svg" },
    ],
  },
]

export default function Skills() {
  const transition = { duration: 0.6, ease: "easeOut" as const }

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={transition}
        className="space-y-2"
      >
        <p className="font-mono text-sm text-accent">Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Skills</h2>
        <p className="text-muted-foreground max-w-[55ch]">
          The tools and frameworks I reach for most often, grouped by the layer of the stack they serve.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-8">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              ...transition,
              delay: groupIndex * 0.08,
            }}
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-md border border-border",
                    "bg-secondary px-3 py-2 text-sm text-secondary-foreground",
                    "transition-colors hover:border-accent/30 hover:bg-accent-soft"
                  )}
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 opacity-80"
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
