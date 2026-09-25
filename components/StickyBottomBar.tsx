"use client";

import { useEffect, useState } from "react";
import { Calendar, MessageSquare, Users } from "lucide-react";
import { organizationInfo } from "@/lib/data";

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappLink = `https://wa.me/${organizationInfo.whatsapp}?text=${encodeURIComponent(
    "Bonjour Wake Up Côte d'Ivoire, je souhaite avoir des informations sur vos programmes."
  )}`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[90] lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-3 mb-3 rounded-2xl border border-slate-200/70 bg-white/95 backdrop-blur-lg shadow-lg p-2">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="#evenements"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-3 py-3 text-xs font-semibold text-white active:scale-[0.98] transition-transform"
          >
            <Calendar size={16} />
            Réserver ma place
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-3 py-3 text-xs font-semibold text-white active:scale-[0.98] transition-transform"
          >
            <MessageSquare size={16} />
            Secrétariat
          </a>
        </div>
      </div>
    </div>
  );
}