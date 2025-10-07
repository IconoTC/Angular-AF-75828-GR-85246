import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h3 title', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h3')?.textContent).toContain('Counter');
  });

  // New test to check increment and decrement functionality

  it('should increment and decrement the counter', () => {
    const element = fixture.nativeElement as HTMLElement;
    const buttons = element.querySelectorAll('button');
    const span = element.querySelector('span');
    expect(span?.textContent).toBe('0');

    buttons[1].click();
    expect(span?.textContent).toBe('1');

    buttons[0].dispatchEvent(new Event('click'));
    expect(span?.textContent).toBe('0');
  });
});
