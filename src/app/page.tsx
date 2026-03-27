import HeroCarousel from "@/sections/HeroCarousel";
import ValoresGrid from "@/sections/ValoresGrid";
import ProjetosRecentes from "@/sections/ProjetosRecentes";
import SobreResumo from "@/sections/SobreResumo";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <ValoresGrid />
      <ProjetosRecentes />
      <SobreResumo />

      {/* Contato placeholder — sera implementado na Fase 8 */}
      <section id="contato" className="min-h-[50vh] flex items-center justify-center px-6 bg-gray-50">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wide mb-4">
            Contato
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Conteúdo da seção Contato será adicionado na Fase 8.
          </p>
        </div>
      </section>
    </main>
  );
}
