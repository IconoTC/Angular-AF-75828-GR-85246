import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesForm } from './notes-form';
import { provideZonelessChangeDetection } from '@angular/core';

describe('NotesForm', () => {
  let component: NotesForm;
  let fixture: ComponentFixture<NotesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesForm],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesForm);
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
    expect(component.noteNgForm()!.invalid).toBeTrue();
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
    expect(component.noteNgForm()!.value).toEqual({ title: 'Test Title', author: 'Test Author' });
  });
});
