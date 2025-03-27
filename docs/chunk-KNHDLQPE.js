import{m as f}from"./chunk-J4M5GF2N.js";import{Ib as e,cb as h,fb as a,kb as d,lb as s,nb as c,sa as m,ub as n,vb as t,wb as r,zb as p}from"./chunk-YRGLSMXJ.js";var u=()=>[import("./chunk-4VRTDKRB.js").then(i=>i.CodeHighLightComponent)];function g(i,l){if(i&1&&r(0,"app-code-highlight",8),i&2){let o=p();c("code",o.counterModelCode)("language","typescript")}}function E(i,l){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function C(i,l){if(i&1&&r(0,"app-code-highlight",8),i&2){let o=p();c("code",o.counterViewModelCode)("language","typescript")}}function S(i,l){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function M(i,l){if(i&1&&r(0,"app-code-highlight",8),i&2){let o=p();c("code",o.counterComponentCode)("language","typescript")}}function b(i,l){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function v(i,l){if(i&1&&r(0,"app-code-highlight",8),i&2){let o=p();c("code",o.displayComponentCode)("language","typescript")}}function w(i,l){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function y(i,l){if(i&1&&r(0,"app-code-highlight",8),i&2){let o=p();c("code",o.displayComponentHtml)("language","html")}}function A(i,l){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function T(i,l){if(i&1&&r(0,"app-code-highlight",8),i&2){let o=p();c("code",o.counterModelSpecCode)("language","typescript")}}function V(i,l){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function _(i,l){if(i&1&&r(0,"app-code-highlight",8),i&2){let o=p();c("code",o.counterViewModelSpecCode)("language","typescript")}}function k(i,l){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function D(i,l){if(i&1&&r(0,"app-code-highlight",8),i&2){let o=p();c("code",o.counterComponentSpecCode)("language","typescript")}}function P(i,l){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function j(i,l){if(i&1&&r(0,"app-code-highlight",8),i&2){let o=p();c("code",o.displayComponentSpecCode)("language","typescript")}}function B(i,l){i&1&&(n(0,"span"),e(1,"Loading..."),t())}var x=class i{constructor(){}counterModelCode=m(`import { Injectable, signal } from '@angular/core';
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
`);counterViewModelCode=m(`import { Injectable, inject } from '@angular/core';
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
`);counterComponentCode=m(`import { Component, inject } from '@angular/core';
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
`);displayComponentCode=m(`import { Component, inject } from '@angular/core';
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
`);displayComponentHtml=m(`<div class="display-container">
  <p>Current Count: {{ count }}</p>
  <button (click)="fetchRandomNumber()">Fetch Random Number</button>
  <p *ngIf="randomNumber !== null">Random Number: {{ randomNumber }}</p>
</div>
`);counterModelSpecCode=m(`import { TestBed } from '@angular/core/testing';
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
`);counterViewModelSpecCode=m(`import { TestBed } from '@angular/core/testing';
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
`);counterComponentSpecCode=m(`import { ComponentFixture, TestBed } from '@angular/core/testing';
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
`);displayComponentSpecCode=m(`import { ComponentFixture, TestBed } from '@angular/core/testing';
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
`);static \u0275fac=function(o){return new(o||i)};static \u0275cmp=h({type:i,selectors:[["app-mvvm-pattern"]],decls:516,vars:0,consts:[[1,"mb-4"],[1,"d-flex","justify-content-center"],["priority","","ngSrc","assets/images/mvvm2.png","width","977","height","214",1,"img-fluid"],[1,"mt-4"],[1,"mb-2"],[1,"d-inline"],[1,"hljs-attr"],[1,"mb-2","mt-4"],[3,"code","language"]],template:function(o,N){o&1&&(n(0,"h1"),e(1,"MVVM (Model-View-ViewModel) Pattern"),t(),n(2,"div",0),e(3,` he MVVM (Model-View-ViewModel) design pattern is a type of architectural pattern that focuses on separating the presentation logic (View) from the business logic (Model) through an intermediary component called the ViewModel.
`),t(),n(4,"div",0)(5,"h5"),e(6,"Detailed Breakdown"),t(),n(7,"ul")(8,"li")(9,"b"),e(10,"Model"),t(),e(11,":\xA0\xA0Represents the data and business logic of the application. "),t(),n(12,"li")(13,"b"),e(14,"View"),t(),e(15,":\xA0\xA0Represents the user interface and displays the data from the ViewModel. "),t(),n(16,"li")(17,"b"),e(18,"ViewModel"),t(),e(19,":\xA0\xA0Exposes the model's data and commands to the view through data binding, handling the interaction between the View and Model. "),t(),n(20,"li")(21,"b"),e(22,"Benefits of MVVM"),t(),e(23,":"),r(24,"br"),n(25,"ul")(26,"li")(27,"b"),e(28,"Separation of Concerns"),t(),e(29,":\xA0\xA0MVVM promotes a clean separation of concerns, making it easier to maintain and test the application. "),t(),n(30,"li")(31,"b"),e(32,"Testability"),t(),e(33,":\xA0\xA0The ViewModel can be easily tested independently of the View, as it doesn't have a direct dependency on the UI. "),t(),n(34,"li")(35,"b"),e(36,"Maintainability"),t(),e(37,":\xA0\xA0The separation of concerns makes it easier to modify or extend the application, as changes in one part of the application are less likely to affect other parts. "),t(),n(38,"li")(39,"b"),e(40,"Reusability"),t(),e(41,":\xA0\xA0ViewModels can be reused across multiple views, promoting code reusability. "),t()()()()(),n(42,"div",1),r(43,"img",2),t(),n(44,"h3",3),e(45,"Overview of the MVVM Pattern in Angular"),t(),n(46,"ul")(47,"li")(48,"b"),e(49,"Model (DomainModel)"),t(),e(50,":\xA0\xA0Manages application state, business logic, and data-fetching logic. "),t(),n(51,"li")(52,"b"),e(53,"ViewModel"),t(),e(54,":\xA0\xA0Acts as an intermediary between the View and Model. Transforms data from the Model to a format suitable for the View and exposes it as signals. "),t(),n(55,"li")(56,"b"),e(57,"View (Component + HTML)"),t(),e(58,":\xA0\xA0Renders the UI and delegates user actions to the ViewModel. "),t()(),r(59,"br"),n(60,"div",4)(61,"h6",5)(62,"mark"),e(63,"counter.model.ts"),t()(),e(64," \xA0\xA0 "),n(65,"h5",5),e(66,"(DomainModel - Shared Service)"),t()(),a(67,g,1,2)(68,E,2,0),d(69,67,u,null,68),s(0,-1),n(71,"h5"),e(72,"Explanation"),t(),n(73,"ul")(74,"li")(75,"span",6),e(76,"Injectable"),t(),e(77,":\xA0\xA0Makes the service available for Dependency Injection. "),t(),n(78,"li")(79,"span",6),e(80,"signal"),t(),e(81,":\xA0\xA0Signals are used to manage reactive state. "),t(),n(82,"li")(83,"span",6),e(84,"HttpClient"),t(),e(85,":\xA0\xA0Injected to perform HTTP requests. "),t(),n(86,"li")(87,"span",6),e(88,"fetchRandomNumber()"),t(),e(89,":\xA0\xA0Fetches data from a backend API and updates the signal. "),t(),n(90,"li")(91,"span",6),e(92,"@Injectable({ providedIn: 'root' })"),t(),e(93,":\xA0\xA0Makes this service a singleton, ensuring shared state across all components using this service. "),t()(),e(94,`
\xA0\xA0 `),n(95,"div",4)(96,"h6",5)(97,"mark"),e(98,"counter.viewmodel.ts"),t()(),e(99," \xA0\xA0 "),n(100,"h5",5),e(101,"(ViewModel)"),t()(),a(102,C,1,2)(103,S,2,0),d(104,102,u,null,103),s(0,-1),n(106,"h5"),e(107,"Explanation"),t(),n(108,"ul")(109,"li"),e(110," Acts as a facade between the "),n(111,"span",6),e(112,"Component"),t(),e(113," and the "),n(114,"span",6),e(115,"DomainModel"),t(),e(116,". "),t(),n(117,"li"),e(118," Only exposes what the "),n(119,"span",6),e(120,"Component"),t(),e(121," needs ("),n(122,"span",6),e(123,"count"),t(),e(124,", "),n(125,"span",6),e(126,"randomNumber"),t(),e(127,", "),n(128,"span",6),e(129,"increment()"),t(),e(130,", etc.). "),t(),n(131,"li"),e(132," Keeps the "),n(133,"span",6),e(134,"Component"),t(),e(135," clean and simple by only dealing with UI logic. "),t(),n(136,"li"),e(137," Allows "),n(138,"span",6),e(139,"CounterModel"),t(),e(140," to be swapped or modified without affecting the "),n(141,"span",6),e(142,"Component"),t(),e(143,". "),t()(),e(144,`
\xA0\xA0 `),n(145,"div",4)(146,"h6",5)(147,"mark"),e(148,"counter.component.ts"),t()(),e(149," \xA0\xA0 "),n(150,"h5",5),e(151,"(Controller Component - CounterComponent)"),t()(),a(152,M,1,2)(153,b,2,0),d(154,152,u,null,153),s(0,-1),n(156,"h5"),e(157,"Explanation"),t(),n(158,"ul")(159,"li"),e(160,"View (HTML) and Controller (TypeScript) are tightly related."),t(),n(161,"li"),e(162," Injects the "),n(163,"span",6),e(164,"CounterViewModel"),t(),e(165," and interacts with its methods/signals. "),t(),n(166,"li"),e(167," Keeps UI rendering and interaction separate from data manipulation logic. "),t()(),e(168,`
\xA0\xA0 `),n(169,"div",4)(170,"h6",5)(171,"mark"),e(172,"display.component.ts"),t()(),e(173," \xA0\xA0 "),n(174,"h5",5),e(175,"(Controller Component - DisplayComponent)"),t()(),a(176,v,1,2)(177,w,2,0),d(178,176,u,null,177),s(0,-1),n(180,"h5"),e(181,"Explanation"),t(),n(182,"ul")(183,"li"),e(184," Uses the same "),n(185,"span",6),e(186,"CounterViewModel"),t(),e(187," instance as "),n(188,"span",6),e(189,"CounterComponent"),t(),e(190," because it's provided in the "),n(191,"span",6),e(192,"root"),t(),e(193," scope. "),t(),n(194,"li"),e(195,"Demonstrates cross-component communication via signals."),t()(),e(196,`
\xA0\xA0 `),n(197,"div",4)(198,"h6",5)(199,"mark"),e(200,"display.component.html"),t()(),e(201," \xA0\xA0 "),n(202,"h5",5),e(203,"(Display View)"),t()(),a(204,y,1,2)(205,A,2,0),d(206,204,u,null,205),s(0,-1),n(208,"h5"),e(209,"Explanation"),t(),n(210,"ul")(211,"li"),e(212," Displays shared state ("),n(213,"span",6),e(214,"count"),t(),e(215,") and performs a fetch for a random number. "),t()(),e(216,`
\xA0\xA0 `),n(217,"h4"),e(218,"Why This Structure Works Well"),t(),n(219,"ol")(220,"li")(221,"b"),e(222,"Separation of Concerns:"),t(),n(223,"ul")(224,"li")(225,"span",6),e(226,"DomainModel"),t(),e(227," handles data/state."),t(),n(228,"li")(229,"span",6),e(230,"ViewModel"),t(),e(231," acts as a bridge."),t(),n(232,"li")(233,"span",6),e(234,"Components"),t(),e(235," handle UI only."),t()()(),n(236,"li")(237,"b"),e(238,"Scalability:"),t(),n(239,"ul")(240,"li"),e(241,"Multiple components can interact with the same model via signals."),t()()(),n(242,"li")(243,"b"),e(244,"Testability:"),t(),n(245,"ul")(246,"li"),e(247,"Each layer can be independently unit-tested."),t()()()(),e(248,`
\xA0\xA0 `),n(249,"h4"),e(250,"Unit Testing"),t(),n(251,"div",4),e(252,` Let's dive into unit testing for each part of our Angular application using Jasmine and Angular Testing Utilities.\xA0\xA0I\u2019ll cover testing for:
`),t(),n(253,"ol")(254,"li")(255,"b"),e(256,"DomainModel"),t(),e(257," ("),n(258,"span",6),e(259,"CounterModel"),t(),e(260,") with HTTP mocking. "),t(),n(261,"li")(262,"b"),e(263,"ViewModel"),t(),e(264," ("),n(265,"span",6),e(266,"CounterViewModel"),t(),e(267,") with service interactions. "),t(),n(268,"li")(269,"b"),e(270,"Components"),t(),e(271," ("),n(272,"span",6),e(273,"CounterComponent"),t(),e(274," and "),n(275,"span",6),e(276,"DisplayComponent"),t(),e(277,") with user interaction and DOM verification. "),t()(),e(278,`
\xA0\xA0 `),n(279,"h4"),e(280," 1.\xA0\xA0Unit Testing "),n(281,"span",6),e(282,"CounterModel"),t(),e(283,` (DomainModel)
`),t(),n(284,"h5"),e(285," Mocking HTTP Requests in the "),n(286,"span",6),e(287,"CounterModel"),t()(),e(288,` We\u2019ll mock HTTP requests by using Jasmine\u2019s
`),n(289,"span",6),e(290,"HttpClientTestingModule"),t(),e(291,` and
`),n(292,"span",6),e(293,"HttpTestingController"),t(),e(294,". "),n(295,"div",7)(296,"h6",5)(297,"mark"),e(298,"counter.model.spec.ts"),t()(),e(299," \xA0\xA0 "),n(300,"h5",5),e(301,"(Test File for DomainModel)"),t()(),a(302,T,1,2)(303,V,2,0),d(304,302,u,null,303),s(0,-1),n(306,"h5"),e(307,"Explanation"),t(),n(308,"ul")(309,"li")(310,"span",6),e(311,"HttpClientTestingModule"),t(),e(312,":\xA0\xA0This module is used to mock HTTP requests, so no actual HTTP requests are made during tests. "),t(),n(313,"li")(314,"span",6),e(315,"HttpTestingController"),t(),e(316,":\xA0\xA0Allows us to verify and mock responses for HTTP calls. "),t(),n(317,"li")(318,"b"),e(319,"Test Flow"),t(),e(320,": "),n(321,"ul")(322,"li"),e(323," We test that the "),n(324,"span",6),e(325,"CounterModel"),t(),e(326," properly increments, decrements, and resets the counter. "),t(),n(327,"li"),e(328," The "),n(329,"span",6),e(330,"fetchRandomNumber"),t(),e(331," method is tested to ensure it triggers an HTTP request and correctly updates the "),n(332,"span",6),e(333,"randomNumber"),t(),e(334," signal when the response is received. "),t()()()(),e(335,`
\xA0\xA0 `),n(336,"h4"),e(337," 2.\xA0\xA0Unit Testing "),n(338,"span",6),e(339,"CounterModel"),t(),n(340,"b"),e(341,"(ViewModel)"),t()(),e(342," We will "),n(343,"b"),e(344,"mock"),t(),e(345," the "),n(346,"span",6),e(347,"CounterModel"),t(),e(348,` so that we
can test the `),n(349,"span",6),e(350,"CounterViewModel"),t(),e(351," independently. "),n(352,"div",7)(353,"h6",5)(354,"mark"),e(355,"counter.viewmodel.spec.ts"),t()(),e(356," \xA0\xA0 "),n(357,"h5",5),e(358,"(Test File for ViewModel)"),t()(),a(359,_,1,2)(360,k,2,0),d(361,359,u,null,360),s(0,-1),n(363,"h5"),e(364,"Explanation"),t(),n(365,"ul")(366,"li"),e(367," Jasmine Spies: "),n(368,"span",6),e(369,"createSpyObj"),t(),e(370," allows us to mock the methods and properties of "),n(371,"span",6),e(372,"CounterModel"),t(),e(373,". "),t(),n(374,"li")(375,"b"),e(376,"Test Flow"),t(),e(377,": "),n(378,"ul")(379,"li"),e(380," We mock the "),n(381,"span",6),e(382,"count"),t(),e(383," and "),n(384,"span",6),e(385,"randomNumber"),t(),e(386," values so that "),n(387,"span",6),e(388,"ViewModel"),t(),e(389," can be tested independently of the actual "),n(390,"span",6),e(391,"CounterModel"),t(),e(392," service. "),t(),n(393,"li"),e(394," We test that calling "),n(395,"span",6),e(396,"increment()"),t(),e(397,", "),n(398,"span",6),e(399,"decrement()"),t(),e(400,", and "),n(401,"span",6),e(402,"reset()"),t(),e(403," on the "),n(404,"span",6),e(405,"ViewModel"),t(),e(406," triggers the corresponding methods on the "),n(407,"span",6),e(408,"CounterModel"),t(),e(409,". "),t()()()(),e(410,`
\xA0\xA0 `),n(411,"h4"),e(412," 3.\xA0\xA0Unit Testing "),n(413,"span",6),e(414,"CounterComponent"),t()(),e(415," We test "),n(416,"b"),e(417,"UI behavior"),t(),e(418," and "),n(419,"b"),e(420,"component interaction"),t(),e(421,` with
`),n(422,"span",6),e(423,"ViewModel"),t(),e(424," using Angular's "),n(425,"b"),e(426,"TestBed"),t(),e(427,` and
`),n(428,"b"),e(429,"ComponentFixture"),t(),e(430,". "),n(431,"div",7)(432,"h6",5)(433,"mark"),e(434,"counter.component.spec.ts"),t()(),e(435," \xA0\xA0 "),n(436,"h5",5),e(437,"(Test File for CounterComponent)"),t()(),a(438,D,1,2)(439,P,2,0),d(440,438,u,null,439),s(0,-1),n(442,"h5"),e(443,"Explanation"),t(),n(444,"ul")(445,"li")(446,"b"),e(447,"Test Component Interactions"),t(),e(448,": "),n(449,"ul")(450,"li")(451,"span",6),e(452,"fixture.detectChanges()"),t(),e(453," triggers change detection to ensure that the component\u2019s DOM updates reflect the model\u2019s state. "),t(),n(454,"li"),e(455," We check if the "),n(456,"span",6),e(457,"count"),t(),e(458," is displayed correctly in the view (h1 element). "),t(),n(459,"li"),e(460," We simulate button clicks and verify if "),n(461,"span",6),e(462,"increment()"),t(),e(463," and "),n(464,"span",6),e(465,"reset()"),t(),e(466," are called when buttons are clicked. "),t()()()(),e(467,`
\xA0\xA0 `),n(468,"h4"),e(469," 4.\xA0\xA0Unit Testing "),n(470,"span",6),e(471,"DisplayComponent"),t()(),e(472," Similar to "),n(473,"span",6),e(474,"CounterComponent"),t(),e(475,`, we will test the UI
rendering and user interactions (i.e., fetching random numbers). `),n(476,"div",7)(477,"h6",5)(478,"mark"),e(479,"display.component.spec.ts"),t()(),e(480," \xA0\xA0 "),n(481,"h5",5),e(482,"(Test File for DisplayComponent)"),t()(),a(483,j,1,2)(484,B,2,0),d(485,483,u,null,484),s(0,-1),n(487,"h5"),e(488,"Explanation"),t(),n(489,"ul")(490,"li"),e(491," We simulate a user clicking the button and ensure the correct method ("),n(492,"span",6),e(493,"fetchRandomNumber()"),t(),e(494,") is called. "),t(),n(495,"li"),e(496," We mock the "),n(497,"span",6),e(498,"count"),t(),e(499," value and ensure the UI updates properly when the value changes. "),t()(),e(500,`
\xA0\xA0 `),n(501,"h4"),e(502,"Final Thoughts on Testing"),t(),n(503,"ol")(504,"li")(505,"b"),e(506,"DomainModel Tests"),t(),e(507,":\xA0\xA0Focus on business logic, state management, and data-fetching behavior. "),t(),n(508,"li")(509,"b"),e(510,"ViewModel Tests"),t(),e(511,":\xA0\xA0Test the interaction between the ViewModel and the DomainModel, ensuring that methods are invoked correctly. "),t(),n(512,"li")(513,"b"),e(514,"Component Tests"),t(),e(515,":\xA0\xA0Test the UI rendering and user interactions, making sure that components react correctly to user inputs and render the expected values. "),t()())},dependencies:[f],styles:["mark[_ngcontent-%COMP%]{background-color:#424242!important;color:#fff!important}"]})};export{x as a};
