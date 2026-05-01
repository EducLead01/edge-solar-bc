export interface HeroSlide {
  bgImage: string;
  titleHtml: string;
  subtitle: string;
  btnText: string;
  btnHref: string;
  btnVariant: "white" | "amber";
}

export interface ProductCard {
  title: string;
  description: string;
  iconSrc: string;
  bgImage: string;
  btnText: string;
  btnHref: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  logoSrc: string;
  quote: string;
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface FooterColumn {
  title: string;
  links: { text: string; href: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: { text: string; href: string }[];
}
