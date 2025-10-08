import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersWrapper } from './counters-wrapper';

describe('CountersWrapper', () => {
  let component: CountersWrapper;
  let fixture: ComponentFixture<CountersWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountersWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountersWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
