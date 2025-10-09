import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesList } from './courses-list';
import { provideZonelessChangeDetection } from '@angular/core';
import { Course, CourseDTO } from '../../model/course';
import { By } from '@angular/platform-browser';
import { CoursesForm } from '../courses-form/courses-form';
import { CoursesInMemoryRepo } from '../../service/courses-in-memory-repo';
import { COURSES } from '../../model/courses.data';

fdescribe('CoursesList', () => {
  let component: CoursesList;
  let fixture: ComponentFixture<CoursesList>;
  let service: CoursesInMemoryRepo;

  const mockCoursesInMemoryRepo: CoursesInMemoryRepo = jasmine.createSpyObj(
    'CoursesInMemoryRepo',
    {
      getAll: Promise.resolve([...COURSES]),
      add: Promise.resolve(),
      delete: Promise.resolve(),
      change: Promise.resolve(),
    },
    {
      data: [...COURSES],
    },
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesList],
      providers: [
        provideZonelessChangeDetection(),
        { provide: CoursesInMemoryRepo, useValue: mockCoursesInMemoryRepo },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesList);
    component = fixture.componentInstance;
    service = TestBed.inject(CoursesInMemoryRepo);
    fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of courses', async () => {
    const element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(service.getAll).toHaveBeenCalled();
    expect(component.state.courses().length).toBe(2);
    expect(element.querySelectorAll('ind-courses-card').length).toBe(2);
  });

  it('should add a course when the listener is triggered', async () => {
    const courseData: CourseDTO = {
      title: 'Coursea 3',
      author: 'Autor 3',
      isCompleted: false,
    };

    const newCourse: Course = {
      ...courseData,
      id: 3,
    };

    (service.add as jasmine.Spy).and.resolveTo(newCourse);

    // const element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();

    // Usar la implementacion
    // component.handleAdd(newCourse);
    // Usar la funcionalidad
    const elementDebug = fixture.debugElement;
    const addFormDebug = elementDebug.query(By.directive(CoursesForm));
    addFormDebug.triggerEventHandler('eventAdd', courseData);
    fixture.detectChanges();
    expect(service.add).toHaveBeenCalledWith(courseData);
    // expect(component.state.courses().length).toBe(3);
    // expect(component.state.courses()[2]).toEqual(newCourse);
    // expect(element.querySelectorAll('ind-courses-card').length).toBe(3);
  });
});
