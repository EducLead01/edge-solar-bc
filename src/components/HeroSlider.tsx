"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    bgImage: "/images/icone-painel-solar-600x523.png",
    titleHtml:
      '<span class="text-amber-400">Valorização do imóvel</span> e retorno ao investimento com energia solar',
    subtitle:
      "Instale painéis solares e veja seu imóvel valorizar até 8% enquanto economiza até 95% na conta de luz todos os meses.",
    btnText: "SOLICITAR ORÇAMENTO",
    btnHref: "#contato",
    btnClass: "border border-white bg-white text-teal-900 hover:bg-white/80",
  },
  {
    bgImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80",
    titleHtml:
      'Mais de <span class="text-amber-400">4.000 projetos entregues</span> em 8 anos de história no segmento solar',
    subtitle:
      "Experiência, confiança e resultado. A Frenergy é referência em energia solar com milhares de clientes satisfeitos em todo o Brasil.",
    btnText: "CONHEÇA NOSSA HISTÓRIA",
    btnHref: "#contato",
    btnClass: "bg-amber-400 text-teal-900 hover:bg-amber-300",
  },
  {
    bgImage: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1600&q=80",
    titleHtml:
      'Economize até <span class="text-amber-400">95%</span> na sua Conta de Luz com Energia Solar para seu comércio ou indústria',
    subtitle:
      "Reduza seus custos operacionais, aumente a competitividade e aposte em uma fonte de energia limpa e sustentável para o seu negócio.",
    btnText: "FALAR COM ESPECIALISTA",
    btnHref: "#contato",
    btnClass: "border border-white bg-white text-teal-900 hover:bg-white/80",
  },
];

function LightTrails() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 11 }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Gradient along the trail direction */}
        <linearGradient id="trail-a" x1="0" y1="900" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F5A623" stopOpacity="0" />
          <stop offset="25%"  stopColor="#F5A623" stopOpacity="0.9" />
          <stop offset="65%"  stopColor="#F5A623" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="trail-b" x1="0" y1="900" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F5A623" stopOpacity="0" />
          <stop offset="35%"  stopColor="#F5A623" stopOpacity="0.5" />
          <stop offset="75%"  stopColor="#F5A623" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="trail-c" x1="0" y1="900" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F5A623" stopOpacity="0" />
          <stop offset="40%"  stopColor="#F5A623" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Trilha principal — grossa e brilhante */}
      <path
        d="M -80 820 C 150 680, 480 500, 780 320 S 1200 100, 1520 -60"
        stroke="url(#trail-a)"
        strokeWidth="3.5"
        fill="none"
        filter="url(#glow)"
      />

      {/* Trilha paralela — média */}
      <path
        d="M -80 870 C 180 720, 510 540, 820 360 S 1240 130, 1560 -20"
        stroke="url(#trail-a)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
        opacity="0.55"
      />

      {/* Trilha superior — fina */}
      <path
        d="M 60 760 C 280 620, 620 440, 920 270 S 1330 60, 1600 -80"
        stroke="url(#trail-b)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
      />

      {/* Acento extra — muito sutil */}
      <path
        d="M -200 950 C 100 780, 450 580, 760 380 S 1180 150, 1500 -20"
        stroke="url(#trail-c)"
        strokeWidth="5"
        fill="none"
      />
    </svg>
  );
}

export function HeroSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        loop
        speed={600}
        className="hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[105vh] bg-cover bg-center relative flex flex-col justify-center py-24"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-teal-950 opacity-50 z-10" />

              {/* Light trails */}
              <LightTrails />

              {/* Content */}
              <div className="container mx-auto px-6 relative z-20">
                <div className="flex flex-col gap-4 lg:w-4/5">
                  <h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-snug lg:leading-[3.7rem]"
                    dangerouslySetInnerHTML={{ __html: slide.titleHtml }}
                  />
                  <p className="text-xl text-white mb-6 mt-2 max-w-2xl">{slide.subtitle}</p>
                  <div>
                    <a
                      href={slide.btnHref}
                      className={`inline-block font-bold uppercase px-4 py-2 transition-all ${slide.btnClass}`}
                    >
                      {slide.btnText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
