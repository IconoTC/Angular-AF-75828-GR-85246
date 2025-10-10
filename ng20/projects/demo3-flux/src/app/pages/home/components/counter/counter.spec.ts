import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from './counter';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h3 title', () => {
    expect(element.querySelector('h3')?.textContent).toContain('Counter');
  });

  // New test to check increment and decrement functionality

  it('should increment and decrement the counter', () => {
    const buttons = element.querySelectorAll('button');
    expect(buttons.length).toBe(2);
    const span = element.querySelector('span');
    expect(span?.textContent).toBe('0');

    buttons[1].click();
    fixture.detectChanges();
    expect(span?.textContent).toBe('1');

    buttons[0].dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(span?.textContent).toBe('0');
  });

  it('should disable decrement button at -5 and increment button at 5', () => {
    const buttons = element.querySelectorAll('button');
    const span = element.querySelector('span');
    component['counter'].set(-5);
    fixture.detectChanges();
    expect(span?.textContent).toBe('-5');
    expect(buttons[0].hasAttribute('disabled')).toBeTrue();
    expect(element.textContent).toContain('Has llegado al valor mínimo!');

    component['counter'].set(5);
    fixture.detectChanges();
    expect(span?.textContent).toBe('5');
    expect(buttons[1].hasAttribute('disabled')).toBeTrue();
    expect(element.textContent).toContain('Has llegado al valor máximo!');
  });
});
