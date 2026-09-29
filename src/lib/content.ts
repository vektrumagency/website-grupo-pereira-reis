export const BRAND = {
  name: "APR 360°",
  group: "Capital Group",
  tagline: "Global Vision. Real Value.",
};

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contacto", label: "Contacto" },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1757359056339-22968344cce6?q=80&w=2400&auto=format&fit=crop";

// Fica null até haver um vídeo próprio (ou de banco) aprovado. Com um URL
// .mp4 aqui, o hero passa a vídeo e a imagem acima serve de poster.
export const HERO_VIDEO: string | null = null;

// Imagem de ambiente até haver um retrato real do André.
export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1771450092348-5f33e2cc2963?q=80&w=1400&auto=format&fit=crop";

export type ServiceIcon = "construction" | "brokerage" | "investment" | "capital";

export const SERVICES: {
  icon: ServiceIcon;
  title: string;
  titleEn: string;
  description: string;
}[] = [
  {
    icon: "construction",
    title: "Projetos, Obras e Construção",
    titleEn: "Projects / Works / Construction",
    description: "Do projeto à entrega da obra, com acompanhamento em cada fase.",
  },
  {
    icon: "brokerage",
    title: "Mediação Imobiliária",
    titleEn: "Real Estate Brokerage",
    description: "Compra, venda e arrendamento com um processo claro do início ao fim.",
  },
  {
    icon: "investment",
    title: "Investimento Imobiliário",
    titleEn: "Real Estate Investment",
    description: "Identificação, análise e gestão de oportunidades de investimento.",
  },
  {
    icon: "capital",
    title: "Capital e Financiamento",
    titleEn: "Capital & Financing",
    description: "Estruturação de capital e financiamento para cada operação.",
  },
];

export const ABOUT_STATS = [
  { value: "4", label: "Áreas de negócio" },
  { value: "360°", label: "Acompanhamento" },
  { value: "PT", label: "Portugal" },
];

export const CONTACT = {
  email: "geral@apr360.pt",
  phone: "+351 91 234 56 78",
  phoneHref: "tel:+351912345678",
};
