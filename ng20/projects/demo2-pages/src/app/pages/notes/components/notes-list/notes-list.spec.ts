import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesList } from './notes-list';
import { provideZonelessChangeDetection } from '@angular/core';

describe('NotesList', () => {
  let component: NotesList;
  let fixture: ComponentFixture<NotesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesList],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
