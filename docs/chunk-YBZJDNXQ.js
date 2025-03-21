import{a as g}from"./chunk-OEMQRESF.js";import"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as r,_a as m,jb as l,nb as t,ob as n,pb as o,ra as a}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var p=class s{singletonPatternCode1=a(`import { Injectable } from '@angular/core';

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
`);singletonPatternCode2=a(`import { Component, OnInit } from '@angular/core';
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
`);static \u0275fac=function(i){return new(i||s)};static \u0275cmp=m({type:s,selectors:[["app-singleton-pattern"]],decls:56,vars:4,consts:[[1,"mb-4"],[3,"code","language"],[1,"mt-4"],[1,"hljs-attr"],["start","2"]],template:function(i,c){i&1&&(t(0,"h1"),e(1,"Singleton Pattern"),n(),t(2,"div",0),e(3,` Singleton is a creational design pattern, which ensures that only one object of its kind exists and provides a single point of access to it for any other code.
`),n(),t(4,"h2"),e(5,"Singleton Service"),n(),t(6,"div",0),e(7," Here\u2019s an example of a singleton service in Angular 19 using TypeScript:"),o(8,"br")(9,"br"),t(10,"ol")(11,"li")(12,"b"),e(13,"Creating the Singleton Service"),n()()(),t(14,"div"),e(15," In Angular, the service can still be provided at the root level to ensure that it follows the Singleton pattern. "),n()(),o(16,"app-code-highlight",1),t(17,"h4",2),e(18,"Key Points:"),n(),t(19,"ul")(20,"li")(21,"span",3),e(22,"providedIn: 'root'"),n(),e(23," ensures that the service is a singleton throughout the application (Angular will create it only once). "),n(),t(24,"li"),e(25," The "),t(26,"span",3),e(27,"getInstance()"),n(),e(28," method ensures that only one instance of the service is ever created. "),n()(),t(29,"ol",4)(30,"li")(31,"b"),e(32,"Using the Singleton Service in a Component"),n()()(),t(33,"div",0),e(34,` To use the singleton service in a component, you simply inject the service as usual.\xA0\xA0Angular ensures it\u2019s the same instance throughout the application.
`),n(),o(35,"app-code-highlight",1),t(36,"h4",2),e(37,"Explanation:"),n(),t(38,"ul")(39,"li"),e(40," In the service, "),t(41,"span",3),e(42,"getInstance()"),n(),e(43," controls the creation of the singleton instance.\xA0\xA0If the instance doesn\u2019t exist, it is created, otherwise the existing one is returned. "),n(),t(44,"li"),e(45," The component injects the "),t(46,"span",3),e(47,"SingletonService"),n(),e(48,", and you can use its "),t(49,"span",3),e(50,"getData()"),n(),e(51," method or any other methods you define. "),n()(),t(52,"h4",2),e(53,"Conclusion:"),n(),t(54,"div",0),e(55,` This pattern can be useful when you want to make sure that there is only one instance of a service managing shared state or performing a task that should only have a single point of execution.
`),n()),i&2&&(r(16),l("code",c.singletonPatternCode1)("language","typescript"),r(19),l("code",c.singletonPatternCode2)("language","typescript"))},dependencies:[g],encapsulation:2})};export{p as SingletonPatternComponent};
