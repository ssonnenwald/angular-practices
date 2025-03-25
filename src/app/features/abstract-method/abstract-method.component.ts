import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-abstract-method',
  imports: [CodeHighLightComponent],
  templateUrl: './abstract-method.component.html',
  styleUrl: './abstract-method.component.scss',
})
export default class AbstractMethodComponent {
  public abstractMethodCode1: WritableSignal<string> =
    signal(`export abstract class NotificationService {
  // Abstract method - subclasses must implement this
  abstract sendNotification(message: string, recipient: string): void;

  // Optional helper method that can be used by subclasses
  logNotification(message: string, recipient: string): void {
    console.log(\`Notification sent to \${recipient}: \${message}\`);
  }
}
`);

  public abstractMethodCode2: WritableSignal<string> =
    signal(`import { NotificationService } from './notification.service';

export class EmailNotificationService extends NotificationService {
  sendNotification(message: string, recipient: string): void {
    // Custom logic for sending an email
    this.logNotification(message, recipient);  // Log the notification
    console.log(\`Sending Email: "\${message}" to \${recipient}\`);
  }
}
`);

  public abstractMethodCode3: WritableSignal<string> =
    signal(`import { NotificationService } from './notification.service';

export class SMSNotificationService extends NotificationService {
  sendNotification(message: string, recipient: string): void {
    // Custom logic for sending an SMS
    this.logNotification(message, recipient);  // Log the notification
    console.log(\`Sending SMS: "\${message}" to \${recipient}\`);
  }
}
`);

  public abstractMethodCode4: WritableSignal<string> =
    signal(`import { Component } from '@angular/core';
import { EmailNotificationService } from './email-notification.service';
import { SMSNotificationService } from './sms-notification.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Abstract Method Example</h1>
    <div>
      <label for="notificationType">Choose Notification Type:</label>
      <select id="notificationType" (change)="onNotificationTypeChange($event)">
        <option value="email">Email</option>
        <option value="sms">SMS</option>
      </select>
    </div>
    <div>
      <button (click)="sendNotification()">Send Notification</button>
    </div>
    <div *ngIf="notificationResult">
      <h3>Notification Sent:</h3>
      <pre>{{ notificationResult }}</pre>
    </div>
  \`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  notificationResult: string | null = null;
  private notificationService!: NotificationService;

  // Default to Email Notification Service
  constructor() {
    this.notificationService = new EmailNotificationService();
  }

  // Switch between Email and SMS notification services
  onNotificationTypeChange(event: Event): void {
    const type = (event.target as HTMLSelectElement).value;
    if (type === 'sms') {
      this.notificationService = new SMSNotificationService();
    } else {
      this.notificationService = new EmailNotificationService();
    }
  }

  // Call the sendNotification method of the selected service
  sendNotification(): void {
    const message = 'Hello, this is a test notification!';
    const recipient = 'user@example.com';
    this.notificationService.sendNotification(message, recipient);
    this.notificationResult = \`Notification sent using \${this.notificationService.constructor.name}\`;
  }
}
`);
}
