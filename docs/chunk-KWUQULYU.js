import{I as m}from"./chunk-4HLAVGCF.js";import{Hb as e,Sa as a,bb as p,mb as o,ta as r,tb as n,ub as t,vb as i}from"./chunk-ENZIFP74.js";var d=class h{observerPatternCode1=r(`import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // The weather data stream, initialized with a default weather state
  private weatherSubject = new BehaviorSubject<string>('Sunny');
  weather$ = this.weatherSubject.asObservable();

  // Method to update the weather
  updateWeather(weather: string): void {
    console.log(\`Weather updated to: \${weather}\`);
    this.weatherSubject.next(weather);
  }
}
`);observerPatternCode2=r(`import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  template: \`
    <div>
      <h3>Weather Display 1</h3>
      <p>Current Weather: {{ weather }}</p>
    </div>
  \`,
  styleUrls: ['./weather-display.component.css'],
})
export class WeatherDisplayComponent implements OnInit, OnDestroy {
  weather: string = '';
  private weatherSubscription!: Subscription;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // Subscribe to the weather stream from the WeatherService (Observer)
    this.weatherSubscription = this.weatherService.weather$.subscribe(
      (weather) => {
        this.weather = weather;
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed to avoid memory leaks
    this.weatherSubscription.unsubscribe();
  }
}
`);observerPatternCode3=r(`import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-display2',
  standalone: true,
  template: \`
    <div>
      <h3>Weather Display 2</h3>
      <p>Current Weather: {{ weather }}</p>
    </div>
  \`,
  styleUrls: ['./weather-display2.component.css'],
})
export class WeatherDisplay2Component implements OnInit, OnDestroy {
  weather: string = '';
  private weatherSubscription!: Subscription;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // Subscribe to the weather stream from the WeatherService (Observer)
    this.weatherSubscription = this.weatherService.weather$.subscribe(
      (weather) => {
        this.weather = weather;
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed to avoid memory leaks
    this.weatherSubscription.unsubscribe();
  }
}
`);observerPatternCode4=r(`import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-update',
  standalone: true,
  template: \`
    <div>
      <h3>Weather Update</h3>
      <button (click)="updateWeather('Sunny')">Sunny</button>
      <button (click)="updateWeather('Rainy')">Rainy</button>
      <button (click)="updateWeather('Cloudy')">Cloudy</button>
    </div>
  \`,
  styleUrls: ['./weather-update.component.css'],
})
export class WeatherUpdateComponent {
  constructor(private weatherService: WeatherService) {}

  // Update the weather by calling the WeatherService
  updateWeather(weather: string): void {
    this.weatherService.updateWeather(weather);
  }
}
`);observerPatternCode5=r(`import { Component } from '@angular/core';
import { WeatherUpdateComponent } from './weather-update.component';
import { WeatherDisplayComponent } from './weather-display.component';
import { WeatherDisplay2Component } from './weather-display2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Observer Pattern in Angular 19</h1>
    <app-weather-update></app-weather-update>
    <app-weather-display></app-weather-display>
    <app-weather-display2></app-weather-display2>
  \`,
  styleUrls: ['./app.component.css'],
  imports: [WeatherUpdateComponent, WeatherDisplayComponent, WeatherDisplay2Component],
})
export class AppComponent {}
`);static \u0275fac=function(l){return new(l||h)};static \u0275cmp=p({type:h,selectors:[["app-observer-pattern"]],decls:146,vars:10,consts:[[1,"mb-4"],[3,"code","language"],["start","2"],["start","3"],["start","4"],[1,"mt-4"],[1,"hljs-attr"]],template:function(l,s){l&1&&(n(0,"h1"),e(1,"Observer Pattern"),t(),n(2,"div",0),e(3," The "),n(4,"b"),e(5,"Observer Pattern"),t(),e(6," is a behavioral design pattern where an object (the "),n(7,"b"),e(8,"subject"),t(),e(9,`) maintains a list of its dependents (observers), and notifies them of any state changes, usually by calling one of their methods.\xA0\xA0This is useful when you need to broadcast changes to multiple components or services.
`),t(),n(10,"h2"),e(11,"Implementation"),t(),n(12,"div",0),e(13," In Angular 19 with "),n(14,"b"),e(15,"standalone components"),t(),e(16,", we can implement the "),n(17,"b"),e(18,"Observer Pattern"),t(),e(19," using "),n(20,"b"),e(21,"RxJS"),t(),e(22," (Reactive Extensions for JavaScript), which is a popular way of handling asynchronous events and streams of data in Angular."),i(23,"br")(24,"br"),e(25,"In this example, we'll simulate a system where a "),n(26,"b"),e(27,"Weather Service"),t(),e(28," updates weather information, and multiple "),n(29,"b"),e(30,"Weather Display Components"),t(),e(31," observe those updates."),i(32,"br")(33,"br"),n(34,"ol")(35,"li")(36,"b"),e(37,"The Subject (Weather Service)"),t()()(),n(38,"div",0),e(39," The "),n(40,"b"),e(41,"Weather Service"),t(),e(42," acts as the "),n(43,"b"),e(44,"subject"),t(),e(45," in the Observer Pattern.\xA0\xA0It will notify all subscribed components (observers) when the weather changes. "),t(),i(46,"app-code-highlight",1),n(47,"ol",2)(48,"li")(49,"b"),e(50,"The Observers (Weather Display Components)"),t()()(),n(51,"div",0),e(52," Now, let\u2019s create a couple of "),n(53,"b"),e(54,"Weather Display Components"),t(),e(55," that will observe changes in the weather. "),t(),i(56,"app-code-highlight",1)(57,"app-code-highlight",1),n(58,"ol",3)(59,"li")(60,"b"),e(61,"Weather Update Component (Update the Weather)"),t()()(),n(62,"div",0),e(63," Next, we create a "),n(64,"b"),e(65,"Weather Update Component"),t(),e(66," that allows the user to update the weather.\xA0\xA0This component will interact with the "),n(67,"b"),e(68,"Weather Service"),t(),e(69," to trigger changes in the weather. "),t(),i(70,"app-code-highlight",1),n(71,"ol",4)(72,"li")(73,"b"),e(74,"App Component (Main Entry)"),t()()(),n(75,"div",0),e(76," Finally, we put everything together in the "),n(77,"b"),e(78,"App Component"),t(),e(79,".\xA0\xA0This component will display both the "),n(80,"b"),e(81,"Weather Update Component"),t(),e(82," and the "),n(83,"b"),e(84,"Weather Display Components"),t(),e(85,". "),t(),i(86,"app-code-highlight",1),t(),n(87,"h4",5),e(88,"Explanation:"),t(),n(89,"ul")(90,"li")(91,"b"),e(92,"WeatherService (Subject)"),t(),e(93,":\xA0\xA0The "),n(94,"span",6),e(95,"WeatherService"),t(),e(96," is the subject in the Observer Pattern.\xA0\xA0It uses a "),n(97,"span",6),e(98,"BehaviorSubject"),t(),e(99," to hold and broadcast the current weather.\xA0\xA0When the weather changes, it calls "),n(100,"span",6),e(101,"next()"),t(),e(102," to notify all subscribers (observers). "),t(),n(103,"li")(104,"b"),e(105,"WeatherDisplayComponent (Observer 1) and WeatherDisplay2Component (Observer 2)"),t(),e(106,":\xA0\xA0These are the "),n(107,"b"),e(108,"observers"),t(),e(109," that listen for changes in the weather.\xA0\xA0They subscribe to the "),n(110,"span",6),e(111,"weather$"),t(),e(112," observable from the "),n(113,"span",6),e(114,"WeatherService"),t(),e(115," and update their displayed weather when it changes. "),t(),n(116,"li")(117,"b"),e(118,"WeatherUpdateComponent"),t(),e(119,":\xA0\xA0This component allows the user to update the weather.\xA0\xA0When the user clicks one of the buttons, it calls "),n(120,"span",6),e(121,"updateWeather()"),t(),e(122," on the "),n(123,"span",6),e(124,"WeatherService"),t(),e(125,", which updates the weather and triggers notifications to all subscribed components. "),t(),n(126,"li")(127,"b"),e(128,"AppComponent"),t(),e(129,":\xA0\xA0The main entry point, which imports and displays the update and display components. "),t()(),n(130,"h4",5),e(131,"Conclusion:"),t(),n(132,"div",0),e(133," This is a simple implementation of the "),n(134,"b"),e(135,"Observer Pattern"),t(),e(136," in Angular 19 using "),n(137,"b"),e(138,"RxJS"),t(),e(139,".\xA0\xA0The "),n(140,"b"),e(141,"Weather Service"),t(),e(142," (subject) notifies all "),n(143,"b"),e(144,"Weather Display Components"),t(),e(145,` (observers) when the weather changes.\xA0\xA0This pattern allows for loose coupling between components and makes it easy to extend the system by adding more observers without changing the core logic of the system.
`),t()),l&2&&(a(46),o("code",s.observerPatternCode1)("language","typescript"),a(10),o("code",s.observerPatternCode2)("language","typescript"),a(),o("code",s.observerPatternCode3)("language","typescript"),a(13),o("code",s.observerPatternCode4)("language","typescript"),a(16),o("code",s.observerPatternCode5)("language","typescript"))},dependencies:[m],encapsulation:2})};export{d as a};
