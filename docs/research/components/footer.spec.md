# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/section-footer.png` + `docs/design-references/section-footer-bottom.png`
- **Interaction model:** static

## DOM Structure
```
footer (bg-zinc-900, bg-cover, px-8 py-24, relative)
  div.container (mx-auto)
    div (main grid: logo+address col + 4 nav columns + social col)
      div (left: logo, 2 addresses)
        img (Logo-BC-Energia-Vertical-Branco.svg, ~160px)
        h2 + p (Endereço em Goiânia)
        h2 + p (Endereço em São Paulo)
      div (nav columns grid: 5 cols)
        FooterColumn ×5 (Produtos, Segmentos, Sobre nós, Conteúdo, Contato)
          h5 (column title, font-bold text-lg text-white)
          ul (list of links, text-white text-sm)
  div (social section, border-top, text-center, mt-8 pt-8)
    h5 "SIGA NOSSAS REDES" (white, text-2xl font-bold, mb-6)
    div (4 social icon links, flex justify-center gap-6)
      a ×4 (Instagram, Facebook, LinkedIn, YouTube)
        img (~32px icon, white)
div.copyright-bar (bg-teal-600, py-4, text-center)
  p "© GRUPO BC ENERGIA - 2024 | TODOS OS DIREITOS RESERVADOS" (white, text-sm uppercase)
```

## Computed Styles

### footer element
- background-color: rgb(24, 24, 27) (zinc-900)
- background-image: url("/img/global/footer-bg.png")
- background-size: cover
- background-position: center
- padding: 96px 32px
- color: rgb(255, 255, 255)

### Footer grid (main area)
- display: grid
- grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr (logo+address + 5 columns) at lg
- gap: 40px
- align-items: start

### Logo img
- src: `/Logo-BC-Energia-Vertical-Branco.svg`
- width: ~160px (w-40)
- margin-bottom: 24px

### Address h2
- font-size: 18px
- font-weight: 700
- color: rgb(255, 255, 255)
- margin-top: 24px; margin-bottom: 8px

### Address p
- font-size: 14px
- color: rgb(209, 213, 219) (gray-300)
- line-height: 1.6

### Column title h5
- font-size: 18px
- font-weight: 700
- color: rgb(255, 255, 255)
- margin-bottom: 16px
- text-transform: capitalize

### Column links li/a
- font-size: 14px
- color: rgb(209, 213, 219) (gray-300)
- display: block
- margin-bottom: 8px
- hover: color white
- text-decoration: none

### Social section
- border-top: 1px solid rgb(63, 63, 70) (zinc-700)
- margin-top: 32px; padding-top: 32px
- text-align: center

### Social icon links
- display: flex; justify-content: center; gap: 24px
- img: 32px × 32px, white color

### Copyright bar (separate div below footer)
- background-color: rgb(13, 148, 136) (teal-600)
- padding: 16px
- text-align: center
- font-size: 14px
- color: rgb(255, 255, 255)
- text-transform: uppercase
- font-weight: 700

## Text Content (verbatim)

### Addresses
**Goiânia:**
Av. Dep. Jamel Cecílio, c/ rua 56, nº 2929, Salas 2802/2803 - Ed. Brookfield Towers Torre B - Jardim Goiás, Goiânia - GO, 74810-240

**São Paulo:**
Av. Pres. Juscelino Kubitschek, 360 - 7º andar cj71 - Edifício JK 360 -Vila Nova Conceição, São Paulo - SP, 04543-000

### Nav Columns

**Produtos**
- Mercado livre de energia → /produtos/mercado-livre-de-energia
- Consórcio BC Energia → /produtos/consorcio-bc-energia
- Gestão de Energia → /produtos/gestao-de-energia
- Certificação Renovável - IREC → /produtos/irec
- Arrendamento de usinas → /produtos/arrendamento-de-usinas
- Consultoria Jurídica → https://www.bced.com.br/

**Segmentos**
- Agronegócio → /segmentos/agronegocio
- Bares e Restaurantes → /segmentos/bares-e-restaurantes
- Condomínio → /segmentos/condominio
- Educacional → /segmentos/educacional
- Turismo → /segmentos/turismo
- Lazer → /segmentos/lazer
- Religioso → /segmentos/religioso
- Residencial → /segmentos/residencial
- Saúde → /segmentos/saude
- Serviço → /segmentos/servico
- Varejo → /segmentos/varejo

**Sobre nós**
- Quem Somos → /sobre/quem-somos
- Nossas Usinas → /sobre/nossas-usinas
- LGPD → /sobre/lgpd
- Leilão → /sobre/leilao
- Fator de Alavancagem → /sobre/fator-de-alavancagem
- Sustentabilidade → /sobre/sustentabilidade
- Social → /sobre/social
- Condições Gerais Varejistas → /sobre/condicoes-gerais-varejistas

**Conteúdo**
- BC Cast → https://www.youtube.com/@grupobcenergia/videos

**Contato**
- Entre em contato → /contato
- Quero ser parceiro → https://wa.me/5562981632741
- Trabalhe conosco → https://grupobcenergia.vagas.solides.com.br/
- Sou fornecedor/Prestador de Serviços → https://wa.me/5562981590131

### Social links
- Instagram: https://www.instagram.com/grupobcenergia/
- Facebook: https://www.facebook.com/GrupoBCEnergia
- LinkedIn: https://www.linkedin.com/company/grupobcenergia/
- YouTube: https://www.youtube.com/@grupobcenergia

### Copyright
"© GRUPO BC ENERGIA - 2024 | TODOS OS DIREITOS RESERVADOS"

## Assets
- Logo: `public/Logo-BC-Energia-Vertical-Branco.svg`
- Footer bg: `public/img/global/footer-bg.png`
- Social icons: `public/img/icons/instagram.svg`, `facebook.svg`, `linkedin.svg`, `youtube.svg`

## Responsive Behavior
- **Desktop (1440px)**: 6-column grid (logo+address + 5 nav columns)
- **Mobile (390px)**: stacked single column; nav columns hidden or collapsed
- **Breakpoint**: lg (1024px)
