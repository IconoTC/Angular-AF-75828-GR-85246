import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesList } from './notes-list';
import { provideZonelessChangeDetection } from '@angular/core';
import { NoteDTO } from '../../model/note';
import { By } from '@angular/platform-browser';
import { NotesForm } from '../notes-form/notes-form';

describe('NotesList', () => {
  let component: NotesList;
  let fixture: ComponentFixture<NotesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesList],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should display a list of notes', async () => {
    const element = fixture.nativeElement as HTMLElement;
    //const notes = component.notes();
    fixture.whenStable().then(() => {
      expect(element.querySelectorAll('ind-courses-card').length).toBe(2);
    });
  });

  xit('should add a note when the listener is triggered', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const newNote: NoteDTO = {
      title: 'Nota 3',
      author: 'Autor 3',
      isImportant: false,
    };
    // Usar la implementacion
    // component.handleAdd(newNote);
    // Usar la funcionalidad
    const elementDebug = fixture.debugElement;
    const addFormDebug = elementDebug.query(By.directive(NotesForm));
    addFormDebug.triggerEventHandler('eventAdd', newNote);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.notes().length).toBe(3);
      expect(element.querySelectorAll('ind-courses-card').length).toBe(3);
      expect(component.notes()[2].author).toEqual(newNote.author);
      expect(component.notes()[2].title).toEqual(newNote.title);
      expect(component.notes()[2].isImportant).toEqual(newNote.isImportant);
    });
  });
});
