import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeInstanceOf(App);
  });

  // Test de caja blanca: test de implementación

  it('should have a title', () => {
    expect(component['title']()).toBe('Demo2 - Pages');
  });

  // Test de caja negra: test de funcionalidad

  it('should render title', () => {
    const element = fixture.nativeElement as HTMLElement;
    const elementH1 = element.querySelector('h1');
    if (!elementH1) {
      throw new Error('No h1 element found');
    }
    expect(elementH1.textContent).toContain('Demo');
  });

    it('should render title by Angular', () => {
    const elementDebug = fixture.debugElement
    const elementH1Debug = elementDebug.query(By.css('h1'))
    const elementH1 = elementH1Debug.nativeElement as HTMLElement;
    expect(elementH1.textContent).toContain('Demo');
  });
});
