import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-facade-pattern',
  imports: [CodeHighLightComponent],
  templateUrl: './facade-pattern.component.html',
  styleUrl: './facade-pattern.component.scss',
})
export class FacadePatternComponent {
  public facadePatternCode1: WritableSignal<string> =
    signal(`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  login(username: string, password: string): string {
    // Simulate login logic
    console.log(\`Logging in user \${username}\`);
    return \`User \${username} logged in successfully\`;
  }

  logout(): string {
    // Simulate logout logic
    console.log('Logging out');
    return 'User logged out';
  }
}
`);

  public facadePatternCode2: WritableSignal<string> =
    signal(`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  updateProfile(name: string, email: string): string {
    // Simulate updating profile
    console.log(\`Updating profile for \${name}\`);
    return \`Profile updated for \${name} with email \${email}\`;
  }
}
`);

  public facadePatternCode3: WritableSignal<string> =
    signal(`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  sendNotification(message: string): string {
    // Simulate sending a notification
    console.log(\`Sending notification: \${message}\`);
    return \`Notification sent: \${message}\`;
  }
}
`);

  public facadePatternCode4: WritableSignal<string> =
    signal(`import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ProfileService } from './profile.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class UserFacadeService {
  constructor(
    private authService: AuthenticationService,
    private profileService: ProfileService,
    private notificationService: NotificationService
  ) {}

  loginAndUpdateProfile(username: string, password: string, name: string, email: string): string {
    // Use AuthenticationService to log in
    const loginMessage = this.authService.login(username, password);

    // Use ProfileService to update profile
    const profileMessage = this.profileService.updateProfile(name, email);

    // Use NotificationService to notify the user
    const notificationMessage = this.notificationService.sendNotification('Profile updated successfully');

    // Combine the results
    return \`\${loginMessage}\\n\${profileMessage}\\n\${notificationMessage}\`;
  }

  logoutAndNotify(): string {
    // Use AuthenticationService to log out
    const logoutMessage = this.authService.logout();

    // Use NotificationService to notify the user
    const notificationMessage = this.notificationService.sendNotification('You have been logged out');

    // Combine the results
    return \`\${logoutMessage}\n\${notificationMessage}\`;
  }
}
`);

  public facadePatternCode5: WritableSignal<string> =
    signal(`import { Component } from '@angular/core';
import { UserFacadeService } from './user-facade.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`<h1>Facade Pattern in Angular 19</h1>
            <div>
              <button (click)="performLogin()">Login and Update Profile</button>
              <button (click)="performLogout()">Logout</button>
              <pre>{{ resultMessage }}</pre>
            </div>\`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resultMessage: string = '';

  constructor(private userFacade: UserFacadeService) {}

  performLogin(): void {
    this.resultMessage = this.userFacade.loginAndUpdateProfile(
      'john_doe',
      'password123',
      'John Doe',
      'john.doe@example.com'
    );
  }

  performLogout(): void {
    this.resultMessage = this.userFacade.logoutAndNotify();
  }
}
`);
}
