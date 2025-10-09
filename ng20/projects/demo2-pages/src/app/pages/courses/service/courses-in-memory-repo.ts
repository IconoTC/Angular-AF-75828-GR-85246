import { Injectable } from '@angular/core';
import { Repo } from '../../../core/types/repo';
import { Course, CourseDTO, ID } from '../model/course';
import { COURSES } from '../model/courses.data';

@Injectable({
  providedIn: 'root'
})
export class CoursesInMemoryRepo implements Repo<Course, CourseDTO> {
  private courses: Course[] = COURSES;
  private nextId = 1;

  async getAll(): Promise<Course[]> {
    return [...this.courses];
  }

  async getById(id: ID): Promise<Course> {
    const course = this.courses.find(c => c.id === id);
    if (!course) {
      throw new Error(`Course with id ${id} not found.`);
    }
    return { ...course };
  }

  async add(data: CourseDTO): Promise<Course> {
    const course: Course = { ...data, id: this.nextId++ };
    this.courses.push(course);
    return { ...course };
  }

  async update(id: ID, data: CourseDTO): Promise<Course> {
    const index = this.courses.findIndex(c => c.id === id);
    if (index === -1) {
      throw new Error(`Course with id ${id} not found.`);
    }
    const updated: Course = { ...data, id };
    this.courses[index] = updated;
    return { ...updated };
  }

  async delete(id: ID): Promise<void> {
    const index = this.courses.findIndex(c => c.id === id);
    if (index === -1) {
      throw new Error(`Course with id ${id} not found.`);
    }
    this.courses.splice(index, 1);
  }
}
