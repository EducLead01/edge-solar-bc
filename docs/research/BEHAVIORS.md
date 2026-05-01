# Behaviors — grupobcenergia.com.br

## Navbar (Scroll-Driven)
- **Element**: `nav` fixed, full-width, `z-50`
- **Container**: `.container.rounded-lg` with `backdrop-blur-lg` and `transition-all duration-700 ease-in-out`
- **At top (scroll ≈ 0)**: container has `bg-white bg-opacity-30` = `rgba(255,255,255,0.3)`, top margin `mt-4` (16px)
- **When scrolled**: container switches to `bg-teal-800 bg-opacity-80` = `rgba(17,94,89,0.8)`, top margin `mt-2` (8px)
- **Trigger**: scroll listener — switches class when `window.scrollY > 50` (approximate)
- **Transition**: `0.7s cubic-bezier(0.4, 0, 0.2, 1)` on all properties
- **Implementation**: React `useEffect` + `scroll` event listener, toggle class/state

## Hero Slider (Swiper.js)
- **Library**: Swiper.js (class `swiper-slide` detected)
- **3 slides**, each `h-[105vh]` (945px) with `bg-cover bg-center`
- **Overlay**: `absolute inset-0 bg-teal-950 opacity-40` on each slide
- **Navigation**: left/right arrow buttons (`<` and `>`)
- **Pagination**: dots at bottom center
- **Autoplay**: likely enabled (standard for hero sliders)
- **Loop**: likely enabled

## Products Cards (Hover)
- Each card `.group.flex.flex-col.overflow-hidden.rounded-lg.bg-teal-600/95`
- Image div: `flex h-60 justify-center bg-[length:100%_100%] bg-center transition-all duration-1000 ease-in-out group-hover:bg-[length:120%_120%]`
- **Hover behavior**: background image zooms from 100% to 120% over 1s ease-in-out

## Testimonials Carousel (Swiper.js)
- 3 testimonial cards in a Swiper carousel
- Navigation arrows
- Cards: `rgba(229,231,235,0.6)` background, `rounded-lg`, `padding: 24px`

## Clients Logo Carousel (Swiper.js)
- 21 client logos in auto-scrolling Swiper
- Multiple slides visible at once (likely 5-6 per view)
- Likely `autoplay` with loop

## BC Cast Section (Static)
- 2 YouTube iframes side by side
- Video IDs: `vVnokGbhNPk`, `RrcOwWEAoDY`
- Gray background `rgb(243,244,246)` = `bg-gray-100`

## WhatsApp Float Button
- Fixed bottom-right, circular green button
- Links to WhatsApp

## Section Dividers (Arrow Shapes)
- Between hero and products: white downward-pointing 3D arrow shape (SVG bg)
- Between products and numbers: same inverted white arrow divider (SVG bg)
- File: `/img/global/section-arrow-down-white.svg`, `/img/global/section-arrow-down-inverted-white.svg`
