"use client";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "intro", label: "Intro" },
  { id: "avant-apres", label: "Avant / Après" },
  { id: "vitesse", label: "Vitesse" },
  { id: "google", label: "Google" },
  { id: "contenu", label: "Contenu" },
  { id: "plan", label: "Plan d'action" },
];

export function StickyNav() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);

      // Detect active section
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 80) {
          setActive(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 h-0.5 bg-[#FFCA00] transition-all duration-100" style={{ width: `${progress}%` }} />
      <div className="mx-auto max-w-[1200px] px-4 flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              active === item.id
                ? "bg-[#0A3F52] text-white"
                : "text-[#666666] hover:text-[#0A3F52] hover:bg-[#F5F7FA]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
