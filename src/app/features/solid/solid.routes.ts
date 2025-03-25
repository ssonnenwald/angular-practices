import { Routes } from '@angular/router';

const solidRoutes: Routes = [
  {
    title: 'SOLID',
    path: '',
    loadComponent: () => import('../solid/solid.component'),
    children: [
      {
        title: 'SOLID Overview',
        path: 'solid-overview',
        loadComponent: () =>
          import('../solid-overview/solid-overview.component'),
      },
      {
        title: 'Single Responsibility',
        path: 'solid-single-responsibility',
        loadComponent: () =>
          import(
            '../solid-single-responsibility/solid-single-responsibility.component'
          ),
      },
      {
        title: 'Open/Closed',
        path: 'solid-open-closed',
        loadComponent: () =>
          import('../solid-open-closed/solid-open-closed.component'),
      },
      {
        title: 'Liskov Substitution',
        path: 'solid-liskov-substitution',
        loadComponent: () =>
          import(
            '../solid-liskov-substitution/solid-liskov-substitution.component'
          ),
      },
      {
        title: 'Interface Segregation',
        path: 'solid-interface-segregation',
        loadComponent: () =>
          import(
            '../solid-interface-segregation/solid-interface-segregation.component'
          ),
      },
      {
        title: 'Dependency Inversion',
        path: 'solid-dependency-inversion',
        loadComponent: () =>
          import(
            '../solid-dependency-inversion/solid-dependency-inversion.component'
          ),
      },
    ],
  },
];

export default solidRoutes;
