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
      {
        title: 'Tell Me About Yourself',
        path: 'tell-me-about-yourself',
        loadComponent: () =>
          import('../tell-me-about-yourself/tell-me-about-yourself.component'),
      },
    ],
  },
];

export default interviewRoutes;
