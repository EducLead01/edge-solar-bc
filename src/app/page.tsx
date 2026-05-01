import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductsSection } from "@/components/ProductsSection";
import { ACTypesSection } from "@/components/ACTypesSection";
import { AnimacaoSolar } from "@/components/AnimacaoSolar";
import { ComoFuncionaSection } from "@/components/ComoFuncionaSection";
import { CalculadoraSection } from "@/components/CalculadoraSection";
import { AppSection } from "@/components/AppSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { BCCastSection } from "@/components/BCCastSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <ProductsSection />
        <ACTypesSection />
        <AnimacaoSolar />
        <ComoFuncionaSection />
        <CalculadoraSection />
        <AppSection />
        <TestimonialsSection />
        <ClientsSection />
        <BCCastSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
