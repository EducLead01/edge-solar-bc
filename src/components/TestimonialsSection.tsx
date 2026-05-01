"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const videos = [
  { id: 1, label: "Depoimento 1" },
  { id: 2, label: "Depoimento 2" },
  { id: 3, label: "Depoimento 3" },
];

export function TestimonialsSection() {
  return (
    <section className="px-6 pb-8 pt-12 lg:pt-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-light tracking-widest uppercase text-teal-800">
          DEPOIMENTOS
        </h2>
        <h3 className="text-center text-4xl font-bold text-teal-800 mt-2 mb-12 uppercase">
          Veja o que nossos clientes dizem sobre nós
        </h3>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-12"
        >
          {videos.map((v) => (
            <SwiperSlide key={v.id} className="h-auto">
              <div className="bg-gray-200/60 rounded-lg overflow-hidden h-full flex flex-col aspect-video items-center justify-center">
                <div className="w-full h-full bg-gray-300 flex flex-col items-center justify-center gap-3 min-h-[220px]">
                  <div className="w-16 h-16 rounded-full bg-[#ea592d] flex items-center justify-center">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm font-medium">{v.label}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
