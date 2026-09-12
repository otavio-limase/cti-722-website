import masonBackground from '../assets/Card/Background/MasonBack.png'

export const PCCS_DATA = [
  {
    id: "pcc-2024-2",
    period: "2024/2",
    name: "Tio Carlos Alberto da Silva",
    title: "Presidente do Conselho Consultivo",
    backgroundImage: masonBackground,
    profileImage: "",
    advisoryMembers: [
      "Tio Carlos Alberto da Silva (Presidente)",
      "Tio João Pereira dos Santos (Consultor)",
      "Tio Marcos Vinícius Alvarenga (Consultor)",
      "Tio Roberto Drummond (Consultor)",
    ],
    description:
      "Gestão focada no fortalecimento da liderança juvenil, apoio aos projetos filantrópicos e integração com as Lojas Maçônicas patrocinadoras de Itabira.",
  },
  {
    id: "pcc-2024-1",
    period: "2024/1",
    name: "Tio Marcos Vinícius Alvarenga",
    title: "Presidente do Conselho Consultivo",
    backgroundImage: masonBackground,
    profileImage: "",
    advisoryMembers: [
      "Tio Marcos Vinícius Alvarenga (Presidente)",
      "Tio Carlos Alberto da Silva (Consultor)",
      "Tio Antônio Carlos Drumond (Consultor)",
    ],
    description:
      "Acompanhamento direto nas iniciações capitulares e suporte contínuo à Tríplice Coroa e Oficiais.",
  },
  {
    id: "pcc-2023-2",
    period: "2023/2",
    name: "Tio Antônio Carlos Drumond",
    title: "Presidente do Conselho Consultivo",
    backgroundImage: masonBackground,
    profileImage: "",
    advisoryMembers: [
      "Tio Antônio Carlos Drumond (Presidente)",
      "Tio Rogério Lage (Consultor)",
      "Tio Marcelo Barbosa (Consultor)",
    ],
    description:
      "Incentivo à expansão dos estudos ritualísticos e ampliação de campanhas beneficentes na comunidade.",
  },
  {
    id: "pcc-2023-1",
    period: "2023/1",
    name: "Tio Rogério Lage Ferreira",
    title: "Presidente do Conselho Consultivo",
    backgroundImage: masonBackground,
    profileImage: "",
    advisoryMembers: [
      "Tio Rogério Lage Ferreira (Presidente)",
      "Tio Antônio Carlos Drumond (Consultor)",
      "Tio Eduardo César (Consultor)",
    ],
    description:
      "Gestão de retomada de grandes eventos presenciais e celebração das comemorações históricas do Capítulo 722.",
  },
];

export const getPccById = (periodId) => {
  if (!periodId) return null;
  const normalized = periodId.toLowerCase().replace('/', '-');
  return PCCS_DATA.find((pcc) => pcc.id.toLowerCase() === normalized) || null;
};

