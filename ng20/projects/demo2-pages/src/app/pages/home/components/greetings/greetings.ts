import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  protected name = signal('');

  protected handleClear() {
    this.name.set('');
  }
}
