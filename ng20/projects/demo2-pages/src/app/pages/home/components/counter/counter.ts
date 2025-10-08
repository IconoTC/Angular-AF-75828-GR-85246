import { Component, input, output, signal } from '@angular/core';
import { EventCount } from '../../types/event-count';



@Component({
  selector: 'ind-counter',
  imports: [],
  template: `
    <h3>Counter {{ id() }}</h3>
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

  // En versiones previas de Angular
  // @Output() addClick = new EventEmitter<void>();

  eventCount = output<EventCount>()
  id = input<number | null>(null);

  protected counter = signal(0);

  protected handleChange(delta: number, event: Event) {
    this.counter.update((value) => value + delta);
    this.eventCount.emit({ id: this.id(), value: this.counter() });
    console.log(this.counter());
    console.log(event);
  }
}
