// import type { Metadata } from "next"
// import AppHeader from "@/components/app-header"
// import AnimatedSection from "@/components/animated-section"
// import ParticleBackground from "@/components/particle-background"

// export const metadata: Metadata = {
//   title: "Projects - John Doe",
//   description: "Projects and work by John Doe",
// }

// const projects = [
//   {
//     id: 1,
//     name: "AwesomeLib",
//     description: "A powerful JavaScript library for building modern web applications with ease.",
//     technologies: ["JavaScript", "TypeScript", "Node.js"],
//     github: "https://github.com",
//     demo: "https://demo.com",
//   },
//   {
//     id: 2,
//     name: "CoolTool",
//     description: "A developer tool that helps streamline the development workflow.",
//     technologies: ["React", "Next.js", "TailwindCSS"],
//     github: "https://github.com",
//     demo: null,
//   },
//   {
//     id: 3,
//     name: "DevUtils",
//     description: "Collection of utilities for developers to boost productivity.",
//     technologies: ["Python", "FastAPI", "PostgreSQL"],
//     github: "https://github.com",
//     demo: "https://demo.com",
//   },
//   {
//     id: 4,
//     name: "Portfolio Website",
//     description: "This very website you are looking at, built with Next.js.",
//     technologies: ["Next.js", "React", "TailwindCSS"],
//     github: "https://github.com",
//     demo: "https://demo.com",
//   },
// ]

// export default function Projects() {
//   return (
//     <div className="relative">
//       <ParticleBackground />
//       <AppHeader />

//       <main className="pt-20 pb-16 relative z-10">
//         <div className="max-w-4xl mx-auto px-6">
//           <AnimatedSection>
//             <div className="mb-12">
//               <h1 className="text-4xl font-bold mb-4">Projects</h1>
//               <p className="text-muted-foreground text-lg">Some of the projects I've worked on</p>
//             </div>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <AnimatedSection key={project.id} delay={index * 0.1}>
//                 <div className="bg-card rounded-lg p-6 hover:bg-accent transition-colors duration-200 border border-border">
//                   <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
//                   <p className="text-muted-foreground mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech) => (
//                       <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex space-x-4">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-foreground hover:text-muted-foreground text-sm underline transition-colors"
//                     >
//                       GitHub
//                     </a>
//                     {project.demo && (
//                       <a
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-foreground hover:text-muted-foreground text-sm underline transition-colors"
//                       >
//                         Live Demo
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
