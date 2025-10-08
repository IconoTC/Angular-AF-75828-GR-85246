import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from "../layout/layout";

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Layout],
  template: `
  <ind-layout [appTitle]="title()">
    <router-outlet />
  </ind-layout>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Demo2 - Pages');
}
