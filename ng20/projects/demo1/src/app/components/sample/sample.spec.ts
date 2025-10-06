import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample } from './sample';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Sample', () => {
  let component: Sample;
  let fixture: ComponentFixture<Sample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sample],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
