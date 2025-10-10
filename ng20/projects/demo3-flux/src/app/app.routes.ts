import { Routes } from '@angular/router';
import { MenuOption } from './core/types/menu-option';
import { DateService } from './core/services/date-service';
import { CoursesInMemoryRepo } from './pages/courses/service/courses-in-memory-repo';
import { CoursesLocalRepo } from './pages/courses/service/courses-local-repo';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home-page'),
    title: 'Home | Demo3 - Flux',
    data: { label: 'Inicio' },
  },

  {
    path: 'notes',
    loadComponent: () => import('./pages/notes/notes-page'),
    title: 'Notes | Demo3 - Flux',
    data: { label: 'Notas' },
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses-page'),
    title: 'Courses | Demo3 - Flux',
    data: { label: 'Cursos' },
    providers: [{ provide: CoursesInMemoryRepo, useClass: CoursesLocalRepo }],
  },
  {
    path: 'tasks',
    loadComponent: () => import('./pages/tasks/tasks-page'),
    title: 'Tasks | Demo3 - Flux',
    data: { label: 'Tareas' },
    providers: [DateService],
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page'),
    title: 'About | Demo3 - Flux',
    data: { label: 'Acerca de' },
  },
  { path: '**', redirectTo: 'home' },
];

export const menuOptions: MenuOption[] = routes
  .filter((route) => route.data?.['label'])
  .map((route) => ({
    label: route.data!['label'],
    route: route.path as string,
  }));
