import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksList } from './tasks-list';
import { provideZonelessChangeDetection } from '@angular/core';
import { Task, TaskDTO } from '../../model/task';
import { By } from '@angular/platform-browser';
import { TasksForm } from '../tasks-form/tasks-form';
import { TASKS } from '../../model/tasks.data';
import { TasksApiRepo } from '../../services/tasks-api-repo';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('TasksList', () => {
  let component: TasksList;
  let fixture: ComponentFixture<TasksList>;
  let service: TasksApiRepo;

  const mockTasksInMemoryRepo: TasksApiRepo = jasmine.createSpyObj(
    'TasksApyRepo',
    {
      getAll: of([...TASKS]),
      add: of(),
      delete: of(),
      change: of(),
    },
    {
      data: [...TASKS],
    },
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksList],
      providers: [
        provideZonelessChangeDetection(),
        { provide: TasksApiRepo, useValue: mockTasksInMemoryRepo },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksList);
    component = fixture.componentInstance;
    service = TestBed.inject(TasksApiRepo);
    fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of tasks', async () => {
    const element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(service.getAll).toHaveBeenCalled();
    expect(component.state.tasks().length).toBe(2);
    expect(element.querySelectorAll('ind-task-card').length).toBe(2);
  });

  it('should add a task when the listener is triggered', async () => {
    const taskData: TaskDTO = {
      title: 'Taska 3',
      author: 'Autor 3',
      isCompleted: false,
    };

    const newTask: Task = {
      ...taskData,
      id: '3',
    };

    (service.add as jasmine.Spy).and.returnValue(of(newTask));

    const element = fixture.nativeElement as HTMLElement;
    // fixture.detectChanges();

    // Usar la implementacion
    // component.handleAdd(newTask);
    // Usar la funcionalidad
    const elementDebug = fixture.debugElement;
    const addFormDebug = elementDebug.query(By.directive(TasksForm));
    addFormDebug.triggerEventHandler('eventAdd', taskData);
    await fixture.whenStable();
    expect(service.add).toHaveBeenCalledWith(taskData);
    expect(component.state.tasks().length).toBe(3);
    expect(component.state.tasks()[2]).toEqual(newTask);
    expect(element.querySelectorAll('ind-task-card').length).toBe(3);
  });

  it('should show an error message when service.add() fails', async () => {
    const taskData: TaskDTO = {
      title: 'Task 3',
      author: 'Autor 3',
      isCompleted: false,
    };
    (service.add as jasmine.Spy).and.returnValue(throwError(
      () => new HttpErrorResponse({ error: 'Error adding task' })));
    const element = fixture.nativeElement as HTMLElement;
    const elementDebug = fixture.debugElement;
    const addFormDebug = elementDebug.query(By.directive(TasksForm));
    addFormDebug.triggerEventHandler('eventAdd', taskData);
    await fixture.whenStable();
    //fixture.detectChanges();
    expect(service.add).toHaveBeenCalledWith(taskData);
    expect(component.state.error()).toBe('Failed to add task.');
    expect(element.querySelectorAll('ind-task-card').length).toBe(2);
    expect(element.querySelector('div.error')?.textContent).toContain('Failed to add task.');
  });
});
