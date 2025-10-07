import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sample } from "../sample/sample";
import { Counter } from "../counter/counter";

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Sample, Counter],
  template: `
    <h1>{{ title() }}</h1>
    <p>Demo Angular 20 Zoneless</p>
    <p>Curso de Angular para Indra</p>
    <ind-sample />
    <ind-counter />

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Demo1');
}
