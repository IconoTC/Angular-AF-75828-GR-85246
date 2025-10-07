import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-footer',
  imports: [DatePipe, TitleCasePipe],
  template: `
    <footer>
      <address>Indra Course</address>
      <p>{{ today() | date:'fullDate' | titlecase }}</p>
    </footer>
  `,
  styles: ``
})
export class Footer {
  today = signal(new Date())
}
