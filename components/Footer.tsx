import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { organizationInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-10 w-10 items-center justify-center">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-crimson via-amber to-teal rotate-3" />
                <span className="absolute inset-0 rounded-xl bg-slate-900 flex items-center justify-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-crimson">
                    <GraduationCap size={16} className="text-white" />
                  </span>
                </span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[15px] font-bold text-white tracking-tight">
                  Wake Up
                </span>
                <span className="text-[10px] font-semibold text-teal uppercase tracking-[0.14em]">
                  Côte d&apos;Ivoire
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-slate-400 leading-relaxed">
              {organizationInfo.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Plateforme
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#accueil", "Accueil"],
                ["#impact", "Notre impact"],
                ["#programmes", "Programmes"],
                ["#evenements", "Événements"],
                ["#actualites", "Actualités"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-teal shrink-0 mt-0.5" />
                Abidjan, Côte d&apos;Ivoire
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-teal shrink-0 mt-0.5" />
                +225 07 00 00 00 00
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-teal shrink-0 mt-0.5" />
                contact@wakeup-ci.org
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {organizationInfo.name}. Tous droits
            réservés.
          </p>
          <p className="text-slate-500">
            Membre de {organizationInfo.parent}
          </p>
        </div>
      </div>
    </footer>
  );
}