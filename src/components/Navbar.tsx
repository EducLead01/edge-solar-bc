"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Climatização",       href: "#climatizacao" },
  { label: "Energia Solar",      href: "#energia-solar" },
  { label: "Treinamentos",       href: "#treinamentos" },
  { label: "Engenharia Modular", href: "#engenharia-modular" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex justify-center mx-6 lg:mx-auto transition-all duration-700 ${
        scrolled ? "mt-2" : "mt-4"
      }`}
    >
      <div className="container flex items-center justify-between rounded-lg px-5 py-3 lg:px-8 lg:py-4 backdrop-blur-lg bg-[#0A0E1A]/90">

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center leading-none hover:opacity-75 transition-opacity shrink-0 text-white">
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: "-0.05em", lineHeight: 1 }}>
            EDGE
          </span>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: 7, letterSpacing: "0.6em", paddingLeft: "0.6em", textTransform: "uppercase" }}>
            Engenharia
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden font-bold uppercase lg:flex lg:items-center lg:space-x-4 xl:space-x-6 text-white text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-orange-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="hidden lg:block border border-white text-white font-bold uppercase text-xs lg:text-sm px-4 py-2 hover:bg-white hover:text-gray-900 transition-colors"
          >
            FALAR NO WHATSAPP
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#0A0E1A] rounded-xl overflow-hidden shadow-2xl">
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3.5 text-white font-bold text-sm uppercase border-b border-white/10 hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="mx-6 my-4 block border border-white text-white font-bold uppercase text-sm px-4 py-3 text-center hover:bg-white hover:text-teal-900 transition-colors"
            >
              QUERO ECONOMIZAR
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
