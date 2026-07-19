"use client"

import { motion } from "framer-motion"
import { featuredProjects } from "@/lib/projects"
import ProjectCard from "./project-card"

export default function FeaturedProjects() {
  const transition = { duration: 0.6, ease: "easeOut" as const }

  return (
    <section id="featured-projects" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={transition}
        className="space-y-2"
      >
        <p className="font-mono text-sm text-accent">Selected work</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Featured Projects</h2>
        <p className="text-muted-foreground max-w-[55ch]">
          A few recent projects that represent the kind of work I enjoy: clean interfaces, solid architecture, and shipped features.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
