"use client";

import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  ArrowRight,
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
  mentorat: { bg: "bg-crimson/10", text: "text-crimson", ring: "ring-crimson/20" },
  bourses: { bg: "bg-teal/10", text: "text-teal", ring: "ring-teal/20" },
  leadership: { bg: "bg-amber/15", text: "text-amber", ring: "ring-amber/20" },
  bibliotheque: { bg: "bg-azure/10", text: "text-azure", ring: "ring-azure/20" },
} as const;

export default function ImpactSection() {
  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 uppercase tracking-wider">
            Notre impact
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Des programmes concrets pour la{" "}
            <span className="text-crimson">jeunesse ivoirienne</span>
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Wake Up Côte d&apos;Ivoire structure son action autour de quatre
            piliers complémentaires : le mentorat, l&apos;accès aux bourses,
            l&apos;académie du leadership et la bibliothèque numérique.
          </p>
        </div>

        {/* Grille des programmes */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((p) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap] ?? BookOpen;
            const c = colorMap[p.id as keyof typeof colorMap];
            return (
              <article
                key={p.id}
                className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl ring-1",
                    c.bg,
                    c.text,
                    c.ring
                  )}
                >
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-crimson transition-colors">
                  En savoir plus
                  <ArrowRight size={14} />
                </span>
              </article>
            );
          })}
        </div>

        {/* Bloc accomplissements */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-6 lg:gap-10 items-center rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8 lg:p-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Une organisation structurée, des résultats mesurables
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Chaque action de Wake Up Côte d&apos;Ivoire est documentée,
              mesurée et rendue publique. Notre plateforme centralise
              l&apos;ensemble des données pour garantir transparence et
              redevabilité auprès de nos partenaires et de la jeunesse.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Suivi nominatif des membres et participants",
                "Tableaux de bord d'impact par région",
                "Rapports trimestriels exportables",
                "Communication WhatsApp automatisée",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-teal shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                label: "Jeunes formés",
                value: "15 000+",
                color: "text-crimson",
                bg: "bg-crimson/5",
              },
              {
                label: "Conférences",
                value: "12+",
                color: "text-teal",
                bg: "bg-teal/5",
              },
              {
                label: "Membres actifs",
                value: "500+",
                color: "text-amber",
                bg: "bg-amber/10",
              },
              {
                label: "Formations",
                value: "40+",
                color: "text-azure",
                bg: "bg-azure/5",
              },
            ].map((s) => (
              <div
                key={s.label}
                className={cn(
                  "rounded-2xl border border-slate-100 p-5",
                  s.bg
                )}
              >
                <p className={cn("text-3xl font-extrabold tracking-tight", s.color)}>
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}