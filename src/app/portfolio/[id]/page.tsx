import Link from "next/link";
import { projetos } from "@/data/projetos";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projetos.map((projeto) => ({
    id: projeto.id,
  }));
}

function categoriaLabel(cat: string): string {
  const map: Record<string, string> = {
    casa: "Casa",
    apartamento: "Apartamento",
    comercial: "Comercial",
    corporativo: "Corporativo",
  };
  return map[cat] || cat;
}

export default async function ProjetoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projetoIndex = projetos.findIndex((p) => p.id === id);
  const projeto = projetos[projetoIndex];

  if (!projeto) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-foreground mb-4">
          Projeto n&atilde;o encontrado
        </h1>
        <p className="text-muted font-[family-name:var(--font-body)] text-sm mb-8">
          O projeto que voc&ecirc; procura n&atilde;o existe ou foi removido.
        </p>
        <Link
          href="/portfolio"
          className="font-[family-name:var(--font-body)] text-sm tracking-widest uppercase text-foreground border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors duration-300"
        >
          Voltar ao Portfolio
        </Link>
      </main>
    );
  }

  const projetoAnterior = projetoIndex > 0 ? projetos[projetoIndex - 1] : null;
  const proximoProjeto =
    projetoIndex < projetos.length - 1 ? projetos[projetoIndex + 1] : null;

  const galeriaPlaceholders = [0, 1, 2, 3, 4, 5];

  return (
    <main className="min-h-screen">
      {/* Hero placeholder */}
      <div className="w-full h-[60vh] bg-gray-400" />

      {/* Conteudo do projeto */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        {/* Breadcrumb */}
        <div className="mb-12">
          <Link
            href="/portfolio"
            className="font-[family-name:var(--font-body)] text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-300"
          >
            &larr; Portfolio
          </Link>
        </div>

        {/* Titulo e categoria */}
        <div className="mb-12">
          <p className="text-muted font-[family-name:var(--font-body)] text-xs tracking-widest uppercase mb-3">
            {categoriaLabel(projeto.categoria)}
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            {projeto.nome}
          </h1>
        </div>

        {/* Grid de informacoes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-16 border-b border-border">
          {projeto.localizacao && (
            <div>
              <p className="font-[family-name:var(--font-body)] text-xs tracking-widest uppercase text-muted mb-2">
                Localiza&ccedil;&atilde;o
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm text-foreground">
                {projeto.localizacao}
              </p>
            </div>
          )}
          {projeto.metragem && (
            <div>
              <p className="font-[family-name:var(--font-body)] text-xs tracking-widest uppercase text-muted mb-2">
                Metragem
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm text-foreground">
                {projeto.metragem}
              </p>
            </div>
          )}
          {projeto.ano && (
            <div>
              <p className="font-[family-name:var(--font-body)] text-xs tracking-widest uppercase text-muted mb-2">
                Ano
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm text-foreground">
                {projeto.ano}
              </p>
            </div>
          )}
          <div>
            <p className="font-[family-name:var(--font-body)] text-xs tracking-widest uppercase text-muted mb-2">
              Categoria
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-foreground">
              {categoriaLabel(projeto.categoria)}
            </p>
          </div>
        </div>

        {/* Descricao */}
        {projeto.descricao && (
          <div className="max-w-2xl mb-24">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-foreground mb-6">
              Sobre o projeto
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm md:text-base text-muted leading-relaxed">
              {projeto.descricao}
            </p>
          </div>
        )}

        {/* Galeria placeholder */}
        <div className="mb-24">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-foreground mb-8">
            Galeria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galeriaPlaceholders.map((i) => (
              <div
                key={i}
                className={`aspect-[4/3] ${
                  i % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navegacao entre projetos */}
        <nav className="border-t border-border pt-12 flex justify-between items-center">
          <div>
            {projetoAnterior ? (
              <Link
                href={`/portfolio/${projetoAnterior.id}`}
                className="group inline-flex flex-col"
              >
                <span className="font-[family-name:var(--font-body)] text-xs tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                  &larr; Projeto Anterior
                </span>
                <span className="font-[family-name:var(--font-heading)] text-lg text-foreground mt-1">
                  {projetoAnterior.nome}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
          <div className="text-right">
            {proximoProjeto ? (
              <Link
                href={`/portfolio/${proximoProjeto.id}`}
                className="group inline-flex flex-col items-end"
              >
                <span className="font-[family-name:var(--font-body)] text-xs tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                  Pr&oacute;ximo Projeto &rarr;
                </span>
                <span className="font-[family-name:var(--font-heading)] text-lg text-foreground mt-1">
                  {proximoProjeto.nome}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>
      </section>
    </main>
  );
}
