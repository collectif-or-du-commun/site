"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function StatsCounter({ stats }: { stats: StatItem[] }) {
  return (
    <section className="bg-fond py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
          {stats.map((stat, i) => (
            <CounterItem key={i} stat={stat} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterItem({ stat, delay }: { stat: StatItem; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * stat.value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(stat.value);
    }

    const timer = setTimeout(() => requestAnimationFrame(step), delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, stat.value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="font-playfair font-bold text-5xl lg:text-6xl text-bleu">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wide text-gris">
        {stat.label}
      </div>
      <div className="mx-auto mt-3 h-0.5 w-8 rounded bg-or" />
    </motion.div>
  );
}
