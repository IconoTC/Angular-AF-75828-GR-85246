import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesCard } from './notes-card';
import { provideZonelessChangeDetection } from '@angular/core';

describe('NotesCard', () => {
  let component: NotesCard;
  let fixture: ComponentFixture<NotesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesCard],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
