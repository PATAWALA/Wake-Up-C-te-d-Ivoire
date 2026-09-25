export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2250700000000";

export const organizationInfo = {
  name: "Wake Up Côte d'Ivoire",
  parent: "WAKE-UP GLOBAL",
  tagline: "Mobiliser la jeunesse, Structurer l'éducation",
  description:
    "Mouvement panafricain dédié à l'éducation, à l'éveil citoyen et à l'autonomisation de la jeunesse ivoirienne à travers des conférences, formations et programmes de mentorat.",
  whatsapp: WHATSAPP_NUMBER,
};

export const impactStats = [
  { id: "youth", value: "15 000+", label: "Jeunes impactés", icon: "Users" },
  { id: "conferences", value: "12+", label: "Conférences majeures", icon: "Calendar" },
  { id: "members", value: "500+", label: "Membres actifs", icon: "Award" },
  { id: "trainings", value: "40+", label: "Formations dispensées", icon: "GraduationCap" },
] as const;

export interface EventItem {
  id: string;
  title: string;
  category: "Conférence" | "Formation" | "Atelier" | "Summit";
  date: string;
  time: string;
  location: string;
  city: string;
  description: string;
  image: string;
  seats: number;
  seatsLeft: number;
  price: string;
  featured?: boolean;
}

export const upcomingEvents: EventItem[] = [
  {
    id: "summit-2026",
    title: "Summit Éducation & Leadership 2026",
    category: "Summit",
    date: "14 Mars 2026",
    time: "09:00 — 18:00",
    location: "Palais des Congrès",
    city: "Abidjan",
    description:
      "Le rendez-vous annuel de la jeunesse ivoirienne : panels d'experts, masterclass et networking avec les leaders du continent.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    seats: 2000,
    seatsLeft: 342,
    price: "Gratuit",
    featured: true,
  },
  {
    id: "orientation-carriere",
    title: "Atelier Orientation & Carrière",
    category: "Atelier",
    date: "22 Février 2026",
    time: "14:00 — 17:00",
    location: "Campus Wake Up",
    city: "Yamoussoukro",
    description:
      "Aide à la définition du projet professionnel, rédaction de CV et simulation d'entretiens avec des recruteurs.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    seats: 150,
    seatsLeft: 28,
    price: "5 000 FCFA",
  },
  {
    id: "numerique-ia",
    title: "Bootcamp Numérique & Intelligence Artificielle",
    category: "Formation",
    date: "05 Avril 2026",
    time: "08:30 — 16:30",
    location: "Hub Technologique",
    city: "Bouaké",
    description:
      "Immersion intensive dans les métiers du numérique : développement web, data et IA appliquée.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
    seats: 80,
    seatsLeft: 12,
    price: "10 000 FCFA",
  },
];

export const programs = [
  {
    id: "mentorat",
    title: "Programme de Mentorat",
    description:
      "Chaque jeune est accompagné pendant 12 mois par un professionnel pour structurer son projet de vie.",
    icon: "Users",
  },
  {
    id: "bourses",
    title: "Bourses & Orientation",
    description:
      "Accompagnement aux candidatures nationales et internationales, préparation aux concours.",
    icon: "GraduationCap",
  },
  {
    id: "leadership",
    title: "Académie du Leadership",
    description:
      "Cycle de formation civique et de leadership pour former les décideurs de demain.",
    icon: "Award",
  },
  {
    id: "bibliotheque",
    title: "Bibliothèque Numérique",
    description:
      "Accès libre à des ressources pédagogiques, e-books et replays des conférences.",
    icon: "BookOpen",
  },
] as const;

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export const newsFeed: NewsItem[] = [
  {
    id: "news-1",
    title: "10 000 jeunes sensibilisés dans 5 régions",
    excerpt:
      "Notre tournée nationale a mobilisé les jeunes autour des enjeux d'éducation et d'entrepreneuriat.",
    date: "18 Janvier 2026",
    category: "Terrain",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "news-2",
    title: "Partenariat avec 3 universités publiques",
    excerpt:
      "Un accord cadre pour intégrer nos modules de leadership dans les cursus universitaires.",
    date: "02 Janvier 2026",
    category: "Institutionnel",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "news-3",
    title: "Lancement du fonds d'amorçage étudiant",
    excerpt:
      "Un fonds de 50 millions FCFA pour financer les projets innovants portés par des étudiants.",
    date: "12 Décembre 2025",
    category: "Entrepreneuriat",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
];