"use client";
import { useEffect, useRef, useState } from "react";

function scoreColor(score: number) {
  if (score >= 90) return "bg-emerald-500";
  if (score >= 70) return "bg-emerald-400";
  if (score >= 50) return "bg-amber-400";
  return "bg-red-500";
}

function scoreText(score: number) {
  if (score >= 90) return "text-emerald-600";
  if (score >= 70) return "text-emerald-500";
  if (score >= 50) return "text-amber-500";
  return "text-red-500";
}

export function ScoreBar({ label, old: oldScore, new: newScore }: { label: string; old: number; new: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-[#0A3F52]">{label}</span>
        <div className="flex items-center gap-3">
          <span className={`text-xs font-bold ${scoreText(oldScore)}`}>{oldScore}</span>
          <span className="text-[#666666] text-xs">→</span>
          <span className={`text-sm font-bold ${scoreText(newScore)}`}>{newScore}</span>
        </div>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${scoreColor(newScore)}`}
          style={{ width: animated ? `${newScore}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function CwvBar({ label, oldVal, newVal, unit, thresholds }: {
  label: string;
  oldVal: number;
  newVal: number;
  unit: string;
  thresholds: [number, number]; // [good, needs-improvement]
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cwvColor = (val: number) => {
    if (val <= thresholds[0]) return { bar: "bg-emerald-500", text: "text-emerald-600", label: "Bon" };
    if (val <= thresholds[1]) return { bar: "bg-amber-400", text: "text-amber-500", label: "Moyen" };
    return { bar: "bg-red-500", text: "text-red-500", label: "Mauvais" };
  };

  const maxVal = Math.max(oldVal, thresholds[1] * 1.5);
  const oldC = cwvColor(oldVal);
  const newC = cwvColor(newVal);

  return (
    <div ref={ref} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex justify-between items-start mb-4">
        <span className="font-semibold text-[#0A3F52] text-sm">{label}</span>
        <div className="flex gap-2 items-center">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-red-50 ${oldC.text}`}>{oldVal}{unit}</span>
          <span className="text-gray-300">→</span>
          <span className={`text-sm font-bold px-2 py-0.5 rounded-full bg-emerald-50 ${newC.text}`}>{newVal}{unit}</span>
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <p className="text-xs text-[#666666] mb-1">Ancien</p>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-1000 ease-out ${oldC.bar}`}
              style={{ width: animated ? `${Math.min((oldVal / maxVal) * 100, 100)}%` : "0%" }} />
          </div>
        </div>
        <div>
          <p className="text-xs text-[#666666] mb-1">Nouveau</p>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-1000 delay-300 ease-out ${newC.bar}`}
              style={{ width: animated ? `${Math.min((newVal / maxVal) * 100, 100)}%` : "0%" }} />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3 text-xs text-gray-400">
        <span>Objectif Google : ≤ {thresholds[0]}{unit}</span>
        <span className={`font-medium ${newC.text}`}>{newC.label}</span>
      </div>
    </div>
  );
}
