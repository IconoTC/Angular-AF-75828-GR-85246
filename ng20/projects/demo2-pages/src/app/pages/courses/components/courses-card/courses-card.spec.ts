import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesCard } from './courses-card';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';
import { Course } from '../../model/course';

describe('CoursesCard', () => {
  let component: CoursesCard;
  let fixture: ComponentFixture<CoursesCard>;

const CourseMock: Course = {
  id: 1,
  title: 'Test Course',
  author: 'Test Author',
  isCompleted: false,
};


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesCard],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesCard);
    component = fixture.componentInstance;
    component.course = signal(CourseMock) as unknown as InputSignal<Course>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display course details', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h4')?.textContent).toContain('Test Course');
    expect(element.querySelector('p')?.textContent).toContain('Test Author');
    // expect((element.querySelector('input[type="checkbox"]') as HTMLInputElement).checked).toBeFalse();
  });

  it('should emit eventDelete when delete button is clicked', () => {
    spyOn(component.eventDelete, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.eventDelete.emit).toHaveBeenCalledWith(CourseMock);
  });

  it('should toggle isImportant and emit eventChange when checkbox is changed', () => {
    spyOn(component.eventChange, 'emit');
    const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
    checkbox.click();
    fixture.detectChanges();
    expect(component.course().isCompleted).toBeTrue();
    expect(component.eventChange.emit).toHaveBeenCalledWith(component.course());
  });
});
