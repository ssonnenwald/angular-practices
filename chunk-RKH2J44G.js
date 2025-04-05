import{Bb as t,Cb as n,Db as l,Gb as g,Pb as e,hb as h,lb as s,qb as c,sb as m,ub as p,xa as r}from"./chunk-MYE3REJX.js";var S=()=>[import("./chunk-TLEZR6OQ.js").then(i=>i.CodeHighLightComponent)];function u(i,a){if(i&1&&l(0,"app-code-highlight",4),i&2){let o=g();p("code",o.singletonPatternCode1)("language","typescript")}}function f(i,a){i&1&&(t(0,"span"),e(1,"Loading..."),n())}function v(i,a){if(i&1&&l(0,"app-code-highlight",4),i&2){let o=g();p("code",o.singletonPatternCode2)("language","typescript")}}function x(i,a){i&1&&(t(0,"span"),e(1,"Loading..."),n())}var d=class i{singletonPatternCode1=r(`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Ensures the service is a singleton in the app
})
export class SingletonService {
  private static instance: SingletonService;

  private constructor() {
    console.log('SingletonService instance created');
  }

  // Static method to get the instance of the service
  public static getInstance(): SingletonService {
    if (!SingletonService.instance) {
      SingletonService.instance = new SingletonService();
    }
    return SingletonService.instance;
  }

  // Example method in the service
  public getData(): string {
    return 'Singleton Service Data';
  }
}
`);singletonPatternCode2=r(`import { Component, OnInit } from '@angular/core';
import { SingletonService } from './singleton.service';

@Component({
  selector: 'app-root',
  template: \`<h1>{{ data }}</h1>\`
})
export class AppComponent implements OnInit {
  data: string;

  constructor(private singletonService: SingletonService) {}

  ngOnInit(): void {
    // Accessing the singleton instance using the static method
    const instance = SingletonService.getInstance();
    this.data = instance.getData();
  }
}
`);static \u0275fac=function(o){return new(o||i)};static \u0275cmp=h({type:i,selectors:[["app-singleton-pattern"]],decls:62,vars:0,consts:[[1,"mb-4"],[1,"mt-4"],[1,"hljs-attr"],["start","2"],[3,"code","language"]],template:function(o,C){o&1&&(t(0,"h1"),e(1,"Singleton Pattern"),n(),t(2,"div",0),e(3,` Singleton is a creational design pattern, which ensures that only one object of its kind exists and provides a single point of access to it for any other code.
`),n(),t(4,"h2"),e(5,"Singleton Service"),n(),t(6,"div",0),e(7," Here\u2019s an example of a singleton service in Angular 19 using TypeScript:"),l(8,"br")(9,"br"),t(10,"ol")(11,"li")(12,"b"),e(13,"Creating the Singleton Service"),n()()(),t(14,"div"),e(15," In Angular, the service can still be provided at the root level to ensure that it follows the Singleton pattern. "),n()(),s(16,u,1,2)(17,f,2,0),c(18,16,S,null,17),m(0,-1),t(20,"h4",1),e(21,"Key Points:"),n(),t(22,"ul")(23,"li")(24,"span",2),e(25,"providedIn: 'root'"),n(),e(26," ensures that the service is a singleton throughout the application (Angular will create it only once). "),n(),t(27,"li"),e(28," The "),t(29,"span",2),e(30,"getInstance()"),n(),e(31," method ensures that only one instance of the service is ever created. "),n()(),t(32,"ol",3)(33,"li")(34,"b"),e(35,"Using the Singleton Service in a Component"),n()()(),t(36,"div",0),e(37,` To use the singleton service in a component, you simply inject the service as usual.\xA0\xA0Angular ensures it\u2019s the same instance throughout the application.
`),n(),s(38,v,1,2)(39,x,2,0),c(40,38,S,null,39),m(0,-1),t(42,"h4",1),e(43,"Explanation:"),n(),t(44,"ul")(45,"li"),e(46," In the service, "),t(47,"span",2),e(48,"getInstance()"),n(),e(49," controls the creation of the singleton instance.\xA0\xA0If the instance doesn\u2019t exist, it is created, otherwise the existing one is returned. "),n(),t(50,"li"),e(51," The component injects the "),t(52,"span",2),e(53,"SingletonService"),n(),e(54,", and you can use its "),t(55,"span",2),e(56,"getData()"),n(),e(57," method or any other methods you define. "),n()(),t(58,"h4",1),e(59,"Conclusion:"),n(),t(60,"div",0),e(61,` This pattern can be useful when you want to make sure that there is only one instance of a service managing shared state or performing a task that should only have a single point of execution.
`),n())},encapsulation:2})};export{d as a};
