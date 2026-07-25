import Hero from '../sections/Hero';
import Marquee from '../components/game/Marquee';
import WorkSection from '../sections/WorkSection';
import SkillsSection from '../sections/SkillsSection';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import type { NavTarget } from '../sections/Header';

interface HomeProps {
  onNav: (target: NavTarget) => void;
}

const TAPE_1 = ['FULL-STACK DEVELOPER', 'GAME DEVELOPER', 'REACT', 'VUE', 'LARAVEL', 'UNITY', 'TYPESCRIPT', 'NEXT.JS'];
const TAPE_2 = ['OPEN TO FREELANCE', 'OPEN TO FULL-TIME', 'BASED IN BALI', 'SHIPS FEATURES', 'PLAYS ROGUELIKES'];

export default function Home({ onNav }: HomeProps) {
  return (
    <>
      <Hero onViewProjects={() => onNav('projects')} onContact={() => onNav('contact')} />
      <Marquee items={TAPE_1} />
      <WorkSection onOpenProjects={() => onNav('projects')} />
      <div className="pixel-divider mx-auto max-w-6xl" />
      <SkillsSection />
      <Marquee items={TAPE_2} reverse pink />
      <AboutSection />
      <ContactSection />
    </>
  );
}
