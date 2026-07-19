import Link from "next/link"
import Image from "next/image"
import AnimatedSection from "./animated-section"
import { cn } from "@/lib/utils"

export default function ProfileSection() {
  return (
    <section className="text-left mb-16 md:mt-10 mt-10">
      <AnimatedSection>
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl max-w-2xl mx-auto font-bold mb-4 text-foreground">
            Widya Yasa
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hey! I'm Widyasa, a passionate full-stack developer and Game Developer.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="space-y-4 text-left max-w-2xl mx-auto">
          <p className="text-muted-foreground">Working at</p>
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn("bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm")}>Freelance Project</span>
            <span className={cn("bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm")}>Palm Studio</span>
          </div>
          <p className="text-muted-foreground mt-5">My stack</p>
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/typescript.svg"
                alt="TypeScript"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              Typescript
            </span>
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/react.svg"
                alt="React"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              React
            </span>
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/vue.svg"
                alt="Vue"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              Vue
            </span>
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/nuxtjs.svg"
                alt="Nuxt.js"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              Nuxt.js
            </span>
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/nextjs.svg"
                alt="Next.js"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              Next.js
            </span>
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/laravel.svg"
                alt="Laravel"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              Laravel
            </span>
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/supabase.svg"
                alt="Supabase"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              Supabase
            </span>
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/unity.svg"
                alt="Unity"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              Unity
            </span>
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/prisma.svg"
                alt="Prisma"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              Prisma
            </span>
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/postgres.svg"
                alt="PostgreSQL"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              PostgreSQL
            </span>
            <span className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/mysql.svg"
                alt="MySQL"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              MySQL
            </span>
          </div>
          <p className="text-muted-foreground mt-5">Find Me At</p>
          <div className="flex flex-wrap items-center gap-2">
            <Link target="_blank" href={'https://github.com/widyasa'} className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/github.svg"
                alt="Github"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              Github
            </Link>
            <Link target="_blank" href={'https://www.linkedin.com/in/widya-yasa/'} className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/linkedin.svg"
                alt="Linkedin"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              LinkedIn
            </Link>
            <Link target="_blank" href={'https://www.instagram.com/widya_yasaa/'} className={cn("bg-secondary text-secondary-foreground transition-colors hover:bg-accent-soft px-2 py-1 rounded text-sm gap-1 flex items-center")}>
              <Image
                src="/img/instagram.svg"
                alt="Instagram"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              Instagram
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="mt-8 text-muted-foreground max-w-2xl mx-auto text-left space-y-4">
          <p>
            Hey! I'm someone who really enjoys learning new things and sharing them with others. I find joy in helping people grow whether it’s through casual chats, sharing sessions, or even teaching.
          </p>

          <p>
            I'm also active in a few tech communities because I believe the best way to grow is to be around people who are just as excited to learn. Connecting, collaborating, and growing together is something I truly value.
          </p>

          <p>
            Outside of coding, I’m into anime, gaming, and going out to explore new places. I also enjoys foods, whether it's trying out new restaurants or cooking up something delicious at home.
          </p>

          <p>
            To me, life is all about continuous learning, meaningful sharing, and enjoying the journey both online and offline.
          </p>
          </div>

      </AnimatedSection>
    </section>
  )
}
