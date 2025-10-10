import { Component, input, output } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'ind-task-card',
  imports: [],
  template: `
    <div class="task-card">
      <h4>{{ task().title }}</h4>
      <p>Author: {{ task().author }}</p>
      <label>
        <input type="checkbox" [checked]="task().isCompleted" (change)="handleEventChange()" />
        <span>Is Completed:</span>
      </label>
      <div>
        <button (click)="handleEventDelete()">Borrar</button>
      </div>
    </div>
  `,
  styles: `
    .task-card {
      border: 1px solid black;
      margin: 4px;
      padding: 4px;
    }
  `,
})
export class TasksCard {
  task = input.required<Task>();
  eventDelete = output<Task>();
  eventChange = output<Task>();

  handleEventDelete() {
    this.eventDelete.emit(this.task());
  }

  handleEventChange() {
    this.task().isCompleted = !this.task().isCompleted;
    this.eventChange.emit(this.task());
  }
}
