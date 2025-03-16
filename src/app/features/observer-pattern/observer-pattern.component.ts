import { Component } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-observer-pattern',
  imports: [CodeHighLightComponent],
  templateUrl: './observer-pattern.component.html',
  styleUrl: './observer-pattern.component.scss',
})
export class ObserverPatternComponent {
  public observerPatternCode1: string = `import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // The weather data stream, initialized with a default weather state
  private weatherSubject = new BehaviorSubject<string>('Sunny');
  weather$ = this.weatherSubject.asObservable();

  // Method to update the weather
  updateWeather(weather: string): void {
    console.log(\`Weather updated to: \${weather}\`);
    this.weatherSubject.next(weather);
  }
}
`;

  public observerPatternCode2: string = `import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  template: \`
    <div>
      <h3>Weather Display 1</h3>
      <p>Current Weather: {{ weather }}</p>
    </div>
  \`,
  styleUrls: ['./weather-display.component.css'],
})
export class WeatherDisplayComponent implements OnInit, OnDestroy {
  weather: string = '';
  private weatherSubscription!: Subscription;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // Subscribe to the weather stream from the WeatherService (Observer)
    this.weatherSubscription = this.weatherService.weather$.subscribe(
      (weather) => {
        this.weather = weather;
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed to avoid memory leaks
    this.weatherSubscription.unsubscribe();
  }
}
`;

  public observerPatternCode3: string = `import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-display2',
  standalone: true,
  template: \`
    <div>
      <h3>Weather Display 2</h3>
      <p>Current Weather: {{ weather }}</p>
    </div>
  \`,
  styleUrls: ['./weather-display2.component.css'],
})
export class WeatherDisplay2Component implements OnInit, OnDestroy {
  weather: string = '';
  private weatherSubscription!: Subscription;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // Subscribe to the weather stream from the WeatherService (Observer)
    this.weatherSubscription = this.weatherService.weather$.subscribe(
      (weather) => {
        this.weather = weather;
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed to avoid memory leaks
    this.weatherSubscription.unsubscribe();
  }
}
`;

  public observerPatternCode4: string = `import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-update',
  standalone: true,
  template: \`
    <div>
      <h3>Weather Update</h3>
      <button (click)="updateWeather('Sunny')">Sunny</button>
      <button (click)="updateWeather('Rainy')">Rainy</button>
      <button (click)="updateWeather('Cloudy')">Cloudy</button>
    </div>
  \`,
  styleUrls: ['./weather-update.component.css'],
})
export class WeatherUpdateComponent {
  constructor(private weatherService: WeatherService) {}

  // Update the weather by calling the WeatherService
  updateWeather(weather: string): void {
    this.weatherService.updateWeather(weather);
  }
}
`;

  public observerPatternCode5: string = `import { Component } from '@angular/core';
import { WeatherUpdateComponent } from './weather-update.component';
import { WeatherDisplayComponent } from './weather-display.component';
import { WeatherDisplay2Component } from './weather-display2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Observer Pattern in Angular 19</h1>
    <app-weather-update></app-weather-update>
    <app-weather-display></app-weather-display>
    <app-weather-display2></app-weather-display2>
  \`,
  styleUrls: ['./app.component.css'],
  imports: [WeatherUpdateComponent, WeatherDisplayComponent, WeatherDisplay2Component],
})
export class AppComponent {}
`;
}
