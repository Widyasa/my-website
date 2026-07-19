import ProfileSection from "@/components/profile-section"

export default function Home() {
  return (
    <main className="md:pt-10 pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="min-h-screen flex flex-col justify-center">
          <ProfileSection />
        </div>
      </div>
    </main>
  )
}
