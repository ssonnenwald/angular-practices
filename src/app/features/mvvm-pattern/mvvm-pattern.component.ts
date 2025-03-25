import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-mvvm-pattern',
  imports: [CodeHighLightComponent],
  templateUrl: './mvvm-pattern.component.html',
  styleUrl: './mvvm-pattern.component.scss',
})
export default class MvvmPatternComponent {
  constructor() {}

  public counterModelCode: WritableSignal<string> =
    signal(`import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterModel {
  private http = inject(HttpClient);

  private _count = signal(0);  // Reactive state for the counter
  private _randomNumber = signal<number | null>(null);  // Reactive state for the random number
  private readonly API_URL = 'https://api.example.com/random-number';

  get count() {
    return this._count();
  }

  get randomNumber() {
    return this._randomNumber();
  }

  increment() {
    this._count.update(value => value + 1);
  }

  decrement() {
    this._count.update(value => value - 1);
  }

  reset() {
    this._count.set(0);
  }

  fetchRandomNumber() {
    this.http.get<{ number: number }>(this.API_URL)
      .pipe(catchError(() => of({ number: 0 })))
      .subscribe(response => {
        this._randomNumber.set(response.number);
      });
  }
}
`);

  public counterViewModelCode: WritableSignal<string> =
    signal(`import { Injectable, inject } from '@angular/core';
import { CounterModel } from './counter.model';

@Injectable({
  providedIn: 'root'
})
export class CounterViewModel {
  private model = inject(CounterModel);

  get count() {
    return this.model.count;
  }

  get randomNumber() {
    return this.model.randomNumber;
  }

  increment() {
    this.model.increment();
  }

  decrement() {
    this.model.decrement();
  }

  reset() {
    this.model.reset();
  }

  fetchRandomNumber() {
    this.model.fetchRandomNumber();
  }
}
`);

  public counterComponentCode: WritableSignal<string> =
    signal(`import { Component, inject } from '@angular/core';
import { CounterViewModel } from './counter.viewmodel';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  imports: [HttpClientModule]
})
export class CounterComponent {
  private viewModel = inject(CounterViewModel);

  get count() {
    return this.viewModel.count;
  }

  increment() {
    this.viewModel.increment();
  }

  decrement() {
    this.viewModel.decrement();
  }

  reset() {
    this.viewModel.reset();
  }
}
`);

  public displayComponentCode: WritableSignal<string> =
    signal(`import { Component, inject } from '@angular/core';
import { CounterViewModel } from '../counter/counter.viewmodel';

@Component({
  selector: 'app-display',
  standalone: true,
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  private viewModel = inject(CounterViewModel);

  get count() {
    return this.viewModel.count;
  }

  get randomNumber() {
    return this.viewModel.randomNumber;
  }

  fetchRandomNumber() {
    this.viewModel.fetchRandomNumber();
  }
}
`);

  public displayComponentHtml: WritableSignal<string> =
    signal(`<div class="display-container">
  <p>Current Count: {{ count }}</p>
  <button (click)="fetchRandomNumber()">Fetch Random Number</button>
  <p *ngIf="randomNumber !== null">Random Number: {{ randomNumber }}</p>
</div>
`);

  public counterModelSpecCode: WritableSignal<string> =
    signal(`import { TestBed } from '@angular/core/testing';
import { CounterModel } from './counter.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('CounterModel', () => {
  let model: CounterModel;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CounterModel]
    });

    model = TestBed.inject(CounterModel);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should increment count', () => {
    model.increment();
    expect(model.count).toBe(1);
  });

  it('should decrement count', () => {
    model.increment();
    model.decrement();
    expect(model.count).toBe(0);
  });

  it('should reset count', () => {
    model.increment();
    model.reset();
    expect(model.count).toBe(0);
  });

  it('should fetch random number from API', () => {
    const mockResponse = { number: 42 };
    model.fetchRandomNumber();
    
    const req = httpMock.expectOne('https://api.example.com/random-number');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    expect(model.randomNumber).toBe(42);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
`);

  public counterViewModelSpecCode: WritableSignal<string> =
    signal(`import { TestBed } from '@angular/core/testing';
import { CounterViewModel } from './counter.viewmodel';
import { CounterModel } from './counter.model';
import { of } from 'rxjs';
import { provideMockService } from 'ng-mocks';  // Optional utility for mocking services.

describe('CounterViewModel', () => {
  let viewModel: CounterViewModel;
  let modelMock: jasmine.SpyObj<CounterModel>;

  beforeEach(() => {
    modelMock = jasmine.createSpyObj('CounterModel', ['increment', 'decrement', 'reset', 'fetchRandomNumber', 'count', 'randomNumber']);
    
    TestBed.configureTestingModule({
      providers: [
        CounterViewModel,
        { provide: CounterModel, useValue: modelMock }
      ]
    });

    viewModel = TestBed.inject(CounterViewModel);
  });

  it('should get count from the model', () => {
    modelMock.count.and.returnValue(5);
    expect(viewModel.count).toBe(5);
  });

  it('should call increment on the model when increment is called', () => {
    viewModel.increment();
    expect(modelMock.increment).toHaveBeenCalled();
  });

  it('should call reset on the model when reset is called', () => {
    viewModel.reset();
    expect(modelMock.reset).toHaveBeenCalled();
  });

  it('should fetch random number', () => {
    modelMock.randomNumber = of(10);  // Mock the observable returned by the model
    viewModel.fetchRandomNumber();
    expect(modelMock.fetchRandomNumber).toHaveBeenCalled();
  });
});
`);

  public counterComponentSpecCode: WritableSignal<string> =
    signal(`import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { CounterViewModel } from './counter.viewmodel';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let viewModelMock: jasmine.SpyObj<CounterViewModel>;

  beforeEach(() => {
    viewModelMock = jasmine.createSpyObj('CounterViewModel', ['increment', 'decrement', 'reset', 'fetchRandomNumber', 'count']);
    
    TestBed.configureTestingModule({
      imports: [CounterComponent],
      providers: [
        { provide: CounterViewModel, useValue: viewModelMock }
      ]
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should display the count', () => {
    viewModelMock.count = of(5);  // Mock count as observable
    fixture.detectChanges();  // Trigger change detection
    const countElement = fixture.debugElement.query(By.css('h1'));
    expect(countElement.nativeElement.textContent).toContain('5');
  });

  it('should call increment on button click', () => {
    const incrementButton = fixture.debugElement.query(By.css('button:nth-child(1)'));
    incrementButton.triggerEventHandler('click', null);
    expect(viewModelMock.increment).toHaveBeenCalled();
  });

  it('should call reset on button click', () => {
    const resetButton = fixture.debugElement.query(By.css('button:nth-child(3)'));
    resetButton.triggerEventHandler('click', null);
    expect(viewModelMock.reset).toHaveBeenCalled();
  });
});
`);

  public displayComponentSpecCode: WritableSignal<string> =
    signal(`import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayComponent } from './display.component';
import { CounterViewModel } from '../counter/counter.viewmodel';
import { By } from '@angular/platform-browser';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let viewModelMock: jasmine.SpyObj<CounterViewModel>;

  beforeEach(() => {
    viewModelMock = jasmine.createSpyObj('CounterViewModel', ['fetchRandomNumber', 'randomNumber', 'count']);
    
    TestBed.configureTestingModule({
      imports: [DisplayComponent],
      providers: [
        { provide: CounterViewModel, useValue: viewModelMock }
      ]
    });

    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
  });

  it('should display the count', () => {
    viewModelMock.count = of(10);  
    fixture.detectChanges();
    const countElement = fixture.debugElement.query(By.css('p'));
    expect(countElement.nativeElement.textContent).toContain('10');
  });

  it('should call fetchRandomNumber when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(viewModelMock.fetchRandomNumber).toHaveBeenCalled();
  });
});
`);
}
