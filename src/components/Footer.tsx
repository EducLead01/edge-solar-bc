export function Footer() {
  return (
    <footer className="py-6 text-center" style={{ backgroundColor: "#0A0E1A" }}>
      <p className="text-white/50 text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} EDGE Engenharia — Todos os direitos reservados
      </p>
    </footer>
  );
}
