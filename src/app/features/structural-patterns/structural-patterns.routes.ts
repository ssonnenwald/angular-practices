import { Routes } from '@angular/router';

const structuralPatternsRoutes: Routes = [
  {
    title: 'Structural Patterns',
    path: '',
    loadComponent: () =>
      import('../structural-patterns/structural-patterns.component'),
    children: [
      {
        title: 'Facade Pattern',
        path: 'facade-pattern',
        loadComponent: () =>
          import('../facade-pattern/facade-pattern.component'),
      },
      {
        title: 'Adapter Pattern',
        path: 'adapter-pattern',
        loadComponent: () =>
          import('../adapter-pattern/adapter-pattern.component'),
      },
    ],
  },
];

export default structuralPatternsRoutes;
