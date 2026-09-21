export interface WorkshopBlock {
  id: number;
  title: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
}

export interface WorkshopSituation {
  id: number;
  text: string;
  iconName: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  type?: 'intro' | 'module' | 'break' | 'radar' | 'close';
}

export interface Facilitator {
  name: string;
  role: string;
  bio: string[];
  initials: string;
}

export const WORKSHOP_DETAILS = {
  name: "Liderarte para liderar personas",
  subtitle: "Taller presencial de liderazgo y gestión de personas",
  heroDescription:
    "Desarrolla las habilidades que necesitas para comunicarte mejor, gestionar situaciones difíciles y acompañar el crecimiento de tu equipo.",
  dateText: "30 de octubre de 2026",
  dateIso: "2026-10-30",
  scheduleText: "De 16:00 a 20:30 h",
  durationText: "4 horas y 30 minutos",
  modality: "Presencial",
  location: "CEEIM, Centro Europeo de Empresas e Innovación de Murcia",
  addressFull: "Campus Universitario de Espinardo, 30100 Murcia",
  spots: 10,
  spotsBadge: "Solo 10 plazas",
  fundae: "Formación bonificable mediante FUNDAE",
  includes: [
    "Material de trabajo",
    "Radar de Desarrollo Profesional",
    "Certificado de participación"
  ],
  pricing: {
    earlyBird: {
      price: 89,
      currency: "€",
      label: "Precio anticipado",
      condition: "Para inscripciones realizadas antes del 23 de octubre de 2026",
      isPrimary: true
    },
    regular: {
      price: 115,
      currency: "€",
      label: "Precio general",
      condition: "Para inscripciones realizadas a partir del 23 de octubre de 2026",
      isPrimary: false
    }
  }
};

export const LEADERSHIP_REALITY_PARAGRAPHS = [
  "Quieres resultados, y las personas que tienes a cargo no colaboran como tú quisieras.",
  "Dirigir un equipo exige capacidades que no solo van en el cargo.",
  "Hay que aprender a comunicar expectativas, gestionar conflictos, tomar decisiones, delegar, dar feedback y mantener el equilibrio en situaciones de presión.",
  "Este taller está diseñado para ayudarte a comprender tu forma de liderar, identificar las habilidades que necesitas desarrollar y aplicar herramientas concretas a situaciones reales de tu día a día."
];

export const SITUATIONS: WorkshopSituation[] = [
  {
    id: 1,
    text: "Te cuesta delegar porque temes perder el control o que las tareas no se realicen como esperas.",
    iconName: "ShieldAlert"
  },
  {
    id: 2,
    text: "Evitas algunas conversaciones por no generar tensión en el equipo.",
    iconName: "MessageSquareOff"
  },
  {
    id: 3,
    text: "Tienes dificultades para dar feedback o corregir comportamientos.",
    iconName: "MessageCircleWarning"
  },
  {
    id: 4,
    text: "La presión del puesto afecta a tu forma de comunicarte.",
    iconName: "Gauge"
  },
  {
    id: 5,
    text: "Sientes que debes resolver todos los problemas del equipo.",
    iconName: "Layers"
  },
  {
    id: 6,
    text: "Diriges a personas que antes eran tus compañeros.",
    iconName: "UserCheck"
  },
  {
    id: 7,
    text: "Tienes experiencia técnica, pero no has recibido formación para liderar.",
    iconName: "GraduationCap"
  },
  {
    id: 8,
    text: "Necesitas adaptar tu liderazgo a personas y situaciones diferentes.",
    iconName: "Compass"
  }
];

export const TARGET_PROFILES = [
  "Mandos intermedios.",
  "Directores y responsables de departamento.",
  "Responsables de Recursos Humanos.",
  "CEO, gerentes y propietarios de empresa.",
  "Profesionales que hayan asumido recientemente un puesto de mayor responsabilidad.",
  "Personas que necesiten mejorar la gestión y el desarrollo de sus equipos."
];

export const WORKSHOP_BLOCKS: WorkshopBlock[] = [
  {
    id: 1,
    title: "1. Tu punto de partida",
    description:
      "Partiremos de tu situación actual para identificar cómo estás ejerciendo tu rol, qué dificultades encuentras y qué impacto tiene tu forma de liderar en el equipo. A partir de esta reflexión, definirás la visión deseada: cómo quieres liderar, qué resultados quieres alcanzar y qué habilidades necesitas desarrollar para acercarte a ella.",
    items: [
      "El cambio de identidad profesional.",
      "Las nuevas expectativas asociadas al puesto.",
      "La diferencia entre conocimiento técnico y capacidad para liderar.",
      "Los errores más frecuentes al asumir una responsabilidad de dirección."
    ],
    image: "/src/assets/images/reflexion_lider_1789581767421.jpg",
    imageAlt: "Reflexión sobre la situación actual y la visión deseada en el taller de liderazgo"
  },
  {
    id: 2,
    title: "2. Gestión emocional aplicada al liderazgo",
    description:
      "Vamos a comprender cómo las emociones influyen en el comportamiento del líder, en las relaciones y en el clima del equipo.",
    items: [
      "Autorregulación emocional.",
      "Gestión del estrés, técnicas que se utilizarán: relajación muscular y ejercicios de respiración.",
      "Casos prácticos y aplicación."
    ],
    image: "/src/assets/images/regulacion_emocional_1789581833137.jpg",
    imageAlt: "Ejercicio de autorregulación emocional en el aula de formación"
  },
  {
    id: 3,
    title: "3. Comunicación y relaciones",
    description:
      "Conocerás cómo adaptar el estilo de comunicación a cada relación laboral y a cada momento para conectar con las personas y responder a las necesidades de la empresa.",
    items: [
      "Mejorar la comunicación. Técnicas que se utilizarán: la escalera de la comunicación, estilos de lenguaje y reetiquetado.",
      "Gestionar conversaciones complejas.",
      "Favorecer relaciones saludables.",
      "Casos prácticos y aplicación."
    ],
    image: "/src/assets/images/comunicacion_taller_1789581782245.jpg",
    imageAlt: "Práctica de comunicación y conversaciones complejas entre profesionales"
  },
  {
    id: 4,
    title: "4. Gestión del cambio",
    description:
      "Estableceremos un plan de acción para gestionar la flexibilidad y facilitar la aplicación de los nuevos aprendizajes.",
    items: [
      "Potenciar las fortalezas y desarrollar nuevas habilidades.",
      "Incorporar estrategias ante situaciones de presión.",
      "Desarrollar recursos psicológicos personales.",
      "Establecer compromisos individuales."
    ],
    image: "/src/assets/images/radar_compromiso_1789581808437.jpg",
    imageAlt: "Elaboración del plan de acción y compromisos individuales en el taller"
  }
];

export const METHODOLOGY_POINTS = [
  {
    title: "Autoevaluación individual",
    desc: "Diagnóstico personal reflexivo de tu estilo de liderazgo."
  },
  {
    title: "Casos prácticos de liderazgo",
    desc: "Análisis participativo de dilemas de gestión reales."
  },
  {
    title: "Conversaciones difíciles",
    desc: "Ejercicios guiados para abordar situaciones de fricción."
  },
  {
    title: "Reflexión compartida",
    desc: "Intercambio constructivo de experiencias entre profesionales."
  },
  {
    title: "Aplicación a situaciones reales",
    desc: "Traslado inmediato a los desafíos cotidianos de tu equipo."
  },
  {
    title: "Elaboración de un plan de acción individual",
    desc: "Hoja de ruta concreta con compromisos personales verificables."
  }
];

export const RADAR_COMPETENCIES = [
  { id: 1, name: "Adaptación al cambio", angle: 0 },
  { id: 2, name: "Autoconocimiento", angle: 36 },
  { id: 3, name: "Gestión emocional", angle: 72 },
  { id: 4, name: "Gestión del estrés", angle: 108 },
  { id: 5, name: "Comunicación e influencia", angle: 144 },
  { id: 6, name: "Organización y priorización", angle: 180 },
  { id: 7, name: "Toma de decisiones", angle: 216 },
  { id: 8, name: "Gestión de conflictos", angle: 252 },
  { id: 9, name: "Desarrollo de personas", angle: 288 },
  { id: 10, name: "Visión global del negocio", angle: 324 }
];

export const WHAT_YOU_TAKE_AWAY = [
  "Comprenderás cómo influye tu estilo de liderazgo en el equipo.",
  "Identificarás tus principales fortalezas y áreas de desarrollo.",
  "Tendrás herramientas para gestionar conversaciones difíciles.",
  "Podrás reconocer cómo tus emociones afectan a tus decisiones y relaciones.",
  "Definirás una competencia prioritaria sobre la que comenzar a trabajar.",
  "Elaborarás un primer compromiso personal de aplicación."
];

export const TIMELINE: TimelineItem[] = [
  {
    time: "16:00–16:15 h",
    title: "Bienvenida y presentación.",
    type: "intro"
  },
  {
    time: "16:15–17:00 h",
    title: "Tu punto de partida.",
    type: "module"
  },
  {
    time: "17:00–17:45 h",
    title: "Gestión emocional aplicada al liderazgo.",
    type: "module"
  },
  {
    time: "17:45–18:05 h",
    title: "Pausa.",
    type: "break"
  },
  {
    time: "18:05–18:50 h",
    title: "Comunicación y relaciones.",
    type: "module"
  },
  {
    time: "18:50–19:40 h",
    title: "Gestión del cambio.",
    type: "module"
  },
  {
    time: "19:40–20:15 h",
    title: "Radar de Desarrollo Profesional.",
    type: "radar"
  },
  {
    time: "20:15–20:30 h",
    title: "Compromiso individual y cierre.",
    type: "close"
  }
];

export const INDIVIDUAL_PROGRAM_AREAS = [
  "Adaptación al cambio y al nuevo rol profesional.",
  "Autoconocimiento y confianza profesional.",
  "Gestión emocional y gestión del estrés.",
  "Comunicación en las relaciones laborales.",
  "Gestión de conflictos.",
  "Organización, priorización y toma de decisiones.",
  "Desarrollo de personas y visión global del negocio.",
  "Consolidación de habilidades y plan personal de acción."
];

export const FACILITATORS: Facilitator[] = [
  {
    name: "Alberto Pallares López",
    role: "Psicólogo organizacional y facilitador",
    initials: "AP",
    bio: [
      "Psicólogo organizacional especializado en desarrollo de personas, comunicación interna, gestión de conflictos y acompañamiento de equipos.",
      "Integra herramientas de inteligencia emocional, DISC, comunicación no violenta, coaching ontológico y LEGO® Serious Play®."
    ]
  },
  {
    name: "Montse Callejas",
    role: "Consultora de negocio y coach ejecutiva",
    initials: "MC",
    bio: [
      "Consultora de negocio, formadora en ventas y coach ejecutiva.",
      "Acompaña a empresas, responsables y equipos en procesos de liderazgo, comunicación, organización y desarrollo profesional, conectando el bienestar de las personas con los objetivos de la empresa."
    ]
  }
];
