import { Component, inject, OnInit, signal } from '@angular/core';
import { TasksForm } from '../tasks-form/tasks-form';
import { TasksCard } from '../tasks-card/tasks-card';
import { Task, TaskDTO } from '../../model/task';
import { JsonPipe } from '@angular/common';
import { TasksApiRepo } from '../../services/tasks-api-repo';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ind-tasks-list',
  imports: [JsonPipe, TasksForm, TasksCard],
  template: `
    <h3>Tasks List</h3>

    <details>
      <summary>Add Task</summary>
      <ind-tasks-form (eventAdd)="handleAdd($event)" />
    </details>
    <div>
      @for (task of state.tasks(); track task.id) {
        <ind-task-card
          [task]="clone(task)"
          (eventDelete)="handleDelete($event)"
          (eventChange)="handleChange($event)"
        />
      }
    </div>

    @if (this.state.error()) {
      <div class="error">Error: {{ this.state.error() }}</div>
    }

    <hr />
    <pre>{{ state.tasks() | json }}</pre>
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
  state = {
    tasks: signal<Task[]>([]),
    error: signal<string | null>(null),
  };
  clone = (e: Task) => structuredClone(e);

  repo = inject(TasksApiRepo);

  ngOnInit() {
    this.handleLoad();
  }

  handleLoad() {
    this.repo.getAll().subscribe({
      next: (tasks) => {
        this.state.tasks.set(tasks);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error loading tasks:', error);
        // this.state.error.set('Failed to load tasks.');
        this.state.error.set(error.message);
      },
    });
  }

  handleDelete(task: Task) {
    // Estrategia no optimista (e.g. un banco)
    // Repo ->  asincrona ???
    // Estado -> sincrona

    this.state.error.set(null);
    this.repo.delete(task.id).subscribe({
      next: () => {
        this.state.tasks.set(this.state.tasks().filter((n) => n.id !== task.id));
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error deleting task:', error);
        this.state.error.set('Failed to delete task.');
      },
    });
  }

  handleChange(task: Task) {
    // Estrategia no optimista (e.g. un banco)
    // Repo ->  asincrona ???
    // Estado -> sincrona
    this.state.error.set(null);
    this.repo.update(task.id, task).subscribe({
      next: (updatedTask) => {
        this.state.tasks.set(this.state.tasks().map((n) => (n.id === task.id ? updatedTask : n)));
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error updating task:', error);
        this.state.error.set('Failed to update task.');
      },
    });
  }
  handleAdd(taskData: TaskDTO) {
    // Estrategia optimista (e.g. una red social)
    // Estado -> sincrona
    // Repo ->  asincrona ???
    // Estrategia no optimista (e.g. un banco)
    // Repo ->  asincrona ???
    // Estado -> sincrona
    this.state.error.set(null);
    this.repo.add(taskData).subscribe({
      next: (newTask) => {
        this.state.tasks.set([...this.state.tasks(), newTask]);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error adding task:', error);
        this.state.error.set('Failed to add task.');
      },
    });
  }
}
