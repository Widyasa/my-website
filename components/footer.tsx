import Link from "next/link"
import { Github, Instagram, Linkedin } from "lucide-react"

const socials = [
  { name: "GitHub", href: "https://github.com/widyasa", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/widya-yasa/", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/widya_yasaa/", icon: Instagram },
]

const nav = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-sm font-semibold text-foreground">Widya Yasa</Link>
            <p className="text-sm text-muted-foreground">Full-stack developer &amp; Game Developer</p>
          </div>

          <nav className="flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Widya Yasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
