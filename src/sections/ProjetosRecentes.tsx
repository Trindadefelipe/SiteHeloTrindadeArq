import Link from "next/link";
import Image from "next/image";
import { projetos } from "@/data/projetos";

const categoriaLabel: Record<string, string> = {
  casa: "Residencial",
  apartamento: "Apartamento",
  comercial: "Comercial",
  interiores: "Interiores",
};

export default function ProjetosRecentes() {
  return (
    <section className="bg-gray-50 px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Titulo */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wide md:text-4xl lg:text-5xl">
            Projetos
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-accent" />
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.slice(0, 6).map((projeto) => (
            <Link
              key={projeto.id}
              href={`/portfolio/${projeto.id}`}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer block"
            >
              <Image
                src={projeto.capa}
                alt={projeto.nome}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/50" />

              {/* Conteudo - aparece no hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] mb-2">
                  {categoriaLabel[projeto.categoria] || projeto.categoria}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl tracking-wide md:text-3xl">
                  {projeto.nome}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Botao ver portfolio */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-block border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-colors duration-300 hover:bg-foreground hover:text-white font-[family-name:var(--font-body)]"
          >
            Ver Portfolio Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
