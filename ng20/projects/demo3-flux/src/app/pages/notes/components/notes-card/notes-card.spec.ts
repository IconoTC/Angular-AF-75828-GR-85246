import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesCard } from './notes-card';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';
import { Note } from '../../model/note';

describe('NotesCard', () => {
  let component: NotesCard;
  let fixture: ComponentFixture<NotesCard>;

const NoteMock: Note = {
  id: 1,
  title: 'Test Note',
  author: 'Test Author',
  isImportant: false,
};


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesCard],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesCard);
    component = fixture.componentInstance;
    component.note = signal(NoteMock) as unknown as InputSignal<Note>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display note details', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h4')?.textContent).toContain('Test Note');
    expect(element.querySelector('p')?.textContent).toContain('Test Author');
    // expect((element.querySelector('input[type="checkbox"]') as HTMLInputElement).checked).toBeFalse();
  });

  it('should emit eventDelete when delete button is clicked', () => {
    spyOn(component.eventDelete, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.eventDelete.emit).toHaveBeenCalledWith(NoteMock);
  });

  it('should toggle isImportant and emit eventChange when checkbox is changed', () => {
    spyOn(component.eventChange, 'emit');
    const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
    checkbox.click();
    fixture.detectChanges();
    expect(component.note().isImportant).toBeTrue();
    expect(component.eventChange.emit).toHaveBeenCalledWith(component.note());
  });
});
