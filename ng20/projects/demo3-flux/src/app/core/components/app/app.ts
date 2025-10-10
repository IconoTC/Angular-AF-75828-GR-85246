import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from "../layout/layout";
import { TasksStore } from '../../../pages/tasks/services/tasks-store';



@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Layout],

  template: `
  <ind-layout [appTitle]="title()">
    <router-outlet />
  </ind-layout>
  `,
  styles: [],
})
export class App implements OnInit {
  protected readonly title = signal('Demo2 - Pages Flux');
  state = inject(TasksStore);

  ngOnInit() {
    this.state.loadTasks();
  }
}
