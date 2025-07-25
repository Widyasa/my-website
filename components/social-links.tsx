import AnimatedSection from "./animated-section"

const socialLinks = [
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
]

export default function SocialLinks() {
  return (
    <AnimatedSection delay={0.6}>
      <section className="mt-16 pt-8 border-t border-border">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">Find me on</h3>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-secondary hover:bg-accent px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <span className="text-sm">{social.name}</span>
              </a>
            ))}
          </div>

          <div className="text-muted-foreground">
            <p className="mb-2">Or mail me at</p>
            <a
              href="mailto:john@example.com"
              className="text-foreground hover:text-muted-foreground underline transition-colors duration-300"
            >
              john@example.com
            </a>
          </div>

          {/* Copyright Section */}
   
        </div>
      </section>
    </AnimatedSection>
  )
}
