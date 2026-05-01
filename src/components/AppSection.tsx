import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Valor total economizado",
  "Acompanhamento do retorno do investimento",
  "Histórico de Geração",
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-64">
      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl z-10" />
        {/* Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* App header */}
          <div className="bg-teal-800 px-4 pt-8 pb-4">
            <p className="text-white text-xs font-bold">08:00</p>
            <p className="text-[#F5A623] font-extrabold text-base mt-1">≡ Frenergy</p>
          </div>
          {/* Card */}
          <div className="bg-gray-50 px-4 py-3">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Economizado</p>
            <p className="text-teal-800 font-extrabold text-lg">R$ 4.320,00</p>
            {/* Fake chart bars */}
            <div className="flex items-end gap-1 mt-3 mb-3 h-12">
              {[40, 55, 48, 70, 62, 75, 58].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#F5A623] rounded-t opacity-80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          {/* Month rows */}
          <div className="px-4 py-2 space-y-2">
            {[
              { month: "ABRIL", val: "R$ 418,15" },
              { month: "MARÇO", val: "R$ 482,74" },
              { month: "FEVEREIRO", val: "R$ 420,05" },
              { month: "JANEIRO", val: "R$ 813,25" },
            ].map((r) => (
              <div key={r.month} className="flex justify-between items-center border-b border-gray-100 pb-1">
                <p className="text-[10px] font-bold text-gray-500">{r.month}</p>
                <p className="text-[10px] text-gray-400">Economizado: <span className="font-semibold text-teal-700">{r.val}</span></p>
              </div>
            ))}
          </div>
          {/* Bottom bar */}
          <div className="bg-teal-800 flex justify-around py-2 mt-1">
            <span className="text-white text-[10px]">⌂</span>
            <span className="text-white text-[10px]">⚡</span>
          </div>
        </div>
      </div>

      {/* Floating card */}
      <div className="absolute -bottom-4 -right-6 bg-gray-900 text-white rounded-xl px-4 py-3 shadow-xl w-44">
        <p className="text-[10px] text-gray-400 mb-1">Economia Gerada</p>
        <p className="text-[#F5A623] font-extrabold text-lg">R$ 1.200,35</p>
        <p className="text-[10px] text-teal-400 mt-1 cursor-pointer">Ver histórico →</p>
      </div>
    </div>
  );
}

export function AppSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Phone mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
              Acompanhe sua geração de energia em tempo real
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Após a instalação do seu sistema solar Frenergy, você pode acompanhar a produção de
              energia, o valor economizado e o desempenho dos painéis de forma simples e transparente.
            </p>
            <ul className="space-y-4">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ea592d] flex-shrink-0" />
                  <span className="font-bold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
