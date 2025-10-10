import { Component } from '@angular/core';
import { NotesList } from './components/notes-list/notes-list';

@Component({
  selector: 'ind-notes-page',
  imports: [NotesList],
  template: `
    <h2>Notes Page</h2>
    <ind-notes-list />
  `,
  styles: ``,
})
export class NotesPage {}

export default NotesPage;
