import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksCard } from '../tasks-card/tasks-card';
import { InputSignal, provideZonelessChangeDetection, signal } from '@angular/core';
import { Task } from '../../model/task';

describe('TaskCard', () => {
  let component: TasksCard;
  let fixture: ComponentFixture<TasksCard>;

  const TaskMock: Task = {
    id: 1,
    title: 'Test Task',
    author: 'Test Author',
    isCompleted: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksCard],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksCard);
    component = fixture.componentInstance;
    component.task = signal(TaskMock) as unknown as InputSignal<Task>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task details', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h4')?.textContent).toContain('Test Task');
    expect(element.querySelector('p')?.textContent).toContain('Test Author');
    // expect((element.querySelector('input[type="checkbox"]') as HTMLInputElement).checked).toBeFalse();
  });

  it('should emit eventDelete when delete button is clicked', () => {
    spyOn(component.eventDelete, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.eventDelete.emit).toHaveBeenCalledWith(TaskMock);
  });

  it('should toggle isImportant and emit eventChange when checkbox is changed', () => {
    spyOn(component.eventChange, 'emit');
    const checkbox = fixture.nativeElement.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement;
    checkbox.click();
    fixture.detectChanges();
    expect(component.task().isCompleted).toBeTrue();
    expect(component.eventChange.emit).toHaveBeenCalledWith(component.task());
  });
});
