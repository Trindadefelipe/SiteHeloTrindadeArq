# Plano de Desenvolvimento — Site Helo Trindade Arquitetura

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
**Referência:** dudiduarte.com.br
**Estilo:** Minimalista, monocromático, fotografia como protagonista

---

## Fase 1 — Setup do Projeto

- [x] 1.1 Inicializar projeto Next.js com TypeScript
- [x] 1.2 Configurar Tailwind CSS
- [x] 1.3 Definir estrutura de pastas (components, sections, assets, data, lib)
- [x] 1.4 Configurar fontes (Google Fonts — Cormorant Garamond + Montserrat)
- [x] 1.5 Definir variáveis de design (cores, espaçamentos, breakpoints)
- [x] 1.6 Criar arquivo de dados placeholder (projetos, equipe, contato)
- [x] 1.7 Configurar ESLint e formatação

---

## Fase 2 — Layout Base

- [x] 2.1 Criar componente `Header`
  - Logo à esquerda
  - Menu de navegação à direita (Home, Sobre, Time Helo, Portfolio, Contato)
  - Fundo transparente que transiciona para sólido ao scroll
  - Menu hambúrguer no mobile
- [x] 2.2 Criar componente `Footer`
  - 3 colunas: Menu de navegação | Projetos recentes | Contato
  - Copyright na parte inferior
- [x] 2.3 Criar layout principal (`layout.tsx`) com Header + Footer
- [x] 2.4 Implementar scroll suave para navegação por âncoras

---

## Fase 3 — Página Inicial (Home)

### 3.1 Seção Hero — Carrossel
- [x] Carrossel fullscreen com 4-5 slides
- [x] Transição suave entre fotos (fade ou slide)
- [x] Indicadores de navegação (dots ou setas)
- [x] Autoplay com pausa ao hover
- [x] Overlay escuro sutil + texto opcional sobre as fotos

### 3.2 Seção Grid de Valores
- [x] Grid de 3 colunas responsivo
- [x] Cada card: imagem de fundo + título (Funcionalidade, Estética, Bem-Estar)
- [x] Efeito hover (zoom suave na imagem ou overlay)
- [x] Responsivo: empilha em coluna no mobile

### 3.3 Seção Projetos Recentes
- [x] Grid de 6 projetos (3x2 desktop, 2x3 tablet, 1x6 mobile)
- [x] Cada card: foto de capa + nome do projeto + categoria
- [x] Efeito hover (reveal do nome/categoria)
- [x] Botão "Ver todos os projetos" → link para página Portfolio

### 3.4 Seção Sobre (Resumo)
- [x] Layout 2 colunas: foto da Ana à esquerda, texto à direita
- [x] Breve bio + link "Saiba mais" → página Sobre completa
- [ ] Animação de entrada ao scroll (fade-in) — será feito na Fase 9

### 3.5 Seção Instagram
- [ ] Grid com últimos posts do Instagram (6-8 posts)
- [ ] Link para o perfil completo
- [ ] Alternativa: grid de imagens estáticas caso a API não esteja disponível

---

## Fase 4 — Página Portfolio

- [x] 4.1 Grid de todos os projetos com filtro por categoria (Casa, Apartamento, Comercial, etc.)
- [x] 4.2 Animação de filtragem (fade in/out dos cards)
- [x] 4.3 Layout responsivo (3 colunas → 2 → 1)

---

## Fase 5 — Página do Projeto Individual

- [x] 5.1 Foto hero de destaque (fullwidth)
- [x] 5.2 Título do projeto + dados (categoria, localização, metragem, ano)
- [x] 5.3 Descrição do projeto
- [x] 5.4 Galeria de fotos (grid ou lightbox)
- [x] 5.5 Navegação entre projetos (anterior / próximo)

---

## Fase 6 — Página Sobre

- [ ] 6.1 Seção "Quem é Ana" — foto + texto biográfico completo
- [ ] 6.2 Seção "Quem Somos" — texto institucional da empresa
- [ ] 6.3 Seção "Entrevistas, Eventos e Palestras" — cards com fotos/links
- [ ] 6.4 Layout elegante com bastante espaço em branco

---

## Fase 7 — Página Time Helo

- [ ] 7.1 Grid de membros da equipe
- [ ] 7.2 Cada card: foto + nome + cargo + bio curta
- [ ] 7.3 Hover suave (escala ou overlay com info)

---

## Fase 8 — Página/Seção Contato

- [ ] 8.1 Informações de contato (telefone, email, endereço)
- [ ] 8.2 Formulário de contato (nome, email, telefone, mensagem)
- [ ] 8.3 Integração com envio de email (API Route do Next.js + Nodemailer ou Resend)
- [ ] 8.4 Botão flutuante do WhatsApp
- [ ] 8.5 Mapa do Google Maps embed (opcional)

---

## Fase 9 — Animações e Micro-interações

- [ ] 9.1 Animações de entrada ao scroll (fade-in, slide-up) — Framer Motion ou CSS
- [ ] 9.2 Transições suaves entre páginas
- [ ] 9.3 Cursor customizado (opcional, referência dudiduarte)
- [ ] 9.4 Loading/skeleton states para imagens
- [ ] 9.5 Efeito parallax sutil no hero (opcional)

---

## Fase 10 — SEO e Performance

- [ ] 10.1 Metadata de cada página (title, description, Open Graph, Twitter Cards)
- [ ] 10.2 Sitemap.xml gerado automaticamente
- [ ] 10.3 robots.txt
- [ ] 10.4 Otimização de imagens com `next/image`
- [ ] 10.5 Lazy loading de seções e imagens
- [ ] 10.6 Lighthouse score > 90 em todas as categorias
- [ ] 10.7 Schema markup (LocalBusiness) para SEO local

---

## Fase 11 — Responsividade

- [ ] 11.1 Testar e ajustar em mobile (360px — 480px)
- [ ] 11.2 Testar e ajustar em tablet (768px — 1024px)
- [ ] 11.3 Testar e ajustar em desktop grande (1440px+)
- [ ] 11.4 Menu hambúrguer funcional no mobile
- [ ] 11.5 Imagens e grids adaptados para cada breakpoint

---

## Fase 12 — Deploy e Lançamento

- [ ] 12.1 Configurar repositório GitHub (já existe)
- [ ] 12.2 Deploy na Vercel (integração automática com GitHub)
- [ ] 12.3 Configurar domínio customizado (se a cliente tiver)
- [ ] 12.4 Configurar HTTPS (automático na Vercel)
- [ ] 12.5 Testar site em produção
- [ ] 12.6 Configurar Google Analytics / Google Search Console
- [ ] 12.7 Entrega final ao cliente

---

## Ordem de Execução Recomendada

```
Fase 1 (Setup) → Fase 2 (Layout) → Fase 3 (Home) → Fase 4-5 (Portfolio)
→ Fase 6-7 (Sobre/Time) → Fase 8 (Contato) → Fase 9 (Animações)
→ Fase 10 (SEO) → Fase 11 (Responsividade) → Fase 12 (Deploy)
```

> **Nota:** Enquanto aguardamos as fotos e textos reais da cliente, desenvolveremos com imagens e textos placeholder. A substituição pelo conteúdo real será feita antes do deploy final.

---

*Última atualização: 27/03/2026*
