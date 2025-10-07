import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Greetings } from './greetings';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Greetings', () => {
  let component: Greetings;
  let fixture: ComponentFixture<Greetings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Greetings],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Greetings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
