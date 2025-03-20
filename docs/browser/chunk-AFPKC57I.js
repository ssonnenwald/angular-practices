import{a as m}from"./chunk-OEMQRESF.js";import"./chunk-PEALLUVR.js";import"./chunk-YB4KKQIU.js";import"./chunk-4WPPCIBR.js";import"./chunk-ISSYNZCZ.js";import{Bb as e,Pa as a,_a as p,jb as r,nb as i,ob as t,pb as o,ra as n}from"./chunk-SY7OXONI.js";import"./chunk-EQDQRRRY.js";var d=class s{factoryPatternCode1=n(`export interface Vehicle {
  startEngine(): string;
  stopEngine(): string;
}
`);factoryPatternCode2=n(`import { Vehicle } from './vehicle.interface';

export class Car implements Vehicle {
  startEngine(): string {
    return 'Car engine started.';
  }

  stopEngine(): string {
    return 'Car engine stopped.';
  }
}
`);factoryPatternCode3=n(`import { Vehicle } from './vehicle.interface';

export class Truck implements Vehicle {
  startEngine(): string {
    return 'Truck engine started.';
  }

  stopEngine(): string {
    return 'Truck engine stopped.';
  }
}
`);factoryPatternCode4=n(`import { Vehicle } from './vehicle.interface';

export class Bike implements Vehicle {
  startEngine(): string {
    return 'Bike engine started.';
  }

  stopEngine(): string {
    return 'Bike engine stopped.';
  }
}
`);factoryPatternCode5=n(`import { Vehicle } from './vehicle.interface';
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
`);factoryPatternCode6=n(`import { Component } from '@angular/core';
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
`);static \u0275fac=function(c){return new(c||s)};static \u0275cmp=p({type:s,selectors:[["app-factory-pattern"]],decls:147,vars:12,consts:[[1,"mb-4"],[1,"hljs-attr"],[3,"code","language"],["start","2"],["start","3"],["start","4"],[1,"mt-4"]],template:function(c,l){c&1&&(i(0,"h1"),e(1,"Factory Pattern"),t(),i(2,"div",0),e(3," The "),i(4,"b"),e(5,"Factory Pattern"),t(),e(6," is a creational design pattern used to create objects without specifying the exact class of object that will be created.\xA0\xA0In this pattern, a "),i(7,"span",1),e(8,"Factory"),t(),e(9,` method or class handles the object creation.
`),t(),i(10,"h2"),e(11,"Implementation"),t(),i(12,"div",0),e(13," In the case of Angular 19 with standalone components, let's create an example that demonstrates the Factory Pattern to instantiate different types of "),i(14,"span",1),e(15,"Vehicle"),t(),e(16," objects (e.g., "),i(17,"span",1),e(18,"Car"),t(),e(19,", "),i(20,"span",1),e(21,"Truck"),t(),e(22,", "),i(23,"span",1),e(24,"Bike"),t(),e(25,") based on some criteria."),o(26,"br")(27,"br"),i(28,"ol")(29,"li")(30,"b"),e(31,"Create the Product Interface (Common Interface for all Products)"),t()()(),i(32,"div",0),e(33," We define an interface for our vehicles to ensure that all of them have the same structure and can be used interchangeably. "),t(),o(34,"app-code-highlight",2),i(35,"ol",3)(36,"li")(37,"b"),e(38,"Create the Concrete Products (Classes Implementing the Vehicle Interface)"),t()()(),i(39,"div",0),e(40," Here we define "),i(41,"span",1),e(42,"Car"),t(),e(43,", "),i(44,"span",1),e(45,"Truck"),t(),e(46,", and "),i(47,"span",1),e(48,"Bike"),t(),e(49," as concrete implementations of the "),i(50,"span",1),e(51,"Vehicle"),t(),e(52," interface. "),t(),o(53,"app-code-highlight",2)(54,"app-code-highlight",2)(55,"app-code-highlight",2),i(56,"ol",4)(57,"li")(58,"b"),e(59,"Create the Factory (To Produce the Products)"),t()()(),i(60,"div",0),e(61," The "),i(62,"span",1),e(63,"Factory"),t(),e(64," class will return the correct type of vehicle based on the input. "),t(),o(65,"app-code-highlight",2),i(66,"ol",5)(67,"li")(68,"b"),e(69,"Create the Standalone Component (To Use the Factory)"),t()()(),i(70,"div",0),e(71," In this "),i(72,"b"),e(73,"standalone component"),t(),e(74,", we will use the factory to create a specific type of vehicle based on user input. "),t(),o(75,"app-code-highlight",2),t(),i(76,"h4",6),e(77,"Explanation:"),t(),i(78,"ul")(79,"li")(80,"b"),e(81,"Vehicle Interface"),t(),e(82,":\xA0\xA0This defines the methods ("),i(83,"span",1),e(84,"startEngine"),t(),e(85," and "),i(86,"span",1),e(87,"stopEngine"),t(),e(88,") that any vehicle must implement. "),t(),i(89,"li")(90,"b"),e(91,"Concrete Vehicles"),t(),e(92," ("),i(93,"span",1),e(94,"Car"),t(),e(95,", "),i(96,"span",1),e(97,"Truck"),t(),e(98,", "),i(99,"span",1),e(100,"Bike"),t(),e(101,"):\xA0\xA0Each "),i(102,"span",1),e(103,"vehicle"),t(),e(104," implements the Vehicle interface and provides its own version of "),i(105,"span",1),e(106,"startEngine"),t(),e(107," and "),i(108,"span",1),e(109,"stopEngine"),t(),e(110,". "),t(),i(111,"li")(112,"b"),e(113,"VehicleFactory"),t(),e(114,":\xA0\xA0The factory class decides which type of vehicle to create based on the input (e.g., "),i(115,"span",1),e(116,"car"),t(),e(117,", "),i(118,"span",1),e(119,"truck"),t(),e(120,", or "),i(121,"span",1),e(122,"bike"),t(),e(123,"). "),t(),i(124,"li")(125,"b"),e(126,"AppComponent"),t(),e(127,":\xA0\xA0This component allows the user to select a vehicle type from a dropdown, and it uses the "),i(128,"span",1),e(129,"VehicleFactory"),t(),e(130," to create the appropriate vehicle.\xA0\xA0The "),i(131,"span",1),e(132,"vehicleDetails"),t(),e(133," string is updated to show the actions ("),i(134,"span",1),e(135,"startEngine"),t(),e(136," and "),i(137,"span",1),e(138,"stopEngine"),t(),e(139,") of the created vehicle. "),t()(),i(140,"h4",6),e(141,"Conclusion:"),t(),i(142,"div",0),e(143," This example demonstrates how to use the "),i(144,"b"),e(145,"Factory Pattern"),t(),e(146,` in Angular 19 with standalone components to create different types of objects (vehicles) based on input.\xA0\xA0The Factory Pattern abstracts the creation process and allows for easy modification or extension of the product types in the future.
`),t()),c&2&&(a(34),r("code",l.factoryPatternCode1)("language","typescript"),a(19),r("code",l.factoryPatternCode2)("language","typescript"),a(),r("code",l.factoryPatternCode3)("language","typescript"),a(),r("code",l.factoryPatternCode4)("language","typescript"),a(10),r("code",l.factoryPatternCode5)("language","typescript"),a(10),r("code",l.factoryPatternCode6)("language","typescript"))},dependencies:[m],encapsulation:2})};export{d as FactoryPatternComponent};
