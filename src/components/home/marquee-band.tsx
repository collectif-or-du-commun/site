"use client";

import { MARQUEE_ITEMS } from "@/lib/content";

function MarqueeContent() {
  return (
    <>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center">
          <span className="px-8 text-sm font-semibold text-bleu-dark">{item}</span>
          <span className="text-bleu-dark/40">◆</span>
        </span>
      ))}
    </>
  );
}

export function MarqueeBand() {
  return (
    <section className="flex h-12 items-center overflow-hidden bg-or" aria-label="Actualités">
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
}
