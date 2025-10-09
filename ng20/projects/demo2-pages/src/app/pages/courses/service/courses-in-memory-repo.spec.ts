import { TestBed } from '@angular/core/testing';

import { CoursesInMemoryRepo } from './courses-in-memory-repo';
import { provideZonelessChangeDetection } from '@angular/core';
import { CourseDTO } from '../model/course';
import { COURSES } from '../model/courses.data';

describe('CoursesInMemoryRepo', () => {
  let service: CoursesInMemoryRepo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        CoursesInMemoryRepo
      ]
    });

    service = TestBed.inject(CoursesInMemoryRepo);
    service['courses'] = [...COURSES];
  });

  it('should be created', () => {
    expect(service).toBeInstanceOf(CoursesInMemoryRepo);
  });

  it('should get all courses', async () => {
    const courses = await service.getAll();
    expect(courses.length).toBe(2);
  });

  it('should get course by id', async () => {
    const course = await service.getById(1);
    expect(course).toBeDefined();
    expect(course.id).toBe(1);
  });

  it('should not get course by invalid id', async () => {
   await expectAsync(service.getById(999)).toBeRejectedWithError('Course with id 999 not found.');
  });

  it('should add a new course', async () => {
    const mockCourse: CourseDTO = {
      title: 'New Course',
    } as CourseDTO;
    const newCourse = await service.add(mockCourse);
    expect(newCourse).toBeDefined();
    expect(newCourse.title).toBe('New Course');
  });

  it('should update a course', async () => {
    const mockCourse: CourseDTO = {
      title: 'Updated Course',
    } as CourseDTO;
    const updatedCourse = await service.update(1, mockCourse);
    expect(updatedCourse).toBeDefined();
    expect(updatedCourse.title).toBe('Updated Course');
  });

  it('should not update a course with invalid id', async () => {
    const mockCourse: CourseDTO = {
      title: 'Updated Course',
    } as CourseDTO;
    await expectAsync(service.update(999, mockCourse)).toBeRejectedWithError('Course with id 999 not found.');
  });

  it('should delete a course', async () => {

    await service.delete(1);
    const courses = await service.getAll();
    expect(courses.length).toBe(1);
  });

  it('should not delete a course with invalid id', async () => {
    await expectAsync(service.delete(999)).toBeRejectedWithError('Course with id 999 not found.');
  });
});
