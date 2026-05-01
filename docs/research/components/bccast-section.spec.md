# BCCastSection Specification

## Overview
- **Target file:** `src/components/BCCastSection.tsx`
- **Screenshot:** `docs/design-references/section-clients.png`
- **Interaction model:** static (YouTube embeds)

## DOM Structure
```
section.bg-gray-100 (py-24)
  div.container (mx-auto, text-center)
    h2 "BC CAST" (label, teal-900, text-2xl font-light tracking-widest uppercase)
    h3 "INSIGHTS VALIOSOS..." (teal-900, text-4xl font-bold, text-center, mt-2 mb-12)
    div (2-col grid at lg, gap-8)
      div ×2 (iframe wrapper, aspect-ratio 16/9)
        iframe (YouTube embed, w-full h-full, rounded-lg)
```

## Computed Styles

### Section
- background-color: rgb(243, 244, 246) (gray-100)
- padding-top: 96px; padding-bottom: 96px (py-24)

### Label h2
- font-size: 24px
- font-weight: 300
- color: rgb(19, 78, 74)
- text-transform: uppercase
- letter-spacing: wider

### Title h3
- font-size: 36px
- font-weight: 700
- color: rgb(19, 78, 74)
- text-align: center
- margin-top: 8px; margin-bottom: 48px

### Video grid
- display: grid
- grid-template-columns: repeat(2, 1fr) at lg
- gap: 32px

### iFrame wrapper
- aspect-ratio: 16 / 9
- position: relative
- border-radius: 8px
- overflow: hidden

### iframe
- width: 100%; height: 100%
- border-radius: 8px

## Text Content (verbatim)
- Label: "BC CAST"
- Title: "INSIGHTS VALIOSOS SOBRE ENERGIA E MUITO MAIS EM NOSSO PODCAST"

## YouTube Videos
- Video 1: `https://www.youtube.com/embed/vVnokGbhNPk?si=biv7wFIJmjQnLAll`
  - Title: "#01 BC Cast | Tiago Mendonça - Ex-Secretário de Agri..."
- Video 2: `https://www.youtube.com/embed/RrcOwWEAoDY?si=TC1w4EdKkZ0cuJpD`
  - Title: "#02 BC Cast | Rubens Fileti - Presidente da ACIEG"

## Responsive Behavior
- **Desktop (1440px)**: 2-column grid (lg:grid-cols-2)
- **Mobile (390px)**: 1-column, stacked videos
- **Breakpoint**: lg (1024px)
