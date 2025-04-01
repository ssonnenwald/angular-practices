import { Route, Routes } from '@angular/router';
import { MenuItem } from './core/models/menu-item';

const itemToRoute = (item: MenuItem): Route => {
  const route: Route = { path: item.route, component: item.component };
  if (item.subItems) {
    route.children = item.subItems.map((s) => itemToRoute(s));
  }

  return route;
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    title: 'Home',
    path: 'home',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    title: 'Project',
    path: 'project',
    loadChildren: () => import('./features/project/project.routes'),
  },
  {
    title: 'Patterns',
    path: 'patterns',
    loadChildren: () => import('./features/patterns/patterns.routes'),
  },
  {
    title: 'SOLID',
    path: 'solid',
    loadChildren: () => import('./features/solid/solid.routes'),
  },
  {
    title: 'Typescript',
    path: 'typescript',
    loadChildren: () => import('./features/typescript/typescript.routes'),
  },
  {
    title: 'Interview',
    path: 'interview',
    loadChildren: () => import('./features/interview/interview.routes'),
  },
  { path: '**', redirectTo: '' }, // Redirect unmatched routes
];
