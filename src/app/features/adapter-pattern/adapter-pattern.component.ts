import { Component } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-adapter-pattern',
  imports: [CodeHighLightComponent],
  templateUrl: './adapter-pattern.component.html',
  styleUrl: './adapter-pattern.component.scss',
})
export class AdapterPatternComponent {
  public adapterPatternCode1 = `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LegacyUserService {
  // The legacy method to get user data
  getUserDataFromLegacySystem(): string {
    // Simulating a response from a legacy system
    console.log('Fetching data from legacy system...');
    return 'Legacy User: John Doe, Age: 30';
  }
}
`;

  public adapterPatternCode2 = `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  // The new method with a modern interface
  getUserInfo(): { name: string; age: number } {
    // Simulating a response from the new system
    console.log('Fetching data from new system...');
    return { name: 'John Doe', age: 30 };
  }
}
`;

  public adapterPatternCode3 = `import { Injectable } from '@angular/core';
import { LegacyUserService } from './legacy-user.service';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserAdapterService {
  constructor(
    private legacyUserService: LegacyUserService,
    private newUserService: NewUserService
  ) {}

  // Adapter method that combines legacy and modern interfaces
  getUserInfo(): { name: string; age: number } {
    // We can either use the legacy service or the new service
    // For this example, we'll adapt the legacy method to match the new interface
    const legacyData = this.legacyUserService.getUserDataFromLegacySystem();
    
    // Transform legacy data into the new format
    const [name, age] = legacyData.replace('Legacy User: ', '').split(', Age: ');
    
    return { name, age: Number(age) };
  }
}
`;

  public adapterPatternCode4 = `import { Component } from '@angular/core';
import { UserAdapterService } from './user-adapter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Adapter Pattern in Angular 19</h1>
    <button (click)="getUserInfo()">Get User Info</button>
    <p *ngIf="userInfo">{{ userInfo.name }} - {{ userInfo.age }} years old</p>
  \`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userInfo: { name: string; age: number } | null = null;

  constructor(private userAdapter: UserAdapterService) {}

  getUserInfo(): void {
    this.userInfo = this.userAdapter.getUserInfo();
  }
}
`;
}
