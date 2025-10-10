import { Component, inject, input  } from '@angular/core';
import { APP_TITLE } from '../app/app';

@Component({
  selector: 'ind-header',
  imports: [],
  template: `
    <header>
      <h1>{{ appTitle2() }}</h1>
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
  appTitle2 = inject(APP_TITLE);
  appTitle = input.required<string>();
}
