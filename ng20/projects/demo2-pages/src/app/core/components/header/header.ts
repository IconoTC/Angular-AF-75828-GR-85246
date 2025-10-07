import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-header',
  imports: [],
  template: `
    <header>
      <h1>{{ title() }}</h1>
      <p>Demo Angular 20 Zoneless con rutas</p>
      <p>Curso de Angular para Indra</p>
      <ng-content></ng-content>
    </header>
  `,
  styles: ``
})
export class Header {
protected readonly title = signal('Demo2 - Pages');
}
