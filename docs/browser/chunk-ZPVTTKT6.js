import{a as d}from"./chunk-OEMQRESF.js";import"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as r,_a as c,jb as s,nb as i,ob as t,pb as n,ra as a}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var m=class p{constructor(){}conditionalTypesCode=a(`type IsString<T> = T extends string ? "Yes" : "No";
type Test = IsString<string>;  // "Yes"
`);mappedTypesCode=a(`type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

const user: ReadOnly<User> = { name: "John", age: 30 }; // Immutable object
`);genericsCode=a(`class ApiService<T> {
  getData(): Observable<T> {
    return this.http.get<T>(this.endpoint);
  }
}
`);apiResponseCode=a(`type ApiResponse<T> = T extends { success: true } ? T : { error: string };

type SuccessResponse = { success: true, data: string };
type ErrorResponse = { success: false, error: string };

function handleApiResponse<T>(response: ApiResponse<T>) {
  if ('data' in response) {
    console.log('Success:', response.data);
  } else {
    console.error('Error:', response.error);
  }
}
`);conditionalTypesCode2=a(`type UserRole = "admin" | "editor" | "viewer";

type Permissions<T extends UserRole> = T extends "admin"
  ? { read: true, write: true, delete: true }
  : T extends "editor"
  ? { read: true, write: true, delete: false }
  : { read: true, write: false, delete: false };

type AdminPermissions = Permissions<"admin">;
type EditorPermissions = Permissions<"editor">;
`);handlingPromiseCode=a(`interface User {
  id: number;
  name: string;
}

function fetchUser(id: number): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then((response) => response.json());
}

fetchUser(1).then((user) => {
  console.log(user.name); // TypeScript knows \`user\` is of type \`User\`
});
`);handlingObservableCode=a(`import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Product {
  id: number;
  name: string;
}

function fetchProducts(): Observable<Product[]> {
  return this.http.get<Product[]>('/api/products');
}

fetchProducts()
  .pipe(
    map((products) => products.map((product) => product.name))
  )
  .subscribe((productNames) => {
    // TypeScript knows \`productNames\` is \`string[]\`
    console.log(productNames);
  });
`);promiseErrorHandlingCode=a("fetchUser(1)\n  .then((user) => console.log(user))\n  .catch((error: Error) => console.error(error.message)); // TypeScript ensures `error` is an `Error`\n");observableErrorHandlingCode=a(`this.http.get<Product[]>('/api/products').pipe(
  catchError((error: HttpErrorResponse) => {
    // TypeScript ensures \`error\` is of type \`HttpErrorResponse\`
    return of([]);
  })
).subscribe();
`);asyncAwaitCode=a("async function getUser(id: number): Promise<User> {\n  const response = await fetch(`/api/users/${id}`);\n  return response.json(); // TypeScript ensures the resolved value is of type `User`\n}\n");discriminatedUnionCode=a(`interface Admin {
  role: 'admin';
  privileges: string[];
}

interface User {
  role: 'user';
  subscription: string;
}

type Person = Admin | User;

function handlePerson(person: Person) {
  if (person.role === 'admin') {
    console.log('Admin privileges:', person.privileges);
  } else {
    console.log('User subscription:', person.subscription);
  }
}
`);customTypeGuardsCode=a(`interface Product {
  id: number;
  name: string;
}

interface ErrorResponse {
  error: string;
}

function isProduct(response: Product | ErrorResponse): response is Product {
  return (response as Product).id !== undefined;
}

async function fetchProduct(): Promise<Product | ErrorResponse> {
  const response = await fetch('/api/product');
  return response.json();
}

fetchProduct().then(response => {
  if (isProduct(response)) {
    console.log('Product Name:', response.name);
  } else {
    console.error('Error:', response.error);
  }
});
`);complexStateCode=a(`type LoadingState = { state: 'loading' };
type SuccessState = { state: 'success'; data: string };
type ErrorState = { state: 'error'; message: string };

type AppState = LoadingState | SuccessState | ErrorState;

function render(state: AppState) {
  switch (state.state) {
    case 'loading':
      console.log('Loading...');
      break;
    case 'success':
      console.log('Data:', state.data);
      break;
    case 'error':
      console.error('Error:', state.message);
      break;
  }
}
`);reusableServiceCode=a(`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
`);reusableServiceUsageCode=a(`interface User {
  id: number;
  name: string;
}

const user$ = this.apiService.fetchData<User>('/api/users/1');
user$.subscribe(user => console.log(user.name)); // TypeScript knows \`user\` is of type \`User\`
`);reusableComponentCode=a(`import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: \`
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  \`,
  standalone: true
})
export class ListComponent<T> {
  @Input() items: T[] = [];
}
`);reusableComponentUsageCode=a(`<app-list [items]="['Apple', 'Banana', 'Cherry']"></app-list>
<app-list [items]="[{ name: 'John' }, { name: 'Jane' }]"></app-list>
`);utilityFunctionCode=a(`function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = { name: 'Alice' };
const details = { age: 30 };

const result = merge(person, details);  // Type is inferred as { name: string; age: number; }
`);intersectionTypeCode1=a(`interface ApiResponse {
  status: number;
  timestamp: Date;
}

interface User {
  id: number;
  name: string;
}

type UserResponse = ApiResponse & User;

const response: UserResponse = {
  status: 200,
  timestamp: new Date(),
  id: 1,
  name: 'Alice'
};
`);intersectionTypeCode2=a(`interface BaseProps {
  id: string;
  visible: boolean;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
}

type CombinedButtonProps = BaseProps & ButtonProps;

const button: CombinedButtonProps = {
  id: 'submitBtn',
  visible: true,
  label: 'Submit',
  onClick: () => console.log('Button clicked')
};
`);intersectionTypeCode3=a(`interface LoggingService {
  log: (message: string) => void;
}

interface DataService<T> {
  fetchData: () => Promise<T>;
}

type Service<T> = LoggingService & DataService<T>;

class UserService implements Service<User> {
  log(message: string) {
    console.log('Log:', message);
  }

  async fetchData(): Promise<User> {
    return { id: 1, name: 'Alice' };
  }
}
`);changeDetectionCode1=a(`import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class UserCardComponent {
  @Input() user!: { name: string; age: number };
}
`);changeDetectionCode2=a(`<li *ngFor="let user of users; trackBy: trackById">{{ user.name }}</li>
`);changeDetectionCode3=a(`trackById(index: number, user: { id: number }): number {
  return user.id;
}
`);static \u0275fac=function(l){return new(l||p)};static \u0275cmp=c({type:p,selectors:[["app-interview-questions"]],decls:664,vars:48,consts:[[1,"mb-4"],[3,"code","language"],[1,"hljs-attr"]],template:function(l,o){l&1&&(i(0,"h1"),e(1,"Interview Questions"),t(),i(2,"ol")(3,"li"),e(4," What are the key features of Angular that make it suitable for web develeropers? "),i(5,"div",0)(6,"b"),e(7,"A"),t(),e(8,":\xA0\xA0Angular offers a modular architecture, two-way data binding, dependency injection, and a comprehensive set of tools that streamline the development process. "),t()(),i(9,"li"),e(10," Can you explain the concept of two-way data binding in Angular? "),i(11,"div",0)(12,"b"),e(13,"A"),t(),e(14,":\xA0\xA0Two-way data binding in Angular allows automatic synchronization of data between the model (component class) and the view (template), meaning any changes in the data reflects instantly in the view and vice-versa. "),t()(),i(15,"li"),e(16," What is the role of services in Angular? "),i(17,"div",0)(18,"b"),e(19,"A"),t(),e(20,":\xA0\xA0Services in Angular are singleton objects that enable the sharing of data and functionality across components, adhering to the Separation of Concerns Principle. "),t()(),i(21,"li"),e(22," How do you manage state in an Angular application? "),i(23,"div",0)(24,"b"),e(25,"A"),t(),e(26,":\xA0\xA0State management in Angular can be handled using services for localized data, NgRx for robust and structured state management, or by using local storage for simple data persistence. "),t()(),i(27,"li"),e(28," Describe how dependency injection works in Angular. "),i(29,"div",0)(30,"b"),e(31,"A"),t(),e(32,":\xA0\xA0Angular's dependency injection is a design pattern that allows an object to receive other objects it depends on without explicitly instantiating them within the class, making the code more modular and testable. "),t()(),i(33,"li"),e(34," What are Angular directives and how do they work? "),i(35,"div",0)(36,"b"),e(37,"A"),t(),e(38,":\xA0\xA0Directives in Angular are classes that add addditional behavior to elements in your Angular applications.\xA0\xA0They are used to manipulate the Document Object Model (DOM) by changing its layout, appearance, or removing elements. "),t()(),i(39,"li"),e(40," Could you explain what an Angular module is? "),i(41,"div",0)(42,"b"),e(43,"A"),t(),e(44,":\xA0\xA0An Angular module is a container that encapsulates related components, services, directives, and pipes, organizing them into a cohesive block of functionality, typically represented by an NgModule. "),t()(),i(45,"li"),e(46," How does Angular handle HTTP requests? "),i(47,"div",0)(48,"b"),e(49,"A"),t(),e(50,":\xA0\xA0Angular uses the HttpClient module to handle HTTP requests, which provides a simplified API for HTTP functionality, supporting features like interception, error handling, and request retry. "),t()(),i(51,"li"),e(52," What strategies can be used to optimize performance in Angular applications? "),i(53,"div",0)(54,"b"),e(55,"A"),t(),e(56,":\xA0\xA0Performance optimization in Angular can be achieved through techniques like lazy loading modules, reducing bundle size via AOT compilation, using OnPush change detection strategy, and avoiding unnecessary expressions in templates. "),t()(),i(57,"li"),e(58," What are pipes in Angular and how are they utilized? "),i(59,"div",0)(60,"b"),e(61,"A"),t(),e(62,":\xA0\xA0Pipes in Angular are functions that transform data displayed in templates, allowing developers to display data in a desired format, such as currency, date, or string transformations, without changing the source data. "),t()(),i(63,"li"),e(64," How would you architect an Angular application to handle real-time updates efficiently while maintaining scalability? "),i(65,"div",0)(66,"b"),e(67,"A"),t(),e(68,":\xA0\xA0To architect an Angular application for real-time updates while ensuring scalability, I would use "),i(69,"b"),e(70,"SignalR"),t(),e(71," for real-time communication.\xA0\xA0SignalR is an excellent choice as it allows bidirectional communication between the client and server, making it suitable for scenarios like chat apps, notifications, or live updates."),n(72,"br")(73,"br"),e(74," On the backend, I would use "),i(75,"b"),e(76,"ASP.NET Core"),t(),e(77," to set up a SignalR Hub.\xA0\xA0This Hub handles communication between clients and the server, allowing the server to push updates to all connected clients.\xA0\xA0To scale efficiently, I would use "),i(78,"b"),e(79,"Redis as a backplane"),t(),e(80," for SignalR.\xA0\xA0This ensures that messages are broadcasted across multiple server instances, allowing the app to scale horizontally."),n(81,"br")(82,"br"),e(83," On the frontend, I would integrate SignalR into Angular by creating a "),i(84,"b"),e(85,"SignalR service"),t(),e(86," that manages the WebSocket connection.\xA0\xA0This service would expose methods for subscribing to real-time updates and sending messages to the server.\xA0\xA0I\u2019d also use Angular\u2019s "),i(87,"b"),e(88,"Reactive programming"),t(),e(89," features like "),i(90,"b"),e(91,"BehaviorSubject"),t(),e(92," to manage and propagate state updates across components."),n(93,"br")(94,"br"),e(95," To handle scalability, I\u2019d set up "),i(96,"b"),e(97,"load balancing"),t(),e(98," and ensure SignalR can scale horizontally.\xA0\xA0I would also implement "),i(99,"b"),e(100,"reconnection strategies"),t(),e(101," in the Angular client to handle any disconnections gracefully."),n(102,"br")(103,"br"),e(104," In summary, "),i(105,"b"),e(106,"SignalR"),t(),e(107," is a robust solution for handling real-time data, and combining it with Redis for horizontal scaling and Angular\u2019s reactive programming features ensures both performance and scalability. "),t()(),i(108,"li"),e(109," Now, could you discuss how you would use TypeScript's advanced type features, such as conditional types or mapped types, to enhance the type safety and maintainability of a large-scale Angular application? "),i(110,"div",0)(111,"b"),e(112,"A"),t(),e(113,":\xA0\xA0In a large-scale Angular application, TypeScript\u2019s advanced type features, such as "),i(114,"b"),e(115,"conditional types"),t(),e(116,", "),i(117,"b"),e(118,"mapped types"),t(),e(119,", and "),i(120,"b"),e(121,"generics"),t(),e(122,", can significantly improve both type safety and maintainability."),n(123,"br")(124,"br"),i(125,"ol")(126,"li")(127,"b"),e(128,"Conditional Types"),t(),e(129,":\xA0\xA0These are useful when you want to define types based on a condition.\xA0\xA0For example, you could use conditional types to create more flexible and type-safe APIs in a service layer that behaves differently depending on the input type.\xA0\xA0This allows the code to adapt to different scenarios while still enforcing correct types."),n(130,"br")(131,"br")(132,"app-code-highlight",1),e(133," In an Angular application, this could be used for form validation or conditional logic in service calls."),n(134,"br")(135,"br"),t(),i(136,"li")(137,"b"),e(138,"Mapped Types"),t(),e(139,":\xA0\xA0Mapped types allow you to create new types by transforming properties of an existing type.\xA0\xA0This is useful for generating types dynamically, especially when working with API responses or models that need to be adjusted based on certain conditions.\xA0\xA0It enhances maintainability by reducing the need for repetitive code."),n(140,"br")(141,"br")(142,"app-code-highlight",1),e(143," For example, if you have models representing entities from an API, you can create dynamic types for form inputs or responses with just a single transformation, ensuring consistency across the app."),n(144,"br")(145,"br"),t(),i(146,"li")(147,"b"),e(148,"Generics"),t(),e(149,":\xA0\xA0Generics provide flexibility while ensuring type safety.\xA0\xA0By using generics in services, components, and directives, we can create reusable, type-safe components that work with a variety of data types."),n(150,"br")(151,"br")(152,"app-code-highlight",1),e(153," In a large-scale app, this reduces duplication and ensures that every part of the app that interacts with external data or APIs is type-safe. "),t()(),n(154,"br"),e(155," By leveraging "),i(156,"b"),e(157,"conditional types"),t(),e(158,", "),i(159,"b"),e(160,"mapped types"),t(),e(161,", and "),i(162,"b"),e(163,"generics"),t(),e(164,", we can create a highly flexible, scalable, and maintainable Angular application where types are checked throughout the entire codebase, reducing runtime errors and enhancing development efficiency. "),t()(),i(165,"li"),e(166," Could you explain how you would use TypeScript's utility types, such as `Partial`, `Readonly`, or `Pick`, to improve the flexibility and safety of your TypeScript code in a large-scale application? "),i(167,"div",0)(168,"b"),e(169,"A"),t(),e(170,":\xA0\xA0In a large-scale TypeScript application, utility types like Partial, Readonly, and Pick can significantly improve code flexibility and safety by allowing you to precisely control which properties are optional, immutable, or included in a specific type, thereby enhancing type-checking and reducing potential errors while making your code more expressive and maintainable. "),t()(),i(171,"li"),e(172," Could you discuss how you would implement conditional types in TypeScript to handle different states or configurations in a large-scale application? "),i(173,"div",0)(174,"b"),e(175,"A"),t(),e(176,":\xA0\xA0In a large-scale application, "),i(177,"b"),e(178,"conditional types"),t(),e(179," in TypeScript are an effective way to handle different states or configurations, especially when you need to adapt types based on certain conditions.\xA0\xA0For instance, when dealing with complex forms, API responses, or different UI states, conditional types allow us to create flexible and type-safe structures that change dynamically depending on input types or conditions."),n(180,"br")(181,"br"),i(182,"h5")(183,"b"),e(184,"Example 1: Handling API Responses"),t()(),e(185," Conditional types can be useful when working with API responses that may vary based on success or failure.\xA0\xA0We can create a type that conditionally returns different types based on the result of an API call. "),n(186,"br")(187,"br")(188,"app-code-highlight",1),e(189," In this example, the return type changes based on whether the "),i(190,"span",2),e(191,"success"),t(),e(192," flag is "),i(193,"span",2),e(194,"true"),t(),e(195," or "),i(196,"span",2),e(197,"false"),t(),e(198,", ensuring that we can handle success and failure states safely in our application."),n(199,"br")(200,"br"),i(201,"h5")(202,"b"),e(203,"Example 2: Handling Different Configurations"),t()(),e(204," Conditional types can also help in managing different configurations in a large application, such as form inputs that vary depending on user roles or settings."),n(205,"br")(206,"br")(207,"app-code-highlight",1),e(208," Here, the "),i(209,"span",2),e(210,"Permissions"),t(),e(211," type dynamically adjusts based on the "),i(212,"span",2),e(213,"UserRole"),t(),e(214,", providing different permission structures for admins, editors, and viewers.\xA0\xA0This ensures that the type system enforces correct permissions depending on the user\u2019s role, preventing incorrect access rights."),n(215,"br")(216,"br"),i(217,"h5")(218,"b"),e(219,"Conclusion"),t()(),e(220," By using "),i(221,"b"),e(222,"conditional types"),t(),e(223,", we can create types that adapt based on the context, making our application more flexible, type-safe, and easier to maintain.\xA0\xA0This is particularly useful in scenarios where we need to handle different configurations, states, or responses that vary based on input types or conditions.\xA0\xA0In a large-scale application, this reduces the risk of errors, improves code clarity, and enhances overall maintainability. "),t()(),i(224,"li"),e(225," How would you leverage TypeScript's type system to ensure type safety when dealing with asynchronous operations, such as handling promises or observables in a large-scale application? "),i(226,"div",0)(227,"b"),e(228,"A"),t(),e(229,":\xA0\xA0In a large-scale application, ensuring type safety when dealing with asynchronous operations such as "),i(230,"b"),e(231,"Promises"),t(),e(232," and "),i(233,"b"),e(234,"Observables"),t(),e(235," is crucial to prevent runtime errors and improve maintainability."),n(236,"br")(237,"br"),i(238,"h5")(239,"b"),e(240,"1. Handling Promises:"),t()(),e(241," TypeScript\u2019s type system can ensure type safety by explicitly defining the types of values that Promises resolve to.\xA0\xA0By using generic types with "),i(242,"span",2),e(243,"Promise<T>"),t(),e(244,", we can enforce what type the Promise will return."),n(245,"br")(246,"br"),e(247," For example, if you have an API call that returns a user object, you can ensure type safety like so: "),n(248,"app-code-highlight",1),e(249," By using "),i(250,"span",2),e(251,"Promise<User>"),t(),e(252,", TypeScript can infer the structure of the resolved value, ensuring that any operation on "),i(253,"span",2),e(254,"user"),t(),e(255," is type-safe."),n(256,"br")(257,"br"),i(258,"h5")(259,"b"),e(260,"2. Handling Observables:"),t()(),e(261," For handling "),i(262,"b"),e(263,"Observables"),t(),e(264," (common with Angular's RxJS), we can ensure type safety by defining types when subscribing to streams of data.\xA0\xA0Angular\u2019s RxJS operators, like "),i(265,"span",2),e(266,"map"),t(),e(267,", "),i(268,"span",2),e(269,"filter"),t(),e(270,", and "),i(271,"span",2),e(272,"switchMap"),t(),e(273,", can be typed to make sure that we process the correct data."),n(274,"br")(275,"br"),e(276," For example: "),n(277,"app-code-highlight",1),e(278," Here, "),i(279,"span",2),e(280,"fetchProducts()"),t(),e(281," returns an "),i(282,"span",2),e(283,"Observable<Product[]>"),t(),e(284,", ensuring that each item in the stream is typed correctly, and TypeScript provides type safety throughout the RxJS pipeline."),n(285,"br")(286,"br"),i(287,"h5")(288,"b"),e(289,"3. Error Handling with TypeScript:"),t()(),e(290," When working with asynchronous operations, handling errors properly is key. TypeScript\u2019s type system can help here as well.\xA0\xA0For example, when handling errors in Promises or Observables, we can define specific types for error handling."),n(291,"br")(292,"br"),e(293," For "),i(294,"b"),e(295,"Promises"),t(),e(296,": "),n(297,"app-code-highlight",1),e(298," For "),i(299,"b"),e(300,"Observables"),t(),e(301,": "),n(302,"app-code-highlight",1),i(303,"h5")(304,"b"),e(305,"4. Async-Await with Type Safety:"),t()(),e(306," For async-await operations, TypeScript provides strong typing by ensuring the return type of async functions matches the expected type: "),n(307,"app-code-highlight",1),i(308,"h5")(309,"b"),e(310,"Conclusion:"),t()(),e(311," By leveraging TypeScript\u2019s "),i(312,"b"),e(313,"generic types"),t(),e(314," with "),i(315,"b"),e(316,"Promises"),t(),e(317," and "),i(318,"b"),e(319,"Observables"),t(),e(320,", we can ensure that asynchronous operations are type-safe throughout the application.\xA0\xA0TypeScript's type system allows us to define expected return types, handle errors correctly, and use advanced patterns like async/await with proper type inference.\xA0\xA0This reduces the risk of bugs, improves code clarity, and ensures that asynchronous operations behave as expected in a large-scale application. "),t()(),i(321,"li"),e(322," Could you explain how you would use TypeScript's type guards to handle more complex type scenarios in a large-scale application? "),i(323,"div",0)(324,"b"),e(325,"A"),t(),e(326,":\xA0\xA0In a large-scale Angular application, "),i(327,"b"),e(328,"TypeScript\u2019s type guards"),t(),e(329," are essential for handling complex type scenarios where multiple possible types can exist, such as API responses, form inputs, or component interactions.\xA0\xA0Type guards help "),i(330,"b"),e(331,"narrow down types"),t(),e(332," at runtime, ensuring type safety while improving code readability and maintainability."),n(333,"br")(334,"br"),i(335,"h5")(336,"b"),e(337,"Example: Discriminated Unions"),t()(),e(338," One of the most effective uses of type guards is with "),i(339,"b"),e(340,"discriminated unions"),t(),e(341,", where we have objects with a common property that distinguishes their type. For instance:"),n(342,"br")(343,"app-code-highlight",1),e(344," In this example, TypeScript correctly narrows down the type of "),i(345,"span",2),e(346,"person"),t(),e(347," based on the "),i(348,"span",2),e(349,"role"),t(),e(350," property, ensuring type safety for each block."),n(351,"br")(352,"br"),i(353,"h5")(354,"b"),e(355,"Example: Custom Type Guards"),t()(),e(356," For more complex scenarios, "),i(357,"b"),e(358,"custom type guards"),t(),e(359," are useful.\xA0\xA0They\u2019re especially powerful when dealing with APIs that may return various data structures."),n(360,"br")(361,"app-code-highlight",1),e(362," The "),i(363,"span",2),e(364,"isProduct"),t(),e(365," type guard ensures the TypeScript compiler understands what type we\u2019re dealing with, enhancing both safety and readability."),n(366,"br")(367,"br"),i(368,"h5")(369,"b"),e(370,"Example: Handling Complex State"),t()(),e(371," In large-scale applications, you often have complex state objects with varying structures.\xA0\xA0Type guards allow us to safely access properties without unnecessary type assertions."),n(372,"br")(373,"app-code-highlight",1),e(374," This approach ensures the application correctly handles various states with complete type safety."),n(375,"br")(376,"br"),i(377,"h5")(378,"b"),e(379,"Conclusion:"),t()(),e(380," By using "),i(381,"b"),e(382,"TypeScript\u2019s type guards"),t(),e(383,", we can create robust type-checking mechanisms that enhance maintainability, particularly when dealing with "),i(384,"b"),e(385,"discriminated unions"),t(),e(386,", "),i(387,"b"),e(388,"API responses"),t(),e(389,", and "),i(390,"b"),e(391,"complex state handling"),t(),e(392,".\xA0\xA0Type guards ensure our codebase remains scalable, reliable, and free from type-related runtime errors. "),t()(),i(393,"li"),e(394," Could you elaborate on how you would use TypeScript's generics to create reusable components or functions in a large-scale application? "),i(395,"div",0)(396,"b"),e(397,"A"),t(),e(398,":\xA0\xA0In a large-scale Angular application, "),i(399,"b"),e(400,"TypeScript\u2019s generics"),t(),e(401," are invaluable for building "),i(402,"b"),e(403,"reusable components, functions, and services"),t(),e(404," with strong type safety while maintaining flexibility.\xA0\xA0Generics allow us to "),i(405,"b"),e(406,"define components or functions that can work with various types without sacrificing type checking"),t(),e(407,", which is essential for scalable, maintainable codebases."),n(408,"br")(409,"br"),i(410,"h5")(411,"b"),e(412,"Example 1: Reusable Service with Generics"),t()(),e(413," One common use case is building a reusable HTTP service that can handle various data models."),n(414,"br")(415,"app-code-highlight",1),e(416," Here, "),i(417,"span",2),e(418,"fetchData<T>"),t(),e(419," is a generic method that returns an "),i(420,"span",2),e(421,"Observable<T>"),t(),e(422,".\xA0\xA0This allows the service to be used with any data type, ensuring type safety when making API calls."),n(423,"br")(424,"app-code-highlight",1),i(425,"h5")(426,"b"),e(427,"Example 2: Reusable Components with Generics"),t()(),e(428," Generics are also powerful when creating UI components that need to be "),i(429,"b"),e(430,"type-aware"),t(),e(431,"."),n(432,"br")(433,"app-code-highlight",1),e(434," This "),i(435,"span",2),e(436,"ListComponent"),t(),e(437," can be used with different types, such as strings or complex objects, and TypeScript will enforce the correct type."),n(438,"br")(439,"app-code-highlight",1),i(440,"h5")(441,"b"),e(442,"Example 3: Utility Functions with Generics"),t()(),e(443," Utility functions often benefit from generics to provide "),i(444,"b"),e(445,"type inference and reusability"),t(),e(446,"."),n(447,"br")(448,"app-code-highlight",1),e(449," The "),i(450,"span",2),e(451,"merge"),t(),e(452," function works with any two objects and returns a type-safe combination of them."),n(453,"br")(454,"br"),i(455,"h5")(456,"b"),e(457,"Conclusion"),t()(),e(458," Using "),i(459,"b"),e(460,"TypeScript\u2019s generics"),t(),e(461," allows us to build "),i(462,"b"),e(463,"flexible, type-safe, and reusable components, services, and utility functions"),t(),e(464,".\xA0\xA0By leveraging generics, we enhance code maintainability, reduce duplication, and enforce consistency across the application.\xA0\xA0This approach is particularly beneficial in large-scale applications where scalability and type safety are priorities. "),t()(),i(465,"li"),e(466," Could you discuss how you would use TypeScript's intersection types to combine multiple types and enhance the capabilities of your objects or interfaces in a large-scale application? "),i(467,"div",0)(468,"b"),e(469,"A"),t(),e(470,":\xA0\xA0In a large-scale Angular application, "),i(471,"b"),e(472,"TypeScript\u2019s intersection types"),t(),e(473," are powerful for "),i(474,"b"),e(475,"combining multiple types into a single type"),t(),e(476,", enhancing flexibility and ensuring precise type checking.\xA0\xA0This approach is particularly useful when "),i(477,"b"),e(478,"merging configuration objects, combining interfaces, or composing functionalities from different modules"),t(),e(479,"."),n(480,"br")(481,"br"),i(482,"h5")(483,"b"),e(484,"Example 1: Merging Interfaces for API Responses"),t()(),e(485," Suppose we have a scenario where we want to "),i(486,"b"),e(487,"combine common metadata with specific data structures"),t(),e(488," returned from different APIs."),n(489,"br")(490,"app-code-highlight",1),e(491," In this example, "),i(492,"span",2),e(493,"UserResponse"),t(),e(494," is an intersection type that combines "),i(495,"span",2),e(496,"ApiResponse"),t(),e(497," and "),i(498,"span",2),e(499,"User"),t(),e(500,".\xA0\xA0This ensures the resulting object has all properties from both interfaces, providing type safety when accessing them."),n(501,"br")(502,"br"),i(503,"h5")(504,"b"),e(505,"Example 2: Enhancing Components with Intersection Types"),t()(),e(506," When building reusable UI components, intersection types allow us to "),i(507,"b"),e(508,"extend base props with additional options"),t(),e(509,"."),n(510,"br")(511,"app-code-highlight",1),e(512," This approach enables components to accept a combination of properties, ensuring flexibility while maintaining strong typing."),n(513,"br")(514,"br"),i(515,"h5")(516,"b"),e(517,"Example 3: Combining Services and Models"),t()(),e(518," Intersection types are also effective when composing "),i(519,"b"),e(520,"services that interact with various models"),t(),e(521,"."),n(522,"br")(523,"app-code-highlight",1),e(524," Here, the "),i(525,"span",2),e(526,"UserService"),t(),e(527," implements both logging and data-fetching capabilities, providing a unified service with clear type definitions."),n(528,"br")(529,"br"),i(530,"h5")(531,"b"),e(532,"Conclusion"),t()(),e(533," By using "),i(534,"b"),e(535,"intersection types"),t(),e(536,", TypeScript allows us to "),i(537,"b"),e(538,"compose complex structures by merging multiple types into a single, well-defined unit"),t(),e(539,".\xA0\xA0This approach improves "),i(540,"b"),e(541,"code readability, maintainability, and type safety"),t(),e(542,", which are essential for scaling large Angular applications. "),t()(),i(543,"li"),e(544," Now, could you discuss how you would optimize the performance of an Angular application, particularly focusing on change detection strategies? "),i(545,"div",0)(546,"b"),e(547,"A"),t(),e(548,":\xA0\xA0To optimize the performance of an Angular application, "),i(549,"b"),e(550,"effective management of change detection is crucial"),t(),e(551,".\xA0\xA0By default, Angular\u2019s change detection runs for every asynchronous event, which can be inefficient for complex applications.\xA0\xA0Here\u2019s how I approach optimization:"),n(552,"br")(553,"br"),i(554,"h5")(555,"b"),e(556,"1. Using "),i(557,"span",2),e(558,"OnPush"),t(),e(559," Change Detection Strategy:"),t()(),e(560," Setting the "),i(561,"span",2),e(562,"ChangeDetectionStrategy"),t(),e(563," to "),i(564,"span",2),e(565,"OnPush"),t(),e(566," in components ensures change detection only runs when: "),i(567,"ul")(568,"li")(569,"b"),e(570,"@Input() properties"),t(),e(571," change."),t(),i(572,"li")(573,"b"),e(574,"Event handlers"),t(),e(575," within the component trigger updates."),t(),i(576,"li")(577,"b"),e(578,"Observables/Promises"),t(),e(579," emit new values."),t()(),n(580,"br"),e(581," Example:"),n(582,"br")(583,"app-code-highlight",1),e(584," This approach is particularly effective when components are mostly "),i(585,"b"),e(586,"display-only"),t(),e(587," or rely on "),i(588,"b"),e(589,"immutable data structures"),t(),e(590,"."),n(591,"br")(592,"br"),i(593,"h5")(594,"b"),e(595,"2. Using "),i(596,"span",2),e(597,"trackBy"),t(),e(598," with "),i(599,"span",2),e(600,"*ngFor"),t(),e(601,":"),t()(),e(602," When rendering large lists, using "),i(603,"span",2),e(604,"trackBy"),t(),e(605," prevents Angular from re-rendering unchanged items."),n(606,"br")(607,"app-code-highlight",1)(608,"app-code-highlight",1),e(609," This ensures only modified items are updated, significantly improving rendering performance."),n(610,"br")(611,"br"),i(612,"h5")(613,"b"),e(614,"3. Avoiding Unnecessary Change Detection:"),t()(),i(615,"ul")(616,"li"),e(617," Using "),i(618,"span",2),e(619,"NgZone.runOutsideAngular()"),t(),e(620," for operations that do not affect the UI, like third-party library interactions or background tasks. "),t(),i(621,"li"),e(622," Leveraging "),i(623,"span",2),e(624,"markForCheck()"),t(),e(625," and "),i(626,"span",2),e(627,"detectChanges()"),t(),e(628," from "),i(629,"span",2),e(630,"ChangeDetectorRef"),t(),e(631," when more granular control is needed. "),t()(),n(632,"br"),i(633,"h5")(634,"b"),e(635,"4. Leveraging Signals (Angular 16+):"),t()(),e(636," Angular Signals provide a way to "),i(637,"b"),e(638,"reactively manage state updates"),t(),e(639," with fine-grained control, ensuring only the necessary parts of the DOM are updated."),n(640,"br")(641,"br"),i(642,"h5")(643,"b"),e(644,"5. Optimizing Async Pipes:"),t()(),e(645," Using the "),i(646,"span",2),e(647,"async"),t(),e(648," pipe efficiently unsubscribes from observables, but for components with frequent changes, manual subscription management can provide better performance."),n(649,"br")(650,"br"),i(651,"h5")(652,"b"),e(653,"6. Lazy Loading & Code-Splitting:"),t()(),e(654," Ensuring modules are loaded on-demand rather than upfront to reduce the initial bundle size."),n(655,"br")(656,"br"),i(657,"h5")(658,"b"),e(659,"Conclusion:"),t()(),e(660," Effectively optimizing an Angular application involves a combination of "),i(661,"b"),e(662,"OnPush change detection, efficient use of trackBy, leveraging Signals, and careful management of asynchronous operations"),t(),e(663,".\xA0\xA0This approach ensures that change detection runs only when necessary, reducing unnecessary computations and improving scalability. "),t()()()),l&2&&(r(132),s("code",o.conditionalTypesCode)("language","typescript"),r(10),s("code",o.mappedTypesCode)("language","typescript"),r(10),s("code",o.genericsCode)("language","typescript"),r(36),s("code",o.apiResponseCode)("language","typescript"),r(19),s("code",o.conditionalTypesCode2)("language","typescript"),r(41),s("code",o.handlingPromiseCode)("language","typescript"),r(29),s("code",o.handlingObservableCode)("language","typescript"),r(20),s("code",o.promiseErrorHandlingCode)("language","typescript"),r(5),s("code",o.observableErrorHandlingCode)("language","typescript"),r(5),s("code",o.asyncAwaitCode)("language","typescript"),r(36),s("code",o.discriminatedUnionCode)("language","typescript"),r(18),s("code",o.customTypeGuardsCode)("language","typescript"),r(12),s("code",o.complexStateCode)("language","typescript"),r(42),s("code",o.reusableServiceCode)("language","typescript"),r(9),s("code",o.reusableServiceUsageCode)("language","typescript"),r(9),s("code",o.reusableComponentCode)("language","typescript"),r(6),s("code",o.reusableComponentUsageCode)("language","typescript"),r(9),s("code",o.utilityFunctionCode)("language","typescript"),r(42),s("code",o.intersectionTypeCode1)("language","typescript"),r(21),s("code",o.intersectionTypeCode2)("language","typescript"),r(12),s("code",o.intersectionTypeCode3)("language","typescript"),r(60),s("code",o.changeDetectionCode1)("language","typescript"),r(24),s("code",o.changeDetectionCode2)("language","typescript"),r(),s("code",o.changeDetectionCode3)("language","typescript"))},dependencies:[d],encapsulation:2})};export{m as InterviewQuestionsComponent};
