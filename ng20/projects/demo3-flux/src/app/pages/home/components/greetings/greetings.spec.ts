import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Greetings } from './greetings';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Greetings', () => {
  let component: Greetings;
  let fixture: ComponentFixture<Greetings>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Greetings],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Greetings);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render greeting message', () => {
    expect(element.querySelector('p')?.textContent).toContain('amigo');
  });

  it('should update name on input change', () => {
    const input = element.querySelector('input') as HTMLInputElement;
    input.value = 'Juan';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // Assert a nivel de implementación
    expect(component['name']()).toBe('Juan');
    // Assert a nivel de funcionalidad
    expect(element.querySelector('p')?.textContent).toContain('Juan');
  });

  it('should clear name on button click', () => {
    component['name'].set('Pedro');
    fixture.detectChanges();
    const button = element.querySelector('button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    // Assert a nivel de implementación
    expect(component['name']()).toBe('');
    // Assert a nivel de funcionalidad
    expect(element.querySelector('p')?.textContent).toContain('amigo');
  });
});
