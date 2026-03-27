"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    bg: "bg-gray-800",
    titulo: "Helo Trindade",
    subtitulo: "Arquitetura",
  },
  {
    bg: "bg-gray-700",
    titulo: "Funcionalidade",
    subtitulo: "Espaços que fazem sentido",
  },
  {
    bg: "bg-gray-600",
    titulo: "Estética",
    subtitulo: "Beleza em cada detalhe",
  },
  {
    bg: "bg-gray-500",
    titulo: "Bem-Estar",
    subtitulo: "Ambientes que acolhem",
  },
  {
    bg: "bg-gray-900",
    titulo: "Projetos",
    subtitulo: "Transformando ideias em espaços",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Fundo placeholder */}
          <div className={`absolute inset-0 ${slide.bg}`} />

          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Conteudo */}
          <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
            <div>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl tracking-wide md:text-7xl lg:text-8xl mb-4">
                {slide.titulo}
              </h1>
              <p className="text-sm tracking-[0.3em] uppercase font-light md:text-base">
                {slide.subtitulo}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Setas de navegacao */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-300 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Proximo slide"
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-300 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicadores (dots) */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Ir para slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              index === current
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
