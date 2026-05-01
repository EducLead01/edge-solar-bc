# HeroSlider Specification

## Overview
- **Target file:** `src/components/HeroSlider.tsx`
- **Screenshot:** `docs/design-references/desktop-viewport.png`
- **Interaction model:** Swiper.js carousel (autoplay, loop, nav arrows, pagination dots)
- **Library needed:** `npm install swiper`

## DOM Structure
```
div.swiper (overflow-hidden, relative)
  div.swiper-wrapper
    div.swiper-slide (×3)
      div[class*="h-[105vh]"] (bg-cover, 945px tall)
        div.absolute.inset-0.bg-teal-950.opacity-40 (dark overlay)
        div.container.mx-auto (content wrapper, z-20, relative)
          div.flex.flex-col.lg:flex-row (text container)
            h1 (white, some words in amber-400 via <span>)
            p (white, text-xl)
            a (CTA button)
  div.swiper-button-prev / swiper-button-next (nav arrows)
  div.swiper-pagination (dots)
```

## Computed Styles

### Slide container `div[class*="h-[105vh]"]`
- height: 105vh (≈945px at 1440px viewport)
- background-size: cover
- background-position: center
- position: relative
- display: flex
- flex-direction: column
- justify-content: center
- padding-top: 96px
- padding-bottom: 96px

### Overlay `div.absolute.inset-0`
- position: absolute; top:0; left:0; right:0; bottom:0
- background-color: rgb(4, 47, 46) (teal-950)
- opacity: 0.4
- z-index: 10

### Content wrapper
- position: relative; z-index: 20
- display: flex; flex-direction: column (mobile) → row (lg)
- gap: 16px

### h1
- font-size: 48px (lg) / 24px (mobile)
- font-weight: 700
- color: rgb(255, 255, 255)
- text-transform: uppercase
- line-height: 3.7rem (lg) / snug (mobile)
- White words default; accent words wrapped in `<span class="text-amber-400">`

### p (subtitle)
- font-size: 20px (text-xl)
- color: rgb(255, 255, 255)
- margin-bottom: 24px (mb-6)
- margin-top: 8px (mt-2)

### CTA button
- border: 1px solid white
- background-color: white (slides 1, 3) / amber-400 (slide 2 "ADESÃO GRATUITA")
- color: teal-900 (text-teal-900) 
- padding: 8px 16px (px-4 py-2)
- font-weight: 700
- text-transform: uppercase
- display: inline-block

## Slides Data

### Slide 1
- Background image: `/bg-home.jpg`
- Title HTML: `Migre sua empresa para o <span class="text-amber-400">Mercado Livre</span> e economize na conta de energia`
- Subtitle: "Solução para empresas com contas acima de R$10 mil. Nossa atuação vai além da migração para o Mercado Livre de Energia. Ajudamos empresas na tomada de decisões e na gestão eficiente de energia."
- Button text: "SAIBA MAIS"
- Button href: `/produtos/mercado-livre-de-energia`
- Button style: border-white bg-white text-teal-900

### Slide 2
- Background image: `/img/pages/banner2.webp`
- Title HTML: `Faça sua adesão sem custos e economize até <span class="text-amber-400">26% na energia</span>`
- Subtitle: "Por meio do consórcio BC Energia, consumidores com contas de energia a partir de R$250,00 economizam na conta de energia sem precisar fazer investimentos em placas solares."
- Button text: "ADESÃO GRATUITA"
- Button href: `http://www.appenergia.com.br/Grupo_BC_Energia`
- Button style: bg-amber-400 text-teal-900

### Slide 3
- Background image: `/img/pages/nossas-usinas2.webp`
- Title HTML: `Mais de <span class="text-amber-400">R$ 400 milhões de economia</span> aos nossos clientes`
- Subtitle: "Soluções sustentáveis e inteligentes que reduzem os custos com energia e aumentam a competitividade de mercado."
- Button text: "SAIBA MAIS"
- Button href: `/sobre/quem-somos`
- Button style: border-white bg-white text-teal-900

## States & Behaviors

### Swiper carousel
- **Autoplay**: 4000ms delay, pauseOnMouseEnter
- **Loop**: enabled
- **Navigation**: prev/next arrow buttons (Swiper default arrows, white colored)
- **Pagination**: clickable dots at bottom center (amber-400 active dot)
- **Transition**: slide effect, 600ms

## Assets
- `/bg-home.jpg` → `public/bg-home.jpg`
- `/img/pages/banner2.webp` → `public/img/pages/banner2.webp`
- `/img/pages/nossas-usinas2.webp` → `public/img/pages/nossas-usinas2.webp`
- `/img/global/section-arrow-down-white.svg` → `public/img/global/section-arrow-down-white.svg`

## Responsive Behavior
- **Desktop**: h1 text-5xl, subtitle text-xl, text-left, flex-row layout
- **Mobile**: h1 text-3xl, centered, flex-col layout
- **Breakpoint**: lg (1024px)
