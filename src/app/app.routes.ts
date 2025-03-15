import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '', // Parent route
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'singleton',
        loadComponent: () =>
          import(
            './features/singleton-pattern/singleton-pattern.component'
          ).then((c) => c.SingletonPatternComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' }, // Redirect unmatched routes
];
