"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "idle" | "loading" | "done";

interface SubscriberPayload {
  email: string;
  full_name: string | null;
  source: string;
  created_at: string;
}

export default function QuickRegister() {
  const [step, setStep] = useState<Step>("idle");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");

    // ─── DÉMO : simulation locale, aucune connexion Supabase ───
    const payload: SubscriberPayload = {
      email,
      full_name: fullName || null,
      source: "homepage_quick_register",
      created_at: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem("wakeup_news_subscribers") ?? "[]"
      );
      existing.push(payload);
      localStorage.setItem(
        "wakeup_news_subscribers",
        JSON.stringify(existing)
      );
    } catch {
      // Mode privé strict ou quota dépassé : on ignore silencieusement
    }

    // eslint-disable-next-line no-console
    console.log("[Wake Up CI · DEMO] Abonné simulé :", payload);

    await new Promise((r) => setTimeout(r, 600));
    setStep("done");
  };

  return (
    <section className="py-14 sm:py-16 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Rejoignez la communauté en 30 secondes
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Recevez en priorité les annonces de conférences, formations et
                opportunités.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-amber/15 px-3 py-1 text-xs font-semibold text-amber">
              <Sparkles size={13} />
              Gratuit
            </span>
          </div>

          {step !== "done" ? (
            <form
              onSubmit={handleSubmit}
              className="mt-5 grid sm:grid-cols-[1fr_1fr_auto] gap-3"
            >
              <input
                type="text"
                placeholder="Prénom & Nom"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition"
              />
              <input
                type="email"
                required
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition"
              />
              <button
                type="submit"
                disabled={step === "loading"}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-white",
                  "hover:bg-teal/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                )}
              >
                {step === "loading" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Je m&apos;inscris
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-teal/20 bg-teal/5 p-4">
              <CheckCircle2 size={22} className="text-teal shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Inscription enregistrée
                </p>
                <p className="text-xs text-slate-600">
                  Vous recevrez nos prochaines annonces à {email}.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}