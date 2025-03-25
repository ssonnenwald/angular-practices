import { Routes } from '@angular/router';

const interviewRoutes: Routes = [
  {
    title: 'Interview',
    path: '',
    loadComponent: () => import('../interview/interview.component'),
    children: [
      {
        title: 'Interview Questions',
        path: 'interview-questions',
        loadComponent: () =>
          import('../interview-questions/interview-questions.component'),
      },
    ],
  },
];

export default interviewRoutes;
