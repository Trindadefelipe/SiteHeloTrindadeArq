export interface Projeto {
  id: string;
  nome: string;
  categoria: "casa" | "apartamento" | "comercial" | "corporativo";
  capa: string;
  destaque: string;
  galeria: string[];
  descricao?: string;
  localizacao?: string;
  metragem?: string;
  ano?: string;
}

export const projetos: Projeto[] = [
  {
    id: "casa-jr",
    nome: "Casa J|R",
    categoria: "casa",
    capa: "/images/projetos/placeholder.jpg",
    destaque: "/images/projetos/placeholder.jpg",
    galeria: [],
    descricao: "Projeto residencial com foco em integração dos ambientes e iluminação natural.",
    localizacao: "São Paulo, SP",
    metragem: "280m²",
    ano: "2025",
  },
  {
    id: "apto-ms",
    nome: "Apartamento M|S",
    categoria: "apartamento",
    capa: "/images/projetos/placeholder.jpg",
    destaque: "/images/projetos/placeholder.jpg",
    galeria: [],
    descricao: "Reforma completa com design contemporâneo e aproveitamento inteligente de espaço.",
    localizacao: "São Paulo, SP",
    metragem: "120m²",
    ano: "2025",
  },
  {
    id: "casa-lp",
    nome: "Casa L|P",
    categoria: "casa",
    capa: "/images/projetos/placeholder.jpg",
    destaque: "/images/projetos/placeholder.jpg",
    galeria: [],
    descricao: "Residência de campo com arquitetura integrada à paisagem.",
    localizacao: "Campinas, SP",
    metragem: "350m²",
    ano: "2024",
  },
  {
    id: "comercial-av",
    nome: "Espaço A|V",
    categoria: "comercial",
    capa: "/images/projetos/placeholder.jpg",
    destaque: "/images/projetos/placeholder.jpg",
    galeria: [],
    descricao: "Projeto comercial com identidade visual integrada ao espaço físico.",
    localizacao: "São Paulo, SP",
    metragem: "180m²",
    ano: "2024",
  },
  {
    id: "apto-rc",
    nome: "Apartamento R|C",
    categoria: "apartamento",
    capa: "/images/projetos/placeholder.jpg",
    destaque: "/images/projetos/placeholder.jpg",
    galeria: [],
    descricao: "Apartamento compacto com soluções criativas de marcenaria.",
    localizacao: "São Paulo, SP",
    metragem: "65m²",
    ano: "2024",
  },
  {
    id: "casa-fm",
    nome: "Casa F|M",
    categoria: "casa",
    capa: "/images/projetos/placeholder.jpg",
    destaque: "/images/projetos/placeholder.jpg",
    galeria: [],
    descricao: "Casa térrea com pé-direito duplo e materiais naturais.",
    localizacao: "Sorocaba, SP",
    metragem: "220m²",
    ano: "2023",
  },
];
