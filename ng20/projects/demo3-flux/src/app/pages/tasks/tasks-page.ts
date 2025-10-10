import { Component, inject } from '@angular/core';
import { DateService } from '../../core/services/date-service';
import { TasksList } from "./components/tasks-list/tasks-list";

@Component({
  selector: 'ind-tasks-page',
  imports: [TasksList],
  template: `
    <h2>Tasks Page</h2>
    <ind-tasks-list />
    <p>Hoy es {{ dateService.getDate().getTime() }}</p>
  `,
  styles: ``
})
export class TasksPage {
  dateService = inject(DateService);

}

export default TasksPage;
