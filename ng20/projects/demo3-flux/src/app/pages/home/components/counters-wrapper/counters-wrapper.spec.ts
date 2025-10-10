import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersWrapper } from './counters-wrapper';
import { provideZonelessChangeDetection } from '@angular/core';
import { EventCount } from '../../types/event-count';
import { By } from '@angular/platform-browser';
import { Counter } from '../counter/counter';

describe('CountersWrapper', () => {
  let component: CountersWrapper;
  let fixture: ComponentFixture<CountersWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountersWrapper],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountersWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test de implementacion

  it('should update total clicks and values on eventCount', () => {
    const event: EventCount = { id: 1, value: 3 };
    component.handleAddClick(event);
    expect(component.totalClicks()).toBe(1);
    expect(component.counters[0]()).toBe(3);
  });

  it('should not update total clicks if id is missing', () => {
    const event: EventCount = { id: null, value: 3 };
    component.handleAddClick(event);
    expect(component.totalClicks()).toBe(0);
  });

  // Test de funcionalidad

  it('should correctly compute total value from counters events', () => {
    // const element = fixture.nativeElement;
    // const counterElements = element.querySelectorAll('ind-counter');
    // counterElements[0].dispatchEvent(new CustomEvent('eventCount', { detail: { id: 1, value: 2 } }));
    // counterElements[1].dispatchEvent(new CustomEvent('eventCount', { detail: { id: 2, value: 3 } }));

    const elementDebug = fixture.debugElement;
    const counterInstances = elementDebug.queryAll(By.directive(Counter));
    expect(counterInstances.length).toBe(3);
    counterInstances[0].triggerEventHandler('eventCount', { id: 1, value: 2 });
    counterInstances[1].triggerEventHandler('eventCount', { id: 2, value: 3 });
    fixture.detectChanges();

    const element = fixture.nativeElement;
    expect(element.querySelector('p:nth-of-type(1)').textContent).toContain('Total Clicks: 2');
    expect(element.querySelector('p:nth-of-type(2)').textContent).toContain('Total Value: 5');
  });

});
