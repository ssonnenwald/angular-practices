import{a as d}from"./chunk-OEMQRESF.js";import"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as i,_a as c,jb as o,nb as a,ob as t,pb as n,ra as r}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var p=class m{adapterPatternCode1=r(`import { Injectable } from '@angular/core';

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
`);adapterPatternCode2=r(`import { Injectable } from '@angular/core';

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
`);adapterPatternCode3=r(`import { Injectable } from '@angular/core';
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
`);adapterPatternCode4=r(`import { Component } from '@angular/core';
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
`);static \u0275fac=function(s){return new(s||m)};static \u0275cmp=c({type:m,selectors:[["app-adapter-pattern"]],decls:103,vars:8,consts:[[1,"mb-4"],[3,"code","language"],["start","2"],["start","3"],[1,"hljs-attr"],["start","4"],[1,"mt-4"]],template:function(s,l){s&1&&(a(0,"h1"),e(1,"Adapter Pattern"),t(),a(2,"div",0),e(3," The "),a(4,"b"),e(5,"Avdapter Pattern"),t(),e(6,` is a structural design pattern that allows incompatible interfaces to work together by creating a wrapper (adapter) that translates one interface into another.\xA0\xA0This can be useful when you want to integrate different systems or third-party libraries that have different interfaces.
`),t(),a(7,"h2"),e(8,"Implementation"),t(),a(9,"div",0),e(10," In this example, we\u2019ll use the "),a(11,"b"),e(12,"Adapter Pattern"),t(),e(13," to adapt the interface of a legacy service to work with a modern service in an Angular 19 application using standalone components."),n(14,"br")(15,"br"),a(16,"ol")(17,"li")(18,"b"),e(19,"Legacy Service (The Old System)"),t()()(),a(20,"div",0),e(21," Let\u2019s define a legacy service that has a method to fetch user data, but the interface is incompatible with the newer system we want to integrate it with. "),t(),n(22,"app-code-highlight",1),a(23,"ol",2)(24,"li")(25,"b"),e(26,"New System Service (Modern Interface)"),t()()(),a(27,"div",0),e(28," Now, let's define the new system\u2019s service that we want to use, which has a different interface. "),t(),n(29,"app-code-highlight",1),a(30,"ol",3)(31,"li")(32,"b"),e(33,"The Adapter Service"),t()()(),a(34,"div",0),e(35," We now create the Adapter service, which adapts the "),a(36,"span",4),e(37,"LegacyUserService"),t(),e(38," to the "),a(39,"span",4),e(40,"NewUserService"),t(),e(41," interface.\xA0\xA0The adapter will translate the "),a(42,"span",4),e(43,"getUserDataFromLegacySystem"),t(),e(44," method into something that conforms to the "),a(45,"span",4),e(46,"getUserInfo"),t(),e(47," method. "),t(),n(48,"app-code-highlight",1),a(49,"ol",5)(50,"li")(51,"b"),e(52,"Standalone Component Using the Adapter"),t()()(),a(53,"div",0),e(54," Now, let\u2019s create a standalone component that uses the adapter to access the user data through the modern interface ("),a(55,"span",4),e(56,"getUserInfo"),t(),e(57,"). "),t(),n(58,"app-code-highlight",1),t(),a(59,"h4",6),e(60,"Explanation:"),t(),a(61,"ul")(62,"li")(63,"b"),e(64,"LegacyUserService"),t(),e(65,":\xA0\xA0This simulates an old service with an incompatible interface.\xA0\xA0It has a method "),a(66,"span",4),e(67,"getUserDataFromLegacySystem"),t(),e(68," that returns a string in an old format. "),t(),a(69,"li")(70,"b"),e(71,"NewUserService"),t(),e(72,":\xA0\xA0This is the modern system\u2019s service with a clean, structured interface.\xA0\xA0It provides user data as an object ("),a(73,"span",4),e(74,"{ name: string; age: number }"),t(),e(75,"). "),t(),a(76,"li")(77,"b"),e(78,"UserAdapterService"),t(),e(79,":\xA0\xA0This is the core of the Adapter Pattern. It adapts the legacy service\u2019s method ("),a(80,"span",4),e(81,"getUserDataFromLegacySystem"),t(),e(82,") to match the expected format of the new service\u2019s method ("),a(83,"span",4),e(84,"getUserInfo"),t(),e(85,").\xA0\xA0It does this by extracting and transforming the legacy data into the expected object format. "),t(),a(86,"li")(87,"b"),e(88,"AppComponent"),t(),e(89,":\xA0\xA0The component uses the "),a(90,"span",4),e(91,"UserAdapterService"),t(),e(92," to fetch user data via the modern "),a(93,"span",4),e(94,"getUserInfo"),t(),e(95," method.\xA0\xA0This allows the component to interact with the modern interface while hiding the complexity of the legacy system. "),t()(),a(96,"h4",6),e(97,"Conclusion:"),t(),a(98,"div",0),e(99," The "),a(100,"b"),e(101,"Adapter Pattern"),t(),e(102,` in Angular 19 with standalone components helps us to bridge the gap between legacy and modern systems by creating a service that adapts one interface to another.\xA0\xA0This pattern is particularly useful when integrating third-party libraries or legacy systems into a modern application.
`),t()),s&2&&(i(22),o("code",l.adapterPatternCode1)("language","typescript"),i(7),o("code",l.adapterPatternCode2)("language","typescript"),i(19),o("code",l.adapterPatternCode3)("language","typescript"),i(10),o("code",l.adapterPatternCode4)("language","typescript"))},dependencies:[d],encapsulation:2})};export{p as AdapterPatternComponent};
