import { Component, ElementRef, OnInit, output, viewChild } from '@angular/core';
import { CourseDTO } from '../../model/course';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ind-courses-form',
  imports: [FormsModule, JsonPipe],
  template: `
    <h4>Courses Form</h4>

    <form (ngSubmit)="handleEventAdd(courseForm.value)" #courseForm="ngForm" #form>
      <label>
        Title:
        <input type="text" name="title" ngModel required />
      </label>
      <label>
        Author:
        <input type="text" name="author" ngModel required />
      </label>
      <button type="submit" [disabled]="courseForm.invalid">Add Course</button>
    </form>

    <pre>{{ courseForm.value | json }}</pre>
  `,
  styles: `
    label {
      display: block;
      margin-bottom: 8px;
    }
  `,
})
export class CoursesForm implements OnInit {
  eventAdd = output<CourseDTO>();

  // Usado en versiones anteriores
  // @ViewChild('courseForm', { static: true }) courseForm!: NgForm;

  courseNgForm = viewChild<NgForm>('courseForm');
  courseForm = viewChild<ElementRef<HTMLFormElement>>('form');

  ngOnInit() {
    console.log('CoursesForm onInit');
    console.log(this.courseNgForm());
    console.log(this.courseForm());
  }

  handleEventAdd(data: CourseDTO) {
    data.isCompleted = false;
    this.eventAdd.emit(data);
    this.courseNgForm()!.resetForm();

    // Mala practica usar querySelector
    // Mejor usar ViewChild
    // document.querySelector('details') as HTMLDetailsElement;

    (
      this.courseForm()!.nativeElement.parentElement?.parentElement as HTMLDetailsElement
    ).removeAttribute('open');
  }
}
