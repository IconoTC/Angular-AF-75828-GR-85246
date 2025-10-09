import { Component, inject, OnInit, signal } from '@angular/core';
import { CoursesForm } from '../courses-form/courses-form';
import { CoursesCard } from '../courses-card/courses-card';
import { Course, CourseDTO } from '../../model/course';
import { JsonPipe } from '@angular/common';
import { CoursesInMemoryRepo } from '../../service/courses-in-memory-repo';

@Component({
  selector: 'ind-courses-list',
  imports: [JsonPipe, CoursesForm, CoursesCard],
  template: `
    <h3>Courses List</h3>

    <details>
      <summary>Add Course</summary>
      <ind-courses-form (eventAdd)="handleAdd($event)" />
    </details>
    <div>
      @for (course of state.courses(); track course.id) {
        <ind-courses-card
          [course]="clone(course)"
          (eventDelete)="handleDelete($event)"
          (eventChange)="handleChange($event)"
        />
      }
    </div>

    @if (this.state.error()) {
      <div style="color: red">Error: {{ this.state.error() }}</div>
    }

    <hr />
    <pre>{{ state.courses() | json }}</pre>
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
  state = {
    courses: signal<Course[]>([]),
    error: signal<string | null>(null),
  };
  clone = (e: Course) => structuredClone(e);

  repo = inject(CoursesInMemoryRepo);

  ngOnInit() {
    this.handleLoad();
  }

  handleLoad() {
    this.repo
      .getAll()
      .then((courses) => {
        this.state.courses.set(courses);
      })
      .catch((error) => {
        console.error('Error loading courses:', error);
        this.state.error.set('Failed to load courses.');
      });
  }

  handleDelete(course: Course) {
    // Ejemplo usando set en lugar de update
    // const currentCourses = this.courses();
    // const newCourses = currentCourses.filter((n) => n.id !== course.id);
    // this.courses.set(newCourses);

    // Estrategia no optimista (e.g. un banco)
    // Repo ->  asincrona ???
    // Estado -> sincrona

    this.state.error.set(null);
    this.repo
      .delete(course.id)
      .then(() => {
        this.state.courses.update((currentCourses) =>
          currentCourses.filter((n) => n.id !== course.id),
        );
      })
      .catch((error) => {
        console.error('Error deleting course:', error);
        this.state.error.set('Failed to delete course.');
      });
  }

  handleChange(course: Course) {
    // Estrategia no optimista (e.g. un banco)
    // Repo ->  asincrona ???
    // Estado -> sincrona
    this.state.error.set(null);
    this.repo
      .update(course.id, course)
      .then((updatedCourse) => {
        this.state.courses.update((currentCourses) =>
          currentCourses.map((n) => (n.id === course.id ? updatedCourse : n)),
        );
      })
      .catch((error) => {
        console.error('Error updating course:', error);
        this.state.error.set('Failed to update course.');
      });
  }
  handleAdd(courseData: CourseDTO) {
    // Estrategia optimista (e.g. una red social)
    // Estado -> sincrona
    // Repo ->  asincrona ???

    // Estrategia no optimista (e.g. un banco)
    // Repo ->  asincrona ???
    // Estado -> sincrona
    this.state.error.set(null);
    this.repo
      .add(courseData)
      .then((newCourse) => {
        this.state.courses.update((currentCourses) => {
          return [...currentCourses, newCourse];
        });
      })
      .catch((error) => {
        console.error('Error adding course:', error);
        this.state.error.set('Failed to add course.');
      });
  }
}
