import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from './menu';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MenuOption } from '../../types/menu-option';

const menuOptions: MenuOption[] = [
  { label: 'Inicio', route: '/home' },
  { label: 'Servicios', route: '/services' },
  { label: 'Acerca de', route: '/about' },
];

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
    component.options = signal(menuOptions) as unknown as InputSignal<MenuOption[]>;
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
    expect(links[1].textContent).toBe('Servicios');
    expect(links[2].textContent).toBe('Acerca de');
  });
});
