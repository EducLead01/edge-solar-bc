export function AnimacaoSolar() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Texto */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-[#ea592d] font-bold tracking-wider uppercase text-sm mb-2 block">
              Como Funciona
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6 leading-tight">
              Energia solar gerando economia para você
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Os painéis solares captam a energia do sol e transformam em energia elétrica para sua casa ou empresa — reduzindo até 95% da sua conta de luz.
            </p>
            <a
              href="#contato"
              className="inline-block bg-[#ea592d] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Quero economizar
            </a>
          </div>

          {/* Vídeo animado */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <video
              src="/videos/solar-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
