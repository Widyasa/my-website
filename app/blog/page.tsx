import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import AnimatedSection from "@/components/animated-section"
import ParticleBackground from "@/components/particle-background"

export const metadata: Metadata = {
  title: "Blog - John Doe",
  description: "Blog posts by John Doe about development, design, and technology",
}

// Keep the posts data for future use (commented out)
/*
const posts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js 15",
    slug: "building-modern-web-apps-nextjs15",
    excerpt:
      "Exploring the latest features of Next.js 15 and how it revolutionizes React development with better performance and developer experience.",
    date: "2024-01-15",
    category: "Web Development",
    tags: ["nextjs", "react", "javascript"],
  },
  {
    id: 2,
    title: "The Art of Clean Code: Best Practices for Developers",
    slug: "art-of-clean-code",
    excerpt:
      "Learn essential principles and practices for writing maintainable, readable, and efficient code that your future self will thank you for.",
    date: "2024-01-10",
    category: "Programming",
    tags: ["clean-code", "best-practices", "development"],
  },
  {
    id: 3,
    title: "Mastering TailwindCSS: From Basics to Advanced",
    slug: "mastering-tailwindcss",
    excerpt:
      "A comprehensive guide to TailwindCSS, covering everything from basic utilities to advanced customization and optimization techniques.",
    date: "2024-01-05",
    category: "CSS",
    tags: ["tailwind", "css", "design"],
  },
  {
    id: 4,
    title: "TypeScript Tips and Tricks for Better Development",
    slug: "typescript-tips-tricks",
    excerpt:
      "Discover advanced TypeScript features and patterns that will make your code more robust, type-safe, and maintainable.",
    date: "2023-12-28",
    category: "TypeScript",
    tags: ["typescript", "javascript", "tips"],
  },
]
*/

export default function Blog() {
  return (
    <div className="relative">
      <ParticleBackground />
      <AppHeader />

      <main className="pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">Blog</h1>
              <p className="text-muted-foreground text-lg">Thoughts on development, design, and technology</p>
            </div>
          </AnimatedSection>

          {/* Coming Soon Section */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="bg-card rounded-lg p-12 border border-border max-w-md">
                <div className="text-6xl mb-6 animate-pulse">🚧</div>
                <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
                <div className="prose">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm currently working on some exciting blog posts about web development, coding best practices, and
                    technology insights.
                  </p>
                  <p className="text-sm text-muted-foreground">Stay tuned for updates!</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Future blog posts will be displayed here */}
          {/*
          <div className="space-y-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <article className="bg-card rounded-lg p-6 hover:bg-accent transition-colors duration-200 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <time className="text-muted-foreground text-sm">{formatDate(post.date)}</time>
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-semibold mb-3 hover:text-muted-foreground transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <div className="prose">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-foreground hover:text-muted-foreground text-sm underline transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
          */}
        </div>
      </main>
    </div>
  )
}
