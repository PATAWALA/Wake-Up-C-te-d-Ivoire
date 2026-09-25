"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Loader2,
  Sparkles,
} from "lucide-react";
import Modal from "@/components/ui/Modal";
import { WHATSAPP_NUMBER, organizationInfo, type EventItem } from "@/lib/data";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  onClose: () => void;
  event: EventItem | null;
}

type Step = "form" | "loading" | "success";

interface RegistrationPayload {
  event_id: string;
  event_title: string;
  full_name: string;
  email: string;
  phone: string;
  organization: string | null;
  ticket_type: "standard" | "vip" | "student";
  quantity: number;
  created_at: string;
}

export default function EventRegistrationModal({ open, onClose, event }: Props) {
  const [step, setStep] = useState<Step>("form");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    organization: "",
    ticket_type: "standard" as "standard" | "vip" | "student",
    quantity: 1,
  });

  const whatsappLink = useMemo(() => {
    if (!event) return "#";
    const message = encodeURIComponent(
      `Bonjour ${organizationInfo.name}, je viens de réserver ma place pour « ${event.title} » (${event.date}). Je souhaite confirmer mon inscription.\n\nNom : ${
        form.full_name || "…"
      }\nTéléphone : ${form.phone || "…"}`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  }, [event, form.full_name, form.phone]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: name === "quantity" ? Math.max(1, Number(value)) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!event) return;
    setError(null);
    setStep("loading");

    // ─── DÉMO : simulation locale, aucune connexion Supabase ───
    const payload: RegistrationPayload = {
      event_id: event.id,
      event_title: event.title,
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      organization: form.organization || null,
      ticket_type: form.ticket_type,
      quantity: form.quantity,
      created_at: new Date().toISOString(),
    };

    // Persistance locale pour la démo (rechargeable, inspectable dans DevTools)
    try {
      const existing = JSON.parse(
        localStorage.getItem("wakeup_event_registrations") ?? "[]"
      );
      existing.push(payload);
      localStorage.setItem(
        "wakeup_event_registrations",
        JSON.stringify(existing)
      );
    } catch {
      // Mode privé strict : on ignore silencieusement
    }

    // eslint-disable-next-line no-console
    console.log("[Wake Up CI · DEMO] Inscription simulée :", payload);

    await new Promise((r) => setTimeout(r, 700));
    setStep("success");
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("form");
      setForm({
        full_name: "",
        email: "",
        phone: "",
        organization: "",
        ticket_type: "standard",
        quantity: 1,
      });
    }, 250);
  };

  if (!event) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={step === "success" ? "Inscription confirmée" : "Réserver ma place"}
    >
      {step === "form" && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {event.category}
            </p>
            <p className="mt-0.5 text-sm font-semibold text-slate-900">
              {event.title}
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              {event.date} · {event.time} · {event.city}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label="Nom complet"
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="Ex : Aminata Koné"
              required
            />
            <Field
              label="Téléphone / WhatsApp"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+225 07 00 00 00 00"
              type="tel"
              required
            />
          </div>

          <Field
            label="Adresse email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="vous@exemple.com"
            type="email"
            required
          />

          <Field
            label="Structure / Université (optionnel)"
            name="organization"
            value={form.organization}
            onChange={handleChange}
            placeholder="Ex : Université Félix Houphouët-Boigny"
          />

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Type de billet
              </label>
              <select
                name="ticket_type"
                value={form.ticket_type}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-crimson focus:ring-2 focus:ring-crimson/20 outline-none transition"
              >
                <option value="standard">Standard</option>
                <option value="student">Étudiant</option>
                <option value="vip">VIP</option>
              </select>
            </div>
            <Field
              label="Nombre de places"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              type="number"
              min={1}
              max={10}
            />
          </div>

          {error && (
            <p className="text-xs text-crimson bg-crimson/5 border border-crimson/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-crimson/20 hover:bg-crimson/90 transition-all"
          >
            Confirmer mon inscription
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
          <p className="text-[11px] text-slate-500 text-center leading-relaxed">
            En validant, vous acceptez d&apos;être recontacté(e) par le
            secrétariat de {organizationInfo.name} via WhatsApp.
          </p>
        </form>
      )}

      {step === "loading" && (
        <div className="py-10 flex flex-col items-center justify-center gap-3">
          <Loader2 size={28} className="text-crimson animate-spin" />
          <p className="text-sm text-slate-600">
            Enregistrement de votre réservation…
          </p>
        </div>
      )}

      {step === "success" && (
        <div className="py-2">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
              <CheckCircle2 size={28} />
            </span>
            <h4 className="mt-4 text-lg font-bold text-slate-900">
              Votre place est réservée
            </h4>
            <p className="mt-1.5 text-sm text-slate-600 max-w-xs">
              Nous avons bien enregistré votre demande pour{" "}
              <span className="font-semibold text-slate-800">
                {event.title}
              </span>
              . Confirmez ci-dessous pour recevoir votre badge via WhatsApp.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal/20 hover:bg-teal/90 transition-all"
          >
            <MessageSquare size={18} />
            Confirmer sur WhatsApp
          </a>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
            <Sparkles size={13} className="text-amber" />
            Un conseiller vous répond sous 30 minutes
          </div>

          <button
            onClick={handleClose}
            className="mt-4 w-full text-center text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
          >
            Fermer
          </button>
        </div>
      )}
    </Modal>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  min?: number;
  max?: number;
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  min,
  max,
}: FieldProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
        min={min}
        max={max}
        className={cn(
          "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900",
          "placeholder:text-slate-400",
          "focus:border-crimson focus:ring-2 focus:ring-crimson/20 outline-none transition"
        )}
      />
    </div>
  );
}