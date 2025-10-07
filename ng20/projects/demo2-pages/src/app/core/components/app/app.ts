import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Menu],
  template: `
    <h1>{{ title() }}</h1>
    <p>Demo Angular 20 Zoneless con rutas</p>
    <p>Curso de Angular para Indra</p>

    <ind-menu />
    <hr />

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Demo2 - Pages');
}
