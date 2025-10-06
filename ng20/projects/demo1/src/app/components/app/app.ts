import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet],
  template: `
    <h1>{{ title() }}</h1>
    <p>Demo Angular 20 Zoneless</p>
    <p>Curso de Angular para Indra</p>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Demo1');
}
