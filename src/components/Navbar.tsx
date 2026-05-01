"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Utensils,
  Fuel,
  Wheat,
  GraduationCap,
  Wrench,
  Building2,
  Landmark,
  Warehouse,
  Menu,
  X,
} from "lucide-react";

const segments = [
  { label: "Bares e Restaurantes",   icon: Utensils },
  { label: "Postos de Combustíveis", icon: Fuel },
  { label: "Usinas em Fazendas",     icon: Wheat },
  { label: "Escolas e Faculdades",   icon: GraduationCap },
  { label: "Oficinas Mecânicas",     icon: Wrench },
  { label: "Condomínios",            icon: Building2 },
  { label: "Templos e Igrejas",      icon: Landmark },
  { label: "Galpões",                icon: Warehouse },
];

const navLinks = [
  { label: "SERVIÇOS",          href: "#servicos" },
  { label: "COMO FUNCIONA",     href: "#como-funciona" },
  { label: "GESTÃO DE ENERGIA", href: "#gestao-de-energia" },
  { label: "CASES",             href: "#cases" },
  { label: "CALCULADORA",       href: "#calculadora" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [segOpen, setSegOpen]       = useState(false);

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
      <div className="container flex items-center justify-between rounded-lg px-5 py-3 lg:px-8 lg:py-4 backdrop-blur-lg bg-teal-800/90">

        {/* Logo */}
        <Link href="/">
          <img
            src="/frenergy-logo-white.svg"
            alt="Frenergy Soluções"
            className="w-24 lg:w-32"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden font-bold uppercase lg:flex lg:items-center lg:space-x-4 xl:space-x-6 text-white text-sm">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* SEGMENTOS dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              SEGMENTOS
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[460px] rounded-xl shadow-2xl overflow-hidden opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 bg-teal-700">
              <div className="grid grid-cols-2">
                {segments.map((seg, i) => {
                  const Icon = seg.icon;
                  return (
                    <a
                      key={seg.label}
                      href="#segmentos"
                      className={`flex items-center gap-3 px-5 py-3.5 text-white text-[0.78rem] font-medium border-b border-white/10 hover:bg-white/15 transition-colors normal-case tracking-normal ${
                        i % 2 === 0 ? "border-r border-white/10" : ""
                      }`}
                    >
                      <Icon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>{seg.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="hidden lg:block border border-white text-white font-bold uppercase text-xs lg:text-sm px-4 py-2 hover:bg-white hover:text-teal-900 transition-colors"
          >
            QUERO ECONOMIZAR
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
        <div className="absolute top-full left-0 right-0 mt-2 bg-teal-900 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex flex-col py-2">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3.5 text-white font-bold text-sm uppercase border-b border-white/10 hover:bg-teal-800 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile segmentos accordion */}
            <button
              onClick={() => setSegOpen(!segOpen)}
              className="flex items-center justify-between px-6 py-3.5 text-white font-bold text-sm uppercase border-b border-white/10 hover:bg-teal-800 transition-colors w-full"
            >
              SEGMENTOS
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${segOpen ? "rotate-180" : ""}`} />
            </button>

            {segOpen && (
              <div className="grid grid-cols-2 bg-teal-800/50 border-b border-white/10">
                {segments.map((seg) => {
                  const Icon = seg.icon;
                  return (
                    <a
                      key={seg.label}
                      href="#segmentos"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-white/80 text-xs font-medium border-b border-white/10 hover:text-white transition-colors"
                    >
                      <Icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{seg.label}</span>
                    </a>
                  );
                })}
              </div>
            )}

            {navLinks.slice(2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3.5 text-white font-bold text-sm uppercase border-b border-white/10 hover:bg-teal-800 transition-colors"
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
