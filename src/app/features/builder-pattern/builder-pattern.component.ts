import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-builder-pattern',
  imports: [CodeHighLightComponent],
  templateUrl: './builder-pattern.component.html',
  styleUrl: './builder-pattern.component.scss',
})
export class BuilderPatternComponent {
  public builderPatternCode1: WritableSignal<string> =
    signal(`export class Car {
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
`);

  public builderPatternCode2: WritableSignal<string> =
    signal(`export class CarBuilder {
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
`);

  public builderPatternCode3: WritableSignal<string> =
    signal(`import { Component } from '@angular/core';
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
`);
}
