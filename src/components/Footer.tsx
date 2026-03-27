import Link from "next/link";
import { contato } from "@/data/contato";
import { projetos } from "@/data/projetos";

export default function Footer() {
  const projetosRecentes = projetos.slice(0, 4);

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Coluna 1 — Navegação */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl tracking-wider mb-6">
              HELO TRINDADE
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-white/70 hover:text-white transition-colors tracking-wider uppercase"
              >
                Home
              </Link>
              <Link
                href="/#sobre"
                className="text-sm text-white/70 hover:text-white transition-colors tracking-wider uppercase"
              >
                Sobre
              </Link>
              <Link
                href="/time"
                className="text-sm text-white/70 hover:text-white transition-colors tracking-wider uppercase"
              >
                Time Helo
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-white/70 hover:text-white transition-colors tracking-wider uppercase"
              >
                Portfolio
              </Link>
              <Link
                href="/#contato"
                className="text-sm text-white/70 hover:text-white transition-colors tracking-wider uppercase"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Coluna 2 — Projetos Recentes */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl tracking-wider mb-6">
              Projetos Recentes
            </h4>
            <nav className="flex flex-col gap-3">
              {projetosRecentes.map((projeto) => (
                <Link
                  key={projeto.id}
                  href={`/portfolio/${projeto.id}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {projeto.nome}
                </Link>
              ))}
              <Link
                href="/portfolio"
                className="text-sm text-white/50 hover:text-white transition-colors mt-2 tracking-wider uppercase"
              >
                Ver todos →
              </Link>
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl tracking-wider mb-6">
              Contato
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <p>{contato.endereco}</p>
              <a
                href={`tel:${contato.telefone}`}
                className="hover:text-white transition-colors"
              >
                {contato.telefone}
              </a>
              <a
                href={`mailto:${contato.email}`}
                className="hover:text-white transition-colors"
              >
                {contato.email}
              </a>
              <a
                href={contato.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {contato.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <p className="text-xs text-white/40 text-center tracking-wider">
            Helo Trindade Arquitetura © {new Date().getFullYear()} — Todos os
            Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
