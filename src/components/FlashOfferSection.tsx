"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { h: "00", m: "00", s: "00" };
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1_000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return { h: pad(h), m: pad(m), s: pad(s) };
}

const TARGET = new Date(Date.now() + 4 * 3_600_000); // 4h a partir do carregamento

export function FlashOfferSection() {
  const [time, setTime] = useState(getTimeLeft(TARGET));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(TARGET)), 1_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-[#e8e8e8] py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left — offer info */}
          <div className="flex-1 flex flex-col items-start gap-4">
            <p className="text-[#F5A623] font-black text-xl tracking-wide uppercase flex items-center gap-2">
              ⚡ OFERTA RELÂMPAGO ⚡
            </p>

            <p className="text-gray-700 font-medium text-base leading-snug max-w-sm">
              Ar-Condicionado Split Inverter — instalação completa inclusa
            </p>

            <div>
              <p className="text-gray-500 text-sm">Aproveite essa</p>
              <p className="text-[#0A0E1A] font-black text-5xl uppercase leading-none tracking-tight">
                SUPER OFERTA
              </p>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-3 mt-2">
              {[time.h, time.m, time.s].map((val, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-[#d4d4d4] rounded-xl flex items-center justify-center">
                    <span className="text-3xl font-black text-[#0A0E1A] tabular-nums">
                      {val}
                    </span>
                  </div>
                  {i < 2 && (
                    <span className="text-2xl font-black text-[#0A0E1A]">:</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/seunumero"
              className="mt-2 w-full max-w-xs bg-[#0A0E1A] hover:bg-[#FF6B35] text-white font-black uppercase tracking-widest text-sm px-8 py-4 text-center transition-colors duration-200"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>

          {/* Right — product image */}
          <div className="flex-1 flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0A0E1A] min-h-[280px] w-full lg:max-w-[520px]">
            <img
              src="/edge-solar-bc/images/476145.webp"
              alt="Ar-Condicionado Split"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
