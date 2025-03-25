import { Routes } from '@angular/router';

const patternsRoutes: Routes = [
  {
    title: 'Patterns',
    path: '',
    loadComponent: () => import('../patterns/patterns.component'),
    children: [
      {
        title: 'Design Patterns Overview',
        path: 'design-patterns',
        loadComponent: () =>
          import('../design-patterns/design-patterns.component'),
      },
      {
        title: 'Creational Patterns',
        path: 'creational-patterns',
        loadChildren: () =>
          import('../creational-patterns/creational-patterns.routes'),
      },
      {
        title: 'Structural Patterns',
        path: 'structural-patterns',
        loadChildren: () =>
          import('../structural-patterns/structural-patterns.routes'),
      },
      {
        title: 'Behavioral Patterns',
        path: 'behavioral-patterns',
        loadChildren: () =>
          import('../behavioral-patterns/behavioral-patterns.routes'),
      },
      {
        title: 'MVVM Pattern',
        path: 'mvvm-pattern',
        loadComponent: () => import('../mvvm-pattern/mvvm-pattern.component'),
      },
    ],
  },
];

export default patternsRoutes;
