import { Routes } from '@angular/router';

const projectRoutes: Routes = [
  {
    title: 'Project',
    path: '',
    loadComponent: () => import('../project/project.component'),
    children: [
      {
        title: 'Directory Layout',
        path: 'directory-layout',
        loadComponent: () =>
          import('../directory-layout/directory-layout.component'),
      },
    ],
  },
];

export default projectRoutes;
