export interface Projeto {
  id: string;
  nome: string;
  categoria: "casa" | "apartamento" | "comercial" | "interiores";
  capa: string;
  destaque: string;
  galeria: string[];
  descricao?: string;
  localizacao?: string;
  metragem?: string;
  ano?: string;
}

function gerarGaleria(pasta: string, quantidade: number): string[] {
  return Array.from({ length: quantidade }, (_, i) => `/images/projetos/${pasta}/${i + 1}.jpg`);
}

export const projetos: Projeto[] = [
  {
    id: "loja-vera-guirro",
    nome: "Loja Vera Guirro",
    categoria: "comercial",
    capa: "/images/projetos/loja-vera-guirro/1.jpg",
    destaque: "/images/projetos/loja-vera-guirro/2.jpg",
    galeria: gerarGaleria("loja-vera-guirro", 11),
    descricao: "Projeto comercial para loja com design sofisticado e identidade visual integrada ao espaço.",
  },
  {
    id: "clinica-jr",
    nome: "Clínica J&R",
    categoria: "comercial",
    capa: "/images/projetos/clinica-jr/1.jpg",
    destaque: "/images/projetos/clinica-jr/2.jpg",
    galeria: gerarGaleria("clinica-jr", 20),
    descricao: "Clínica ginecológica com ambiente acolhedor e funcional, priorizando o conforto dos pacientes.",
  },
  {
    id: "clinica-pm",
    nome: "Clínica PM",
    categoria: "comercial",
    capa: "/images/projetos/clinica-pm/1.jpg",
    destaque: "/images/projetos/clinica-pm/2.jpg",
    galeria: gerarGaleria("clinica-pm", 26),
    descricao: "Projeto de clínica com foco em funcionalidade e estética contemporânea.",
  },
  {
    id: "escritorio-ht",
    nome: "Escritório HT",
    categoria: "comercial",
    capa: "/images/projetos/escritorio-ht/1.jpg",
    destaque: "/images/projetos/escritorio-ht/2.jpg",
    galeria: gerarGaleria("escritorio-ht", 9),
    descricao: "Escritório da Helo Trindade Arquitetura, projetado para refletir a identidade do próprio escritório.",
  },
  {
    id: "gt-engenharia",
    nome: "GT Engenharia",
    categoria: "comercial",
    capa: "/images/projetos/gt-engenharia/1.jpg",
    destaque: "/images/projetos/gt-engenharia/2.jpg",
    galeria: gerarGaleria("gt-engenharia", 13),
    descricao: "Projeto corporativo para escritório de engenharia com design profissional e moderno.",
  },
  {
    id: "epic",
    nome: "Projeto EPIC",
    categoria: "interiores",
    capa: "/images/projetos/epic/1.jpg",
    destaque: "/images/projetos/epic/2.jpg",
    galeria: gerarGaleria("epic", 9),
    descricao: "Projeto de interiores para apartamento no edifício EPIC, com design contemporâneo e elegante.",
  },
  {
    id: "la-torre",
    nome: "Projeto La Torre",
    categoria: "interiores",
    capa: "/images/projetos/la-torre/1.jpg",
    destaque: "/images/projetos/la-torre/2.jpg",
    galeria: gerarGaleria("la-torre", 30),
    descricao: "Projeto de interiores para apartamento no La Torre, com ambientes integrados e acabamentos refinados.",
  },
];
