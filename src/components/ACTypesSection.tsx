"use client";

import { useState } from "react";

const types = [
  {
    label: "Split Hi-Wall",
    icon: (
      <svg viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-12">
        {/* Indoor unit */}
        <rect x="8" y="6" width="44" height="18" rx="3" />
        <line x1="8" y1="16" x2="52" y2="16" />
        <path d="M14 20 Q18 26 22 20" />
        <path d="M24 20 Q28 26 32 20" />
        {/* Outdoor unit */}
        <rect x="56" y="34" width="18" height="22" rx="2" />
        <circle cx="65" cy="43" r="5" />
        <circle cx="65" cy="43" r="2" />
        <line x1="56" y1="40" x2="74" y2="40" />
      </svg>
    ),
  },
  {
    label: "Cassete",
    icon: (
      <svg viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-12">
        {/* Ceiling unit (square cassette) */}
        <rect x="10" y="10" width="36" height="36" rx="4" />
        <rect x="18" y="18" width="20" height="20" rx="2" />
        <circle cx="28" cy="28" r="3" />
        {/* Vents on 4 sides */}
        <line x1="28" y1="10" x2="28" y2="18" />
        <line x1="28" y1="38" x2="28" y2="46" />
        <line x1="10" y1="28" x2="18" y2="28" />
        <line x1="38" y1="28" x2="46" y2="28" />
        {/* Outdoor unit */}
        <rect x="54" y="30" width="18" height="22" rx="2" />
        <circle cx="63" cy="40" r="5" />
        <circle cx="63" cy="40" r="2" />
        <line x1="54" y1="37" x2="72" y2="37" />
      </svg>
    ),
  },
  {
    label: "Piso-Teto",
    icon: (
      <svg viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-12">
        {/* Floor/ceiling tall unit */}
        <rect x="12" y="4" width="24" height="56" rx="4" />
        <rect x="16" y="10" width="16" height="8" rx="1" />
        <line x1="16" y1="22" x2="32" y2="22" />
        <line x1="16" y1="26" x2="32" y2="26" />
        <line x1="16" y1="30" x2="32" y2="30" />
        <circle cx="24" cy="48" r="4" />
        {/* Outdoor unit */}
        <rect x="46" y="30" width="20" height="24" rx="2" />
        <circle cx="56" cy="41" r="6" />
        <circle cx="56" cy="41" r="2.5" />
        <line x1="46" y1="37" x2="66" y2="37" />
      </svg>
    ),
  },
  {
    label: "Multi-Split",
    icon: (
      <svg viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-12">
        {/* Two indoor units */}
        <rect x="4" y="4" width="34" height="12" rx="2" />
        <line x1="4" y1="11" x2="38" y2="11" />
        <rect x="4" y="22" width="34" height="12" rx="2" />
        <line x1="4" y1="29" x2="38" y2="29" />
        {/* Connection lines */}
        <path d="M38 10 Q50 10 50 36" strokeDasharray="3 2" />
        <path d="M38 28 Q50 28 50 36" strokeDasharray="3 2" />
        {/* Outdoor unit */}
        <rect x="54" y="30" width="20" height="26" rx="2" />
        <circle cx="64" cy="42" r="6" />
        <circle cx="64" cy="42" r="2.5" />
        <line x1="54" y1="38" x2="74" y2="38" />
      </svg>
    ),
  },
  {
    label: "Portátil",
    icon: (
      <svg viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-12">
        {/* Portable tower unit */}
        <rect x="22" y="4" width="28" height="50" rx="6" />
        <rect x="27" y="10" width="18" height="10" rx="2" />
        <line x1="27" y1="28" x2="45" y2="28" />
        <line x1="27" y1="32" x2="45" y2="32" />
        <line x1="27" y1="36" x2="45" y2="36" />
        <rect x="30" y="44" width="12" height="6" rx="1" />
        {/* Wheels */}
        <circle cx="30" cy="56" r="3" />
        <circle cx="42" cy="56" r="3" />
      </svg>
    ),
  },
];

export function ACTypesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F0EDE8] py-10 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 sm:gap-6 flex-wrap">
          {types.map((type, i) => (
            <button
              key={type.label}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-3 px-4 py-4 rounded-xl transition-all duration-200 group ${
                active === i
                  ? "bg-white shadow-md"
                  : "hover:bg-white/60"
              }`}
            >
              <span
                className={`transition-colors duration-200 ${
                  active === i ? "text-[#0A0E1A]" : "text-[#5a5550]"
                }`}
              >
                {type.icon}
              </span>
              <span
                className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  active === i ? "text-[#FF6B35]" : "text-[#8a847e]"
                }`}
              >
                {type.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
