import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ind-contact',
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <h3>Contacta con nosotros</h3>
    <form [formGroup]="contactFormGroup" (ngSubmit)="handleSubmit()">
      <label>
        <span>Nombre:</span>
        <input type="text" formControlName="name" />
      </label>

      <label>
        <span>Email:</span>
        <input type="email" formControlName="email"  />
      </label>

      <label>
        <span>Mensaje:</span>
        <textarea formControlName="message" ></textarea>
      </label>

      <button type="submit">Enviar</button>

      <hr>
      <pre>
        {{ contactFormGroup.value | json }}
      </pre>
    </form>
  `,
  styles: `
    label {
      display: block;
      margin-bottom: 10px;
    }
    button {
      margin: 10px 0px;
    }
  `,
})
export class Contact {
  fb = inject(FormBuilder);
  contactFormGroup = this.fb.nonNullable.group({
    name: [''],
    email: [''],
    message: [''],
  });

  handleSubmit() {
    if (this.contactFormGroup.valid) {
      console.log('Form submit', this.contactFormGroup.value);
      this.contactFormGroup.reset();
    }
  }
}
