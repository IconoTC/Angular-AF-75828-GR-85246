import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAdd } from './notes-add';
import { provideZonelessChangeDetection } from '@angular/core';

describe('NotesAdd', () => {
  let component: NotesAdd;
  let fixture: ComponentFixture<NotesAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesAdd],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit eventAdd when form is submitted after button click', () => {
    spyOn(component.eventAdd, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.eventAdd.emit).toHaveBeenCalledWith(component['noteData']);
  });
});
