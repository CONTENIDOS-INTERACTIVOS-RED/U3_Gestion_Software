<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Implementación de DevOps'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La implementación de DevOps implica una transformación tanto cultural como técnica dentro del desarrollo de <em>software</em>. Este enfoque busca integrar de forma continua los equipos de desarrollo (Dev) y operaciones (Ops) para optimizar la entrega de productos mediante la automatización, la colaboración constante y ciclos de despliegue más cortos. Gracias a herramientas como <em>pipelines</em> de integración continua y sistemas de monitoreo, DevOps permite un entorno ágil, resiliente y enfocado en la mejora continua (Agnostic IT, 2022).

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Fundamentos y cultura DevOps
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-5(data-aos="fade-left")
          p.mb-0 Más allá de una metodología técnica, DevOps representa un cambio de mentalidad en la forma en que los equipos construyen, entregan y mantienen <em>software</em>. A continuación, se describen sus orígenes, principios y prácticas fundamentales.
    
    h2(data-aos="fade-left") Origen y principios fundamentales
    p.mb-5 El movimiento DevOps surge como respuesta a los modelos tradicionales de desarrollo, caracterizados por la separación rígida entre desarrollo y operaciones, y por ciclos de entrega lentos y propensos a errores. En contraste, DevOps promueve la integración de roles y la agilidad en todo el ciclo de vida del <em>software</em>. Los principios esenciales de DevOps son:

    .bg-full-width.bg-color-7
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Colaboración entre equipos
                p.text-center Equipos multifuncionales que trabajan juntos desde el inicio hasta el mantenimiento.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Automatización de procesos
                p.text-center Reducción del trabajo manual en tareas repetitivas y críticas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Entrega continua de <em>software</em>
                p.text-center Implementación frecuente de cambios funcionales y confiables.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Medición y monitoreo constante
                p.text-center Seguimiento continuo de desempeño, errores y métricas clave.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Seguimiento continuo de desempeño, errores y métricas clave.
                p.text-center Iteración basada en el aprendizaje y la retroalimentación constante.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema3/3.png', alt='')
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estos principios permiten reducir el tiempo de entrega, mejorar la calidad y adaptarse rápidamente a las necesidades del mercado.

    h2(data-aos="fade-left").mb-5 Cambio cultural y mentalidad compartida

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Uno de los elementos distintivos de DevOps es la responsabilidad compartida entre desarrollo y operaciones. Se elimina la tradicional división de roles, y se asume que todos son responsables del rendimiento, la calidad y la estabilidad del <em>software</em>.
    
        .bg-color-6.p-5(data-aos="fade-left")
          p.mb-0 <b>Ejemplo</b>: En una organización DevOps, los errores en producción se analizan de manera conjunta en retrospectivas sin culpas, enfocadas en prevenir futuras incidencias (Davis & Daniels, 2016).
    
    h2(data-aos="fade-left").mb-5 Automatización como pilar operativo

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La automatización es clave para lograr eficiencia y confiabilidad. Todo proceso repetitivo o susceptible a errores debe automatizarse, desde el <em>build</em> y las pruebas, hasta el despliegue y el monitoreo.
        p.mb-5 Las herramientas comunes en DevOps son:
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b><em>Jenkins</em></b> - Automatización e integración continua
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b><em>Docker</em></b> - Contenerización de aplicaciones
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Terraform</b> - Infraestructura como código
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Prometheus y Grafana</b> - Monitoreo y visualización de métricas

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Automatizar permite tener entornos reproducibles y despliegues consistentes, reduciendo la intervención humana y los errores.
    
    h2(data-aos="fade-left").mb-5 Ciclo de vida DevOps: integración y entrega continua

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En DevOps, el ciclo de vida del <em>software</em> se concibe como un flujo continuo de colaboración y automatización, que abarca desde la planificación hasta la retroalimentación del usuario final.
    
        .bg-color-8.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/12-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Ejemplo práctico: un desarrollador hace un <em>commit</em> en Git. El pipeline de CI/CD lanza pruebas automáticamente. Si todo resulta exitoso, el cambio se despliega en pruebas y luego en producción sin intervención manual (Davis & Daniels, 2016).
    
    h2(data-aos="fade-left").mb-5 DevOps como cultura de mejora continua

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
      .col-lg-8.order-1
        p(data-aos="fade-left") Finalmente, DevOps es una filosofía de aprendizaje constante. Cada error, cada métrica y cada retroalimentación del usuario se convierte en una oportunidad de mejora.
    
        .bg-color-6.p-5(data-aos="fade-left")
          p.mb-0 Práctica recomendada: Realización de postmortems sin buscar culpables luego de incidentes. El objetivo es fortalecer los procesos y prevenir futuras fallas, no castigar a las personas (Davis & Daniels, 2016).
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.text-white
            h2.mb-4(data-aos="flip-up") Implementación de DevOps
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Implementación de DevOps, donde se aborda cómo integrar prácticas colaborativas, automatización y entrega continua para transformar el ciclo de vida del <em>software</em>.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Implementación de DevOps.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/14.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Retos comunes y buenas prácticas en la adopción de DevOps
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/15.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La adopción de DevOps en una organización implica una transformación profunda que va más allá de lo técnico: abarca cultura, procesos y herramientas. Si bien sus beneficios —como la entrega continua, la mejora en calidad y la reducción de errores— son ampliamente reconocidos, el camino hacia su implementación presenta obstáculos considerables. Identificar estos retos y aplicar buenas prácticas es clave para una integración exitosa (Davis & Daniels, 2016).
    
    h2(data-aos="fade-left") Retos comunes en la adopción de DevOps
    p.mb-5 La transición a un modelo DevOps puede verse obstaculizada por diversos factores. A continuación se presentan los desafíos más frecuentes y ejemplos que ilustran su impacto:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Resistencia al cambio organizacional")
            p.mb-0 Equipos acostumbrados al trabajo en silos pueden rechazar la colaboración. 
            p <b>Ejemplo</b>: Operaciones se opone a despliegues frecuentes por temor a inestabilidad.
 
          .div(titulo="Falta de habilidades y capacitación")
            p.mb-0 La ausencia de conocimientos técnicos retrasa la implementación. 
            p <b>Ejemplo</b>: Sin experiencia en <em>Jenkins</em> o <em>Docker</em>, se dificulta la automatización.

          .div(titulo="Integración de herramientas diversas")
            p.mb-0 La combinación sin planificación puede generar redundancia o conflictos. 
            p <b>Ejemplo</b>: <em>Jenkins</em> y ArgoCD duplican tareas si no se definen flujos claros.

          .div(titulo="Falta de métricas y retroalimentación")
            p.mb-0 Sin indicadores, no se puede medir el impacto ni mejorar procesos. 
            p <b>Ejemplo</b>: No se evalúa la frecuencia de despliegues o el tiempo de recuperación.
          .div(titulo="Problemas de escalabilidad")
            p.mb-0 Lo que funciona a pequeña escala puede fallar en grandes equipos si no hay estandarización. 
    
    h2(data-aos="fade-left") Buenas prácticas para una adopción exitosa de DevOps
    p.mb-5 Para superar los desafíos anteriores, se recomienda adoptar un enfoque gradual, estructurado y basado en la cultura de mejora continua. Estas son algunas estrategias clave:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-7
              h5 Promover una cultura colaborativa desde el liderazgo
              p El cambio comienza desde la alta dirección. Los líderes deben cultivar un ambiente de confianza, apertura al aprendizaje y responsabilidad compartida.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/18.png")
            .col-lg-7
              h5 Comenzar con proyectos piloto
              p Implementar cambios en entornos controlados permite identificar errores, medir beneficios y ajustar prácticas antes de una adopción generalizada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/19.png")
            .col-lg-7
              h5 Invertir en formación continua
              p Capacitar al equipo en herramientas y metodologías DevOps facilita una adopción sólida. Ejemplo: certificaciones en integración continua o uso de contenedores.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/20.png")
            .col-lg-7
              h5 Automatizar con enfoque progresivo
              p Se recomienda priorizar la automatización de tareas repetitivas y propensas a errores. Ejemplo: pruebas unitarias y análisis de código estático al hacer <em>commit</em>.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/21.png")
            .col-lg-7
              h5 Establecer indicadores y monitoreo continuo
              p Es clave medir aspectos como la frecuencia de despliegue, el tiempo medio de recuperación (MTTR) o el éxito de los <em>build</em>s para identificar avances y cuellos de botella.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La adopción de DevOps implica superar barreras técnicas y culturales. Sin embargo, con buenas prácticas como liderazgo activo, formación continua, automatización gradual y monitoreo efectivo, es posible transformar estos retos en oportunidades. Esta transformación incrementa la agilidad organizacional y fortalece la calidad del <em>software</em>, en consonancia con los principios fundamentales del enfoque DevOps (Agnostic IT, 2022).
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Pongamos en práctica
    
    p.mb-5 Esta sección presenta un recurso audiovisual centrado en el uso práctico de <em>Jenkins</em>, una herramienta esencial en la automatización de procesos dentro del desarrollo de <em>software</em>. El video guía al estudiante en los aspectos básicos de esta plataforma, como la instalación, configuración y utilización inicial, destacando su función como servidor de integración continua.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") <em>Jenkins</em> desempeña un rol clave en la orquestación de tareas repetitivas, tales como compilaciones, pruebas y despliegues automáticos. A través de ejemplos aplicados, el material muestra cómo construir <em>pipelines</em> que automatizan flujos de trabajo, lo cual incrementa la eficiencia del desarrollo y minimiza los errores humanos.
    
        .bg-color-8.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, se exploran conceptos fundamentales como el uso de jobs, instalación de plugins y la integración mediante scripts con repositorios de código, sistemas de control de versiones y plataformas de entrega continua. Esto permite al estudiante comprender cómo <em>Jenkins</em> se conecta con otras herramientas del ecosistema DevOps.
        p En conjunto, este recurso resulta fundamental para entender por qué <em>Jenkins</em> es un pilar en los entornos DevOps. Su dominio capacita al estudiante para implementar procesos consistentes, medibles y escalables en proyectos reales, fortaleciendo sus competencias en automatización y despliegue continuo a lo largo del ciclo de vida del <em>software</em>. 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511   " target="_blank" rel="noopener noreferrer") Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://lovtechnology.com/guia-paso-a-paso-para-la-implementacion-de-devops-en-el-desarrollo-de-<em>software</em>/ " target="_blank" rel="noopener noreferrer") Lov Technology. (2023, 20 septiembre). Guía paso a paso para la implementación de DevOps en el desarrollo de <em>software</em>. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=DVd2F196ymA " target="_blank" rel="noopener noreferrer") Kknowmad mood. (2023, 9 de octubre). DevOps Spain V (GitLab): El Camino hacia el Éxito en DevSecOps. [Video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el principal objetivo de la integración continua (CI)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Automatizar el diseño gráfico del software',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Implementar pruebas manuales al finalizar el proyecto',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Detectar errores rápidamente al integrar cambios frecuentes',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Optimizar el rendimiento del hardware del servidor',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué función cumplen las pruebas automáticas dentro de un pipeline de CI/CD?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verificar el rendimiento de los equipos de desarrollo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Validar automáticamente que el código funcione como se espera',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Organizar las tareas administrativas del proyecto',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Medir el tráfico de la red',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Cuál es una de las características esenciales de DevOps?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Separar estrictamente las funciones de desarrollo y operaciones',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Desplegar manualmente el software en producción',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Fomentar la colaboración entre equipos de desarrollo y operaciones',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Utilizar exclusivamente lenguajes de programación declarativos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué ventaja clave ofrece un pipeline de integración y entrega continua (CI/CD)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reduce el tiempo de las reuniones de equipo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Elimina la necesidad de documentar el código',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Acelera el tiempo de entrega con mayor calidad y menor riesgo',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Aumenta la dependencia del trabajo manual',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué herramienta podría usarse en un pipeline para automatizar pruebas de software?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Canva',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Jenkins',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Photoshop',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'WordPress',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
