# Capítulo Templários do Oriente nº 722 — Website Oficial

> **Ordem DeMolay • Itabira - MG**  
> Formando líderes éticos e transformando a sociedade com honra, retidão e filantropia desde 2007.

---

## 🏛️ Sobre o Projeto

Este projeto é a aplicação web oficial do **Capítulo Templários do Oriente nº 722**, com sede em Itabira, Minas Gerais. Ele tem como objetivo registrar e divulgar a história do capítulo, homenagear seus líderes históricos, apresentar a estrutura de oficiais e os princípios da Ordem DeMolay para a comunidade e jovens interessados em ingressar.

---

## ✨ Funcionalidades Principais

- **Página Inicial Institucional**: Apresentação da Ordem DeMolay, história do Capítulo 722 em Itabira/MG, as Sete Virtudes Cardeais interativas e métricas capitulares.
- **Galeria de Mestres Conselheiros (MCs)**: Histórico de todas as gestões semestrais com cards 3D, retratos oficiais, ferramenta de busca em tempo real (por líder ou membro iniciado) e ordenação cronológica.
- **Galeria de Presidentes do Conselho Consultivo (PCCs)**: Homenagem aos Mestres Maçons orientadores e conselheiros do capítulo.
- **Detalhes da Gestão (Iniciados)**: Página dinâmica com busca interna de membros iniciados por gestão, resolução robusta por URL e compartilhamento direto.
- **Estrutura de Cargos e Oficiais**: Descrição litúrgica, responsabilidades e simbolismo de cada cargo capitular (Diretoria Executiva, Ritualística e Conselho).
- **Canal de Contato & Iniciação**: Formulário interativo com validação para jovens (12 a 21 anos) manifestarem interesse em ser um DeMolay, além de FAQ com dúvidas frequentes.
- **Página 404 Estilizada**: Rota amigável para links inválidos ou não encontrados.

---

## 🛠️ Tecnologias e Boas Práticas

- **React 18** com Vite 6 (Fast Refresh & bundling otimizado)
- **React Router 7** com navegação SPA, rotas aninhadas e `ScrollToTop`
- **React Icons** (FontAwesome 5)
- **Padrões de Engenharia**:
  - Separação de responsabilidades (camada de dados em `src/data/` desacoplada dos componentes visuais)
  - Layout moderno com **Sticky Footer** via Flexbox (sem sobreposição de rodapé)
  - Design system responsivo com variáveis CSS globais (`index.css`)
  - Acessibilidade web (tags semânticas HTML5, `aria-*`, navegação por teclado)
  - Fallback elegante para imagens e retratos não carregados

---

## 📁 Estrutura de Diretórios

```
cti-722-website/
├── public/                # Favicon e ativos estáticos
├── src/
│   ├── assets/            # Imagens, brasões e retratos oficiais
│   ├── components/        # Componentes reutilizáveis (Header, Footer, Card, FunctionsCard, ScrollToTop)
│   ├── data/              # Base de dados estruturada (mcsData, pccsData, officersData, chapterData)
│   ├── pages/             # Páginas (Home, McGallery, PCCGallery, Functions, PeriodDetailsPage, Contact, NotFound)
│   ├── styles/            # Estilização modular e design system
│   ├── App.jsx            # Configuração de rotas
│   └── main.jsx           # Ponto de entrada da aplicação
├── eslint.config.js       # Configurações do linter
├── package.json           # Dependências e scripts
└── vite.config.js         # Configurações do Vite
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (versão 9 ou superior)

### Instalação e Execução

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra o navegador no endereço exibido no terminal (geralmente `http://localhost:5173`).

---

## 📦 Build de Produção e Validação

- Gerar build de produção:
  ```bash
  npm run build
  ```

- Visualizar build prévia:
  ```bash
  npm run preview
  ```

- Executar linter:
  ```bash
  npm run lint
  ```

---

## 📜 Licença

Desenvolvido para o **Capítulo Templários do Oriente nº 722** — Ordem DeMolay, Itabira - MG.
