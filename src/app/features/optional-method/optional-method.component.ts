import { Component } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-optional-method',
  imports: [CodeHighLightComponent],
  templateUrl: './optional-method.component.html',
  styleUrl: './optional-method.component.scss',
})
export class OptionalMethodComponent {
  public optionalMethodCode1 = `export interface NotificationService {
  sendNotification(message: string, recipient: string): void;

  // Optional method, not all services need to implement it
  trackDeliveryStatus?(recipient: string): string;
}
`;

  public optionalMethodCode2 = `import { NotificationService } from './notification.interface';

export class EmailNotificationService implements NotificationService {
  sendNotification(message: string, recipient: string): void {
    console.log(\`Sending Email: "\${message}" to \${recipient}\`);
  }

  // Implementing the optional method
  trackDeliveryStatus(recipient: string): string {
    return \`Tracking Email delivery to \${recipient}\`;
  }
}
`;

  public optionalMethodCode3 = `import { NotificationService } from './notification.interface';

export class SMSNotificationService implements NotificationService {
  sendNotification(message: string, recipient: string): void {
    console.log(\`Sending SMS: "\${message}" to \${recipient}\`);
  }

  // This service does not implement trackDeliveryStatus
}
`;

  public optionalMethodCode4 = `import { Component } from '@angular/core';
import { EmailNotificationService } from './email-notification.service';
import { SMSNotificationService } from './sms-notification.service';
import { NotificationService } from './notification.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Optional Method Example</h1>
    <div>
      <label for="notificationType">Choose Notification Type:</label>
      <select id="notificationType" (change)="onNotificationTypeChange($event)">
        <option value="email">Email</option>
        <option value="sms">SMS</option>
      </select>
    </div>
    <div>
      <button (click)="sendNotification()">Send Notification</button>
      <button (click)="trackStatus()">Track Delivery Status</button>
    </div>
    <div *ngIf="status">
      <h3>Status:</h3>
      <pre>{{ status }}</pre>
    </div>
  \`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  status: string | null = null;
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
  }

  // Call the trackDeliveryStatus method if it exists
  trackStatus(): void {
    if ('trackDeliveryStatus' in this.notificationService) {
      this.status = (this.notificationService as any).trackDeliveryStatus('user@example.com');
    } else {
      this.status = 'Tracking status is not available for this notification type.';
    }
  }
}
`;
}
