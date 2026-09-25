"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Users,
  Sparkles,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { impactStats, organizationInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  Users,
  Calendar,
  Award: Sparkles,
  GraduationCap,
} as const;

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Motifs géométriques décoratifs rappelant le logo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-crimson/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Colonne texte */}
          <div className="lg:col-span-7 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-3.5 py-1.5 text-xs font-semibold text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
              Membre de {organizationInfo.parent}
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Mobiliser la jeunesse,
              <br />
              <span className="bg-gradient-to-r from-crimson via-amber to-teal bg-clip-text text-transparent">
                Structurer l&apos;éducation
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed">
              {organizationInfo.description}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="#evenements"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-crimson/20 hover:bg-crimson/90 transition-all"
              >
                <Calendar size={18} />
                S&apos;inscrire à une conférence
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="#programmes"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-teal/30 hover:bg-teal/5 transition-all"
              >
                <Users size={18} />
                Devenir membre
              </Link>
            </div>

            {/* Points de réassurance */}
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500">
              {[
                "Inscription 100% gratuite",
                "Reçus WhatsApp instantanés",
                "Certificats de participation",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-teal" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne visuelle / stats */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Carte principale image */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                  alt="Jeunesse ivoirienne en conférence"
                  className="h-72 sm:h-80 lg:h-96 w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-medium text-white/80">
                    Prochain rendez-vous
                  </p>
                  <p className="text-sm font-semibold">
                    Summit Éducation &amp; Leadership 2026
                  </p>
                </div>
              </div>

              {/* Badge flottant stats */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 rounded-2xl bg-white border border-slate-100 shadow-lg p-4 w-44">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber/15">
                    <Sparkles size={16} className="text-amber" />
                  </span>
                  <div>
                    <p className="text-lg font-bold text-slate-900 leading-none">
                      15K+
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Jeunes impactés
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bandeau statistiques */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {impactStats.map((stat) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap] ?? Users;
            return (
              <div
                key={stat.id}
                className="rounded-2xl bg-white border border-slate-100 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg",
                      stat.id === "youth" && "bg-crimson/10 text-crimson",
                      stat.id === "conferences" && "bg-teal/10 text-teal",
                      stat.id === "members" && "bg-amber/15 text-amber",
                      stat.id === "trainings" && "bg-azure/10 text-azure"
                    )}
                  >
                    <Icon size={18} />
                  </span>
                </div>
                <p className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}