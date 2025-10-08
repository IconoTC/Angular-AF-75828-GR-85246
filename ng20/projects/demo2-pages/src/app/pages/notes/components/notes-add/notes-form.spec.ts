import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesForm } from './notes-form';
import { provideZonelessChangeDetection } from '@angular/core';

describe('NotesForm', () => {
  let component: NotesForm;
  let fixture: ComponentFixture<NotesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesForm],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
