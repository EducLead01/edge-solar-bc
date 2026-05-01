# ClientsSection Specification

## Overview
- **Target file:** `src/components/ClientsSection.tsx`
- **Screenshot:** `docs/design-references/section-clients.png`
- **Interaction model:** Swiper.js auto-scrolling logo carousel

## DOM Structure
```
section (white bg, pb-20 text-center text-teal-900)
  div.container (mx-auto)
    p "PARCERIA E CONFIANÇA" (label, teal-900, tracking-widest uppercase, text-sm)
    h3 "NOSSOS CLIENTES" (teal-900, text-4xl font-bold, mt-2 mb-10)
    div.swiper (logo carousel)
      div.swiper-wrapper
        div.swiper-slide ×21 (each with one client logo img)
```

## Computed Styles

### Section
- background-color: rgb(255, 255, 255)
- padding-bottom: 80px (pb-20)
- text-align: center
- color: rgb(19, 78, 74) (teal-900)

### Label p
- font-size: 14px
- text-transform: uppercase
- letter-spacing: wider (tracking-widest)
- color: rgb(19, 78, 74)

### h3
- font-size: 36px
- font-weight: 700
- color: rgb(19, 78, 74)
- margin-top: 8px
- margin-bottom: 40px

### Client logo imgs
- height: ~60px
- width: auto
- object-fit: contain
- filter: grayscale(0) → colored logos

## Swiper Config
- slidesPerView: 5 (desktop) / 3 (tablet) / 2 (mobile)
- spaceBetween: 32
- loop: true
- autoplay: { delay: 2000, disableOnInteraction: false }
- speed: 800

## Client Logos (21 total)
1. grupocereal.png — Grupo Cereal
2. igreja-luz.png — Igreja Luz
3. lifebox.png — Lifebox
4. limagrain-vector-logo.png — Limagrain
5. luidoices.png — Lui Doces
6. mega-moda-park.png — Mega Moda Park
7. novomundo.png — Novo Mundo
8. piquiras.png — Piquiras
9. richesse.png — Richesse
10. teashop.png — Tea Shop
11. teuto.png — Teuto
12. triunfoconcebra.png — Triunfo Concebra
13. bandnewsfmgoiania.png — Band News FM Goiânia
14. coco-bambu-restaurante.png — Coco Bambu Restaurante
15. coming.png — Coming
16. curtidoratocantins.png — Curtidora Tocantins
17. drogariasantamarta.png — Drogaria Santa Marta
18. flamboyant.png — Flamboyant
19. fujioka.png — Fujioka
20. grupo-jorlan.png — Grupo Jorlan
21. grupo-natureza-o-boticario.png — Grupo Natureza / O Boticário

All images in: `public/img/components/customers/`

## Responsive Behavior
- **Desktop (1440px)**: 5 logos visible
- **Tablet (768px)**: 3 logos visible
- **Mobile (390px)**: 2 logos visible
