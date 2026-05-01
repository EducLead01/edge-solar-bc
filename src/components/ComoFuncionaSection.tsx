import { MessageCircle, ClipboardList, Wrench, Zap, TrendingDown } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: MessageCircle,
    title: "Atendimento",
    desc: "Entre em contato por telefone, WhatsApp ou formulário. Nossa equipe responde rapidamente.",
  },
  {
    num: 2,
    icon: ClipboardList,
    title: "Visita Técnica",
    desc: "Um especialista visita o local para avaliar o espaço e dimensionar o sistema ideal para você.",
  },
  {
    num: 3,
    icon: Wrench,
    title: "Projeto e Aprovação",
    desc: "Desenvolvemos o projeto elétrico e cuidamos de toda a burocracia com a concessionária.",
  },
  {
    num: 4,
    icon: Zap,
    title: "Instalação",
    desc: "Equipe técnica certificada realiza a instalação de forma segura e rápida, geralmente em 1 a 2 dias.",
  },
  {
    num: 5,
    icon: TrendingDown,
    title: "Economia Garantida",
    desc: "Sistema ativado! Você já começa a gerar energia e ver a conta de luz despencar no próximo mês.",
  },
];

export function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-800 uppercase mb-4">
            Um processo simples, transparente e sem burocracia
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-200 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative z-10 flex flex-col items-center text-center w-1/5 px-3">
                {/* Circle */}
                <div className="w-20 h-20 rounded-full bg-teal-800 flex flex-col items-center justify-center mb-5 shadow-lg">
                  <Icon className="w-7 h-7 text-[#F5A623]" />
                </div>
                <h3 className="text-base font-bold text-teal-800 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical steps */}
        <div className="flex flex-col gap-8 lg:hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal-800 flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-teal-800 mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
