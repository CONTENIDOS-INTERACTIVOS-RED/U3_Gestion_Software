<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En la gestión moderna del desarrollo de <em>software</em>, la automatización de procesos y la entrega continua se han convertido en pilares fundamentales para lograr eficiencia, calidad y rapidez en los ciclos de entrega. Esta unidad introduce a los estudiantes en los principios y prácticas clave que permiten construir flujos de trabajo automatizados, desde la integración del código hasta su despliegue en ambientes de producción.
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/intro/2.svg" data-aos="zoom-in" style="max-width: 125px")
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La automatización no solo optimiza tareas repetitivas, sino que también reduce errores humanos y asegura que cada versión del <em>software</em> sea confiable. A través de la Integración Continua (CI), los equipos pueden validar constantemente los cambios realizados al código mediante pruebas automatizadas, mientras que con la entrega continua (CD) se garantiza que el <em>software</em> esté siempre listo para ser liberado. Además, se explora la implementación del enfoque DevOps, que promueve la colaboración entre desarrollo y operaciones para lograr una entrega de valor más ágil y eficiente.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El estudio de esta unidad es esencial porque proporciona herramientas y metodologías para transformar procesos manuales en flujos automáticos, lo que permite a los equipos responder con mayor rapidez a las demandas del mercado. Al finalizar la unidad, los estudiantes serán capaces de diseñar <em>pipelines</em> efectivos, integrar pruebas automáticas y aplicar buenas prácticas de DevOps dentro de un entorno de desarrollo profesional.

          

</template>
