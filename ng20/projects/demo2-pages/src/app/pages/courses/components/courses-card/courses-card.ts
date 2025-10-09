import { Component, input, output } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'ind-courses-card',
  imports: [],
  template: `
    <div class="course-card">
      <h4>{{ course().title }}</h4>
      <p>Author: {{ course().author }}</p>
      <label>
        <input type="checkbox" [checked]="course().isCompleted" (change)="handleEventChange()" />
        <span>Is Completed:</span>
      </label>
      <div>
        <button (click)="handleEventDelete()">Borrar</button>
      </div>
    </div>
  `,
  styles: `
    .course-card {
      border: 1px solid black;
      margin: 4px;
      padding: 4px;
    }
  `,
})
export class CoursesCard {
  course = input.required<Course>();
  eventDelete = output<Course>();
  eventChange = output<Course>();

  handleEventDelete() {
    this.eventDelete.emit(this.course());
  }

  handleEventChange() {
    this.course().isCompleted = !this.course().isCompleted;
    this.eventChange.emit(this.course());
  }
}
