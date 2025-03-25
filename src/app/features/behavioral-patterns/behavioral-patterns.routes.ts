import { Routes } from '@angular/router';

const behavioralPatternsRoutes: Routes = [
  {
    title: 'Behavioral Patterns',
    path: '',
    loadComponent: () =>
      import('../behavioral-patterns/behavioral-patterns.component'),
    children: [
      {
        title: 'Strategy Pattern',
        path: 'strategy-pattern',
        loadComponent: () =>
          import('../strategy-pattern/strategy-pattern.component'),
      },
      {
        title: 'Observer Pattern',
        path: 'observer-pattern',
        loadComponent: () =>
          import('../observer-pattern/observer-pattern.component'),
      },
    ],
  },
];

export default behavioralPatternsRoutes;
