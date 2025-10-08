import { Component, computed, signal } from '@angular/core';
import { Counter } from '../counter/counter';
import { EventCount } from '../../types/event-count';

@Component({
  selector: 'ind-counters-wrapper',
  imports: [Counter],
  template: `
    <h3>Counters Wrapper</h3>
    <p>Total Clicks: {{ totalClicks() }}</p>
    <p>Total Value: {{ totalValue() }}</p>
    <ind-counter (eventCount)="handleAddClick($event)" [id]="1" />
    <ind-counter (eventCount)="handleAddClick($event)" [id]="2" />
    <ind-counter (eventCount)="handleAddClick($event)" [id]="3" />
  `,
  styles: `
    :host {
      display: block;
      border: 2px solid gray;
      padding: 16px;
      margin: 16px 0;
      background-color: #eef;
    }
  `,
})
export class CountersWrapper {
  totalClicks = signal(0);

  counters = [signal(0), signal(0), signal(0)];
  totalValue = computed(() =>
    this.counters.reduce((acc, counter) => acc + counter(), 0));



  handleAddClick({ id, value }: EventCount) {
    if (!id) return;
    this.totalClicks.update((value) => value + 1);
    this.counters[id - 1].set(value);
  }
}
