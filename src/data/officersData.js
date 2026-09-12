/**
 * Informações detalhadas sobre os Cargos e Oficiais da Ordem DeMolay
 */

export const OFFICERS_DATA = [
  {
    id: "mc",
    title: "Mestre Conselheiro",
    category: "Diretoria",
    categoryLabel: "Diretoria Executiva",
    badge: "Líder Capitular",
    summary:
      "Líder máximo do Capítulo DeMolay. Preside as sessões, representa o Capítulo perante a Maçonaria e a comunidade, e guia os trabalhos da gestão.",
    responsibilities: [
      "Presidir todas as reuniões regulares e extraordinárias do Capítulo.",
      "Elaborar e coordenar o plano de metas e projetos filantrópicos semestrais.",
      "Nomear os oficiais de comissões e zelar pela harmonia capitular.",
      "Representar o Capítulo em cerimônias públicas e congressos estaduais/nacionais.",
    ],
    symbolism:
      "Empunha o Malhete no Oriente, simbolizando autoridade justa, sabedoria e retidão de conduta.",
    iconName: "crown",
  },
  {
    id: "1c",
    title: "Primeiro Conselheiro",
    category: "Diretoria",
    categoryLabel: "Diretoria Executiva",
    badge: "Tríplice Coroa",
    summary:
      "Segundo líder na hierarquia capitular. Ocupa o Ocidente e é responsável pela disciplina, instrução e auxílio direto ao Mestre Conselheiro.",
    responsibilities: [
      "Substituir o Mestre Conselheiro em suas ausências ou impedimentos.",
      "Supervisionar a conduta e os estudos dos membros do Capítulo.",
      "Presidir a comissão de finanças e planejamento de eventos.",
    ],
    symbolism:
      "Simboliza o Sol poente no Ocidente, representando a reflexão serena e o dever cumprido com integridade.",
    iconName: "shield",
  },
  {
    id: "2c",
    title: "Segundo Conselheiro",
    category: "Diretoria",
    categoryLabel: "Diretoria Executiva",
    badge: "Tríplice Coroa",
    summary:
      "Terceiro oficial da Tríplice Coroa. Ocupa o Sul e é responsável pelo companheirismo, bem-estar, integração dos iniciados e harmonia dos momentos fraternos.",
    responsibilities: [
      "Auxiliar o Mestre Conselheiro e o 1º Conselheiro nas deliberações capitulares.",
      "Promover momentos de confraternização e acolhimento aos novos iniciados.",
      "Apoiar as atividades de recreação e filantropia.",
    ],
    symbolism:
      "Ocupa o Sul, ponto meridional de calor, amizade e espírito fraternal vivo entre os irmãos.",
    iconName: "users",
  },
  {
    id: "escrivao",
    title: "Escrivão",
    category: "Diretoria",
    categoryLabel: "Diretoria Administrativa",
    badge: "Administração",
    summary:
      "Responsável pela guarda dos arquivos, redação das atas de cada sessão, emissão de certidões e correspondência oficial do Capítulo.",
    responsibilities: [
      "Redigir e registrar com precisão as atas de todas as reuniões.",
      "Manter atualizado o livro de presença e o cadastro dos membros.",
      "Cuidar da comunicação formal com os órgãos superiores da Ordem.",
    ],
    symbolism:
      "Simboliza a caneta e o pergaminho da história: a memória viva das ações e virtudes do Capítulo.",
    iconName: "feather",
  },
  {
    id: "tesoureiro",
    title: "Tesoureiro",
    category: "Diretoria",
    categoryLabel: "Diretoria Administrativa",
    badge: "Administração",
    summary:
      "Responsável pela integridade e gestão financeira do Capítulo, prestando contas de todos os recursos arrecadados e destinados a ações sociais.",
    responsibilities: [
      "Arrecadar mensalidades e doações com transparência.",
      "Efetuar pagamentos autorizados e prestar relatórios financeiros regulares.",
      "Auxiliar no orçamento de eventos beneficentes e filantrópicos.",
    ],
    symbolism:
      "Representa a honestidade, probidade e responsabilidade no trato da coisa comum.",
    iconName: "coins",
  },
  {
    id: "orador",
    title: "Orador",
    category: "Ritual",
    categoryLabel: "Oficiais de Ritual",
    badge: "Ritualística",
    summary:
      "Guardião das leis capitulares, dos regulamentos e da filosofia ritualística. Realiza alocuções cívicas e reflexões morais durante as reuniões.",
    responsibilities: [
      "Proferir discursos inspiradores e reflexões sobre as Virtudes Cardeais.",
      "Zelar pela estrita conformidade com as leis e estatutos da Ordem.",
      "Agradecer visitantes e prestar homenagens formais.",
    ],
    symbolism:
      "A voz da razão, da sabedoria e do apreço à verdade e à justiça.",
    iconName: "book",
  },
  {
    id: "mc-cerimonias",
    title: "Mestre de Cerimônias",
    category: "Ritual",
    categoryLabel: "Oficiais de Ritual",
    badge: "Ritualística",
    summary:
      "Conduz a ritualística de entrada, movimentações solenes no Templo e recepção protocolar de convidados e autoridades maçônicas.",
    responsibilities: [
      "Organizar o Templo antes do início de cada trabalho capitular.",
      "Conduzir candidatos nas cerimônias de iniciação e graus da Ordem.",
      "Acompanhar oficiais e visitantes ilustres aos seus devidos assentos.",
    ],
    symbolism:
      "Empunha o Bastão de Cerimônias, representando ordem, solenidade e precisão no trabalho coletivo.",
    iconName: "compass",
  },
  {
    id: "capelao",
    title: "Capelão",
    category: "Ritual",
    categoryLabel: "Oficiais de Ritual",
    badge: "Espiritualidade",
    summary:
      "Oficial encarregado das orações capitulares no Altar Sagrado, fomentando o respeito à Divindade e a tolerância religiosa.",
    responsibilities: [
      "Conduzir as preces de abertura e encerramento dos trabalhos no Altar.",
      "Lembrar os irmãos dos deveres para com o Criador e a solidariedade humana.",
    ],
    symbolism:
      "Ajoelha-se no Altar com os Livros Sagrados, símbolo de humildade perante o Altíssimo.",
    iconName: "heart",
  },
  {
    id: "preceptores",
    title: "Os 7 Preceptores",
    category: "Ritual",
    categoryLabel: "Oficiais de Ritual",
    badge: "Pilares Morais",
    summary:
      "Sete oficiais que ocupam velas ao redor do Altar, cada um representando e instruindo sobre uma das Sete Virtudes Cardeais da Ordem DeMolay.",
    responsibilities: [
      "Exaltar sua virtude específica nas cerimônias solenes e no dia a dia.",
      "Iluminar moralmente o Capítulo através do exemplo pessoal.",
    ],
    symbolism:
      "As sete luzes do candelabro templário: Amor Filial, Reverência, Cortesia, Companheirismo, Fidelidade, Pureza e Patriotismo.",
    iconName: "flame",
  },
  {
    id: "pcc-role",
    title: "Presidente do Conselho Consultivo (PCC)",
    category: "Conselho",
    categoryLabel: "Conselho Consultivo",
    badge: "Maçom Orientador",
    summary:
      "Mestre Maçom experiente que preside o corpo de tios consultores, fornecendo amparo legal, moral e institucional ao Capítulo.",
    responsibilities: [
      "Representar a Loja Maçônica patrocinadora perante o Capítulo.",
      "Orientar os jovens na tomada de decisões e cumprimento das normas da Ordem.",
      "Assegurar a integridade e segurança de todas as atividades realizadas.",
    ],
    symbolism:
      "A ponte viva de sabedoria entre a Maçonaria adulta e a juventude que desponta para o futuro.",
    iconName: "university",
  },
];

