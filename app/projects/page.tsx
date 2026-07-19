import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects - Widya Yasa",
  description: "A collection of web and game projects by Widya Yasa.",
}

export default function Projects() {
  return (
    <>
      <AppHeader />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="space-y-2">
          <p className="font-mono text-sm text-accent">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">All Projects</h1>
          <p className="text-muted-foreground max-w-[55ch]">
            The full list of projects I’ve worked on, from web applications to game prototypes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
