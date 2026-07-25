// ------------------------------------------------------------------
// CONTENT edit values here, the whole site reads from this file.
// EMAIL: isi alamat email kamu untuk mengaktifkan tombol
// "SEND AN EMAIL" / "COPY EMAIL" di bagian kontak.
// ------------------------------------------------------------------

export const EMAIL = ''; // contoh: 'widyayasa@gmail.com'

export const profile = {
  name: 'Widya Yasa',
  role: 'Full-stack developer & Game developer',
  location: 'Denpasar, Bali, Indonesia',
  tagline:
    'I build web apps and game experiences that feel fast, intentional, and easy to use. Currently taking freelance projects and open to full-time opportunities.',
  status: 'OPEN TO WORK',
  github: 'https://github.com/widyasa',
  linkedin: 'https://www.linkedin.com/in/widya-yasa/',
  instagram: 'https://www.instagram.com/widya_yasaa/',
};

export type ThumbKind = 'velnara' | 'ppni' | 'pawsplash' | 'visualnovel' | 'midnighttoys' | 'akumampu';

export interface Project {
  id: string;
  stage: string;
  title: string;
  category: 'WEB APP' | 'GAME';
  kind: string;
  role: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  thumb: ThumbKind;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'velnara',
    stage: '01',
    title: 'Velnara Creative',
    category: 'WEB APP',
    kind: 'STUDIO SITE',
    role: 'Web Developer',
    description:
      'Website for a creative digital studio serving startups and SMEs brand identity, social media, company profiles, and e-commerce services.',
    tags: ['Company Profile', 'Multilingual', 'Creative Studio'],
    link: 'https://www.velnaracreative.com/en',
    linkLabel: 'VISIT SITE',
    thumb: 'velnara',
    featured: true,
  },
  {
    id: 'ppni',
    stage: '02',
    title: 'DPK PPNI RSUP Prof. Ngoerah',
    category: 'WEB APP',
    kind: 'ORG PLATFORM',
    role: 'Web Developer',
    description:
      'Official platform for the nurses association of Prof. Ngoerah Hospital member profiles, news, letters, financial reports, dues, and e-journal.',
    tags: ['Laravel', 'Membership', 'CMS'],
    link: 'https://www.dpkppni-rsupprofngoerah.org/',
    linkLabel: 'VISIT SITE',
    thumb: 'ppni',
    featured: false,
  },
  {
    id: 'akumampu',
    stage: '03',
    title: 'Aku Mampu AI',
    category: 'WEB APP',
    kind: 'LMS PLATFORM',
    role: 'Web Developer',
    description:
      'Disability-friendly AI training platform with sign-language support and screen-reader compatibility reaching thousands of learners across Indonesia.',
    tags: ['Accessibility', 'LMS', 'Social Impact'],
    link: 'https://akumampu.annikalindencentre.org/',
    linkLabel: 'VISIT SITE',
    thumb: 'akumampu',
    featured: true,
  },
  {
    id: 'midnight-toys',
    stage: '04',
    title: 'Midnight Toys',
    category: 'GAME',
    kind: 'SURVIVAL HORROR',
    role: 'Programmer',
    description:
      'FNAF-style night-guard horror: manage CCTV, flash, and a fear bar while living doll prototypes hunt you down Gimersia 2025 submission.',
    tags: ['Horror', 'CCTV System', 'Game Jam'],
    link: 'https://palm-gamestudio.itch.io/midnight-toys',
    linkLabel: 'PLAY ON ITCH.IO',
    thumb: 'midnighttoys',
    featured: true,
  },
  {
    id: 'pawsplash',
    stage: '05',
    title: 'PawSplash',
    category: 'GAME',
    kind: 'ARCADE',
    role: 'Programmer',
    description:
      'Cute arcade battler: an orange cat auto-deflecting water balloons across five waves, with an "Orange Rage" ultimate built in 3 weeks for Gameseed 2026.',
    tags: ['Auto-Deflect', '5 Waves', 'Game Jam'],
    link: 'https://palm-gamestudio.itch.io/pawsplash',
    linkLabel: 'PLAY ON ITCH.IO',
    thumb: 'pawsplash',
    featured: false,
  },
  {
    id: 'visual-novel',
    stage: '06',
    title: 'Klub Kurator Misteri',
    category: 'GAME',
    kind: 'VISUAL NOVEL',
    role: 'Programmer',
    description:
      '“Balada Para Penghuni Kapuk” a mystery-club visual novel telling the ballad of the Kapuk residents, produced with Red Tail Animation.',
    tags: ['Visual Novel', 'Mystery', 'Narrative'],
    link: 'https://www.youtube.com/watch?v=_cSz-QGxNbg',
    linkLabel: 'WATCH TEASER',
    thumb: 'visualnovel',
    featured: false,
  },
];

export interface SkillGroup {
  id: string;
  label: string;
  items: { name: string; level: number }[]; // level 0–5
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    items: [
      { name: 'TypeScript', level: 5 },
      { name: 'React', level: 4 },
      { name: 'Next.js', level: 4 },
      { name: 'Vue', level: 5 },
      { name: 'Nuxt.js', level: 5 },
      { name: 'Tailwind CSS', level: 5 },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    items: [
      { name: 'Laravel', level: 4 },
      { name: 'Node.js', level: 4 },
      { name: 'Supabase', level: 4 },
      { name: 'Prisma', level: 4 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'MySQL', level: 4 },
    ],
  },
  {
    id: 'gamedev',
    label: 'GAME DEV',
    items: [
      { name: 'Unity', level: 4 },
      { name: 'C#', level: 4 },
    ],
  },
];

export const playerStats = [
  { stat: 'CODE', value: 95 },
  { stat: 'SHIP', value: 92 },
  { stat: 'PIXEL', value: 78 },
  { stat: 'COFFEE', value: 99 },
];

export const about = {
  paragraphs: [
    'I’m someone who genuinely enjoys learning new things and sharing them with others. Whether it’s a casual chat, a sharing session, or mentoring, helping people grow is something I value.',
    'I’m active in a few tech communities because I believe the best way to grow is to be around people who are just as excited to learn. Connecting, collaborating, and growing together is important to me.',
    'To me, life is about continuous learning, meaningful sharing, and enjoying the journey both online and offline.',
  ],
  sideQuests: [
    { label: 'ANIME', detail: 'Currently enchanted by Frieren' },
    { label: 'GAMING', detail: 'Roguelikes & Online Games' },
    { label: 'EXPLORING', detail: 'New places around Bali & beyond' },
    { label: 'FOOD', detail: 'New restaurants, or cooking at home' },
  ],
};
