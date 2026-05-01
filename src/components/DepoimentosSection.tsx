import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "A melhor decisão que tomei para minha casa. Minha conta baixou de R$ 850 para R$ 60,00 (só a taxa mínima). O atendimento da equipe foi impecável desde o primeiro contato.",
    name: "João Silva",
    result: "Economizou 93% (Residência)",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    text: "Como dona de padaria, a conta de luz era o meu maior vilão. O sistema comercial da Frenergy se pagou em 3 anos e agora o que sobra invisto no crescimento da minha empresa.",
    name: "Maria Oliveira",
    result: "Economizou 90% (Comércio)",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
  },
  {
    text: "Instalação extremamente rápida e limpa. Explicaram tudo sobre o aplicativo onde acompanho a geração pelo celular. Recomendo para todo mundo da família.",
    name: "Carlos Mendes",
    result: "Economizou 95% (Fazenda)",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
  },
];

export function DepoimentosSection() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2833] mb-4">
            Quem já gera a própria energia comprova
          </h2>
          <p className="text-gray-600 text-lg">
            Veja o que dizem os clientes que escolheram a Frenergy para zerar suas contas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 p-8 rounded-2xl shadow-sm relative">
              <Quote className="w-10 h-10 text-[#F5A623] absolute top-4 right-6 opacity-20" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[#1C2833]">{t.name}</h4>
                  <p className="text-sm text-[#27AE60] font-semibold">{t.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificações */}
        <div className="border-t border-gray-100 pt-10 text-center">
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-6">
            Equipamentos Homologados e Certificados por:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-2xl font-black text-gray-800">ANEEL<span className="text-[#F5A623] text-4xl">.</span></div>
            <div className="text-2xl font-black text-gray-800">INMETRO</div>
            <div className="text-2xl font-black text-gray-800 border-2 border-gray-800 px-2">ABSOLAR</div>
            <div className="text-2xl font-bold italic text-gray-800">WEG Integrador</div>
          </div>
        </div>
      </div>
    </section>
  );
}
