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
      message: string;
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
      about: 'Proceso',
      services: 'Servicios',
      portfolio: 'Portafolio',
      contact: 'Contacto'
    },
    hero: {
      title: 'Soluciones de datos y software de forma directa.',
      subtitle:
        'Arc Solutions es una consultora fundada en 2022 que combina estrategia y ejecucion para disenar soluciones de datos y software con impacto real en negocio. Trabajamos con medianas y grandes empresas que tienen presupuesto y urgencia por mejorar procesos criticos, pero equipos tecnicos limitados. Actuamos como partner durante todo el ciclo: entendemos el negocio, definimos un camino viable y entregamos soluciones alineadas a objetivos concretos.',
      ctaPrimary: 'Agendar una conversacion',
      ctaSecondary: 'Ver portafolio'
    },
    services: {
      title: 'Que servicios ofrecemos',
      intro: 'Nos enfocamos en dos lineas de trabajo de alto impacto para ordenar datos y convertirlos en decisiones accionables.',
      items: [
        {
          title: 'Data consolidation',
          description:
            'Limpiamos y estandarizamos datos provenientes de fuentes mixtas como PDF, invoices, planillas y archivos legacy para consolidarlos en un formato unico. Definimos una estrategia de integracion para convertir esa informacion en un flujo operativo centralizado para toda la compania.',
          tag: 'DATA OPS'
        },
        {
          title: 'Analitica de negocio',
          description:
            'Analizamos el comportamiento historico de tus datos para detectar huellas digitales como demoras de pago, retrasos en entregas y variaciones operativas. Entregamos reportes del estado actual y su tendencia, con hallazgos accionables para priorizar decisiones de negocio.',
          tag: 'ANALYTICS'
        }
      ]
    },
    process: {
      title: 'Proceso consultivo',
      intro:
        'Estos son los pasos que recomendamos para entender la problematica, reducir riesgo y extraer valor real para la compania en cada etapa.',
      steps: [
        {
          title: 'Entendimiento de la problematica',
          description:
            'Partimos del proceso de negocio y de los datos disponibles para identificar que duele hoy, donde impacta y que resultado se espera.'
        },
        {
          title: 'Propuesta de proyecto minimo viable',
          description:
            'Definimos alcance inicial, entregables concretos, criterios de aceptacion y stakeholders responsables para validar viabilidad tecnica y de negocio.'
        },
        {
          title: 'Alineacion contractual y plan de trabajo',
          description:
            'Acordamos condiciones del servicio, responsabilidades, hitos y forma de colaboracion antes de iniciar la ejecucion.'
        },
        {
          title: 'Desarrollo inicial y validacion',
          description:
            'Implementamos una primera entrega con costo definido para validar que la solucion responde a la problematica prioritaria del cliente.'
        },
        {
          title: 'Decision de continuidad',
          description:
            'Con evidencia de la primera entrega, el cliente decide continuar con el alcance completo, reorientar el proyecto o cerrar la iniciativa en ese punto.'
        },
        {
          title: 'Despliegue, transferencia y mejora continua',
          description:
            'Si se continua, desplegamos la solucion, transferimos al equipo de soporte y definimos mejoras evolutivas o planes de mantenimiento cuando aplique.'
        }
      ]
    },
    values: {
      title: 'Nuestros valores',
      cards: [
        {
          title: 'Transparencia radical',
          description: 'Si existe incertidumbre o riesgo, se comunica desde el inicio. No trabajamos con promesas vacias.'
        },
        {
          title: 'Propiedad y gobierno de datos',
          description:
            'La informacion sigue siendo del cliente. Disenamos soluciones con control de acceso, trazabilidad y resguardo segun el contexto del servicio.'
        },
        {
          title: 'Relacion cercana y de largo plazo',
          description:
            'Nos involucramos en la realidad del cliente para construir soluciones utiles hoy y sostenibles en el mediano y largo plazo.'
        },
        {
          title: 'Seleccion responsable de proyectos',
          description:
            'Priorizamos proyectos donde existe ajuste mutuo entre necesidad, impacto y capacidad de ejecucion para entregar resultados reales.'
        }
      ]
    },
    about: {
      title: 'Sobre Arc Solutions',
      intro: 'Arc Solutions lleva mas de cuatro años construyendo soluciones de tecnologia orientadas a datos y software aplicado al negocio.',
      paragraphs: [
        'Operamos con un rol hibrido que combina consultoria de negocio, gestion de proyectos e implementacion tecnica para acelerar la toma de decisiones y la entrega de resultados.',
        'Aplicamos practicas actuales de arquitectura, calidad y seguridad para que cada solucion sea mantenible, escalable y alineada con estandares profesionales.',
        'Sabemos que la velocidad de cambio tecnologico puede ser desafiante para muchos equipos. Nuestro trabajo es acercar esas capacidades de forma practica a organizaciones que quieren avanzar con claridad.'
      ],
      closing: 'Construimos relaciones de colaboracion donde tecnologia y negocio avanzan en la misma direccion.'
    },
    portfolio: {
      title: 'Portafolio',
      note: 'Este portafolio esta en construccion. Preferimos mostrar casos reales con impacto concreto antes que llenar esta pagina con ejemplos sin contexto.',
      projects: [
        {
          title: 'Migracion de datos para pequeña y mediana empresa',
          description: 'Ejemplo / proximamente: consolidacion de datos historicos desde planillas y ERP hacia una base estructurada.',
          status: 'Ejemplo - Proximamente',
          tags: ['ETL', 'Migracion', 'SQL']
        },
        {
          title: 'Dashboard simple para equipo comercial',
          description: 'Ejemplo / proximamente: tablero web con metricas clave, filtros basicos y actualizacion periodica.',
          status: 'Ejemplo - Proximamente',
          tags: ['WebApp', 'Dashboard', 'BI']
        },
        {
          title: 'API de integracion para un proveedor externo',
          description: 'Ejemplo / proximamente: servicio REST para sincronizar pedidos y estados entre dos sistemas.',
          status: 'Ejemplo - Proximamente',
          tags: ['API', 'Integracion', 'Automatizacion']
        }
      ]
    },
    contact: {
      title: 'Hablemos de tu proyecto',
      intro: 'Comparte tu contexto y los objetivos de negocio. Te responderemos con una propuesta inicial y un camino de trabajo tentativo.',
      form: {
        name: 'Nombre',
        email: 'Correo electronico',
        company: 'Empresa',
        message: 'Mensaje',
        submit: 'Enviar mensaje',
        success: 'Mensaje enviado. Te responderemos pronto.',
        error: 'No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.',
        requiredError: 'Completa los campos obligatorios.',
        emailError: 'Ingresa un correo electronico valido.'
      }
    },
    common: {
      companyName: 'Arc Solutions',
      ctaContact: 'Agendar una conversacion',
      footerTransparency: 'Trabajo transparente, datos bajo tu control y decisiones tecnicas alineadas al contexto del negocio.',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Process',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact'
    },
    hero: {
      title: 'Direct data and software solutions.',
      subtitle:
        'Arc Solutions is a consultancy founded in 2022 that combines strategy and execution to deliver data and software solutions with measurable business impact. We work with mid-sized and large companies that have budget and urgency to improve critical processes, but limited technical bandwidth. We act as a partner across the full cycle: understanding the business, defining a viable path, and delivering solutions aligned with concrete outcomes.',
      ctaPrimary: 'Schedule a call',
      ctaSecondary: 'View portfolio'
    },
    services: {
      title: 'What services we offer',
      intro: 'We focus on two high-impact capabilities to organize data foundations and convert them into actionable decisions.',
      items: [
        {
          title: 'Data consolidation',
          description:
            'We clean and standardize mixed-source data from PDF files, invoices, spreadsheets, and legacy exports to consolidate everything into a single format. Then we define an integration strategy to run that information through one centralized business flow.',
          tag: 'DATA OPS'
        },
        {
          title: 'Business analytics',
          description:
            'We review historical data behavior to detect digital signals such as late payments, delivery delays, and operational drift. We provide current-state and trend reporting with actionable findings to support business decisions.',
          tag: 'ANALYTICS'
        }
      ]
    },
    process: {
      title: 'Consulting process',
      intro:
        'These are the steps we recommend to understand the problem, reduce risk, and extract business value at every stage.',
      steps: [
        {
          title: 'Problem understanding',
          description:
            'We start from business workflows and available data to define current pain points, impact areas, and expected outcomes.'
        },
        {
          title: 'Minimum viable project proposal',
          description:
            'We define initial scope, concrete deliverables, acceptance criteria, and accountable stakeholders to validate technical and business feasibility.'
        },
        {
          title: 'Contract alignment and execution plan',
          description:
            'We align service conditions, responsibilities, milestones, and collaboration mechanics before execution begins.'
        },
        {
          title: 'Initial build and validation',
          description:
            'We deliver a first paid increment to validate that the proposed solution addresses the highest-priority client challenge.'
        },
        {
          title: 'Continuation decision',
          description:
            'Based on the first delivery, the client can continue with full scope, redirect the initiative, or close the project at that point.'
        },
        {
          title: 'Deployment, handoff, and continuous improvement',
          description:
            'If the engagement continues, we deploy, hand over to support teams, and define evolutionary improvements or maintenance plans when needed.'
        }
      ]
    },
    values: {
      title: 'Our values',
      cards: [
        {
          title: 'Radical transparency',
          description: 'If there is uncertainty or risk, we communicate it early. We do not work with empty promises.'
        },
        {
          title: 'Data ownership and governance',
          description:
            'Client information remains client-owned. We design solutions with access control, traceability, and safeguards aligned to service context.'
        },
        {
          title: 'Close and long-term collaboration',
          description:
            'We engage deeply with each client context to build solutions that are useful now and sustainable over time.'
        },
        {
          title: 'Responsible project selection',
          description:
            'We prioritize projects where need, impact, and execution capacity are aligned so outcomes are meaningful and realistic.'
        }
      ]
    },
    about: {
      title: 'About Arc Solutions',
      intro: 'Arc Solutions has spent more than four years building technology solutions focused on data and business-driven software.',
      paragraphs: [
        'We operate with a hybrid profile that combines business consulting, project management, and technical implementation to accelerate decisions and delivery.',
        'We apply modern architecture, quality, and security practices so every solution is maintainable, scalable, and aligned with professional standards.',
        'Technology is evolving at high speed. Our role is to make those capabilities practical for organizations that want to move forward with clarity.'
      ],
      closing: 'We build long-term collaborations where technology and business advance in the same direction.'
    },
    portfolio: {
      title: 'Portfolio',
      note: 'This portfolio is under construction. We prefer to showcase real cases with concrete impact rather than filling this page with examples without context.',
      projects: [
        {
          title: 'Data migration for an SME',
          description: 'Example / coming soon: consolidation of historical data from spreadsheets and ERP into a structured store.',
          status: 'Example - Coming soon',
          tags: ['ETL', 'Migration', 'SQL']
        },
        {
          title: 'Simple dashboard for a sales team',
          description: 'Example / coming soon: web dashboard with key metrics, basic filters, and scheduled refreshes.',
          status: 'Example - Coming soon',
          tags: ['WebApp', 'Dashboard', 'BI']
        },
        {
          title: 'Integration API for an external provider',
          description: 'Example / coming soon: REST service to sync orders and status updates between systems.',
          status: 'Example - Coming soon',
          tags: ['API', 'Integration', 'Automation']
        }
      ]
    },
    contact: {
      title: 'Let us talk about your project',
      intro: 'Share your context and business goals. We will respond with an initial proposal and a clear delivery path.',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        submit: 'Send message',
        success: 'Message sent. We will reply soon.',
        error: 'Message could not be sent. Please try again in a few minutes.',
        requiredError: 'Please complete all required fields.',
        emailError: 'Please enter a valid email address.'
      }
    },
    common: {
      companyName: 'Arc Solutions',
      ctaContact: 'Schedule a call',
      footerTransparency: 'Transparent execution, your data under your control, and technical decisions aligned with business context.',
      rights: 'All rights reserved.'
    }
  }
};
