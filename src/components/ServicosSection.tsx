import { Zap, Settings2, Activity, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Projeto & Engenharia",
    desc: "Diagnóstico completo do seu consumo e projeto personalizado com os melhores equipamentos do mercado.",
    feature: "+ Alta Eficiência",
  },
  {
    icon: Settings2,
    title: "Instalação Certificada",
    desc: "Equipe técnica homologada pela ANEEL. Instalação rápida, limpa e segura para sua total tranquilidade.",
    feature: "+ Garantia Total",
  },
  {
    icon: Activity,
    title: "Monitoramento 24h",
    desc: "Acompanhe sua geração em tempo real pelo aplicativo e conte com suporte técnico sempre que precisar.",
    feature: "+ Suporte Contínuo",
  },
  {
    icon: ShieldCheck,
    title: "Pós-venda & Manutenção",
    desc: "Assistência técnica preventiva e corretiva para garantir o máximo desempenho do seu sistema ao longo dos anos.",
    feature: "+ Longa Durabilidade",
  },
];

export function ServicosSection() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#ea592d] font-bold tracking-widest uppercase text-xs mb-3 block">
            O Que Fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 uppercase mb-4">
            Soluções completas em energia solar
          </h2>
          <p className="text-gray-500">
            Do projeto à manutenção, cuidamos de tudo para que você aproveite ao máximo os benefícios da energia solar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center px-6 pt-8 pb-6 relative overflow-hidden"
              >
                {/* Top accent line */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#F5A623] rounded-b-full" />

                {/* Icon circle */}
                <div className="w-20 h-20 rounded-full bg-[#ea592d]/10 flex items-center justify-center mb-5 group-hover:bg-[#ea592d]/20 transition-colors duration-300">
                  <Icon className="w-9 h-9 text-[#ea592d]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-teal-800 mb-3 leading-tight">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {s.desc}
                </p>

                {/* Feature link */}
                <a
                  href="#contato"
                  className="text-[#ea592d] font-bold text-sm hover:underline mb-4"
                >
                  {s.feature}
                </a>

                {/* Bottom bar */}
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-teal-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
