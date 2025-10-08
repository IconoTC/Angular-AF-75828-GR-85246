import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPage } from './notes-page';
import { provideZonelessChangeDetection } from '@angular/core';

describe('NotesPage', () => {
  let component: NotesPage;
  let fixture: ComponentFixture<NotesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesPage],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
