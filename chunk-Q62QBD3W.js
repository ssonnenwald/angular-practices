import{Bb as n,Cb as t,Db as l,Gb as d,Pb as e,hb as x,lb as c,qb as p,sb as s,ub as m,xa as o}from"./chunk-MYE3REJX.js";var h=()=>[import("./chunk-TLEZR6OQ.js").then(i=>i.CodeHighLightComponent)];function u(i,r){if(i&1&&l(0,"app-code-highlight",6),i&2){let a=d();m("code",a.factoryPatternCode1)("language","typescript")}}function g(i,r){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function y(i,r){if(i&1&&l(0,"app-code-highlight",6),i&2){let a=d();m("code",a.factoryPatternCode2)("language","typescript")}}function E(i,r){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function C(i,r){if(i&1&&l(0,"app-code-highlight",6),i&2){let a=d();m("code",a.factoryPatternCode3)("language","typescript")}}function S(i,r){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function v(i,r){if(i&1&&l(0,"app-code-highlight",6),i&2){let a=d();m("code",a.factoryPatternCode4)("language","typescript")}}function b(i,r){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function P(i,r){if(i&1&&l(0,"app-code-highlight",6),i&2){let a=d();m("code",a.factoryPatternCode5)("language","typescript")}}function _(i,r){i&1&&(n(0,"span"),e(1,"Loading..."),t())}function T(i,r){if(i&1&&l(0,"app-code-highlight",6),i&2){let a=d();m("code",a.factoryPatternCode6)("language","typescript")}}function F(i,r){i&1&&(n(0,"span"),e(1,"Loading..."),t())}var f=class i{factoryPatternCode1=o(`export interface Vehicle {
  startEngine(): string;
  stopEngine(): string;
}
`);factoryPatternCode2=o(`import { Vehicle } from './vehicle.interface';

export class Car implements Vehicle {
  startEngine(): string {
    return 'Car engine started.';
  }

  stopEngine(): string {
    return 'Car engine stopped.';
  }
}
`);factoryPatternCode3=o(`import { Vehicle } from './vehicle.interface';

export class Truck implements Vehicle {
  startEngine(): string {
    return 'Truck engine started.';
  }

  stopEngine(): string {
    return 'Truck engine stopped.';
  }
}
`);factoryPatternCode4=o(`import { Vehicle } from './vehicle.interface';

export class Bike implements Vehicle {
  startEngine(): string {
    return 'Bike engine started.';
  }

  stopEngine(): string {
    return 'Bike engine stopped.';
  }
}
`);factoryPatternCode5=o(`import { Vehicle } from './vehicle.interface';
import { Car } from './car';
import { Truck } from './truck';
import { Bike } from './bike';

export class VehicleFactory {
  static createVehicle(type: string): Vehicle {
    switch (type) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      case 'bike':
        return new Bike();
      default:
        throw new Error('Invalid vehicle type');
    }
  }
}
`);factoryPatternCode6=o(`import { Component } from '@angular/core';
import { VehicleFactory } from './vehicle-factory';
import { Vehicle } from './vehicle.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`<h1>Factory Pattern in Angular 19</h1>
            <div>
              <label for="vehicleType">Choose a vehicle type:</label>
              <select id="vehicleType" (change)="createVehicle($event)">
                <option value="car">Car</option>
                <option value="truck">Truck</option>
                <option value="bike">Bike</option>
              </select>
            </div>
            <div *ngIf="vehicle">
              <p>{{ vehicleDetails }}</p>
            </div>\`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  vehicle: Vehicle | null = null;
  vehicleDetails: string = '';

  createVehicle(event: Event): void {
    const vehicleType = (event.target as HTMLSelectElement).value;
    this.vehicle = VehicleFactory.createVehicle(vehicleType);

    // Display the details of the created vehicle
    if (this.vehicle) {
      this.vehicleDetails = \`\${this.vehicle.startEngine()}<br>\${this.vehicle.stopEngine()}\`;
    }
  }
}
`);static \u0275fac=function(a){return new(a||i)};static \u0275cmp=x({type:i,selectors:[["app-factory-pattern"]],decls:165,vars:0,consts:[[1,"mb-4"],[1,"hljs-attr"],["start","2"],["start","3"],["start","4"],[1,"mt-4"],[3,"code","language"]],template:function(a,V){a&1&&(n(0,"h1"),e(1,"Factory Pattern"),t(),n(2,"div",0),e(3," The "),n(4,"b"),e(5,"Factory Pattern"),t(),e(6," is a creational design pattern used to create objects without specifying the exact class of object that will be created.\xA0\xA0In this pattern, a "),n(7,"span",1),e(8,"Factory"),t(),e(9,` method or class handles the object creation.
`),t(),n(10,"h2"),e(11,"Implementation"),t(),n(12,"div",0),e(13," In the case of Angular 19 with standalone components, let's create an example that demonstrates the Factory Pattern to instantiate different types of "),n(14,"span",1),e(15,"Vehicle"),t(),e(16," objects (e.g., "),n(17,"span",1),e(18,"Car"),t(),e(19,", "),n(20,"span",1),e(21,"Truck"),t(),e(22,", "),n(23,"span",1),e(24,"Bike"),t(),e(25,") based on some criteria."),l(26,"br")(27,"br"),n(28,"ol")(29,"li")(30,"b"),e(31,"Create the Product Interface (Common Interface for all Products)"),t()()(),n(32,"div",0),e(33," We define an interface for our vehicles to ensure that all of them have the same structure and can be used interchangeably. "),t(),c(34,u,1,2)(35,g,2,0),p(36,34,h,null,35),s(0,-1),n(38,"ol",2)(39,"li")(40,"b"),e(41,"Create the Concrete Products (Classes Implementing the Vehicle Interface)"),t()()(),n(42,"div",0),e(43," Here we define "),n(44,"span",1),e(45,"Car"),t(),e(46,", "),n(47,"span",1),e(48,"Truck"),t(),e(49,", and "),n(50,"span",1),e(51,"Bike"),t(),e(52," as concrete implementations of the "),n(53,"span",1),e(54,"Vehicle"),t(),e(55," interface. "),t(),c(56,y,1,2)(57,E,2,0),p(58,56,h,null,57),s(0,-1),c(60,C,1,2)(61,S,2,0),p(62,60,h,null,61),s(0,-1),c(64,v,1,2)(65,b,2,0),p(66,64,h,null,65),s(0,-1),n(68,"ol",3)(69,"li")(70,"b"),e(71,"Create the Factory (To Produce the Products)"),t()()(),n(72,"div",0),e(73," The "),n(74,"span",1),e(75,"Factory"),t(),e(76," class will return the correct type of vehicle based on the input. "),t(),c(77,P,1,2)(78,_,2,0),p(79,77,h,null,78),s(0,-1),n(81,"ol",4)(82,"li")(83,"b"),e(84,"Create the Standalone Component (To Use the Factory)"),t()()(),n(85,"div",0),e(86," In this "),n(87,"b"),e(88,"standalone component"),t(),e(89,", we will use the factory to create a specific type of vehicle based on user input. "),t(),c(90,T,1,2)(91,F,2,0),p(92,90,h,null,91),s(0,-1),t(),n(94,"h4",5),e(95,"Explanation:"),t(),n(96,"ul")(97,"li")(98,"b"),e(99,"Vehicle Interface"),t(),e(100,":\xA0\xA0This defines the methods ("),n(101,"span",1),e(102,"startEngine"),t(),e(103," and "),n(104,"span",1),e(105,"stopEngine"),t(),e(106,") that any vehicle must implement. "),t(),n(107,"li")(108,"b"),e(109,"Concrete Vehicles"),t(),e(110," ("),n(111,"span",1),e(112,"Car"),t(),e(113,", "),n(114,"span",1),e(115,"Truck"),t(),e(116,", "),n(117,"span",1),e(118,"Bike"),t(),e(119,"):\xA0\xA0Each "),n(120,"span",1),e(121,"vehicle"),t(),e(122," implements the Vehicle interface and provides its own version of "),n(123,"span",1),e(124,"startEngine"),t(),e(125," and "),n(126,"span",1),e(127,"stopEngine"),t(),e(128,". "),t(),n(129,"li")(130,"b"),e(131,"VehicleFactory"),t(),e(132,":\xA0\xA0The factory class decides which type of vehicle to create based on the input (e.g., "),n(133,"span",1),e(134,"car"),t(),e(135,", "),n(136,"span",1),e(137,"truck"),t(),e(138,", or "),n(139,"span",1),e(140,"bike"),t(),e(141,"). "),t(),n(142,"li")(143,"b"),e(144,"AppComponent"),t(),e(145,":\xA0\xA0This component allows the user to select a vehicle type from a dropdown, and it uses the "),n(146,"span",1),e(147,"VehicleFactory"),t(),e(148," to create the appropriate vehicle.\xA0\xA0The "),n(149,"span",1),e(150,"vehicleDetails"),t(),e(151," string is updated to show the actions ("),n(152,"span",1),e(153,"startEngine"),t(),e(154," and "),n(155,"span",1),e(156,"stopEngine"),t(),e(157,") of the created vehicle. "),t()(),n(158,"h4",5),e(159,"Conclusion:"),t(),n(160,"div",0),e(161," This example demonstrates how to use the "),n(162,"b"),e(163,"Factory Pattern"),t(),e(164,` in Angular 19 with standalone components to create different types of objects (vehicles) based on input.\xA0\xA0The Factory Pattern abstracts the creation process and allows for easy modification or extension of the product types in the future.
`),t())},encapsulation:2})};export{f as a};
