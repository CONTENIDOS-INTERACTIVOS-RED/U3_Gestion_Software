export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Automatización y entrega continua',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Integración continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos de la Integración Continua (CI)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Herramientas de Integración Continua',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Automatización de tareas con CI',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pruebas automáticas en pipelines',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción a las pruebas automatizadas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Integración de pruebas en pipelines CI/CD',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Implementación de DevOps',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fundamentos y cultura DevOps',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Retos comunes y buenas prácticas en la adopción de DevOps',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Pongamos en práctica',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Smart, J. F. (2011). Jenkins: The Definitive Guide. Apress.  ',
      link: 'https://archive.org/details/jenkins',
    },
    {
      referencia:
        'Naik, P., & Naik, G. (2024). Mastering Jenkins Pipeline for Seamless Automation (From Development to Production). Shashwat Publication.  ',
      link:
        'https://www.researchgate.net/publication/382801641_Mastering_Jenkins_Pipeline_for_Seamless_Automation_From_Development_to_Production',
    },
    {
      referencia:
        'Guillamón Morales, A. (2013). Manual desarrollo de elementos software para gestión de sistemas: ( ed.). Editorial CEP, S.L.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50603',
    },
    {
      referencia:
        'Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511 ',
    },
    {
      referencia:
        'Agnostic IT. (2022, septiembre). Ebook DevOps: Fundamentos y buenas prácticas.  ',
      link:
        'https://www.agnosticit.com/wp-content/uploads/2022/09/Ebook-Devops.pdf',
    },
    {
      referencia:
        'Davis, J., & Daniels, K. (2016). Effective DevOps: Building a Culture of Collaboration, Affinity, and Tooling at Scale [PDF]. GitHub.  ',
      link:
        'https://github.com/ahmedamsaleh/Free-DevOps-Books-1/blob/master/book/Effective%20DevOps.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Automatización',
      significado:
        'proceso mediante el cual se ejecutan tareas sin intervención manual, utilizando scripts, herramientas o sistemas que permiten acelerar actividades repetitivas como pruebas, despliegues y compilaciones en el desarrollo de software.',
    },
    {
      termino: 'CI/CD (Integración Continua / Entrega Continua)',
      significado:
        'conjunto de prácticas que automatizan la integración y entrega de código. La integración continua (CI) permite combinar cambios en el código frecuentemente, mientras que la entrega continua (CD) automatiza el despliegue hacia entornos de prueba o producción.',
    },
    {
      termino: 'Contenedor',
      significado:
        'unidad estandarizada de software que empaqueta el código y sus dependencias, asegurando que la aplicación se ejecute de manera consistente en distintos entornos. Docker es una de las herramientas más comunes para contenedores.',
    },
    {
      termino: 'DevOps',
      significado:
        'cultura y conjunto de prácticas que integran el desarrollo (Dev) y las operaciones (Ops), promoviendo la colaboración, la automatización y la entrega continua para mejorar la calidad del software y reducir el tiempo de entrega.',
    },
    {
      termino: 'Docker',
      significado:
        'plataforma que permite construir, empaquetar y ejecutar aplicaciones dentro de contenedores. Facilita la portabilidad, escalabilidad y consistencia en entornos de desarrollo y producción.',
    },
    {
      termino: 'Entorno de prueba',
      significado:
        'ambiente controlado en el que se ejecutan pruebas automáticas para validar la funcionalidad, rendimiento o seguridad de una aplicación antes de su despliegue en producción.',
    },
    {
      termino: 'Integración continua (CI)',
      significado:
        'práctica que consiste en integrar los cambios de código de manera frecuente en un repositorio compartido, seguido por pruebas automáticas para detectar errores de forma temprana.',
    },
    {
      termino: 'Jenkins',
      significado:
        'herramienta de automatización de código abierto utilizada comúnmente para implementar pipelines de integración y entrega continua. Permite ejecutar tareas de compilación, prueba y despliegue automáticamente.',
    },
    {
      termino: 'Pipeline',
      significado:
        'flujo de trabajo automatizado que define las etapas necesarias para compilar, probar y desplegar una aplicación. Incluye pasos como construcción del código, ejecución de pruebas y despliegue en distintos entornos.',
    },
    {
      termino: 'Pruebas automatizadas',
      significado:
        'conjunto de pruebas programadas que se ejecutan sin intervención manual para verificar que el software funcione correctamente después de cada cambio en el código.',
    },
    {
      termino: 'Repositorio de código',
      significado:
        'lugar centralizado donde se almacena y gestiona el código fuente del proyecto. Git es el sistema de control de versiones más utilizado para administrar estos repositorios.',
    },
    {
      termino: 'SonarQube',
      significado:
        'herramienta de análisis estático de código que se integra en los pipelines de CI para evaluar la calidad del código fuente, detectar errores, vulnerabilidades y asegurar buenas prácticas de desarrollo.',
    },
  ],
}
