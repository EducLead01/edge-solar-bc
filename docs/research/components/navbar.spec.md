# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/desktop-viewport.png`
- **Interaction model:** scroll-driven (transparent white → solid teal-800)

## DOM Structure
```
nav (fixed, full-width, z-50, mt-4→mt-2 on scroll)
  div.container (rounded-lg, px-8 py-4, backdrop-blur-lg, bg-white/30 → bg-teal-800/80)
    a[href="/"] (logo)
      img (Logo-BC-Energia-Vertical-Branco.svg, w-[5.8rem])
    div.hidden.lg:flex (desktop nav links, font-bold uppercase spacing-x-6 to x-10)
      NavItem: PRODUTOS (with dropdown)
      NavItem: SEGMENTOS (with dropdown)
      NavItem: SOBRE NÓS (with dropdown)
      NavItem: CONTEÚDO (with dropdown)
      NavItem: CONTATO (with dropdown)
    a (CTA button: QUERO ECONOMIZAR, border border-white px-4 py-2 uppercase font-bold)
    img (icon-menu.svg, mobile hamburger, lg:hidden)
```

## Computed Styles (exact values from getComputedStyle)

### `nav` wrapper
- position: fixed
- inset-x: 0 (left:0, right:0)
- top: 0
- z-index: 50
- display: flex
- justify-content: center
- transition: 0.7s cubic-bezier(0.4, 0, 0.2, 1)
- margin-top: 16px (at-top) → 8px (scrolled) — controlled by class `mt-4` vs `mt-2`
- mx: 24px (lg: auto)

### `.container` inner div
- display: flex
- flex-direction: row
- justify-content: space-between
- align-items: center
- border-radius: 8px
- padding: 16px 32px (lg)
- max-width: 1280px
- width: 1280px (full on desktop)
- backdrop-filter: blur(12px) (backdrop-blur-lg)
- transition: all 0.7s ease-in-out
- **At top**: background-color: rgba(255, 255, 255, 0.3)
- **Scrolled**: background-color: rgba(17, 94, 89, 0.8)
- height: 85.4375px

### Logo img
- width: 5.8rem ≈ 92.8px (lg) / 5rem ≈ 80px (mobile)
- src: `/Logo-BC-Energia-Vertical-Branco.svg`

### Nav links (desktop)
- font-weight: 700 (bold)
- text-transform: uppercase
- color: rgb(255, 255, 255)
- font-size: 16px
- letter-spacing: normal
- gap between links: lg:space-x-6 xl:space-x-10

### CTA Button (QUERO ECONOMIZAR)
- border: 1px solid rgb(255, 255, 255)
- background: transparent
- color: rgb(255, 255, 255)
- padding: 8px 16px
- font-weight: 700
- text-transform: uppercase
- font-size: 0.75rem (text-xs on mobile, text-base on lg)
- hover: border-white, bg-white, text-teal-900

## States & Behaviors

### Scroll-triggered navbar style
- **Trigger**: `window.scrollY > 50` (approximate)
- **State A (at-top)**: container `background: rgba(255,255,255,0.3)`, nav margin-top: 16px
- **State B (scrolled)**: container `background: rgba(17,94,89,0.8)`, nav margin-top: 8px
- **Transition**: `transition-all duration-700 ease-in-out` (0.7s)
- **Implementation**: `useEffect` with scroll event listener; toggle a boolean state; apply conditional Tailwind classes

### Dropdown menus (desktop)
- Each nav item has a dropdown on hover
- Dropdowns: `absolute left-0 z-50 mt-4 grid w-max` with `invisible opacity-0` → visible on hover
- **Do not implement full dropdown behavior** — link the nav items as simple links only (dropdowns are out of scope for the homepage clone)

## Nav Links (exact)
- PRODUTOS → `/produtos`
  - Mercado livre de energia → `/produtos/mercado-livre-de-energia`
  - Consórcio BC Energia → `/produtos/consorcio-bc-energia`
  - Gestão de Energia → `/produtos/gestao-de-energia`
  - Certificação Renovável - IREC → `/produtos/irec`
  - Arrendamento de usinas → `/produtos/arrendamento-de-usinas`
  - Consultoria Jurídica → `https://www.bced.com.br/`
- SEGMENTOS → `#` (dropdown only)
- SOBRE NÓS → `#`
- CONTEÚDO → `#`
- CONTATO → `#`
- CTA: QUERO ECONOMIZAR → `/produtos`

## Responsive Behavior
- **Desktop (1440px)**: full nav with all links visible, CTA button on right
- **Mobile (390px)**: only logo + hamburger icon (icon-menu.svg) visible; full nav hidden (`hidden lg:flex`)
- **Breakpoint**: switches at lg (1024px)

## Assets
- Logo: `/Logo-BC-Energia-Vertical-Branco.svg` → will be at `public/Logo-BC-Energia-Vertical-Branco.svg`
- Menu icon: `/img/icons/icon-menu.svg` → `public/img/icons/icon-menu.svg`
