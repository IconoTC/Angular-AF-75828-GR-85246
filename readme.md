# Angular 20

Duración: 30 horas
Modalidad: On-line
Fechas/Horario:

- Días 6, 7, 8, 9 y 10 Octubre 2025
- Horario 9:00 – 15:00 hs

Instructor: Alejandro Cerezo Lasne <alce65@hotmail.es>

Repositorio: https://github.com/IconoTC/Angular-AF-75828-GR-85246

## Día 1 (L-6): Introducción a Typescript y Angular

- Introducción a Angular y su ecosistema.
- Elementos básicos de TypeScript.

  - Tipos de datos. Inferencia y anotación de tipos.
  - Tipado de funciones.
  - Tipos personalizados. Interfaces y tipos.
  - Clases ES6 en TypeScript.
    - Modificadores de acceso.
    - Getters y Setters de ES.
    - Herencia.
    - Clases abstractas.
  - Promesas y genéricos

- [Descanso]

- Requisitos: Node.js y npm. Editor VSCode. Extensiones recomendadas.
- Instalación de Angular CLI.
- Creación de un nuevo workspace Angular sin proyecto. `ng new`
- Creación de un nuevo proyecto (app) Angular. `ng generate app`
- Estructura de un workspace/proyecto Angular.
- Añadiendo ESLint (`ng add`) y Prettier.
- Angular CLI: Comandos básicos.
  - Servidor de desarrollo: `ng serve`.
  - Testing con Karma y Jasmine: `ng test`.
  - Construcción del proyecto: `ng build`.
- Reconfiguración del testing con Jasmine sin karma (`ng g config karma`)
  - Configuración de Karma y Jasmine.
  - Coverage istambul
- Generación de componentes: `ng generate component <nombre>`.
  - Elementos de un componente: HTML, CSS, TypeScript.
  - Template y estilos inline o en ficheros.
- Guía de estilos actualizada

## Día 2 (M-7): Componentes y Rutas

- Componentes: estado. Zone v. Zoneless
- Estado en los componentes con ZoneJS.
  - Componente Counter. Estado y eventos.
  - Detección del cambio: Zone v. Zoneless
  - Signals y estado
  - Zoneless y asincronía: uso de Signals
- Scaffolding. Core y Features
  - Componentes (pages): Home, Tasks, About.
- Rutas básicas. `app.routes.ts`
  - Array de rutas.
  - Array de opciones de menu
  - RouterOutlet en AppComponent.
  - Navegación. Componente menu. @for
  - SPA: RouterLink y RouterLinkActive
- Rutas Lazy. Default import en las páginas

- [Descanso]

- Testing de componentes. Pruebas unitarias

  - Elementos de los test en Angular: TestBed, fixture, detectChanges()
  - Test de implementación v. test de comportamiento.
  - Tests para componentes básicos.

- Componentes.
  - Componente Counter. Condicionales @If. [class]
  - Componente Greeting. Input de usuario: data binding. [(ngModel)]
  - Componente Layout. Proyección de contenido
    - Componente Header.
    - Componente Footer.
- Pipes. Location "es"

- Testing de componentes (2)
  - Ajustar entorno en tests para componentes.

## Día 3 (X-8). Comunicaciones y Arquitectura de componentes. Formularios TD

- Testing de componentes (continuación)
  - Pruebas unitarias para componentes con eventos y data binding.
- Debugging
- Comunicación entre componentes

  - Input. Decoradores @Input. función input(). Drilling del título
  - Output. Decorador @Output. EventEmitter. Función output(). Eventos del contador
  - Agrupando contadores.
  - Contadores. Eventos con valor
  - Testing de componentes con comunicación.

- [Descanso]

- Arquitectura de componentes
  - Componentes de contenedores vs de presentación.
  - Componentes inteligentes vs tontos.
- Ejemplo: Notes List
  - Entidad Notes. Modelo y mock de datos asíncrono.
  - Componente Notes-List. Lógica del estado
  - Componente Notes-Item. Input y Output (Eventos)
  - Componente Notes-Create. Output (Eventos)
    - Forms Template Driven (TD)
    - NgForm implícito, NgModel. Referencias locales
    - viewChild(NgForm) y form.reset()
    - viewChild(Form), ElementRef.nativeElement y acceso al DOM

## Día 4 (J-9). Servicios. Providers e injectors. Formularios DD

- Tests de Forms TD
- Introducción a los servicios en Angular.
- Servicios y Providers. DI (Dependency Injection)

  - Provider root v. provider en un componente
  - Ejemplo con un servicio simple: DateService
  - Injector jerárquico. Servicios singleton y no singleton.

- Servicios y patrón Repository

  - Servicio InMemoryTaskRepository. Mock de datos.
  - Uso en los componentes. Inyección de dependencias.
  - Métodos CRUD. getAll() y getById()

- [Descanso]

- Servicios y patrón Repository (continuación)

  - Métodos CRUD. add(), update(), delete()
  - Uso de promesas
  - Repositorio y lógica de negocio (estado).Estrategias
  - Repositorio y persistencia local (localStorage).
  - Testing de servicios.
    - Tests del servicio
    - Testing de componentes con servicios (mocks y spies).

- Formularios reactivos (DD)
  - FormGroup, FormControl, FormBuilder

<!--  ## Día 5 (V-10). Servicios HTTP
- Formularios reactivos (review). Mensajes de validación
  - Validaciones síncronas y asíncronas.
  - Testing de formularios reactivos.

- Introducción a los servicios HTTP en Angular.ç
- Servicio fake basado en JSONServer.
  - Prueba con Postman
- Servicio HttpClientModule. Observables (RxJs).
  - Creación de un ApiRepositoryService.
  - Configuración del servicio HTTP: provider
  - Uso desde la feature Tasks.
- Servicios stateful: patrón Flux
  - Estado con RxJS: Subjects
  - Clonado de ToDo como ToDo-Flux
  - Uso del estado desde los componentes ToDo...
  - Uso desde cualquier parte de la aplicación.
  - Signals y estado
-->
