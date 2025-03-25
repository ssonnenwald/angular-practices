const creationalPatternsRoutes = [
  {
    title: 'Creational Patterns',
    path: '',
    loadComponent: () =>
      import('../creational-patterns/creational-patterns.component'),
    children: [
      {
        title: 'Singleton Pattern',
        path: 'singleton-pattern',
        loadComponent: () =>
          import('../singleton-pattern/singleton-pattern.component'),
      },
      {
        title: 'Builder Pattern',
        path: 'builder-pattern',
        loadComponent: () =>
          import('../builder-pattern/builder-pattern.component'),
      },
      {
        title: 'Factory Pattern',
        path: 'factory-pattern',
        loadComponent: () =>
          import('../factory-pattern/factory-pattern.component'),
      },
    ],
  },
];

export default creationalPatternsRoutes;
