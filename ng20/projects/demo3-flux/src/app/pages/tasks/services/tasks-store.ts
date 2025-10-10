import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task, TaskDTO } from '../model/task';
import { TasksApiRepo } from './tasks-api-repo';

@Injectable({
  providedIn: 'root',
})
export class TasksStore {
  repo = inject(TasksApiRepo);

  private state = {
    tasks$: new BehaviorSubject<Task[]>([]),
    error$: new BehaviorSubject<string | null>(null),
  };

  public getState() {
    return {
      tasks$: this.state.tasks$.asObservable(),
      error$: this.state.error$.asObservable(),
    };
  }

  loadTasks(): void {
    this.repo.getAll().subscribe({
      next: (tasks) => {
        console.log('Tasks loaded:', tasks);
        this.state.tasks$.next(tasks);
      },
      error: (error) => {
        console.error('Error loading tasks:', error);
        this.state.error$.next(error.message);
      },
    });
  }

  addTasks(taskData: TaskDTO): void {
    //   // Estrategia optimista (e.g. una red social)
    //   // Estado -> sincrona
    //   // Repo ->  asincrona ???
    //   // Estrategia no optimista (e.g. un banco)
    //   // Repo ->  asincrona ???
    //   // Estado -> sincrona

    this.state.error$.next(null);

    this.repo.add(taskData).subscribe({
      next: (newTask) => {
        this.state.tasks$.next([...this.state.tasks$.getValue(), newTask]);
      },
      error: (error) => {
        console.error('Error adding task:', error);
        this.state.error$.next(error.message);
      },
    });
  }

  updateTasks(task: Task): void {
    //   // Estrategia no optimista (e.g. un banco)
    //   // Repo ->  asincrona ???
    //   // Estado -> sincrona
    this.state.error$.next(null);
    this.repo.update(task.id, task).subscribe({
      next: (updatedTask) => {
        this.state.tasks$.next(
          this.state.tasks$.getValue().map((n) => (n.id === task.id ? updatedTask : n)),
        );
      },
      error: (error) => {
        console.error('Error updating task:', error);
        this.state.error$.next(error.message);
      },
    });
  }

  deleteTasks(task: Task): void {
    //   // Estrategia no optimista (e.g. un banco)
    //   // Repo ->  asincrona ???
    //   // Estado -> sincrona
    this.state.error$.next(null);
    this.repo.delete(task.id).subscribe({
      next: () => {
        this.state.tasks$.next(this.state.tasks$.getValue().filter((n) => n.id !== task.id));
      },
      error: (error) => {
        console.error('Error deleting task:', error);
        this.state.error$.next(error.message);
      },
    });
  }
}
