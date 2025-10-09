import { Routes } from '@angular/router';
import { MenuOption } from './core/types/menu-option';
import { DateService } from './core/services/date-service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
    loadComponent: () => import('./pages/home/home-page'),
    title: 'Home | Demo2 Pages',
    data: {label: 'Inicio'}
   },

  { path: 'notes',
    loadComponent: () => import('./pages/notes/notes-page'),
    title: 'Notes | Demo2 Pages',
    data: {label: 'Notas'}
   },
  { path: 'tasks',
    loadComponent: () => import('./pages/tasks/tasks-page'),
    title: 'Tasks | Demo2 Pages',
    data: {label: 'Tareas'},
    providers: [DateService]
   },
  { path: 'about',
    loadComponent: () => import('./pages/about/about-page'),
    title: 'About | Demo2 Pages',
    data: {label: 'Acerca de'}
   },
  { path: '**', redirectTo: 'home' },
];

export const menuOptions: MenuOption[] =
  routes
    .filter( route => route.data?.['label'] )
    .map( route => ({
      label: route.data!['label'],
      route: route.path as string
    }));

