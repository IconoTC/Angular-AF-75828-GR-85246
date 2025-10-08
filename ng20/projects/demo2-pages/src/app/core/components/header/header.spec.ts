import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { provideZonelessChangeDetection, signal, InputSignal } from '@angular/core';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    component.appTitle = signal('Test App') as unknown as InputSignal<string>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct app title', () => {
    const element = fixture.nativeElement as HTMLElement;
    const title = element.querySelector('h1');
    expect(title?.textContent).toBe('Test App');
  }); 
});
