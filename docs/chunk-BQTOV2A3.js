import{I as u}from"./chunk-4HLAVGCF.js";import{Hb as e,Sa as l,bb as s,mb as r,ta as o,tb as n,ub as t,vb as i}from"./chunk-ENZIFP74.js";var c=class d{constructor(){}counterModelCode=o(`import { Injectable, signal } from '@angular/core';
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
`);static \u0275fac=function(m){return new(m||d)};static \u0275cmp=s({type:d,selectors:[["app-mvvm-pattern"]],decls:489,vars:18,consts:[[1,"mb-4"],[1,"d-flex","justify-content-center"],["src","assets/images/mvvm2.png"],[1,"mt-4"],[1,"mb-2"],[1,"d-inline"],[3,"code","language"],[1,"hljs-attr"],[1,"mb-2","mt-4"]],template:function(m,a){m&1&&(n(0,"h1"),e(1,"MVVM (Model-View-ViewModel) Pattern"),t(),n(2,"div",0),e(3,` he MVVM (Model-View-ViewModel) design pattern is a type of architectural pattern that focuses on separating the presentation logic (View) from the business logic (Model) through an intermediary component called the ViewModel.
`),t(),n(4,"div",0)(5,"h5"),e(6,"Detailed Breakdown"),t(),n(7,"ul")(8,"li")(9,"b"),e(10,"Model"),t(),e(11,":\xA0\xA0Represents the data and business logic of the application. "),t(),n(12,"li")(13,"b"),e(14,"View"),t(),e(15,":\xA0\xA0Represents the user interface and displays the data from the ViewModel. "),t(),n(16,"li")(17,"b"),e(18,"ViewModel"),t(),e(19,":\xA0\xA0Exposes the model's data and commands to the view through data binding, handling the interaction between the View and Model. "),t(),n(20,"li")(21,"b"),e(22,"Benefits of MVVM"),t(),e(23,":"),i(24,"br"),n(25,"ul")(26,"li")(27,"b"),e(28,"Separation of Concerns"),t(),e(29,":\xA0\xA0MVVM promotes a clean separation of concerns, making it easier to maintain and test the application. "),t(),n(30,"li")(31,"b"),e(32,"Testability"),t(),e(33,":\xA0\xA0The ViewModel can be easily tested independently of the View, as it doesn't have a direct dependency on the UI. "),t(),n(34,"li")(35,"b"),e(36,"Maintainability"),t(),e(37,":\xA0\xA0The separation of concerns makes it easier to modify or extend the application, as changes in one part of the application are less likely to affect other parts. "),t(),n(38,"li")(39,"b"),e(40,"Reusability"),t(),e(41,":\xA0\xA0ViewModels can be reused across multiple views, promoting code reusability. "),t()()()()(),n(42,"div",1),i(43,"img",2),t(),n(44,"h3",3),e(45,"Overview of the MVVM Pattern in Angular"),t(),n(46,"ul")(47,"li")(48,"b"),e(49,"Model (DomainModel)"),t(),e(50,":\xA0\xA0Manages application state, business logic, and data-fetching logic. "),t(),n(51,"li")(52,"b"),e(53,"ViewModel"),t(),e(54,":\xA0\xA0Acts as an intermediary between the View and Model. Transforms data from the Model to a format suitable for the View and exposes it as signals. "),t(),n(55,"li")(56,"b"),e(57,"View (Component + HTML)"),t(),e(58,":\xA0\xA0Renders the UI and delegates user actions to the ViewModel. "),t()(),i(59,"br"),n(60,"div",4)(61,"h6",5)(62,"mark"),e(63,"counter.model.ts"),t()(),e(64," \xA0\xA0 "),n(65,"h5",5),e(66,"(DomainModel - Shared Service)"),t()(),i(67,"app-code-highlight",6),n(68,"h5"),e(69,"Explanation"),t(),n(70,"ul")(71,"li")(72,"span",7),e(73,"Injectable"),t(),e(74,":\xA0\xA0Makes the service available for Dependency Injection. "),t(),n(75,"li")(76,"span",7),e(77,"signal"),t(),e(78,":\xA0\xA0Signals are used to manage reactive state. "),t(),n(79,"li")(80,"span",7),e(81,"HttpClient"),t(),e(82,":\xA0\xA0Injected to perform HTTP requests. "),t(),n(83,"li")(84,"span",7),e(85,"fetchRandomNumber()"),t(),e(86,":\xA0\xA0Fetches data from a backend API and updates the signal. "),t(),n(87,"li")(88,"span",7),e(89,"@Injectable({ providedIn: 'root' })"),t(),e(90,":\xA0\xA0Makes this service a singleton, ensuring shared state across all components using this service. "),t()(),e(91,`
\xA0\xA0 `),n(92,"div",4)(93,"h6",5)(94,"mark"),e(95,"counter.viewmodel.ts"),t()(),e(96," \xA0\xA0 "),n(97,"h5",5),e(98,"(ViewModel)"),t()(),i(99,"app-code-highlight",6),n(100,"h5"),e(101,"Explanation"),t(),n(102,"ul")(103,"li"),e(104," Acts as a facade between the "),n(105,"span",7),e(106,"Component"),t(),e(107," and the "),n(108,"span",7),e(109,"DomainModel"),t(),e(110,". "),t(),n(111,"li"),e(112," Only exposes what the "),n(113,"span",7),e(114,"Component"),t(),e(115," needs ("),n(116,"span",7),e(117,"count"),t(),e(118,", "),n(119,"span",7),e(120,"randomNumber"),t(),e(121,", "),n(122,"span",7),e(123,"increment()"),t(),e(124,", etc.). "),t(),n(125,"li"),e(126," Keeps the "),n(127,"span",7),e(128,"Component"),t(),e(129," clean and simple by only dealing with UI logic. "),t(),n(130,"li"),e(131," Allows "),n(132,"span",7),e(133,"CounterModel"),t(),e(134," to be swapped or modified without affecting the "),n(135,"span",7),e(136,"Component"),t(),e(137,". "),t()(),e(138,`
\xA0\xA0 `),n(139,"div",4)(140,"h6",5)(141,"mark"),e(142,"counter.component.ts"),t()(),e(143," \xA0\xA0 "),n(144,"h5",5),e(145,"(Controller Component - CounterComponent)"),t()(),i(146,"app-code-highlight",6),n(147,"h5"),e(148,"Explanation"),t(),n(149,"ul")(150,"li"),e(151,"View (HTML) and Controller (TypeScript) are tightly related."),t(),n(152,"li"),e(153," Injects the "),n(154,"span",7),e(155,"CounterViewModel"),t(),e(156," and interacts with its methods/signals. "),t(),n(157,"li"),e(158," Keeps UI rendering and interaction separate from data manipulation logic. "),t()(),e(159,`
\xA0\xA0 `),n(160,"div",4)(161,"h6",5)(162,"mark"),e(163,"display.component.ts"),t()(),e(164," \xA0\xA0 "),n(165,"h5",5),e(166,"(Controller Component - DisplayComponent)"),t()(),i(167,"app-code-highlight",6),n(168,"h5"),e(169,"Explanation"),t(),n(170,"ul")(171,"li"),e(172," Uses the same "),n(173,"span",7),e(174,"CounterViewModel"),t(),e(175," instance as "),n(176,"span",7),e(177,"CounterComponent"),t(),e(178," because it's provided in the "),n(179,"span",7),e(180,"root"),t(),e(181," scope. "),t(),n(182,"li"),e(183,"Demonstrates cross-component communication via signals."),t()(),e(184,`
\xA0\xA0 `),n(185,"div",4)(186,"h6",5)(187,"mark"),e(188,"display.component.html"),t()(),e(189," \xA0\xA0 "),n(190,"h5",5),e(191,"(Display View)"),t()(),i(192,"app-code-highlight",6),n(193,"h5"),e(194,"Explanation"),t(),n(195,"ul")(196,"li"),e(197," Displays shared state ("),n(198,"span",7),e(199,"count"),t(),e(200,") and performs a fetch for a random number. "),t()(),e(201,`
\xA0\xA0 `),n(202,"h4"),e(203,"Why This Structure Works Well"),t(),n(204,"ol")(205,"li")(206,"b"),e(207,"Separation of Concerns:"),t(),n(208,"ul")(209,"li")(210,"span",7),e(211,"DomainModel"),t(),e(212," handles data/state."),t(),n(213,"li")(214,"span",7),e(215,"ViewModel"),t(),e(216," acts as a bridge."),t(),n(217,"li")(218,"span",7),e(219,"Components"),t(),e(220," handle UI only."),t()()(),n(221,"li")(222,"b"),e(223,"Scalability:"),t(),n(224,"ul")(225,"li"),e(226,"Multiple components can interact with the same model via signals."),t()()(),n(227,"li")(228,"b"),e(229,"Testability:"),t(),n(230,"ul")(231,"li"),e(232,"Each layer can be independently unit-tested."),t()()()(),e(233,`
\xA0\xA0 `),n(234,"h4"),e(235,"Unit Testing"),t(),n(236,"div",4),e(237,` Let's dive into unit testing for each part of our Angular application using Jasmine and Angular Testing Utilities.\xA0\xA0I\u2019ll cover testing for:
`),t(),n(238,"ol")(239,"li")(240,"b"),e(241,"DomainModel"),t(),e(242," ("),n(243,"span",7),e(244,"CounterModel"),t(),e(245,") with HTTP mocking. "),t(),n(246,"li")(247,"b"),e(248,"ViewModel"),t(),e(249," ("),n(250,"span",7),e(251,"CounterViewModel"),t(),e(252,") with service interactions. "),t(),n(253,"li")(254,"b"),e(255,"Components"),t(),e(256," ("),n(257,"span",7),e(258,"CounterComponent"),t(),e(259," and "),n(260,"span",7),e(261,"DisplayComponent"),t(),e(262,") with user interaction and DOM verification. "),t()(),e(263,`
\xA0\xA0 `),n(264,"h4"),e(265," 1.\xA0\xA0Unit Testing "),n(266,"span",7),e(267,"CounterModel"),t(),e(268,` (DomainModel)
`),t(),n(269,"h5"),e(270," Mocking HTTP Requests in the "),n(271,"span",7),e(272,"CounterModel"),t()(),e(273,` We\u2019ll mock HTTP requests by using Jasmine\u2019s
`),n(274,"span",7),e(275,"HttpClientTestingModule"),t(),e(276,` and
`),n(277,"span",7),e(278,"HttpTestingController"),t(),e(279,". "),n(280,"div",8)(281,"h6",5)(282,"mark"),e(283,"counter.model.spec.ts"),t()(),e(284," \xA0\xA0 "),n(285,"h5",5),e(286,"(Test File for DomainModel)"),t()(),i(287,"app-code-highlight",6),n(288,"h5"),e(289,"Explanation"),t(),n(290,"ul")(291,"li")(292,"span",7),e(293,"HttpClientTestingModule"),t(),e(294,":\xA0\xA0This module is used to mock HTTP requests, so no actual HTTP requests are made during tests. "),t(),n(295,"li")(296,"span",7),e(297,"HttpTestingController"),t(),e(298,":\xA0\xA0Allows us to verify and mock responses for HTTP calls. "),t(),n(299,"li")(300,"b"),e(301,"Test Flow"),t(),e(302,": "),n(303,"ul")(304,"li"),e(305," We test that the "),n(306,"span",7),e(307,"CounterModel"),t(),e(308," properly increments, decrements, and resets the counter. "),t(),n(309,"li"),e(310," The "),n(311,"span",7),e(312,"fetchRandomNumber"),t(),e(313," method is tested to ensure it triggers an HTTP request and correctly updates the "),n(314,"span",7),e(315,"randomNumber"),t(),e(316," signal when the response is received. "),t()()()(),e(317,`
\xA0\xA0 `),n(318,"h4"),e(319," 2.\xA0\xA0Unit Testing "),n(320,"span",7),e(321,"CounterModel"),t(),n(322,"b"),e(323,"(ViewModel)"),t()(),e(324," We will "),n(325,"b"),e(326,"mock"),t(),e(327," the "),n(328,"span",7),e(329,"CounterModel"),t(),e(330,` so that we
can test the `),n(331,"span",7),e(332,"CounterViewModel"),t(),e(333," independently. "),n(334,"div",8)(335,"h6",5)(336,"mark"),e(337,"counter.viewmodel.spec.ts"),t()(),e(338," \xA0\xA0 "),n(339,"h5",5),e(340,"(Test File for ViewModel)"),t()(),i(341,"app-code-highlight",6),n(342,"h5"),e(343,"Explanation"),t(),n(344,"ul")(345,"li"),e(346," Jasmine Spies: "),n(347,"span",7),e(348,"createSpyObj"),t(),e(349," allows us to mock the methods and properties of "),n(350,"span",7),e(351,"CounterModel"),t(),e(352,". "),t(),n(353,"li")(354,"b"),e(355,"Test Flow"),t(),e(356,": "),n(357,"ul")(358,"li"),e(359," We mock the "),n(360,"span",7),e(361,"count"),t(),e(362," and "),n(363,"span",7),e(364,"randomNumber"),t(),e(365," values so that "),n(366,"span",7),e(367,"ViewModel"),t(),e(368," can be tested independently of the actual "),n(369,"span",7),e(370,"CounterModel"),t(),e(371," service. "),t(),n(372,"li"),e(373," We test that calling "),n(374,"span",7),e(375,"increment()"),t(),e(376,", "),n(377,"span",7),e(378,"decrement()"),t(),e(379,", and "),n(380,"span",7),e(381,"reset()"),t(),e(382," on the "),n(383,"span",7),e(384,"ViewModel"),t(),e(385," triggers the corresponding methods on the "),n(386,"span",7),e(387,"CounterModel"),t(),e(388,". "),t()()()(),e(389,`
\xA0\xA0 `),n(390,"h4"),e(391," 3.\xA0\xA0Unit Testing "),n(392,"span",7),e(393,"CounterComponent"),t()(),e(394," We test "),n(395,"b"),e(396,"UI behavior"),t(),e(397," and "),n(398,"b"),e(399,"component interaction"),t(),e(400,` with
`),n(401,"span",7),e(402,"ViewModel"),t(),e(403," using Angular's "),n(404,"b"),e(405,"TestBed"),t(),e(406,` and
`),n(407,"b"),e(408,"ComponentFixture"),t(),e(409,". "),n(410,"div",8)(411,"h6",5)(412,"mark"),e(413,"counter.component.spec.ts"),t()(),e(414," \xA0\xA0 "),n(415,"h5",5),e(416,"(Test File for CounterComponent)"),t()(),i(417,"app-code-highlight",6),n(418,"h5"),e(419,"Explanation"),t(),n(420,"ul")(421,"li")(422,"b"),e(423,"Test Component Interactions"),t(),e(424,": "),n(425,"ul")(426,"li")(427,"span",7),e(428,"fixture.detectChanges()"),t(),e(429," triggers change detection to ensure that the component\u2019s DOM updates reflect the model\u2019s state. "),t(),n(430,"li"),e(431," We check if the "),n(432,"span",7),e(433,"count"),t(),e(434," is displayed correctly in the view (h1 element). "),t(),n(435,"li"),e(436," We simulate button clicks and verify if "),n(437,"span",7),e(438,"increment()"),t(),e(439," and "),n(440,"span",7),e(441,"reset()"),t(),e(442," are called when buttons are clicked. "),t()()()(),e(443,`
\xA0\xA0 `),n(444,"h4"),e(445," 4.\xA0\xA0Unit Testing "),n(446,"span",7),e(447,"DisplayComponent"),t()(),e(448," Similar to "),n(449,"span",7),e(450,"CounterComponent"),t(),e(451,`, we will test the UI
rendering and user interactions (i.e., fetching random numbers). `),n(452,"div",8)(453,"h6",5)(454,"mark"),e(455,"display.component.spec.ts"),t()(),e(456," \xA0\xA0 "),n(457,"h5",5),e(458,"(Test File for DisplayComponent)"),t()(),i(459,"app-code-highlight",6),n(460,"h5"),e(461,"Explanation"),t(),n(462,"ul")(463,"li"),e(464," We simulate a user clicking the button and ensure the correct method ("),n(465,"span",7),e(466,"fetchRandomNumber()"),t(),e(467,") is called. "),t(),n(468,"li"),e(469," We mock the "),n(470,"span",7),e(471,"count"),t(),e(472," value and ensure the UI updates properly when the value changes. "),t()(),e(473,`
\xA0\xA0 `),n(474,"h4"),e(475,"Final Thoughts on Testing"),t(),n(476,"ol")(477,"li")(478,"b"),e(479,"DomainModel Tests"),t(),e(480,":\xA0\xA0Focus on business logic, state management, and data-fetching behavior. "),t(),n(481,"li")(482,"b"),e(483,"ViewModel Tests"),t(),e(484,":\xA0\xA0Test the interaction between the ViewModel and the DomainModel, ensuring that methods are invoked correctly. "),t(),n(485,"li")(486,"b"),e(487,"Component Tests"),t(),e(488,":\xA0\xA0Test the UI rendering and user interactions, making sure that components react correctly to user inputs and render the expected values. "),t()()),m&2&&(l(67),r("code",a.counterModelCode)("language","typescript"),l(32),r("code",a.counterViewModelCode)("language","typescript"),l(47),r("code",a.counterComponentCode)("language","typescript"),l(21),r("code",a.displayComponentCode)("language","typescript"),l(25),r("code",a.displayComponentHtml)("language","html"),l(95),r("code",a.counterModelSpecCode)("language","typescript"),l(54),r("code",a.counterViewModelSpecCode)("language","typescript"),l(76),r("code",a.counterComponentSpecCode)("language","typescript"),l(42),r("code",a.displayComponentSpecCode)("language","typescript"))},dependencies:[u],encapsulation:2})};export{c as a};
