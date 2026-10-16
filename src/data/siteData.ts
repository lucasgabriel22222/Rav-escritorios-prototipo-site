export interface ProductItem {
  id: string;
  name: string;
  category: 'cadeiras' | 'estacoes' | 'mesas' | 'armarios' | 'recepcao';
  categoryLabel: string;
  badge: string;
  image: string;
  description: string;
  specs: string[];
  ctaMessage: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export const siteData = {
  company: {
    name: 'RAV Escritórios',
    shortName: 'RAV',
    tagline: 'Móveis ergonômicos, cadeiras, mesas e soluções completas para escritórios em Cuiabá',
    phoneFormatted: '(65) 4063-1727',
    phoneRaw: '+556540631727',
    whatsappNumber: '556540631727',
    defaultWhatsappMessage: 'Olá! Vim pelo site e gostaria de solicitar um orçamento de móveis para escritório na RAV Escritórios.',
    email: 'contato@ravescritorios.com.br',
    instagram: '@ravescritorios',
    instagramUrl: 'https://instagram.com/ravescritorios',
    cep: '78077-100',
    address: 'Av. Profa. Edna Maria de Albuquerque Affi, 1418',
    neighborhood: 'Jardim Imperial',
    city: 'Cuiabá',
    state: 'MT',
    fullAddress: 'Av. Profa. Edna Maria de Albuquerque Affi, 1418 - Jardim Imperial, Cuiabá - MT, 78077-100, Brasil',
    googleRating: 5.0,
    googleReviewCount: 13,
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.8687784013347!2d-56.03757962487405!3d-15.60232978496464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dad959be78ad7%3A0xe72688f4b008d3e9!2sAv.%20Profa.%20Edna%20Maria%20de%20Albuquerque%20Affi%2C%201418%20-%20Jardim%20Imperial%2C%20Cuiab%C3%A1%20-%20MT%2C%2078077-100!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr',
    googleMapsDirectLink: 'https://maps.google.com/?q=Av.+Profa.+Edna+Maria+de+Albuquerque+Affi,+1418+-+Jardim+Imperial,+Cuiab%C3%A1+-+MT,+78077-100',
    businessHours: [
      { days: 'Segunda a Sexta', hours: '08:00 às 18:00' },
      { days: 'Sábado', hours: '08:00 às 12:00' },
      { days: 'Domingo', hours: 'Fechado' },
    ]
  },

  hero: {
    badge: 'Móveis para Escritório e Corporativos em Cuiabá - MT',
    title: 'Mobiliário Corporativo, Cadeiras Ergonômicas e Soluções para o Seu Escritório',
    subtitle: 'Móveis projetados para produtividade e ergonomia NR-17. Atendimento consultivo especializado, entrega com montagem profissional e showroom na Av. Edna Maria de Albuquerque Affi em Cuiabá.',
    heroImage: '/src/assets/images/hero_corporate_office_1792171498667.jpg',
  },

  stats: [
    {
      value: '5.0',
      label: 'Nota Máxima no Google',
      sublabel: 'Excelência avaliada por empresas em Cuiabá'
    },
    {
      value: 'NR-17',
      label: 'Ergonomia & Conforto',
      sublabel: 'Postura correta e preservação do bem-estar'
    },
    {
      value: '100%',
      label: 'Projetos Corporativos',
      sublabel: 'Soluções completas para empresas e home office'
    },
    {
      value: 'Direto',
      label: 'Atendimento Rápido',
      sublabel: 'Cotações e projetos ágeis no WhatsApp'
    }
  ] as StatItem[],

  categories: [
    { id: 'todos', label: 'Todos os Móveis' },
    { id: 'cadeiras', label: 'Cadeiras Ergonômicas' },
    { id: 'estacoes', label: 'Estações de Trabalho' },
    { id: 'mesas', label: 'Mesas de Reunião & Diretoria' },
    { id: 'armarios', label: 'Armários & Arquivos' },
    { id: 'recepcao', label: 'Recepção & Atendimento' },
  ],

  products: [
    {
      id: 'cadeira-ergonomica-diretor',
      name: 'Cadeira Presidente Ergonômica Mesh Pro',
      category: 'cadeiras',
      categoryLabel: 'Cadeiras Ergonômicas',
      badge: 'Conformidade NR-17',
      image: '/src/assets/images/product_ergonomic_chair_1792171498721.jpg',
      description: 'Estrutura reforçada em alumínio polido com tela mesh respirável de alta densidade, apoio lombar ajustável e mecanismo sincronizado relax para jornadas longas de trabalho.',
      specs: ['Braços 3D reguláveis', 'Apoio lombar ajustável', 'Base em alumínio polido', 'Pistão a gás classe 4'],
      ctaMessage: 'Olá! Gostaria de solicitar um orçamento para a Cadeira Presidente Ergonômica Mesh Pro na RAV Escritórios.'
    },
    {
      id: 'estacao-trabalho-open-space',
      name: 'Estação de Trabalho Modular 4 e 6 Lugares',
      category: 'estacoes',
      categoryLabel: 'Estações de Trabalho',
      badge: 'Alta Produtividade',
      image: '/src/assets/images/product_workstations_bench_1792171499790.jpg',
      description: 'Plataforma corporativa open-space com painéis divisórios acústicos em tecido, calha estrutural para cabeamento de energia e rede, e tampos em MDF de alta resistência.',
      specs: ['Passagem embutida de fiação', 'Divisória acústica integrada', 'MDF 25mm com borda ABS', 'Módulos expansíveis'],
      ctaMessage: 'Olá! Gostaria de cotar uma Estação de Trabalho Modular (4 a 6 lugares) para minha empresa na RAV Escritórios.'
    },
    {
      id: 'mesa-executiva-diretoria',
      name: 'Mesa Executiva de Diretoria Premium',
      category: 'mesas',
      categoryLabel: 'Mesas de Reunião & Diretoria',
      badge: 'Linha Executiva',
      image: '/src/assets/images/product_executive_desk_1792171499612.jpg',
      description: 'Mesa imponente para diretoria e gerência com acabamento nobre em madeira nogueira e estrutura tubular metálica em pintura epóxi fosca, acompanhada de gaveteiro fixo.',
      specs: ['Tampo robusto 40mm', 'Estrutura metálica industrial', 'Gaveteiro embutido com chave', 'Caixa de conectividade'],
      ctaMessage: 'Olá! Gostaria de um orçamento para a Mesa Executiva de Diretoria Premium na RAV Escritórios.'
    },
    {
      id: 'armario-arquivo-corporativo',
      name: 'Armário Corporativo Alto e Credenza para Arquivos',
      category: 'armarios',
      categoryLabel: 'Armários & Arquivos',
      badge: 'Alta Durabilidade',
      image: '/src/assets/images/product_storage_cabinets_1792171500148.jpg',
      description: 'Sistema modular de armários corporativos com portas de correr e nichos abertos para pastas AZ, ideal para organização documental e segurança patrimonial.',
      specs: ['Fechadura com chave escamoteável', 'Prateleiras reguláveis reforçadas', 'Trilho de correr silencioso', 'Niveladores de piso'],
      ctaMessage: 'Olá! Gostaria de um orçamento para Armários Corporativos e Arquivos na RAV Escritórios.'
    },
    {
      id: 'mesa-reuniao-corporativa',
      name: 'Mesa de Reunião Corporativa com Conectividade',
      category: 'mesas',
      categoryLabel: 'Mesas de Reunião & Diretoria',
      badge: 'Espaço Estratégico',
      image: '/src/assets/images/hero_corporate_office_1792171498667.jpg',
      description: 'Mesa retangular para salas de conferência e decisões estratégicas de 8 a 12 pessoas, com caixas de tomadas embutidas para apresentações dinâmicas.',
      specs: ['Acomoda de 8 a 12 pessoas', 'Caixas de tomadas e HDMI embutidas', 'Estrutura estável anti-vibração', 'Diversas opções de cores'],
      ctaMessage: 'Olá! Gostaria de um orçamento para a Mesa de Reunião Corporativa na RAV Escritórios.'
    },
    {
      id: 'balcao-recepcao-atendimento',
      name: 'Balcão de Recepção e Atendimento Corporativo',
      category: 'recepcao',
      categoryLabel: 'Recepção & Atendimento',
      badge: 'Primeira Impressão',
      image: '/src/assets/images/hero_corporate_office_1792171498667.jpg',
      description: 'Balcão com módulo de atendimento acessível, frontal com detalhe arquitetônico e espaço interno ergonômico com passa-fios e gavetas para recepcionistas.',
      specs: ['Frontal com acabamento nobre', 'Padrão acessível NBR 9050', 'Furação interna para computadores', 'Gaveteiro embutido'],
      ctaMessage: 'Olá! Gostaria de informações e orçamento sobre Balcão de Recepção Corporativo na RAV Escritórios.'
    }
  ] as ProductItem[],

  differentials: [
    {
      id: 'nota-google',
      title: 'Nota Máxima 5.0 no Google',
      description: 'Avaliação impecável por clientes corporativos em Cuiabá. Atendimento sério, pontualidade rigorosa e transparência na negociação.',
      icon: 'Star'
    },
    {
      id: 'ergonomia',
      title: 'Ergonomia em Conformidade NR-17',
      description: 'Cadeiras e mesas desenvolvidas segundo normas regulamentadoras que previnem lesões posturais e aumentam a produtividade da sua equipe.',
      icon: 'Armchair'
    },
    {
      id: 'variedade-local',
      title: 'Showroom no Jardim Imperial',
      description: 'Ampla variedade de mobiliário para escritórios de todos os portes com atendimento consultivo na Av. Profa. Edna Maria de Albuquerque Affi.',
      icon: 'Building2'
    },
    {
      id: 'entrega-montagem',
      title: 'Entrega e Montagem Profissional',
      description: 'Equipe especializada própria para transporte, montagem e regulagem de todos os móveis no seu endereço sem complicações para sua empresa.',
      icon: 'ShieldCheck'
    },
    {
      id: 'consultoria',
      title: 'Projetos e Consultoria de Layout',
      description: 'Auxiliamos na escolha das melhores dimensões e disposição dos postos de trabalho para aproveitar cada metro quadrado do seu espaço.',
      icon: 'Briefcase'
    },
    {
      id: 'orcamento-agil',
      title: 'Cotação Rápida pelo WhatsApp',
      description: 'Sem burocracias: envie a relação dos móveis que você necessita ou a planta do ambiente e receba uma proposta corporativa ágil.',
      icon: 'Phone'
    }
  ],

  reviews: [
    {
      id: 'review-1',
      name: 'Eduardo Campos',
      role: 'Diretor Comercial - Cuiabá MT',
      rating: 5,
      date: 'Avaliação Verificada',
      text: 'Excelente atendimento e móveis de altíssima qualidade. Equipamos todo o nosso escritório com as cadeiras e mesas da RAV e o resultado superou as expectativas.'
    },
    {
      id: 'review-2',
      name: 'Renata Silveira',
      role: 'Gestora Operacional - Cuiabá MT',
      rating: 5,
      date: 'Avaliação Verificada',
      text: 'Empresa séria e pontual na entrega. Os móveis corporativos são modernos, resistentes e com ótimo acabamento. Recomendo a todos em Cuiabá.'
    },
    {
      id: 'review-3',
      name: 'Marcos Vinícius Prado',
      role: 'Sócio de Escritório de Advocacia',
      rating: 5,
      date: 'Avaliação Verificada',
      text: 'As cadeiras ergonômicas da RAV fizeram total diferença na rotina da nossa equipe. O processo de cotação pelo WhatsApp foi rápido e a montagem impecável.'
    }
  ] as ReviewItem[],

  faqs: [
    {
      question: 'Vocês atendem empresas e escritórios de todos os portes?',
      answer: 'Sim! Fornecemos móveis ergonômicos e corporativos tanto para estações individuais de home office quanto para empresas, clínicas, consultórios e escritórios de médio e grande porte em Cuiabá e região.'
    },
    {
      question: 'Vocês realizam entrega e montagem em Cuiabá e região?',
      answer: 'Sim! Contamos com equipe própria treinada para entrega pontual e montagem profissional dos móveis no local indicado, garantindo o perfeito alinhamento e ajuste dos componentes.'
    },
    {
      question: 'Como faço para solicitar um orçamento corporativo?',
      answer: 'Basta clicar em qualquer botão de WhatsApp neste site e enviar a lista de itens, medidas aproximadas ou o projeto do seu escritório. Nossa equipe responde rapidamente com catálogo e opções personalizadas.'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos Pix, cartões de crédito em condições facilitadas, boleto bancário para empresas e faturamento corporativo programado mediante cadastro. Consulte condições especiais pelo WhatsApp.'
    },
    {
      question: 'Onde a loja está localizada?',
      answer: 'Estamos localizados na Av. Profa. Edna Maria de Albuquerque Affi, 1418 - Jardim Imperial, Cuiabá - MT, CEP 78077-100. Você pode nos visitar de segunda a sábado ou agendar atendimento pelo WhatsApp.'
    }
  ] as FaqItem[],
};
