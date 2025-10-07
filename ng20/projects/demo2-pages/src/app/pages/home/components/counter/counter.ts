import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-counter',
  imports: [],
  template: `
    <h3>Counter Component</h3>
    <button (click)="handleChange(-1, $event)" [disabled]="counter() <= -5">➖</button>
    <span [class]="{'negative': counter() < 0}">{{ counter() }}</span>
    <!-- <span [ngClass]="{'negative': counter() < 0}">{{ counter() }}</span> -->
    <button (click)="handleChange(1, $event)" [disabled]="counter() >= 5">➕</button>

    @if (counter() <= -5) {
      <p>Has llegado al valor mínimo!</p>
    }
    @if (counter() >= 5) {
      <p>Has llegado al valor máximo!</p>
    }

  `,
  styles: `
    span {
      font-weight: bold;
      font-size: 1.5rem;
      padding: 0 1rem;
    }
    .negative {
      color: red;
    }
  `,
})
export class Counter {
  protected counter = signal(0);

  protected handleChange(delta: number, event: Event) {
    this.counter.update((value) => value + delta);
    console.log(this.counter());
    console.log(event);
  }
}
