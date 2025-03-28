import{Ib as e,cb as b,fb as l,kb as p,lb as h,nb as m,sa as s,ub as n,vb as t,wb as o,zb as c}from"./chunk-DG46SKAS.js";var d=()=>[import("./chunk-OUUINALE.js").then(i=>i.CodeHighLightComponent)];function x(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=c();m("code",r.observerPatternCode1)("language","typescript")}}function v(i,a){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function S(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=c();m("code",r.observerPatternCode2)("language","typescript")}}function w(i,a){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function f(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=c();m("code",r.observerPatternCode3)("language","typescript")}}function g(i,a){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function y(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=c();m("code",r.observerPatternCode4)("language","typescript")}}function C(i,a){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function W(i,a){if(i&1&&o(0,"app-code-highlight",6),i&2){let r=c();m("code",r.observerPatternCode5)("language","typescript")}}function E(i,a){i&1&&(n(0,"span"),e(1,"Loading..."),t())}var u=class i{observerPatternCode1=s(`import { Injectable } from '@angular/core';
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
`);observerPatternCode2=s(`import { Component, OnInit, OnDestroy } from '@angular/core';
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
`);observerPatternCode3=s(`import { Component, OnInit, OnDestroy } from '@angular/core';
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
`);observerPatternCode4=s(`import { Component } from '@angular/core';
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
`);observerPatternCode5=s(`import { Component } from '@angular/core';
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
`);static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["app-observer-pattern"]],decls:161,vars:0,consts:[[1,"mb-4"],["start","2"],["start","3"],["start","4"],[1,"mt-4"],[1,"hljs-attr"],[3,"code","language"]],template:function(r,O){r&1&&(n(0,"h1"),e(1,"Observer Pattern"),t(),n(2,"div",0),e(3," The "),n(4,"b"),e(5,"Observer Pattern"),t(),e(6," is a behavioral design pattern where an object (the "),n(7,"b"),e(8,"subject"),t(),e(9,`) maintains a list of its dependents (observers), and notifies them of any state changes, usually by calling one of their methods.\xA0\xA0This is useful when you need to broadcast changes to multiple components or services.
`),t(),n(10,"h2"),e(11,"Implementation"),t(),n(12,"div",0),e(13," In Angular 19 with "),n(14,"b"),e(15,"standalone components"),t(),e(16,", we can implement the "),n(17,"b"),e(18,"Observer Pattern"),t(),e(19," using "),n(20,"b"),e(21,"RxJS"),t(),e(22," (Reactive Extensions for JavaScript), which is a popular way of handling asynchronous events and streams of data in Angular."),o(23,"br")(24,"br"),e(25,"In this example, we'll simulate a system where a "),n(26,"b"),e(27,"Weather Service"),t(),e(28," updates weather information, and multiple "),n(29,"b"),e(30,"Weather Display Components"),t(),e(31," observe those updates."),o(32,"br")(33,"br"),n(34,"ol")(35,"li")(36,"b"),e(37,"The Subject (Weather Service)"),t()()(),n(38,"div",0),e(39," The "),n(40,"b"),e(41,"Weather Service"),t(),e(42," acts as the "),n(43,"b"),e(44,"subject"),t(),e(45," in the Observer Pattern.\xA0\xA0It will notify all subscribed components (observers) when the weather changes. "),t(),l(46,x,1,2)(47,v,2,0),p(48,46,d,null,47),h(0,-1),n(50,"ol",1)(51,"li")(52,"b"),e(53,"The Observers (Weather Display Components)"),t()()(),n(54,"div",0),e(55," Now, let\u2019s create a couple of "),n(56,"b"),e(57,"Weather Display Components"),t(),e(58," that will observe changes in the weather. "),t(),l(59,S,1,2)(60,w,2,0),p(61,59,d,null,60),h(0,-1),l(63,f,1,2)(64,g,2,0),p(65,63,d,null,64),h(0,-1),n(67,"ol",2)(68,"li")(69,"b"),e(70,"Weather Update Component (Update the Weather)"),t()()(),n(71,"div",0),e(72," Next, we create a "),n(73,"b"),e(74,"Weather Update Component"),t(),e(75," that allows the user to update the weather.\xA0\xA0This component will interact with the "),n(76,"b"),e(77,"Weather Service"),t(),e(78," to trigger changes in the weather. "),t(),l(79,y,1,2)(80,C,2,0),p(81,79,d,null,80),h(0,-1),n(83,"ol",3)(84,"li")(85,"b"),e(86,"App Component (Main Entry)"),t()()(),n(87,"div",0),e(88," Finally, we put everything together in the "),n(89,"b"),e(90,"App Component"),t(),e(91,".\xA0\xA0This component will display both the "),n(92,"b"),e(93,"Weather Update Component"),t(),e(94," and the "),n(95,"b"),e(96,"Weather Display Components"),t(),e(97,". "),t(),l(98,W,1,2)(99,E,2,0),p(100,98,d,null,99),h(0,-1),t(),n(102,"h4",4),e(103,"Explanation:"),t(),n(104,"ul")(105,"li")(106,"b"),e(107,"WeatherService (Subject)"),t(),e(108,":\xA0\xA0The "),n(109,"span",5),e(110,"WeatherService"),t(),e(111," is the subject in the Observer Pattern.\xA0\xA0It uses a "),n(112,"span",5),e(113,"BehaviorSubject"),t(),e(114," to hold and broadcast the current weather.\xA0\xA0When the weather changes, it calls "),n(115,"span",5),e(116,"next()"),t(),e(117," to notify all subscribers (observers). "),t(),n(118,"li")(119,"b"),e(120,"WeatherDisplayComponent (Observer 1) and WeatherDisplay2Component (Observer 2)"),t(),e(121,":\xA0\xA0These are the "),n(122,"b"),e(123,"observers"),t(),e(124," that listen for changes in the weather.\xA0\xA0They subscribe to the "),n(125,"span",5),e(126,"weather$"),t(),e(127," observable from the "),n(128,"span",5),e(129,"WeatherService"),t(),e(130," and update their displayed weather when it changes. "),t(),n(131,"li")(132,"b"),e(133,"WeatherUpdateComponent"),t(),e(134,":\xA0\xA0This component allows the user to update the weather.\xA0\xA0When the user clicks one of the buttons, it calls "),n(135,"span",5),e(136,"updateWeather()"),t(),e(137," on the "),n(138,"span",5),e(139,"WeatherService"),t(),e(140,", which updates the weather and triggers notifications to all subscribed components. "),t(),n(141,"li")(142,"b"),e(143,"AppComponent"),t(),e(144,":\xA0\xA0The main entry point, which imports and displays the update and display components. "),t()(),n(145,"h4",4),e(146,"Conclusion:"),t(),n(147,"div",0),e(148," This is a simple implementation of the "),n(149,"b"),e(150,"Observer Pattern"),t(),e(151," in Angular 19 using "),n(152,"b"),e(153,"RxJS"),t(),e(154,".\xA0\xA0The "),n(155,"b"),e(156,"Weather Service"),t(),e(157," (subject) notifies all "),n(158,"b"),e(159,"Weather Display Components"),t(),e(160,` (observers) when the weather changes.\xA0\xA0This pattern allows for loose coupling between components and makes it easy to extend the system by adding more observers without changing the core logic of the system.
`),t())},encapsulation:2})};export{u as a};
