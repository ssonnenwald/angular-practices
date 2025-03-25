import { Routes } from '@angular/router';

const typescriptRoutes: Routes = [
  {
    title: 'Typescript',
    path: '',
    loadComponent: () => import('../typescript/typescript.component'),
    children: [
      {
        title: 'Abstract Class',
        path: 'abstract-class',
        loadComponent: () =>
          import('../abstract-class/abstract-class.component'),
      },
      {
        title: 'Abstract Method',
        path: 'abstract-method',
        loadComponent: () =>
          import('../abstract-method/abstract-method.component'),
      },
      {
        title: 'Optional Method',
        path: 'optional-method',
        loadComponent: () =>
          import('../optional-method/optional-method.component'),
      },
    ],
  },
];

export default typescriptRoutes;
