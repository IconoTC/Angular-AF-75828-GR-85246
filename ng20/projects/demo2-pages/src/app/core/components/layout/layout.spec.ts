import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout } from './layout';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('Layout', () => {
  let component: Layout;
  let fixture: ComponentFixture<Layout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Layout);
    component = fixture.componentInstance;
    component.appTitle = signal('') as unknown as InputSignal<string>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
