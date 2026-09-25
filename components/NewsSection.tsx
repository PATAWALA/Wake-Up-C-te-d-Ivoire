"use client";

import { ArrowRight, Calendar, FileText } from "lucide-react";
import { newsFeed } from "@/lib/data";

export default function NewsSection() {
  return (
    <section id="actualites" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              <FileText size={13} />
              Actualités &amp; terrain
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Nos interventions sur le terrain
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Retrouvez les comptes rendus de nos actions, partenariats et
              lancements de programmes à travers la Côte d&apos;Ivoire.
            </p>
          </div>
          <a
            href="#"
            className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:border-teal/30 hover:bg-teal/5 transition-all"
          >
            Toutes les actualités
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsFeed.map((n) => (
            <article
              key={n.id}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-teal">
                  {n.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar size={13} />
                  {n.date}
                </div>
                <h3 className="mt-2 text-base font-semibold text-slate-900 leading-snug group-hover:text-crimson transition-colors">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {n.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-teal transition-colors">
                  Lire l&apos;article
                  <ArrowRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}