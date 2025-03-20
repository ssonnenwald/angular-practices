import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-factory-pattern',
  imports: [CodeHighLightComponent],
  templateUrl: './factory-pattern.component.html',
  styleUrl: './factory-pattern.component.scss',
})
export class FactoryPatternComponent {
  public factoryPatternCode1: WritableSignal<string> =
    signal(`export interface Vehicle {
  startEngine(): string;
  stopEngine(): string;
}
`);

  public factoryPatternCode2: WritableSignal<string> =
    signal(`import { Vehicle } from './vehicle.interface';

export class Car implements Vehicle {
  startEngine(): string {
    return 'Car engine started.';
  }

  stopEngine(): string {
    return 'Car engine stopped.';
  }
}
`);

  public factoryPatternCode3: WritableSignal<string> =
    signal(`import { Vehicle } from './vehicle.interface';

export class Truck implements Vehicle {
  startEngine(): string {
    return 'Truck engine started.';
  }

  stopEngine(): string {
    return 'Truck engine stopped.';
  }
}
`);

  public factoryPatternCode4: WritableSignal<string> =
    signal(`import { Vehicle } from './vehicle.interface';

export class Bike implements Vehicle {
  startEngine(): string {
    return 'Bike engine started.';
  }

  stopEngine(): string {
    return 'Bike engine stopped.';
  }
}
`);

  public factoryPatternCode5: WritableSignal<string> =
    signal(`import { Vehicle } from './vehicle.interface';
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
`);

  public factoryPatternCode6: WritableSignal<string> =
    signal(`import { Component } from '@angular/core';
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
`);
}
