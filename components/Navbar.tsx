"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#impact", label: "Impact" },
  { href: "#programmes", label: "Programmes" },
  { href: "#evenements", label: "Événements" },
  { href: "#actualites", label: "Actualités" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-lg border-b border-slate-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="relative inline-flex h-10 w-10 items-center justify-center">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-crimson via-amber to-teal rotate-3" />
              <span className="absolute inset-0 rounded-xl bg-white flex items-center justify-center">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-crimson">
                  <GraduationCap size={16} className="text-white" />
                </span>
              </span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[15px] font-bold text-slate-900 tracking-tight">
                Wake Up
              </span>
              <span className="text-[10px] font-semibold text-teal uppercase tracking-[0.14em]">
                Côte d&apos;Ivoire
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="#evenements"
              className="inline-flex items-center gap-1.5 rounded-xl bg-crimson px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-crimson/90 transition-colors"
            >
              <Sparkles size={16} />
              Rejoindre la communauté
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-3 border-t border-slate-100 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#evenements"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-crimson px-4 py-3 text-sm font-semibold text-white"
            >
              <Sparkles size={16} />
              Rejoindre la communauté
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}