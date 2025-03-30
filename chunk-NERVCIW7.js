import{Bb as n,Cb as t,Db as o,Gb as d,Pb as e,hb as u,lb as s,qb as m,sb as c,ub as p,xa as l}from"./chunk-VK3H6FRJ.js";var h=()=>[import("./chunk-QSA45S2X.js").then(a=>a.CodeHighLightComponent)];function f(a,i){if(a&1&&o(0,"app-code-highlight",6),a&2){let r=d();p("code",r.adapterPatternCode1)("language","typescript")}}function x(a,i){a&1&&(n(0,"span"),e(1,"Loading..."),t())}function S(a,i){if(a&1&&o(0,"app-code-highlight",6),a&2){let r=d();p("code",r.adapterPatternCode2)("language","typescript")}}function y(a,i){a&1&&(n(0,"span"),e(1,"Loading..."),t())}function A(a,i){if(a&1&&o(0,"app-code-highlight",6),a&2){let r=d();p("code",r.adapterPatternCode3)("language","typescript")}}function v(a,i){a&1&&(n(0,"span"),e(1,"Loading..."),t())}function b(a,i){if(a&1&&o(0,"app-code-highlight",6),a&2){let r=d();p("code",r.adapterPatternCode4)("language","typescript")}}function w(a,i){a&1&&(n(0,"span"),e(1,"Loading..."),t())}var g=class a{adapterPatternCode1=l(`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LegacyUserService {
  // The legacy method to get user data
  getUserDataFromLegacySystem(): string {
    // Simulating a response from a legacy system
    console.log('Fetching data from legacy system...');
    return 'Legacy User: John Doe, Age: 30';
  }
}
`);adapterPatternCode2=l(`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  // The new method with a modern interface
  getUserInfo(): { name: string; age: number } {
    // Simulating a response from the new system
    console.log('Fetching data from new system...');
    return { name: 'John Doe', age: 30 };
  }
}
`);adapterPatternCode3=l(`import { Injectable } from '@angular/core';
import { LegacyUserService } from './legacy-user.service';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserAdapterService {
  constructor(
    private legacyUserService: LegacyUserService,
    private newUserService: NewUserService
  ) {}

  // Adapter method that combines legacy and modern interfaces
  getUserInfo(): { name: string; age: number } {
    // We can either use the legacy service or the new service
    // For this example, we'll adapt the legacy method to match the new interface
    const legacyData = this.legacyUserService.getUserDataFromLegacySystem();
    
    // Transform legacy data into the new format
    const [name, age] = legacyData.replace('Legacy User: ', '').split(', Age: ');
    
    return { name, age: Number(age) };
  }
}
`);adapterPatternCode4=l(`import { Component } from '@angular/core';
import { UserAdapterService } from './user-adapter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Adapter Pattern in Angular 19</h1>
    <button (click)="getUserInfo()">Get User Info</button>
    <p *ngIf="userInfo">{{ userInfo.name }} - {{ userInfo.age }} years old</p>
  \`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userInfo: { name: string; age: number } | null = null;

  constructor(private userAdapter: UserAdapterService) {}

  getUserInfo(): void {
    this.userInfo = this.userAdapter.getUserInfo();
  }
}
`);static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["app-adapter-pattern"]],decls:115,vars:0,consts:[[1,"mb-4"],["start","2"],["start","3"],[1,"hljs-attr"],["start","4"],[1,"mt-4"],[3,"code","language"]],template:function(r,E){r&1&&(n(0,"h1"),e(1,"Adapter Pattern"),t(),n(2,"div",0),e(3," The "),n(4,"b"),e(5,"Avdapter Pattern"),t(),e(6,` is a structural design pattern that allows incompatible interfaces to work together by creating a wrapper (adapter) that translates one interface into another.\xA0\xA0This can be useful when you want to integrate different systems or third-party libraries that have different interfaces.
`),t(),n(7,"h2"),e(8,"Implementation"),t(),n(9,"div",0),e(10," In this example, we\u2019ll use the "),n(11,"b"),e(12,"Adapter Pattern"),t(),e(13," to adapt the interface of a legacy service to work with a modern service in an Angular 19 application using standalone components."),o(14,"br")(15,"br"),n(16,"ol")(17,"li")(18,"b"),e(19,"Legacy Service (The Old System)"),t()()(),n(20,"div",0),e(21," Let\u2019s define a legacy service that has a method to fetch user data, but the interface is incompatible with the newer system we want to integrate it with. "),t(),s(22,f,1,2)(23,x,2,0),m(24,22,h,null,23),c(0,-1),n(26,"ol",1)(27,"li")(28,"b"),e(29,"New System Service (Modern Interface)"),t()()(),n(30,"div",0),e(31," Now, let's define the new system\u2019s service that we want to use, which has a different interface. "),t(),s(32,S,1,2)(33,y,2,0),m(34,32,h,null,33),c(0,-1),n(36,"ol",2)(37,"li")(38,"b"),e(39,"The Adapter Service"),t()()(),n(40,"div",0),e(41," We now create the Adapter service, which adapts the "),n(42,"span",3),e(43,"LegacyUserService"),t(),e(44," to the "),n(45,"span",3),e(46,"NewUserService"),t(),e(47," interface.\xA0\xA0The adapter will translate the "),n(48,"span",3),e(49,"getUserDataFromLegacySystem"),t(),e(50," method into something that conforms to the "),n(51,"span",3),e(52,"getUserInfo"),t(),e(53," method. "),t(),s(54,A,1,2)(55,v,2,0),m(56,54,h,null,55),c(0,-1),n(58,"ol",4)(59,"li")(60,"b"),e(61,"Standalone Component Using the Adapter"),t()()(),n(62,"div",0),e(63," Now, let\u2019s create a standalone component that uses the adapter to access the user data through the modern interface ("),n(64,"span",3),e(65,"getUserInfo"),t(),e(66,"). "),t(),s(67,b,1,2)(68,w,2,0),m(69,67,h,null,68),c(0,-1),t(),n(71,"h4",5),e(72,"Explanation:"),t(),n(73,"ul")(74,"li")(75,"b"),e(76,"LegacyUserService"),t(),e(77,":\xA0\xA0This simulates an old service with an incompatible interface.\xA0\xA0It has a method "),n(78,"span",3),e(79,"getUserDataFromLegacySystem"),t(),e(80," that returns a string in an old format. "),t(),n(81,"li")(82,"b"),e(83,"NewUserService"),t(),e(84,":\xA0\xA0This is the modern system\u2019s service with a clean, structured interface.\xA0\xA0It provides user data as an object ("),n(85,"span",3),e(86,"{ name: string; age: number }"),t(),e(87,"). "),t(),n(88,"li")(89,"b"),e(90,"UserAdapterService"),t(),e(91,":\xA0\xA0This is the core of the Adapter Pattern. It adapts the legacy service\u2019s method ("),n(92,"span",3),e(93,"getUserDataFromLegacySystem"),t(),e(94,") to match the expected format of the new service\u2019s method ("),n(95,"span",3),e(96,"getUserInfo"),t(),e(97,").\xA0\xA0It does this by extracting and transforming the legacy data into the expected object format. "),t(),n(98,"li")(99,"b"),e(100,"AppComponent"),t(),e(101,":\xA0\xA0The component uses the "),n(102,"span",3),e(103,"UserAdapterService"),t(),e(104," to fetch user data via the modern "),n(105,"span",3),e(106,"getUserInfo"),t(),e(107," method.\xA0\xA0This allows the component to interact with the modern interface while hiding the complexity of the legacy system. "),t()(),n(108,"h4",5),e(109,"Conclusion:"),t(),n(110,"div",0),e(111," The "),n(112,"b"),e(113,"Adapter Pattern"),t(),e(114,` in Angular 19 with standalone components helps us to bridge the gap between legacy and modern systems by creating a service that adapts one interface to another.\xA0\xA0This pattern is particularly useful when integrating third-party libraries or legacy systems into a modern application.
`),t())},encapsulation:2})};export{g as a};
