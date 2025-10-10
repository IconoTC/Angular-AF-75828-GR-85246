import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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

        @if (contactFormGroup.get('name')?.invalid && (contactFormGroup.get('name')?.touched)) {
          <div class="error">El nombre es obligatorio.</div>
        }

      <label>
        <span>Email:</span>
        <input type="email" formControlName="email"  />
      </label>

        @if (contactFormGroup.get('email')?.invalid && (contactFormGroup.get('email')?.touched)) {
          @if (contactFormGroup.get('email')?.errors?.['required']) {
            <div class="error">El email es obligatorio.</div>
          } @else if (contactFormGroup.get('email')?.errors?.['email']) {
            <div class="error">El email no tiene un formato válido.</div>
          }
        }

      <label>
        <span>Mensaje:</span>
        <textarea formControlName="message" ></textarea>
      </label>

        @if (contactFormGroup.get('message')?.invalid && (contactFormGroup.get('message')?.touched)) {
          <div class="error">El mensaje es obligatorio.</div>
        }

      <button type="submit" [disabled]="contactFormGroup.invalid">Enviar</button>

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
    .error {
      color: red;
      font-size: 0.8em;
      margin: 2px 0px 5px 0px;
    }
  `,
})
export class Contact implements OnInit {
  fb = inject(FormBuilder);
  contactFormGroup = this.fb.nonNullable.group({
    name: ['', [Validators.required] ],
    email: ['', [Validators.required, Validators.email] ],
    message: ['', [Validators.required]],
  });

  ngOnInit() {
    console.log('Contact form group', this.contactFormGroup);
  }


  handleSubmit() {
    if (this.contactFormGroup.valid) {
      console.log('Form submit', this.contactFormGroup.value);
      this.contactFormGroup.reset();
    }
  }
}
