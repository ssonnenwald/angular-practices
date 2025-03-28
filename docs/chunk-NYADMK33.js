import{h as f}from"./chunk-S5T3IAKO.js";import{Ib as e,Ta as h,cb as x,fb as r,kb as m,lb as d,nb as l,sa as c,ub as i,vb as t,wb as s,zb as p}from"./chunk-DG46SKAS.js";var S=()=>[f];function g(n,o){if(n&1&&s(0,"app-code-highlight",2),n&2){let a=p();l("code",a.abstractClassCode2)("language","typescript")}}function v(n,o){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function C(n,o){if(n&1&&s(0,"app-code-highlight",2),n&2){let a=p();l("code",a.abstractClassCode3)("language","typescript")}}function E(n,o){n&1&&(i(0,"span"),e(1,"Loading..."),t())}function N(n,o){if(n&1&&s(0,"app-code-highlight",2),n&2){let a=p();l("code",a.abstractClassCode4)("language","typescript")}}function A(n,o){n&1&&(i(0,"span"),e(1,"Loading..."),t())}var u=class n{abstractClassCode1=c(`export abstract class NotificationService {
  // Abstract method that subclasses must implement
  abstract sendNotification(message: string, recipient: string): void;

  // Common method that can be shared across subclasses
  logNotification(message: string, recipient: string): void {
    console.log(\`Sending message: "\${message}" to recipient: \${recipient}\`);
  }
}
`);abstractClassCode2=c(`import { NotificationService } from './notification.service';

export class EmailNotificationService extends NotificationService {
  sendNotification(message: string, recipient: string): void {
    // Logic to send an email
    this.logNotification(message, recipient);  // Log the notification
    console.log(\`Sending Email: "\${message}" to \${recipient}\`);
  }
}
`);abstractClassCode3=c(`import { NotificationService } from './notification.service';

export class SMSNotificationService extends NotificationService {
  sendNotification(message: string, recipient: string): void {
    // Logic to send an SMS
    this.logNotification(message, recipient);  // Log the notification
    console.log(\`Sending SMS: "\${message}" to \${recipient}\`);
  }
}
`);abstractClassCode4=c(`import { Component } from '@angular/core';
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
`);static \u0275fac=function(a){return new(a||n)};static \u0275cmp=x({type:n,selectors:[["app-abstract-class"]],decls:129,vars:2,consts:[[1,"mb-4"],[1,"hljs-attr"],[3,"code","language"],["start","2"],["start","3"],[1,"mt-4"]],template:function(a,b){a&1&&(i(0,"h1"),e(1,"Abstract Class"),t(),i(2,"div",0),e(3," In Angular 19 with "),i(4,"b"),e(5,"standalone components"),t(),e(6,", you can use "),i(7,"b"),e(8,"abstract classes"),t(),e(9,` to define base functionality that must be shared across multiple classes.\xA0\xA0Abstract classes cannot be instantiated directly, but they can be extended by other classes, allowing for code reuse and providing a common structure for related components or services.
`),t(),i(10,"h2"),e(11,"Implementation"),t(),i(12,"div",0),e(13," Let\u2019s walk through an example where we use an "),i(14,"b"),e(15,"abstract class"),t(),e(16," to provide a base for different types of "),i(17,"b"),e(18,"notification services"),t(),e(19,".\xA0\xA0We\u2019ll create an abstract class "),i(20,"span",1),e(21,"NotificationService"),t(),e(22,", and then extend it to create concrete services for sending different types of notifications (e.g., "),i(23,"b"),e(24,"EmailNotificationService"),t(),e(25," and "),i(26,"b"),e(27,"SMSNotificationService"),t(),e(28,")."),s(29,"br")(30,"br"),i(31,"ol")(32,"li")(33,"b"),e(34,"Define the Abstract Class (NotificationService)"),t()()(),i(35,"div",0),e(36," The "),i(37,"b"),e(38,"abstract class"),t(),e(39," will define the structure for sending notifications.\xA0\xA0We\u2019ll declare an abstract method "),i(40,"span",1),e(41,"sendNotification()"),t(),e(42," that each subclass will need to implement. "),t(),s(43,"app-code-highlight",2),i(44,"ol",3)(45,"li")(46,"b"),e(47,"Concrete Classes (EmailNotificationService and SMSNotificationService)"),t()()(),i(48,"div",0),e(49," Now, let\u2019s implement the concrete subclasses, each implementing the "),i(50,"span",1),e(51,"sendNotification()"),t(),e(52," method in its own way. "),t(),r(53,g,1,2)(54,v,2,0),m(55,53,S,null,54),d(0,-1),r(57,C,1,2)(58,E,2,0),m(59,57,S,null,58),d(0,-1),i(61,"ol",4)(62,"li")(63,"b"),e(64,"Standalone Component to Use the Notification Service"),t()()(),i(65,"div",0),e(66," Now we\u2019ll create a "),i(67,"b"),e(68,"standalone component"),t(),e(69," that will use the concrete classes ("),i(70,"span",1),e(71,"EmailNotificationService"),t(),e(72," and "),i(73,"span",1),e(74,"SMSNotificationService"),t(),e(75,") to send notifications.\xA0\xA0In this example, we will inject one of the services into the component based on user selection. "),t(),r(76,N,1,2)(77,A,2,0),m(78,76,S,null,77),d(0,-1),i(80,"h4",5),e(81,"Explanation:"),t(),i(82,"ul")(83,"li")(84,"b"),e(85,"Abstract Class"),t(),e(86," ("),i(87,"span",1),e(88,"NotificationService"),t(),e(89,"):\xA0\xA0This class provides a common structure for the notification services.\xA0\xA0The abstract method "),i(90,"span",1),e(91,"sendNotification()"),t(),e(92," is meant to be implemented by the concrete classes.\xA0\xA0The logNotification() method is a shared function that both subclasses can use to log notification details. "),t(),i(93,"li")(94,"b"),e(95,"Concrete Classes"),t(),e(96," ("),i(97,"span",1),e(98,"EmailNotificationService"),t(),e(99," and "),i(100,"span",1),e(101,"SMSNotificationService"),t(),e(102,"):\xA0\xA0These classes extend the "),i(103,"span",1),e(104,"NotificationService"),t(),e(105," abstract class and implement the "),i(106,"span",1),e(107,"sendNotification()"),t(),e(108," method in their own way.\xA0\xA0Each class contains its own logic for sending a notification (email or SMS). "),t(),i(109,"li")(110,"b"),e(111,"AppComponent"),t(),e(112,":\xA0\xA0The component contains a simple UI that allows the user to select between Email and SMS as the notification type.\xA0\xA0Based on the selection, the component dynamically creates an instance of the respective notification service and uses it to send a notification. "),t()(),i(113,"h4",5),e(114,"Conclusion:"),t(),i(115,"div",0),e(116," This example demonstrates how to use an abstract class in Angular 19 with standalone components to create a flexible, extensible notification system.\xA0\xA0The "),i(117,"b"),e(118,"NotificationService"),t(),e(119," abstract class enforces a common structure, and the concrete classes ("),i(120,"span",1),e(121,"EmailNotificationService"),t(),e(122," and "),i(123,"span",1),e(124,"SMSNotificationService"),t(),e(125,") implement specific logic for different types of notifications."),s(126,"br")(127,"br"),e(128,"By using abstract classes, we can provide a clear contract for the subclass implementation, making it easy to add new types of notification services in the future. "),t()()),a&2&&(h(43),l("code",b.abstractClassCode1)("language","typescript"))},dependencies:[f],encapsulation:2})};export{u as a};
