export interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  image: string
  github: string | null
  live: string | null
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "kanban-flow",
    name: "KanbanFlow",
    description: "A real-time collaborative board with drag-and-drop tasks, team workspaces, and activity history.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    image: "/img/project-kanban.svg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "inventory-pro",
    name: "Inventory Pro",
    description: "Multi-warehouse inventory dashboard with low-stock alerts, role-based access, and export reports.",
    tech: ["Laravel", "Vue", "PostgreSQL", "Docker"],
    image: "/img/project-inventory.svg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "dungeon-crawler",
    name: "Dungeon Echo",
    description: "2D roguelike prototype built in Unity with procedural room generation and turn-based combat.",
    tech: ["Unity", "C#", "Aseprite"],
    image: "/img/project-game.svg",
    github: "https://github.com",
    live: null,
    featured: true,
  },
  {
    id: "event-ticketing",
    name: "Eventick",
    description: "Event ticketing platform with QR check-in, seat selection, and organizer analytics.",
    tech: ["Nuxt.js", "Prisma", "MySQL", "Stripe"],
    image: "/img/project-ticket.svg",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: "ai-chat-widget",
    name: "ChatWidget",
    description: "Embeddable customer-support widget with streaming responses and conversation history.",
    tech: ["React", "Vite", "OpenAI", "Zod"],
    image: "/img/project-chat.svg",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
