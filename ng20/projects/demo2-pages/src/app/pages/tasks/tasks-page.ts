import { Component, inject } from '@angular/core';
import { DateService } from '../../core/services/date-service';

@Component({
  selector: 'ind-tasks-page',
  imports: [],
  template: `
    <h2>Tasks Page</h2>
    <p>
      tasks-page works!
    </p>
    <p>Hoy es {{ dateService.getDate().getTime() }}</p>
  `,
  styles: ``
})
export class TasksPage {
  dateService = inject(DateService);

}

export default TasksPage;
