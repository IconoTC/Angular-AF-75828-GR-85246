import { Component, ElementRef, OnInit, output, viewChild } from '@angular/core';
import { NoteDTO } from '../../model/note';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ind-notes-form',
  imports: [FormsModule, JsonPipe],
  template: `
    <h4>Notes Form</h4>

    <form (ngSubmit)="handleEventAdd(noteForm.value)" #noteForm="ngForm" #form>
      <label>
        Title:
        <input type="text" name="title" ngModel required />
      </label>
      <label>
        Author:
        <input type="text" name="author" ngModel required />
      </label>
      <button type="submit" [disabled]="noteForm.invalid">Add Note</button>
    </form>

    <pre>{{ noteForm.value | json }}</pre>
  `,
  styles: `
    label {
      display: block;
      margin-bottom: 8px;
    }
  `,
})
export class NotesForm implements OnInit {
  eventAdd = output<NoteDTO>();

  // Usado en versiones anteriores
  // @ViewChild('noteForm', { static: true }) noteForm!: NgForm;

  noteNgForm = viewChild<NgForm>('noteForm');
  noteForm = viewChild<ElementRef<HTMLFormElement>>('form');

  ngOnInit() {
    console.log('NotesForm onInit');
    console.log(this.noteNgForm());
    console.log(this.noteForm());
  }

  handleEventAdd(data: NoteDTO) {
    data.isImportant = false;
    this.eventAdd.emit(data);
    this.noteNgForm()!.resetForm();

    // Mala practica usar querySelector
    // Mejor usar ViewChild
    // document.querySelector('details') as HTMLDetailsElement;

    (
      this.noteForm()!.nativeElement.parentElement?.parentElement as HTMLDetailsElement
    ).removeAttribute('open');
  }
}
