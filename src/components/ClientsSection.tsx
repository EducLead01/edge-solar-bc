"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const placeholders = Array.from({ length: 8 }, (_, i) => `Marca ${i + 1}`);

export function ClientsSection() {
  return (
    <section className="pb-20 pt-16 bg-white text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-widest text-teal-800">PARCERIA E CONFIANÇA</p>
        <h3 className="text-4xl font-bold text-teal-800 mt-2 mb-10 uppercase">Nossos Clientes</h3>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={24}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={800}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 5, spaceBetween: 32 },
          }}
        >
          {placeholders.map((label) => (
            <SwiperSlide key={label} className="flex items-center justify-center">
              <div className="h-16 w-36 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-gray-400 text-sm font-medium">{label}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
