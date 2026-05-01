export function BCCastSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-teal-800 mb-2">
          Nossos Projetos
        </p>
        <h3 className="text-4xl font-bold text-teal-800 mt-2 mb-12 uppercase">
          Insights e vídeos de alguns de nossos projetos
        </h3>

        {/* Player Panda Video — substitua o src pelo link do seu vídeo */}
        <div className="max-w-4xl mx-auto relative aspect-video rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://player.pandavideo.com.br/embed/?v=SEU_VIDEO_ID"
            title="Projetos Frenergy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
