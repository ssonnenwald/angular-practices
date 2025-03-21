import{a as p}from"./chunk-OEMQRESF.js";import"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as l,_a as m,jb as o,nb as i,ob as t,pb as n,ra as a}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var u=class d{builderPatternCode1=a(`export class Car {
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
`);builderPatternCode2=a(`export class CarBuilder {
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
`);builderPatternCode3=a(`import { Component } from '@angular/core';
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
`);static \u0275fac=function(r){return new(r||d)};static \u0275cmp=m({type:d,selectors:[["app-builder-pattern"]],decls:98,vars:6,consts:[[1,"mb-4"],[3,"code","language"],["start","2"],[1,"hljs-attr"],["start","3"],[1,"mt-4"]],template:function(r,s){r&1&&(i(0,"h1"),e(1,"Builder Pattern"),t(),i(2,"div",0),e(3,` The Builder Pattern is a creational design pattern that allows you to construct complex objects step by step, without needing to specify all of the details in the constructor.\xA0\xA0In Angular, you could use the Builder pattern to construct an object that has many optional fields or complicated configuration.
`),t(),i(4,"h2"),e(5,"Implementation"),t(),i(6,"div",0),e(7," Here's an example of implementing the Builder Pattern using Angular 19 with standalone components."),n(8,"br")(9,"br"),i(10,"ol")(11,"li")(12,"b"),e(13,"Create the Product (Object to Build)"),t()()(),i(14,"div",0),e(15," In this example, the product we are building is a "),i(16,"b"),e(17,"Car"),t(),e(18,". "),t(),n(19,"app-code-highlight",1),i(20,"ol",2)(21,"li")(22,"b"),e(23,"Create the Builder (To Build the Car)"),t()()(),i(24,"div",0),e(25," Now we define the "),i(26,"b"),e(27,"CarBuilder"),t(),e(28,", which helps us create a "),i(29,"span",3),e(30,"Car"),t(),e(31," step by step: "),t(),n(32,"app-code-highlight",1),i(33,"ol",4)(34,"li")(35,"b"),e(36,"Create the Standalone Component (To Use the Builder)"),t()()(),i(37,"div",0),e(38," Now, let's create a "),i(39,"b"),e(40,"Standalone Angular 19 Component"),t(),e(41," to use the Builder pattern to construct a "),i(42,"span",3),e(43,"Car"),t(),e(44,". "),t(),n(45,"app-code-highlight",1),t(),i(46,"h4",5),e(47,"Explanation:"),t(),i(48,"ul")(49,"li")(50,"b"),e(51,"Car Class"),t(),e(52,":\xA0\xA0This is the product being created by the builder. It has attributes like "),i(53,"span",3),e(54,"make"),t(),e(55,", "),i(56,"span",3),e(57,"model"),t(),e(58,", "),i(59,"span",3),e(60,"color"),t(),e(61,", and "),i(62,"span",3),e(63,"engine"),t(),e(64,", which are assigned by the "),i(65,"span",3),e(66,"CarBuilder"),t(),e(67,". "),t(),i(68,"li")(69,"b"),e(70,"CarBuilder Class"),t(),e(71,":\xA0\xA0It allows us to configure the car step by step. We can set the "),i(72,"span",3),e(73,"color"),t(),e(74," and "),i(75,"span",3),e(76,"engine"),t(),e(77," types using method chaining. After all steps are completed, we call "),i(78,"span",3),e(79,"build()"),t(),e(80," to construct the car. "),t(),i(81,"li")(82,"b"),e(83,"AppComponent"),t(),e(84,":\xA0\xA0In the "),i(85,"span",3),e(86,"AppComponent"),t(),e(87,", we create a car using the builder, specify the attributes, and display the details in the template. "),t()(),i(88,"h4",5),e(89,"Conclusion:"),t(),i(90,"div",0),e(91," This example shows how you can use the "),i(92,"b"),e(93,"Builder Pattern"),t(),e(94," in "),i(95,"b"),e(96,"Angular 19"),t(),e(97,` with standalone components to construct objects step by step.\xA0\xA0The key benefit of the Builder pattern here is that it gives you flexibility in how the car is built, without needing to pass all values through a complex constructor.
`),t()),r&2&&(l(19),o("code",s.builderPatternCode1)("language","typescript"),l(13),o("code",s.builderPatternCode2)("language","typescript"),l(13),o("code",s.builderPatternCode3)("language","typescript"))},dependencies:[p],encapsulation:2})};export{u as BuilderPatternComponent};
