const valores = [
  {
    titulo: "Funcionalidade",
    descricao:
      "Cada espaço projetado com propósito. Priorizamos soluções inteligentes que otimizam o dia a dia e tornam a rotina mais fluida.",
    bg: "bg-gray-200",
  },
  {
    titulo: "Estética",
    descricao:
      "Acreditamos que beleza e simplicidade caminham juntas. Linhas limpas, materiais nobres e composições que inspiram.",
    bg: "bg-gray-300",
  },
  {
    titulo: "Bem-Estar",
    descricao:
      "Projetamos ambientes que acolhem. Luz natural, ventilação e conforto térmico pensados para promover qualidade de vida.",
    bg: "bg-gray-200",
  },
];

export default function ValoresGrid() {
  return (
    <section className="px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Titulo da secao */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wide md:text-4xl lg:text-5xl">
            Nossa Essência
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-accent" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {valores.map((valor) => (
            <div
              key={valor.titulo}
              className="group relative overflow-hidden"
            >
              {/* Imagem placeholder */}
              <div
                className={`${valor.bg} aspect-[4/5] w-full transition-transform duration-700 ease-out group-hover:scale-105`}
              />

              {/* Conteudo */}
              <div className="mt-6">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl tracking-wide md:text-3xl">
                  {valor.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted font-[family-name:var(--font-body)]">
                  {valor.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
