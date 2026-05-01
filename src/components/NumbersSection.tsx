export function NumbersSection() {
  return (
    <>
      {/* Top inverted arrow divider */}
      <div
        className="relative h-20 z-10"
        style={{
          backgroundImage: "url('/img/global/section-arrow-down-inverted-white.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          marginBottom: "-1px",
        }}
      />

      <section
        className="bg-teal-600 relative flex flex-col items-center justify-center py-48 bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/img/components/numbers/fundo-numeros.jpg')" }}
      >
        <div className="container mx-auto px-6">
          <img
            src="/img/global/grupo-bc-logo-solo-branca.svg"
            alt="Grupo BC Energia"
            className="mx-auto mb-8 h-16"
          />
          <h3 className="text-4xl font-bold text-white uppercase text-center max-w-4xl mx-auto leading-snug">
            Somos a maior{" "}
            <span className="text-amber-400">comercializadora de energia</span>{" "}
            do Centro-Oeste e uma das principais independentes do país.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div>
              <h5 className="text-5xl font-bold text-amber-400">+ de 5 mil</h5>
              <p className="text-white text-lg mt-2">
                clientes recebendo nossas soluções em economia
              </p>
            </div>
            <div>
              <h5 className="text-5xl font-bold text-amber-400">+ de R$400M</h5>
              <p className="text-white text-lg mt-2">
                de economia gerada aos nossos clientes
              </p>
            </div>
            <div>
              <h5 className="text-5xl font-bold text-amber-400">+ de 15 mil</h5>
              <p className="text-white text-lg mt-2">
                toneladas de CO2 evitados na atmosfera
              </p>
            </div>
          </div>

          <a
            href="/produtos"
            className="inline-block mt-16 border border-white text-white font-bold uppercase px-8 py-3 hover:bg-white hover:text-teal-900 transition-colors"
          >
            QUERO ECONOMIZAR
          </a>
        </div>
      </section>

      {/* Bottom inverted arrow divider */}
      <div
        className="relative h-20 z-10"
        style={{
          backgroundImage: "url('/img/global/section-arrow-down-inverted-white.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          marginTop: "-1px",
        }}
      />
    </>
  );
}
