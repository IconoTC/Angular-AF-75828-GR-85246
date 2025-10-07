import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-counter',
  imports: [],
  template: `
    <h2>Counter Component</h2>
    <button (click)="handleChange(-1, $event)">➖</button>
    <span>{{ counter() }}</span>
    <button (click)="handleChange(1, $event)">➕</button>
  `,
  styles: `
    span {
      font-weight: bold;
      font-size: 1.5rem;
      padding: 0 1rem;
    }
  `,
})
export class Counter {
  protected counter = signal(0);

  protected handleChange(delta: number, event: Event) {
    setTimeout(() => {
      this.counter.update((value) => value + delta);
      console.log(this.counter());
    }, 1000);
    console.log(event);
  }
}
