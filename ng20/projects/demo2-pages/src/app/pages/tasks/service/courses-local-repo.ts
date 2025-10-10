import { Injectable } from '@angular/core';
import { Repo } from '../../../core/types/repo';
import { Course, CourseDTO, ID } from '../model/course';
import { COURSES } from '../model/courses.data';

@Injectable({
  providedIn: 'root'
})
export class CoursesLocalRepo implements Repo<Course, CourseDTO>  {

  storeName = 'Courses';

  private generateId() {
    const currentIds = this.courses.map(c => c.id);
    return currentIds.length ? Math.max(...currentIds as number[]) + 1 : 1;
  }

  private courses: Course[] = localStorage.getItem(this.storeName) && localStorage.getItem(this.storeName) !== '[]'
    ? JSON.parse(localStorage.getItem(this.storeName)!)
    : COURSES;

  async getAll(): Promise<Course[]> {
    return [...this.courses];
  }

  async getById(id: ID): Promise<Course> {
    const course = this.courses.find(c => c.id === id);
    if (!course) throw new Error('Course not found');
    return { ...course };
  }

  async add(data: CourseDTO): Promise<Course> {
    const course: Course = { ...data, id: this.generateId() };
    this.courses.push(course);
    localStorage.setItem(this.storeName, JSON.stringify(this.courses));
    return { ...course };
  }

  async update(id: ID, data: CourseDTO): Promise<Course> {
    const idx = this.courses.findIndex(c => c.id === id);
    if (idx === -1) throw new Error('Course not found');
    const updated: Course = { ...this.courses[idx], ...data, id };
    this.courses[idx] = updated;
    localStorage.setItem(this.storeName, JSON.stringify(this.courses));
    return { ...updated };
  }

  async delete(id: ID): Promise<void> {
    const idx = this.courses.findIndex(c => c.id === id);
    if (idx === -1) throw new Error('Course not found');
    this.courses.splice(idx, 1);
    localStorage.setItem(this.storeName, JSON.stringify(this.courses));
  }
}
