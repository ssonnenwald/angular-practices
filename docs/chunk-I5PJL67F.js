import{Ib as e,cb as g,fb as s,kb as d,lb as m,nb as p,sa as o,ub as i,vb as t,wb as a,zb as u}from"./chunk-DG46SKAS.js";var c=()=>[import("./chunk-OUUINALE.js").then(n=>n.CodeHighLightComponent)];function x(n,l){if(n&1&&a(0,"app-code-highlight",5),n&2){let r=u();p("code",r.builderPatternCode1)("language","typescript")}}function b(n,l){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function C(n,l){if(n&1&&a(0,"app-code-highlight",5),n&2){let r=u();p("code",r.builderPatternCode2)("language","typescript")}}function f(n,l){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function E(n,l){if(n&1&&a(0,"app-code-highlight",5),n&2){let r=u();p("code",r.builderPatternCode3)("language","typescript")}}function S(n,l){n&1&&(i(0,"span"),e(1,"Loading..."),t())}var h=class n{builderPatternCode1=o(`export class Car {
  private make: string;
  private model: string;
  private color: string;
  private engine: string;

  constructor(builder: CarBuilder) {
    this.make = builder.getMake();
    this.model = builder.getModel();
    this.color = builder.getColor();
    this.engine = builder.getEngine();
  }

  // Getters for the Car properties
  public getCarDetails(): string {
    return \`\${this.make} \${this.model} - \${this.color} with a \${this.engine} engine\`;
  }
}
`);builderPatternCode2=o(`export class CarBuilder {
  private make: string;
  private model: string;
  private color: string;
  private engine: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
    this.color = 'Black';  // Default color
    this.engine = 'V6';    // Default engine type
  }

  // Method to set color
  public setColor(color: string): CarBuilder {
    this.color = color;
    return this;
  }

  // Method to set engine type
  public setEngine(engine: string): CarBuilder {
    this.engine = engine;
    return this;
  }

  // Getters for each property
  public getMake(): string {
    return this.make;
  }

  public getModel(): string {
    return this.model;
  }

  public getColor(): string {
    return this.color;
  }

  public getEngine(): string {
    return this.engine;
  }

  // Build the Car object
  public build(): Car {
    return new Car(this);
  }
}
`);builderPatternCode3=o(`import { Component } from '@angular/core';
import { CarBuilder } from './car.builder';
import { Car } from './car.model';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`<h1>Builder Pattern in Angular 19</h1>
            <p>{{ carDetails }}</p>\`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  carDetails: string;

  constructor() {
    // Using the Builder pattern to create a custom car
    const car: Car = new CarBuilder('Toyota', 'Camry')
      .setColor('Blue')
      .setEngine('Hybrid')
      .build();

    // Get the details of the car
    this.carDetails = car.getCarDetails();
  }
}
`);static \u0275fac=function(r){return new(r||n)};static \u0275cmp=g({type:n,selectors:[["app-builder-pattern"]],decls:107,vars:0,consts:[[1,"mb-4"],["start","2"],[1,"hljs-attr"],["start","3"],[1,"mt-4"],[3,"code","language"]],template:function(r,B){r&1&&(i(0,"h1"),e(1,"Builder Pattern"),t(),i(2,"div",0),e(3,` The Builder Pattern is a creational design pattern that allows you to construct complex objects step by step, without needing to specify all of the details in the constructor.\xA0\xA0In Angular, you could use the Builder pattern to construct an object that has many optional fields or complicated configuration.
`),t(),i(4,"h2"),e(5,"Implementation"),t(),i(6,"div",0),e(7," Here's an example of implementing the Builder Pattern using Angular 19 with standalone components."),a(8,"br")(9,"br"),i(10,"ol")(11,"li")(12,"b"),e(13,"Create the Product (Object to Build)"),t()()(),i(14,"div",0),e(15," In this example, the product we are building is a "),i(16,"b"),e(17,"Car"),t(),e(18,". "),t(),s(19,x,1,2)(20,b,2,0),d(21,19,c,null,20),m(0,-1),i(23,"ol",1)(24,"li")(25,"b"),e(26,"Create the Builder (To Build the Car)"),t()()(),i(27,"div",0),e(28," Now we define the "),i(29,"b"),e(30,"CarBuilder"),t(),e(31,", which helps us create a "),i(32,"span",2),e(33,"Car"),t(),e(34," step by step: "),t(),s(35,C,1,2)(36,f,2,0),d(37,35,c,null,36),m(0,-1),i(39,"ol",3)(40,"li")(41,"b"),e(42,"Create the Standalone Component (To Use the Builder)"),t()()(),i(43,"div",0),e(44," Now, let's create a "),i(45,"b"),e(46,"Standalone Angular 19 Component"),t(),e(47," to use the Builder pattern to construct a "),i(48,"span",2),e(49,"Car"),t(),e(50,". "),t(),s(51,E,1,2)(52,S,2,0),d(53,51,c,null,52),m(0,-1),t(),i(55,"h4",4),e(56,"Explanation:"),t(),i(57,"ul")(58,"li")(59,"b"),e(60,"Car Class"),t(),e(61,":\xA0\xA0This is the product being created by the builder. It has attributes like "),i(62,"span",2),e(63,"make"),t(),e(64,", "),i(65,"span",2),e(66,"model"),t(),e(67,", "),i(68,"span",2),e(69,"color"),t(),e(70,", and "),i(71,"span",2),e(72,"engine"),t(),e(73,", which are assigned by the "),i(74,"span",2),e(75,"CarBuilder"),t(),e(76,". "),t(),i(77,"li")(78,"b"),e(79,"CarBuilder Class"),t(),e(80,":\xA0\xA0It allows us to configure the car step by step. We can set the "),i(81,"span",2),e(82,"color"),t(),e(83," and "),i(84,"span",2),e(85,"engine"),t(),e(86," types using method chaining. After all steps are completed, we call "),i(87,"span",2),e(88,"build()"),t(),e(89," to construct the car. "),t(),i(90,"li")(91,"b"),e(92,"AppComponent"),t(),e(93,":\xA0\xA0In the "),i(94,"span",2),e(95,"AppComponent"),t(),e(96,", we create a car using the builder, specify the attributes, and display the details in the template. "),t()(),i(97,"h4",4),e(98,"Conclusion:"),t(),i(99,"div",0),e(100," This example shows how you can use the "),i(101,"b"),e(102,"Builder Pattern"),t(),e(103," in "),i(104,"b"),e(105,"Angular 19"),t(),e(106,` with standalone components to construct objects step by step.\xA0\xA0The key benefit of the Builder pattern here is that it gives you flexibility in how the car is built, without needing to pass all values through a complex constructor.
`),t())},encapsulation:2})};export{h as a};
