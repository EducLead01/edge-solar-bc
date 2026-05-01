# Page Topology — grupobcenergia.com.br

## Layout
- Full-page scroll, no scroll-snap
- Fixed navbar overlays everything (z-50)
- WhatsApp float button fixed bottom-right (z-99997)

## Sections (top to bottom)

| # | Name | Height | Interaction Model | Background |
|---|------|--------|-------------------|------------|
| 0 | Navbar | 85px fixed | scroll-driven (transparency→teal) | transparent/teal-800 |
| 1 | HeroSlider | 105vh | Swiper carousel (autoplay+nav) | 3 bg images + teal overlay |
| 2 | Arrow Divider | ~80px | static | SVG white arrow down |
| 3 | ProductsSection | ~1600px | hover (card image zoom) | white |
| 4 | Arrow Divider | ~80px | static | SVG white arrow inverted |
| 5 | NumbersSection | ~700px | static | teal-600 + bg image |
| 6 | Arrow Divider | ~80px | static | SVG inverted white |
| 7 | TestimonialsSection | ~500px | Swiper carousel | white/transparent |
| 8 | ClientsSection | ~300px | Swiper auto-scroll | white |
| 9 | BCCastSection | ~600px | static (YouTube embeds) | gray-100 |
| 10 | Footer | ~800px | static | zinc-900 + bg image |
| 11 | CopyrightBar | ~60px | static | teal-600 |

## Component Files
```
src/components/
  Navbar.tsx
  HeroSlider.tsx
  ArrowDivider.tsx
  ProductsSection.tsx
  NumbersSection.tsx
  TestimonialsSection.tsx
  ClientsSection.tsx
  BCCastSection.tsx
  Footer.tsx
  WhatsAppFloat.tsx
```

## Key Colors
- Primary teal: `#134e4a` = `teal-900`, `rgb(19, 78, 74)`
- Navbar teal: `rgba(17,94,89,0.8)` = `teal-800/80`
- Accent yellow: `rgb(251, 191, 36)` = `amber-400`
- Text white: `rgb(255, 255, 255)`
- Card teal: `rgba(13, 148, 136, 0.95)` = `teal-500/95`
- Footer dark: `rgb(24, 24, 27)` = `zinc-900`
- Gray section: `rgb(243, 244, 246)` = `gray-100`
