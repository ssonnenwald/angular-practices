import{a as u}from"./chunk-OEMQRESF.js";import"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as l,_a as s,jb as r,nb as n,ob as t,pb as i,ra as o}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var c=class d{constructor(){}counterModelCode=o(`import { Injectable, signal } from '@angular/core';
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
`);counterViewModelCode=o(`import { Injectable, inject } from '@angular/core';
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
`);counterComponentCode=o(`import { Component, inject } from '@angular/core';
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
`);displayComponentCode=o(`import { Component, inject } from '@angular/core';
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
`);displayComponentHtml=o(`<div class="display-container">
  <p>Current Count: {{ count }}</p>
  <button (click)="fetchRandomNumber()">Fetch Random Number</button>
  <p *ngIf="randomNumber !== null">Random Number: {{ randomNumber }}</p>
</div>
`);counterModelSpecCode=o(`import { TestBed } from '@angular/core/testing';
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
`);counterViewModelSpecCode=o(`import { TestBed } from '@angular/core/testing';
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
`);counterComponentSpecCode=o(`import { ComponentFixture, TestBed } from '@angular/core/testing';
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
`);displayComponentSpecCode=o(`import { ComponentFixture, TestBed } from '@angular/core/testing';
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
`);static \u0275fac=function(m){return new(m||d)};static \u0275cmp=s({type:d,selectors:[["app-mvvm-pattern"]],decls:488,vars:18,consts:[[1,"mb-4"],[1,"d-flex","justify-content-center"],[1,"mt-4"],[1,"mb-2"],[1,"d-inline"],[3,"code","language"],[1,"hljs-attr"],[1,"mb-2","mt-4"]],template:function(m,a){m&1&&(n(0,"h1"),e(1,"MVVM (Model-View-ViewModel) Pattern"),t(),n(2,"div",0),e(3,` he MVVM (Model-View-ViewModel) design pattern is a type of architectural pattern that focuses on separating the presentation logic (View) from the business logic (Model) through an intermediary component called the ViewModel.
`),t(),n(4,"div",0)(5,"h5"),e(6,"Detailed Breakdown"),t(),n(7,"ul")(8,"li")(9,"b"),e(10,"Model"),t(),e(11,":\xA0\xA0Represents the data and business logic of the application. "),t(),n(12,"li")(13,"b"),e(14,"View"),t(),e(15,":\xA0\xA0Represents the user interface and displays the data from the ViewModel. "),t(),n(16,"li")(17,"b"),e(18,"ViewModel"),t(),e(19,":\xA0\xA0Exposes the model's data and commands to the view through data binding, handling the interaction between the View and Model. "),t(),n(20,"li")(21,"b"),e(22,"Benefits of MVVM"),t(),e(23,":"),i(24,"br"),n(25,"ul")(26,"li")(27,"b"),e(28,"Separation of Concerns"),t(),e(29,":\xA0\xA0MVVM promotes a clean separation of concerns, making it easier to maintain and test the application. "),t(),n(30,"li")(31,"b"),e(32,"Testability"),t(),e(33,":\xA0\xA0The ViewModel can be easily tested independently of the View, as it doesn't have a direct dependency on the UI. "),t(),n(34,"li")(35,"b"),e(36,"Maintainability"),t(),e(37,":\xA0\xA0The separation of concerns makes it easier to modify or extend the application, as changes in one part of the application are less likely to affect other parts. "),t(),n(38,"li")(39,"b"),e(40,"Reusability"),t(),e(41,":\xA0\xA0ViewModels can be reused across multiple views, promoting code reusability. "),t()()()()(),i(42,"div",1),n(43,"h3",2),e(44,"Overview of the MVVM Pattern in Angular"),t(),n(45,"ul")(46,"li")(47,"b"),e(48,"Model (DomainModel)"),t(),e(49,":\xA0\xA0Manages application state, business logic, and data-fetching logic. "),t(),n(50,"li")(51,"b"),e(52,"ViewModel"),t(),e(53,":\xA0\xA0Acts as an intermediary between the View and Model. Transforms data from the Model to a format suitable for the View and exposes it as signals. "),t(),n(54,"li")(55,"b"),e(56,"View (Component + HTML)"),t(),e(57,":\xA0\xA0Renders the UI and delegates user actions to the ViewModel. "),t()(),i(58,"br"),n(59,"div",3)(60,"h6",4)(61,"mark"),e(62,"counter.model.ts"),t()(),e(63," \xA0\xA0 "),n(64,"h5",4),e(65,"(DomainModel - Shared Service)"),t()(),i(66,"app-code-highlight",5),n(67,"h5"),e(68,"Explanation"),t(),n(69,"ul")(70,"li")(71,"span",6),e(72,"Injectable"),t(),e(73,":\xA0\xA0Makes the service available for Dependency Injection. "),t(),n(74,"li")(75,"span",6),e(76,"signal"),t(),e(77,":\xA0\xA0Signals are used to manage reactive state. "),t(),n(78,"li")(79,"span",6),e(80,"HttpClient"),t(),e(81,":\xA0\xA0Injected to perform HTTP requests. "),t(),n(82,"li")(83,"span",6),e(84,"fetchRandomNumber()"),t(),e(85,":\xA0\xA0Fetches data from a backend API and updates the signal. "),t(),n(86,"li")(87,"span",6),e(88,"@Injectable({ providedIn: 'root' })"),t(),e(89,":\xA0\xA0Makes this service a singleton, ensuring shared state across all components using this service. "),t()(),e(90,`
\xA0\xA0 `),n(91,"div",3)(92,"h6",4)(93,"mark"),e(94,"counter.viewmodel.ts"),t()(),e(95," \xA0\xA0 "),n(96,"h5",4),e(97,"(ViewModel)"),t()(),i(98,"app-code-highlight",5),n(99,"h5"),e(100,"Explanation"),t(),n(101,"ul")(102,"li"),e(103," Acts as a facade between the "),n(104,"span",6),e(105,"Component"),t(),e(106," and the "),n(107,"span",6),e(108,"DomainModel"),t(),e(109,". "),t(),n(110,"li"),e(111," Only exposes what the "),n(112,"span",6),e(113,"Component"),t(),e(114," needs ("),n(115,"span",6),e(116,"count"),t(),e(117,", "),n(118,"span",6),e(119,"randomNumber"),t(),e(120,", "),n(121,"span",6),e(122,"increment()"),t(),e(123,", etc.). "),t(),n(124,"li"),e(125," Keeps the "),n(126,"span",6),e(127,"Component"),t(),e(128," clean and simple by only dealing with UI logic. "),t(),n(129,"li"),e(130," Allows "),n(131,"span",6),e(132,"CounterModel"),t(),e(133," to be swapped or modified without affecting the "),n(134,"span",6),e(135,"Component"),t(),e(136,". "),t()(),e(137,`
\xA0\xA0 `),n(138,"div",3)(139,"h6",4)(140,"mark"),e(141,"counter.component.ts"),t()(),e(142," \xA0\xA0 "),n(143,"h5",4),e(144,"(Controller Component - CounterComponent)"),t()(),i(145,"app-code-highlight",5),n(146,"h5"),e(147,"Explanation"),t(),n(148,"ul")(149,"li"),e(150,"View (HTML) and Controller (TypeScript) are tightly related."),t(),n(151,"li"),e(152," Injects the "),n(153,"span",6),e(154,"CounterViewModel"),t(),e(155," and interacts with its methods/signals. "),t(),n(156,"li"),e(157," Keeps UI rendering and interaction separate from data manipulation logic. "),t()(),e(158,`
\xA0\xA0 `),n(159,"div",3)(160,"h6",4)(161,"mark"),e(162,"display.component.ts"),t()(),e(163," \xA0\xA0 "),n(164,"h5",4),e(165,"(Controller Component - DisplayComponent)"),t()(),i(166,"app-code-highlight",5),n(167,"h5"),e(168,"Explanation"),t(),n(169,"ul")(170,"li"),e(171," Uses the same "),n(172,"span",6),e(173,"CounterViewModel"),t(),e(174," instance as "),n(175,"span",6),e(176,"CounterComponent"),t(),e(177," because it's provided in the "),n(178,"span",6),e(179,"root"),t(),e(180," scope. "),t(),n(181,"li"),e(182,"Demonstrates cross-component communication via signals."),t()(),e(183,`
\xA0\xA0 `),n(184,"div",3)(185,"h6",4)(186,"mark"),e(187,"display.component.html"),t()(),e(188," \xA0\xA0 "),n(189,"h5",4),e(190,"(Display View)"),t()(),i(191,"app-code-highlight",5),n(192,"h5"),e(193,"Explanation"),t(),n(194,"ul")(195,"li"),e(196," Displays shared state ("),n(197,"span",6),e(198,"count"),t(),e(199,") and performs a fetch for a random number. "),t()(),e(200,`
\xA0\xA0 `),n(201,"h4"),e(202,"Why This Structure Works Well"),t(),n(203,"ol")(204,"li")(205,"b"),e(206,"Separation of Concerns:"),t(),n(207,"ul")(208,"li")(209,"span",6),e(210,"DomainModel"),t(),e(211," handles data/state."),t(),n(212,"li")(213,"span",6),e(214,"ViewModel"),t(),e(215," acts as a bridge."),t(),n(216,"li")(217,"span",6),e(218,"Components"),t(),e(219," handle UI only."),t()()(),n(220,"li")(221,"b"),e(222,"Scalability:"),t(),n(223,"ul")(224,"li"),e(225,"Multiple components can interact with the same model via signals."),t()()(),n(226,"li")(227,"b"),e(228,"Testability:"),t(),n(229,"ul")(230,"li"),e(231,"Each layer can be independently unit-tested."),t()()()(),e(232,`
\xA0\xA0 `),n(233,"h4"),e(234,"Unit Testing"),t(),n(235,"div",3),e(236,` Let's dive into unit testing for each part of our Angular application using Jasmine and Angular Testing Utilities.\xA0\xA0I\u2019ll cover testing for:
`),t(),n(237,"ol")(238,"li")(239,"b"),e(240,"DomainModel"),t(),e(241," ("),n(242,"span",6),e(243,"CounterModel"),t(),e(244,") with HTTP mocking. "),t(),n(245,"li")(246,"b"),e(247,"ViewModel"),t(),e(248," ("),n(249,"span",6),e(250,"CounterViewModel"),t(),e(251,") with service interactions. "),t(),n(252,"li")(253,"b"),e(254,"Components"),t(),e(255," ("),n(256,"span",6),e(257,"CounterComponent"),t(),e(258," and "),n(259,"span",6),e(260,"DisplayComponent"),t(),e(261,") with user interaction and DOM verification. "),t()(),e(262,`
\xA0\xA0 `),n(263,"h4"),e(264," 1.\xA0\xA0Unit Testing "),n(265,"span",6),e(266,"CounterModel"),t(),e(267,` (DomainModel)
`),t(),n(268,"h5"),e(269," Mocking HTTP Requests in the "),n(270,"span",6),e(271,"CounterModel"),t()(),e(272,` We\u2019ll mock HTTP requests by using Jasmine\u2019s
`),n(273,"span",6),e(274,"HttpClientTestingModule"),t(),e(275,` and
`),n(276,"span",6),e(277,"HttpTestingController"),t(),e(278,". "),n(279,"div",7)(280,"h6",4)(281,"mark"),e(282,"counter.model.spec.ts"),t()(),e(283," \xA0\xA0 "),n(284,"h5",4),e(285,"(Test File for DomainModel)"),t()(),i(286,"app-code-highlight",5),n(287,"h5"),e(288,"Explanation"),t(),n(289,"ul")(290,"li")(291,"span",6),e(292,"HttpClientTestingModule"),t(),e(293,":\xA0\xA0This module is used to mock HTTP requests, so no actual HTTP requests are made during tests. "),t(),n(294,"li")(295,"span",6),e(296,"HttpTestingController"),t(),e(297,":\xA0\xA0Allows us to verify and mock responses for HTTP calls. "),t(),n(298,"li")(299,"b"),e(300,"Test Flow"),t(),e(301,": "),n(302,"ul")(303,"li"),e(304," We test that the "),n(305,"span",6),e(306,"CounterModel"),t(),e(307," properly increments, decrements, and resets the counter. "),t(),n(308,"li"),e(309," The "),n(310,"span",6),e(311,"fetchRandomNumber"),t(),e(312," method is tested to ensure it triggers an HTTP request and correctly updates the "),n(313,"span",6),e(314,"randomNumber"),t(),e(315," signal when the response is received. "),t()()()(),e(316,`
\xA0\xA0 `),n(317,"h4"),e(318," 2.\xA0\xA0Unit Testing "),n(319,"span",6),e(320,"CounterModel"),t(),n(321,"b"),e(322,"(ViewModel)"),t()(),e(323," We will "),n(324,"b"),e(325,"mock"),t(),e(326," the "),n(327,"span",6),e(328,"CounterModel"),t(),e(329,` so that we
can test the `),n(330,"span",6),e(331,"CounterViewModel"),t(),e(332," independently. "),n(333,"div",7)(334,"h6",4)(335,"mark"),e(336,"counter.viewmodel.spec.ts"),t()(),e(337," \xA0\xA0 "),n(338,"h5",4),e(339,"(Test File for ViewModel)"),t()(),i(340,"app-code-highlight",5),n(341,"h5"),e(342,"Explanation"),t(),n(343,"ul")(344,"li"),e(345," Jasmine Spies: "),n(346,"span",6),e(347,"createSpyObj"),t(),e(348," allows us to mock the methods and properties of "),n(349,"span",6),e(350,"CounterModel"),t(),e(351,". "),t(),n(352,"li")(353,"b"),e(354,"Test Flow"),t(),e(355,": "),n(356,"ul")(357,"li"),e(358," We mock the "),n(359,"span",6),e(360,"count"),t(),e(361," and "),n(362,"span",6),e(363,"randomNumber"),t(),e(364," values so that "),n(365,"span",6),e(366,"ViewModel"),t(),e(367," can be tested independently of the actual "),n(368,"span",6),e(369,"CounterModel"),t(),e(370," service. "),t(),n(371,"li"),e(372," We test that calling "),n(373,"span",6),e(374,"increment()"),t(),e(375,", "),n(376,"span",6),e(377,"decrement()"),t(),e(378,", and "),n(379,"span",6),e(380,"reset()"),t(),e(381," on the "),n(382,"span",6),e(383,"ViewModel"),t(),e(384," triggers the corresponding methods on the "),n(385,"span",6),e(386,"CounterModel"),t(),e(387,". "),t()()()(),e(388,`
\xA0\xA0 `),n(389,"h4"),e(390," 3.\xA0\xA0Unit Testing "),n(391,"span",6),e(392,"CounterComponent"),t()(),e(393," We test "),n(394,"b"),e(395,"UI behavior"),t(),e(396," and "),n(397,"b"),e(398,"component interaction"),t(),e(399,` with
`),n(400,"span",6),e(401,"ViewModel"),t(),e(402," using Angular's "),n(403,"b"),e(404,"TestBed"),t(),e(405,` and
`),n(406,"b"),e(407,"ComponentFixture"),t(),e(408,". "),n(409,"div",7)(410,"h6",4)(411,"mark"),e(412,"counter.component.spec.ts"),t()(),e(413," \xA0\xA0 "),n(414,"h5",4),e(415,"(Test File for CounterComponent)"),t()(),i(416,"app-code-highlight",5),n(417,"h5"),e(418,"Explanation"),t(),n(419,"ul")(420,"li")(421,"b"),e(422,"Test Component Interactions"),t(),e(423,": "),n(424,"ul")(425,"li")(426,"span",6),e(427,"fixture.detectChanges()"),t(),e(428," triggers change detection to ensure that the component\u2019s DOM updates reflect the model\u2019s state. "),t(),n(429,"li"),e(430," We check if the "),n(431,"span",6),e(432,"count"),t(),e(433," is displayed correctly in the view (h1 element). "),t(),n(434,"li"),e(435," We simulate button clicks and verify if "),n(436,"span",6),e(437,"increment()"),t(),e(438," and "),n(439,"span",6),e(440,"reset()"),t(),e(441," are called when buttons are clicked. "),t()()()(),e(442,`
\xA0\xA0 `),n(443,"h4"),e(444," 4.\xA0\xA0Unit Testing "),n(445,"span",6),e(446,"DisplayComponent"),t()(),e(447," Similar to "),n(448,"span",6),e(449,"CounterComponent"),t(),e(450,`, we will test the UI
rendering and user interactions (i.e., fetching random numbers). `),n(451,"div",7)(452,"h6",4)(453,"mark"),e(454,"display.component.spec.ts"),t()(),e(455," \xA0\xA0 "),n(456,"h5",4),e(457,"(Test File for DisplayComponent)"),t()(),i(458,"app-code-highlight",5),n(459,"h5"),e(460,"Explanation"),t(),n(461,"ul")(462,"li"),e(463," We simulate a user clicking the button and ensure the correct method ("),n(464,"span",6),e(465,"fetchRandomNumber()"),t(),e(466,") is called. "),t(),n(467,"li"),e(468," We mock the "),n(469,"span",6),e(470,"count"),t(),e(471," value and ensure the UI updates properly when the value changes. "),t()(),e(472,`
\xA0\xA0 `),n(473,"h4"),e(474,"Final Thoughts on Testing"),t(),n(475,"ol")(476,"li")(477,"b"),e(478,"DomainModel Tests"),t(),e(479,":\xA0\xA0Focus on business logic, state management, and data-fetching behavior. "),t(),n(480,"li")(481,"b"),e(482,"ViewModel Tests"),t(),e(483,":\xA0\xA0Test the interaction between the ViewModel and the DomainModel, ensuring that methods are invoked correctly. "),t(),n(484,"li")(485,"b"),e(486,"Component Tests"),t(),e(487,":\xA0\xA0Test the UI rendering and user interactions, making sure that components react correctly to user inputs and render the expected values. "),t()()),m&2&&(l(66),r("code",a.counterModelCode)("language","typescript"),l(32),r("code",a.counterViewModelCode)("language","typescript"),l(47),r("code",a.counterComponentCode)("language","typescript"),l(21),r("code",a.displayComponentCode)("language","typescript"),l(25),r("code",a.displayComponentHtml)("language","html"),l(95),r("code",a.counterModelSpecCode)("language","typescript"),l(54),r("code",a.counterViewModelSpecCode)("language","typescript"),l(76),r("code",a.counterComponentSpecCode)("language","typescript"),l(42),r("code",a.displayComponentSpecCode)("language","typescript"))},dependencies:[u],encapsulation:2})};export{c as MvvmPatternComponent};
