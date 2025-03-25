import { Type } from '@angular/core';
import HomeComponent from '../../features/home/home.component';
import DesignPatternsComponent from '../../features/design-patterns/design-patterns.component';
import AbstractClassComponent from '../../features/abstract-class/abstract-class.component';
import AbstractMethodComponent from '../../features/abstract-method/abstract-method.component';
import AdapterPatternComponent from '../../features/adapter-pattern/adapter-pattern.component';
import BehavioralPatternsComponent from '../../features/behavioral-patterns/behavioral-patterns.component';
import BuilderPatternComponent from '../../features/builder-pattern/builder-pattern.component';
import CreationalPatternsComponent from '../../features/creational-patterns/creational-patterns.component';
import FacadePatternComponent from '../../features/facade-pattern/facade-pattern.component';
import FactoryPatternComponent from '../../features/factory-pattern/factory-pattern.component';
import InterviewQuestionsComponent from '../../features/interview-questions/interview-questions.component';
import MvvmPatternComponent from '../../features/mvvm-pattern/mvvm-pattern.component';
import ObserverPatternComponent from '../../features/observer-pattern/observer-pattern.component';
import OptionalMethodComponent from '../../features/optional-method/optional-method.component';
import SingletonPatternComponent from '../../features/singleton-pattern/singleton-pattern.component';
import SolidDependencyInversionComponent from '../../features/solid-dependency-inversion/solid-dependency-inversion.component';
import SolidInterfaceSegregationComponent from '../../features/solid-interface-segregation/solid-interface-segregation.component';
import SolidLiskovSubstitutionComponent from '../../features/solid-liskov-substitution/solid-liskov-substitution.component';
import SolidOpenClosedComponent from '../../features/solid-open-closed/solid-open-closed.component';
import SolidOverviewComponent from '../../features/solid-overview/solid-overview.component';
import SolidSingleResponsibilityComponent from '../../features/solid-single-responsibility/solid-single-responsibility.component';
import StrategyPatternComponent from '../../features/strategy-pattern/strategy-pattern.component';
import StructuralPatternsComponent from '../../features/structural-patterns/structural-patterns.component';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
  component?: Type<unknown>;
};

export const menuItems: MenuItem[] = [
  {
    icon: 'home',
    label: 'Home',
    route: '/',
    component: HomeComponent,
  },
  {
    icon: 'dashboard',
    label: 'Patterns',
    route: 'patterns',
    subItems: [
      {
        icon: 'dashboard',
        label: 'Design Patterns Overview',
        route: '/design-patterns',
        component: DesignPatternsComponent,
      },
      {
        icon: 'dashboard',
        label: 'Creational Patterns',
        route: '/creational-patterns',
        component: CreationalPatternsComponent,
        subItems: [
          {
            icon: 'dashboard',
            label: 'Singleton Pattern',
            route: '/singleton-pattern',
            component: SingletonPatternComponent,
          },
          {
            icon: 'dashboard',
            label: 'Builder Pattern',
            route: '/builder-pattern',
            component: BuilderPatternComponent,
          },
          {
            icon: 'dashboard',
            label: 'Factory Pattern',
            route: '/factory-pattern',
            component: FactoryPatternComponent,
          },
        ],
      },
      {
        icon: 'dashboard',
        label: 'Structural Patterns',
        route: '/structural-patterns',
        component: StructuralPatternsComponent,
        subItems: [
          {
            icon: 'dashboard',
            label: 'Facade Pattern',
            route: '/facade-pattern',
            component: FacadePatternComponent,
          },
          {
            icon: 'dashboard',
            label: 'Adapter Pattern',
            route: '/adapter-pattern',
            component: AdapterPatternComponent,
          },
        ],
      },
      {
        icon: 'dashboard',
        label: 'Behavioral Patterns',
        route: '/behavioral-patterns',
        component: BehavioralPatternsComponent,
        subItems: [
          {
            icon: 'dashboard',
            label: 'Strategy Pattern',
            route: '/strategy-pattern',
            component: StrategyPatternComponent,
          },
          {
            icon: 'dashboard',
            label: 'Observer Pattern',
            route: '/observer-pattern',
            component: ObserverPatternComponent,
          },
        ],
      },
      {
        icon: 'dashboard',
        label: 'MVVM Pattern',
        route: '/mvvm-pattern',
        component: MvvmPatternComponent,
      },
    ],
  },
  {
    icon: 'dashboard',
    label: 'SOLID',
    route: 'solid',
    subItems: [
      {
        icon: 'dashboard',
        label: 'SOLID Overview',
        route: '/solid-overview',
        component: SolidOverviewComponent,
      },
      {
        icon: 'dashboard',
        label: 'Single Responsibility',
        route: '/solid-single-responsibility',
        component: SolidSingleResponsibilityComponent,
      },
      {
        icon: 'dashboard',
        label: 'Open/Closed',
        route: '/solid-open-closed',
        component: SolidOpenClosedComponent,
      },
      {
        icon: 'dashboard',
        label: 'Liskov Substitution',
        route: '/solid-liskov-substitution',
        component: SolidLiskovSubstitutionComponent,
      },
      {
        icon: 'dashboard',
        label: 'Interface Segregation',
        route: '/solid-interface-segregation',
        component: SolidInterfaceSegregationComponent,
      },
      {
        icon: 'dashboard',
        label: 'Dependency Inversion',
        route: '/solid-dependency-inversion',
        component: SolidDependencyInversionComponent,
      },
    ],
  },
  {
    icon: 'dashboard',
    label: 'Typescript',
    route: 'typescript',
    subItems: [
      {
        icon: 'dashboard',
        label: 'Abstract Class',
        route: '/abstract-class',
        component: AbstractClassComponent,
      },
      {
        icon: 'dashboard',
        label: 'Abstract Method',
        route: '/abstract-method',
        component: AbstractMethodComponent,
      },
      {
        icon: 'dashboard',
        label: 'Optional Method',
        route: '/optional-method',
        component: OptionalMethodComponent,
      },
    ],
  },
  {
    icon: 'dashboard',
    label: 'Interview',
    route: 'interview',
    subItems: [
      {
        icon: 'dashboard',
        label: 'Interview',
        route: '/interview-questions',
        component: InterviewQuestionsComponent,
      },
    ],
  },
];
