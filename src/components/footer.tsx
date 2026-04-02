import Link from "next/link"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos espaces", href: "/espaces" },
  { label: "Formations", href: "/formations" },
  { label: "Prestations", href: "/prestations" },
  { label: "Contact", href: "/contact" },
]

const formationLinks = [
  { label: "Les Potenti'Elles", href: "/formations/potentielles" },
  { label: "ORizon LAB", href: "/formations/orizon-lab" },
  { label: "L'Campus", href: "/formations/lcampus" },
  { label: "S'entrApprendre", href: "/formations/sentrapprendre" },
  { label: "Coup de pouce", href: "/formations/coup-de-pouce" },
  { label: "Ateliers adhérents", href: "/formations/ateliers-adherents" },
]

const contactInfo = [
  { icon: MapPin, text: "4 Grand'Rue, 68280 Andolsheim" },
  { icon: Mail, text: "contact@collectiforducommun.org" },
  { icon: Phone, text: "07 55 53 08 57" },
  { icon: Clock, text: "Lun-Ven : 8h-18h" },
]

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socialLinks = [
  { icon: FacebookIcon, href: "https://www.facebook.com/collectiforducommun", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/collectiforducommun", label: "Instagram" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/collectif-or-du-commun", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-bleu-dark pt-16 pb-6 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + tagline + socials */}
          <div>
            <Link href="/" className="font-playfair text-2xl font-bold text-or">
              Collectif Or du Commun
            </Link>
            <p className="mt-3 text-sm text-white/70">
              Tiers-lieu associatif à Andolsheim, Alsace
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-or"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <nav aria-label="Navigation principale">
            <h3 className="mb-4 font-semibold text-white">Navigation</h3>
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition hover:text-or">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Formations */}
          <nav aria-label="Formations">
            <h3 className="mb-4 font-semibold text-white">Formations</h3>
            <ul className="space-y-1">
              {formationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition hover:text-or">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-white/70">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-or" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-sm text-white/50">&copy; 2026 Collectif Or du Commun</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-sm text-white/50 transition hover:text-or">
              Mentions légales
            </Link>
            <Link href="/cgu" className="text-sm text-white/50 transition hover:text-or">
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
