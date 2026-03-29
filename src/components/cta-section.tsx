import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  href: string;
  variant?: "or" | "bleu";
}

export function CTASection({
  title,
  subtitle,
  buttonText,
  href,
  variant = "or",
}: CTASectionProps) {
  const bg = variant === "or" ? "bg-or" : "bg-bleu";
  const textColor = variant === "or" ? "text-bleu-dark" : "text-white";
  const btnBg =
    variant === "or"
      ? "bg-bleu-dark text-white hover:bg-bleu"
      : "bg-or text-bleu-dark hover:bg-or-light";

  return (
    <section className={`${bg} py-16`}>
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className={`font-playfair font-bold text-3xl md:text-4xl ${textColor}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-3 text-lg ${textColor} opacity-80`}>{subtitle}</p>
        )}
        <Link
          href={href}
          className={`mt-8 inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-0.5 ${btnBg}`}
        >
          {buttonText}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
