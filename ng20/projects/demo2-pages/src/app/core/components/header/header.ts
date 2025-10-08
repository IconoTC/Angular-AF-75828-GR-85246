import { Component, input  } from '@angular/core';

@Component({
  selector: 'ind-header',
  imports: [],
  template: `
    <header>
      <h1>{{ appTitle() }}</h1>
      <p>Demo Angular 20 Zoneless con rutas</p>
      <p>Curso de Angular para Indra</p>
      <ng-content></ng-content>
    </header>
  `,
  styles: ``
})
export class Header {
  // Versiones anteriores de Angular
  // @Input({
  //   required: true
  // }) appTitle!: WritableSignal<string>;
  appTitle = input.required<string>();
}
