import { Component, output } from '@angular/core';
import { NoteDTO } from '../../model/note';
import { FormsModule } from "@angular/forms";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ind-notes-form',
  imports: [FormsModule, JsonPipe],
  template: `
    <h4>Notes Form</h4>
    <label>
      Title:
      <input type="text" [(ngModel)]="noteData.title" required />
    </label>
    <label>
      Author:
      <input type="text" [(ngModel)]="noteData.author" required />
    </label>
    <button (click)="handleEventAdd()">Add Note</button>

    <pre>{{ noteData | json }}</pre>
  `,
  styles: `
  label {
    display: block;
    margin-bottom: 8px;
  }
  `
})
export class NotesForm {

  eventAdd = output<NoteDTO>();

  noteData: NoteDTO = {
    title: '',
    author: '',
    isImportant: false,
  };

  handleEventAdd() {
    this.eventAdd.emit(this.noteData);
  }
}
