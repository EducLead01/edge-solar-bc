# NumbersSection Specification

## Overview
- **Target file:** `src/components/NumbersSection.tsx`
- **Screenshot:** `docs/design-references/section-numbers.png`
- **Interaction model:** static

## DOM Structure
```
section.bg-teal-600 (bg-cover bg-center py-48, position relative)
  div (arrow divider top — white inverted SVG bg, absolute top)
  div.container (mx-auto, text-center)
    img (grupo-bc-logo-solo-branca.svg, white logo icon, ~60px tall, mb-8)
    h3 (heading with amber span, text-4xl font-bold text-white text-center uppercase)
    div (3-col stats grid, mt-12, gap-8)
      div ×3
        h5 (stat value, text-5xl font-bold text-amber-400)
        p (stat label, text-white text-center text-lg)
    a (QUERO ECONOMIZAR CTA, mt-12, border-white bg-transparent text-white)
  div (arrow divider bottom — white inverted SVG bg, absolute bottom)
```

## Computed Styles

### Section
- background-color: rgb(13, 148, 136) (teal-600)
- background-image: url("/img/components/numbers/fundo-numeros.jpg")
- background-size: cover
- background-position: center
- padding-top: 192px (py-48)
- padding-bottom: 192px
- position: relative
- display: flex; flex-direction: column; align-items: center

### Logo img
- src: `/img/global/grupo-bc-logo-solo-branca.svg`
- height: ~60px
- margin-bottom: 32px

### h3 (heading)
- font-size: 36px
- font-weight: 700
- color: rgb(255, 255, 255)
- text-align: center
- text-transform: uppercase
- max-width: ~900px
- White text: "Somos a maior"
- Amber text (span.text-amber-400): "comercializadora de energia"
- White text: "do Centro-Oeste e uma das principais independentes do país."

### Stats h5 values
- font-size: 48px
- font-weight: 700
- color: rgb(251, 191, 36) (amber-400)
- text-align: center

### Stats p labels
- color: rgb(255, 255, 255)
- text-align: center
- font-size: 18px

### Stats grid
- display: grid
- grid-template-columns: repeat(3, 1fr)
- gap: 32px
- margin-top: 48px

### CTA button (QUERO ECONOMIZAR)
- border: 1px solid rgb(255, 255, 255)
- background: transparent
- color: rgb(255, 255, 255)
- padding: 12px 32px
- font-weight: 700
- text-transform: uppercase
- margin-top: 48px

## Text Content (verbatim)

### Heading
"Somos a maior **comercializadora de energia** do Centro-Oeste e uma das principais independentes do país."
(amber highlight on: "comercializadora de energia")

### Stats
| Value | Label |
|-------|-------|
| + de 5 mil | clientes recebendo nossas soluções em economia |
| + de R$400M | de economia gerada aos nossos clientes |
| + de 15 mil | toneladas de CO2 evitados na atmosfera |

### CTA
"QUERO ECONOMIZAR" → `/produtos`

## Assets
- Background image: `/img/components/numbers/fundo-numeros.jpg` → `public/img/components/numbers/fundo-numeros.jpg`
- Logo: `/img/global/grupo-bc-logo-solo-branca.svg` → `public/img/global/grupo-bc-logo-solo-branca.svg`
- Arrow dividers: `/img/global/section-arrow-down-inverted-white.svg` → `public/img/global/section-arrow-down-inverted-white.svg`

## Responsive Behavior
- **Desktop**: 3-column stats grid, centered
- **Mobile**: 1-column stats grid, stacked
- **Breakpoint**: md (768px) for 3-col
