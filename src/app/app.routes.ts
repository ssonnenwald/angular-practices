import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '', // Parent route
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'design-patterns',
        loadComponent: () =>
          import('./features/design-patterns/design-patterns.component').then(
            (c) => c.DesignPatternsComponent
          ),
      },
      {
        path: 'singleton-pattern',
        loadComponent: () =>
          import(
            './features/singleton-pattern/singleton-pattern.component'
          ).then((c) => c.SingletonPatternComponent),
      },
      {
        path: 'builder-pattern',
        loadComponent: () =>
          import('./features/builder-pattern/builder-pattern.component').then(
            (c) => c.BuilderPatternComponent
          ),
      },
      {
        path: 'factory-pattern',
        loadComponent: () =>
          import('./features/factory-pattern/factory-pattern.component').then(
            (c) => c.FactoryPatternComponent
          ),
      },
      {
        path: 'facade-pattern',
        loadComponent: () =>
          import('./features/facade-pattern/facade-pattern.component').then(
            (c) => c.FacadePatternComponent
          ),
      },
      {
        path: 'adapter-pattern',
        loadComponent: () =>
          import('./features/adapter-pattern/adapter-pattern.component').then(
            (c) => c.AdapterPatternComponent
          ),
      },
      {
        path: 'strategy-pattern',
        loadComponent: () =>
          import('./features/strategy-pattern/strategy-pattern.component').then(
            (c) => c.StrategyPatternComponent
          ),
      },
      {
        path: 'observer-pattern',
        loadComponent: () =>
          import('./features/observer-pattern/observer-pattern.component').then(
            (c) => c.ObserverPatternComponent
          ),
      },
      {
        path: 'solid-single-responsibility',
        loadComponent: () =>
          import(
            './features/solid-single-responsibility/solid-single-responsibility.component'
          ).then((c) => c.SolidSingleResponsibilityComponent),
      },
      {
        path: 'solid-open-closed',
        loadComponent: () =>
          import(
            './features/solid-open-closed/solid-open-closed.component'
          ).then((c) => c.SolidOpenClosedComponent),
      },
      {
        path: 'solid-liskov-substitution',
        loadComponent: () =>
          import(
            './features/solid-liskov-substitution/solid-liskov-substitution.component'
          ).then((c) => c.SolidLiskovSubstitutionComponent),
      },
      {
        path: 'solid-interface-segregation',
        loadComponent: () =>
          import(
            './features/solid-interface-segregation/solid-interface-segregation.component'
          ).then((c) => c.SolidInterfaceSegregationComponent),
      },
      {
        path: 'solid-dependency-inversion',
        loadComponent: () =>
          import(
            './features/solid-dependency-inversion/solid-dependency-inversion.component'
          ).then((c) => c.SolidDependencyInversionComponent),
      },
      {
        path: 'abstract-class',
        loadComponent: () =>
          import('./features/abstract-class/abstract-class.component').then(
            (c) => c.AbstractClassComponent
          ),
      },
      {
        path: 'abstract-method',
        loadComponent: () =>
          import('./features/abstract-method/abstract-method.component').then(
            (c) => c.AbstractMethodComponent
          ),
      },
      {
        path: 'optional-method',
        loadComponent: () =>
          import('./features/optional-method/optional-method.component').then(
            (c) => c.OptionalMethodComponent
          ),
      },
      {
        path: 'interview-questions',
        loadComponent: () =>
          import(
            './features/interview-questions/interview-questions.component'
          ).then((c) => c.InterviewQuestionsComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' }, // Redirect unmatched routes
];
