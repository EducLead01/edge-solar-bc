import { TrendingUp, Building2, BarChart2, CheckCircle } from "lucide-react";

const problems = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Conta Alta Todo Mês",
    desc: "Tarifas que não param de subir, pesando no seu orçamento familiar ou engolindo o lucro da sua empresa.",
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Dependência da Concessionária",
    desc: "Ficar à mercê de apagões, bandeiras tarifárias vermelhas e taxas abusivas de distribuição.",
  },
  {
    icon: <BarChart2 className="w-7 h-7" />,
    title: "Inflação Energética",
    desc: "O custo da energia no Brasil sobe muito acima da inflação anual. Seu dinheiro perde valor a cada mês.",
  },
];

export function ProblemaSection() {
  return (
    <section id="problema" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2833] mb-4">
            Você ainda está pagando caro demais na conta de luz?
          </h2>
          <p className="text-gray-600 text-lg">
            Todos os anos os brasileiros sofrem com os mesmos problemas energéticos. Até quando você vai aceitar isso?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-[#F8F9F9] p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1C2833] mb-3">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-[#27AE60] flex items-center justify-center gap-2">
            <CheckCircle className="w-6 h-6" />
            Existe um caminho definitivo para acabar com isso.
          </p>
        </div>
      </div>
    </section>
  );
}
