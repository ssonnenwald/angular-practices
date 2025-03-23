import{I as d}from"./chunk-4HLAVGCF.js";import{Hb as e,Sa as o,bb as m,mb as s,ta as a,tb as i,ub as t,vb as n}from"./chunk-ENZIFP74.js";var p=class r{abstractClassCode1=a(`export abstract class NotificationService {
  // Abstract method that subclasses must implement
  abstract sendNotification(message: string, recipient: string): void;

  // Common method that can be shared across subclasses
  logNotification(message: string, recipient: string): void {
    console.log(\`Sending message: "\${message}" to recipient: \${recipient}\`);
  }
}
`);abstractClassCode2=a(`import { NotificationService } from './notification.service';

export class EmailNotificationService extends NotificationService {
  sendNotification(message: string, recipient: string): void {
    // Logic to send an email
    this.logNotification(message, recipient);  // Log the notification
    console.log(\`Sending Email: "\${message}" to \${recipient}\`);
  }
}
`);abstractClassCode3=a(`import { NotificationService } from './notification.service';

export class SMSNotificationService extends NotificationService {
  sendNotification(message: string, recipient: string): void {
    // Logic to send an SMS
    this.logNotification(message, recipient);  // Log the notification
    console.log(\`Sending SMS: "\${message}" to \${recipient}\`);
  }
}
`);abstractClassCode4=a(`import { Component } from '@angular/core';
import { EmailNotificationService } from './email-notification.service';
import { SMSNotificationService } from './sms-notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Notification System</h1>
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
      <h3>Notification Result:</h3>
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

  // Switch between email and SMS notification services
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
`);static \u0275fac=function(c){return new(c||r)};static \u0275cmp=m({type:r,selectors:[["app-abstract-class"]],decls:120,vars:8,consts:[[1,"mb-4"],[1,"hljs-attr"],[3,"code","language"],["start","2"],["start","3"],[1,"mt-4"]],template:function(c,l){c&1&&(i(0,"h1"),e(1,"Abstract Class"),t(),i(2,"div",0),e(3," In Angular 19 with "),i(4,"b"),e(5,"standalone components"),t(),e(6,", you can use "),i(7,"b"),e(8,"abstract classes"),t(),e(9,` to define base functionality that must be shared across multiple classes.\xA0\xA0Abstract classes cannot be instantiated directly, but they can be extended by other classes, allowing for code reuse and providing a common structure for related components or services.
`),t(),i(10,"h2"),e(11,"Implementation"),t(),i(12,"div",0),e(13," Let\u2019s walk through an example where we use an "),i(14,"b"),e(15,"abstract class"),t(),e(16," to provide a base for different types of "),i(17,"b"),e(18,"notification services"),t(),e(19,".\xA0\xA0We\u2019ll create an abstract class "),i(20,"span",1),e(21,"NotificationService"),t(),e(22,", and then extend it to create concrete services for sending different types of notifications (e.g., "),i(23,"b"),e(24,"EmailNotificationService"),t(),e(25," and "),i(26,"b"),e(27,"SMSNotificationService"),t(),e(28,")."),n(29,"br")(30,"br"),i(31,"ol")(32,"li")(33,"b"),e(34,"Define the Abstract Class (NotificationService)"),t()()(),i(35,"div",0),e(36," The "),i(37,"b"),e(38,"abstract class"),t(),e(39," will define the structure for sending notifications.\xA0\xA0We\u2019ll declare an abstract method "),i(40,"span",1),e(41,"sendNotification()"),t(),e(42," that each subclass will need to implement. "),t(),n(43,"app-code-highlight",2),i(44,"ol",3)(45,"li")(46,"b"),e(47,"Concrete Classes (EmailNotificationService and SMSNotificationService)"),t()()(),i(48,"div",0),e(49," Now, let\u2019s implement the concrete subclasses, each implementing the "),i(50,"span",1),e(51,"sendNotification()"),t(),e(52," method in its own way. "),t(),n(53,"app-code-highlight",2)(54,"app-code-highlight",2),i(55,"ol",4)(56,"li")(57,"b"),e(58,"Standalone Component to Use the Notification Service"),t()()(),i(59,"div",0),e(60," Now we\u2019ll create a "),i(61,"b"),e(62,"standalone component"),t(),e(63," that will use the concrete classes ("),i(64,"span",1),e(65,"EmailNotificationService"),t(),e(66," and "),i(67,"span",1),e(68,"SMSNotificationService"),t(),e(69,") to send notifications.\xA0\xA0In this example, we will inject one of the services into the component based on user selection. "),t(),n(70,"app-code-highlight",2),i(71,"h4",5),e(72,"Explanation:"),t(),i(73,"ul")(74,"li")(75,"b"),e(76,"Abstract Class"),t(),e(77," ("),i(78,"span",1),e(79,"NotificationService"),t(),e(80,"):\xA0\xA0This class provides a common structure for the notification services.\xA0\xA0The abstract method "),i(81,"span",1),e(82,"sendNotification()"),t(),e(83," is meant to be implemented by the concrete classes.\xA0\xA0The logNotification() method is a shared function that both subclasses can use to log notification details. "),t(),i(84,"li")(85,"b"),e(86,"Concrete Classes"),t(),e(87," ("),i(88,"span",1),e(89,"EmailNotificationService"),t(),e(90," and "),i(91,"span",1),e(92,"SMSNotificationService"),t(),e(93,"):\xA0\xA0These classes extend the "),i(94,"span",1),e(95,"NotificationService"),t(),e(96," abstract class and implement the "),i(97,"span",1),e(98,"sendNotification()"),t(),e(99," method in their own way.\xA0\xA0Each class contains its own logic for sending a notification (email or SMS). "),t(),i(100,"li")(101,"b"),e(102,"AppComponent"),t(),e(103,":\xA0\xA0The component contains a simple UI that allows the user to select between Email and SMS as the notification type.\xA0\xA0Based on the selection, the component dynamically creates an instance of the respective notification service and uses it to send a notification. "),t()(),i(104,"h4",5),e(105,"Conclusion:"),t(),i(106,"div",0),e(107," This example demonstrates how to use an abstract class in Angular 19 with standalone components to create a flexible, extensible notification system.\xA0\xA0The "),i(108,"b"),e(109,"NotificationService"),t(),e(110," abstract class enforces a common structure, and the concrete classes ("),i(111,"span",1),e(112,"EmailNotificationService"),t(),e(113," and "),i(114,"span",1),e(115,"SMSNotificationService"),t(),e(116,") implement specific logic for different types of notifications."),n(117,"br")(118,"br"),e(119,"By using abstract classes, we can provide a clear contract for the subclass implementation, making it easy to add new types of notification services in the future. "),t()()),c&2&&(o(43),s("code",l.abstractClassCode1)("language","typescript"),o(10),s("code",l.abstractClassCode2)("language","typescript"),o(),s("code",l.abstractClassCode3)("language","typescript"),o(16),s("code",l.abstractClassCode4)("language","typescript"))},dependencies:[d],encapsulation:2})};export{p as a};
