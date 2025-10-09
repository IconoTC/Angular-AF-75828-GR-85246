import { TestBed } from '@angular/core/testing';

import { CoursesLocalRepo } from './courses-local-repo';

describe('CoursesLocalRepo', () => {
  let service: CoursesLocalRepo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesLocalRepo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
