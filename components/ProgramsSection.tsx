"use client";

import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { programs } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  Users,
  GraduationCap,
  Award,
  BookOpen,
} as const;

const colorMap = {
  mentorat: {
    bg: "bg-crimson/10",
    text: "text-crimson",
    ring: "ring-crimson/20",
    dot: "bg-crimson",
  },
  bourses: {
    bg: "bg-teal/10",
    text: "text-teal",
    ring: "ring-teal/20",
    dot: "bg-teal",
  },
  leadership: {
    bg: "bg-amber/15",
    text: "text-amber",
    ring: "ring-amber/20",
    dot: "bg-amber",
  },
  bibliotheque: {
    bg: "bg-azure/10",
    text: "text-azure",
    ring: "ring-azure/20",
    dot: "bg-azure",
  },
} as const;

const programDetails: Record<
  string,
  { duration: string; format: string; outcomes: string[] }
> = {
  mentorat: {
    duration: "12 mois",
    format: "Présentiel + visio",
    outcomes: [
      "Un mentor professionnel dédié",
      "Feuille de route personnalisée",
      "Suivi trimestriel documenté",
    ],
  },
  bourses: {
    duration: "6 mois",
    format: "Ateliers intensifs",
    outcomes: [
      "Dossier de candidature optimisé",
      "Coaching entretien & essais",
      "Base de données de bourses",
    ],
  },
  leadership: {
    duration: "9 mois",
    format: "Séminaires mensuels",
    outcomes: [
      "Modules de leadership civique",
      "Projets terrain encadrés",
      "Certificat Wake Up Leadership",
    ],
  },
  bibliotheque: {
    duration: "Accès permanent",
    format: "100% en ligne",
    outcomes: [
      "Replays des conférences",
      "E-books & fiches pratiques",
      "Ressources pédagogiques libres",
    ],
  },
};

export default function ProgramsSection() {
  return (
    <section
      id="programmes"
      className="relative py-16 sm:py-20 lg:py-24 bg-white scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 uppercase tracking-wider">
            <GraduationCap size={13} />
            Formations &amp; Programmes
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Quatre parcours pour{" "}
            <span className="text-teal">transformer la jeunesse</span>
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Chaque programme de Wake Up Côte d&apos;Ivoire est structuré,
            encadré et mesurable. Inscris-toi en quelques clics, un conseiller
            te contacte sous 48h.
          </p>
        </div>

        {/* Grille des programmes */}
        <div className="mt-12 grid sm:grid-cols-2 gap-5 lg:gap-6">
          {programs.map((p) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap] ?? BookOpen;
            const c = colorMap[p.id as keyof typeof colorMap];
            const details = programDetails[p.id];
            if (!details) return null;

            return (
              <article
                key={p.id}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 sm:p-7",
                  "shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                )}
              >
                {/* Accent top */}
                <span
                  className={cn(
                    "absolute top-0 left-0 right-0 h-1",
                    c.dot
                  )}
                />

                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl ring-1",
                      c.bg,
                      c.text,
                      c.ring
                    )}
                  >
                    <Icon size={22} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    <Clock size={12} />
                    {details.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  <span className={cn("h-1.5 w-1.5 rounded-full", c.dot)} />
                  {details.format}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {details.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className={cn("shrink-0 mt-0.5", c.text)}
                      />
                      {o}
                    </li>
                  ))}
                </ul>

                <a
                  href="#evenements"
                  className={cn(
                    "mt-6 group/btn inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all",
                    "bg-slate-900 text-white hover:bg-slate-800"
                  )}
                >
                  S&apos;inscrire au programme
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-0.5"
                  />
                </a>
              </article>
            );
          })}
        </div>

        {/* Bandeau CTA bas de section */}
        <div className="mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Tu hésites sur le programme à choisir ?
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Notre équipe pédagogique t&apos;accompagne gratuitement pour
              identifier le parcours le plus adapté à ton profil et à tes
              objectifs.
            </p>
          </div>
          <a
            href={`https://wa.me/${
              process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2250700000000"
            }?text=${encodeURIComponent(
              "Bonjour Wake Up Côte d'Ivoire, je souhaite être orienté(e) vers le programme adapté à mon profil."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-crimson/20 hover:bg-crimson/90 transition-all shrink-0"
          >
            Parler à un conseiller
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}