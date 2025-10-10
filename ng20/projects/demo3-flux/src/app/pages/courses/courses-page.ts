import { Component } from '@angular/core';
import { CoursesList } from './components/courses-list/courses-list';

@Component({
  selector: 'ind-courses-page',
  imports: [CoursesList],

  template: `
    <h2>Courses Page</h2>
    <ind-courses-list />
  `,
  styles: ``,
})
export class CoursesPage {}

export default CoursesPage;
