import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "../counter/counter";

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Counter],
  template: `
    <h1>{{ title }}</h1>
    <p>Demo Angular 20 Zone</p>
    <p>Curso de Angular para Indra</p>
    <ind-counter />

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = 'Demo0-Zone';
}
