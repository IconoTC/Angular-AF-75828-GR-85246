import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesList } from './courses-list';
import { provideZonelessChangeDetection } from '@angular/core';
import { CourseDTO } from '../../model/course';
import { By } from '@angular/platform-browser';
import { CoursesForm } from '../courses-form/courses-form';

describe('CoursesList', () => {
  let component: CoursesList;
  let fixture: ComponentFixture<CoursesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesList],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should display a list of courses', async () => {
    const element = fixture.nativeElement as HTMLElement;
    //const courses = component.courses();
    fixture.whenStable().then(() => {
      expect(element.querySelectorAll('ind-courses-card').length).toBe(2);
    });
  });

  xit('should add a course when the listener is triggered', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const newCourse: CourseDTO = {
      title: 'Coursea 3',
      author: 'Autor 3',
      isCompleted: false,
    };
    // Usar la implementacion
    // component.handleAdd(newCourse);
    // Usar la funcionalidad
    const elementDebug = fixture.debugElement;
    const addFormDebug = elementDebug.query(By.directive(CoursesForm));
    addFormDebug.triggerEventHandler('eventAdd', newCourse);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.courses().length).toBe(3);
      expect(element.querySelectorAll('ind-courses-card').length).toBe(3);
      expect(component.courses()[2].author).toEqual(newCourse.author);
      expect(component.courses()[2].title).toEqual(newCourse.title);
      expect(component.courses()[2].isCompleted).toEqual(newCourse.isCompleted);
    });
  });
});
