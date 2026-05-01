# ProductsSection Specification

## Overview
- **Target file:** `src/components/ProductsSection.tsx`
- **Screenshot:** `docs/design-references/section-products.png` + `docs/design-references/section-products-row2.png`
- **Interaction model:** hover (card background image zoom)

## DOM Structure
```
section (white bg, px-6 pt-10 pb-24)
  div.container (mx-auto)
    h2 "PRODUTOS" (label, teal-900, text-2xl font-light)
    h3 "Conheça aqui..." (dark teal, text-4xl font-bold, text-center mb-12)
    div (3-col grid, gap-6, 2 rows = 6 cards total)
      ProductCard ×6
        div.group (rounded-lg, bg-teal-600/95, overflow-hidden, flex flex-col)
          div.image-top (h-60, bg-cover, hover:bg-[120%_120%] transition 1s)
            img icon (absolute center, 50-56px)
          div.content (p-6 flex-1)
            h4 (title, font-bold text-[30px] text-white text-center)
            p (description, text-white text-center text-sm mt-2)
            div (btn wrapper, flex justify-center mt-6)
              a (SAIBA MAIS btn, bg-amber-400 text-teal-900 font-bold uppercase px-6 py-3)
```

## Computed Styles

### Section
- background-color: rgb(255, 255, 255)
- padding-top: 40px
- padding-left: 24px; padding-right: 24px
- padding-bottom: 96px
- position: relative

### Section label h2 (PRODUTOS)
- font-size: 24px
- font-weight: 300
- color: rgb(19, 78, 74) (teal-900)
- text-align: center
- letter-spacing: wider (tracking-widest)
- text-transform: uppercase

### Section title h3
- font-size: 36px
- font-weight: 700
- color: rgb(19, 78, 74)
- text-align: center
- max-width: ~900px (text stays centered)
- margin-bottom: 48px

### Cards grid container
- display: grid
- grid-template-columns: repeat(3, 1fr) (3 columns at lg)
- gap: 24px (gap-6)
- max-width: 1280px
- margin: auto

### Card outer wrapper `.group`
- border-radius: 8px
- background-color: rgba(13, 148, 136, 0.95) (teal-600/95)
- overflow: hidden
- display: flex
- flex-direction: column

### Card image section (top of card)
- height: 240px (h-60)
- background-size: 100% 100% (bg-[length:100%_100%])
- background-position: center
- display: flex
- justify-content: center
- align-items: center
- transition: background-size 1000ms ease-in-out

### Card image hover state
- background-size: 120% 120% (bg-[length:120%_120%])

### Card icon img
- width: ~40-56px (varies by icon)
- position: centered within image div

### Card content div
- padding: 24px (p-6)
- flex: 1
- display: flex; flex-direction: column; align-items: center

### h4 (card title)
- font-size: 30px
- font-weight: 700
- color: rgb(255, 255, 255)
- text-align: center

### p (card description)
- color: rgb(255, 255, 255)
- text-align: center
- font-size: 14px
- margin-top: 8px

### CTA button (SAIBA MAIS)
- background-color: rgb(251, 191, 36) (amber-400)
- color: rgb(19, 78, 74) (teal-900)
- font-weight: 700
- text-transform: uppercase
- padding: 12px 24px (py-3 px-6)
- margin-top: 24px (mt-6)
- font-size: 14px

## Products Data (verbatim)

| # | Title | Description | Icon file | Href |
|---|-------|-------------|-----------|------|
| 1 | Mercado Livre de Energia | Para empresas com contas a partir de R$ 10 mil. Solução sem investimento para consumidores conectados em alta tensão e demanda contratada a partir de 30kW negociarem livremente a própria energia. | icon-mercado-energia.svg | /produtos/mercado-livre-de-energia |
| 2 | Consórcio BC Energia | Para contas a partir de R$ 300,00. Solução sem investimento para consumidores conectados em baixa tensão terem acesso a energia solar sem a necessidade de construir usina. | icon-energia-assinatura.svg | /produtos/consorcio-bc-energia |
| 3 | Gestão de Energia | Performance no Mercado Livre. Fundamental para reduzir os custos com energia elétrica, trazendo sustentabilidade, eficiência e aumento de competitividade para o negócio. | icon-gestao-de-energia.svg | /produtos/gestao-de-energia |
| 4 | Certificação Renovável - IREC | Comprovação de consumo renovável. Certificação internacional que permite a rastreabilidade do consumo através das fontes renováveis, como solar, eólica, hídrica e biomassa. | irec.svg | /produtos/irec |
| 5 | Arrendamento de Usinas | Parceria que entrega resultado. Oportunidade para donos de usinas arrendarem seus ativos e, assim, não se preocuparem com conversão e gestão de clientes. | icon-arrendamento-de-usinas.svg | /produtos/arrendamento-de-usinas |
| 6 | Gestão e Consultoria Jurídica | Expertise em Direito Energético e Empresarial. Atuação multidisciplinar para oferecer uma atuação mais estratégica alinhada com os seus objetivos empresariais de forma contenciosa e consultiva. | icon-consultoria-juridica.svg | https://www.bced.com.br/ |

## Background images (card tops)
- Card 1: `/img/components/products-card/mercado-livre-de-energia-thumb.png`
- Card 2: `/img/components/products-card/energia-por-assinatura-thumb.png`
- Card 3: `/img/components/products-card/gestao-de-energia-thumb.png`
- Card 4: `/img/components/products-card/certificacao-renovavel-thumb.png`
- Card 5: `/img/components/products-card/arrendamento-de-usinas-thumb.png`
- Card 6: `/img/components/products-card/consultoria-juridica-thumb.png`

## Assets
- All images above → `public/img/components/products-card/`
- All icons → `public/img/icons/`

## Responsive Behavior
- **Desktop (1440px)**: 3-column grid
- **Tablet (768px)**: 2-column grid (md:grid-cols-2)
- **Mobile (390px)**: 1-column grid, full width
- **Breakpoint**: lg (1024px) for 3-col
