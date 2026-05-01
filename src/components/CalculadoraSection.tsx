"use client";

import { useState } from "react";
import { ArrowRight, Lightbulb } from "lucide-react";

function fmt(n: number) {
  return Math.round(n).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function CalculadoraSection() {
  const [bill, setBill] = useState(400);

  const savingsRate = 0.9;
  const monthly = bill * savingsRate;
  const annual = monthly * 12;
  const pct = ((bill - 100) / (5000 - 100)) * 100;
  const sliderBg = `linear-gradient(to right, #FF5144 ${pct}%, #e5e7eb ${pct}%)`;

  return (
    <section id="calculadora" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl text-center">

        {/* Header */}
        <p className="text-sm uppercase tracking-widest text-teal-800 mb-2">Simulação</p>
        <h2 className="text-4xl font-bold text-teal-800 uppercase mb-4">
          Calcule quanto você vai economizar
        </h2>
        <p className="text-gray-900 mb-12">
          Deslize a barra ou digite o valor médio da sua conta de luz e veja sua economia em tempo real.
        </p>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

          {/* Slider label */}
          <p className="text-base font-semibold text-gray-700 mb-1">
            Valor da sua conta de luz mensal
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Deslize pela barra ou digite o valor desejado
          </p>

          {/* Value input */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="text-3xl font-bold text-gray-400">R$</span>
            <input
              id="fr-calc-input"
              type="number"
              min={100}
              max={5000}
              step={10}
              value={bill}
              onChange={(e) => {
                const v = Math.max(100, Math.min(5000, Number(e.target.value) || 100));
                setBill(v);
              }}
              className="w-40 text-5xl font-extrabold text-teal-800 border-b-2 border-[#F5A623] outline-none bg-transparent text-center"
            />
          </div>

          {/* Slider + floating bulb */}
          <div className="relative pt-14 mb-1">
            {/* Floating lightbulb */}
            <div
              className="absolute top-0 pointer-events-none flex flex-col items-center"
              style={{
                left: `clamp(1.2rem, calc(${pct}% - 1.2rem), calc(100% - 1.2rem))`,
              }}
            >
              <div className="bg-[#FF5144] rounded-full p-2.5 shadow-lg" style={{ boxShadow: "0 4px 16px rgba(255,81,68,0.45)" }}>
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              {/* Triangle pointer */}
              <div className="w-2.5 h-2.5 bg-[#FF5144] rotate-45 -mt-1.5" />
            </div>

            <input
              type="range"
              min={100}
              max={5000}
              step={10}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="fr-slider w-full h-3 rounded-full appearance-none cursor-pointer"
              style={{ background: sliderBg }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mb-10">
            <span>R$ 100</span>
            <span>R$ 5.000</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-8" />

          {/* Result */}
          <p className="text-lg text-teal-800 mb-2">
            No primeiro ano, você vai economizar até
          </p>
          <p className="text-5xl font-extrabold text-teal-800 mb-2">
            {fmt(annual)}
          </p>
          {/* Disclaimer */}
          <p className="text-xs text-gray-400 mb-8">
            Simulação baseada em 90% de economia solar. O valor real pode sofrer alterações conforme o projeto.
          </p>

          {/* CTA */}
          <a
            href="#contato"
            className="inline-flex flex-col items-center justify-center gap-1 w-full bg-teal-800 hover:bg-teal-700 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-md"
          >
            <span className="flex items-center gap-2">
              Solicitar orçamento grátis <ArrowRight className="w-5 h-5" />
            </span>
            <span className="text-xs font-normal text-teal-200">
              Economia mensal estimada: <strong className="text-white">{fmt(monthly)}</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
