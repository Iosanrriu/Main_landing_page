import type { Language } from '@/lib/translations';

type LocalizedText = {
  es: string;
  en: string;
};

export type CareerRole = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  salaryLabel: LocalizedText;
  salaryReferenceClp: number;
  highlights: {
    es: string[];
    en: string[];
  };
};

export const careerRoles: CareerRole[] = [
  {
    id: 'data-engineer-jr',
    title: {
      es: 'Data Engineer Jr',
      en: 'Junior Data Engineer'
    },
    summary: {
      es: 'Perfil con al menos 2 anos de experiencia en tecnologias cloud, Python y SQL. Buscamos una persona con criterio de negocio, capaz de conversar con clientes, hacer buenas preguntas y tomar ownership de principio a fin.',
      en: 'Profile with at least 2 years of experience in cloud technologies, Python, and SQL. We are looking for someone with business awareness, able to talk with clients, ask sharp questions, and take ownership end-to-end.'
    },
    salaryLabel: {
      es: 'Sueldo tentativo liquido',
      en: 'Tentative net salary'
    },
    salaryReferenceClp: 1700000,
    highlights: {
      es: [
        'Experiencia practica en servicios cloud y modelamiento de datos.',
        'Dominio operativo de Python y SQL para casos reales.',
        'Interaccion con clientes para levantar requerimientos de negocio.',
        'Ownership sobre entregables y continuidad de soluciones.'
      ],
      en: [
        'Hands-on experience with cloud services and data modeling.',
        'Operational command of Python and SQL for real scenarios.',
        'Client interaction to gather business requirements.',
        'Ownership over deliverables and solution continuity.'
      ]
    }
  },
  {
    id: 'ai-adoption-consultant',
    title: {
      es: 'AI Adoption Consultant',
      en: 'AI Adoption Consultant'
    },
    summary: {
      es: 'Profesional que ayuda a empresas a integrar IA en procesos de negocio con foco en impacto real.',
      en: 'Professional who helps companies integrate AI into business processes with real business impact.'
    },
    salaryLabel: {
      es: 'Sueldo tentativo liquido',
      en: 'Tentative net salary'
    },
    salaryReferenceClp: 2200000,
    highlights: {
      es: [
        'Identificar casos de uso de IA.',
        'Disenar estrategia de adopcion.',
        'Evaluar herramientas (LLMs, automation, copilots).',
        'Definir ROI y priorizacion.',
        'Capacitar equipos.',
        'Coordinar implementacion tecnica.'
      ],
      en: [
        'Identify AI use cases.',
        'Design adoption strategy.',
        'Evaluate tools (LLMs, automation, copilots).',
        'Define ROI and prioritization.',
        'Train teams.',
        'Coordinate technical implementation.'
      ]
    }
  }
];

export function getCareerRoleById(roleId: string) {
  return careerRoles.find((role) => role.id === roleId);
}

export function getCareerText(text: LocalizedText, language: Language) {
  return text[language];
}

export function formatClp(value: number) {
  return new Intl.NumberFormat('es-CL').format(value);
}
