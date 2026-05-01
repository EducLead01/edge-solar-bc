# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Screenshot:** `docs/design-references/section-segments.png`
- **Interaction model:** Swiper.js carousel (3 cards, navigation arrows)
- **Library needed:** swiper (already needed for HeroSlider)

## DOM Structure
```
section (white bg, px-6 pb-0 pt-12 lg:pt-20)
  div.container (mx-auto)
    h2 "DEPOIMENTOS" (label, teal-900, text-2xl font-light tracking-widest uppercase)
    h3 "Veja o que nossos clientes..." (teal-900, text-4xl font-bold, text-center)
    div.swiper (mt-12)
      div.swiper-wrapper
        div.swiper-slide ×3
          div (card, rounded-lg, bg-gray-200/60, p-6)
            div (header row: logo + name/role)
              img (client logo, ~100px wide)
              div
                h5 (name, font-bold text-lg text-black)
                p (role, text-sm text-gray-600)
            p (quote, italic, text-gray-700, mt-4)
            img (testimony-icon.svg, quote marks, bottom-right, text-teal-200, ~40px)
      div.swiper-button-prev / next
      div.swiper-pagination
```

## Computed Styles

### Section
- background-color: rgba(0, 0, 0, 0) (transparent = white page)
- padding-top: 48px (pt-12) → 80px (lg:pt-20)
- padding-bottom: 0
- padding-left: 24px; padding-right: 24px

### Section label h2 (DEPOIMENTOS)
- font-size: 24px
- font-weight: 300
- color: rgb(19, 78, 74)
- text-align: center
- text-transform: uppercase
- letter-spacing: wider

### Section title h3
- font-size: 36px
- font-weight: 700
- color: rgb(19, 78, 74)
- text-align: center

### Card div
- background-color: rgba(229, 231, 235, 0.6) (gray-200/60)
- border-radius: 8px
- padding: 24px
- position: relative
- overflow: hidden

### Client logo img
- width: ~100px
- height: ~60px
- object-fit: contain

### Testimonial name h5
- font-size: 18px
- font-weight: 700
- color: rgb(0, 0, 0)
- text-transform: uppercase

### Role p
- font-size: 14px
- color: rgb(107, 114, 128) (gray-500)

### Quote text p
- font-style: italic
- color: rgb(55, 65, 81) (gray-700)
- font-size: 14px
- margin-top: 16px
- line-height: 1.6

### Quote icon img (testimony-icon.svg)
- src: `/img/global/testimony-icon.svg`
- position: absolute; bottom: 16px; right: 16px
- opacity: 0.3
- color: teal-200
- width: ~40px

## Testimonial Data (verbatim)

### Card 1 — Jhonatan Pinheiro
- **Logo**: `/img/components/customers/novomundo.png`
- **Name**: Jhonatan Pinheiro
- **Role**: Supervisor de ESG da Novo Mundo
- **Quote**: "Deixamos de gastar com uma energia, que talvez não viesse de uma fonte renovável, convertemos para a energia solar e reduzimos os nossos custos operacionais. Dessa forma conseguimos fazer investimento em outras áreas da empresa e contribuir para que a empresa continue a evoluir e a se desenvolver cada vez mais"

### Card 2 — Taissa Machado
- **Logo**: `/img/components/customers/triunfoconcebra.png`
- **Name**: Taissa Machado
- **Role**: Gestora de Meio Ambiente da Triunfo Concebra
- **Quote**: "Um dos pilares do sistema de gestão da Triunfo Concebra é justamente a conservação ambiental. E a premiação que recebemos traz a importância para o nosso sistema de gestão ambiental e o uso da energia renovável. E a parceria com a BC Energia trouxe o alcance desses pilares de conservação ambiental, controle e redução dos impactos ambientais."

### Card 3 — Heder Dias
- **Logo**: `/img/components/customers/grupocereal.png`
- **Name**: Heder Dias
- **Role**: Supervisor do Grupo Cereal
- **Quote**: "A nossa parceria destaca a relevância da economia proporcionada pelo Grupo BC, que oferece soluções energéticas sustentáveis e eficientes. Juntos, reforçamos o compromisso em contribuir para um futuro mais sustentável e responsável. Queremos demonstrar o compromisso das empresas com a sustentabilidade"

## Assets
- `/img/components/customers/novomundo.png` → `public/img/components/customers/novomundo.png`
- `/img/components/customers/triunfoconcebra.png`
- `/img/components/customers/grupocereal.png`
- `/img/global/testimony-icon.svg`

## Responsive Behavior
- **Desktop**: 3 cards side by side (slidesPerView: 3)
- **Tablet**: 2 cards
- **Mobile**: 1 card per view
