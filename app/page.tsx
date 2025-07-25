import AppHeader from "@/components/app-header"
import ProfileSection from "@/components/profile-section"
import SocialLinks from "@/components/social-links"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <div className="relative">
      <ParticleBackground />
      {/* <AppHeader /> */}

      <main className="md:pt-10 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="min-h-screen flex flex-col justify-center">
            <ProfileSection />
            {/* <SocialLinks /> */}
          </div>
        </div>
      </main>
    </div>
  )
}
