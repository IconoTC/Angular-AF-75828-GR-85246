import { Component, OnInit, signal } from '@angular/core';
import { NotesForm } from '../notes-form/notes-form';
import { NotesCard } from '../notes-card/notes-card';
import { Note, NoteDTO } from '../../model/note';
import { getNotesAsync } from '../../model/notes.data';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ind-notes-list',
  imports: [JsonPipe, NotesForm, NotesCard],
  template: `
    <h3>Notes List</h3>

    <details>
      <summary>Add Note</summary>
      <ind-notes-form (eventAdd)="handleAdd($event)"/>
    </details>
    <div>
      @for (note of notes(); track note.id) {
        <ind-notes-card [note]="clone(note)" (eventDelete)="handleDelete($event)" (eventChange)="handleChange($event)"/>
      }
    </div>

    <hr />
    <pre>{{ notes() | json }}</pre>
  `,
  styles: `
    div {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 4px;
    }
  `,
})
export class NotesList implements OnInit {
  notes = signal<Note[]>([]);
  clone = (e: Note) => structuredClone(e);

  ngOnInit() {
    getNotesAsync().then((notes) => {
      console.log('Notes loaded', notes);
      this.notes.set(notes);

    });
  }

  handleDelete(note: Note) {

    // Ejemplo usando set en lugar de update
    // const currentNotes = this.notes();
    // const newNotes = currentNotes.filter((n) => n.id !== note.id);
    // this.notes.set(newNotes);

    this.notes.update((currentNotes) =>
      currentNotes.filter((n) => n.id !== note.id)
    );
  }

  handleChange(note: Note) {
    this.notes.update((currentNotes) =>
      currentNotes.map((n) => (n.id === note.id ? note : n))
    );
  }
  handleAdd(note: NoteDTO) {
    this.notes.update((currentNotes) => {
      const newNote = { ...note, id: Date.now() };
      return [...currentNotes, newNote];
    });
  }
}
