export function Footer() {
  return (
    <>
      <footer className="bg-zinc-900 px-8 py-24 relative text-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center gap-6">
            <img
              src="/frenergy-logo-white.svg"
              alt="Frenergy Soluções"
              className="w-48"
            />
            <div>
              <h2 className="font-bold text-lg text-white mb-2">Endereço:</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Al. Ricardo Paranhos, 52 — Qd. 224, Lt. 3E, Apto 101A,
                Setor Marista, Goiânia/GO
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="border-t border-zinc-700 mt-12 pt-8 text-center">
            <h5 className="text-2xl font-bold text-white mb-6">SIGA NOSSAS REDES</h5>
            <div className="flex justify-center gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/img/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/img/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/img/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/img/icons/youtube.svg" alt="YouTube" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright bar */}
      <div className="bg-teal-800 py-4 text-center">
        <p className="text-white text-sm font-bold uppercase">
          © FRENERGY SOLUÇÕES - 2025 | TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </>
  );
}
