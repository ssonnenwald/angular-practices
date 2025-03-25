import { Route, Routes } from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';
import { MenuItem } from './core/models/menu-item';

const itemToRoute = (item: MenuItem): Route => {
  const route: Route = { path: item.route, component: item.component };
  if (item.subItems) {
    route.children = item.subItems.map((s) => itemToRoute(s));
  }

  return route;
};

export const routes: Routes = [
  {
    path: '', // Parent route
    component: AppLayoutComponent,
    children: [
      {
        title: 'Home',
        path: '',
        loadComponent: () => import('./features/home/home.component'),
      },
      {
        title: 'Patterns',
        path: 'patterns',
        loadComponent: () => import('./features/patterns/patterns.component'),
        children: [
          {
            title: 'Design Patterns Overview',
            path: 'design-patterns',
            loadComponent: () =>
              import('./features/design-patterns/design-patterns.component'),
          },
          {
            title: 'Creational Patterns',
            path: 'creational-patterns',
            loadComponent: () =>
              import(
                './features/creational-patterns/creational-patterns.component'
              ),
            children: [
              {
                title: 'Singleton Pattern',
                path: 'singleton-pattern',
                loadComponent: () =>
                  import(
                    './features/singleton-pattern/singleton-pattern.component'
                  ),
              },
              {
                title: 'Builder Pattern',
                path: 'builder-pattern',
                loadComponent: () =>
                  import(
                    './features/builder-pattern/builder-pattern.component'
                  ),
              },
              {
                title: 'Factory Pattern',
                path: 'factory-pattern',
                loadComponent: () =>
                  import(
                    './features/factory-pattern/factory-pattern.component'
                  ),
              },
            ],
          },
          {
            title: 'Structural Patterns',
            path: 'structural-patterns',
            loadComponent: () =>
              import(
                './features/structural-patterns/structural-patterns.component'
              ),
            children: [
              {
                title: 'Facade Pattern',
                path: 'facade-pattern',
                loadComponent: () =>
                  import('./features/facade-pattern/facade-pattern.component'),
              },
              {
                title: 'Adapter Pattern',
                path: 'adapter-pattern',
                loadComponent: () =>
                  import(
                    './features/adapter-pattern/adapter-pattern.component'
                  ),
              },
            ],
          },
          {
            title: 'Behavioral Patterns',
            path: 'behavioral-patterns',
            loadComponent: () =>
              import(
                './features/behavioral-patterns/behavioral-patterns.component'
              ),
            children: [
              {
                title: 'Strategy Pattern',
                path: 'strategy-pattern',
                loadComponent: () =>
                  import(
                    './features/strategy-pattern/strategy-pattern.component'
                  ),
              },
              {
                title: 'Observer Pattern',
                path: 'observer-pattern',
                loadComponent: () =>
                  import(
                    './features/observer-pattern/observer-pattern.component'
                  ),
              },
            ],
          },
          {
            title: 'MVVM Pattern',
            path: 'mvvm-pattern',
            loadComponent: () =>
              import('./features/mvvm-pattern/mvvm-pattern.component'),
          },
        ],
      },
      {
        title: 'SOLID',
        path: 'solid',
        loadComponent: () => import('./features/solid/solid.component'),
        children: [
          {
            title: 'SOLID Overview',
            path: 'solid-overview',
            loadComponent: () =>
              import('./features/solid-overview/solid-overview.component'),
          },
          {
            title: 'Single Responsibility',
            path: 'solid-single-responsibility',
            loadComponent: () =>
              import(
                './features/solid-single-responsibility/solid-single-responsibility.component'
              ),
          },
          {
            title: 'Open/Closed',
            path: 'solid-open-closed',
            loadComponent: () =>
              import(
                './features/solid-open-closed/solid-open-closed.component'
              ),
          },
          {
            title: 'Liskov Substitution',
            path: 'solid-liskov-substitution',
            loadComponent: () =>
              import(
                './features/solid-liskov-substitution/solid-liskov-substitution.component'
              ),
          },
          {
            title: 'Interface Segregation',
            path: 'solid-interface-segregation',
            loadComponent: () =>
              import(
                './features/solid-interface-segregation/solid-interface-segregation.component'
              ),
          },
          {
            title: 'Dependency Inversion',
            path: 'solid-dependency-inversion',
            loadComponent: () =>
              import(
                './features/solid-dependency-inversion/solid-dependency-inversion.component'
              ),
          },
        ],
      },
      {
        title: 'Typescript',
        path: 'typescript',
        loadComponent: () =>
          import('./features/typescript/typescript.component'),
        children: [
          {
            title: 'Abstract Class',
            path: 'abstract-class',
            loadComponent: () =>
              import('./features/abstract-class/abstract-class.component'),
          },
          {
            title: 'Abstract Method',
            path: 'abstract-method',
            loadComponent: () =>
              import('./features/abstract-method/abstract-method.component'),
          },
          {
            title: 'Optional Method',
            path: 'optional-method',
            loadComponent: () =>
              import('./features/optional-method/optional-method.component'),
          },
        ],
      },
      {
        title: 'Interview',
        path: 'interview',
        loadComponent: () => import('./features/interview/interview.component'),
        children: [
          {
            title: 'Interview Questions',
            path: 'interview-questions',
            loadComponent: () =>
              import(
                './features/interview-questions/interview-questions.component'
              ),
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '' }, // Redirect unmatched routes
];
