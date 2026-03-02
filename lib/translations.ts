export type Language = 'es' | 'en';

type TranslationShape = {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    intro: string;
    items: Array<{
      title: string;
      description: string;
      tag: string;
    }>;
  };
  process: {
    title: string;
    intro: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  values: {
    title: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  about: {
    title: string;
    intro: string;
    paragraphs: string[];
    closing: string;
  };
  portfolio: {
    title: string;
    note: string;
    projects: Array<{
      title: string;
      description: string;
      status: string;
      tags: string[];
    }>;
  };
  contact: {
    title: string;
    intro: string;
    form: {
      name: string;
      email: string;
      company: string;
      projectType: string;
      message: string;
      projectOptions: {
        dataPipelines: string;
        apis: string;
        webapp: string;
        aiDataPrep: string;
        other: string;
      };
      submit: string;
      success: string;
      error: string;
      requiredError: string;
      emailError: string;
    };
  };
  common: {
    companyName: string;
    ctaContact: string;
    footerTransparency: string;
    rights: string;
  };
};

export const translations: Record<Language, TranslationShape> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      services: 'Servicios',
      portfolio: 'Portafolio',
      contact: 'Contacto'
    },
    hero: {
      title: 'Soluciones de datos y software, sin humo.',
      subtitle:
        'Arc Solutions acompaña a pymes que no tienen equipos técnicos grandes, pero sí presupuesto y necesidad de mejorar procesos con alguien que entienda negocio y tecnología.',
      ctaPrimary: 'Agendar una conversación',
      ctaSecondary: 'Ver portafolio'
    },
    services: {
      title: 'Qué hago',
      intro: 'Servicios concretos para resolver cuellos de botella reales y crear bases sólidas para crecer.',
      items: [
        {
          title: 'Pipelines y automatización de datos',
          description:
            'Muevo datos desde ERPs, planillas o APIs hacia bases de datos y almacenamiento de objetos, con procesos claros y trazables.',
          tag: 'ETL'
        },
        {
          title: 'APIs y servicios para integraciones',
          description:
            'Diseño APIs REST para exponer datos y conectar sistemas internos o de terceros sin trabajo manual repetitivo.',
          tag: 'API'
        },
        {
          title: 'Aplicaciones web a medida',
          description:
            'Construyo flujos upload → proceso → resultados, paneles internos y herramientas simples para equipos operativos.',
          tag: 'WebApp'
        },
        {
          title: 'Preparación de datos para proyectos de IA',
          description:
            'Ayudo a limpiar, etiquetar y estructurar datos para que los experimentos de IA partan de información útil.',
          tag: 'AI Data'
        },
        {
          title: 'Acompañamiento y soporte',
          description:
            'Documentación, mejoras progresivas y soporte posterior para que la solución siga aportando valor con el tiempo.',
          tag: 'Soporte'
        }
      ]
    },
    process: {
      title: 'Proceso de trabajo',
      intro: 'Un camino simple para reducir riesgos y validar valor en cada etapa.',
      steps: [
        {
          title: 'Entender el problema',
          description: 'Partimos del proceso de negocio y de los datos disponibles. Definimos qué duele hoy y qué resultado se espera.'
        },
        {
          title: 'Proponer un camino mínimo',
          description: 'Se plantea un alcance corto, con entregables concretos y criterios claros para medir si funciona.'
        },
        {
          title: 'Desarrollar y validar',
          description: 'Se implementa en iteraciones breves con feedback continuo del equipo que usará la solución.'
        },
        {
          title: 'Desplegar y acompañar',
          description: 'Se deja en producción con documentación básica, monitoreo inicial y soporte durante la adopción.'
        },
        {
          title: 'Mejoras y mantenimiento',
          description: 'Con evidencia de uso, se priorizan mejoras reales y se evita agregar funciones sin impacto.'
        }
      ]
    },
    values: {
      title: 'Cómo trabajamos',
      cards: [
        {
          title: 'Transparencia radical',
          description: 'Si algo no está claro o tiene riesgo, se dice desde el inicio. Sin promesas vacías.'
        },
        {
          title: 'Datos que siguen siendo tuyos',
          description: 'Los datos pertenecen al cliente. Todo se diseña pensando en exportación, migración y portabilidad.'
        },
        {
          title: 'Relación cercana',
          description: 'Trabajo directo con las personas involucradas para entender contexto, tiempos y restricciones reales.'
        },
        {
          title: 'No construir por construir',
          description: 'Cada funcionalidad debe justificar su costo con impacto operativo o comercial medible.'
        }
      ]
    },
    about: {
      title: 'Sobre Arc Solutions',
      intro: 'Este estudio está formado actualmente por una sola persona.',
      paragraphs: [
        'Con cerca de 4 años construyendo soluciones tecnológicas, el foco principal está en proyectos donde los datos son parte crítica del negocio.',
        'El rol es híbrido: ingeniería de datos para mover y transformar información, arquitectura de soluciones para elegir herramientas adecuadas y entendimiento de negocio para conectar problemas reales con opciones técnicas viables.',
        'También hay experiencia trabajando con datos sensibles, aplicando prácticas básicas de seguridad y gobernanza para cuidar acceso, trazabilidad y calidad de la información.'
      ],
      closing: 'Si los clientes crecen gracias a estas soluciones, Arc Solutions crece con ellos.'
    },
    portfolio: {
      title: 'Portafolio',
      note: 'Este portafolio está en construcción. Prefiero mostrar casos reales con impacto concreto, aunque tome más tiempo, antes que llenar esta página de ejemplos vacíos.',
      projects: [
        {
          title: 'Migración de datos para una pyme',
          description: 'Ejemplo / próximamente: consolidación de datos históricos desde planillas y ERP hacia una base estructurada.',
          status: 'Ejemplo · Próximamente',
          tags: ['ETL', 'Migración', 'SQL']
        },
        {
          title: 'Dashboard simple para equipo comercial',
          description: 'Ejemplo / próximamente: tablero web con métricas clave, filtros básicos y actualización periódica.',
          status: 'Ejemplo · Próximamente',
          tags: ['WebApp', 'Dashboard', 'BI']
        },
        {
          title: 'API de integración para un proveedor externo',
          description: 'Ejemplo / próximamente: servicio REST para sincronizar pedidos y estados entre dos sistemas.',
          status: 'Ejemplo · Próximamente',
          tags: ['API', 'Integración', 'Automatización']
        }
      ]
    },
    contact: {
      title: 'Contacto',
      intro: 'El primer paso es una conversación breve para entender el problema de negocio y evaluar si puedo ayudar.',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        company: 'Empresa',
        projectType: 'Tipo de proyecto',
        message: 'Mensaje',
        projectOptions: {
          dataPipelines: 'Pipelines de datos',
          apis: 'APIs e integraciones',
          webapp: 'Aplicación web',
          aiDataPrep: 'Preparación de datos para IA',
          other: 'Otro'
        },
        submit: 'Enviar mensaje',
        success: 'Mensaje enviado. Te responderé pronto.',
        error: 'No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.',
        requiredError: 'Completa los campos obligatorios.',
        emailError: 'Ingresa un correo electrónico válido.'
      }
    },
    common: {
      companyName: 'Arc Solutions',
      ctaContact: 'Agendar una conversación',
      footerTransparency: 'Trabajo transparente, datos bajo tu control y decisiones técnicas con contexto de negocio.',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact'
    },
    hero: {
      title: 'Data and software solutions, no fluff.',
      subtitle:
        'Arc Solutions partners with SMBs that do not have large tech teams, but do have budget and a real need to improve processes with someone who understands both business and technology.',
      ctaPrimary: 'Schedule a call',
      ctaSecondary: 'View portfolio'
    },
    services: {
      title: 'What I do',
      intro: 'Practical services to solve real bottlenecks and create reliable foundations for growth.',
      items: [
        {
          title: 'Data pipelines & automation',
          description:
            'I move data from ERPs, spreadsheets, or APIs into databases and object storage with clear and traceable flows.',
          tag: 'ETL'
        },
        {
          title: 'APIs & integration services',
          description:
            'I design REST APIs to expose data and connect internal or external systems without repetitive manual work.',
          tag: 'API'
        },
        {
          title: 'Custom web applications',
          description:
            'I build upload → process → results flows, internal dashboards, and lightweight tools for operating teams.',
          tag: 'WebApp'
        },
        {
          title: 'Data preparation for AI projects',
          description:
            'I help clean, label, and structure data so AI experiments start from useful and trustworthy information.',
          tag: 'AI Data'
        },
        {
          title: 'Ongoing support & maintenance',
          description:
            'Documentation, incremental improvements, and post-launch support to keep solutions valuable over time.',
          tag: 'Support'
        }
      ]
    },
    process: {
      title: 'How I work',
      intro: 'A simple path to reduce risk and validate value at every step.',
      steps: [
        {
          title: 'Understand the problem',
          description: 'We start from the business process and available data. We define today’s pain and the expected outcome.'
        },
        {
          title: 'Propose a minimal path',
          description: 'I suggest a short scope with concrete deliverables and clear criteria to measure if it works.'
        },
        {
          title: 'Build and validate',
          description: 'Implementation happens in short iterations with continuous feedback from the people using the solution.'
        },
        {
          title: 'Deploy and support',
          description: 'It goes to production with core documentation, initial monitoring, and support during adoption.'
        },
        {
          title: 'Improve and maintain',
          description: 'Using real usage evidence, we prioritize meaningful improvements and avoid low-value features.'
        }
      ]
    },
    values: {
      title: 'How we collaborate',
      cards: [
        {
          title: 'Radical transparency',
          description: 'If something is uncertain or risky, it is communicated early. No empty promises.'
        },
        {
          title: 'Your data stays yours',
          description: 'Client data belongs to the client. Solutions are built for export, migration, and portability.'
        },
        {
          title: 'Close collaboration',
          description: 'I work directly with key people to understand context, timelines, and real constraints.'
        },
        {
          title: 'No feature-for-feature’s sake',
          description: 'Every feature should justify its cost with measurable operational or business impact.'
        }
      ]
    },
    about: {
      title: 'About Arc Solutions',
      intro: 'This studio is currently run by one person.',
      paragraphs: [
        'With around 4 years building technology solutions, the main focus is projects where data is a critical part of the business.',
        'The role is hybrid: data engineering to move and transform information, solution architecture to choose the right tools, and business understanding to connect real-world problems with practical technical options.',
        'There is also experience handling sensitive data and applying basic security and governance practices for access control, traceability, and information quality.'
      ],
      closing: 'If clients grow thanks to these solutions, Arc Solutions grows with them.'
    },
    portfolio: {
      title: 'Portfolio',
      note: 'This portfolio is under construction. I prefer to showcase real projects with concrete impact, even if that takes more time, rather than filling this page with empty examples.',
      projects: [
        {
          title: 'Data migration for an SME',
          description: 'Example / coming soon: consolidating historical data from spreadsheets and ERP into a structured store.',
          status: 'Example · Coming soon',
          tags: ['ETL', 'Migration', 'SQL']
        },
        {
          title: 'Simple dashboard for a sales team',
          description: 'Example / coming soon: web dashboard with key metrics, basic filters, and scheduled refreshes.',
          status: 'Example · Coming soon',
          tags: ['WebApp', 'Dashboard', 'BI']
        },
        {
          title: 'Integration API for an external provider',
          description: 'Example / coming soon: REST service to sync orders and status updates between systems.',
          status: 'Example · Coming soon',
          tags: ['API', 'Integration', 'Automation']
        }
      ]
    },
    contact: {
      title: 'Contact',
      intro: 'The first step is a short conversation to understand the business problem and evaluate how I can help.',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        projectType: 'Project type',
        message: 'Message',
        projectOptions: {
          dataPipelines: 'Data pipelines',
          apis: 'APIs & integrations',
          webapp: 'Web application',
          aiDataPrep: 'AI data preparation',
          other: 'Other'
        },
        submit: 'Send message',
        success: 'Message sent. I will reply soon.',
        error: 'Message could not be sent. Please try again in a few minutes.',
        requiredError: 'Please complete all required fields.',
        emailError: 'Please enter a valid email address.'
      }
    },
    common: {
      companyName: 'Arc Solutions',
      ctaContact: 'Schedule a call',
      footerTransparency: 'Transparent work, your data under your control, and technical decisions grounded in business context.',
      rights: 'All rights reserved.'
    }
  }
};
