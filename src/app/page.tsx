import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductsSection, ClimatizacaoTitle } from "@/components/ProductsSection";
import { FlashOfferSection } from "@/components/FlashOfferSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <ClimatizacaoTitle />
        <FlashOfferSection />
        <ProductsSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
