import { Component } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-interview-questions',
  imports: [CodeHighLightComponent],
  templateUrl: './interview-questions.component.html',
  styleUrl: './interview-questions.component.scss',
})
export class InterviewQuestionsComponent {
  constructor() {}

  public conditionalTypesCode: string = `type IsString<T> = T extends string ? "Yes" : "No";
type Test = IsString<string>;  // "Yes"
`;

  public mappedTypesCode: string = `type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

const user: ReadOnly<User> = { name: "John", age: 30 }; // Immutable object
`;

  public genericsCode: string = `class ApiService<T> {
  getData(): Observable<T> {
    return this.http.get<T>(this.endpoint);
  }
}
`;

  public apiResponseCode: string = `type ApiResponse<T> = T extends { success: true } ? T : { error: string };

type SuccessResponse = { success: true, data: string };
type ErrorResponse = { success: false, error: string };

function handleApiResponse<T>(response: ApiResponse<T>) {
  if ('data' in response) {
    console.log('Success:', response.data);
  } else {
    console.error('Error:', response.error);
  }
}
`;

  public conditionalTypesCode2: string = `type UserRole = "admin" | "editor" | "viewer";

type Permissions<T extends UserRole> = T extends "admin"
  ? { read: true, write: true, delete: true }
  : T extends "editor"
  ? { read: true, write: true, delete: false }
  : { read: true, write: false, delete: false };

type AdminPermissions = Permissions<"admin">;
type EditorPermissions = Permissions<"editor">;
`;

  public handlingPromiseCode: string = `interface User {
  id: number;
  name: string;
}

function fetchUser(id: number): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then((response) => response.json());
}

fetchUser(1).then((user) => {
  console.log(user.name); // TypeScript knows \`user\` is of type \`User\`
});
`;

  public handlingObservableCode: string = `import { Observable } from 'rxjs';
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
`;

  public promiseErrorHandlingCode: string = `fetchUser(1)
  .then((user) => console.log(user))
  .catch((error: Error) => console.error(error.message)); // TypeScript ensures \`error\` is an \`Error\`
`;

  public observableErrorHandlingCode: string = `this.http.get<Product[]>('/api/products').pipe(
  catchError((error: HttpErrorResponse) => {
    // TypeScript ensures \`error\` is of type \`HttpErrorResponse\`
    return of([]);
  })
).subscribe();
`;

  public asyncAwaitCode: string = `async function getUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json(); // TypeScript ensures the resolved value is of type \`User\`
}
`;

  public discriminatedUnionCode: string = `interface Admin {
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
`;

  public customTypeGuardsCode: string = `interface Product {
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
`;

  public complexStateCode: string = `type LoadingState = { state: 'loading' };
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
`;

  public reusableServiceCode: string = `import { Injectable } from '@angular/core';
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
`;

  public reusableServiceUsageCode: string = `interface User {
  id: number;
  name: string;
}

const user$ = this.apiService.fetchData<User>('/api/users/1');
user$.subscribe(user => console.log(user.name)); // TypeScript knows \`user\` is of type \`User\`
`;

  public reusableComponentCode: string = `import { Component, Input } from '@angular/core';

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
`;

  public reusableComponentUsageCode: string = `<app-list [items]="['Apple', 'Banana', 'Cherry']"></app-list>
<app-list [items]="[{ name: 'John' }, { name: 'Jane' }]"></app-list>
`;

  public utilityFunctionCode: string = `function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = { name: 'Alice' };
const details = { age: 30 };

const result = merge(person, details);  // Type is inferred as { name: string; age: number; }
`;

  public intersectionTypeCode1: string = `interface ApiResponse {
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
`;

  public intersectionTypeCode2: string = `interface BaseProps {
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
`;

  public intersectionTypeCode3: string = `interface LoggingService {
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
`;

  public changeDetectionCode1: string = `import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class UserCardComponent {
  @Input() user!: { name: string; age: number };
}
`;

  public changeDetectionCode2: string = `<li *ngFor="let user of users; trackBy: trackById">{{ user.name }}</li>
`;

  public changeDetectionCode3: string = `trackById(index: number, user: { id: number }): number {
  return user.id;
}
`;
}
