"use client";

import { useState } from "react";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Clock,
  Users,
} from "lucide-react";
import { upcomingEvents, type EventItem } from "@/lib/data";
import EventRegistrationModal from "@/components/EventRegistrationModal";
import { cn } from "@/lib/utils";

export default function ProgramsSection() {
  const [selected, setSelected] = useState<EventItem | null>(null);
  const [open, setOpen] = useState(false);

  const handleRegister = (event: EventItem) => {
    setSelected(event);
    setOpen(true);
  };

  return (
    <section id="evenements" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 uppercase tracking-wider">
            <Calendar size={13} />
            Agenda 2026
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Conférences &amp; formations à venir
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Réservez votre place en quelques secondes. Confirmation immédiate
            par WhatsApp et badge nominatif.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all",
                event.featured ? "border-crimson/30 ring-1 ring-crimson/10" : "border-slate-100"
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur",
                      event.featured
                        ? "bg-crimson text-white"
                        : "bg-white/95 text-slate-800"
                    )}
                  >
                    {event.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-slate-800">
                    {event.price}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[11px] font-medium text-white/80">
                    {event.city}
                  </p>
                  <h3 className="text-base font-bold leading-snug">
                    {event.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {event.description}
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Calendar size={14} className="text-teal" />
                    {event.date}
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={14} className="text-teal" />
                    {event.time}
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={14} className="text-teal" />
                    {event.location}, {event.city}
                  </li>
                  <li className="flex items-center gap-2">
                    <Users size={14} className="text-teal" />
                    {event.seatsLeft} places restantes / {event.seats}
                  </li>
                </ul>

                <button
                  onClick={() => handleRegister(event)}
                  className={cn(
                    "mt-5 group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all",
                    event.featured
                      ? "bg-crimson text-white hover:bg-crimson/90 shadow-sm shadow-crimson/20"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  )}
                >
                  Réserver ma place
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-0.5"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <EventRegistrationModal
        open={open}
        onClose={() => setOpen(false)}
        event={selected}
      />
    </section>
  );
}