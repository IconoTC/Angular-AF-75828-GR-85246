import { Component, OnInit, signal } from '@angular/core';
import { CoursesForm } from '../courses-form/courses-form';
import { CoursesCard } from '../courses-card/courses-card';
import { Course, CourseDTO } from '../../model/course';
import { getCoursesAsync } from '../../model/courses.data';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ind-courses-list',
  imports: [JsonPipe, CoursesForm, CoursesCard],
  template: `
    <h3>Courses List</h3>

    <details>
      <summary>Add Course</summary>
      <ind-courses-form (eventAdd)="handleAdd($event)"/>
    </details>
    <div>
      @for (course of courses(); track course.id) {
        <ind-courses-card [course]="clone(course)" (eventDelete)="handleDelete($event)" (eventChange)="handleChange($event)"/>
      }
    </div>

    <hr />
    <pre>{{ courses() | json }}</pre>
  `,
  styles: `
    div {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 4px;
    }
  `,
})
export class CoursesList implements OnInit {
  courses = signal<Course[]>([]);
  clone = (e: Course) => structuredClone(e);

  ngOnInit() {
    getCoursesAsync().then((courses) => {
      this.courses.set(courses);

    });
  }

  handleDelete(course: Course) {

    // Ejemplo usando set en lugar de update
    // const currentCourses = this.courses();
    // const newCourses = currentCourses.filter((n) => n.id !== course.id);
    // this.courses.set(newCourses);

    this.courses.update((currentCourses) =>
      currentCourses.filter((n) => n.id !== course.id)
    );
  }

  handleChange(course: Course) {
    this.courses.update((currentCourses) =>
      currentCourses.map((n) => (n.id === course.id ? course : n))
    );
  }
  handleAdd(course: CourseDTO) {
    this.courses.update((currentCourses) => {
      const newCourse = { ...course, id: Date.now() };
      return [...currentCourses, newCourse];
    });
  }
}
