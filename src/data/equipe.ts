export interface MembroEquipe {
  nome: string;
  cargo: string;
  foto: string;
  bio?: string;
}

export const equipe: MembroEquipe[] = [
  {
    nome: "Ana Trindade",
    cargo: "Arquiteta e Urbanista",
    foto: "/images/equipe/placeholder.jpg",
    bio: "Fundadora do escritório, com mais de 10 anos de experiência em projetos residenciais e comerciais.",
  },
  {
    nome: "Membro da Equipe",
    cargo: "Arquiteta",
    foto: "/images/equipe/placeholder.jpg",
    bio: "Especialista em design de interiores e projetos executivos.",
  },
  {
    nome: "Membro da Equipe",
    cargo: "Designer de Interiores",
    foto: "/images/equipe/placeholder.jpg",
    bio: "Responsável pela curadoria de materiais e mobiliário.",
  },
];
