import AppHeader from "@/components/app-header"
import About from "@/components/about"
import ContactCTA from "@/components/contact-cta"
import FeaturedProjects from "@/components/featured-projects"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <>
      <AppHeader />
      <main className="max-w-4xl mx-auto px-6">
        <Hero />
        <FeaturedProjects />
        <Skills />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
