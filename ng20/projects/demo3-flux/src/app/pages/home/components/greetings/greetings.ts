import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateService } from '../../../../core/services/date-service';

@Component({
  selector: 'ind-greetings',
  imports: [FormsModule],
  template: `
    <h3>Greetings Component</h3>
    <!-- <input type="text" placeholder="Tu nombre"
    [value]="name()" (input)="name.set($event.target.value)" />
     <input type="text" placeholder="Tu nombre"
    [ngModel]="name()" (ngModelChange)="name.set($event)" />-->

    <input type="text" placeholder="Tu nombre" [(ngModel)]="name" />
    <p>Hola {{ name() ? name() : 'amigo' }}!</p>
    <button (click)="handleClear()">Borrar</button>

    <p>Hoy es {{ dateService.getDate().getTime()  }}</p>
  `,
  styles: `
    :host {
      display: block;
      padding: 16px;
      margin: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
    }

    p {
      font-size: 1.2em;
      color: #d47171ff;
    }
  `,
})
export class Greetings {

  dateService = inject(DateService);


  // constructor (public dateService: DateService) {

  // }

  protected name = signal('');

  protected handleClear() {
    this.name.set('');
  }
}
