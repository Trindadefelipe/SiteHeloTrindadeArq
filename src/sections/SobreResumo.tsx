import Link from "next/link";

export default function SobreResumo() {
  return (
    <section id="sobre" className="px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Foto placeholder */}
          <div className="aspect-[3/4] w-full bg-gray-300" />

          {/* Texto */}
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wide md:text-4xl lg:text-5xl">
              Sobre
            </h2>
            <div className="mt-4 h-px w-12 bg-accent" />

            <p className="mt-8 text-sm leading-relaxed text-muted font-[family-name:var(--font-body)]">
              O escritório Helo Trindade Arquitetura nasceu da convicção de que bons
              projetos transformam a maneira como vivemos. Com uma abordagem que
              equilibra funcionalidade, estética e bem-estar, cada projeto é
              desenvolvido de forma personalizada, respeitando as necessidades e a
              identidade de cada cliente.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted font-[family-name:var(--font-body)]">
              Acreditamos que a arquitetura vai além da construção de espaços
              — ela cria experiências, memórias e conexões. Nosso processo é
              colaborativo e transparente, do conceito inicial à entrega final.
            </p>

            <Link
              href="/sobre"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground transition-colors duration-300 hover:text-muted font-[family-name:var(--font-body)]"
            >
              Saiba mais
              <span className="text-base">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
