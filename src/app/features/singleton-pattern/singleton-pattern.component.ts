import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-singleton-pattern',
  imports: [CodeHighLightComponent],
  templateUrl: './singleton-pattern.component.html',
  styleUrl: './singleton-pattern.component.scss',
})
export class SingletonPatternComponent {
  public singletonPatternCode1: WritableSignal<string> =
    signal(`import { Injectable } from '@angular/core';

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
`);

  public singletonPatternCode2: WritableSignal<string> =
    signal(`import { Component, OnInit } from '@angular/core';
import { SingletonService } from './singleton.service';

@Component({
  selector: \'app-root\',
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
`);
}
