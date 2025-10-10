import { TestBed } from '@angular/core/testing';

import { TasksApiRepo } from './tasks-api-repo';

describe('TasksApiRepo', () => {
  let service: TasksApiRepo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksApiRepo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
