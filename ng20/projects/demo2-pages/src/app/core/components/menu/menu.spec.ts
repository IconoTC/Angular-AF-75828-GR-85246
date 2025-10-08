import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from './menu';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
       providers: [
        provideZonelessChangeDetection(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct routes rendered', () => {
    const element = fixture.nativeElement as HTMLElement;
    const links = element.querySelectorAll('a');
    expect(links.length).toBe(3);
    expect(links[0].textContent).toBe('Inicio');
    expect(links[2].textContent).toBe('Acerca de');
  });
});
