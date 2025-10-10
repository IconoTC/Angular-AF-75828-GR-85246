import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TasksApiRepo } from '../../services/tasks-api-repo';
import { TasksStore } from '../../services/tasks-store';
import { TasksForm } from '../tasks-form/tasks-form';
import { TasksCard } from '../tasks-card/tasks-card';

@Component({
  selector: 'ind-tasks-list',
  imports: [JsonPipe, AsyncPipe, TasksForm, TasksCard],
  template: `
    @let tasks = state.getState().tasks$ | async;
    @let error = state.getState().error$ | async;

    <h3>Tasks List</h3>

    <details>
      <summary>Add Task</summary>
      <ind-tasks-form />
    </details>
    <div>
      @for (task of tasks; track task.id) {
        <ind-task-card [task]="clone(task)" />
      }
    </div>

    @if (error) {
      <div class="error">Error: {{ error }}</div>
    }

    <hr />
    <pre>{{ tasks | json }}</pre>
  `,
  styles: `
    div {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 4px;
    }
    .error {
      color: red;
    }
  `,
})
export class TasksList implements OnInit {
  clone = (e: Task) => structuredClone(e);
  repo = inject(TasksApiRepo);
  state = inject(TasksStore);

  ngOnInit() {
    this.state.getState().tasks$.subscribe((tasks) => tasks.length === 0 && this.state.loadTasks());
  }
}
