<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Pruebas automáticas en pipelines'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Las pruebas automatizadas en pipelines constituyen un componente esencial dentro del proceso de desarrollo moderno, al integrarse directamente en el flujo de integración y entrega continua (CI/CD). Estas pruebas permiten validar de forma inmediata cada cambio en el código, garantizando que el sistema conserve su estabilidad y funcionalidad sin intervención manual (Ortega Candel, 2018). Al ejecutarse automáticamente en cada etapa del pipeline (tras una compilación o antes de un despliegue), se acelera la detección de errores, se reducen riesgos y se mejora la calidad del software. En equipos ágiles y orientados a la automatización, su uso se traduce en mayor confianza, eficiencia y entregas más seguras.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Introducción a las pruebas automatizadas

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las pruebas automatizadas son fundamentales en el aseguramiento de calidad del software moderno. Su propósito es verificar el correcto funcionamiento del sistema mediante scripts o procedimientos predefinidos, eliminando la intervención manual y facilitando la detección temprana de errores (Ortega Candel, 2018).

        h2(data-aos="fade-left") ¿Qué son las pruebas automatizadas?
    
        .bg-color-1.p-5(data-aos="fade-left")
          p Una prueba automatizada es un conjunto de instrucciones programadas que validan si una porción del software se comporta como se espera, ejecutándose automáticamente dentro de un entorno controlado. Esto mejora la consistencia, velocidad y confiabilidad del proceso de prueba.
          p.mb-0 <b>Ejemplo</b>: validar automáticamente el cálculo de impuestos sobre una compra con distintos valores de entrada.
    
    h2(data-aos="fade-left") Características y clasificación de las pruebas automatizadas
    p.mb-5 A continuación, se presentan las principales ventajas de las pruebas automatizadas frente a las manuales, seguidas por los tipos más comunes según su alcance funcional:

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Ventajas frente a las pruebas manuales
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-3.text-center.text-white Pruebas automatizadas
            th.bg-color-3.text-center.text-white Pruebas manuales
        tbody.bg-color-10
          tr
            td Se ejecutan en segundos, incluso cientos de veces al día
            td Requieren tiempo y esfuerzo humano constante
          tr
            td Permiten mayor cobertura, incluso en escenarios repetitivos
            td Limitadas a lo que se puede hacer razonablemente de forma manual
          tr
            td Eliminan errores por omisión o interpretación
            td Mayor riesgo de inconsistencias y fallos humanos
          tr
            td Se integran fácilmente a flujos CI/CD
            td Generalmente se aplican al final, fuera del flujo automatizado

    h2(data-aos="fade-left") Tipos de pruebas automatizadas
    p.mb-5 Las pruebas automatizadas pueden clasificarse según el nivel del sistema que evalúan. Esta clasificación permite organizar las estrategias de validación en función de los objetivos específicos de cada fase del desarrollo:

    .bg-full-width.bg-color-7
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/3.svg" alt="" style="width: 90px")
              h5.text-center Pruebas unitarias
              p.mb-0.text-center Verifican funciones individuales. Ej.: validarCorreo() retorna true para correos válidos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Pruebas de integración
              p.mb-0.text-center Evalúan la interacción entre módulos. Ej.: API de pagos y servicio bancario externo.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Pruebas funcionales o de sistema
              p.mb-0.text-center Simulan el comportamiento del usuario. Ej.: flujo de inicio de sesión en una app web.
    
    h2(data-aos="fade-left").mb-5 Rol en entornos DevOps y CI/CD

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En contextos ágiles y DevOps, las pruebas automatizadas son indispensables. Su inclusión en los pipelines de integración y entrega continua garantiza que todo cambio pase por validaciones antes de ser desplegado (Guillamón Morales, 2013). Esto reduce errores en producción y permite entregas frecuentes y seguras.
    
        .bg-color-2.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Ejemplo: una empresa que despliega su software semanalmente puede configurar un pipeline en Jenkins que ejecute automáticamente todas las pruebas tras cada commit, antes de habilitar el paso a entornos de pruebas o producción.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Integración de pruebas en pipelines CI/CD
    
    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/8.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La integración de pruebas dentro de los pipelines de Integración Continua y Entrega Continua (CI/CD) es un pilar esencial en la automatización del ciclo de vida del desarrollo de software. Este enfoque permite detectar errores de forma temprana, validar continuamente la calidad del código y asegurar que cada entrega mantenga los estándares funcionales y de seguridad requeridos (Guillamón Morales, 2013).
    
    h2(data-aos="fade-left").mb-5 ¿Por qué integrar pruebas en un pipeline?

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Cuando un equipo colabora en el desarrollo de un sistema, cada cambio en el código representa un posible riesgo. Integrar pruebas automatizadas en el pipeline garantiza que, con cada confirmación (commit) o integración, el código pase automáticamente por un conjunto predefinido de pruebas. Esto protege la integridad del sistema, evitando que nuevas funcionalidades afecten lo ya construido.
    
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          p.mb-0 <b>Ejemplo</b>: al hacer un push a la rama principal en un repositorio Git, se activa automáticamente un pipeline que compila el código, ejecuta pruebas unitarias y valida que todo funcione correctamente antes del despliegue.

    h2(data-aos="fade-left") Tipos de pruebas en el pipeline
    p.mb-5 Las pruebas se integran en distintas etapas del pipeline, según su profundidad y objetivo. Esta segmentación permite una validación progresiva y más eficiente del sistema:

    .bg-full-width.bg-color-11.mb-5
      .p-4.p-md-5
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/10.png", alt="").mb-4.mb-lg-0
          .col-lg-8
        
            AcordionA(tipo="b")
              .div(titulo="Pruebas unitarias")
                p Validan funciones individuales desde las fases iniciales. Ejemplo: verificar que calcularIVA() devuelva el resultado esperado.
        
              .div(titulo="Pruebas de integración")
                p Comprueban la interacción correcta entre módulos. Ejemplo: confirmar que el módulo de autenticación se conecte con la base de datos.
        
              .div(titulo="Pruebas end-to-end (E2E)")
                p Simulan flujos completos del usuario en condiciones reales. Ejemplo: validar que un usuario pueda registrarse, iniciar sesión y completar una compra.
        
              .div(titulo="Pruebas de regresión")
                p Aseguran que nuevas funciones no alteren el comportamiento previo. Ejemplo: revalidar funciones existentes tras implementar una nueva característica.

        h2(data-aos="fade-left") Herramientas comunes para pruebas en CI/CD
        p.mb-5 Existen múltiples herramientas que permiten automatizar tanto la ejecución como el análisis de pruebas dentro del pipeline. Estas herramientas se dividen entre orquestadores de pipeline, frameworks de prueba y analizadores de calidad:

        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.text-white.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Orquestación del pipeline
                  p.mb-0 Jenkins, GitLab CI, GitHub Actions
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.text-white.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Frameworks de pruebas
                  p.mb-0 JUnit, PyTest, Mocha, Cypress, Selenium
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.text-white.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Análisis de calidad del código
                  p.mb-0 SonarQube

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        h2(data-aos="fade-left") Ejemplo en Jenkins:
        p.mb-5 Un script en Groovy puede configurar que las pruebas se ejecuten automáticamente antes de pasar al siguiente paso del pipeline (Aguilar, 2025. Pipeline [YAML], creado con VisualStudioCode).

    .titulo-figura.mb-4
      h5 Figura 3.
      span Ejemplo en Jenkins (script Groovy para pipeline):
    div.bg-color-5.p-4
      .row.justify-content-center.align-items-center
        .col-lg-6
          figure
            img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")

    figcaption.mt-2.text-center.mb-5 Aguilar, J. (2025). Pipeline [YAML]. Creado con VisualStudioCode

    .bg-full-width.bg-color-12
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.order-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/16.svg", data-aos="zoom-in")
          .col-lg-6.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left").mb-4 A continuación, se presenta un pódcast que expone los beneficios de integrar pruebas automatizadas en los procesos de CI/CD, así como las buenas prácticas clave para su implementación efectiva en entornos de desarrollo ágil.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    .bg-full-width.bg-color-9.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.text-white
            h2.mb-4(data-aos="flip-up") Automatización de pruebas en integración continua
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Automatización de pruebas en integración continua, donde se aborda el uso de herramientas, la gestión de resultados y las buenas prácticas para implementar pruebas automatizadas dentro de pipelines CI/CD.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Automatización de pruebas en integración continua.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/17.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/98547 " target="_blank" rel="noopener noreferrer") Omaña, M. (2012). Manufactura esbelta: una contribución para el desarrollo de software con calidad: ( ed.). Red Enlace. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.abstracta.us/blog/crear-pipeline-automatizacion-pruebas-integracion-entrega-continua/ " target="_blank" rel="noopener noreferrer") Abstracta. (2019, septiembre 6). Automatización de pruebas en CI/CD: ¿Cómo configurar el pipeline?. Abstracta. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=cHIuZp-iGow " target="_blank" rel="noopener noreferrer") Mesa, J.  (2020, 8 de diciembre). Ejecutando tests desde Jenkins Curso Rest Assured Parte 14. [Video]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
