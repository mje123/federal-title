export interface TeamMember {
  name: string;
  title: string;
  slug: string;
  image: string;
  bio?: string;
  email?: string;
  phone?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Todd Ewing, Esq.',
    title: 'Founder & CEO, Attorney',
    slug: 'todd-ewing',
    image: '/images/team/headshot-3-1-002-afb1fe7c.jpeg',
    bio: 'Todd founded Federal Title & Escrow Company in 1994 with a simple idea: independent, attorney-led title services at a fair price. Over 30 years later, that vision has resulted in 50,000+ successful closings across DC, Maryland, and Virginia.',
  },
  {
    name: 'Luke Bacigalupo, Esq.',
    title: 'COO & Settlement Attorney',
    slug: 'luke-bacigalupo',
    image: '/images/team/luke_bacigalupo.jpg',
    bio: 'Luke serves as Chief Operating Officer and Settlement Attorney, overseeing daily operations and ensuring every closing runs smoothly. His expertise in real estate law and operations makes him an invaluable resource for clients.',
  },
  {
    name: 'Stephanie Dudley Caster, Esq.',
    title: 'Settlement Attorney & Managing Attorney',
    slug: 'stephanie-dudley-caster',
    image: '/images/team/stephanie_dudley.jpg',
    bio: 'Stephanie is a Settlement and Managing Attorney at Federal Title, guiding clients through complex transactions with clarity and precision. She oversees the 14th Street office and brings extensive experience in DC real estate law.',
  },
  {
    name: 'Jessica Youngs, Esq.',
    title: 'Counsel – Fairfax Office',
    slug: 'jessica-youngs',
    image: '/images/team/mg_3176-jessica-youngs-print-008f6860.jpeg',
    bio: 'Jessica is Principal of Youngs Law, PLLC, serving as Counsel to Federal Title & Escrow Company at the Fairfax Office. She brings deep expertise in Virginia real estate transactions.',
  },
  {
    name: 'Anthea Higgins',
    title: 'Settlement Processor',
    slug: 'anthea-higgins',
    image: '/images/team/anthea_higgins.jpg',
  },
  {
    name: 'Melina Carroll',
    title: 'Settlement Processor',
    slug: 'melina-carroll',
    image: '/images/team/melina_carroll.jpg',
  },
  {
    name: 'Tabitha Frenke',
    title: 'Settlement Processor',
    slug: 'tabitha-frenke',
    image: '/images/team/headshot-1-4-dd8cabd9.jpeg',
  },
  {
    name: 'Daniel Cox',
    title: 'Controller',
    slug: 'daniel-cox',
    image: '/images/team/dan_cox.jpg',
  },
  {
    name: 'Dedra Roberts',
    title: 'Post-Closing Manager',
    slug: 'dedra-roberts',
    image: '/images/team/dedra-headshot-ed40e868.jpeg',
  },
  {
    name: 'Jessika Roberts',
    title: 'Post-Closing Assistant',
    slug: 'jessika-roberts',
    image: '/images/team/image001-a6f61eec.jpeg',
  },
];
