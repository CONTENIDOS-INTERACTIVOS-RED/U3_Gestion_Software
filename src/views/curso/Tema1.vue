<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Integración continua'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La Integración Continua es una práctica esencial en el desarrollo ágil de <em>software</em> que promueve la integración frecuente del código por parte de los desarrolladores en un repositorio compartido. Cada integración se verifica automáticamente mediante la ejecución de pruebas y validaciones, lo que permite detectar errores de forma temprana y mantener la estabilidad del proyecto. Esta metodología reduce los conflictos al fusionar cambios, facilita la colaboración entre equipos y garantiza que el <em>software</em> esté en un estado funcional en todo momento, sirviendo como base sólida para una entrega continua eficiente (Naik & Naik, 2024).

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Fundamentos de la Integración Continua (CI)

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La Integración Continua (CI, por sus siglas en inglés) es una práctica central en la ingeniería moderna de <em>software</em> que busca mejorar la calidad del código y acelerar el proceso de desarrollo mediante la integración frecuente de pequeños cambios en un repositorio central. Esta metodología se apoya en herramientas automatizadas para compilar, probar y validar cada cambio realizado, lo que permite detectar errores de manera temprana y reducir significativamente los problemas de integración al final del ciclo de vida del <em>software</em>. 
    
    .titulo-figura.mb-4
      h5 Figura 1.
      span Integración continua
    div.bg-color-5.p-4
      .row.justify-content-center.align-items-center
        .col-lg-7
          figure
            img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")

    figcaption.mt-2.text-center.mb-5 Código en Casa. (2022, agosto). Integración continua [Imagen]. Código en Casa. 

    h2(data-aos="fade-left").mb-5 Concepto clave de la integración continua

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La integración continua implica que los desarrolladores incorporen sus cambios al repositorio principal varias veces al día. Cada vez que esto ocurre, se ejecuta de forma automática una serie de tareas: compilación del código, ejecución de pruebas unitarias, validaciones estáticas (como el análisis de estilo o cobertura de código) y generación de reportes (Naik & Naik, 2024). Su propósito es mantener el código en un estado funcional y verificable en todo momento, previniendo los conocidos “errores de integración” que solían surgir cuando los equipos acumulaban cambios durante días o semanas antes de unirlos.
    
        .bg-color-2.p-5(data-aos="fade-left")
          h4 Ejemplo:
          p En un equipo que desarrolla una aplicación web, cada vez que un programador incorpora una nueva funcionalidad al repositorio Git, <em>Jenkins</em> ejecuta automáticamente un pipeline que compila el proyecto, realiza las pruebas automatizadas y verifica que todo funcione correctamente. Si ocurre algún fallo, se detecta de inmediato, evitando que el error afecte al resto del sistema.
    
    h2(data-aos="fade-left").mb-5 Objetivos de la integración continua

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los objetivos principales de la integración continua son:
    
        .bg-color-6.p-5(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Detectar errores de forma temprana, ya que los fallos se identifican justo después de ser introducidos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mejorar la calidad del <em>software</em>, mediante pruebas automáticas constantes que validan la funcionalidad esperada.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Reducir el tiempo de entrega, al mantener el código siempre listo para ser desplegado.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Fomentar la colaboración, trabajando sobre una base de código común y sincronizada.

    h2(data-aos="fade-left") Elementos esenciales para aplicar integración continua
    p.mb-5 Para aplicar una estrategia sólida de integración continua, se requiere contar con varios elementos clave:


    .bg-full-width.bg-color-7
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/6.svg" alt="" style="width: 90px")
              h5.text-center Repositorio de versiones
              p.mb-0.text-center Sistema como Git que almacena el código fuente y sus modificaciones históricas.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/7.svg" alt="" style="width: 90px")
              h5.text-center Servidor de integración continua
              p.mb-0.text-center Herramienta como <em>Jenkins</em>, GitLab CI o CircleCI que automatiza tareas al detectar cambios.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/8.svg" alt="" style="width: 90px")
              h5.text-center Pruebas automatizadas
              p.mb-0.text-center Estrategia que incluye pruebas unitarias, de integración y validaciones estáticas.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/9.svg" alt="" style="width: 90px")
              h5.text-center Reglas de codificación
              p.mb-0.text-center Normas y revisiones que aseguran calidad y coherencia en el código del equipo.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            h5.mb-0 Ejemplo:
            p.mb-0 Un equipo que utiliza GitHub puede configurar flujos de trabajo con GitHub Actions para validar automáticamente el código cuando se crea una nueva rama o se genera un <em>pull requests</em>, garantizando el cumplimiento de los estándares del proyecto.

    h2(data-aos="fade-left").mb-5 Beneficios de adoptar integración continua

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Entre los principales beneficios se destacan:
    
        .bg-color-1.p-5(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mayor confiabilidad del sistema.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Disminución de errores en producción.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Registro automático del historial de cambios y del estado del sistema.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Incremento en la velocidad de desarrollo sin comprometer la calidad.

    h2(data-aos="fade-left").mb-5 Buenas prácticas en integración continua

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Para aprovechar al máximo esta estrategia, es fundamental aplicar una serie de recomendaciones que garanticen su funcionamiento óptimo:
    
        .bg-color-8.p-5(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Incorporar cambios pequeños y frecuentes.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Automatizar la mayor cantidad de tareas posible.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mantener un entorno de pruebas similar al de producción.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Configurar el sistema para que detenga el <em>build</em> si se detectan errores.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Enviar notificaciones automáticas al equipo en caso de fallos.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Herramientas de Integración Continua
    
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/13.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Las herramientas de integración continua (CI) son esenciales para la automatización en el desarrollo de <em>software</em> moderno (Smart, 2011). Estas plataformas permiten configurar, ejecutar y monitorear procesos automáticos que se activan cada vez que el código fuente se actualiza en el repositorio. Gracias a ellas, los equipos pueden compilar, probar y validar el código de forma inmediata y repetible, lo que contribuye a reducir errores y acelerar la entrega de soluciones funcionales.

    h2(data-aos="fade-left") Propósito y funciones de las herramientas de CI
    p.mb-5 Además de coordinar la integración del código, estas herramientas gestionan múltiples tareas complementarias:

    .bg-full-width.bg-color-7
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 01
                p.text-center Compilación del proyecto en diversos entornos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 02
                p.text-center Ejecución de pruebas automatizadas: unitarias, de integración y funcionales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 03
                p.text-center Análisis de calidad del código mediante linters o herramientas de cobertura.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 04
                p.text-center Despliegue continuo en entornos de prueba o producción.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 05
                p.text-center Generación automática de reportes.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/14.png', alt='')

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estas funciones permiten un monitoreo constante del estado del código, facilitando la detección temprana de errores y garantizando que las versiones más recientes estén siempre listas para su entrega.
    
    h2(data-aos="fade-left") Herramientas más utilizadas en entornos profesionales
    p.mb-5 A continuación, se presentan algunas de las herramientas más reconocidas en el ámbito de la integración continua:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/20.svg")
            .col-lg-7
              h5 <em>Jenkins</em>
              p Plataforma de código abierto que permite construir <em>pipelines</em> definidos como código (<em>Jenkins</em>file) e integrarse con Git, <em>Docker</em>, Maven, Gradle, entre otros. Ejemplo: en un equipo Java, <em>Jenkins</em> puede compilar con Maven, probar con JUnit y desplegar si todo es exitoso.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/21.svg")
            .col-lg-9
              h5 GitHub Actions
              p Integrada en GitHub, permite definir flujos de trabajo (<em>workflows</em>) mediante archivos YAML. Ideal para quienes ya usan GitHub como repositorio. Ejemplo: en Node.js, puede ejecutar pruebas con Jest y generar reportes automáticamente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/22.png")
            .col-lg-9
              h5 GitLab CI/CD
              p Herramienta nativa de GitLab. Ejecuta jobs definidos en .gitlab-ci.yml, sin requerir servidores adicionales. Soporta pruebas, despliegues y auditorías automatizadas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/23.svg")
            .col-lg-7
              h5 CircleCI
              p Destacada por su rapidez e integración con contenedores <em>Docker</em>. Permite configuraciones declarativas y un control detallado de entornos de ejecución.

    h2(data-aos="fade-left").mb-5 Ejecución de <em>pipelines</em> en CI

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Cada herramienta de CI ejecuta flujos de trabajo (<em>pipelines</em>) que siguen una secuencia definida de pasos. Un pipeline típico incluye:
    
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b><em>build</em></b>: compilar el proyecto.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Test</b>: ejecutar pruebas automatizadas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Lint</b>: validar la calidad del código.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Deploy</b>: desplegar la aplicación en un entorno de pruebas o producción.
        p Este proceso se ejecuta automáticamente cada vez que se detecta una modificación en el código, lo que garantiza entregas ágiles y controladas.
    
    h2(data-aos="fade-left").mb-5 Criterios para elegir una herramienta de CI

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Seleccionar la herramienta más adecuada depende de varios aspectos:
    
        .bg-color-6.p-5(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Lenguaje de programación y tipo de proyecto.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Nivel de experiencia del equipo en automatización.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Necesidades de personalización y escalabilidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Integración con otras herramientas como <em>Docker</em>, Kubernetes o servicios en la nube.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Costos, licencias disponibles y compatibilidad con plugins.
    
    h2(data-aos="fade-left") Beneficios al utilizar herramientas de CI
    p.mb-5 El uso de estas herramientas proporciona múltiples ventajas para los equipos de desarrollo:

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 01
                p.text-center Automatización confiable, reduciendo el trabajo manual y los errores humanos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 02
                p.text-center Retroalimentación rápida, al detectar fallos tan pronto como ocurren. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 03
                p.text-center Calidad constante, mediante pruebas y validaciones estandarizadas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 04
                p.text-center Despliegues más seguros, gracias a las verificaciones previas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 05
                p.text-center Mejor colaboración, al integrar con fluidez los aportes de todo el equipo.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/26.png', alt='')
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Automatización de tareas con CI
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/32.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La automatización de tareas mediante integración continua (CI) representa una transformación significativa en la forma en que los equipos de desarrollo gestionan sus procesos de construcción, validación y entrega de <em>software</em> (Smart, 2011). Actividades que antes eran manuales, repetitivas y susceptibles a errores humanos se convierten en flujos automáticos, previsibles y constantes que se ejecutan cada vez que se modifica el código fuente. Esta práctica no solo acelera el desarrollo, sino que también asegura una mayor calidad y coherencia en cada entrega.

    .titulo-figura.mb-4
      h5 Figura 2.
      span Diagrama de flujo de integración continua
    div.bg-color-5.p-4
      .row.justify-content-center.align-items-center
        .col-lg-7
          figure
            img(src="@/assets/curso/tema1/33.png", data-aos="zoom-in")

    figcaption.mt-2.text-center.mb-5 Guzmán, C. (2018, 5 de octubre). Diagrama de flujo de integración continua [Imagen].  

    h2(data-aos="fade-left").mb-5 Tareas que se automatizan con CI

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/34.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las herramientas de CI permiten automatizar múltiples actividades clave del ciclo de vida del <em>software</em>. Entre las más frecuentes se encuentran:
    
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Compilación del código fuente.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Ejecución de pruebas automatizadas: unitarias, de integración y funcionales..
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Análisis estático del código para revisar su calidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Empaquetado de artefactos para despliegue.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Notificaciones automáticas por correo electrónico o chat en caso de fallos o finalización.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Despliegue automático hacia entornos de pruebas o producción.
    
    h2(data-aos="fade-left") Ventajas clave de la automatización
    p.mb-5 Automatizar tareas con CI aporta beneficios concretos al flujo de desarrollo:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/35.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="2%" y="18.5%" numero="+")
                h5 Rapidez en la entrega
                p La automatización reduce pasos manuales, lo que acorta los ciclos de desarrollo.
    
              .bg-color-white.box-shadow.p-3(x="10%" y="37%" numero="+")
                h5 Mayor calidad
                p Las pruebas continuas permiten identificar errores de forma temprana y mantener estándares técnicos.
    
              .bg-color-white.box-shadow.p-3(x="64%" y="71%" numero="+")
                h5 Consistencia en procesos
                p Todos los cambios siguen las mismas etapas, evitando diferencias por prácticas individuales.
    
              .bg-color-white.box-shadow.p-3(x="72%" y="48%" numero="+")
                h5 Retroalimentación rápida
                p Los errores se detectan en minutos, lo que facilita la colaboración y agiliza la solución de problemas.
    
    h2(data-aos="fade-left").mb-5 Ejemplo práctico: flujo automatizado con <em>Jenkins</em>

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/36.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Un proyecto en Java que emplea GitHub como repositorio y <em>Jenkins</em> como servidor de CI puede tener el siguiente flujo automatizado:
    
        .bg-color-6.p-5(data-aos="fade-left").mb-3
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Clonar el repositorio.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Compilar el proyecto con Maven.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Ejecutar pruebas con JUnit.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Analizar la calidad del código mediante SonarQube.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Empaquetar el archivo .jar.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Si todo resulta exitoso, desplegar el artefacto en un servidor de pruebas.
        p Todo esto ocurre de forma automática, en pocos minutos, y con reportes disponibles para todo el equipo sin intervención manual.

    h2(data-aos="fade-left") Automatización de tareas personalizadas
    p.mb-5 Además de las tareas estándar, las herramientas de CI permiten definir acciones específicas según los requerimientos del proyecto (Smart, 2011). Algunos ejemplos son:


    .bg-full-width.bg-color-7
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/37.svg" alt="" style="width: 90px")
              h5.text-center 01
              p.mb-0.text-center Ejecutar scripts de migración de bases de datos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/38.svg" alt="" style="width: 90px")
              h5.text-center 02
              p.mb-0.text-center Limpiar archivos temporales al finalizar una compilación.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/39.svg" alt="" style="width: 90px")
              h5.text-center 03
              p.mb-0.text-center Generar documentación técnica automáticamente con cada nueva versión.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/40.svg" alt="" style="width: 90px")
              h5.text-center 04
              p.mb-0.text-center Validar reglas de seguridad antes del despliegue.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estas tareas se configuran en archivos como <em>Jenkins</em>file o .gitlab-ci.yml, usando lenguajes declarativos.

    h2(data-aos="fade-left").mb-5 Integración con otras herramientas

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/41.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La automatización en CI se potencia al conectarse con herramientas adicionales como:
    
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b><em>Docker</em></b>: para generar imágenes de contenedores.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Kubernetes</b>: para orquestar despliegues automáticos de microservicios.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Slack o Microsoft Teams</b>: para enviar notificaciones al equipo en tiempo real.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Selenium o Cypress</b>: para ejecutar pruebas automatizadas de interfaces gráficas.
        p La automatización mediante integración continua no es solo una mejora operativa, sino una estrategia central para garantizar la escalabilidad, confiabilidad y sostenibilidad de los proyectos. Al eliminar tareas repetitivas y estandarizar las validaciones, los equipos optimizan su tiempo y mejoran la calidad del <em>software</em> entregado. Este enfoque transforma el desarrollo en un proceso ágil, en el que cada cambio se puede validar y desplegar sin fricción (Naik & Naik, 2024).

    .bg-full-width.bg-color-9.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.text-white
            h2.mb-4(data-aos="flip-up") Automatización con integración continua
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Automatización con integración continua, donde se aborda cómo la integración continua (CI) y la automatización transforman los procesos de desarrollo de <em>software</em> en entornos ágiles.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Automatización con integración continua.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/42.png', alt='')





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.raatti.net/~raatti/books/devops/pdf/learningcontinuousintegrationwith<em>Jenkins</em>.pdf " target="_blank" rel="noopener noreferrer") Pathania, N. (2024). Learning Continuous Integration with <em>Jenkins</em> (3.ª ed.). Packt Publishing. Retrieved from 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://pablogarciajc.com/blog/ci-cd-integracion-entrega-continua-desarrollo-<em>software</em>/" target="_blank" rel="noopener noreferrer") García, P. (s. f.). CI/CD: Integración y entrega continua en el desarrollo de <em>software</em>.  

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Vyv66x7XRmU " target="_blank" rel="noopener noreferrer") KeepCoding - Tech School. (2022, 4 de mayo). ¿Qué es la integración continua o CI?. [Video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
