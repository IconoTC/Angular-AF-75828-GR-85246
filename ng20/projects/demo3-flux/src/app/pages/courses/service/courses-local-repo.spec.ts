import { TestBed } from '@angular/core/testing';

import { CoursesLocalRepo } from './courses-local-repo';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CoursesLocalRepo', () => {
  let service: CoursesLocalRepo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(CoursesLocalRepo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
