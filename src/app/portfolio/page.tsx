"use client";

import { useState } from "react";
import Link from "next/link";
import { projetos, type Projeto } from "@/data/projetos";

const categorias = [
  { label: "Todos", value: "todos" },
  { label: "Casa", value: "casa" },
  { label: "Apartamento", value: "apartamento" },
  { label: "Comercial", value: "comercial" },
  { label: "Corporativo", value: "corporativo" },
] as const;

function categoriaLabel(cat: Projeto["categoria"]): string {
  const map: Record<Projeto["categoria"], string> = {
    casa: "Casa",
    apartamento: "Apartamento",
    comercial: "Comercial",
    corporativo: "Corporativo",
  };
  return map[cat];
}

export default function PortfolioPage() {
  const [filtroAtivo, setFiltroAtivo] = useState<string>("todos");

  const projetosFiltrados =
    filtroAtivo === "todos"
      ? projetos
      : projetos.filter((p) => p.categoria === filtroAtivo);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="pt-[140px] pb-12 px-6 md:px-12 lg:px-24">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
          Portfolio
        </h1>
        <p className="mt-4 text-muted font-[family-name:var(--font-body)] text-sm md:text-base max-w-xl tracking-wide">
          Uma sele&ccedil;&atilde;o de projetos que refletem nosso compromisso com design, funcionalidade e bem-estar.
        </p>
      </section>

      {/* Filtros */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="flex flex-wrap gap-6 md:gap-8">
          {categorias.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFiltroAtivo(cat.value)}
              className={`
                font-[family-name:var(--font-body)] text-sm tracking-widest uppercase
                pb-1 transition-all duration-300 cursor-pointer
                ${
                  filtroAtivo === cat.value
                    ? "text-foreground border-b border-foreground"
                    : "text-muted hover:text-foreground border-b border-transparent"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projetosFiltrados.map((projeto) => (
            <Link
              key={projeto.id}
              href={`/portfolio/${projeto.id}`}
              className="group block transition-opacity duration-500 ease-in-out"
            >
              {/* Card */}
              <div className="relative aspect-square bg-gray-300 overflow-hidden">
                {/* Overlay no hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl text-white tracking-wide">
                      {projeto.nome}
                    </h3>
                    <p className="text-white/70 text-xs tracking-widest uppercase mt-1 font-[family-name:var(--font-body)]">
                      {categoriaLabel(projeto.categoria)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info abaixo do card */}
              <div className="mt-4">
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-foreground tracking-wide">
                  {projeto.nome}
                </h3>
                <p className="text-muted text-xs tracking-widest uppercase mt-1 font-[family-name:var(--font-body)]">
                  {categoriaLabel(projeto.categoria)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mensagem se nenhum projeto encontrado */}
        {projetosFiltrados.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted font-[family-name:var(--font-body)] text-sm tracking-wide">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
