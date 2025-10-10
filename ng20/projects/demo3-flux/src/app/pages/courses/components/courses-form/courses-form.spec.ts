import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesForm } from './courses-form';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CoursesForm', () => {
  let component: CoursesForm;
  let fixture: ComponentFixture<CoursesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesForm],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit eventAdd when form is submitted after button click', () => {
    spyOn(component.eventAdd, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.eventAdd.emit).toHaveBeenCalled();
  });

  it('should disable submit button when form is invalid', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(component.courseNgForm()!.invalid).toBeTrue();
    expect(button.disabled).toBeDefined();
  });

  it('should get datas from from controls', () => {
    const titleInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="title"]');
    const authorInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="author"]');
    titleInput.value = 'Test Title';
    authorInput.value = 'Test Author';
    titleInput.dispatchEvent(new Event('input'));
    authorInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.courseNgForm()!.value).toEqual({ title: 'Test Title', author: 'Test Author' });
  });
});
