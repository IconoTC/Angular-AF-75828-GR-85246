import { Component, inject } from '@angular/core';
import { Greetings } from './components/greetings/greetings';
import { CountersWrapper } from './components/counters-wrapper/counters-wrapper';
import { TasksStore } from '../tasks/services/tasks-store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ind-home-page',
  imports: [AsyncPipe, Greetings, CountersWrapper],
  template: `
    <h2>Home Page</h2>
    <ind-counters-wrapper />
    <ind-greetings />

    El numero de tareas es: {{ (tasksStore.getState().tasks$ | async)?.length || 0 }}
  `,
  styles: `
    ind-counter {
      display: block;
      padding: 16px;
      margin: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
    }
  `,
})
export class HomePage {
  tasksStore = inject(TasksStore);
}

export default HomePage;
