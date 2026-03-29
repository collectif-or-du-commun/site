"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

const navDropdowns: NavDropdown[] = [
  {
    label: "Formations",
    items: [
      { label: "Toutes les formations", href: "/formations" },
      { label: "Les Potenti'Elles", href: "/formations/potentielles" },
      { label: "ORizon LAB", href: "/formations/orizon-lab" },
      { label: "L'Campus", href: "/formations/lcampus" },
      { label: "S'entrApprendre", href: "/formations/sentrapprendre" },
      { label: "Coup de pouce", href: "/formations/coup-de-pouce" },
      { label: "Ateliers adhérents", href: "/formations/ateliers-adherents" },
    ],
  },
  {
    label: "Prestations",
    items: [
      { label: "Toutes nos prestations", href: "/prestations" },
      { label: "La Fresque des Énergies", href: "/prestations/fresque-energies" },
      { label: "Voyage d'un héros", href: "/prestations/voyage-heros" },
    ],
  },
  {
    label: "Nos espaces",
    items: [
      { label: "Découvrir l'ODC", href: "/espaces" },
      { label: "Nos locaux", href: "/espaces/nos-locaux" },
      { label: "Location de salles", href: "/location-salles" },
    ],
  },
  {
    label: "Nos programmes",
    items: [
      { label: "Before-Week", href: "/espaces/before-week" },
      { label: "Guichet Ouvert", href: "/espaces/guichet-ouvert" },
    ],
  },
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAll();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [closeAll]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function toggleDropdown(label: string) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  function toggleMobileAccordion(label: string) {
    setMobileAccordion((prev) => (prev === label ? null : label));
  }

  function closeMobile() {
    setMobileOpen(false);
    setMobileAccordion(null);
  }

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 h-16 bg-bleu-dark"
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-playfair text-lg font-bold text-or transition-opacity hover:opacity-80 sm:text-xl"
          onClick={closeAll}
        >
          Collectif Or du Commun
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navDropdowns.map((dropdown) => (
            <div key={dropdown.label} className="relative">
              <button
                onClick={() => toggleDropdown(dropdown.label)}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors hover:text-or"
              >
                {dropdown.label}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    openDropdown === dropdown.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown panel */}
              {openDropdown === dropdown.label && (
                <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-xl bg-white p-4 shadow-lg">
                  <div className="flex flex-col gap-1">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeAll}
                        className="rounded-lg px-3 py-2 text-sm text-bleu-dark transition-colors hover:bg-fond hover:text-bleu"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

            {/* Agenda — lien direct */}
          <Link
            href="/agenda"
            onClick={closeAll}
            className="rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors hover:text-or"
          >
            Agenda
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={closeAll}
            className="ml-4 rounded-lg bg-or px-5 py-2 text-sm font-semibold text-bleu transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-lg p-2 text-white transition-colors hover:text-or lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={closeMobile}
        >
          {/* Drawer */}
          <div
            className="absolute right-0 top-0 flex h-full w-[300px] max-w-[85vw] flex-col bg-bleu-dark shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex h-16 items-center justify-between px-6">
              <span className="font-playfair text-lg font-bold text-or">
                Menu
              </span>
              <button
                onClick={closeMobile}
                className="rounded-lg p-2 text-white transition-colors hover:text-or"
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Drawer body */}
            <div className="flex-1 overflow-y-auto px-4 pb-8">
              {navDropdowns.map((dropdown) => (
                <div key={dropdown.label} className="border-b border-white/10">
                  <button
                    onClick={() => toggleMobileAccordion(dropdown.label)}
                    className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-white transition-colors hover:text-or"
                  >
                    {dropdown.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileAccordion === dropdown.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion content */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileAccordion === dropdown.label
                        ? "max-h-[500px] pb-3"
                        : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col gap-1 pl-3">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMobile}
                          className="rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:text-or"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Agenda — lien direct mobile */}
              <div className="border-b border-white/10">
                <Link
                  href="/agenda"
                  onClick={closeMobile}
                  className="block py-4 text-sm font-medium text-white transition-colors hover:text-or"
                >
                  Agenda
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="block rounded-lg bg-or px-5 py-3 text-center text-sm font-semibold text-bleu transition-opacity hover:opacity-90"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar
