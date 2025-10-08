import { Component, input, output } from '@angular/core';
import { Note } from '../../model/note';

@Component({
  selector: 'ind-notes-card',
  imports: [],
  template: `
    <div class="note-card">
      <h4>{{ note().title }}</h4>
      <p>Author: {{ note().author }}</p>
      <label>
        <input type="checkbox" [checked]="note().isImportant" (change)="handleEventChange()" />
        <span>Is Important:</span>
      </label>
      <div>
        <button (click)="handleEventDelete()">Borrar</button>
      </div>
    </div>
  `,
  styles: `
    .note-card {
      border: 1px solid black;
      margin: 4px;
      padding: 4px;
    }
  `,
})
export class NotesCard {
  note = input.required<Note>();
  eventDelete = output<Note>();
  eventChange = output<Note>();

  handleEventDelete() {
    this.eventDelete.emit(this.note());
  }

  handleEventChange() {
    this.note().isImportant = !this.note().isImportant;
    this.eventChange.emit(this.note());
  }
}
