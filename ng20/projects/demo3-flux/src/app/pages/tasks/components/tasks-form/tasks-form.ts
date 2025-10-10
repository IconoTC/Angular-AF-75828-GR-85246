import { Component, ElementRef, inject, OnInit,  viewChild } from '@angular/core';
import { TaskDTO } from '../../model/task';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { TasksStore } from '../../services/tasks-store';

@Component({
  selector: 'ind-tasks-form',
  imports: [FormsModule, JsonPipe],
  template: `
    <h4>Tasks Form</h4>

    <form (ngSubmit)="handleEventAdd(taskForm.value)" #taskForm="ngForm" #form>
      <label>
        Title:
        <input type="text" name="title" ngModel required />
      </label>
      <label>
        Author:
        <input type="text" name="author" ngModel required />
      </label>
      <button type="submit" [disabled]="taskForm.invalid">Add Task</button>
    </form>

    <pre>{{ taskForm.value | json }}</pre>
  `,
  styles: `
    label {
      display: block;
      margin-bottom: 8px;
    }
  `,
})
export class TasksForm implements OnInit {
  state = inject(TasksStore);

  // Usado en versiones anteriores
  // @ViewChild('taskForm', { static: true }) taskForm!: NgForm;

  taskNgForm = viewChild<NgForm>('taskForm');
  taskForm = viewChild<ElementRef<HTMLFormElement>>('form');

  ngOnInit() {
    console.log('TasksForm onInit');
    console.log(this.taskNgForm());
    console.log(this.taskForm());
  }

  handleEventAdd(data: TaskDTO) {
    data.isCompleted = false;
    this.state.addTasks(data);


    this.taskNgForm()!.resetForm();

    // Mala practica usar querySelector
    // Mejor usar ViewChild
    // document.querySelector('details') as HTMLDetailsElement;

    (
      this.taskForm()!.nativeElement.parentElement?.parentElement as HTMLDetailsElement
    ).removeAttribute('open');
  }
}
