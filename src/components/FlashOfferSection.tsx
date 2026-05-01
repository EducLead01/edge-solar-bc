"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { h: "00", m: "00", s: "00" };
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1_000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return { h: pad(h), m: pad(m), s: pad(s) };
}

const TARGET = new Date(Date.now() + 4 * 3_600_000);

const productImages = [
  { src: "/edge-solar-bc/images/476145.webp",     alt: "Ar-Condicionado Split" },
  { src: "/edge-solar-bc/images/Residencial.webp", alt: "Ar-Condicionado Residencial" },
];

export function FlashOfferSection() {
  const [time, setTime] = useState(getTimeLeft(TARGET));
  const swiperRef = useRef<SwiperType | null>(null);

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
            <div>
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
              className="mt-2 w-full max-w-xs bg-[#0A0E1A] hover:bg-[#25D366] active:bg-[#25D366] text-white font-black uppercase tracking-widest text-sm px-8 py-4 text-center transition-colors duration-200"
            >
              Comprar no WhatsApp
            </a>
          </div>

          {/* Right — product carousel */}
          <div className="relative flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0A0E1A] min-h-[280px] w-full lg:max-w-[520px]">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              onSwiper={(s) => { swiperRef.current = s; }}
              className="w-full h-full min-h-[280px]"
            >
              {productImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover min-h-[280px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom arrows */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-[#FF6B35] hover:bg-[#0A0E1A] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-[#FF6B35] hover:bg-[#0A0E1A] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors duration-200"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
