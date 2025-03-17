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
    ],
  },
  { path: '**', redirectTo: '' }, // Redirect unmatched routes
];
